import { useTranslation } from 'react-i18next';
import apple from '../../images/Pages-index/head-main/apple-icon.svg';
import play from '../../images/Pages-index/head-main/store-icon.svg';
import main from '../../images/Pages-index/head-main/main.svg';
import people from '../../images/main/people.svg';
import star from '../../images/main/star.svg';
import money from '../../images/main/money.svg';
import { Link } from 'react-router-dom';

export function Main() {
  const { t } = useTranslation();

  return (
    <>
      <div className="   gap-10 space-x-4 items-center  pt-5 pb-10 lg:px-2   flex-col   flex lg:flex-row   ">
        <div className="  max-w-7xl w-full  pt-0   mx-auto lg:items-start  lg:text-left  text-center    flex flex-col items-center  ">
          <h2 className=" hyphens-auto font-semibold font-manrope  lg:text-6xl md:text-4xl sm:text-2xl text-xl    text-center lg:text-start        text-black-2">
            <a className="text-primary">{t('main.0')}</a> {t('main.1')}
          </h2>
          <p className="lg:text-xl  text-black-2 text-center lg:text-left  font-poppins  py-4">
            {t('main.2')}
          </p>

          <div className="flex md:flex-row flex-col items-center space-y-4 md:space-y-0 md:space-x-8 ">
            <Link
              to="#"
              className="bg-black-2 h-15 grid place-items-center   w-46"
            >
              <div className="h-15 flex items-center space-x-1  ">
                <img src={apple} alt="Apple icon" className="w-5 h-7" />
                <span className="flex flex-col mb-[10px]  text-white">
                  <p className="text-title-2xsm">Download on the</p>
                  <p className="text-title-xsm  -mt-1.5 font-medium">
                    App Store
                  </p>
                </span>
              </div>
            </Link>
            <Link
              to="#"
              className="bg-black-2 h-15 grid place-items-center   w-46"
            >
              <div className="h-14 flex items-center space-x-1  ">
                <img src={play} alt="Apple icon" className="w-5 h-8" />
                <span className="flex flex-col mb-3   text-white">
                  <p className="text-title-2xsm  font-thin">Get it on</p>
                  <p className="text-[19px]  -mt-1.5 font-medium">
                    Google Play
                  </p>
                </span>
              </div>
            </Link>
          </div>
          <div className="flex md:flex-row flex-col mt-4 items-center space-y-4 md:space-y-0 ">
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

        <div className="  max-w-125 w-full  grid place-items-center ">
          <img
            src={main}
            className=" shadow-2xl w-ful h-full  rounded-2xl border-searchColor border-opacity-60  object-contain"
            alt="Main"
          />
        </div>
      </div>
    </>
  );
}
