from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from app.schemas.task import TaskRead
from app.services.task_service import get_all_tasks
from app.db.config import get_db
from typing import List

router = APIRouter()

@router.get("/tasks", response_model=List[TaskRead])
async def fetch_tasks(db: AsyncSession = Depends(get_db)):
    return await get_all_tasks(db) 