import { ChartType } from '@shared/types';
import { ECBasicOption } from 'echarts/types/dist/shared';

export const getChartOptions = (chartType: ChartType, labels: string[], data: number[]): ECBasicOption => {
  switch (chartType) {
    case ChartType.Line:
      return {
        title: { text: 'Line Chart' },
        xAxis: { type: 'category', data: labels },
        yAxis: { type: 'value' },
        series: [{ data, type: 'line' }],
      };
    case ChartType.Bar:
      return {
        title: { text: 'Bar Chart' },
        xAxis: { type: 'category', data: labels },
        yAxis: { type: 'value' },
        series: [{ data, type: 'bar' }],
      };
    case ChartType.Pie:
      return {
        title: { text: 'Pie Chart' },
        series: [
          {
            type: 'pie',
            data: labels.map((label, index) => ({ name: label, value: data[index] })),
          },
        ],
      };
    default:
      throw new Error(`Unsupported chart type: ${chartType}`);
  }
};
