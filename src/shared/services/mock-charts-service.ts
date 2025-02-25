import { Chart, ChartsService } from '@shared/model';
import { generateNormalDistributionData, generateRandomLabels } from '@shared/utils';
import { ChartType } from '@shared/types';

export class MockChartsService implements ChartsService {
  private readonly charts: Chart[] = [];

  constructor() {
    this.charts = [
      {
        chartType: ChartType.Line,
        chartLabels: generateRandomLabels(5),
        chartData: generateNormalDistributionData(50, 10, 5),
      },
      {
        chartType: ChartType.Bar,
        chartLabels: generateRandomLabels(10),
        chartData: generateNormalDistributionData(50, 10, 10),
      },
      {
        chartType: ChartType.Pie,
        chartLabels: generateRandomLabels(20),
        chartData: generateNormalDistributionData(50, 10, 20),
      },
    ];
  }

  async getCharts(): Promise<Chart[]> {
    return this.charts;
  }
}
