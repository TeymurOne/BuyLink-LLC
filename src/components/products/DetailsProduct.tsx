import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useFetchProductAllQuery } from '../../features/product/apiSlice';
import { TitleArrow } from '../ui/Title';

const DetailsProduct = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const { isSuccess, data } = useFetchProductAllQuery('');

  const titles = [
    t('product.3'),
    t('product.5'),
    t('product.6'),
    t('product.7'),
    t('product.2'),
  ];

  let content;
  if (isSuccess && id) {
    content = data?.data.find((item: any) => item.id == id);
  }
  return (
    <>
      {content && (
        <>
          <TitleArrow>Product Details</TitleArrow>
          {content && (
            <div className="0 mt-4 flex w-full max-w-full  overflow-hidden rounded-tl-xl border  border-gray  font-poppins text-sm   font-normal ">
              <ul className="w-full max-w-25 bg-white dark:bg-boxdark dark:text-white">
                <li className="h-20 border-b border-r border-gray px-3 py-4 text-xs lg:text-sm ">
                  Sıra nömrəsi
                </li>

                {titles.map((item, index) => {
                  return (
                    <li
                      key={index}
                      id="details_border"
                      className="h-20 border-r border-gray px-3 py-4  font-poppins text-xs font-normal lg:text-sm "
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
              <ul className="w-full  max-w-full bg-white">
                <li className="h-20 bg-[#F8F8F8] px-3 py-4 pl-5 text-xs  dark:bg-boxdark dark:text-white lg:text-sm ">
                  {content?.id}
                </li>
                <li className="h-20 bg-white px-3 py-4 pl-5  text-xs dark:bg-boxdark-2  dark:text-white lg:text-sm ">
                  {content?.title?.en}
                </li>

                <li className="h-20 bg-[#F8F8F8] px-3 py-4 pl-5  text-xs dark:bg-boxdark  dark:text-white lg:text-sm  ">
                  {content?.price}
                </li>

                <li className="h-20 bg-white px-3 py-4 pl-5  text-xs  dark:bg-boxdark-2  dark:text-white lg:text-sm ">
                  {content?.discount_price}
                </li>
                <li className="h-20 bg-[#F8F8F8] px-3 py-4 pl-5  text-xs dark:bg-boxdark   dark:text-white lg:text-sm ">
                  {content?.category.name}
                </li>

                <li className="h-20 px-3   py-4 pl-5 text-xs  dark:bg-boxdark-2  dark:text-white lg:text-sm ">
                  <div className="h-10  w-10.5">
                    <img
                      src={content?.image}
                      alt=""
                      className=" object-cover"
                    />
                  </div>
                </li>
              </ul>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default DetailsProduct;


