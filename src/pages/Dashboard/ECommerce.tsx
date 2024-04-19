import CardFour from '../../components/dashboard/CardFour.tsx';
import CardOne from '../../components/dashboard/CardOne.tsx';
import CardThree from '../../components/dashboard/CardThree.tsx';
import CardTwo from '../../components/dashboard/CardTwo.tsx';
import ChartOne from '../../components/Chart/ChartOne.tsx';
import RatingStar from '../../components/RatingStar.tsx';
import Review from '../../components/Review.tsx';
import { useGetReviewQuery } from '../../features/statistcs/apiSlice.tsx';
import Chart from '../Chart.tsx';
import ChartTwo from '../../components/Chart/ChartTwo.tsx';

const ECommerce = () => {
  let content;
  const { isSuccess, data } = useGetReviewQuery('');
  if (isSuccess && data?.data) {
    if (data.data.length > 0) {
      content = data.data.map((item: any, index: number) => {
        return <Review item={item} key={index} />;
      });
    } else {
      content = <Review  />;
    }
  }
  return (
    <>
      <div className="  flex lg:flex-row flex-col      space-x-4 ">
        <div className="lg:max-w-[681px] max-w-full  w-full   ">
          <div className="  w-full flex  space-x-2 justify-between     ">
            <CardOne />
            <CardFour />
          </div>
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-2  mt-3 items-baseline   ">
            <CardTwo />
            <CardThree />
          </div>
        </div>
        <div>
          <ChartOne />
        </div>
      </div>

      <div className=" flex   lg:flex-row flex-col   max-w-full w-full          dark:border-strokedark dark:bg-boxdark">
        <div className='bg-white 1200px:flex-row flex-col flex h-[340px] max-w-[678px]  w-full  overflow-x-hidden  pt-4     mt-2  mr-2 rounded-[15px] '>
          <RatingStar/>
          <div className='flex flex-col  overflow-y-auto min-w-[330px] h-[300px]  '>
          {content}
          </div>
        

        </div>
        <div className='items-baseline '>
        <ChartTwo/>
        </div>
   
        {/* <RatingStar /> */}
        {/* <div className="overflow-auto max-h-[340px]">
        {content}
        </div> */}
      </div>
    </>
  );
};

export default ECommerce;
