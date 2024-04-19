import { useTranslation } from 'react-i18next';
import { useGetStatisticsQuery } from '../../features/statistcs/apiSlice';
import product from '../../images/statistics/product.svg';

const CardOne = () => {
  const { data } = useGetStatisticsQuery('');
  const { t } = useTranslation();

  return (
    <div className="rounded-[15px] p-4 mr-auto   w-full max-w-[332px]  xsm:h-auto h-[186px]           border-stroke bg-white    shadow-3 dark:border-strokedark dark:bg-boxdark">
    <div className="flex h-12.5 w-12.5 mb-[10px]   rounded  items-center justify-center  bg-[#E1EBFF] dark:bg-meta-4">
      <img src={product} alt="Total Icon " />
    </div>

    <div className="flex    flex-wrap font-normal  1250px:h-auto h-[74px]  text-[#1C274C] dark:text-white    ">
      <p className=" lg:text-[1.25em]    mr-auto text-[0.875em] text-[#797979]  lg:text-[#1C274C]  font-inter        font-normal">{t('statistic.0')}               &nbsp;</p>
      
      <h4 className=" text-[1.25em]      xsm:text-[1.25em]  font-medium dark:text-white">{data?.products_count}</h4>
    </div>

  
  </div>
  );
};

export default CardOne;
