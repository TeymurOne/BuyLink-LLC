import { useTranslation } from 'react-i18next';
import Loader from '../common/Loader';
import { useGetStatisticsQuery } from '../features/statistcs/apiSlice';

const RatingStar = () => {
  const { data, isSuccess, isLoading } = useGetStatisticsQuery('');
  console.log(data, 'star');
  
  const average_rating: any = data?.rating.rounded_average_rating;
  const { t } = useTranslation();
  let content;
  const stardata = ['0', '1', '2', '3', '4'];

  if (isSuccess) {
    content = stardata.map((rate: any, index: number) => {
      return (
        <div className="flex items-center xl:pr-10  my-1" key={index}>
          <Star average_rating={rate[0]} size={10} />
          <div className="max-w-full w-full h-1 mx-4 bg-gray900 rounded ">
            <div
              className="h-1 bg-meta-6   rounded"
              style={{ width: `${rate[1]}%` }}
            />
          </div>
        </div>
      );
    });
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className=" bg-white  dark:bg-boxdark  pl-10  py-8 xl:col-span-5 col-span-full   ">
            <h2 className="text-4xl  dark:text-white  font-medium font-inter    text-black">
              
              {t("statistic.10")}
            </h2>

            <div className="flex py-6 space-x-4 ">
              <h2 className="text-black-3 dark:text-white   text-3xl font-bold">
                {data?.rating?.average_rating}/ 5
              </h2>
              <span>
                <Star average_rating={average_rating} size={20} />
                <p className="text-tdColor dark:text-white  text-xs font-inter font-400 ">
                  {data?.rating?.total_review_count} {t('statistic.8')}
                </p>
              </span>
            </div>
            {content}
          </div>
           
       
        </>
      )}
    </>
  );
};

export default RatingStar;

interface StarProps {
  average_rating: any;
  size?: number;
}
export function Star({ average_rating, size }: StarProps) {
  return (
    <>
      <div className="flex items-center mb-2">
        {Array.from({ length: 5 }, (_, index) => (
          <svg
            key={index}
            className={`w-2.5 h-2.5 ${
              average_rating > index ? 'text-meta-8' : 'text-border2'
            } me-1`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        ))}
      </div>
    </>
  );
}
