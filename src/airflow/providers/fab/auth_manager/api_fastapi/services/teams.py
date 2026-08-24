import logging
from fastapi import HTTPException, status
from sqlalchemy import delete
from sqlalchemy.orm import Session
from airflow.models import Team
from airflow.utils.session import NEW_SESSION, provide_session
from airflow.api_fastapi.core_api.datamodels.ui.teams import TeamResponse

from airflow.providers.fab.auth_manager.api_fastapi.datamodels.teams import TeamBody

from airflow.providers.fab.auth_manager.security_manager.override import FabException

log = logging.getLogger(__name__)

class FABAuthManagerTeams:
    """Service layer for FAB Auth Manager team operations."""

    @classmethod
    @provide_session
    def create_team(cls, body: TeamBody, session: Session = NEW_SESSION) -> TeamResponse:
        team = None
        try:
            team = Team()
            team.name = body.name
            session.add(team)
            session.commit()
            log.info("Added team %s", team.name)
        except Exception as e:
            log.error("Error adding team to database. %s", e)
            session.rollback()
            raise FabException("Error adding team to database. %s") from e

        if not team:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail=f"Failed to add team `{body.name}`",
            )
        return TeamResponse.model_validate(team)

    @classmethod
    @provide_session
    def delete_team(cls, team_name: str, session: Session = NEW_SESSION) -> None:
        """Delete a team by name."""
        result = session.execute(delete(Team).where(Team.name == team_name))
        rows = getattr(result, "rowcount", 0) or 0
        if rows == 0:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"The User with username `{team_name}` was not found",
            )
        session.commit()


