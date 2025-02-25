import { FC } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';

import HomePage from '@pages/home';
import { createTheme, THEMES } from '@shared/theme';
import { useDarkMode } from '@shared/utils';
import { MockChartsService } from '@shared/services';

const createMuiTheme = (theme: THEMES) =>
  createTheme({
    direction: 'ltr',
    roundedCorners: true,
    theme,
    locale: 'en',
  });

const chartsService = new MockChartsService();
//For real api service
// const apiChartsService = new MockChartsService();

const App: FC = () => {
  const { isDarkMode } = useDarkMode();
  const theme = createMuiTheme(isDarkMode ? THEMES.DARK : THEMES.LIGHT);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <HomePage chartsService={chartsService} />
    </ThemeProvider>
  );
};

export default App;
