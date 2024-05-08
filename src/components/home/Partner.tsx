import { useTranslation } from "react-i18next";
import partner_logo from '../../images/Pages-index/head-main/partnerbecome.svg';


export function Partner() {
    const { t } = useTranslation();
    return (
      <>
        <div className=" w-full flex  ml-2   items-center justify-between    ">
          <div className="flex flex-col md:items-start justify-center md:justify-normal  items-center md:space-y-4  space-y-2 w-[636px] h-[267px] ">
            <h2 className="font-manrope text-center lg:text-start lg:text-4xl text-3xl normal font-bold text-[#F3F2F2]">
              {t('partner.0')}
            </h2>
            <p className="text-[#F3F2F2] my-4 text-center lg:text-start md:leading-6 leading-4  lg:text-[20px] text-[10px] font-poppins font-normal">
              {t('partner.1')}
            </p>
            <button className="rounded-md text-[#4C5DF5] font-semibold bg-[#ffffffd9] w-[154px] h-[68px]">
              {t('partner.2')}
            </button>
          </div>
          <div className="hidden lg:block ">
            <img src={partner_logo} className="object-contain w-[400px] h-[500px]" alt="" />
          </div>
        </div>
      </>
    );
  }