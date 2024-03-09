import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { useFetchBranchAllQuery } from '../../features/branch/apiSlice';
import Tbody from './Tbody';
import { IpostData } from './Form';
import Loader from '../../common/Loader';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';
import { MapModal } from './MapModal';

const CreateForm = () => {
  const [lat, setLat] = useState<number>(40.405999043422824);
  const [lng, setLng] = useState<number>(49.91863556236839);
  const [branchName, setBranchName] = useState<string>('');
  const [allkordinat, setKordinat] = useState<any[]>([]);
  function pageDecrement() {
    if (page > 1) {
      setPage(page - 1);
    }
  }
  function pageIncrement() {
    if (page < currentPages.length) {
      setPage(page + 1);
    }
  }
  function handlePagination(pagebtn: number) {
    setPage(pagebtn);
  }
  const [page, setPage] = useState<number>(0);
  let content: any;
  let last: number | undefined;
  let toData: number | undefined;
  let fromData: number | undefined;
  let currentPage: number | undefined;
  let totalData: number | undefined;
  let currentPages: any;
  const { isSuccess, isLoading, data } = useFetchBranchAllQuery(page);

  useEffect(() => {
    if (isSuccess) {
      const coordinates: { lat: number; lng: number }[] = [];
      data.data?.forEach((item: IpostData) => {
        coordinates.push({ lat: item.lat, lng: item.lng });
      });
      setKordinat(coordinates);
    }
  }, [isSuccess, data]);
  

  if (isSuccess) {
    const { last_page, to, from, current_page, total, per_page } = data?.meta;
    totalData = total;
    last = last_page;
    toData = to;
    fromData = from;
    currentPage = current_page;
    content = data.data?.map((item: IpostData, index: number) => {
      return (
        <Tbody
          item={item}
          key={index}
          handeMapShow={() => handeMapShow(item)}
        />
      );
    });

    const pageLength = Math.ceil(total / per_page);
    currentPages = Array.from({ length: pageLength }).map((_, index) => {
      return (
        <button
          onClick={() => handlePagination(index + 1)}
          key={index}
          aria-current="page"
          className="relative focus:bg-bodydark2 focus:text-white inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset  hover:bg-gray-3  "
        >
          {index + 1}
        </button>
      );
    });
  }

  function handeMapShow(item: any) {
    
    
    setBranchName(item?.name)
    setLat(Number(item?.lat));
    setLng(Number(item?.lng));
  }
  const { t } = useTranslation();

  return (
    <>
      <div className="flex   justify-between flex-wrap">
        <div className="flex flex-col w-60">
          <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
            {t('branch.0')}
          </h4>
          <input
            type="text"
            placeholder=" search..."
            className="w-full py-2 my-4   pr-4 pl-9 focus:outline-none rounded-md   "
          />
        </div>
        <Link
          to="/admin/branchform"
          className="bg-successOpacity py-4 mb-4 lg:mb-0 md:mb-0 sm:mb-0 space-x-2 text-[16px] rounded-sm dark:bg-[#0ab39c26] justify-center flex items-center h-[40px] w-auto px-2 hover:text-white hover:bg-success"
        >
          <IoIosAddCircleOutline />
          {t('branch.1')}
        </Link>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="rounded-sm   shadow-default dark:border-strokedark dark:bg-boxdark ">
            <div className="max-w-full flex overflow-x-auto">
              <table className="w-[200px] table-auto">
                <thead className="">
                  <tr className="bg-gray-2 text-[14px]  text-left dark:bg-meta-4">
                    <th className="min-w-[120px] py-2 px-4  font-medium text-black dark:text-white xl:pl-11">
                      ID
                    </th>
                    <th className="min-w-[120px] py-2 px-4 font-medium text-black dark:text-white">
                      {t('branch.2')}
                    </th>

                    <th className="min-w-[120px] py-2 px-4 font-medium text-black dark:text-white">
                      {t('branch.5')}
                    </th>

                    <th className="py-2   px-6 font-medium text-black dark:text-white">
                      {t('branch.6')}
                    </th>
                    <th className="min-w-[100px] py-2 px-2 font-medium text-black dark:text-white">
                      Map
                    </th>
                  </tr>
                </thead>
                <tbody>{content}</tbody>
              </table>

            <div className='max-w-[700px] w-full'>
            <MapModal name={branchName} lat={lat} lng={lng} allkordinat={allkordinat}  />
            </div>
            </div>
          </div>
          {currentPages?.length > 1 && (
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

              <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-gray-700">
                    Showing <span className="font-medium">{fromData}</span> to
                    <span className="font-medium">{toData}</span> of
                    <span className="font-medium">{totalData}</span> results
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
                        page == 1 ? 'opacity-30' : 'opacity-100 '
                      } inline-flex items-center rounded-l-md px-2 py-2  ring-1 ring-inset ring-gray-300 hover:bg-gray-2 focus:z-20 focus:outline-offset-0`}
                    >
                      <span className="sr-only">Previous</span>
                      <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                    {currentPages}
                    <button
                      disabled={page == last}
                      onClick={pageIncrement}
                      className={`relative ${
                        page === last ? 'opacity-30' : 'opacity-100'
                      } inline-flex items-center rounded-r-md px-2 py-2  ring-1 ring-inset`}
                    >
                      <span className="sr-only">Next</span>
                      <ChevronRightIcon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default CreateForm;
