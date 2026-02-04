from typing import Optional
from pydantic import BaseModel
from datetime import datetime

class UserBase(BaseModel):
    username: str
    role: str = "cashier"
    is_active: bool = True

class UserCreate(UserBase):
    password: str

class UserUpdate(BaseModel):
    username: Optional[str] = None
    password: Optional[str] = None
    role: Optional[str] = None
    is_active: Optional[bool] = None

class UserRead(UserBase):
    id: int
    created_at: datetime
    last_login: Optional[datetime]
    
    class Config:
        from_attributes = True
