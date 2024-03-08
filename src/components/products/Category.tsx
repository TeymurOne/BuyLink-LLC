import { FiEye } from 'react-icons/fi';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useFetchProducttypeQuery } from '../../features/product/apiSlice';

const Category = () => {
  const { isSuccess, data, isError } = useFetchProducttypeQuery('');
  let content;
  if (isSuccess) {
    content = data?.data.map((item: any, index: number) => {
      return <Tbody item={item} key={index} />;
    });
  }
  return (
    <>
      
      <input
        type="text"
        placeholder=" search..."
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
           {content}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

interface Item {
    id: number;
    name: string;
}

interface TbodyProps {
    item: Item;
}

function Tbody({item}:TbodyProps ){
  
  return (
    <>
      <tr className="text-sm ">
        <td className="border-b border-[#eee] text-[16px] py-5 px-4 dark:border-strokedark">
          {item?.id}
        </td>

        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
          <p className="inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ">{item.name}</p>
        </td>

        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
          <div className="flex items-center space-x-3.5 ">
            <Link to={`/admin/productForm/${item?.id}`}>
              <button className="hover:text-white p-2 dark:bg-[#0ab39c26]  hover:bg-success">
               Create Products
              </button>
            </Link>
          </div>
        </td>
      </tr>
    </>
  );
}

export default Category;
