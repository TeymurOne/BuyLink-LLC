import { ApexOptions } from 'apexcharts';
import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useGetStatisticsQuery } from '../../features/branch/apiSlice';
import { useTranslation } from 'react-i18next';

interface ChartOneState {
  series: {
    name: string;
    type: string;
    data: any;
  }[];
}

const ChartOne: React.FC = () => {
  const {t}=useTranslation()
  const [categories, setCategory] = useState<string[]>([]);
  const [state, setState] = useState<ChartOneState>({
    series: [
      {
        name: 'Product One (Bar)',
        type: 'bar',
        data: [],
      },
      {
        name: 'Trend',
        type: 'line',
        data: [],
      },
    ],
  });
  const { isSuccess, data } = useGetStatisticsQuery('');

  useEffect(() => {
    if (isSuccess && data) {

      const transactions_by_month = Object.values(data.transactions_by_month);
      
     
      
      const month = Object.values(data.month);
      const cate = Object.values(month).map((item: any) => item.slice(0, 3));

      setCategory(cate);

      setState({
        series: [
          {
            name: 'Sales ',
            type: 'bar',
            data: transactions_by_month,
          },
          {
            name: 'Trend',
            type: 'line',
            data: transactions_by_month,
          },
        ],
      });
    }
  }, [data, isSuccess]);

  const options: ApexOptions = {
    colors: ['#3C50E0', '#FF0000'],
    chart: {
      fontFamily: 'Satoshi, sans-serif',
      
      
    
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    xaxis: {
      categories: categories,
    },
    yaxis: [
      {},
      {
        opposite: true,

        min: 0,
        floating: false,
      },
    ],
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      fontFamily: 'Satoshi',
      fontWeight: 500,
      fontSize: '14px',
      markers: {
        radius: 15,
      },
    },
    stroke: {
      width: 1,
      curve: 'smooth',
     
    },
    grid: {
      borderColor: '#f1f1f1',
      padding: {
        bottom: 20,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 0,
        columnWidth: '45%',
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'last',
      },
    },
    responsive: [
      {
        breakpoint: 2600,
        options: {
          chart: {
            width: 475,
            height:200

            
            
          },
        },
      },
      {
        breakpoint: 1740,
        options: {
          chart: {
            width: 475,
            height:236
          },
        },
      },
      {
        breakpoint: 1340,
        options: {
          chart: {
            width: 405,
            height:316,
          },
        },
      },
      {
        breakpoint: 1200,
        options: {
          chart: {
            width: 405,
            height:326,
          },
        },
      },
      {
        breakpoint: 768,
        options: {
          chart: {
            width: 400,
            height:326
          },
        },
      },
      {
        breakpoint: 600,
        options: {
          chart: {
            width: 400,
            height:326
          },
        },
      },
      {
        breakpoint: 500,
        options: {
          chart: {
            width: 400,
          },
        },
      },
      {
        breakpoint: 400,
        options: {
          chart: {
            width: 340,
          },
        },
      },
      {
        breakpoint: 992,
        options: {
          chart: {
            width: 405,
          },
        },
      },
    ],
  };

  return (
    <div className="  bg-white p-7 lg:mt-0 mt-6 rounded-[15px] shadow-default dark:border-strokedark dark:bg-boxdark ">
      <div className="mb-4  gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
          {t("statistic.6")}
          </h4>
        </div>
      </div>

      <div>
        <div id="chartTwo" className="-ml-5 -mb-9">
          <ReactApexChart
            options={options}
            series={state.series}
            width={455}
            height={300}
            type="bar"
          />
        </div>
      </div>
    </div>
  );
};

export default ChartOne;

