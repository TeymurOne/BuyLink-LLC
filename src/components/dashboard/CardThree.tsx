import { useTranslation } from "react-i18next";
import { useGetStatisticsQuery } from "../../features/branch/apiSlice";
import transactions from '../../images/statistics/transactions.svg'

const CardThree = () => {
  const { data } = useGetStatisticsQuery('')
  const { t } = useTranslation();

  return (  
 







<div className="rounded-[15px] mr-auto  p-4 shadow-1       max-w-full w-full border-stroke bg-white   dark:border-strokedark dark:bg-boxdark">
<div className="flex h-12.5 w-12.5   rounded  items-center justify-center  bg-[#E1EBFF] dark:bg-meta-4">
  <img src={transactions} alt="refers" />
</div>

<div className='grid place-items-start  grid-cols-2 lg:grid-cols-1 pt-4'>
<div className="flex lg:flex-row flex-col w-full   ">
  <span className=" lg:text-[0.825em]      xsm:text-[1.30em]  mr-auto font-normal">{t('statistic.3')}</span>

  <h4 className="text-[14px] font-bold text-black dark:text-white">
  {data?.today_transactions}
  </h4>
</div>
<div className="flex lg:flex-row flex-col w-full   pb-3  items-end justify-between">
  <span className=" lg:text-[0.825em]      xsm:text-[1.30em] mr-auto font-normal text-[#1C274C]">
    {t('statistic.4')}
  </span>

  <h4 className="text-[14px] font-bold text-black dark:text-white">
  {data?.total_transactions}
  </h4>
</div>
</div>

</div>
  );
};

export default CardThree;
