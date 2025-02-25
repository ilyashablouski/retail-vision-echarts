import { ChartType } from '@shared/types';

export interface Chart {
  chartType: ChartType;
  labels: string[];
  data: number[];
}

export interface ChartsService {
  getCharts(): Promise<Chart[]>;
}
