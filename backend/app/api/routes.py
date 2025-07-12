from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from app.schemas.task import TaskRead, TaskCreate
from app.services.task_service import get_all_tasks, create_task, delete_task
from app.db.config import get_db
from typing import List

router = APIRouter()

@router.get("/tasks", response_model=List[TaskRead])
async def fetch_tasks(db: AsyncSession = Depends(get_db)):
    return await get_all_tasks(db)

@router.post("/tasks", response_model=TaskRead)
async def add_task(task: TaskCreate, db: AsyncSession = Depends(get_db)):
    return await create_task(db, task)

@router.delete("/tasks/{task_id}")
async def remove_task(task_id: int, db: AsyncSession = Depends(get_db)):
    await delete_task(db, task_id)
    return {"detail": "Task deleted"} 