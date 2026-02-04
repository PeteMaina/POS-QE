from sqlmodel import Session, select
from app.db.session import engine, create_db_and_tables
from app.models.user import User
from app.core.security import get_password_hash

def init_db():
    create_db_and_tables()
    
    with Session(engine) as session:
        user = session.exec(select(User).where(User.username == "admin")).first()
        if not user:
            user = User(
                username="admin",
                hashed_password=get_password_hash("admin"),
                role="admin",
                is_active=True
            )
            session.add(user)
            session.commit()
            print("Superuser created: admin / admin")
        else:
            print("Superuser already exists")

if __name__ == "__main__":
    init_db()
