
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { useState, useEffect } from 'react';

export default function MoneyBarChart({ prev, curr }) {
  const categories = ['Previus', 'Current'];
  const [size, setSize] = useState({ width: 0, height: 0 });


  function useIsMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, [breakpoint]);

    return isMobile;
  }

  const isMobile = useIsMobile();
  // ✅ Update size reactively when screen size changes
  useEffect(() => {
    if (isMobile) {
      setSize({ width: 130, height: 150 });
    } else {
      setSize({ width: 200, height: 170 });
    }
  }, [isMobile]);




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
      height={size.height}
      width={size.width}

    />
  );
}
