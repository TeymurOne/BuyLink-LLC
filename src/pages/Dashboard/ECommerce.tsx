import CardFive from '../../components/CardFive.tsx';
import CardFour from '../../components/CardFour.tsx';
import CardOne from '../../components/CardOne.tsx';
import CardThree from '../../components/CardThree.tsx';
import CardTwo from '../../components/CardTwo.tsx';
import ChartOne from '../../components/Chart/ChartOne.tsx';
import ChartTwo from '../../components/Chart/ChartTwo.tsx';
import RatingStar from '../../components/RatingStar.tsx';
import Review from '../../components/Review.tsx';
import { useGetReviewQuery } from '../../features/statistcs/apiSlice.tsx';

const ECommerce = () => {
  let content;
  const { isSuccess, data } = useGetReviewQuery('');
  if (isSuccess) {
    content = data?.data.map((item:any, index:number) => {
      return <Review item={item} key={index} />;
    });
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
        <div className="overflow-scroll max-h-[340px]">
        {content}
        </div>
      </div>
    </>
  );
};

export default ECommerce;
