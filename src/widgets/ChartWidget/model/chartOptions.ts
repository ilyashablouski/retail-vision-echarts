import { ChartType } from '@shared/types';
import { ECBasicOption } from 'echarts/types/dist/shared';

export const getChartOptions = (
  chartType: ChartType,
  chartLabels: string[],
  chartData: number[],
): ECBasicOption => {
  switch (chartType) {
    case ChartType.Line:
      return {
        title: { text: 'Line Chart' },
        xAxis: { type: 'category', data: chartLabels },
        yAxis: { type: 'value' },
        series: [{ data: chartData, type: 'line' }],
      };
    case ChartType.Bar:
      return {
        title: { text: 'Bar Chart' },
        xAxis: { type: 'category', data: chartLabels },
        yAxis: { type: 'value' },
        series: [{ data: chartData, type: 'bar' }],
      };
    case ChartType.Pie:
      return {
        title: { text: 'Pie Chart' },
        series: [
          {
            type: 'pie',
            data: chartLabels.map((label, index) => ({ name: label, value: chartData[index] })),
          },
        ],
      };
    default:
      throw new Error(`Unsupported chart type: ${chartType}`);
  }
};
