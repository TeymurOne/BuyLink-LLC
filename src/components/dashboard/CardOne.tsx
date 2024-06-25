import { useTranslation } from 'react-i18next';
import { useGetStatisticsQuery } from '../../features/statistcs/apiSlice';
import product from '../../images/statistics/product.svg';

const CardOne = () => {
  const { data } = useGetStatisticsQuery('');
  const { t } = useTranslation();

  return (
    <div className="mr-auto w-full max-w-80  rounded-2xl  border   border-black border-opacity-10   bg-white px-6 pb-6         pt-4    shadow-sm dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-12.5 w-12.5   items-center  justify-center rounded  bg-white300 dark:bg-meta-4">
        <img src={product} alt="Total Icon " />
      </div>

      <div className="flex flex-wrap    pt-3 font-normal    text-black200 dark:text-white    ">
        <p className=" mr-auto   font-inter   font-normal  text-black200        lg:text-lg">
          {t('statistic.0')} &nbsp;
        </p>

        <h4 className=" font-medium       dark:text-white lg:text-3xl">
          {data?.products_count}
        </h4>
      </div>
    </div>
  );
};

export default CardOne;
