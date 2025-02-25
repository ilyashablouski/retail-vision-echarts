import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

import ChartWidget from '@widgets/ChartWidget';
import { generateNormalDistributionData, generateRandomLabels } from '@shared/utils';

const charts = [
  { labels: generateRandomLabels(5), data: generateNormalDistributionData(50, 10, 5) },
  { labels: generateRandomLabels(10), data: generateNormalDistributionData(50, 10, 10) },
  { labels: generateRandomLabels(20), data: generateNormalDistributionData(50, 10, 20) },
];

export const HomePage = () => {
  return (
    <Container maxWidth="xl" sx={{ my: 4 }}>
      <Typography variant="h1" gutterBottom>
        Data Visualization with ECharts
      </Typography>

      <Grid container spacing={2}>
        {charts.map(({ labels, data }, index) => (
          <Grid size={{ xs: 12, md: 6 }}>
            <ChartWidget key={index} labels={labels} data={data} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
