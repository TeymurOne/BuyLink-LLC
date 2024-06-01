import { useEffect, useState } from 'react';
import create from '../../images/action-icon/create.svg';

import { Link } from 'react-router-dom';
import { useFetchProducttypeQuery } from '../../features/product/apiSlice';
import Loader from '../../common/Loader';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
  setFilterData,
  setLanguage,
} from '../../features/category/categorySlice';
import { RootState } from '../../app/api/store';
import { Search } from '../ui/Title';

const Category = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const { language, filteredData } = useSelector(
    (store: RootState) => store.categorySlice,
  );

  const local = t('default.0');
  const { isSuccess, isLoading, data } = useFetchProducttypeQuery('');

  useEffect(() => {
    dispatch(setLanguage(local));
  }, [local]);

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setFilterData(data?.data));
    }
  }, [isSuccess, data]);

  const filteredItems = filteredData.filter(
    (item) =>
      item.name[language]
        ?.toLocaleLowerCase()
        .includes(search.trim().toLocaleLowerCase()),
  );

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  if (!isSuccess) return null;

  return (
    <>
      <Search onchange={(e: any) => setSearch(e.target.value)} />

      {window.innerWidth > 768 && (
        <div className="rounded-sm  md:block  hidden  shadow-default  dark:border-strokedark dark:bg-boxdark ">
          <div className="max-w-full  border  rounded-lg border-tborder overflow-hidden   overflow-x-auto   ">
            <table className="w-full table-auto bg-white    ">
              <thead>
                <tr className=" bg-white text-title-2xsm font-poppins text-black text-left dark:bg-meta-4">
                  <th className="w-14.5 h-10  border-b border-r  border-tborder px-4  font-medium ">
                    ID
                  </th>
                  <th className="min-w-24.5 py-2 border-b border-r dark:text-white  border-tborder px-4  lg:pl-10  md:pl-4  sm:pl-0 font-medium  ">
                    Name
                  </th>
                  <th className="min-w-24.5 py-2 border-b border-r dark:text-white   border-tborder px-4 font-medium ">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredItems?.map((item: any, index: number) => (
                  <Tbody
                    item={item}
                    key={index}
                    id={index}
                    language={language}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {window.innerWidth < 768 && (
        <>
          {filteredItems?.map((item: any, index: number) => (
            <TbodyResponsive
              item={item}
              id={index}
              key={index}
              language={language}
            />
          ))}
        </>
      )}
    </>
  );
};

interface Item {
  id: number;
  name: { [key: string]: string };
}

interface TbodyProps {
  item: Item;
  language: string | null;
  id: number;
}

function Tbody({ item, language, id }: TbodyProps) {
  const rowClassName = id % 2 === 0 ? 'bg-[#F8F8F8]' : '';
  return (
    <>
      <tr
        className={` w-full dark:bg-boxdark border-0   hover:bg-tborderHover ${rowClassName}`}
      >
        <td className="  border-gray dark:text-white border-0 text-xs  px-4 dark:border-strokedark">
          {item?.id}
        </td>
        <td className=" border-gray py-1 px-10 dark:text-white  dark:border-strokedark xl:pl-11">
          {language && item.name[language]}
        </td>

        <td className="  py-3 px-4 dark:border-strokedark">
          <Link
            to={`/admin/product/${item.id}`}
            className="bg-white text-xs font-medium shadow-sm  mb-4 lg:mb-0 md:mb-0 sm:mb-0 space-x-2  rounded-md  justify-center flex items-center h-10 w-full max-w-35"
          >
            <img src={create} alt="Create icon" />
            <p> Create Product</p>
          </Link>
        </td>
      </tr>
    </>
  );
}
function TbodyResponsive({ item, language, id }: TbodyProps) {
  const rowClassName = id % 2 === 0 ? 'bg-[#F8F8F8]' : '';
  return (
    <div className="max-w-full md:hidden block w-full">
      <h2>
        <button
          type="button"
          className={`flex items-center justify-between w-full  p-5 font-medium rtl:text-right  rounded-t-xl ${rowClassName}  bg-white`}
        >
          <div className="w-35 flex space-x-4 ">
            <p>{item?.id}</p>
            <span className="dark:text-white">
              {' '}
              {language && item.name[language]}
            </span>
          </div>
          <Link
            to={`/admin/products/${item.id}`}
            className="bg-white text-xs shadow-md font-medium  mb-4 lg:mb-0 md:mb-0 sm:mb-0 space-x-2  rounded-md  justify-center flex items-center h-9 w-full max-w-35"
          >
            <img src={create} alt="Create icon" />
            Create
          </Link>
        </button>
      </h2>
    </div>
  );
}

export default Category;
