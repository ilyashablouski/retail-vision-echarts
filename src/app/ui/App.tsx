import { FC } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { createTheme, THEMES } from '@shared/theme';
import { useDarkMode } from '@shared/lib';
// import reactLogo from '@assets/react.svg';
// import viteLogo from '/vite.svg';

const createMuiTheme = (theme: THEMES) =>
  createTheme({
    direction: 'ltr',
    roundedCorners: true,
    theme,
    locale: 'en',
  });

const App: FC = () => {
  const { isDarkMode } = useDarkMode();
  const theme = createMuiTheme(isDarkMode ? THEMES.DARK : THEMES.LIGHT);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      HomePage
    </ThemeProvider>
  );
};

export default App;
