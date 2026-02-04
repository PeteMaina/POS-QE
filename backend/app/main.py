from fastapi import FastAPI
from app.core import config
from app.api.v1.api import api_router
from app.db import session

app = FastAPI(title=config.settings.PROJECT_NAME, openapi_url=f"{config.settings.API_V1_STR}/openapi.json")

# Include Router
app.include_router(api_router, prefix=config.settings.API_V1_STR)

@app.on_event("startup")
def on_startup():
    session.create_db_and_tables()

@app.get("/")
def read_root():
    return {"message": "Welcome to the POS System API"}

@app.get("/health")
def health_check():
    return {"status": "ok"}
