import { CSSProperties, FC } from 'react';
import ReactECharts from 'echarts-for-react';
import { ECBasicOption } from 'echarts/types/dist/shared';

interface ChartWrapperProps {
  options: ECBasicOption;
  style?: CSSProperties;
}

export const ChartWrapper: FC<ChartWrapperProps> = ({ options, style }) => {
  return (
    <ReactECharts
      option={options}
      style={style ? style : { height: '400px', width: '100%' }}
      notMerge={true}
      lazyUpdate={true}
    />
  );
};

export default ChartWrapper;
