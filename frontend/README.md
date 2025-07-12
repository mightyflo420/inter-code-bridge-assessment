# Frontend (React)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Overview
- Allows users to view, add, delete, and mark tasks as completed.
- Communicates with the backend via REST API.
- Uses Material-UI for UI components and react-toastify for notifications.

## Project Structure
```
frontend/src/
  components/
    TaskList/         # Main task list and logic
    TaskCard/         # Individual task display, delete, and complete actions
    AddTaskForm/      # Form to add a new task
    landing/          # Landing page
  helpers/
    fetchTasks.ts     # Fetch all tasks
    createTask.ts     # Create a new task
    deleteTask.ts     # Delete a task
    updateTaskStatus.ts # Update a task's status
  App.tsx             # App entry point
  index.tsx           # React entry point
```

## Prerequisites
- Node.js (v16 or higher recommended)
- npm

## How to Run Locally
1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm start
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

## Environment Variables
- `REACT_APP_BACKEND_URL` should be set in a `.env` file to point to your backend, e.g.:
  ```env
  REACT_APP_BACKEND_URL=http://localhost:8000
  ```
