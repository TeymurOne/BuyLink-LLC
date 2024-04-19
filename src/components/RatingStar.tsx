import { useTranslation } from 'react-i18next';
import Loader from '../common/Loader';
import { useGetStatisticsQuery } from '../features/branch/apiSlice';

const RatingStar = () => {
  const { data, isSuccess, isLoading } = useGetStatisticsQuery('');
  const average_rating: any = data?.rating.rounded_average_rating;
  const { t } = useTranslation();
  let content;
  const stardata = ['0', '1', '2', '3', '12'];

  if (isSuccess) {
    content = stardata.map((rate: any, index: number) => {
      return (
        <div className="flex items-center my-1" key={index}>
          <Star average_rating={rate[0]} size={10} />
          <div className="w-[214px] h-[4px]  mx-4 bg-[#D9D9D9] rounded ">
            <div
              className="h-[4px] bg-[#FF9D42]   rounded"
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
        <div className=" p-4 w-[340px]  bg-white    dark:border-strokedark dark:bg-boxdark">
          <div>
            <h2 className="text-[1.5em] font-inter font-medium text-black">
              Rating and Reviews
            </h2>

            <div className="flex pt-4 pb-2 ">
              <h2 className="text-[#222222] mr-[30px] text-3xl font-bold">
                {data?.rating?.average_rating}/ 5
              </h2>
              <span>
                <Star average_rating={average_rating} size={20} />
                <p className='text-[#5B5B5B] text-[0.700em] font-inter font-400 mt-[-10px]'>
                  {data?.rating?.total_review_count} {t('statistic.8')}
                </p>
              </span>
            </div>
          </div>
          {content}
        </div>
      )}
    </>
  );
};

export default RatingStar;

interface StarProps {
  average_rating: number;
  size: number;
}
export function Star({ average_rating, size }: StarProps) {
  return (
    <>
      <div className="flex items-center mb-2">
        {Array.from({ length: 5 }, (_, index) => (
          <svg
            key={index}
            className={`w-[${size}px] h-[${size}px] ${
              average_rating > index ? 'text-[#FCD34D]' : 'text-[#C4C4C4]'
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
