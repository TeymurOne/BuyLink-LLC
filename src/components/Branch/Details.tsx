import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useFetchBranchAllQuery } from '../../features/branch/apiSlice';
import { TitleArrow } from '../ui/Title';

const Details = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const { isSuccess, data } = useFetchBranchAllQuery('');
  let content;
  if (isSuccess && id) {
    content = data?.data.find((item: any) => item.id == id);
  }
  console.log(content, 'con');

  const titles = [
    t('branch.5'),
    t('branch.2'),
    t('branch.3'),
    t('branch.4'),
    t('branch.14'),
  ];

  return (
    <>
      <TitleArrow>Branch Details</TitleArrow>
      {content && (
        <div className="0 mt-4 flex w-full max-w-full  overflow-hidden rounded-tl-xl border  border-gray text-sm   font-normal ">
          <ul className="w-full max-w-25 bg-white">
            <li className="h-20  border-b border-r border-gray px-3 py-4  text-xs dark:bg-boxdark dark:text-white lg:text-sm ">
              İd
            </li>

            {titles.map((item, index) => {
              return (
                <li
                  key={index}
                  id="details_border"
                  className="h-20 border-r border-gray px-3 py-4 text-xs  font-normal dark:bg-boxdark dark:text-white lg:text-sm"
                >
                  {item}
                </li>
              );
            })}
          </ul>
          <ul className="w-full max-w-full bg-white">
            <li className="h-20 px-3 py-4 pl-5 text-xs dark:bg-boxdark-2 dark:text-white lg:text-sm">
              {content?.id}
            </li>
            <li className="h-20 bg-[#F8F8F8] px-3 py-4 pl-5 text-xs dark:bg-boxdark dark:text-white lg:text-sm">
              {content?.address}
            </li>
            <li className="h-20 px-3 py-4 pl-5 text-xs  dark:bg-boxdark-2 dark:text-white lg:text-sm">
              {content?.name}
            </li>
            <li className="h-20 bg-[#F8F8F8] px-3 py-4 pl-5 text-xs dark:bg-boxdark dark:text-white lg:text-sm">
              {content?.lat}
            </li>
            <li className="h-20 px-3 py-4 pl-5 text-xs dark:bg-boxdark-2 dark:text-white lg:text-sm">
              {content?.lng}
            </li>
            <li className="h-20 bg-[#F8F8F8] px-3 py-4 pl-5 text-xs dark:bg-boxdark dark:text-white lg:text-sm">
              {content?.phone}
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Details;
