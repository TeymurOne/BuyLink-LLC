import { Link } from 'react-router-dom';

import { IoIosAddCircleOutline } from 'react-icons/io';
import { useFetchOperatorQuery } from '../../features/operator/apiSlice';
import Tbody from './Tbody';
import Loader from '../../common/Loader';
export interface IitemApiOperator {
  branch: IitemBranch
  email: string;
  id: number;
  name: string;
}
export interface IitemBranch {
  id: number;
  name: string;
  address: string;
  lat: string;
  lng: string;

}
const CreateForm = () => {
  let content;

  const { isSuccess, isLoading, data } = useFetchOperatorQuery('');
  const items = isSuccess && Array.isArray(data?.data) ? data.data : [];
  if (isSuccess) {
    content = items?.map((item: IitemApiOperator , index: number) => {

      return <Tbody item={item} key={index} />;
    });
  }

  return (
    <>
      <div className="flex justify-between  flex-wrap">
        <div className="flex flex-col w-60">
          <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
            Operator
          </h4>
        
        </div>
        <Link
          to="/admin/servicesForm"
          className="bg-successOpacity py-5 space-x-2 mb-4 lg:mb-0 md:mb-0 sm:mb-0 text-[16px] rounded-sm dark:bg-[#0ab39c26] justify-center flex items-center h-[40px] w-[163px] hover:text-white hover:bg-success"
        >
          <IoIosAddCircleOutline />
          Create operator
        </Link>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="rounded-sm   shadow-default dark:border-strokedark dark:bg-boxdark ">
          <div className="max-w-full overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-2 text-[14px] text-left dark:bg-meta-4">
                  <th className="min-w-[220px] py-4 px-4  font-medium text-black dark:text-white xl:pl-11">
                    ID
                  </th>
                  <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                    Branch
                  </th>
                  <th className="min-w-[120px] py-4 px-8 font-medium text-black dark:text-white">
                    Name
                  </th>
                  <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                    Email
                  </th>

                  <th className="py-4 px-4 font-medium text-black dark:text-white">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>{content}</tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateForm;
