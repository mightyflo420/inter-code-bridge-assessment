from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from app.models.task import Task
from app.schemas.task import TaskCreate

async def get_all_tasks(db: AsyncSession):
    result = await db.execute(select(Task))
    return result.scalars().all()

async def create_task(db: AsyncSession, task_in: TaskCreate):
    new_task = Task(
        title=task_in.title,
        description=task_in.description,
        status=task_in.status
    )
    db.add(new_task)
    await db.commit()
    await db.refresh(new_task)
    return new_task 