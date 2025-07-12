import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styles from './index.module.css';

const LandingPage: React.FC = () => {
  return (
    <Box className={styles.root}>
      <Box className={styles.glow}></Box>
      <Typography variant="h2" component="h1" color="primary" gutterBottom className={styles.title}>
        Task<span className={styles.gradientText}>.io</span>
      </Typography>
      <Typography variant="h5" color="textSecondary" className={styles.subtitle}>
        Organize your tasks. Boost your productivity.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={styles.getStarted}
        sx={{ mt: 4, px: 6, py: 1.5, fontWeight: 600, fontSize: '1.1rem', borderRadius: 3, boxShadow: 3 }}
      >
        Get Started
      </Button>
    </Box>
  );
};

export default LandingPage; 