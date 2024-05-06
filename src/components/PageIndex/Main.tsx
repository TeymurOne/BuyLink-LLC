import { useTranslation } from 'react-i18next';
import apple from '../../images/Pages-index/head-main/apple-icon.svg';
import play from '../../images/Pages-index/head-main/store-icon.svg';
import main from '../../images/main/main.svg';
import people from '../../images/main/people.svg';
import star from '../../images/main/star.svg';
import money from '../../images/main/money.svg';
import { Link } from 'react-router-dom';

export function Main() {
  const { t } = useTranslation();

  return (
    <>
      <div className='flex lg:flex-row flex-col items-center justify-between '>
        <div className=" max-w-[688px] w-full  ">
          <h2 className=" lg:text-title-xxl md:text-title-xl2 text-[28px] lg:text-left text-center   font-bold font-manrope      text-black-2">
            <a className="text-primary">{t('main.0')}</a> {t('main.1')}
          </h2>
          <p className=" lg:text-xl md:text-base text-sm lg:text-left text-center  font-poppins py-2 font-normal  text-black-2 ">
            {t('main.2')}
          </p>

          <div className="flex   h-34  flex-wrap items-center 530px:space-x-4 space-x-0  lg:justify-start justify-center  ">
            <Link
              to="#"
              className="bg-black-2 mr-2  h-15 grid place-items-center   w-46"
            >
              <div className="h-15 flex items-center space-x-1  ">
                <img src={apple} alt="Apple icon" className="w-5 h-7" />
                <span className="flex flex-col mb-3  text-white">
                  <p className="text-title-2xsm">Download on the</p>
                  <p className="text-title-xsm  -mt-1.5 font-medium">
                    App Store
                  </p>
                </span>
              </div>
            </Link>
            <Link
              to="#"
              className="bg-black-2 h-15  grid place-items-center   w-46"
            >
              <div className="h-14 flex items-center space-x-1  ">
                <img src={play} alt="Apple icon" className="w-5 h-8" />
                <span className="flex flex-col mb-3   text-white">
                  <p className="text-title-2xsm  font-thin">Get it on</p>
                  <p className="text-lg  -mt-1.5 font-medium">
                    Google Play
                  </p>
                </span>
              </div>
            </Link>
          </div>
          <div className="flex  md:flex-row flex-col  items-center space-y-4 md:space-y-0 ">
            <img src={people} alt="People" />
            <div className="mx-2  ">
              <span className="font-manrope flex font-bold text-lg">
                <p> 300+ costumer saved money</p>
                <img src={money} alt="Money" />
              </span>
              <img className='mx-auto lg:mx-0 md:mx-0' src={star} alt="Stars" />
            </div>
          </div>
        </div>

        <div className="  max-w-[660px] w-full">
          <img
            src={main}
            className="  w-full h-full     "
            alt="Main"
          />
        </div>
      </div>
    </>
  );
}
