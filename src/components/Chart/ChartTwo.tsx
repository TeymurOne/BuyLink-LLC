import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import {
  useGetStatisticsQuery,
  
} from '../../features/branch/apiSlice';
import { ApexOptions } from 'apexcharts';

interface ChartOneState {
  series: {
    name: string;
    type: string;
    data: number[];
  }[];
}

const ChartOne: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [chartData, setChartData] = useState<ChartOneState>({ series: [] });
  const { data } = useGetStatisticsQuery('');

  useEffect(() => {
    if (data) {
      const { transactions_by_month, refer_claims_by_month, month } = data ;

      const transactionsData: number[] = Object.values<number>(transactions_by_month);
      const show: number[] = Object.values<number>(transactions_by_month).map((element: number) => Math.floor(element / 100));

      const referClaimsData: number[] = Object.values<number>(refer_claims_by_month);

      const monthData: string[] = Object.values<string>(month).map((item: string) => item.slice(0, 3));

      setCategories(monthData);

      setChartData({
        series: [
          { name: ' Total recommended', type: 'bar', data: transactionsData },
          { name: 'Used recommendations ', type: 'bar', data: referClaimsData },
        ],
      });
    }
  }, [data]);

  const longestArrayLength = Math.max(chartData.series[0]?.data.length || 0, chartData.series[1]?.data.length || 0);
  const baseHeight = 100;
  const height = baseHeight + (longestArrayLength - 12) * 30;

  const maxDataValueTransactions = Math.max(
    ...chartData.series[0]?.data || []
  );

  const maxDataValueReferClaims = Math.max(
    ...chartData.series[1]?.data || []
  );

  const options: ApexOptions = {
    colors: ['#3C50E0', '#FF0000'],
    chart: {
      fontFamily: 'Satoshi, sans-serif',
      height: height,
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    xaxis: { categories: categories },
    yaxis: [
      {},
      {
        opposite: true,
        min: 0,
        max: Math.max(maxDataValueTransactions, maxDataValueReferClaims) * 1.2,
        floating: false,
      
      },
    ],
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      fontFamily: 'Satoshi',
      fontWeight: 500,
      fontSize: '14px',
      markers: { radius: 20 }
    },
    stroke: { width: 1, curve: 'smooth'},
    grid: { borderColor: '#f1f1f1', padding: { bottom: 20, left: 20 } },
    plotOptions: {
      bar: { horizontal: false, columnWidth: '100%', borderRadius: 1 },
    },
    responsive: [
      { breakpoint: 2600, options: { chart: { width: 1200 } } },
      { breakpoint: 1740, options: { chart: { width: 1000 } } },
      { breakpoint: 1340, options: { chart: { width: 800 } } },
      { breakpoint: 800, options: { chart: { width: 600 } } },
    ],
  };

  return (
    <div className="rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div className="mb-4 gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">Total Refers</h4>
        </div>
      </div>
      <div>
        <div id="chartTwo" className="-ml-5 -mb-9">
          <ReactApexChart options={options} series={chartData.series} type="bar" height={450} />
        </div>
      </div>
    </div>
  );
};

export default ChartOne;
