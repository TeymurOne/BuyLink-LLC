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
import { Search, Title } from '../ui/Title';

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

  const filteredItems = filteredData.filter((item) =>
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
      <Title> {t('product.7')}</Title>
      <Search onchange={(e: any) => setSearch(e.target.value)} />

      {window.innerWidth > 768 && (
        <div className="hidden rounded-sm  shadow-default  dark:border-strokedark dark:bg-boxdark md:block">
          <div className="max-w-full  overflow-hidden  overflow-x-auto rounded-lg border border-tborder">
            <table className="w-full table-auto bg-white">
              <thead>
                <tr className="bg-white text-left text-title-2xsm text-black dark:bg-meta-4 dark:text-white">
                  <th className="h-10 w-14.5  border-b border-r  border-tborder px-4  font-medium">
                    ID
                  </th>
                  <th className="min-w-24.5 border-b border-r border-tborder px-4 py-2 font-medium  dark:text-white  sm:pl-0  md:pl-4 lg:pl-10">
                    {t('branch.2')}
                  </th>
                  <th className="min-w-24.5 border-b border-r border-tborder px-4 py-2 font-medium dark:text-white">
                    {t('branch.6')}
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

      {filteredItems?.map((item: any, index: number) => (
        <TbodyResponsive
          item={item}
          id={index}
          key={index}
          language={language}
        />
      ))}
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
  const { t } = useTranslation();
  const rowClassName = id % 2 === 0 ? 'bg-[#F8F8F8]' : '';
  return (
    <>
      <tr
        className={`w-full border-0 hover:bg-tborderHover dark:bg-boxdark ${rowClassName}`}
      >
        <td className="border-0 border-gray px-4 text-xs  dark:border-strokedark dark:text-white">
          {item?.id}
        </td>
        <td className="border-gray px-10 py-1 dark:border-strokedark  dark:text-white xl:pl-11">
          {language && item.name[language]}
        </td>

        <td className="px-4 py-3 dark:border-strokedark">
          <Link
            to={`/admin/product/create?categoryid=${item.id}`}
            className="mb-4 flex h-10 w-full max-w-35 items-center justify-center space-x-2  rounded-md bg-white text-xs font-medium shadow-sm  dark:bg-boxdark  dark:text-white dark:shadow-8 dark:hover:bg-zinc-900 sm:mb-0 md:mb-0 lg:mb-0"
          >
            <img src={create} alt="Create icon" />
            <p>{t('product.1')}</p>
          </Link>
        </td>
      </tr>
    </>
  );
}

function TbodyResponsive({ item, language, id }: TbodyProps) {
  const rowClassName = id % 2 === 0 ? 'bg-[#F8F8F8]' : '';
  const { t } = useTranslation();

  return (
    <div className="block w-full max-w-full md:hidden">
      <h2>
        <button
          type="button"
          className={`flex w-full items-center justify-between  rounded-t-xl p-5 font-medium  rtl:text-right ${rowClassName}  bg-white`}
        >
          <div className="flex w-35 space-x-4 ">
            <p>{item?.id}</p>
            <span className="dark:text-white">
              {language && item.name[language]}
            </span>
          </div>
          <Link
            to={`/admin/product/create?categoryid=${item.id}`}
            className="mb-4 flex h-9 w-full  max-w-35 items-center justify-center space-x-2 rounded-md  bg-white  text-xs font-medium shadow-md sm:mb-0 md:mb-0 lg:mb-0"
          >
            <img src={create} alt="Create icon" />
            <p>{t('product.1')}</p>
          </Link>
        </button>
      </h2>
    </div>
  );
}

export default Category;
