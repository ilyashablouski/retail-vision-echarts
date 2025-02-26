import { FC } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { createTheme, THEMES } from '@shared/theme/mui';
import { useDarkMode } from '@shared/utils';
import { MockChartsService } from '@shared/services';
import HomePage from '@pages/home';
import ThemeToggle from '@shared/ui/ThemeToggle';

const createMuiTheme = (theme: THEMES) =>
  createTheme({
    direction: 'ltr',
    roundedCorners: true,
    theme,
    locale: 'en',
  });

/** For real api service
 * const apiChartsService = new MockChartsService();
 * */

const chartsService = new MockChartsService();

const App: FC = () => {
  const { isDarkMode, toggleTheme } = useDarkMode();
  const theme = createMuiTheme(isDarkMode ? THEMES.DARK : THEMES.LIGHT);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <HomePage chartsService={chartsService} />
    </ThemeProvider>
  );
};

export default App;
