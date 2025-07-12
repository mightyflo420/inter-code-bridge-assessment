# Backend (FastAPI)

This is the backend for the Task Management App, built with FastAPI and SQLAlchemy (async).

## Overview
- Provides REST API endpoints for managing tasks (CRUD + status updates).
- Uses async SQLAlchemy for database access.
- CORS enabled for frontend communication.

## Project Structure
```
backend/app/
  api/
    routes.py         # API route definitions
  db/
    config.py         # Database config and session
  models/
    task.py           # Task ORM model
  schemas/
    task.py           # Pydantic schemas for tasks
  services/
    task_service.py   # Business logic for tasks
  exceptions.py       # Custom exception handlers
  main.py             # FastAPI app entrypoint
```

## API Routes
- `GET    /tasks`                — List all tasks
- `POST   /tasks`                — Create a new task
- `DELETE /tasks/{task_id}`      — Delete a task
- `PUT    /tasks/{task_id}/status` — Update a task's status (e.g., to completed)

## Prerequisites
- Python 3.10+
- PostgreSQL (or compatible DB, see `DATABASE_URL`)

## How to Run Locally (with Virtual Environment)
1. **Create a virtual environment (run this only once):**
   ```sh
   python3 -m venv .venv
   ```
2. **Activate the virtual environment:**
   ```sh
   source .venv/bin/activate  # On Windows use: .venv\Scripts\activate
   ```
3. **Install dependencies:**
   ```sh
   pip install -r requirements.txt
   ```
4. **Set up environment variables in a `.env` file:**
   ```env
   DATABASE_URL=postgresql+asyncpg://user:password@localhost:5432/dbname
   FRONTEND_URL=http://localhost:3000
   ```
5. **Start the backend server:**
   ```sh
   uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
   ```
   The API will be available at [http://localhost:8000](http://localhost:8000).

## Notes
- The database will be initialized automatically on first run.
- Make sure your database is running and accessible via `DATABASE_URL`. 