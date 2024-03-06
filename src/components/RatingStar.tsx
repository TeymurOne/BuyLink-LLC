import { useGetStatisticsQuery } from '../features/branch/apiSlice';

const RatingStar = () => {
  const { data } = useGetStatisticsQuery('');
  const average_rating = data?.rating.rounded_average_rating;

  return (
    <>
      <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
        <div>
          <h2 className="text-[#222222] text-3xl font-bold">
            {data?.rating?.average_rating}/ 5
          </h2>
          <p>Based on {data?.rating?.total_review_count} reviews</p>
        </div>
        <div className="flex items-center mb-2">
          {Array.from({ length: 5 }, (_, index) => (
            <svg
              key={index}
              className={`w-4 h-4 ${
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

        {Object.entries(data?.rating.rating_counts || {}).map(
          (rate: any, index: number) => {
            console.log(rate);
            
            return (
              <div className="flex items-center mt-4">
                <a
                  href="#"
                  className="text-sm font-medium  dark:text-starrating hover:underline"
                >
                  {rate[0]} star
                </a>
                <div className="w-2/4 h-4  mx-4 bg-[#D9D9D9] rounded ">
                  <div
                    className="h-4 bg-starrating  rounded"
                    style={{ width: `${rate[1]}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {rate[1]} %
                </span>
              </div>
            );
          },
        )}
      </div>
    </>
  );
};

export default RatingStar;
