import React from 'react';
import { Box, Switch, useTheme } from '@mui/material';

interface ThemeToggleProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, toggleTheme }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'fixed',
        top: theme.spacing(1),
        right: theme.spacing(1),
        zIndex: 10,
      }}
    >
      <Switch checked={isDarkMode} onChange={toggleTheme} color="default" />
    </Box>
  );
};

export default ThemeToggle;
