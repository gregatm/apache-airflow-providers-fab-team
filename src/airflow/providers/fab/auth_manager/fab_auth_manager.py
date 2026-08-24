#
# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
#   http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.
from __future__ import annotations

import logging
import threading
import warnings
import os
from pathlib import Path
from contextlib import suppress
from functools import cached_property
from typing import TYPE_CHECKING, Any
from urllib.parse import urljoin

from cachetools import TTLCache, cachedmethod
from fastapi import FastAPI, Request
from fastapi.middleware.wsgi import WSGIMiddleware
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from flask import current_app, g
from flask_appbuilder.const import AUTH_LDAP
from sqlalchemy import select
from sqlalchemy.exc import NoResultFound, SQLAlchemyError
from sqlalchemy.orm import Session, joinedload

from airflow.api_fastapi.app import AUTH_MANAGER_FASTAPI_APP_PREFIX
from airflow.api_fastapi.auth.managers.base_auth_manager import BaseAuthManager

try:
    from airflow.api_fastapi.auth.managers.base_auth_manager import ExtendedResourceMethod
except ImportError:
    from airflow.api_fastapi.auth.managers.base_auth_manager import ResourceMethod as ExtendedResourceMethod

from airflow.api_fastapi.auth.managers.models.resource_details import (
    AccessView,
    BackfillDetails,
    ConfigurationDetails,
    ConnectionDetails,
    DagAccessEntity,
    DagDetails,
    PoolDetails,
    TeamDetails,
    VariableDetails,
)
from airflow.api_fastapi.common.types import ExtraMenuItem, MenuItem
from airflow.exceptions import AirflowConfigException, AirflowProviderDeprecationWarning
from airflow.models import Connection, DagModel, Pool, Variable, Team
from airflow.providers.common.compat.sdk import AirflowException, conf
from airflow.providers.common.compat.security.access_view import (
    AUDIT_LOGS_ALL_ACCESS_VIEW,
    IMPORT_ERRORS_ALL_ACCESS_VIEW,
)
from airflow.providers.fab.auth_manager.models import Permission, Role, User
from airflow.providers.fab.auth_manager.models.anonymous_user import AnonymousUser
from airflow.providers.fab.version_compat import AIRFLOW_V_3_1_PLUS
from airflow.providers.fab.www.app import create_app
from airflow.providers.fab.www.security import permissions
from airflow.providers.fab.www.security.permissions import (
    ACTION_CAN_READ,
    RESOURCE_AUDIT_LOG,
    RESOURCE_AUDIT_LOG_ALL,
    RESOURCE_BACKFILL,
    RESOURCE_CLUSTER_ACTIVITY,
    RESOURCE_CONFIG,
    RESOURCE_CONNECTION,
    RESOURCE_DAG,
    RESOURCE_DAG_CODE,
    RESOURCE_DAG_DEPENDENCIES,
    RESOURCE_DAG_PREFIX,
    RESOURCE_DAG_RUN,
    RESOURCE_DAG_VERSION,
    RESOURCE_DAG_WARNING,
    RESOURCE_DOCS,
    RESOURCE_IMPORT_ERROR,
    RESOURCE_JOB,
    RESOURCE_PLUGIN,
    RESOURCE_POOL,
    RESOURCE_PROVIDER,
    RESOURCE_TASK_INSTANCE,
    RESOURCE_TASK_LOG,
    RESOURCE_TEAM,
    RESOURCE_TRIGGER,
    RESOURCE_VARIABLE,
    RESOURCE_WEBSITE,
    RESOURCE_XCOM,
)
from airflow.providers.fab.www.utils import get_fab_action_from_method_map
from airflow.utils.session import NEW_SESSION, create_session, provide_session

