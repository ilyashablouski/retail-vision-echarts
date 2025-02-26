import { Theme } from '@mui/material';

import { ChartType } from '@shared/types';
import { ECBasicOption } from 'echarts/types/dist/shared';
import { generateColorPalette } from '@shared/theme/echarts';

export const getChartOptions = (
  chartType: ChartType,
  chartLabels: string[],
  chartData: number[],
  theme: Theme,
): ECBasicOption => {
  switch (chartType) {
    case ChartType.Line:
      return {
        title: { text: 'Line Chart' },
        xAxis: { type: 'category', data: chartLabels },
        yAxis: { type: 'value' },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line',
          },
        },
        series: [
          {
            data: chartData,
            type: 'line',
            label: {
              show: false,
            },
          },
        ],
      };
    case ChartType.Bar:
      return {
        title: { text: 'Bar Chart' },
        xAxis: { type: 'category', data: chartLabels },
        yAxis: { type: 'value' },
        series: [
          {
            data: chartData,
            type: 'bar',
            label: {
              show: true,
              position: 'outside',
              formatter: '{c}',
            },
          },
        ],
      };
    case ChartType.Pie:
      return {
        title: { text: 'Pie Chart' },
        series: [
          {
            type: 'pie',
            data: chartLabels.map((label, index) => ({
              name: label,
              value: chartData[index],
              itemStyle: {
                color: generateColorPalette(theme)[index % generateColorPalette(theme).length],
              },
            })),
          },
        ],
      };
    default:
      throw new Error(`Unsupported chart type: ${chartType}`);
  }
};
