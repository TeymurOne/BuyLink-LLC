import { Link } from 'react-router-dom';

import { IoIosAddCircleOutline } from 'react-icons/io';
import Tbody from './Tbody';
import {  useFetchProducPaginationQuery } from '../../features/product/apiSlice';
import Loader from '../../common/Loader';
import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const CreateForm = () => {
  let content;
  let currentPages:any
  
  const [page, setPage] = useState<any>(1);
  const { isSuccess, isLoading, data } = useFetchProducPaginationQuery(page);

  

  function handlePagination(id:number) {
    console.log(id);
    
    setPage(id)
    
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



  if (isSuccess && data) {
    content = data?.data?.map((item: any, index: number) => {
      return <Tbody item={item} key={index} />;
    });
     const pageLength=Math.ceil(data?.meta.total / data.meta.per_page)

     currentPages = Array.from({ length: pageLength }).map((_, index: number) => (
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
            Products:
          </h4>
          <Link
            to="/admin/productform"
            className="bg-successOpacity py-5 w-9/12  space-x-2 text-[16px] px-2 rounded-sm dark:bg-[#0ab39c26] justify-center flex items-center h-[40px] max-w-[153px] hover:text-white hover:bg-success"
          >
            <IoIosAddCircleOutline />
            Create Product
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
                  IMAGE
                </th>
                <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                  Title
                </th>
                <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                  Description
                </th>
                <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                  Price
                </th>
                <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                  Discount Price
                </th>
                <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                  Category
                </th>

                <th className="py-4 px-4  font-medium text-black dark:text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>{content}</tbody>
          </table>
        </div>
      </div>
      )}
      <div className="flex items-center justify-between my-4  border-gray-200  px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <a
            href="#"
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Previous
          </a>
          <a
            href="#"
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Next
          </a>
        </div>
        {currentPages?.length > 1 && (
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">{page}</span> to
                <span className="font-medium">10</span> of
                <span className="font-medium">97</span> results
              </p>
            </div>
            <div>
              <nav
                className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                <button
                  disabled={page === 1}
                  onClick={pageDecrement}
                  className={`relative ${
                    page == 1 ? 'opacity-40' : 'opacity-100 '
                  } inline-flex items-center rounded-l-md px-2 py-2  ring-1 ring-inset ring-gray-300 hover:bg-gray-2 focus:z-20 focus:outline-offset-0`}
                >
                  <span className="sr-only">Previous</span>
                  <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                </button>
                {currentPages}
                <button
                  disabled={page == page.toString().length + 1}
                  onClick={pageIncrement}
                  className={`relative ${
                    page.length - 1 ? 'opacity-40' : 'opacity-100'
                  } inline-flex items-center rounded-r-md px-2 py-2  ring-1 ring-inset`}
                >
                  <span className="sr-only">Next</span>
                  <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </nav>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CreateForm;
