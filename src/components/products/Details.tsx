import { useTranslation } from 'react-i18next';
import { FaArrowLeft } from 'react-icons/fa6';
import { useParams } from 'react-router-dom';
import { useFetchProducAllQuery } from '../../features/product/apiSlice';
import TableSkeleton from '../../skeleton/TableSkeleton';
import { TableLayout, Thead } from '../ui/Title';

const Details = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const titles = [
    t('product.2'),
    t('product.3'),
    t('product.5'),
    t('product.6'),
    t('product.7'),
    t('product.8'),
  ];

  const { isSuccess, data } = useFetchProducAllQuery('');

  const content = isSuccess && id ? data?.data.find(item => item.id === id) : null;


  return (
    <>
      {content ? (
        <>
          <h2 className="mb-2 flex items-center space-x-4 font-semibold italic">
            {`${t('product.0')} ${t('product.12')}: ${id}`}{' '}
            <FaArrowLeft
              onClick={() => window.history.back()}
              style={{ cursor: 'pointer' }}
            />
          </h2>

          <TableLayout>
            <Thead titles={titles} />
            <tbody>
              <tr className="dark:bg-boxdark border-0 bg-white hover:bg-tborderHover">
                <td className="border-gray border-0 text-xs px-4 dark:border-strokedark">
                  {content.id}
                </td>
                <td className="border-gray py-1 px-4 dark:border-strokedark xl:pl-11">
                  <div className="font-medium w-10.5 h-10.5 dark:text-white">
                    <img
                      className="w-20 h-10 object-cover rounded-full"
                      src={content.image}
                      alt="Content Images"
                    />
                  </div>
                </td>
                <td className="border-gray py-1 px-4 dark:border-strokedark">
                  <p className="inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium">
                    {content.title.az}
                  </p>
                </td>
                <td className="border-gray py-1 px-4 dark:border-strokedark">
                  <p className="inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium">
                    {content.description.az}
                  </p>
                </td>
                <td className="border-gray py-1 px-4 dark:border-strokedark">
                  <p className="inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium">
                    {content.price}
                  </p>
                </td>
                <td className="border-gray py-1 px-4 dark:border-strokedark">
                  <p className="inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium">
                    {content.discount_price}
                  </p>
                </td>
              </tr>
            </tbody>
          </TableLayout>
        </>
      ) : (
        <TableSkeleton count="1" height="1" />
      )}
    </>
  );
};

export default Details;
