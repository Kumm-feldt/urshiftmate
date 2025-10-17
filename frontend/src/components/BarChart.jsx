
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function MoneyBarChart({prev, curr}) {
    const categories = ['Previus', 'Current'];

  return (
    <BarChart

      xAxis={[
        {
          id: 'barCategories',
          data: categories,
           colorMap: {
              type: 'ordinal',
              values: categories,
              colors: ['#002b59ff', '#030d5354'],
            },
        },
      ]}
      series={[
        {
          data: [prev, curr],
        },
      ]}
      height={170}
      width={200}
      
    />
  );
}
