import { useTranslation } from 'react-i18next';
import { FaArrowLeft } from 'react-icons/fa6';
import { useParams } from 'react-router-dom';
import { useFetchProducAllQuery } from '../../features/product/apiSlice';
import Loader from '../../common/Loader';

const Details = () => {
  const { id } = useParams();

  const { isSuccess, data } = useFetchProducAllQuery('');

  const { t } = useTranslation();

  let content;

  if (isSuccess && id) {
    content = data?.data.find((item: any) => item.id == id);
  }


  return (
    <>
      {content ? (
        <>
          <h2 className="mb-2 flex items-center space-x-4 font-semibold italic">
            {t('product.0')} {t('product.12')} : <span>{id}</span>{' '}
            <FaArrowLeft onClick={() => window.history.back()} />
          </h2>

          <div className="rounded-sm    shadow-default  dark:border-strokedark dark:bg-boxdark ">
            <div className="max-w-full  border  rounded-lg border-tborder overflow-hidden   overflow-x-auto   ">
              <table className="w-full table-auto bg-white    ">
                <thead>
                  <tr className="2 bg-white text-title-2xsm font-poppins text-black text-left dark:bg-meta-4">
                    <th className="w-14.5 h-10  border-b border-r  border-tborder px-4  font-medium ">
                      ID
                    </th>
                    <th className="min-w-24.5 py-2 border-b border-r  border-tborder px-4  lg:pl-10  md:pl-4  sm:pl-0 font-medium  ">
                      {t('product.2')}
                    </th>
                    <th className="min-w-24.5 py-2 border-b border-r  border-tborder px-4 font-medium ">
                      {t('product.3')}
                    </th>
                    <th className="min-w-24.5 border-b border-r  border-tborder py-2 px-4 font-medium ">
                      {t('product.4')}
                    </th>
                    <th className="min-w-24.5 border-b border-r  border-tborder py-2 px-4 font-medium ">
                      {t('product.5')}
                    </th>
                    <th className="min-w-24.5 border-b border-r  border-tborder py-2 px-4 font-medium ">
                      {t('product.6')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className=" dark:bg-boxdark border-0 bg-white hover:bg-tborderHover">
                    <td className="  border-gray border-0 text-xs  px-4 dark:border-strokedark">
                      {content?.id}
                    </td>
                    <td className=" border-gray py-1 px-4  dark:border-strokedark xl:pl-11">
                      <div className="font-medium w-10.5 h-10.5  dark:text-white">
                        <img
                          className="w-20 h-10 object-cover rounded-full"
                          src={content?.image}
                          alt="Content Images"
                        />
                      </div>
                    </td>
                    <td className=" border-gray py-1 px-4 dark:border-strokedark">
                      <p className="inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium  ">
                        {content?.title.az}
                      </p>
                    </td>
                    <td className=" border-gray py-1 px-4 dark:border-strokedark">
                      <p className="inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ">
                        {content?.description.az}
                      </p>
                    </td>
                    <td className=" border-gray py-1 px-4 dark:border-strokedark">
                      <p className="inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ">
                        {content?.price}
                      </p>
                    </td>
                    <td className=" border-gray py-1 px-4 dark:border-strokedark">
                      <p className="inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ">
                        {content?.discount_price}
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Details;