if TYPE_CHECKING:
    from flask import Flask
    from starlette.middleware import _MiddlewareFactory

    from airflow.api_fastapi.auth.managers.base_auth_manager import ResourceMethod
    from airflow.cli.cli_config import (
        CLICommand,
    )
    from airflow.providers.common.compat.assets import AssetAliasDetails, AssetDetails
    from airflow.providers.fab.auth_manager.security_manager.override import (
        FabAirflowSecurityManagerOverride,
    )
    from airflow.providers.fab.www.extensions.init_appbuilder import AirflowAppBuilder
    from airflow.providers.fab.www.security.permissions import (
        RESOURCE_ASSET,
        RESOURCE_ASSET_ALIAS,
    )
else:
    from airflow.providers.common.compat.security.permissions import (
        RESOURCE_ASSET,
        RESOURCE_ASSET_ALIAS,
    )

log = logging.getLogger(__name__)


_MAP_DAG_ACCESS_ENTITY_TO_FAB_RESOURCE_TYPE: dict[DagAccessEntity, tuple[str, ...]] = {
    DagAccessEntity.AUDIT_LOG: (RESOURCE_AUDIT_LOG,),
    DagAccessEntity.CODE: (RESOURCE_DAG_CODE,),
    DagAccessEntity.DEPENDENCIES: (RESOURCE_DAG_DEPENDENCIES,),
    DagAccessEntity.RUN: (RESOURCE_DAG_RUN,),
    # RESOURCE_TASK_INSTANCE has been originally misused. RESOURCE_TASK_INSTANCE referred to task definition
    # AND task instances without making the difference
    # To be backward compatible, we translate DagAccessEntity.TASK_INSTANCE to RESOURCE_TASK_INSTANCE AND
    # RESOURCE_DAG_RUN
    # See https://github.com/apache/airflow/pull/34317#discussion_r1355917769
    DagAccessEntity.TASK: (RESOURCE_TASK_INSTANCE,),
    DagAccessEntity.TASK_INSTANCE: (RESOURCE_DAG_RUN, RESOURCE_TASK_INSTANCE),
    DagAccessEntity.TASK_LOGS: (RESOURCE_TASK_LOG,),
    DagAccessEntity.VERSION: (RESOURCE_DAG_VERSION,),
    DagAccessEntity.WARNING: (RESOURCE_DAG_WARNING,),
    DagAccessEntity.XCOM: (RESOURCE_XCOM,),
}

_MAP_ACCESS_VIEW_TO_FAB_RESOURCE_TYPE = {
    AccessView.CLUSTER_ACTIVITY: RESOURCE_CLUSTER_ACTIVITY,
    AccessView.DOCS: RESOURCE_DOCS,
    AccessView.IMPORT_ERRORS: RESOURCE_IMPORT_ERROR,
    AccessView.JOBS: RESOURCE_JOB,
    AccessView.PLUGINS: RESOURCE_PLUGIN,
    AccessView.PROVIDERS: RESOURCE_PROVIDER,
    AccessView.TRIGGERS: RESOURCE_TRIGGER,
    AccessView.WEBSITE: RESOURCE_WEBSITE,
}

# ``AccessView.IMPORT_ERRORS_ALL`` and ``AccessView.AUDIT_LOGS_ALL`` only exist on
# core >= 3.4.0; the compat shim yields ``None`` on older core so this provider still
# imports there.
if IMPORT_ERRORS_ALL_ACCESS_VIEW is not None:
    _MAP_ACCESS_VIEW_TO_FAB_RESOURCE_TYPE[IMPORT_ERRORS_ALL_ACCESS_VIEW] = RESOURCE_IMPORT_ERROR_ALL
if AUDIT_LOGS_ALL_ACCESS_VIEW is not None:
    _MAP_ACCESS_VIEW_TO_FAB_RESOURCE_TYPE[AUDIT_LOGS_ALL_ACCESS_VIEW] = RESOURCE_AUDIT_LOG_ALL

_MAP_MENU_ITEM_TO_FAB_RESOURCE_TYPE = {
    MenuItem.ASSETS: RESOURCE_ASSET,
    MenuItem.AUDIT_LOG: RESOURCE_AUDIT_LOG,
    MenuItem.CONFIG: RESOURCE_CONFIG,
    MenuItem.CONNECTIONS: RESOURCE_CONNECTION,
    MenuItem.DAGS: RESOURCE_DAG,
    MenuItem.DOCS: RESOURCE_DOCS,
    MenuItem.PLUGINS: RESOURCE_PLUGIN,
    MenuItem.POOLS: RESOURCE_POOL,
    MenuItem.PROVIDERS: RESOURCE_PROVIDER,
    MenuItem.VARIABLES: RESOURCE_VARIABLE,
    MenuItem.XCOMS: RESOURCE_XCOM,
}

