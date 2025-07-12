from sqlalchemy import Column, Integer, String, Boolean, DateTime, func, Enum as SqlEnum
from sqlalchemy.ext.declarative import declarative_base
import enum

Base = declarative_base()

class TaskStatus(enum.Enum):
    in_progress = "in_progress"
    completed = "completed"

class Task(Base):
    __tablename__ = "tasks"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    description = Column(String, nullable=True)
    status = Column(SqlEnum(TaskStatus), default=TaskStatus.in_progress.value, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now()) 