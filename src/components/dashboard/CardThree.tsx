import { useTranslation } from 'react-i18next';
import { useGetStatisticsQuery } from '../../features/branch/apiSlice';
import transactions from '../../images/statistics/transactions.svg';

const CardThree = () => {
  const { data } = useGetStatisticsQuery('');
  const { t } = useTranslation();

  return (
    <>
     

      <div className="rounded-2xl   p-4 shadow-sm border-black border-opacity-10 border         max-w-full w-full  bg-white   dark:border-strokedark dark:bg-boxdark">
        <div className="flex h-12.5 w-12.5   rounded  items-center justify-center  bg-white300 dark:bg-meta-4">
          <img src={transactions} alt="Transactions icon" />
        </div>

        <div className="grid grid-cols-2 place-items-start lg:grid-cols-1 pt-4">
          <div className="flex lg:flex-row w-full flex-col    ">
            <span className=" lg:text-lg     text-darkgray  mr-auto font-normal">
              {t('statistic.3')}
            </span>

            <h4 className="text-3xl font-medium  text-black dark:text-white">
              {data?.today_transactions}
            </h4>
          </div>
          <div className="flex flex-wrap py-4   w-full    items-end justify-between">
            <span className=" text-lg mr-auto font-inter font-normal text-black200">
              {t('statistic.4')}
            </span>

            <h4 className="text-3xl font-inter font-medium text-black dark:text-white">
              {data?.total_transactions}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardThree;
