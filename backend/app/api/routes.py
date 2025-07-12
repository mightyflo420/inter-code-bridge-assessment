from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from app.schemas.task import TaskRead, TaskCreate, TaskStatusUpdate
from app.services.task_service import get_all_tasks, create_task, delete_task, update_task_status
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
    deleted = await delete_task(db, task_id)
    if deleted is None:
        raise HTTPException(status_code=404, detail="Task not found")
    return {"detail": "Task deleted"}

@router.put("/tasks/{task_id}/status", response_model=TaskRead)
async def edit_task_status(task_id: int, status_update: TaskStatusUpdate, db: AsyncSession = Depends(get_db)):
    updated = await update_task_status(db, task_id, status_update)
    if updated is None:
        raise HTTPException(status_code=404, detail="Task not found")
    return updated 