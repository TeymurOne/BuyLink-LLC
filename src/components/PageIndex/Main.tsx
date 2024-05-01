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
        <div className="  flex-2   pt-0 w-full  mx-auto lg:items-start  lg:text-left  text-center    flex flex-col items-center  ">
          <h2 className=" hyphens-auto font-semibold lg:text-6xl    text-center lg:text-left        text-black-2">
            <span className="text-starrating">{t('main.0')}</span> {t('main.1')}
          </h2>
          <p className="lg:text-xl  text-black text-center lg:text-left  font-poppins  py-4">
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
            className=" shadow-lg  rounded-xl border-[#979797] border-opacity-60  object-contain"
            alt="Main"
          />
        </div>
      </div>
    </>
  );
}