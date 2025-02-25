import axios from 'axios';
import { Chart, ChartsService } from '@shared/model';

export class ApiChartsService implements ChartsService {
  private readonly apiUrl: string;

  constructor(apiUrl: string = 'https://api.example.com/charts') {
    this.apiUrl = apiUrl;
  }

  async getCharts(): Promise<Chart[]> {
    try {
      const response = await axios.get<Chart[]>(this.apiUrl);
      return response.data;
    } catch (error) {
      console.error('Error fetching charts:', error);
      return [];
    }
  }
}
