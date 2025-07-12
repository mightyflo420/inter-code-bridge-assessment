import { Task } from './fetchTasks';

export interface NewTask {
    title: string;
    description?: string;
    status?: string;
}

export async function createTask(task: NewTask): Promise<Task> {
    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/tasks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task),
    });
    if (!res.ok)
        throw new Error('Failed to create task');
    return res.json();
} 