# Inter Code Bridge Assessment

## Demo
[Watch the current demo here](https://drive.google.com/file/d/1lNeEU2NxLEIUOc5lVzHO9rFTPmUgOHp2/view?usp=drive_link)

This project is a full-stack Task Management App featuring:
- **Frontend:** React + Material-UI (runs locally)
- **Backend:** FastAPI (runs in a Docker container)
- **Database:** PostgreSQL (runs in a Docker container)

## Overview
- Users can view, add, delete, and mark tasks as completed.
- The frontend communicates with the backend via REST API.
- The backend connects to a PostgreSQL database.

## Project Structure
```
frontend/   # React app (run locally)
backend/    # FastAPI app (Dockerized)
backend/wait-for-it.sh  # Script to ensure backend waits for DB
backend/Dockerfile      # Backend container build
backend/README.md       # Backend details
docker-compose.yml      # Orchestrates backend and database
```

## Prerequisites
- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/)
- [Node.js](https://nodejs.org/) (v16 or higher) and npm (for running the frontend)

## How to Build and Run (Backend + Database)
1. **Build and start the containers:**
   ```sh
   docker-compose up --build
   ```
   - This will start:
     - `db`: PostgreSQL database (on port 5432)
     - `backend`: FastAPI app (on port 8000)

   > **Note:** The backend uses the `wait-for-it.sh` script to ensure it only starts after the database is ready. This script is included in the repo and referenced in the Dockerfile and docker-compose.yml.

2. **Stop the containers:**
   ```sh
   docker-compose down
   ```

For more backend details, see [backend/README.md](backend/README.md).

## How to Run the Frontend Locally
1. Open a new terminal and navigate to the `frontend` directory:
   ```sh
   cd frontend
   npm install
   npm start
   ```
   - The app will be available at [http://localhost:3000](http://localhost:3000).
   - It will connect to the backend at [http://localhost:8000](http://localhost:8000).

For more frontend details, see [frontend/README.md](frontend/README.md).

---

**Tip:** Make sure Docker is running before starting the containers. The frontend must be started separately and will connect to the backend automatically if both are running on the default ports. 