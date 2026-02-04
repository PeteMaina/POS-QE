from typing import List, Annotated
from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session, select
from app.api import deps
from app.core import security
from app.db import session
from app.models.user import User
from app.schemas.user import UserCreate, UserRead, UserUpdate

router = APIRouter()

@router.post("/", response_model=UserRead)
def create_user(
    *,
    session: Annotated[Session, Depends(session.get_session)],
    user_in: UserCreate,
    current_user: Annotated[User, Depends(deps.get_current_user)],
):
    """
    Create new user. Only Admin can do this.
    """
    if current_user.role != "admin" and current_user.role != "owner":
        raise HTTPException(status_code=403, detail="Not enough permissions")
    
    user = session.exec(select(User).where(User.username == user_in.username)).first()
    if user:
        raise HTTPException(
            status_code=400,
            detail="The user with this username already exists in the system",
        )
    
    user = User.model_validate(user_in, update={"hashed_password": security.get_password_hash(user_in.password)})
    session.add(user)
    session.commit()
    session.refresh(user)
    return user

@router.get("/me", response_model=UserRead)
def read_user_me(
    current_user: Annotated[User, Depends(deps.get_current_user)]
):
    """
    Get current user.
    """
    return current_user

@router.get("/", response_model=List[UserRead])
def read_users(
    session: Annotated[Session, Depends(session.get_session)],
    current_user: Annotated[User, Depends(deps.get_current_user)],
    skip: int = 0,
    limit: int = 100,
):
    """
    Retrieve users.
    """
    if current_user.role != "admin" and current_user.role != "owner":
        raise HTTPException(status_code=403, detail="Not enough permissions")
    
    users = session.exec(select(User).offset(skip).limit(limit)).all()
    return users
