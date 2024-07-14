import { useTranslation } from 'react-i18next';
import { useGetStatisticsQuery } from '../../features/branch/apiSlice';
import transactions from '../../images/statistics/transactions.svg';

const CardThree = () => {
  const { data } = useGetStatisticsQuery('');
  const { t } = useTranslation();

  return (
    <>
      <div className="w-full max-w-full rounded-2xl border border-black border-opacity-10 bg-white p-4 shadow-sm dark:border-strokedark dark:bg-boxdark">
        <div className="flex h-12.5 w-12.5 items-center justify-center rounded bg-white300 dark:bg-meta-4">
          <img src={transactions} alt="Transactions icon" />
        </div>

        <div className="grid grid-cols-2 place-items-start pt-4 lg:grid-cols-1">
          <div className="flex w-full flex-col lg:flex-row">
            <span className="mr-auto font-normal text-darkgray lg:text-lg">
              {t('statistic.3')}
            </span>

            <h4 className="text-3xl font-medium text-black dark:text-white">
              {data?.today_transactions}
            </h4>
          </div>
          <div className="flex w-full flex-wrap items-end justify-between py-4">
            <span className="mr-auto text-lg font-normal text-black200">
              {t('statistic.4')}
            </span>

            <h4 className="text-3xl font-medium text-black dark:text-white">
              {data?.total_transactions}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardThree;
