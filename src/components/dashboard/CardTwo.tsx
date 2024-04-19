import { useTranslation } from 'react-i18next';
import { useGetStatisticsQuery } from '../../features/branch/apiSlice';
import refers from '../../images/statistics/referes.svg';

const CardTwo = () => {
  const { data } = useGetStatisticsQuery('');

  const { t } = useTranslation();

  return (
    <>
      <div className="rounded-[15px] mr-auto  p-4 shadow-1       max-w-full w-full border-stroke bg-white   dark:border-strokedark dark:bg-boxdark">
        <div className="flex h-12.5 w-12.5   rounded  items-center justify-center  bg-[#E1EBFF] dark:bg-meta-4">
          <img src={refers} alt="refers" />
        </div>

       <div className='grid grid-cols-2 place-items-start lg:grid-cols-1 pt-4'>
       <div className="flex lg:flex-row w-full flex-col    ">
          <span className=" lg:text-[0.825em]      xsm:text-[1.30em]  mr-auto font-normal">{t('statistic.1')}</span>

          <h4 className="text-[14px] font-bold text-black dark:text-white">
            {data?.today_referer_claims}
          </h4>
        </div>
        <div className="flex flex-wrap  pb-3 w-full    items-end justify-between">
          <span className=" lg:text-[0.825em]      xsm:text-[1.30em] mr-auto font-normal text-[#1C274C]">
            {t('statistic.2')}
          </span>

          <h4 className="text-[14px] font-bold text-black dark:text-white">
            {data?.used_referer_claims_by_today}{' '}
          </h4>
        </div>
     </div>
    
      </div>
    </>
  );
};

export default CardTwo;
