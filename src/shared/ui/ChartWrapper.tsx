import { CSSProperties, FC, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import { ECBasicOption } from 'echarts/types/dist/shared';
import { useTheme } from '@mui/material';

import { configureEChartsTheme } from '@shared/theme/echarts';

interface ChartWrapperProps {
  options: ECBasicOption;
  style?: CSSProperties;
}

export const ChartWrapper: FC<ChartWrapperProps> = ({ options, style }) => {
  const theme = useTheme();

  useEffect(() => {
    configureEChartsTheme(theme);
  }, [theme]);

  return (
    <ReactECharts
      option={options}
      style={style ? style : { height: '400px', width: '100%' }}
      theme="echartsTheme"
      notMerge={true}
      lazyUpdate={true}
    />
  );
};

export default ChartWrapper;
