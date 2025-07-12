export async function updateTaskStatus(taskId: number, status: string): Promise<{ success: boolean }> {
    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/tasks/${taskId}/status`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
    });
    if (!res.ok) throw new Error('Failed to update task status');
    return { success: true };
} 