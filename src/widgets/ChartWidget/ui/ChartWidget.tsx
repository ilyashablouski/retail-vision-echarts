import { useState, MouseEvent, FC } from 'react';

import ChartWrapper from '@shared/ui';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

const CHART_TYPES = ['line', 'bar', 'pie'] as const;

interface ChartWidgetProps {
  labels: string[];
  data: number[];
}

export const ChartWidget: FC<ChartWidgetProps> = ({ labels, data }) => {
  const [chartType, setChartType] = useState<(typeof CHART_TYPES)[number]>('pie');

  // const labels = generateRandomLabels(10);
  // const data = generateNormalDistributionData(50, 10, 10);

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

  const handleChartTypeChange = (
    _event: MouseEvent<HTMLElement>,
    newChartType: (typeof CHART_TYPES)[number],
  ) => {
    if (newChartType !== null) {
      setChartType(newChartType);
    }
  };

  return (
    <>
      <div style={{ marginBottom: '20px' }}>
        <ToggleButtonGroup
          value={chartType}
          exclusive
          onChange={handleChartTypeChange}
          aria-label="chart type"
          color="primary"
        >
          {CHART_TYPES.map((type) => (
            <ToggleButton key={type} value={type} aria-label={type}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </div>
      <ChartWrapper options={getOptions()} />
    </>

    // <div>
    //   <div style={{ marginBottom: '20px' }}>
    //     {CHART_TYPES.map((type) => (
    //       <button key={type} onClick={() => setChartType(type)}>
    //         {type.charAt(0).toUpperCase() + type.slice(1)}
    //       </button>
    //     ))}
    //   </div>
    //
    //   <ChartWrapper options={getOptions()} />
    // </div>
  );
};

export default ChartWidget;
