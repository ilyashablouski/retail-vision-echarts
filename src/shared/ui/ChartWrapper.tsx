import { FC, useEffect, useRef } from 'react';
import ReactECharts from 'echarts-for-react';
import EChartsReact from 'echarts-for-react';
import { ECBasicOption } from 'echarts/types/dist/shared';

interface ChartWrapperProps {
  options: ECBasicOption;
}

const ChartWrapper: FC<ChartWrapperProps> = ({ options }) => {
  const chartRef = useRef<EChartsReact>(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.getEchartsInstance().setOption(options);
    }
  }, [options]);

  return <ReactECharts ref={chartRef} option={options} style={{ height: '400px', width: '100%' }} />;
};

export default ChartWrapper;
