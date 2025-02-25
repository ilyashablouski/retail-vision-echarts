export interface Chart {
  labels: string[];
  data: number[];
}

export interface ChartsService {
  getCharts(): Promise<Chart[]>;
}
