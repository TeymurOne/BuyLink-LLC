import { useTranslation } from "react-i18next";
import apple from '../../images/Pages-index/head-main/apple-icon.svg';
import play from '../../images/Pages-index/head-main/store-icon.svg';
import main from '../../images/Pages-index/head-main/main.svg';
import { Link } from 'react-router-dom';

export function Main() {
  const { t } = useTranslation();

  return (
    <>
      <div className="   gap-10 space-x-4  pt-5 pb-10 lg:px-2   flex-col   flex lg:flex-row   ">
        <div className=" flex-1  pt-0  lg:p-10 mx-auto   text-center    flex flex-col items-center  ">
          <h2 className=" font-manrope text-center  xl:text-[2.40em] lg:text-[1.775em] text-[32px] 992px:text-[40px]  whitespace-wrap  leading-10 font-[600] text-black-2">
            <span className="text-[#4C5DF5]">{t('main.0')}</span> {t('main.1')}
          </h2>
          <p className="lg:text-[21px] font-regular text-[20px] text-center py-4">
            {t('main.2')}
          </p>

          <div className="flex md:flex-row flex-col items-center space-y-4 md:space-y-0 md:space-x-8 ">
            <Link
              to=""
              className="bg-black-2 h-[61px] grid place-items-center   w-[188px]"
            >
              <div className="h-[60px] flex items-center space-x-1  ">
                <img
                  src={apple}
                  alt="Apple icon"
                  className="w-[21px] h-[25px]"
                />
                <span className="flex flex-col mb-[10px]  text-white">
                  <p className="text-[10px]">Download on the</p>
                  <p className="text-[19px] mt-[-12px] font-medium">
                    App Store
                  </p>
                </span>
              </div>
            </Link>
            <Link
              to=""
              className="bg-black-2 h-[61px] grid place-items-center   w-[188px]"
            >
              <div className="h-[60px] flex items-center space-x-1  ">
                <img
                  src={play}
                  alt="Apple icon"
                  className="w-[23px] h-[32px]"
                />
                <span className="flex flex-col mb-[13px]   text-white">
                  <p className="text-[10px]  font-thin">Get it on</p>
                  <p className="text-[19px]  mt-[-13px] font-medium">
                    Google Play
                  </p>
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className=" flex-1  grid place-items-center ">
          <img
            src={main}
            className=" shadow-2xl  rounded-xl border-[#979797] border-opacity-60  object-contain"
            alt="Main"
          />
        </div>
      </div>
    </>
  );
}