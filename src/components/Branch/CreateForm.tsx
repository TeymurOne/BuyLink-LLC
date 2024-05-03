import { Link } from 'react-router-dom';
import create from '../../images/action-icon/create.svg';
import { useFetchBranchAllQuery } from '../../features/branch/apiSlice';
import Tbody from './Tbody';
import { IpostData } from './Form';

import { useTranslation } from 'react-i18next';

import TbodyResponsive from './TbodyResponsive';
import TableSkeleton from '../../skeleton/TableSkeleton';
import Map from './Map';
import MapSkeleton from '../../skeleton/Map';
import { CiSearch } from 'react-icons/ci';

const CreateForm = () => {
  let content: any;
  let allCoordinates: { lat: number | string; lng: number | string }[] = []; // butun datanin kordinatlari

  const { isSuccess, isLoading, data } = useFetchBranchAllQuery('');

  if (isSuccess) {
    content = data.data?.map((item: IpostData, index: number) => {
      allCoordinates.push({ lat: item?.lat, lng: item?.lng }); // butun datanin lat ve lng almaq ucun
      return <Tbody item={item} key={index} />;
    });
  }

  const { t } = useTranslation();

  return (
    <>
      <div className="flex   justify-between flex-wrap">
        <div className="flex flex-col w-60">
          <h4 className="mb-6 text-4xl font-medium text-black dark:text-white">
            {t('branch.0')}
          </h4>
          <p className="absolute top-52 text-lg   left-12 text-searchColor">
            {' '}
            <CiSearch />
          </p>

          <input
            type="text"
            placeholder=" search..."
            className="w-full py-2 my-4    pr-4 pl-9 focus:outline-none rounded-2xl shadow-md   "
          />
        </div>
        <Link
          to="/admin/branchform"
          className="bg-white text-xs font-medium  mb-4 lg:mb-0 md:mb-0 sm:mb-0 space-x-2  rounded-md  justify-center flex items-center h-9 w-full max-w-35 "
        >
          <img src={create} alt="Create icon" />
          {t('branch.1')}
        </Link>
      </div>
      {isLoading ? (
        <>
        
          <MapSkeleton />
          <TableSkeleton />
        </>
      ) : (
        <>
          <div className="w-full h-auto ">
        <Map allCoordinates={allCoordinates} />      {/*  butun kordinatlari Map gonderib orda hamisini gostermek */}
          </div>

          <div className="rounded-sm my-4  md:block hidden  shadow-default  dark:border-strokedark dark:bg-boxdark ">
            <div className="max-w-full  border  rounded-lg border-tborder overflow-hidden   overflow-x-auto   ">
              <table className="w-full table-auto bg-white    ">
                <thead>
                  <tr className=" bg-white text-sm  font-poppins font-normal     text-black text-left dark:bg-meta-4">
                    <th className="w-14.5 h-10   border-b border-r  border-tborder px-4   ">
                      ID
                    </th>
                    <th className="min-w-14.5 py-2 border-b border-r  border-tborder px-4  lg:pl-10  md:pl-4  sm:pl-0   ">
                      {t('branch.2')}
                    </th>

                    <th className="min-w-14.5 py-2 border-b border-r  border-tborder px-4  ">
                      {t('branch.5')}
                    </th>

                    <th className="min-w-14.5 border-b border-r  border-tborder py-2 px-4  ">
                      Phone
                    </th>
                    <th className="max-w-10.5 border-b border-r  border-tborder py-2 px-4  ">
                      {t('branch.6')}
                    </th>
                  </tr>
                </thead>
                <tbody>{content}</tbody>
              </table>
            </div>
          </div>
          {data?.data.map((item: any, index: any) => {
            return <TbodyResponsive key={index} item={item} />;
          })}
        </>
      )}
    </>
  );
};

export default CreateForm;
