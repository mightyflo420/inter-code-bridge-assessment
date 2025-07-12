from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from app.models.task import Task

async def get_all_tasks(db: AsyncSession):
    result = await db.execute(select(Task))
    return result.scalars().all() 