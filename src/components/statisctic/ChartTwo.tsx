import { ApexOptions } from 'apexcharts';
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useTranslation } from 'react-i18next';

const options: ApexOptions = {
  colors: ['#2d83b6', '#F31F1F'],
  chart: {
    type: 'bar',
    height: 335,
    stacked: false,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },

  responsive: [
    {
      breakpoint: 1536,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 0,
            columnWidth: '25%',
          },
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 1,
      columnWidth: '70%',
      borderRadiusApplication: 'end',
      borderRadiusWhenStacked: 'last',
    },
  },
  dataLabels: {
    enabled: false,
  },

  xaxis: {
    categories: [
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
      'Jan',
      'Feb',
      'Mar',
      'Apr',
    ],
  },
  yaxis: {
    min: 0.0,
    max: 2.0,
    tickAmount: 5,
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left',
    fontWeight: 400,
    fontSize: '12px',
    fontFamily: 'Poppins',
    markers: {
      radius: 99,
    },
  },
  fill: {
    opacity: 1,
  },
};

interface ChartTwoState {
  series: {
    name: string;
    data: number[];
  }[];
}

interface ChartTwoProps {
  transactions: { [key: string]: number };
  referral: { [key: string]: number };
}

const ChartTwo: React.FC<ChartTwoProps> = ({ transactions, referral }) => {
  const [state, setState] = useState<ChartTwoState>({
    series: [],
  });
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const transaction = Object.entries(transactions);
    const referraldata = Object.entries(referral);
    const transactionsData = transaction.map(([key, value]) => value);
    const referralData = referraldata.map(([key, value]) => value);
    const nameText = (
      <p className="text-xs font-normal dark:text-white">{t('statistic.4')}</p>
    );
    const nameDesc = (
      <p className="text-xs font-normal dark:text-white">{t('statistic.5')}</p>
    );

    setState({
      series: [
        {
          name: nameText.props.children,
          data: referralData,
        },
        {
          name: nameDesc.props.children,
          data: transactionsData,
        },
      ],
    });
  }, [transactions, referral, t, i18n.language]);

  return (
    <div className="col-span-12  rounded-2xl border border-stroke bg-white p-7.5 shadow-sm  dark:border-strokedark dark:bg-boxdark xl:col-span-6">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-medium text-black dark:text-white">
            {t('statistic.6')}
          </h4>
        </div>
      </div>

      <div>
        <div id="chartTwo" className="-mb-9 -ml-5">
          <ReactApexChart
            options={options}
            series={state.series}
            type="bar"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartTwo;
