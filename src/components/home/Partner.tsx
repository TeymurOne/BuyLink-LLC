import { useTranslation } from "react-i18next";
import partner_logo from '../../images/Pages-index/head-main/becomepartner.png';


export function Partner() {
    const { t } = useTranslation();
    return (
      <>
        <div className=" w-full flex  lg:py-0 md:py-20 py-20  pl-10   items-center justify-between     ">
          <div className="flex flex-col md:items-start justify-center md:justify-normal  items-center md:space-y-4 pr-14  space-y-2 w-150  ">
            <h2 className="font-manrope text-center lg:text-start lg:text-6xl text-3xl normal font-bold text-gray200">
              {t('partner.0')}
            </h2>
            <p className="text-gray200 my-4 text-center lg:text-start text-sm   lg:text-2xl font-poppins font-light">
              {t('partner.1')}
            </p>
            <button className="rounded-md text-starrating font-bold bg-whiten w-39 h-17">
              {t('partner.2')}
            </button>
          </div>
          <div className="hidden lg:block ">
            <img src={partner_logo} className=" w-auto mt-1 h-115" alt="" />
          </div>
        </div>
      </>
    );
  }