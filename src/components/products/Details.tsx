import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useFetchProducAllQuery } from '../../features/product/apiSlice';
import { Title } from '../ui/Title';

const Details = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const titles = [
    t('product.3'),

    t('product.5'),
    t('product.6'),
    t('product.7'),

    t('product.2'),
  ];

  const { isSuccess, data } = useFetchProducAllQuery('');

  let content;
  if (isSuccess && id) content = data?.data.find((item: any) => item.id == id);
  console.log(content, 'contemt');

  return (
    <>
      {content && (
        <>
          <Title>Branch Details</Title>
          {content && (
            <div className="max-w-full font-poppins text-sm font-normal mt-4  flex w-full 0  border-gray  overflow-hidden rounded-tl-xl   border ">
              <ul className="max-w-25 w-full bg-white dark:bg-boxdark dark:text-white">
                <li className="py-4 px-3 h-20 border-gray border-r border-b lg:text-sm text-xs ">
                  Sıra nömrəsi
                </li>

                {titles.map((item, index) => {
                  return (
                    <li
                      key={index}
                      id="details_border"
                      className="py-4 font-poppins h-20 lg:text-sm text-xs  font-normal px-3 border-gray border-r "
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
              <ul className="max-w-full  w-full bg-white">
                <li className="py-4 px-3 h-20 lg:text-sm text-xs pl-5  bg-[#F8F8F8] dark:bg-boxdark dark:text-white ">
                  {content?.id}
                </li>
                <li className="py-4 px-3 h-20 lg:text-sm text-xs  pl-5 bg-white  dark:bg-boxdark-2 dark:text-white ">
                  {content?.title}
                </li>

                <li className="py-4 px-3 h-20 lg:text-sm text-xs  pl-5 bg-[#F8F8F8]  dark:bg-boxdark dark:text-white  ">
                  {content?.price} 
                </li>

              
                <li className="py-4 px-3 h-20 lg:text-sm text-xs  pl-5  bg-white  dark:bg-boxdark-2 dark:text-white ">
                  {content?.discount_price}
                </li>
                <li className="py-4 px-3 h-20 lg:text-sm text-xs  pl-5 bg-[#F8F8F8]   dark:bg-boxdark dark:text-white ">
                  {content?.category.name}
                </li>
                
             
                <li className="py-4 h-20   lg:text-sm text-xs px-3  pl-5  dark:bg-boxdark-2 dark:text-white ">
                  <div className="w-10.5  h-10">
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

export default Details;
