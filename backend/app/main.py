from contextlib import asynccontextmanager
from fastapi import FastAPI
from app.api.routes import router
from app.db.config import init_db
from app.exceptions import (
    generic_exception_handler,
    sqlalchemy_exception_handler,
    validation_exception_handler
)
from sqlalchemy.exc import SQLAlchemyError
from fastapi.exceptions import RequestValidationError

@asynccontextmanager
async def lifespan(app: FastAPI):
    await init_db()
    yield

app = FastAPI(lifespan=lifespan)
app.include_router(router)

app.add_exception_handler(Exception, generic_exception_handler)
app.add_exception_handler(SQLAlchemyError, sqlalchemy_exception_handler)
app.add_exception_handler(RequestValidationError, validation_exception_handler)

