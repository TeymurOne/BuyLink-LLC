import partnerleft from '../../images/Pages-index/modal/partner-left.png';
import play from '../../images/Pages-index/head-main/store-icon.svg';
import apple from '../../images/Pages-index/head-main/apple-icon.svg';
import qr from '../../images/Pages-index/modal/qr.svg';
import './Main.css';
import { Link } from 'react-router-dom';

const ModalQr = () => {
  return (
    <div className='w-full  bg-tborderHover '>
      <div className="  lg:flex hidden items-center   ">
          <div className=" text-center ml-auto pr-10  space-x-3">
            <span className="text-starrating xl:text-5xl lg:text-4xl font-inter font-semibold">
              Buylink
            </span>
            <span className="text-starrating xl:text-5xl lg:text-4xl font-inter font-medium">
              tətbiqini yüklə
            </span>
            <h4 className=" text-4xl">Hər yerdə mövcuddur</h4>
            <img src={partnerleft} alt="Partner left" />
          </div>
          <div className=" py-40 gradient grid place-items-center max-w-3xl w-full rounded-tl-[320px]  bg-textPrimary ">
            <div className=" flex w-75  items-center justify-center flex-col h-[219px]">
              <div className="rounded-3xl p-6 border-2 border-starrating  bg-white grid place-items-center max-w-90 w-full ">
                <img className="w-55 h-full" src={qr} alt=" Qr" />
              </div>
              <h2 className="text-starrating py-4  text-title-lg font-semibold   ">
                For download Scan QR
              </h2>
              <div className="flex mt-6    h-34   ">
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
            </div>
        </div>
      </div>
    </div>
  );
};

export default ModalQr;