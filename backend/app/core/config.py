from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "POS System"
    API_V1_STR: str = "/api/v1"
    DATABASE_URL: str = "sqlite:///./pos.db"

    class Config:
        case_sensitive = True

settings = Settings()
