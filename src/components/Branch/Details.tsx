import { useParams } from 'react-router-dom';
import { IpostData } from './Form';
import { FaArrowLeft } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import { useFetchBranchAllQuery } from '../../features/branch/apiSlice';
import Loader from '../../common/Loader';


const Details = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const { isSuccess, data } = useFetchBranchAllQuery('');
  let content;
  if (isSuccess && id) {
    content = data?.data.find((item: IpostData) => item.id == id);
  }
  
 

  return (
    <>
      {content ? (
        <>
          <h2 className="mb-2 flex items-center space-x-4 font-semibold italic">
            {t('branch.0')} {t('branch.11')}: <span>{content?.id}</span>{' '}
            <FaArrowLeft onClick={() => window.history.back()} />
          </h2>
          <div className="max-w-[1200px]  font-medium text-[17px] rounded-md w-full  dark:bg-strokedark bg-white h-auto p-1">
            <div className="flex justify-between lg:w-1/3 md:w-1/2 py-4 px-3  ">
              <span className=" font-medium text-black dark:text-white ">
                ID
              </span>
              <p className=" font-medium text-black dark:text-white">
                {content?.id}
              </p>
            </div>
            <div className="flex justify-between lg:w-1/3 md:w-1/2 py-4 px-3  ">
              <span className=" font-medium text-black dark:text-white ">
                Phone
              </span>
              <p className=" font-medium text-black dark:text-white">
                {content?.phone}
              </p>
            </div>

            <p className="border-b border-stroke  dark:border-strokedark  py-1"></p>
            <div className="flex justify-between lg:w-1/3 md:w-1/2 py-4 px-3  ">
              <span className=" font-medium text-black dark:text-white ">
                {' '}
                {t('branch.5')}
              </span>
              <p className=" font-medium text-black dark:text-white">
                {content?.address}
              </p>
            </div>
            <p className="border-b border-stroke  dark:border-strokedark  py-1"></p>
            <div className="flex justify-between lg:w-1/3 md:w-1/2 py-4 px-3  ">
              <span className=" font-medium text-black dark:text-white ">
                {' '}
                {t('branch.2')}
              </span>
              <p className=" font-medium text-black dark:text-white ">
                {content?.name}
              </p>
            </div>
            <p className="border-b border-stroke  dark:border-strokedark  py-1"></p>
            <div className="flex justify-between lg:w-1/3 md:w-1/2 py-4 px-3  ">
              <span className=" font-medium text-black dark:text-white ">
                {' '}
                {t('branch.3')}
              </span>
              <p className=" font-medium text-black dark:text-white ">
                {content?.lat}
              </p>
            </div>
            <div className="flex justify-between lg:w-1/3 md:w-1/2 py-4 px-3  ">
              <span className=" font-medium text-black dark:text-white ">
                {' '}
                {t('branch.4')}
              </span>
              <p className=" font-medium text-black dark:text-white ">
                {content?.lng}
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
