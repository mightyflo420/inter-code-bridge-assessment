import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import { Task } from '../../helpers/fetchTasks';

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  return (
    <Card variant="outlined" sx={{ bgcolor: '#23272f', borderColor: '#333a45' }}>
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h6" color="primary" gutterBottom>
            {task.title}
          </Typography>
          <Chip
            label={task.status === 'completed' ? 'Completed' : 'In Progress'}
            color={task.status === 'completed' ? 'success' : 'info'}
            size="small"
          />
        </Box>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
          {task.description || 'No description'}
        </Typography>
        <Typography variant="caption" color="textSecondary">
          Created: {new Date(task.created_at).toLocaleString()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TaskCard; 