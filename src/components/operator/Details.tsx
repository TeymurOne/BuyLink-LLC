import { useParams } from 'react-router-dom';
import { useFetchOperatorQuery } from '../../features/operator/apiSlice';
import Loader from '../../common/Loader';
import { useTranslation } from 'react-i18next';
import { Title } from '../ui/Title';

const Details = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const { isSuccess, data } = useFetchOperatorQuery('');
  let content;
  if (isSuccess && id) {
    const items = isSuccess && Array.isArray(data?.data) ? data.data : [];

    content = items.find((item: any) => item.id == id);
  }

  const titles = [
    t('operator.3'),
    t('operator.4'),


  ];

  return (
    <>
      {content ? (
        <>
          <Title>
           { t('operator.0')}     <span>  {id}</span>{' '}
          </Title>

          {content && (
            <div className="max-w-full font-poppins text-sm font-normal mt-4  flex w-full 0  border-gray  overflow-hidden rounded-tl-xl   border ">
              <ul className="max-w-25 w-full bg-white">
                <li className="py-4 px-3 border-gray border-r border-b lg:text-sm text-xs ">
                  İd
                </li>

                {titles.map((item, index) => {
                  return (
                    <li
                      key={index}
                      id="details_border"
                      className="py-4 font-poppins lg:text-sm text-xs  font-normal px-3 border-gray border-r "
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
              <ul className="max-w-full  w-full bg-white">
                <li className="py-4 px-3 lg:text-sm text-xs pl-5  ">
                  {content?.id}
                </li>
                <li className="py-4 px-3 lg:text-sm text-xs pl-5 bg-[#F8F8F8] ">
                  {content?.name}
                </li>
                <li className="py-4 px-3 lg:text-sm text-xs  pl-5 ">
                  {content?.email}
                </li>
            
              </ul>
            </div>
          )}
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Details;
