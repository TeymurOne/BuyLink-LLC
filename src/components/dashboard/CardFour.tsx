import { useTranslation } from 'react-i18next';
import { useGetStatisticsQuery } from '../../features/branch/apiSlice';
import total from '../../images/statistics/total.svg';

const CardFour = () => {
  const { data } = useGetStatisticsQuery('');
  const { t } = useTranslation();

  return (
    <div className="w-full max-w-80 rounded-2xl  border    border-black border-opacity-10   bg-white px-6 pb-6         pt-4    shadow-sm dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-12.5 w-12.5   items-center  justify-center rounded  bg-white300 dark:bg-meta-4">
        <img src={total} alt="Total Icon " />
      </div>

      <div className="flex flex-wrap    pt-3 font-normal    text-black200 dark:text-white    ">
        <p className=" mr-auto   font-inter   font-normal  text-black200        lg:text-lg">
          {t('statistic.5')} &nbsp;
        </p>

        <h4 className=" font-medium       dark:text-white lg:text-3xl">
          {data?.total_transactions_amount}
        </h4>
      </div>
    </div>
  );
};

export default CardFour;
