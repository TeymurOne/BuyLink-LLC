import { IoIosAddCircleOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import { IMemberApiResponse, useFetchMemberDataQuery} from '../../features/members/apiSlice';
import Tbody from './Tbody';
import Loader from '../../common/Loader';
import { useTranslation } from 'react-i18next';
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
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
          {t('member.0')}
          </h4>
          <input
            type="text"
            placeholder=" search..."
            className="w-60 py-2 my-4  pr-4 pl-9 focus:outline-none rounded-md   "
          />
        </div>
        <Link
          to="/admin/form"
          className="bg-successOpacity py-3 space-x-2 text-[16px] rounded-md dark:bg-[#0ab39c26] justify-center flex items-center h-[40px] w-[163px] hover:text-white hover:bg-success"
        >
          <IoIosAddCircleOutline />
         {t("member.1")}
        </Link>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="rounded-sm   shadow-default dark:border-strokedark dark:bg-boxdark ">
          <div className="max-w-full  overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-2 text-[14px] text-left dark:bg-meta-4">
                  <th className="min-w-[50px] py-4 px-4  font-medium ">ID</th>
                  <th className="min-w-[120px] py-4 px-4  lg:pl-10  md:pl-4  sm:pl-0 font-medium  ">
                    {t("member.2")}
                  </th>
                  <th className="min-w-[120px] py-4 px-4 font-medium ">
                  {t("member.3")}
                  </th>
                  <th className="min-w-[120px] py-4 px-4 font-medium ">
                  {t("member.4")}
                  </th>
                  <th className="min-w-[120px] py-4 px-4 font-medium ">
                  {t("member.5")}
                  </th>

                  <th className=" min-w-[120px] py-4 px-4  font-medium ">
                  {t("member.6")}
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
              <p className="text-sm ">
                Showing <span className="font-medium">1</span> to
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

      {/* pagination */}
    </div>
  );
};

export default CreateForm;
