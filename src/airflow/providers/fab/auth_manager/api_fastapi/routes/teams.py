from fastapi import Depends, HTTPException, Path, status

from airflow.configuration import conf
from airflow.api_fastapi.core_api.openapi.exceptions import create_openapi_http_exception_doc
from airflow.api_fastapi.core_api.datamodels.ui.teams import TeamResponse
from airflow.api_fastapi.logging.decorators import action_logging

from airflow.providers.fab.auth_manager.api_fastapi.datamodels.teams import TeamBody
from airflow.providers.fab.auth_manager.api_fastapi.security import requires_fab_custom_view
from airflow.providers.fab.auth_manager.api_fastapi.routes.router import fab_router
from airflow.providers.fab.auth_manager.api_fastapi.services.teams import FABAuthManagerTeams
from airflow.providers.fab.auth_manager.cli_commands.utils import get_application_builder
from airflow.providers.fab.www.security import permissions

@fab_router.post(
    "/teams",
    responses=create_openapi_http_exception_doc(
        [
            status.HTTP_400_BAD_REQUEST,
            status.HTTP_401_UNAUTHORIZED,
            status.HTTP_403_FORBIDDEN,
            status.HTTP_409_CONFLICT,
            status.HTTP_500_INTERNAL_SERVER_ERROR,
        ]
    ),
    dependencies=[Depends(action_logging()), Depends(requires_fab_custom_view("POST", permissions.RESOURCE_TEAM))],
)
def create_team(body: TeamBody) -> TeamResponse:
    if not conf.getboolean("core", "multi_team"):
        raise HTTPException(
            status.HTTP_403_FORBIDDEN, "Multi-team mode is not configured in the Airflow environment"
        )
    with get_application_builder():
        return FABAuthManagerTeams.create_team(body=body)

@fab_router.delete(
    "/teams/{teamname}",
    status_code=status.HTTP_204_NO_CONTENT,
    responses=create_openapi_http_exception_doc(
        [
            status.HTTP_401_UNAUTHORIZED,
            status.HTTP_403_FORBIDDEN,
            status.HTTP_404_NOT_FOUND,
        ]
    ),
    dependencies=[Depends(action_logging()), Depends(requires_fab_custom_view("DELETE", permissions.RESOURCE_TEAM))],
)
def delete_team(teamname: str = Path(..., min_length=1)):
    """Delete a user by username."""
    with get_application_builder():
        FABAuthManagerTeams.delete_team(team_name=teamname)


