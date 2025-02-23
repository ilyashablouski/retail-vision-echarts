import { useMediaQuery } from '@mui/material';
import { THEMES } from '@shared/theme';

export const useDarkMode = (): { isDarkMode: boolean } => {
  const isDarkMode = useMediaQuery(`(prefers-color-scheme: ${THEMES.DARK})`);

  return { isDarkMode };
};