CACHE_TTL = conf.getint("fab", "cache_ttl", fallback=30)

if AIRFLOW_V_3_1_PLUS:
    from airflow.providers.fab.www.security.permissions import RESOURCE_HITL_DETAIL

    _MAP_MENU_ITEM_TO_FAB_RESOURCE_TYPE[MenuItem.REQUIRED_ACTIONS] = RESOURCE_HITL_DETAIL
    _MAP_DAG_ACCESS_ENTITY_TO_FAB_RESOURCE_TYPE[DagAccessEntity.HITL_DETAIL] = (RESOURCE_HITL_DETAIL,)

if hasattr(MenuItem, "DEADLINES"):
    _MAP_MENU_ITEM_TO_FAB_RESOURCE_TYPE[MenuItem.DEADLINES] = RESOURCE_DAG_RUN


class FabAuthManager(BaseAuthManager[User]):
    """
    Flask-AppBuilder auth manager.

    This auth manager is responsible for providing a backward compatible user management experience to users.
    """

    cache: TTLCache = TTLCache(maxsize=1024, ttl=CACHE_TTL)
    appbuilder: AirflowAppBuilder | None = None
    flask_app: Flask | None = None
    _flask_app_lock = threading.Lock()

    def init_flask_resources(self) -> None:
        self._sync_appbuilder_roles()

    @cached_property
    def apiserver_endpoint(self) -> str:
        return conf.get("api", "base_url", fallback="/")

    @staticmethod
    def get_cli_commands() -> list[CLICommand]:
        """Vends CLI commands to be included in Airflow CLI."""
        from airflow.providers.fab.cli.definition import get_fab_cli_commands

        return get_fab_cli_commands()

    def get_fastapi_app(self) -> FastAPI | None:
        """Get the FastAPI app."""
        from airflow.providers.fab.auth_manager.api_fastapi.routes.router import (
            auth_router,
            fab_router,
            register_routes,
        )

        dev_mode = os.environ.get("DEV_FAB_MODE", str(False)) == "true"
        directory = Path(__file__).parent.joinpath("ui", "dev" if dev_mode else "dist")
        directory.mkdir(exist_ok=True)

        templates = Jinja2Templates(directory=directory)

        flask_app = create_app(enable_plugins=False)
        self.flask_app = flask_app

        app = FastAPI(
            title="FAB auth manager API",
            description=(
                "This is FAB auth manager API. This API is only available if the auth manager used in "
                "the Airflow environment is FAB auth manager. "
                "This API provides endpoints to manage users and permissions managed by the FAB auth "
                "manager."
            ),
        )

        register_routes()
        app.include_router(auth_router)
        app.include_router(fab_router)

        # Session cleanup middleware to prevent PendingRollbackError.
        # FAB's Flask views (e.g., /users/list/, /roles/list/) are mounted below via
        # WSGIMiddleware. These views use settings.Session (SQLAlchemy scoped_session),
        # but unlike a native Flask app where teardown_appcontext calls Session.remove(),
        # the WSGI wrapper does not trigger Flask's teardown hooks.
        # Without explicit cleanup, sessions remain in "idle in transaction" state.
        # When the database connection times out (e.g., PostgreSQL's
        # idle_in_transaction_session_timeout), subsequent requests reusing the
        # invalidated session raise PendingRollbackError.
        @app.middleware("http")
        async def cleanup_session_middleware(request, call_next):
            try:
                response = await call_next(request)
                return response
            finally:
                from airflow import settings

                if settings.Session:
                    try:
                        settings.Session.remove()
                    except Exception:
                        log.warning("Failed to remove session during cleanup", exc_info=True)



        @app.get("/login", response_class=HTMLResponse, include_in_schema=False)
        def webapp(request: Request):
            return templates.TemplateResponse(
                request,
                "/index.html",
                {"backend_server_base_url": request.base_url.path},
                media_type="text/html",
            )

        app.mount("/fab", WSGIMiddleware(flask_app))
        app.mount("/static/i18n/locales",
            StaticFiles(
                directory=Path(__file__).parent.joinpath("ui", "public", "locales"),
                html=True,
            ),
            name="fab_auth_manager_ui_folder",)
        app.mount("/static",
            StaticFiles(
                directory=directory,
                html=True,
            ),
            name="fab_auth_manager_ui_folder",)

        @app.get("/{rest_of_path:path}", response_class=HTMLResponse, include_in_schema=False)
        def webapp(request: Request, rest_of_path: str):
            return templates.TemplateResponse(
                request,
                "/index.html",
                {"backend_server_base_url": request.base_url.path},
                media_type="text/html",
            )

        return app

    def get_user(self) -> User:
        """
        Return the user associated to the user in session.

        Attempt to find the current user in g.user, as defined by the kerberos authentication backend.
        If no such user is found, return the `current_user` local proxy object, linked to the user session.

        """
        from flask_login import current_user

        # If a user has gone through the Kerberos dance, the kerberos authentication manager
        # has linked it with a User model, stored in g.user, and not the session.
        if current_user.is_anonymous and getattr(g, "user", None) is not None and not g.user.is_anonymous:
            return g.user

        return current_user

    @property
    def session(self):
        return self.appbuilder.session

    @cachedmethod(lambda self: self.cache, key=lambda _, token: int(token["sub"]))
    def deserialize_user(self, token: dict[str, Any]) -> User:
        user_id = int(token["sub"])

        def _fetch_user() -> User:
            with create_session() as session:
                try:
                    return session.scalars(select(User).where(User.id == user_id)).one()
                except NoResultFound:
                    raise ValueError(f"User with id {token['sub']} not found")

        try:
            return _fetch_user()
        except SQLAlchemyError:
            # Discard the poisoned scoped session so the next request gets a
            # fresh connection from the pool instead of a PendingRollbackError.
            with suppress(Exception):
                self.session.remove()
            try:
                return _fetch_user()
            except SQLAlchemyError:
                # If retry also fails, remove the scoped session again to keep
                # future requests from reusing a broken transaction state.
                with suppress(Exception):
                    self.session.remove()
                raise

    def serialize_user(self, user: User) -> dict[str, Any]:
        return {"sub": str(user.id)}

    def is_logged_in(self) -> bool:
        """Return whether the user is logged in."""
        user = self.get_user()
        return bool(
            (self.appbuilder and self._get_auth_role_public()) or (not user.is_anonymous and user.is_active)
        )

    def _get_auth_role_public(self) -> str | None:
        """
        Return the role granted to anonymous users, or ``None`` if public access is disabled.

        Reads ``[fab] auth_role_public`` from the Airflow config first so this works
        during FastAPI startup, before any Flask application context exists. Falls back
        to ``AUTH_ROLE_PUBLIC`` on the Flask app config when an app context is available,
        which covers the legacy ``AUTH_ROLE_PUBLIC`` entry in ``webserver_config.py``.
        """
        role_public = conf.get("fab", "auth_role_public", fallback="") or None
        if role_public:
            return role_public
        if self.appbuilder is None:
            return None
        try:
            return self.appbuilder.app.config.get("AUTH_ROLE_PUBLIC", None)
        except RuntimeError:
            # ``appbuilder.app`` is a werkzeug ``LocalProxy``; accessing it outside a
            # Flask application context raises ``RuntimeError``. This happens during
            # FastAPI startup when ``get_fastapi_middlewares`` is invoked.
            return None

    @provide_session
    def build_public_user(self, *, session: Session = NEW_SESSION) -> AnonymousUser | None:
        """
        Build an :class:`AnonymousUser` pre-populated with the configured public role.

        Returns ``None`` when neither ``[fab] auth_role_public`` nor the legacy
        ``AUTH_ROLE_PUBLIC`` entry in ``webserver_config.py`` is set.

        The role and its permissions are resolved via the database so the caller does not
        need a Flask app/request context to use the returned user (see #60897).

        :meta private:
        """
        public_role_name = self._get_auth_role_public()
        if not public_role_name:
            return None

        user = AnonymousUser()
        role = session.scalar(select(Role).where(Role.name == public_role_name))
        if role is not None:
            # ``AnonymousUser.roles``/``perms`` normally resolve lazily through Flask's
            # ``current_app``. Writing ``_roles``/``_perms`` directly freezes a snapshot for
            # the lifetime of a single FastAPI authorization check.
            user._roles = {role}
            user._perms = {(perm.action.name, perm.resource.name, None) for perm in role.permissions}
        return user

    def get_fastapi_middlewares(self) -> list[tuple[_MiddlewareFactory[Any], dict[str, Any]]]:
        """Register the FAB public-access middleware when public access is configured."""
        if not self._get_auth_role_public():
            return []
        from airflow.providers.fab.auth_manager.middleware import FabAuthRolePublicMiddleware

        return [(FabAuthRolePublicMiddleware, {})]

    def create_token(self, headers: dict[str, str], body: dict[str, Any]) -> User | None:
        """
        Create a new token from a payload.

        By default, it uses basic authentication (username and password).
        Override this method to use a different authentication method (e.g. oauth).

        :param headers: request headers
        :param body: request body
        """
        if not body.get("username") or not body.get("password"):
            raise ValueError("Username and password must be provided")

        user: User | None = None

        if self.security_manager.auth_type == AUTH_LDAP:
            user = self.security_manager.auth_user_ldap(
                body["username"], body["password"], rotate_session_id=False
            )
        if user is None:
            user = self.security_manager.auth_user_db(
                body["username"], body["password"], rotate_session_id=False
            )

        return user

    def is_authorized_configuration(
        self,
        *,
        method: ResourceMethod,
        user: User,
        details: ConfigurationDetails | None = None,
    ) -> bool:
        config_section = details.section if details else None
        team_name = self._get_team_name(details)
        return self._is_authorized(method=method, resource_type=RESOURCE_CONFIG, user=user, resource_id=config_section, team_name=team_name)

    def is_authorized_connection(
        self,
        *,
        method: ResourceMethod,
        user: User,
        details: ConnectionDetails | None = None,
    ) -> bool:
        connection_id = details.conn_id if details else None
        team_name = self._get_team_name(details)
        return self._is_authorized(method=method, resource_type=RESOURCE_CONNECTION, user=user, resource_id=connection_id, team_name=team_name)

    def is_authorized_dag(
        self,
        *,
        method: ResourceMethod,
        user: User,
        access_entity: DagAccessEntity | None = None,
        details: DagDetails | None = None,
    ) -> bool:
        """
        Return whether the user is authorized to access the dag.

        There are multiple scenarios:

        1. ``method`` is "GET" and no details are provided which means the user wants to list Dags (or sub entities of Dags).
        2. ``access_entity`` is not provided which means the user wants to access the DAG itself and not a sub
            entity (e.g. Task instances).
        3. ``access_entity`` is provided which means the user wants to access a sub entity of the DAG
            (e.g. DAG runs).

            a. If ``method`` is GET, then check the user has READ permissions on the DAG and the sub entity.
            b. Else, check the user has EDIT permissions on the DAG and ``method`` on the sub entity.

        :param method: The method to authorize.
        :param user: The user performing the action.
        :param access_entity: The dag access entity.
        :param details: The dag details.
        """
        team_name = self._get_team_name(details)
        dag_id = details.id if details else None
        if access_entity:
            # If a sub-Dag entity is specified, check whether the user has access to it
            resource_types = self._get_fab_resource_types(access_entity)
            access_entity_authorized = all(
                # TODO: Does passing the dag resource id prevent any access to any submenus (team_name and resource_id being None causes special behaviour)
                self._is_authorized(method=method, resource_type=resource_type, user=user, resource_id=dag_id, team_name=team_name)
                for resource_type in resource_types
            )
            if access_entity == DagAccessEntity.RUN and details and details.id:
                # Check using the deprecated permission prefix "DAG Run" to check whether the user has access to dag runs
                is_authorized_run = self._is_authorized(
                    method=method,
                    resource_type=permissions.resource_name(details.id, RESOURCE_DAG_RUN),
                    user=user,
                    resource_id=details.id,
                    team_name=team_name
                )
                if not (is_authorized_run or access_entity_authorized):
                    return False
            elif not access_entity_authorized:
                return False

        if method == "GET" and (not details or not details.id):
            # Scenario 1
            return self._is_authorized_list_dags(user=user, team_name=team_name)
        if not access_entity:
            # Scenario 2
            return self._is_authorized_dag(method=method, details=details, user=user, team_name=team_name)
        # Scenario 3
        dag_method: ResourceMethod = "GET" if method == "GET" else "PUT"
        if (details and details.id) and not self._is_authorized_dag(
            method=dag_method, details=details, user=user, team_name=team_name
        ):
            return False
        return True

    def is_authorized_backfill(
        self,
        *,
        method: ResourceMethod,
        user: User,
        details: BackfillDetails | None = None,
    ) -> bool:
        # Method can be removed once the min Airflow version is >= 3.2.0.
        warnings.warn(
            "Use ``is_authorized_dag`` on ``DagAccessEntity.RUN`` instead for a dag level access control.",
            AirflowProviderDeprecationWarning,
            stacklevel=2,
        )
        backfill_id = str(details.id) if details else None
        return self._is_authorized(method=method, resource_type=RESOURCE_BACKFILL, resource_id=backfill_id, user=user)

    def is_authorized_asset(
        self, *, method: ResourceMethod, user: User, details: AssetDetails | None = None
    ) -> bool:
        asset_id = details.id if details else None
        return self._is_authorized(method=method, resource_type=RESOURCE_ASSET, resource_id=asset_id, user=user)

    def is_authorized_asset_alias(
        self,
        *,
        method: ResourceMethod,
        user: User,
        details: AssetAliasDetails | None = None,
    ) -> bool:
        asset_alias_id = details.id if details else None
        return self._is_authorized(method=method, resource_type=RESOURCE_ASSET_ALIAS, resource_id=asset_alias_id, user=user)

    def is_authorized_pool(
        self, *, method: ResourceMethod, user: User, details: PoolDetails | None = None
    ) -> bool:
        pool_name = details.name if details else None
        team_name = self._get_team_name(details)
        return self._is_authorized(method=method, resource_type=RESOURCE_POOL, user=user, resource_id=pool_name, team_name=team_name)

    def is_authorized_variable(
        self,
        *,
        method: ResourceMethod,
        user: User,
        details: VariableDetails | None = None,
    ) -> bool:
        variable_key = details.key if details else None
        team_name = self._get_team_name(details)
        print(f"is_authorized_variable: {details}, method: {method}, user: {user}")
        return self._is_authorized(method=method, resource_type=RESOURCE_VARIABLE, user=user, resource_id=variable_key, team_name=team_name)

    def is_authorized_team(
        self, *, method: ResourceMethod, user: User, details: TeamDetails | None = None
    ) -> bool:
        team_name = details.name if details else None
        return self._is_authorized(
            method=method,
            resource_type=RESOURCE_TEAM,
            user=user,
            resource_id=team_name,
            team_name=team_name,
        )

    def is_authorized_view(
        self, *, access_view: AccessView, user: User, team_name: str | None = None
    ) -> bool:
        # "Docs" are only links in the menu, there is no page associated
        method: ExtendedResourceMethod = "MENU" if access_view == AccessView.DOCS else "GET"
        return self._is_authorized(
            method=method,
            resource_type=_MAP_ACCESS_VIEW_TO_FAB_RESOURCE_TYPE[access_view],
            user=user,
            team_name=team_name,
        )

    def is_authorized_custom_view(
        self, *, method: ResourceMethod | str, resource_name: str, user: User
    ) -> bool:
        fab_action_name = get_fab_action_from_method_map().get(method, method)
        result = (fab_action_name, resource_name, None) in self._get_user_permissions(user)
        return result

    def filter_authorized_menu_items(self, menu_items: list[MenuItem], user: User) -> list[MenuItem]:
        return [
            menu_item
            for menu_item in menu_items
            if self._is_authorized(
                method="MENU",
                resource_type=_MAP_MENU_ITEM_TO_FAB_RESOURCE_TYPE.get(menu_item, menu_item.value),
                user=user
            )
        ]

    @cached_property
    def security_manager(self) -> FabAirflowSecurityManagerOverride:
        """Return the security manager specific to FAB."""
        from airflow.providers.fab.auth_manager.security_manager.override import (
            FabAirflowSecurityManagerOverride,
        )

        if not self.appbuilder:
            raise AirflowException("AppBuilder is not initialized.")

        sm_from_config = current_app.config.get("SECURITY_MANAGER_CLASS")
        if sm_from_config:
            if not issubclass(sm_from_config, FabAirflowSecurityManagerOverride):
                raise AirflowConfigException(
                    """Your CUSTOM_SECURITY_MANAGER must extend FabAirflowSecurityManagerOverride."""
                )
            return sm_from_config(self.appbuilder)

        return FabAirflowSecurityManagerOverride(self.appbuilder)

    def get_url_login(self, **kwargs) -> str:
        """Return the login page url."""
        return urljoin(self.apiserver_endpoint, f"{AUTH_MANAGER_FASTAPI_APP_PREFIX}/login/")

    def get_url_logout(self) -> str | None:
        """Return the logout page url."""
        return urljoin(self.apiserver_endpoint, f"{AUTH_MANAGER_FASTAPI_APP_PREFIX}/logout")

    def register_views(self) -> None:
        self.security_manager.register_views()

    def get_extra_menu_items(self, *, user: User) -> list[ExtraMenuItem]:
        # Contains the list of menu items. ``resource_type`` is the name of the resource in FAB
        # permission model to check whether the user is allowed to see this menu item
        items = [
            {
                "resource_type": "List Users",
                "text": "Users",
                "href": f"{AUTH_MANAGER_FASTAPI_APP_PREFIX}/users/list/",
            },
            {
                "resource_type": "List Roles",
                "text": "Roles",
                "href": f"{AUTH_MANAGER_FASTAPI_APP_PREFIX}/roles/list/",
            },
            {
                "resource_type": "List Groups",
                "text": "Groups",
                "href": f"{AUTH_MANAGER_FASTAPI_APP_PREFIX}/groups/list/",
            },
            {
                "resource_type": "Teams",
                "text": "Teams",
                "href": f"{AUTH_MANAGER_FASTAPI_APP_PREFIX}/teams/list/",
            }
        ]

        return [
            ExtraMenuItem(text=item["text"], href=item["href"])
            for item in items
            if self._is_authorized(method="MENU", resource_type=item["resource_type"], user=user)
        ]

    @staticmethod
    def get_db_manager() -> str | None:
        # This method can be removed once the min Airflow version supported in FAB provider is >= 3.2
        # https://github.com/apache/airflow/pull/62308 auto uses DB managers from installed providers
        return "airflow.providers.fab.auth_manager.models.db.FABDBManager"

    def _is_authorized(
        self,
        *,
        method: ExtendedResourceMethod,
        resource_type: str,
        user: User,
        resource_id: str | None = None,
        team_name: str | None = None,
    ) -> bool:
        """
        Return whether the user is authorized to perform a given action.

        :param method: the method to perform
        :param resource_type: the type of resource the user attempts to perform the action on
        :param user: the user performing the action

        :meta private:
        """

        fab_action = self._get_fab_action(method)
        user_permissions = self._get_user_permissions(user)
        """
        If it is a read action and neither a resource_id nor a team_name is specified, it is a generel request if
        a user has access to this resource. E.g. Navigating to dag overview wants to know if the
        user is even allowed to see any DAG, but obviously cannot specify a specific dag_id or team_name
        """
        if fab_action in [permissions.ACTION_CAN_READ, permissions.ACTION_CAN_ACCESS_MENU] and resource_id is None and team_name is None:
            result = (fab_action, resource_type) in map(lambda x: x[:2] , user_permissions)
        else:
            result = (fab_action, resource_type, None) in user_permissions \
                 or (fab_action, resource_type, team_name) in user_permissions
        return result

    def _is_authorized_dag(
        self,
        method: ResourceMethod,
        details: DagDetails | None,
        user: User,
        team_name: str | None,
    ) -> bool:
        """
        Return whether the user is authorized to perform a given action on a DAG.

        :param method: the method to perform
        :param details: details about the DAG
        :param user: the user performing the action

        :meta private:
        """
        team_name = team_name or self._get_team_name(details)
        dag_id = details.id if details else None
        is_global_authorized = self._is_authorized(method=method, resource_type=RESOURCE_DAG, user=user, resource_id=dag_id, team_name=team_name)
        if is_global_authorized:
            return True

        if details and details.id:
            # Check whether the user has permissions to access a specific DAG
            resource_dag_name = permissions.resource_name(details.id, RESOURCE_DAG)
            return self._is_authorized(method=method, resource_type=resource_dag_name, user=user, resource_id=details.id, team_name=team_name)
        return False

    def _is_authorized_list_dags(self, *, user: User, team_name: str | None) -> bool:
        """
        Return whether the user is authorized to list Dags.

        :param user: the user performing the action

        :meta private:
        """
        is_global_authorized = self._is_authorized(method="GET", resource_type=RESOURCE_DAG, user=user)
        if is_global_authorized:
            return True
        user_permissions = self._get_user_permissions(user)
        for action, resource, team in user_permissions:
            if action == ACTION_CAN_READ and (resource == RESOURCE_DAG or resource.startswith(RESOURCE_DAG_PREFIX)):
                return True
        return False

    def _get_teams(self) -> set[str]:
        if NEW_SESSION:
            NEW_SESSION.execute(select(Team.name)).scalars().all()
        return []

    @staticmethod
    def _get_team_name(
        details: ConnectionDetails | DagDetails | PoolDetails | VariableDetails | None,
    ) -> str | None:
        return getattr(details, "team_name", None) if details else None

    @staticmethod
    def _get_fab_action(method: ExtendedResourceMethod) -> str:
        """
        Convert the method to a FAB action.

        :param method: the method to convert

        :meta private:
        """
        fab_action_from_method_map = get_fab_action_from_method_map()
        if method not in fab_action_from_method_map:
            raise AirflowException(f"Unknown method: {method}")
        return fab_action_from_method_map[method]

    @staticmethod
    def _get_fab_resource_types(dag_access_entity: DagAccessEntity) -> tuple[str, ...]:
        """
        Convert a DAG access entity to a tuple of FAB resource type.

        :param dag_access_entity: the DAG access entity

        :meta private:
        """
        if dag_access_entity not in _MAP_DAG_ACCESS_ENTITY_TO_FAB_RESOURCE_TYPE:
            raise AirflowException(f"Unknown DAG access entity: {dag_access_entity}")
        return _MAP_DAG_ACCESS_ENTITY_TO_FAB_RESOURCE_TYPE[dag_access_entity]

    @staticmethod
    def _get_user_permissions(user: User):
        """
        Return the user permissions.

        :param user: the user to get permissions for

        :meta private:
        """
        # If the user gets deleted while being logged in
        if not user:
            return []
        return getattr(user, "perms") or []

    def _sync_appbuilder_roles(self):
        """
        Sync appbuilder roles to DB.

        :meta private:
        """
        # Garbage collect old permissions/views after they have been modified.
        # Otherwise, when the name of a view or menu is changed, the framework
        # will add the new Views and Menus names to the backend, but will not
        # delete the old ones.
        if conf.getboolean("fab", "UPDATE_FAB_PERMS"):
            self.security_manager.sync_roles()
