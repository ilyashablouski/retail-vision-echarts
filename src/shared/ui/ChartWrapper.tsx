import * as echarts from 'echarts';
import { CSSProperties, FC, useEffect, useRef } from 'react';
import { ECBasicOption } from 'echarts/types/dist/shared';

interface ChartWrapperProps {
  options: ECBasicOption;
  style?: CSSProperties;
}

export const ChartWrapper: FC<ChartWrapperProps> = ({ options, style }) => {
  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);
      chart.setOption(options);

      return () => {
        chart.dispose();
      };
    }
  }, [options]);

  return <div ref={chartRef} style={style ? style : { height: '400px', width: '100%' }} />;
};

export default ChartWrapper;
