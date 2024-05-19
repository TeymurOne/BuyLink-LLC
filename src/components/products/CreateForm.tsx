import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Loader from '../../common/Loader';
import create from '../../images/action-icon/create.svg';
import Pagination from './Pagination';
import Tbody from './Tbody';
import TbodyResponsive from './TbodyResponsive';
import { useFetchProducPaginationQuery } from '../../features/product/apiSlice';
import { pageLength } from '../../features/pagination/paginationSlice';
import { RootState } from '../../app/api/store';
import TableSkeleton from '../../skeleton/TableSkeleton';

const CreateForm = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { page } = useSelector((store:RootState) => store.PaginationSlice);
  const { isSuccess, isLoading, data } = useFetchProducPaginationQuery(page);
  
  useEffect(() => {
    if (isSuccess && data) {
      const currentpage = Math.ceil(data.meta.total / data.meta.per_page);
      dispatch(pageLength(currentpage));
    }
  }, [isSuccess, data, dispatch]);

  const content =
    isSuccess && data &&
    data.data.map((item:any, index:number) => <Tbody item={item} key={index} />);
    

  const responsiveContent = data && data.data.map((item:any, index:number) => <TbodyResponsive key={index} item={item} />);

  return (
    <>
      <div className="flex">
        <div className="flex  2xsm:flex-row flex-col  justify-between w-full    ">
          <h4 className=" text-xl font-semibold text-black dark:text-white">
            {t('product.0')}
          </h4>
          <Link
            to="/admin/productForm/:id"
            className="bg-white text-xs font-medium  mb-4 lg:mb-0 md:mb-0 sm:mb-0 space-x-2  rounded-md  justify-center flex items-center h-9 w-full max-w-35"
          >
            <img src={create} alt="Create icon" />
            {t('product.1')}
          </Link>
        </div>
      </div>
      <input
        type="text"
        placeholder=" search..."
        className="max-w-70 w-full shadow-2 rounded-xl py-2 my-4   pl-9 focus:outline-none    "
      />

      {isLoading ? (
          <TableSkeleton count="10" height="40"/>

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
                      {t('product.2')}
                    </th>
                    <th className="min-w-24.5 py-2 border-b border-r  border-tborder px-4 font-medium ">
                      {t('product.3')}
                    </th>
                    <th className="min-w-24.5 border-b border-r  border-tborder py-2 px-4 font-medium ">
                      {t('product.5')}
                    </th>
                    <th className="min-w-24.5 border-b border-r  border-tborder py-2 px-4 font-medium ">
                      {t('product.6')}
                    </th>

                    <th className=" min-w-24.5 border-b border-l  border-tborder  py-2 px-4  font-medium ">
                      {t('product.7')}
                    </th>
                    <th className=" min-w-24.5 border-b border-l  border-tborder  py-2 px-4  font-medium ">
                      {t('product.8')}
                    </th>
                  </tr>
                </thead>
                <tbody>{content}</tbody>
              </table>
            </div>
          </div>
          {responsiveContent}

          <Pagination />
        </>
      )}
    </>
  );
};

export default CreateForm;
