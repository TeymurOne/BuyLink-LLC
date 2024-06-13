import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useFetchBranchAllQuery } from '../../features/branch/apiSlice';
import {  Title } from '../ui/Title';

const Details = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const { isSuccess, data } = useFetchBranchAllQuery('');
  let content;
  if (isSuccess && id) {
    content = data?.data.find((item: any) => item.id == id);
  }
  console.log(content, 'con');
  
  const titles = [t('branch.5'), t('branch.2'), t('branch.3'), t('branch.4'), t('branch.14')];

  return (
    <>
      <Title>Branch Details</Title>
      <div className="max-w-full font-poppins text-sm font-normal mt-4  flex w-full 0  border-gray  overflow-hidden rounded-tl-xl   border ">
        <ul className="max-w-25 w-full bg-white">
          <li className="py-4 px-3 border-gray border-r border-b lg:text-sm text-xs ">İd</li>

          {titles.map((item, index) => {
            return (
              <li
                key={index}
                id='details_border'
                className="py-4 font-poppins lg:text-sm text-xs  font-normal px-3 border-gray border-r "
              >
                {item}
              </li>
            );
          })}
        </ul>
        <ul className="max-w-full  w-full bg-white">
          <li className="py-4 px-3 lg:text-sm text-xs pl-5  ">{content?.id}</li>
          <li className="py-4 px-3 lg:text-sm text-xs pl-5 bg-[#F8F8F8] ">{content?.address}</li>
          <li className="py-4 px-3 lg:text-sm text-xs  pl-5 ">{content?.name}</li>
          <li className="py-4 px-3 lg:text-sm text-xs  pl-5  bg-[#F8F8F8]">{content?.lat}</li>
          <li className="py-4 px-3 lg:text-sm text-xs  pl-5 ">{content?.lng}</li>
          <li className="py-4  lg:text-sm text-xs px-3  pl-5 bg-[#F8F8F8] ">{content?.phone}</li>
        </ul>
      </div>
    </>
  );
};

export default Details;
