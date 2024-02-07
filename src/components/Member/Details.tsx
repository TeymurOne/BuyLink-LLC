import { useParams } from 'react-router-dom';
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
             Member:    <span>{member?.id}</span>{' '}
            <FaArrowLeft onClick={() => window.history.back()} />
          </h2>
  {member? (
      <div className="max-w-[1200px] font-medium text-[17px] rounded-md w-full border-stroke dark:text-white dark:bg-strokedark bg-white h-auto p-1">
      <div className="flex justify-between lg:w-1/3 md:w-1/2 py-4 px-3">
        <span className="font-medium text-black dark:text-white">ID</span>
        <p className="font-medium text-black dark:text-white">{member?.id}</p>
      </div>
      <p className="border-b border-stroke dark:border-strokedark py-1"></p>
      <div className="flex justify-between lg:w-1/3 md:w-1/2 py-4 px-3">
        <span className="font-medium text-black dark:text-white">{t("member.11")}</span>
        <p className="font-medium text-black dark:text-white">{member?.member_type?.name}</p>
      </div>
      <p className="border-b border-stroke dark:border-strokedark py-1"></p>
      <div className="flex justify-between lg:w-1/3 md:w-1/2 py-2 px-3">
        <span className="font-medium text-black dark:text-white">{t("member.2")}</span>
        <img className="w-20 h-20 rounded-full" src={member?.image} alt="" />
      </div>
      <p className="border-b border-stroke dark:border-strokedark py-1"></p>
      <div className="flex justify-between lg:w-1/3 md:w-1/2 py-4 px-3">
        <span className="font-medium text-black dark:text-white">{t("member.4")}</span>
        <p className="font-medium text-black dark:text-white">{member?.full_name}</p>
      </div>
      <p className="border-b border-stroke dark:border-strokedark py-1"></p>
      <div className="flex justify-between lg:w-1/3 md:w-1/2 py-4 px-3">
        <span className="font-medium text-black dark:text-white">{t("member.5")}</span>
        <p className="font-medium text-black dark:text-white">{member?.position}</p>
      </div>
    </div>
  ):(
    <Loader/>
  )}
    </>
  );
};

export default Details;
