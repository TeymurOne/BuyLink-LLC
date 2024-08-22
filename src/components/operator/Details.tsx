import { useParams } from 'react-router-dom';
import { useFetchOperatorQuery } from '../../features/operator/apiSlice';
import Loader from '../../common/Loader';
import { useTranslation } from 'react-i18next';
import { TitleArrow } from '../ui/Title';

const Details = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const { isSuccess, data } = useFetchOperatorQuery('');
  let content;
  if (isSuccess && id) {
    const items = isSuccess && Array.isArray(data?.data) ? data.data : [];
    content = items.find((item: any) => item.id == id);
  }
  const titles = [t('operator.3'), t('operator.4')];

  return (
    <>
      {content ? (
        <>
          <TitleArrow>
            {t('operator.0')} <span> {id}</span>{' '}
          </TitleArrow>

          {content && (
            <div className="0 mt-4 flex w-full max-w-full  overflow-hidden rounded-tl-xl border border-gray text-sm font-normal">
              <ul className="w-full max-w-25 bg-white">
                {titles.map((item, index) => {
                  return (
                    <li
                      key={index}
                      id="details_border"
                      className="border-r border-gray px-3 py-4 text-xs font-normal lg:text-sm"
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
              <ul className="w-full  max-w-full bg-white">
                <li className="bg-[#F8F8F8] px-3 py-4 pl-5 text-xs lg:text-sm">
                  {content?.name}
                </li>
                <li className="px-3 py-4 pl-5 text-xs  lg:text-sm">
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
