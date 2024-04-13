import CardFive from '../../components/dashboard/CardFive.tsx';
import CardFour from '../../components/dashboard/CardFour.tsx';
import CardOne from '../../components/dashboard/CardOne.tsx';
import CardThree from '../../components/dashboard/CardThree.tsx';
import CardTwo from '../../components/dashboard/CardTwo.tsx';
import ChartOne from '../../components/Chart/ChartOne.tsx';
import ChartTwo from '../../components/Chart/ChartTwo.tsx';
import RatingStar from '../../components/RatingStar.tsx';
import Review from '../../components/Review.tsx';
import { useGetReviewQuery } from '../../features/statistcs/apiSlice.tsx';

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
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-2 2xl:gap-7.5">
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
        <CardFive/>
      </div>

      <div className="mt-4 gap-10 space-y-16 ">
        <ChartOne />
        <ChartTwo />
      </div>

      <div className="rounded-sm border px-4 grid grid-cols-1  md:grid-cols-2 md:gap-6 xl:grid-cols-2 2xl:gap-7.5     border-stroke bg-white py-6  dark:border-strokedark dark:bg-boxdark">
        <RatingStar />
        <div className="overflow-auto max-h-[340px]">
        {content}
        </div>
      </div>
    </>
  );
};

export default ECommerce;
