import { useEffect, useState } from 'react';
import { useMediaQuery } from '@mui/material';

import { THEMES } from '@shared/theme/mui';

export const useDarkMode = (): {
  isDarkMode: boolean;
  toggleTheme: () => void;
} => {
  const isSystemDarkMode = useMediaQuery(`(prefers-color-scheme: ${THEMES.DARK})`);
  const savedMode = localStorage.getItem('theme') ?? '';

  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    savedMode === THEMES.DARK ? true : isSystemDarkMode,
  );

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? THEMES.DARK : THEMES.LIGHT);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevThemeMode) => !prevThemeMode);
  };

  return { isDarkMode, toggleTheme };
};
