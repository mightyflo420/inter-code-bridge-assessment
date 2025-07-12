import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import LandingPage from './components/landing';
import TaskList from './components/TaskList';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#23272f',
      paper: '#1e1e1e',
    },
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
  },
});

function App() {
  const [showTasks, setShowTasks] = useState(false);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', bgcolor: '#23272f' }}>
        {showTasks ? (
          <TaskList />
        ) : (
          <LandingPage onGetStarted={() => setShowTasks(true)} />
        )}
      </Box>
    </ThemeProvider>
  );
}

export default App;
