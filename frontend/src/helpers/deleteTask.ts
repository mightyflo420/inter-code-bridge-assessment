
export async function deleteTask(taskId: number): Promise<{ success: boolean }> {
    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/tasks/${taskId}`, {
        method: 'DELETE',
    });
    if (!res.ok) throw new Error('Failed to delete task');
    return { success: true };
} 