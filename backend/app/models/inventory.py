from typing import Optional, List
from sqlmodel import Field, SQLModel, Relationship
from datetime import datetime

class CategoryBase(SQLModel):
    name: str = Field(index=True, unique=True)
    description: Optional[str] = None

class Category(CategoryBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    products: List["Product"] = Relationship(back_populates="category")

class ProductBase(SQLModel):
    name: str = Field(index=True)
    sku: str = Field(index=True, unique=True)
    description: Optional[str] = None
    price: float = Field(default=0.0)
    cost_price: float = Field(default=0.0)
    stock_quantity: int = Field(default=0)
    category_id: Optional[int] = Field(default=None, foreign_key="category.id")
    image_url: Optional[str] = None
    barcode: Optional[str] = None

class Product(ProductBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    category: Optional[Category] = Relationship(back_populates="products")
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class StockLog(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    product_id: int = Field(foreign_key="product.id")
    change_amount: int
    reason: str
    user_id: int = Field(foreign_key="user.id")
    created_at: datetime = Field(default_factory=datetime.utcnow)
