import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import { NewTask } from '../../helpers/createTask';

const statusOptions = [
  { value: 'in_progress', label: 'In Progress' },
  { value: 'completed', label: 'Completed' },
];

interface AddTaskFormProps {
  onAdd: (task: NewTask) => void;
  loading?: boolean;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAdd, loading }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('in_progress');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({ title, description, status });
    setTitle('');
    setDescription('');
    setStatus('in_progress');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3 }}>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center">
        <TextField
          label="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
          size="small"
          sx={{ flex: 2 }}
        />
        <TextField
          label="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          size="small"
          sx={{ flex: 3 }}
        />
        <TextField
          select
          label="Status"
          value={status}
          onChange={e => setStatus(e.target.value)}
          size="small"
          sx={{ flex: 1, minWidth: 120 }}
        >
          {statusOptions.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Button type="submit" variant="contained" color="primary" disabled={loading} sx={{ minWidth: 120 }}>
          Add Task
        </Button>
      </Stack>
    </Box>
  );
};

export default AddTaskForm; 