import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { fetchTasks, Task } from '../../helpers/fetchTasks';
import { createTask, NewTask } from '../../helpers/createTask';
import TaskCard from '../TaskCard';
import AddTaskForm from '../AddTaskForm';

const ROWS_OPTIONS = [5, 10, 20, 50];

const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(true);
    const [adding, setAdding] = useState(false);
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    useEffect(() => {
        const getTasks = async () => {
            setLoading(true);
            try {
                const data = await fetchTasks();
                setTasks(data);
            } catch (err) {
                setTasks([]);
            } finally {
                setLoading(false);
            }
        };
        getTasks();
    }, []);

    useEffect(() => {
        setPage(1); // Reset to first page when rowsPerPage changes
    }, [rowsPerPage]);

    const handleAddTask = async (task: NewTask) => {
        setAdding(true);
        try {
            const newTask = await createTask(task);
            setTasks(prev => [newTask, ...prev]);
            setPage(1);
        } catch (err) {
            // Optionally show error
        } finally {
            setAdding(false);
        }
    };

    const pageCount = Math.max(1, Math.ceil(tasks.length / rowsPerPage));
    const paginatedTasks = tasks.slice((page - 1) * rowsPerPage, page * rowsPerPage);

    return (
        <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', mt: 6, bgcolor: '#23272f', minHeight: '100vh', pb: 6 }}>
            <Typography variant="h4" color="primary" gutterBottom>
                Tasks
            </Typography>
            <AddTaskForm onAdd={handleAddTask} loading={adding} />
            {loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                    <CircularProgress />
                </Box>
            ) : (
                <Paper elevation={3} sx={{ bgcolor: 'transparent', boxShadow: 'none' }}>
                    <Stack spacing={2} sx={{ p: 2 }}>
                        {paginatedTasks.map((task) => (
                            <TaskCard key={task.id} task={task} />
                        ))}
                        {paginatedTasks.length === 0 && (
                            <Typography variant="body1" color="textSecondary" align="center">
                                No tasks found.
                            </Typography>
                        )}
                    </Stack>
                    <Divider />
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ py: 2, px: 2 }}>
                        <FormControl size="small" sx={{ minWidth: 120 }}>
                            <InputLabel id="rows-per-page-label">Rows per page</InputLabel>
                            <Select
                                labelId="rows-per-page-label"
                                value={rowsPerPage}
                                label="Rows per page"
                                onChange={(e) => setRowsPerPage(Number(e.target.value))}
                            >
                                {ROWS_OPTIONS.map((option) => (
                                    <MenuItem key={option} value={option}>{option}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <Typography variant="body2" color="textSecondary">
                            Page {page} / {pageCount}
                        </Typography>
                        <Pagination
                            count={pageCount}
                            page={page}
                            onChange={(_, value) => setPage(value)}
                            color="primary"
                            shape="rounded"
                            showFirstButton
                            showLastButton
                        />
                    </Stack>
                </Paper>
            )}
        </Box>
    );
};

export default TaskList; 