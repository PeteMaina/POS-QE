from sqlmodel import create_engine, Session, SQLModel
from app.core import config

# connect_args={"check_same_thread": False} is needed for SQLite
engine = create_engine(
    config.settings.DATABASE_URL, 
    echo=True, 
    connect_args={"check_same_thread": False}
)

def get_session():
    with Session(engine) as session:
        yield session

def create_db_and_tables():
    SQLModel.metadata.create_all(engine)
