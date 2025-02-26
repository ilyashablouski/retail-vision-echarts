import * as echarts from 'echarts/core';
import { Theme } from '@mui/material';
import { ThemeOption } from 'echarts/types/src/util/types.js';

export const generateColorPalette = (theme: Theme) => {
  const isDarkMode = theme.palette.mode === 'dark';

  return [
    isDarkMode ? '#FFC107' : '#FF9800',
    isDarkMode ? '#4CAF50' : '#8BC34A',
    isDarkMode ? '#F44336' : '#E57373',
    isDarkMode ? '#9C27B0' : '#BA68C8',
    isDarkMode ? '#03A9F4' : '#4FC3F7',
    isDarkMode ? '#E91E63' : '#F06292',
    isDarkMode ? '#FF9800' : '#FFB74D',
    isDarkMode ? '#8BC34A' : '#CDDC39',
    isDarkMode ? '#00BCD4' : '#26C6DA',
    isDarkMode ? '#673AB7' : '#7E57C2',
    isDarkMode ? '#FF5722' : '#FF8A65',
  ];
};

export const configureEChartsTheme = (theme: Theme) => {
  const eChartsTheme: ThemeOption = {
    color: [theme.palette.primary.main, theme.palette.secondary.main],
    textStyle: {
      color: theme.palette.text.primary,
    },
    backgroundColor: theme.palette.background.default,
    tooltip: {
      axisPointer: {
        lineStyle: {
          color: theme.palette.text.primary,
        },
      },
    },
    categoryAxis: {
      axisLine: {
        lineStyle: {
          color: theme.palette.text.primary,
        },
      },
    },
    valueAxis: {
      axisLine: {
        lineStyle: {
          color: theme.palette.text.primary,
        },
      },
    },
  };

  echarts.registerTheme('echartsTheme', eChartsTheme);
};
