import { useState } from 'react';

import { generateNormalDistributionData, generateRandomLabels } from '@shared/utils';
import ChartWrapper from '@shared/ui';

const CHART_TYPES = ['line', 'bar', 'pie'] as const;

export const ChartWidget = () => {
  const [chartType, setChartType] = useState<(typeof CHART_TYPES)[number]>('line');

  const labels = generateRandomLabels(10);
  const data = generateNormalDistributionData(50, 10, 10);

  const getOptions = () => {
    switch (chartType) {
      case 'line':
        return {
          title: { text: 'Line Chart' },
          xAxis: { type: 'category', data: labels },
          yAxis: { type: 'value' },
          series: [{ data, type: 'line' }],
        };
      case 'bar':
        return {
          title: { text: 'Bar Chart' },
          xAxis: { type: 'category', data: labels },
          yAxis: { type: 'value' },
          series: [{ data, type: 'bar' }],
        };
      case 'pie':
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
        return {};
    }
  };

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        {CHART_TYPES.map((type) => (
          <button key={type} onClick={() => setChartType(type)}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>
      <ChartWrapper options={getOptions()} />
    </div>
  );
};

export default ChartWidget;
