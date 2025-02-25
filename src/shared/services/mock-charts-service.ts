import { Chart, ChartsService } from '@shared/model';
import { generateNormalDistributionData, generateRandomLabels } from '@shared/utils';

export class MockChartsService implements ChartsService {
  private readonly charts: Chart[] = [];

  constructor() {
    this.charts = [
      { labels: generateRandomLabels(5), data: generateNormalDistributionData(50, 10, 5) },
      { labels: generateRandomLabels(10), data: generateNormalDistributionData(50, 10, 10) },
      { labels: generateRandomLabels(20), data: generateNormalDistributionData(50, 10, 20) },
    ];
  }

  async getCharts(): Promise<Chart[]> {
    return this.charts;
  }
}
