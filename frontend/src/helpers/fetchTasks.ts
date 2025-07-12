export interface Task {
    id: number;
    title: string;
    description?: string;
    status: string;
    created_at: string;
}

export async function fetchTasks(): Promise<Task[]> {
    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/tasks`);
    if (!res.ok) throw new Error('Failed to fetch tasks');
    return res.json();
} 