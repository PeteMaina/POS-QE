from typing import List, Annotated, Optional
from fastapi import APIRouter, Depends, HTTPException, Query
from sqlmodel import Session, select
from app.api import deps
from app.db import session
from app.models.inventory import Category, Product, StockLog
from app.models.user import User
from app.schemas.inventory import (
    CategoryCreate, CategoryRead, CategoryUpdate,
    ProductCreate, ProductRead, ProductUpdate, StockAdjustment
)

router = APIRouter()

# --- Categories ---

@router.post("/categories", response_model=CategoryRead)
def create_category(
    *,
    session: Annotated[Session, Depends(session.get_session)],
    category_in: CategoryCreate,
    current_user: Annotated[User, Depends(deps.get_current_user)],
):
    if current_user.role not in ["admin", "owner"]:
        raise HTTPException(status_code=403, detail="Not enough permissions")
        
    category = Category.model_validate(category_in)
    session.add(category)
    session.commit()
    session.refresh(category)
    return category

@router.get("/categories", response_model=List[CategoryRead])
def read_categories(
    session: Annotated[Session, Depends(session.get_session)],
    skip: int = 0,
    limit: int = 100,
):
    categories = session.exec(select(Category).offset(skip).limit(limit)).all()
    return categories

# --- Products ---

@router.post("/products", response_model=ProductRead)
def create_product(
    *,
    session: Annotated[Session, Depends(session.get_session)],
    product_in: ProductCreate,
    current_user: Annotated[User, Depends(deps.get_current_user)],
):
    if current_user.role not in ["admin", "owner"]:
        raise HTTPException(status_code=403, detail="Not enough permissions")
    
    # Check SKU uniqueness
    existing_product = session.exec(select(Product).where(Product.sku == product_in.sku)).first()
    if existing_product:
        raise HTTPException(status_code=400, detail="Product with this SKU already exists")

    product = Product.model_validate(product_in, update={"stock_quantity": product_in.initial_stock})
    session.add(product)
    session.commit()
    session.refresh(product)
    
    # Log initial stock
    if product_in.initial_stock > 0:
        log = StockLog(
            product_id=product.id,
            change_amount=product_in.initial_stock,
            reason="Initial Stock",
            user_id=current_user.id
        )
        session.add(log)
        session.commit()
        
    return product

@router.get("/products", response_model=List[ProductRead])
def read_products(
    session: Annotated[Session, Depends(session.get_session)],
    skip: int = 0,
    limit: int = 100,
    query: Optional[str] = None,
    category_id: Optional[int] = None
):
    sql = select(Product)
    if category_id:
        sql = sql.where(Product.category_id == category_id)
    if query:
        sql = sql.where(Product.name.contains(query) | Product.sku.contains(query))
        
    products = session.exec(sql.offset(skip).limit(limit)).all()
    return products

@router.get("/products/{product_id}", response_model=ProductRead)
def read_product(
    product_id: int,
    session: Annotated[Session, Depends(session.get_session)],
):
    product = session.get(Product, product_id)
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product

@router.put("/products/{product_id}", response_model=ProductRead)
def update_product(
    product_id: int,
    product_in: ProductUpdate,
    session: Annotated[Session, Depends(session.get_session)],
    current_user: Annotated[User, Depends(deps.get_current_user)],
):
    if current_user.role not in ["admin", "owner"]:
        raise HTTPException(status_code=403, detail="Not enough permissions")
        
    product = session.get(Product, product_id)
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
        
    product_data = product_in.model_dump(exclude_unset=True)
    product.sqlmodel_update(product_data)
    session.add(product)
    session.commit()
    session.refresh(product)
    return product

@router.post("/inventory/adjust", response_model=dict)
def adjust_stock(
    adjustment: StockAdjustment,
    session: Annotated[Session, Depends(session.get_session)],
    current_user: Annotated[User, Depends(deps.get_current_user)],
):
    if current_user.role not in ["admin", "owner"]:
        raise HTTPException(status_code=403, detail="Not enough permissions")
        
    product = session.get(Product, adjustment.product_id)
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
        
    product.stock_quantity += adjustment.change_amount
    
    # Prevent negative stock? Optional. allowing for now.
    
    log = StockLog(
        product_id=product.id,
        change_amount=adjustment.change_amount,
        reason=adjustment.reason,
        user_id=current_user.id
    )
    
    session.add(product)
    session.add(log)
    session.commit()
    
    return {"message": "Stock adjusted successfully", "new_quantity": product.stock_quantity}
