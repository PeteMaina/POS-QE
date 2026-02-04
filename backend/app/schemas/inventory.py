from typing import Optional, List
from pydantic import BaseModel
from datetime import datetime

# Category Schemas
class CategoryBase(BaseModel):
    name: str
    description: Optional[str] = None

class CategoryCreate(CategoryBase):
    pass

class CategoryRead(CategoryBase):
    id: int

class CategoryUpdate(CategoryBase):
    name: Optional[str] = None
    description: Optional[str] = None

# Product Schemas
class ProductBase(BaseModel):
    name: str
    sku: str
    description: Optional[str] = None
    price: float
    cost_price: float = 0.0
    category_id: Optional[int] = None
    image_url: Optional[str] = None
    barcode: Optional[str] = None

class ProductCreate(ProductBase):
    initial_stock: int = 0

class ProductRead(ProductBase):
    id: int
    stock_quantity: int
    created_at: datetime
    updated_at: datetime
    category: Optional[CategoryRead] = None

class ProductUpdate(BaseModel):
    name: Optional[str] = None
    sku: Optional[str] = None
    description: Optional[str] = None
    price: Optional[float] = None
    cost_price: Optional[float] = None
    category_id: Optional[int] = None
    image_url: Optional[str] = None
    barcode: Optional[str] = None

class StockAdjustment(BaseModel):
    product_id: int
    change_amount: int
    reason: str
