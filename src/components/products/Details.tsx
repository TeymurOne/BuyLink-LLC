import { useTranslation } from 'react-i18next';
import { FaArrowLeft } from 'react-icons/fa6';
import { useLocation } from 'react-router-dom';

const Details = () => {
  const details = useLocation();
  const { id, title, description, category, image, price, discount_price } =
    details.state?.itemAll;
  const categoyName = category?.name;
  const { t } = useTranslation();


  

  return (
    <>
      <h2 className="mb-2 flex items-center space-x-4 font-semibold italic">
      {t("product.0")} {t("product.12")} : <span>{id}</span> <FaArrowLeft onClick={()=>window.history.back()} />
      </h2>
      <div className="max-w-[1200px]  font-medium text-[17px] rounded-md w-full dark:bg-boxdark bg-white h-auto p-1">
      <div className="flex justify-between lg:w-1/3 md:w-1/2 py-4 px-3  ">
          <span className=" font-medium text-black dark:text-white  ">
            Id
          </span>
          <p className=" font-medium text-black  dark:text-white  ">{id}</p>
        </div>
        <p className="border-b border-stroke  dark:border-strokedark  py-1"></p>
        <div className="flex justify-between lg:w-1/3 md:w-1/2 py-4 px-3  ">
          <span className=" font-medium text-black dark:text-white  ">
         {t("product.3")}
          </span>
          <p className=" font-medium text-black  dark:text-white  ">{title}</p>
        </div>
        <p className="border-b border-stroke  dark:border-strokedark  py-1"></p>
        <div className="flex justify-between lg:w-1/3 md:w-1/2 py-2 px-3  ">
          <span className=" font-medium text-black dark:text-white  ">
          {t("product.2")}
          </span>
          <img className="w-20 h-20 rounded-full" src={image} alt="" />
        </div>
        <p className="border-b border-stroke  dark:border-strokedark  py-1"></p>
        <div className="flex justify-between lg:w-1/3 md:w-1/2 py-4 px-3  ">
          <span className=" font-medium text-black dark:text-white  ">
          {t("product.4")}
          </span>
          <p className=" font-medium text-black dark:text-white ">
            {description}
          </p>
        </div>
        <div className="flex justify-between lg:w-1/3 md:w-1/2 py-4 px-3  ">
          <span className=" font-medium text-black dark:text-white  ">
          {t("product.8")}
          </span>
          <p className=" font-medium text-black dark:text-white  ">
            {categoyName}
          </p>
        </div>
        <p className="border-b border-stroke  dark:border-strokedark  py-1"></p>
        <div className="flex justify-between lg:w-1/3 md:w-1/2 py-4 px-3  ">
          <span className=" font-medium text-black dark:text-white ">
          {t("product.5")}
          </span>
          <p className=" font-medium text-black dark:text-white  ">{price}</p>
        </div>
        <div className="flex justify-between lg:w-1/3 md:w-1/2 py-4 px-3  ">
          <span className=" font-medium text-black dark:text-white  ">
          {t("product.6")}
          </span>
          <p className=" font-medium text-black dark:text-white ">
            {discount_price}
          </p>
        </div>
      </div>
    </>
  );
};

export default Details;
