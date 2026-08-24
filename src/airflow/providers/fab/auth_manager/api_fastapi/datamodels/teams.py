from pydantic import Field
from airflow.api_fastapi.core_api.base import StrictBaseModel

class TeamBody(StrictBaseModel):
    name: str = Field(min_length=1)
