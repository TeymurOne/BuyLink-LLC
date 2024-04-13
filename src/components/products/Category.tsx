import { useState, useEffect } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useFetchProducttypeQuery } from '../../features/product/apiSlice';
import Loader from '../../common/Loader';
import { useTranslation } from 'react-i18next';

const Category = () => {
  const { t } = useTranslation();
  const local = t('default.0');
  console.log(local, 'local');
  

  const { isSuccess, isLoading, data } = useFetchProducttypeQuery('');
  const [language, setLanguage] = useState<any>(local);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearchText] = useState('');


  
  useEffect(() => {
    setLanguage(local);
  }, [local]);

  useEffect(() => {
    if (isSuccess && data) {
      setFilteredData(data?.data);
    }
  }, [isSuccess, data]);

  useEffect(() => {
    let filteredData = data?.data;
    if (search.trim() !== '') {
      filteredData = filteredData.filter((item: any) => {
        return item.name[language]
          ?.toLocaleLowerCase()
          .includes(search.toLocaleLowerCase());
      });
    }
    setFilteredData(filteredData);
  }, [search]);

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
      <input
        type="text"
        placeholder=" search..."
        onChange={(e) => setSearchText(e.target.value)}
        className="max-w-[243px] w-full py-2 my-4  pr-4 pl-9 focus:outline-none rounded-md   "
      />

      <div className="rounded-sm w-[60%]   shadow-default dark:border-strokedark dark:bg-boxdark ">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-[14px] text-left dark:bg-meta-4">
                <th className="min-w-[20px] py-4 px-4 font-medium text-black dark:text-white">
                  ID
                </th>
                <th className="min-w-[20px] py-4 px-4  font-medium text-black dark:text-white xl:pl-11">
                  Name
                </th>

                <th className="py-4 px-4  font-medium text-black dark:text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData?.map((item: any, index: number) => (
                <Tbody item={item} key={index} language={language} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
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
}

function Tbody({ item, language }: TbodyProps) {
  return (
    <tr className="text-sm ">
      <td className="border-b border-[#eee] text-[16px] py-5 px-4 dark:border-strokedark">
        {item.id}
      </td>

      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
        <p className="inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ">
          {language && item.name[language]}
        </p>
      </td>

      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
        <div className="flex items-center space-x-3.5 ">
          <Link to={`/admin/productForm/${item.id}`}>
            <button className="hover:text-white flex items-center space-x-2 rounded-md shadow-3  p-2 dark:bg-[#0ab39c26]  hover:bg-success">
              <IoIosAddCircleOutline />
              <p> Create Products</p>
            </button>
          </Link>
        </div>
      </td>
    </tr>
  );
}

export default Category;
