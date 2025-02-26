import { CSSProperties, FC } from 'react';
import ReactECharts from 'echarts-for-react';
import { ECBasicOption } from 'echarts/types/dist/shared';
import { useTheme } from '@mui/material';

interface ChartWrapperProps {
  options: ECBasicOption;
  style?: CSSProperties;
}

export const ChartWrapper: FC<ChartWrapperProps> = ({ options, style }) => {
  const theme = useTheme();

  return (
    <ReactECharts
      key={theme.palette.mode}
      option={options}
      style={style ? style : { height: '400px', width: '100%' }}
      theme="echartsTheme"
      notMerge={true}
      lazyUpdate={true}
    />
  );
};

export default ChartWrapper;
