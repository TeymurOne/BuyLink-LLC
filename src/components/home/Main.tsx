import { useTranslation } from 'react-i18next';
import apple from '../../images/Pages-index/head-main/apple-icon.svg';
import play from '../../images/Pages-index/head-main/store-icon.svg';
import people from '../../images/main/people.png';
import star from '../../images/main/star.png';
import mainAz from '../../images/main/mainAz.png';
import mainEn from '../../images/main/mainEn.png';
import money from '../../images/main/money.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function Main() {
  const { t } = useTranslation();
  const [language, setLanguage] = useState<any>('');
  useEffect(() => {
    setLanguage(localStorage.getItem('lng'));
  }, [localStorage.getItem('lng'), language]);

  return (
    <>
      <div className="flex flex-col items-center justify-between lg:flex-row ">
        <div className=" w-full max-w-180 pr-2  ">
          <h2 className=" text-center font-manrope text-3xl font-bold text-black-2   md:text-title-xl2 lg:text-left      lg:text-title-xxl">
            <a className="text-primary">{t('main.0')}</a> {t('main.1')}
          </h2>
          <p className=" py-2 text-center font-poppins text-sm font-normal  text-black-2 md:text-base lg:text-left  lg:text-xl ">
            {t('main.2')}
          </p>

          <div className="flex   h-34  flex-wrap items-center justify-center space-x-0  xsm:space-x-4 lg:justify-start  ">
            <Link
              to="#"
              className="grid  h-15 w-46 place-items-center   bg-black-2"
            >
              <div className="flex h-15 items-center space-x-1  ">
                <img src={apple} alt="Apple icon" className="h-7 w-5" />
                <span className="mb-3 flex flex-col  text-white">
                  <p className="text-title-2xsm">Download on the</p>
                  <p className="-mt-1.5  text-title-xsm font-medium">
                    App Store
                  </p>
                </span>
              </div>
            </Link>
            <Link
              to="#"
              className="grid h-15  w-46 place-items-center   bg-black-2"
            >
              <div className="flex h-14 items-center space-x-1  ">
                <img src={play} alt="Apple icon" className="h-8 w-5" />
                <span className="mb-3 flex flex-col   text-white">
                  <p className="text-title-2xsm  font-thin">Get it on</p>
                  <p className="-mt-1.5  text-lg font-medium">Google Play</p>
                </span>
              </div>
            </Link>
          </div>
          <div className="flex  flex-col items-center  space-y-4 md:flex-row md:space-y-0 ">
            <img src={people} alt="People" />
            <div className="mx-2  ">
              <span className="flex font-manrope text-lg font-bold">
                <p> 300+ costumer saved money</p>
                <img src={money} alt="Money" />
              </span>
              <img className="mx-auto md:mx-0 lg:mx-0" src={star} alt="Stars" />
            </div>
          </div>
        </div>

        <div className="  w-full max-w-150">
          <img
            src={language == 'az' ? mainAz : mainEn}
            className="  h-full w-full     "
            alt="Main"
          />
        </div>
      </div>
    </>
  );
}
