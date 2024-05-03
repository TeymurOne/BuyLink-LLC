import { Link } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import {
  IMemberApiResponse,
  useFetchMemberDataQuery,
} from '../../features/members/apiSlice';
import Tbody from './Tbody';
import Loader from '../../common/Loader';
import { useTranslation } from 'react-i18next';
import create from '../../images/action-icon/create.svg';
import TbodyResponsive from './TbodyResponsive';

const CreateForm: React.FC = () => {
  const { t } = useTranslation();

  const [page, setPage] = useState<any>(1);
  const { data, isSuccess, isLoading } = useFetchMemberDataQuery(page);

  let currentPages: any;

  let content: any;

  const handlePagination = (id: number) => {
    setPage(id);
  };

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
    content = data.data?.map((item: IMemberApiResponse, index: number) => (
      <Tbody key={index} item={item} />
    ));

    const pageLength = Math.ceil(data?.meta?.total / data?.meta?.per_page);

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
    <div>
      <div className="flex justify-between flex-wrap">
        <div className="flex flex-col w-60">
          <h4 className=" text-xl font-semibold text-black dark:text-white">
            {t('member.0')}
          </h4>
          <input
            type="text"
            placeholder=" search..."
            className="max-w-70 w-full shadow-2 rounded-xl py-2 my-4   pl-9 focus:outline-none   "
          />
        </div>
        <Link
          to="/admin/form"
          className="bg-white text-xs font-medium  mb-4 lg:mb-0 md:mb-0 sm:mb-0 space-x-2  rounded-md  justify-center flex items-center h-9 w-full max-w-35 "
        >
          <img src={create} alt="Create icon" />
          {t('member.1')}
        </Link>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="rounded-sm  md:block hidden  shadow-default  dark:border-strokedark dark:bg-boxdark ">
            <div className="max-w-full  border  rounded-lg border-tborder overflow-hidden   overflow-x-auto   ">
              <table className="w-full table-auto bg-white    ">
                <thead>
                  <tr className=" bg-white text-title-2xsm font-poppins text-black text-left dark:bg-meta-4">
                    <th className="w-14.5 h-10  border-b border-r  border-tborder px-4  font-medium ">
                      ID
                    </th>
                    <th className="min-w-24.5 py-2 border-b border-r  border-tborder px-4  lg:pl-10  md:pl-4  sm:pl-0 font-medium  ">
                      {t('member.2')}
                    </th>
                    <th className="min-w-24.5 py-2 border-b border-r  border-tborder px-4 font-medium ">
                      {t('member.3')}
                    </th>
                    <th className="min-w-24.5 border-b border-r  border-tborder py-2 px-4 font-medium ">
                      {t('member.4')}
                    </th>
                    <th className="min-w-24.5 border-b border-r  border-tborder py-2 px-4 font-medium ">
                      {t('member.5')}
                    </th>

                    <th className=" min-w-24.5 border-b border-l  border-tborder  py-2 px-4  font-medium ">
                      {t('member.6')}
                    </th>
                  </tr>
                </thead>
                <tbody>{content}</tbody>
              </table>
            </div>
          </div>
          {data?.data.map((item:any, index) => {
            return <TbodyResponsive  key={index} item={item} />;
          })}
        </>
      )}
      <div className="flex items-center justify-between my-4    px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <a
            href="#"
            className="relative inline-flex items-center rounded-md border  bg-white px-4 py-2 text-sm font-medium "
          >
            Previous
          </a>
          <a
            href="#"
            className="relative ml-3 inline-flex items-center rounded-md border  bg-white px-4 py-2 text-sm font-medium "
          >
            Next
          </a>
        </div>
        {currentPages?.length > 1 && (
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium ">
                Showing <span >1</span> to
                <span >10</span> of
                <span >97</span> results
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

      {/* pagination */}
    </div>
  );
};

export default CreateForm;
