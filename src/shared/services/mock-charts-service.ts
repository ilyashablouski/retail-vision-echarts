import { Chart, ChartsService } from '@shared/model';
import { generateNormalDistributionData, generateRandomLabels } from '@shared/utils';
import { ChartType } from '@shared/types';

export class MockChartsService implements ChartsService {
  private readonly charts: Chart[] = [];

  constructor() {
    this.charts = [
      {
        chartType: ChartType.Line,
        labels: generateRandomLabels(5),
        data: generateNormalDistributionData(50, 10, 5),
      },
      {
        chartType: ChartType.Bar,
        labels: generateRandomLabels(10),
        data: generateNormalDistributionData(50, 10, 10),
      },
      {
        chartType: ChartType.Pie,
        labels: generateRandomLabels(20),
        data: generateNormalDistributionData(50, 10, 20),
      },
    ];
  }

  async getCharts(): Promise<Chart[]> {
    return this.charts;
  }
}
