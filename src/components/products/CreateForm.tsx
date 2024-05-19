import { Link } from 'react-router-dom';

import { IoIosAddCircleOutline } from 'react-icons/io';
import Tbody from './Tbody';
import { useFetchProducPaginationQuery } from '../../features/product/apiSlice';
import Loader from '../../common/Loader';
import { useEffect, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next';

const CreateForm = () => {
  const [language, setLanguage] = useState<string | null>(localStorage.getItem("i18nextLng" || "en"));

  useEffect(() => {
    setLanguage(localStorage.getItem("i18nextLng"));
  }, []);

  
  let content;
  let currentPages: any;

  const [page, setPage] = useState<any>(1);
  const { isSuccess, isLoading, data } = useFetchProducPaginationQuery(page);

  function handlePagination(id: number) {
    setPage(id);
  }
  const pageDecrement = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const pageIncrement = () => {
    if (page < currentPages.length) {
      setPage(page + 1);
    } else {
    }
  };
  const { t } = useTranslation();

  if (isSuccess && data) {
    content = data?.data?.map((item: any, index: number) => {
      return <Tbody item={item} key={index} />;
    });
   
    
    

    const pageLength = Math.ceil(data?.meta.total / data.meta.per_page);

    currentPages = Array.from({ length: pageLength }).map(
      (_, index: number) => (
        <button
          onClick={() => handlePagination(index + 1)}
          key={index}
          aria-current="page"
          className="relative focus:bg-bodydark2 focus:text-white inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset  hover:bg-gray-3  "
        >
          {index + 1}
        </button>
      ),
    );
  }


  return (
    <>
      <div className="flex ">
        <div className="flex  2xsm:flex-row flex-col  justify-between w-full    ">
          <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
            {t('product.0')}
          </h4>
          <Link
            to="/admin/productForm/:id"
            className="bg-successOpacity py-5 w-9/12  space-x-2 text-[16px] px-2 rounded-sm dark:bg-[#0ab39c26] justify-center flex items-center h-[40px] max-w-[153px] hover:text-white hover:bg-success"
          >
            <IoIosAddCircleOutline />
            {t('product.1')}
          </Link>
        </div>
      </div>
      <input
        type="text"
        placeholder=" search..."
        className="max-w-[243px] w-full py-2 my-4  pr-4 pl-9 focus:outline-none rounded-md   "
      />

      {isLoading ? (
        <Loader />
      ) : (
        <div className="rounded-sm   shadow-default dark:border-strokedark dark:bg-boxdark ">
          <div className="max-w-full overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-2 text-[14px] text-left dark:bg-meta-4">
                  <th className="min-w-[50px] py-4 px-4 font-medium text-black dark:text-white">
                    ID
                  </th>
                  <th className="min-w-[120px] py-4 px-4  font-medium text-black dark:text-white xl:pl-11">
                    {t('product.2')}
                  </th>
                  <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                    {t('product.3')}
                  </th>
                 
                  <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                    {t('product.5')}
                  </th>
                  <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                    {t('product.6')}
                  </th>
                  <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                    {t('product.7')}
                  </th>

                  <th className="py-4 px-4  font-medium text-black dark:text-white">
                    {t('product.8')}
                  </th>
                </tr>
              </thead>
              <tbody>{content}</tbody>
            </table>
          </div>
        </div>
      )}
     
    </>
  );
};

export default CreateForm;