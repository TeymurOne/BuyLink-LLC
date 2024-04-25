import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useFetchMemberDataQuery } from '../../features/members/apiSlice';
import Loader from '../../common/Loader';
import { FaArrowLeft } from 'react-icons/fa6';

const Details = () => {
  const { id } = useParams();
  const { data, isSuccess } = useFetchMemberDataQuery();
  const { t } = useTranslation();

  let member;

  if (isSuccess && id) {
    member = data?.data.find((item: any) => item.id == id);
  }

  return (
    <>
      <h2 className="mb-2 flex items-center space-x-4 font-semibold italic">
        Member: <span>{member?.id}</span>{' '}
        <FaArrowLeft onClick={() => window.history.back()} />
      </h2>
      {member ? (
          <div className="rounded-sm  md:block hidden  shadow-default  dark:border-strokedark dark:bg-boxdark ">
          <div className="max-w-full  border  rounded-lg border-tborder overflow-hidden   overflow-x-auto   ">
            <table className="w-full table-auto bg-white    ">
              <thead>
                <tr className="2 bg-white text-title-2xsm font-poppins text-black text-left dark:bg-meta-4">
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
  
                
                </tr>
              </thead>
              <tbody>
                {' '}
                <tr className=" dark:bg-boxdark border-0 bg-white hover:bg-tborderHover">
                  <td className="  border-gray border-0 text-xs  px-4 dark:border-strokedark">
                    {member?.id}
                  </td>
                  <td className=" border-gray py-1 px-4  dark:border-strokedark xl:pl-11">
                    <div className="font-medium w-10.5 h-10.5  dark:text-white">
                      <img
                        src={member?.image}
                        className="w-full h-full rounded-full"
                        alt=""
                      />
                    </div>
                  </td>
                  <td className=" border-gray py-1 px-4 dark:border-strokedark">
                    <p className="inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium  ">
                      {member?.member_type?.name}
                    </p>
                  </td>
                  <td className=" border-gray py-1 px-4 dark:border-strokedark">
                    <p className="inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ">
                      {member?.full_name}
                    </p>
                  </td>
                  <td className=" border-gray py-1 px-4 dark:border-strokedark">
                    <p className="inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ">
                      {member?.position}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      
      ) : (
        <Loader />
      )}

    
    </>
  );
};

export default Details;
