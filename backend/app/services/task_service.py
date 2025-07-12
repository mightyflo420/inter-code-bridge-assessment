from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from app.models.task import Task
from app.schemas.task import TaskCreate, TaskStatusUpdate

async def get_all_tasks(db: AsyncSession):
    result = await db.execute(select(Task))
    return result.scalars().all()

async def create_task(db: AsyncSession, task_in: TaskCreate):
    new_task = Task(
        title=task_in.title,
        description=task_in.description,
        status=task_in.status.value
    )
    db.add(new_task)
    await db.commit()
    await db.refresh(new_task)
    return new_task

async def delete_task(db: AsyncSession, task_id: int):
    result = await db.execute(select(Task).where(Task.id == task_id))
    task = result.scalar_one_or_none()
    if not task:
        return None
    await db.delete(task)
    await db.commit()
    return task

async def update_task_status(db: AsyncSession, task_id: int, status_update: TaskStatusUpdate):
    result = await db.execute(select(Task).where(Task.id == task_id))
    task = result.scalar_one_or_none()
    if not task:
        return None
    task.status = status_update.status.value
    await db.commit()
    await db.refresh(task)
    return task 