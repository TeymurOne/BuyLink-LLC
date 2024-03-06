import { useTranslation } from 'react-i18next';
import { FaArrowLeft } from 'react-icons/fa6';
import { useParams } from 'react-router-dom';
import { useFetchProducAllQuery } from '../../features/product/apiSlice';
import Loader from '../../common/Loader';

const Details = () => {
  const { id } = useParams();

  const { isSuccess, data } = useFetchProducAllQuery('');
  const stripHtmlTags = (html: any) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };

  const { t } = useTranslation();

  let content;
  let plainTextDescription;

  if (isSuccess && id) {
    content = data?.data.find((item: any) => item.id == id);
    plainTextDescription = stripHtmlTags(content.description);
  }

  console.log(content);
  
  return (
    <>
      {content ? (
        <>
          <h2 className="mb-2 flex items-center space-x-4 font-semibold italic">
            {t('product.0')} {t('product.12')} : <span>{id}</span>{' '}
            <FaArrowLeft onClick={() => window.history.back()} />
          </h2>
          <div className="max-w-[1200px]  font-medium text-[17px] rounded-md w-full dark:bg-boxdark bg-white h-auto p-1">
            <div className="flex justify-between lg:w-1/3 md:w-1/2 py-4 px-3  ">
              <span className=" font-medium text-black dark:text-white  ">
                Id
              </span>
              <p className=" font-medium text-black  dark:text-white  ">
                {content?.id}
              </p>
            </div>
            <p className="border-b border-stroke  dark:border-strokedark  py-1"></p>
            <div className="flex justify-between lg:w-1/3 md:w-1/2 py-4 px-3  ">
              <span className=" font-medium text-black dark:text-white  ">
                {t('product.3')}
              </span>
              <p className=" font-medium text-black  dark:text-white  ">
                {content?.title}
              </p>
            </div>
            <p className="border-b border-stroke  dark:border-strokedark  py-1"></p>
            <div className="flex justify-between lg:w-1/3 md:w-1/2 py-2 px-3  ">
              <span className=" font-medium text-black dark:text-white  ">
                {t('product.2')}
              </span>
              <img
                className="w-20 h-20 rounded-full"
                src={content?.image}
                alt=""
              />
            </div>
            <p className="border-b border-stroke  dark:border-strokedark  py-1"></p>
            <div className="flex justify-between lg:w-1/3 md:w-1/2 py-4 px-3  ">
              <span className=" font-medium text-black dark:text-white  ">
                {t('product.4')}
              </span>
              <p className=" font-medium text-black dark:text-white ">
                {plainTextDescription}
              </p>
            </div>
            <div className="flex justify-between lg:w-1/3 md:w-1/2 py-4 px-3  ">
              <span className=" font-medium text-black dark:text-white  ">
                {t('product.8')}
              </span>
              <p className=" font-medium text-black dark:text-white  ">
                {content?.categoyName}
              </p>
            </div>
            <p className="border-b border-stroke  dark:border-strokedark  py-1"></p>
            <div className="flex justify-between lg:w-1/3 md:w-1/2 py-4 px-3  ">
              <span className=" font-medium text-black dark:text-white ">
                {t('product.5')}
              </span>
              <p className=" font-medium text-black dark:text-white  ">
                {content?.price}
              </p>
            </div>
            <div className="flex justify-between lg:w-1/3 md:w-1/2 py-4 px-3  ">
              <span className=" font-medium text-black dark:text-white  ">
                {t('product.6')}
              </span>
              <p className=" font-medium text-black dark:text-white ">
                {content?.discount_price}
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
