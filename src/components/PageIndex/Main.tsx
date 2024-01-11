import { Link } from 'react-router-dom';
import screen from '../../images/pageLand/qrscreen.svg';

import group155 from '../../images/pageLand/Group 155.svg';
import apple from '../../images/pageLand/appleicon.svg';
import store from '../../images/pageLand/storeplay.svg';

import card from '../../images/pageLand/card.png';
import Slider from './Slider';
import { useRef, useState } from 'react';
const Main = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoShow, setVideo] = useState<boolean>(false);

  const togglePlay = () => {
    setVideo(true);

    if (!videoShow && videoRef.current) {
      videoRef.current.src = './video.mp4';

      videoRef.current.play();
    }
  };

  return (
    <>
      <main className="w-full py-10    mx-auto max-w-[1370px]      ">
        <div className="flex justify-between  " id='about'>
          <div className="lg:w-[42%] px-[20px] 2xl:p-0  sm:w-full text-[#000000de]">
            <p className="xl:text-[46px]  lg:text-4xl md:text-3xl sm:text-2xl xsm:text-xl  font-bold  font-Manrope">
              BuyLink - it’s kind of marketplace that helps sellers and
              potential buyers find each other online and interact each other
            </p>
            <p className="xl:text-[24px]  lg:text-[18px] md:text-[14px] xsm:text-[10px] py-4  tracking-wider ">
              Our mission is to connect people in one referral social network
              where they are able to get actual benefits from recommendations.
            </p>
            <div className="flex items-center  space-x-4">
              <div className="flex flex-col space-y-5">
                <Link
                  to=""
                  className="text-sm text-white w-[188px] h-[60px]  flex items-center justify-center  rounded-sm  bg-black-2"
                >
                  <img className="mr-2" src={apple} alt="" />
                  <span className="grid place-items-start  h-full">
                    <p className="text-[10px] mt-2 mb-[-20px]"> Get it on</p>
                    <p className="font-medium"> Google Play</p>
                  </span>
                </Link>
                <Link
                  to=""
                  className="text-sm text-white w-[188px] h-[60px]  flex items-center justify-center  rounded-sm  bg-black-2"
                >
                  <img className="mr-2" src={store} alt="" />
                  <span className="grid place-items-start  h-full">
                    <p className="text-[10px] mt-2 mb-[-20px]"> Get it on</p>
                    <p className="font-medium"> Google Play</p>
                  </span>
                </Link>
              </div>
              <div>
                <img className="w-[144px] h-[146px]" src={screen} alt="" />
              </div>
            </div>
          </div>
        </div>

        <Slider />
        <section className="grid place-items-center  sm:px-2 px-0  object-center  rounded-lg  h-auto 2xl:p-0  ">
          <video
            ref={videoRef}
            id="myVideo"
            width="100%"
            className="bg-black-2 object-contain  h-auto   max-w-[74.8%] w-full      rounded-lg  "
            controls={videoShow}
          >
            <source src="" type="video/mp4" />
          </video>

          {!videoShow ? (
            <button
              onClick={togglePlay}
              className="absolute   text-[10px]  w-[40px] lg:w-[117px]   "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
             
                viewBox="0 0 152 153"
                fill="none"
              >
                <path
                  d="M52.25 110.111C50.9902 110.111 49.782 109.611 48.8912 108.72C48.0004 107.829 47.5 106.621 47.5 105.361V48.3611C47.5004 47.5518 47.7077 46.7559 48.102 46.0491C48.4964 45.3424 49.0648 44.7481 49.7534 44.3227C50.4419 43.8973 51.2277 43.6549 52.0363 43.6185C52.8448 43.582 53.6492 43.7528 54.3732 44.1146L111.373 72.6146C112.161 73.0095 112.824 73.6159 113.287 74.3658C113.75 75.1158 113.995 75.9798 113.995 76.8611C113.995 77.7425 113.75 78.6065 113.287 79.3564C112.824 80.1064 112.161 80.7127 111.373 81.1076L54.3732 109.608C53.7141 109.938 52.9872 110.11 52.25 110.111ZM57 56.0466V97.6756L98.629 76.8611L57 56.0466Z"
                  fill="white"
                />
                <path
                  d="M76 19.8613C87.2736 19.8613 98.2939 23.2043 107.668 29.4676C117.041 35.7308 124.347 44.633 128.661 55.0484C132.975 65.4638 134.104 76.9246 131.905 87.9815C129.705 99.0384 124.277 109.195 116.305 117.166C108.334 125.138 98.1771 130.567 87.1202 132.766C76.0633 134.965 64.6025 133.837 54.1871 129.522C43.7717 125.208 34.8695 117.902 28.6063 108.529C22.343 99.1552 19 88.1349 19 76.8613C19 61.744 25.0054 47.2458 35.6949 36.5562C46.3845 25.8667 60.8827 19.8613 76 19.8613ZM76 10.3613C62.8476 10.3613 49.9905 14.2615 39.0546 21.5686C28.1187 28.8757 19.5953 39.2616 14.562 51.4129C9.52881 63.5642 8.21189 76.9351 10.7778 89.8348C13.3437 102.735 19.6772 114.584 28.9774 123.884C38.2776 133.184 50.1268 139.518 63.0265 142.084C75.9263 144.649 89.2972 143.333 101.448 138.299C113.6 133.266 123.986 124.743 131.293 113.807C138.6 102.871 142.5 90.0138 142.5 76.8613C142.5 59.2244 135.494 42.3099 123.023 29.8387C110.551 17.3676 93.6369 10.3613 76 10.3613Z"
                  fill="white"
                />
              </svg>
            </button>
          ) : (
            ''
          )}
        </section>

        {/* buynet wallet */}

        <section className=" flex  h-auto  py-20 px-6  xl:px-0 flex-col lg:flex-row">
          <div className=" lg:w-1/2 mx-auto">
            <img
              className="  w-full  max-w-[525px] rounded-[22px] max-h-[300px]"
              src={card}
              alt="Buynet wallet img"
            />
          </div>
          <div className="  lg:w-1/2 w-full px-2    text-black  ">
            <h2 className="xl:text-[46px]  md:text-[30px] xsm:text-[25px]   pb-2  font-semibold xl:leading-[60px] leading-10 ">
              Buynet Wallet - The easiest way to manage your payments
            </h2>
            <p className="text-[#000000ad] text-left">
              End-to-end payments and financial management in a single solution.
              Meet the right platform to help realize.
            </p>

            <div className="grid lg:grid-cols-2 grid-cols-2 2xsm::grid-cols-1 mt-2 text-[19px] font-manrope normal font-medium text-[#000000ad]">
              <div className="flex space-x-2 my-2 items-center ">
                <img
                  className="w-[24px] h-[24px]"
                  src={group155}
                  alt="Group 155"
                />
                <p>Cash out at any time</p>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  className="w-[24px] h-[24px]"
                  src={group155}
                  alt="Group 155"
                />
                <p>Cash out at any time</p>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  className="w-[24px] h-[24px]"
                  src={group155}
                  alt="Group 155"
                />
                <p>Cash out at any time</p>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  className="w-[24px] h-[24px]"
                  src={group155}
                  alt="Group 155"
                />
                <p>Cash out at any time</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;
