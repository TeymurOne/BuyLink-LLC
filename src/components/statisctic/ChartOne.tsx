import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useTranslation } from 'react-i18next';

interface ChartOneState {
  series: {
    name: string;
    data: number[];
  }[];
}

interface ChartOneProps {
  data: { [key: string]: number };
}

const ChartOne: React.FC<ChartOneProps> = ({ data }) => {
  const transactionsArray = Object.entries(data);
  const seriesData = transactionsArray.map(([key, value]) => value);
  const { t } = useTranslation();
  const getTranslatedOptions = (): ApexOptions => ({
    legend: {
      show: false,
      position: 'top',
      horizontalAlign: 'left',
    },
    colors: ['#F31F1F', '#fff'],
    chart: {
      height: 335,
      type: 'area',
      dropShadow: {
        enabled: false,
        color: '#fff',
        top: 10,
        blur: 80,
        left: 0,
        opacity: 1,
      },
      toolbar: {
        show: false,
      },
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: {
            height: 300,
          },
        },
      },
      {
        breakpoint: 1366,
        options: {
          chart: {
            height: 350,
          },
        },
      },
    ],
    stroke: {
      width: [1, 2],
      curve: 'straight',
    },
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 0,
        bottom: 0,
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 4,
      colors: '#2D83B6',
      strokeColors: ['#2D83B6', '#80CAEE'],
      strokeWidth: 3,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [],
      hover: {
        size: undefined,
        sizeOffset: 5,
      },
    },
    xaxis: {
      type: 'category',
      categories: [
        t('months.5'),
        t('months.6'),
        t('months.7'),
        t('months.8'),
        t('months.9'),
        t('months.10'),
        t('months.11'),
        t('months.12'),
        t('months.1'),
        t('months.2'),
        t('months.3'),
        t('months.4'),
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      title: {
        style: {
          fontSize: '0px',
        },
      },
      min: 0.0,
      max: 2.0,
      tickAmount: 5,
    },
  });

  const [state, setState] = useState<ChartOneState>({
    series: [
      {
        name: 'Product One',
        data: seriesData,
      },
    ],
  });

  return (
    <div className="col-span-12  rounded-2xl border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-sm dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-6">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-col   sm:gap-5">
          <h2 className="mb-4 text-xl font-medium font-medium dark:text-white md:mb-0">
            {t('statistic.7')}
          </h2>
          <div className="flex space-x-4">
            <div className="flex items-center  space-x-2">
              <div className="h-2 w-2 rounded-full  bg-primary"></div>
              <p className="text-xs font-normal text-[#5B5B5B] dark:text-white">
                {t('statistic.8')}
              </p>
              <div className="h-2 w-2 rounded-full bg-errorMessage "></div>
              <p className="text-xs font-normal text-[#5B5B5B] dark:text-white">
                {t('statistic.12')}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div id="chartOne" className="-ml-5">
          <ReactApexChart
            options={getTranslatedOptions()}
            series={state.series}
            type="area"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartOne;
