import { FaArrowLeft } from 'react-icons/fa6';
import { useParams } from 'react-router-dom';
import { useFetchOperatorQuery } from '../../features/operator/apiSlice';
import Loader from '../../common/Loader';

const Details = () => {
  const { id } = useParams();
  const { isSuccess, data } = useFetchOperatorQuery('');
  let content;
  if (isSuccess && id) {
    const items = isSuccess && Array.isArray(data?.data) ? data.data : [];

    content = items.find((item: any) => item.id == id);
  }

  return (
    <>
      {content ? (
        <>
          <h2 className="mb-2 flex items-center space-x-4 font-semibold italic">
            Operator Details: <span>{id}</span>{' '}
            <FaArrowLeft onClick={() => window.history.back()} />
          </h2>
          <div className="max-w-[1200px]  font-medium text-[17px] rounded-md w-full dark:bg-boxdark bg-white h-auto p-1">
            <div className="flex justify-between lg:w-1/3 md:w-1/2 py-4 px-3  ">
              <span className=" font-medium text-black dark:text-white ">
                ID
              </span>
              <p className=" font-medium text-black dark:text-white ">{id}</p>
            </div>

            <p className="border-b border-stroke  dark:border-strokedark  py-1"></p>
            <div className="flex justify-between lg:w-1/3 md:w-1/2 py-4 px-3  ">
              <span className=" font-medium text-black dark:text-white ">
                Branch
              </span>
              <p className=" font-medium text-black dark:text-white ">
                {content?.branch.name}
              </p>
            </div>
            <p className="border-b border-stroke  dark:border-strokedark  py-1"></p>
            <div className="flex justify-between lg:w-1/3 md:w-1/2 py-4 px-3  ">
              <span className=" font-medium text-black dark:text-white  ">
                Name
              </span>
              <p className=" font-medium text-black dark:text-white ">
                {content?.name}
              </p>
            </div>
            <p className="border-b border-stroke  dark:border-strokedark  py-1"></p>
            <div className="flex justify-between lg:w-1/3 md:w-1/2 py-4 px-3  ">
              <span className=" font-medium text-black dark:text-white ">
                Email
              </span>
              <p className=" font-medium text-black dark:text-white ">
                {content?.email}
              </p>
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Details;
