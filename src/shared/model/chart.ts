import { ChartType } from '@shared/types';

export interface Chart {
  chartType: ChartType;
  chartLabels: string[];
  chartData: number[];
}

export interface ChartsService {
  getCharts(): Promise<Chart[]>;
}
