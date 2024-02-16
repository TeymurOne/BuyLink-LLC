import { Link } from 'react-router-dom';
import screen from '../../images/pageLand/qrscreen.svg';

import group155 from '../../images/pageLand/Group 155.svg';
import card1 from '../../images/pageLand/card1.png';
import apple from '../../images/pageLand/appleicon.svg';
import store from '../../images/pageLand/storeplay.svg';


import Slider from './Slider';
const Main = () => {
  

  return (
    <>
      <main className="w-full py-10    mx-auto max-w-[1370px]      ">
        <div className="flex justify-between  " id='about'>
          <div className="lg:w-[42%] px-[20px] 2xl:p-0  sm:w-full text-[#000000de]">
            <div className='w-[20%]'>
            <p className="xl:text-[46px]  lg:text-4xl md:text-3xl sm:text-2xl xsm:text-xl   font-bold  font-Manrope">
              BuyLink - it’s kind of marketplace that helps sellers and
              potential buyers find each other online and interact each other
            </p>
            <p className="xl:text-[24px]  lg:text-[18px] md:text-[14px] xsm:text-[10px] py-4  tracking-wider ">
              Our mission is to connect people in one referral social network
              where they are able to get actual benefits from recommendations.
            </p>
            </div>
          
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
     

        {/* buynet wallet */}

        <section className=" flex  h-auto  py-20 px-6  xl:px-0 flex-col lg:flex-row">
          <div className=" lg:w-1/2 mx-auto">
            <img
              className="  w-full  max-w-[525px] rounded-[22px] max-h-[300px]"
              src={card1}
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
