import partnerleft from '../../images/Pages-index/modal/partner-left.png';
import play from '../../images/Pages-index/head-main/store-icon.svg';
import apple from '../../images/Pages-index/head-main/apple-icon.svg';
import qr from '../../images/Pages-index/modal/frame.png';
import './Main.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ModalQr = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full  bg-tborderHover " id="buylinkdownload">
      <div className="  hidden items-center lg:flex   ">
        <div className=" ml-auto space-x-3 pr-10  text-center">
          <span className="font-inter font-semibold text-starrating lg:text-4xl xl:text-5xl">
            {t('become.0')}
          </span>
          <span className="font-inter font-medium text-starrating lg:text-4xl xl:text-5xl">
            {t('become.1')}
          </span>
          <h4 className=" text-4xl"> {t('become.2')}</h4>
          <img src={partnerleft} alt="Partner left" />
        </div>
        <div className=" gradient grid w-full max-w-3xl place-items-center rounded-tl-[320px] bg-textPrimary  py-40 ">
          <div className=" flex h-[219px]  w-75 flex-col items-center justify-center">
            <div className="grid w-full max-w-90 place-items-center  rounded-3xl border-2 border-starrating bg-white p-5 ">
              <img className="h-full w-60" src={qr} alt=" Qr" />
            </div>
            <h2 className="py-4 text-title-md2  font-semibold text-starrating   ">
              {t('become.3')}
            </h2>
            <div className="mt-6 flex    h-34   ">
              <Link
                to="#"
                className="mr-2 grid  h-15 w-46 place-items-center   bg-black-2"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalQr;
