import { useTranslation } from 'react-i18next';
import { useGetStatisticsQuery } from '../../features/statistcs/apiSlice';
import product from '../../images/statistics/product.svg';

const CardOne = () => {
  const { data } = useGetStatisticsQuery('');
  const { t } = useTranslation();

  return (
    <div className="rounded-2xl px-6 pt-4  pb-6  mr-auto   w-full max-w-80   border-black border-opacity-10 border         bg-white    shadow-sm dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-12.5 w-12.5   rounded  items-center justify-center  bg-white300 dark:bg-meta-4">
        <img src={product} alt="Total Icon " />
      </div>

      <div className="flex pt-3    flex-wrap font-normal    text-black200 dark:text-white    ">
        <p className=" lg:text-lg   mr-auto   text-black200  font-inter        font-normal">
          {t('statistic.0')} &nbsp;
        </p>

        <h4 className=" lg:text-3xl       font-medium dark:text-white">
          {data?.products_count}
        </h4>
      </div>
    </div>
  );
};

export default CardOne;
