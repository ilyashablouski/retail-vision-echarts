import { FC, useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

import ChartWidget from '@widgets/ChartWidget';
import { Chart, ChartsService } from '@shared/model';

interface HomePageProps {
  chartsService: ChartsService;
}

export const HomePage: FC<HomePageProps> = ({ chartsService }) => {
  const [charts, setCharts] = useState<Chart[]>([]);

  useEffect(() => {
    chartsService.getCharts().then((chartsData) => setCharts(chartsData));
  }, [chartsService]);

  return (
    <Container maxWidth="xl" sx={{ my: 4 }}>
      <Typography variant="h1" gutterBottom>
        Data Visualization with ECharts
      </Typography>

      {charts.length > 0 && (
        <Grid container spacing={2}>
          {charts.map(({ chartType, chartLabels, chartData }, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <ChartWidget chartType={chartType} chartLabels={chartLabels} chartData={chartData} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default HomePage;
