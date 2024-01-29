import Header from './Header';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import screen from '../../images/pageLand/qrscreen.svg';

import dollar from '../../images/pageLand/dollar.svg';
import money from '../../images/pageLand/money.svg';
import info from '../../images/pageLand/info.svg';
import card1 from '../../images/pageLand/card1.png';

import Slider from './Slider';
import { Link } from 'react-router-dom';
import VideoSection from './VideoSection';

import iphone4 from '../../images/pageLand/iphone4.png';
import iphone5 from '../../images/pageLand/iphone5.png';
import iphone6 from '../../images/pageLand/iphone6.png';

import gosupport from '../../images/pageLand/gosport.png';
import user from '../../images/pageLand/user.png';
import wallet2 from '../../images/pageLand/wallet2.png';

import iphone15plus from '../../images/pageLand/15plus.png';
import mock from '../../images/pageLand/iphonemock.png';
import black from '../../images/pageLand/black.png';

import partnerLogo from '../../images/pageLand/mask.svg';
import Accordion from './Accordion';
import Footer from './Footer';
 export const isMobile = window.innerWidth <= 455;


const Index = () => {
  return (
    <>
      <div className="w-full h-auto px-4 max-w-[1480px] mx-auto    cursor-pointer">
        <HeadMainVideo />
        <WalletBuylink />
        <BuyLinkPartner />
      </div>

      <div className=" bg-[]  w-full px-4  ">
        <div className=" py-10 max-w-[1480px] mx-auto  ">
          <BuyLinkPartner2 />
        </div>
      </div>
      <div className=" bg-[#F3F4F6] py-10 ">
        <div className='max-w-[1480px] px-4 mx-auto'>
        <BuyLinkPartner3 />

        </div>

      </div>
      <div className=" bg-[#4C5DF5]  ">
        <Partner />
      </div>
      <NewsLetter />
      <div className=" bg-[#F3F4F6] py-10 ">
        <div className="max-w-[1480px] py-20 mx-auto">
          <Accordion />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Index;

function HeadMainVideo() {
  return (
    <>
      <div className="w-full bg-[#F3F4F6] h-auto      cursor-pointer">
        <Header />
        <div className="flex justify-between  " id="about">
          <div className="lg:w-[42%]  2xl:p-0  sm:w-full text-[#000000de]">
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
                  <img className="mr-2" alt="" />
                  <span className="grid place-items-start  h-full">
                    <p className="text-[10px] mt-2 mb-[-20px]"> Get it on</p>
                    <p className="font-medium"> Google Play</p>
                  </span>
                </Link>
                <Link
                  to=""
                  className="text-sm text-white w-[188px] h-[60px]  flex items-center justify-center  rounded-sm  bg-black-2"
                >
                  <img className="mr-2" alt="" />
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
        <VideoSection />
      </div>
    </>
  );
}

function WalletBuylink() {
  return (
    <>
      <section>
        <div className=" flex justify-between lg:space-x-4 md:space-x-4 space-x-0 py-14 xl:px-0 flex-col md:flex-col lg:flex-row">
          <div className="  w-full   max-w-[507px] " id="walletBuylink">
            <img
              className=" w-full h-full object-contain  rounded-xl "
              src={card1}
              alt="Buynet wallet img"
            />
          </div>

          <div className="   max-w-[780px] w-full         text-black  ">
            <div className="lg:text-start text-center">
              <h2 className="font-manrope   text-2xl      text-black font-bold">
                Buynet Wallet - The easiest way to manage
                <span className="text-[#4C5DF5]"> your payments</span>
              </h2>

              <p className="lg:text-[20px] text-[14px] lg:leading-6 leading-4  font-medium py-4 normal font-poppins">
                End-to-end payments and financial management in a single
                solution. Meet the right platform to help realize.
              </p>
            </div>
            <div
              className=" grid lg:grid-cols-2 2xsm:mx-auto w-full lg:mx-0   lg:w-full sm:grid-cols-2 grid-cols-1 place-content-center   gap-y-2     font-manrope normal font-medium text-[#000000ad]"
              id="payments"
            >
              <div className="flex space-x-4   items-center w-full max-w-[300px]  ">
                <img
                  className="w-[37px] h-[37px] "
                  src={dollar}
                  alt="Group 155"
                />
                <p>Cash out at any time</p>
              </div>
              <div className="flex items-center space-x-4">
                <img
                  className="w-[37px] h-[37px]"
                  src={money}
                  alt="Group 155"
                />
                <p>Manage your own wallet</p>
              </div>
              <div className="flex items-center space-x-4">
                <img className="w-[37px] h-[37px]" src={info} alt="Group 155" />
                <p>Get live support</p>
              </div>
              <div className="flex items-center space-x-4">
                <img
                  className="w-[37px] h-[37px]"
                  src={dollar}
                  alt="Group 155"
                />
                <p>Get live support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function BuyLinkPartner() {
  return (
    <>
      <section>
        <div
          className="flex flex-col lg:items-center  items-stretch text-center"
          id="buylinkpartner"
        >
          <div className="space-y-4 ">
            <h2  className="font-manrope  lg:text-[40px] text-[30px]      leading-8  text-black font-bold">
              Explore new
              <span className="text-[#4C5DF5]"> users and partners</span>
            </h2>
            <p className='lg:text-[20px] text-[14px] leading-4'>
              End-to-end payments and financial management in a single solution.
              Meet the right <br /> platform to help realize.
            </p>
          </div>
          <div className="flex lg:flex-row flex-col     max-w-full lg:w-[80%]">
            <div className="pt-4  ">
              <div className="flex items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <path
                    d="M18 3.75V18M18 18L30.75 10.9166M18 18L5.25 10.9166M18 18V32.25M30.75 25.0833L19.1655 18.6475C18.7401 18.4112 18.5274 18.293 18.3022 18.2467C18.1028 18.2057 17.8972 18.2057 17.6978 18.2467C17.4726 18.293 17.2599 18.4112 16.8345 18.6475L5.25 25.0833M31.5 24.0878V11.9122C31.5 11.3982 31.5 11.1412 31.4243 10.912C31.3573 10.7093 31.2478 10.5231 31.1031 10.3661C30.9395 10.1886 30.7148 10.0638 30.2655 9.81419L19.1655 3.64753C18.7401 3.41119 18.5274 3.29302 18.3022 3.24669C18.1028 3.20569 17.8972 3.20569 17.6978 3.24669C17.4726 3.29302 17.2599 3.41119 16.8345 3.64753L5.73446 9.8142C5.28517 10.0638 5.06053 10.1886 4.89695 10.3661C4.75224 10.5231 4.64272 10.7093 4.57573 10.912C4.5 11.1412 4.5 11.3982 4.5 11.9122V24.0878C4.5 24.6018 4.5 24.8588 4.57573 25.088C4.64272 25.2907 4.75224 25.4769 4.89695 25.6339C5.06053 25.8114 5.28517 25.9362 5.73446 26.1858L16.8345 32.3525C17.2599 32.5888 17.4726 32.707 17.6978 32.7533C17.8972 32.7943 18.1028 32.7943 18.3022 32.7533C18.5274 32.707 18.7401 32.5888 19.1655 32.3525L30.2655 26.1858C30.7148 25.9362 30.9395 25.8114 31.1031 25.6339C31.2478 25.4769 31.3573 25.2907 31.4243 25.088C31.5 24.8588 31.5 24.6018 31.5 24.0878Z"
                    stroke="#4C5DF5"
                    strokeWidth="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <h2  className="font-manrope  lg:text-[14px] text-[22px]       text-black font-bold">
                Oznajomtes s nashimi partnerami
               </h2>
              </div>

              <p className='font-poppins leading-[2] lg:text-[12px] text-[14px] md:text-start  text-center  text-[#000000ad] font-normal'>
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet  faucibus tincidunt eu adipiscing sociis arcu
                lorem porttitor.
              </p>
            </div>
            <div className="pt-4">
              <div className="flex items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <path
                    d="M18 3.75V18M18 18L30.75 10.9166M18 18L5.25 10.9166M18 18V32.25M30.75 25.0833L19.1655 18.6475C18.7401 18.4112 18.5274 18.293 18.3022 18.2467C18.1028 18.2057 17.8972 18.2057 17.6978 18.2467C17.4726 18.293 17.2599 18.4112 16.8345 18.6475L5.25 25.0833M31.5 24.0878V11.9122C31.5 11.3982 31.5 11.1412 31.4243 10.912C31.3573 10.7093 31.2478 10.5231 31.1031 10.3661C30.9395 10.1886 30.7148 10.0638 30.2655 9.81419L19.1655 3.64753C18.7401 3.41119 18.5274 3.29302 18.3022 3.24669C18.1028 3.20569 17.8972 3.20569 17.6978 3.24669C17.4726 3.29302 17.2599 3.41119 16.8345 3.64753L5.73446 9.8142C5.28517 10.0638 5.06053 10.1886 4.89695 10.3661C4.75224 10.5231 4.64272 10.7093 4.57573 10.912C4.5 11.1412 4.5 11.3982 4.5 11.9122V24.0878C4.5 24.6018 4.5 24.8588 4.57573 25.088C4.64272 25.2907 4.75224 25.4769 4.89695 25.6339C5.06053 25.8114 5.28517 25.9362 5.73446 26.1858L16.8345 32.3525C17.2599 32.5888 17.4726 32.707 17.6978 32.7533C17.8972 32.7943 18.1028 32.7943 18.3022 32.7533C18.5274 32.707 18.7401 32.5888 19.1655 32.3525L30.2655 26.1858C30.7148 25.9362 30.9395 25.8114 31.1031 25.6339C31.2478 25.4769 31.3573 25.2907 31.4243 25.088C31.5 24.8588 31.5 24.6018 31.5 24.0878Z"
                    stroke="#4C5DF5"
                    strokeWidth="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <h2  className="font-manrope  lg:text-[14px] text-[22px]       text-black font-bold">
                Oznajomtes s nashimi partnerami
            </h2>
              </div>

              <p className='font-poppins  md:text-start  text-center leading-[2] lg:text-[12px] text-[14px]   text-[#000000ad] font-normal'>
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet  faucibus tincidunt eu adipiscing sociis arcu
                lorem porttitor.
              </p>
            </div>
            <div className="pt-4">
              <div className="flex items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <path
                    d="M18 3.75V18M18 18L30.75 10.9166M18 18L5.25 10.9166M18 18V32.25M30.75 25.0833L19.1655 18.6475C18.7401 18.4112 18.5274 18.293 18.3022 18.2467C18.1028 18.2057 17.8972 18.2057 17.6978 18.2467C17.4726 18.293 17.2599 18.4112 16.8345 18.6475L5.25 25.0833M31.5 24.0878V11.9122C31.5 11.3982 31.5 11.1412 31.4243 10.912C31.3573 10.7093 31.2478 10.5231 31.1031 10.3661C30.9395 10.1886 30.7148 10.0638 30.2655 9.81419L19.1655 3.64753C18.7401 3.41119 18.5274 3.29302 18.3022 3.24669C18.1028 3.20569 17.8972 3.20569 17.6978 3.24669C17.4726 3.29302 17.2599 3.41119 16.8345 3.64753L5.73446 9.8142C5.28517 10.0638 5.06053 10.1886 4.89695 10.3661C4.75224 10.5231 4.64272 10.7093 4.57573 10.912C4.5 11.1412 4.5 11.3982 4.5 11.9122V24.0878C4.5 24.6018 4.5 24.8588 4.57573 25.088C4.64272 25.2907 4.75224 25.4769 4.89695 25.6339C5.06053 25.8114 5.28517 25.9362 5.73446 26.1858L16.8345 32.3525C17.2599 32.5888 17.4726 32.707 17.6978 32.7533C17.8972 32.7943 18.1028 32.7943 18.3022 32.7533C18.5274 32.707 18.7401 32.5888 19.1655 32.3525L30.2655 26.1858C30.7148 25.9362 30.9395 25.8114 31.1031 25.6339C31.2478 25.4769 31.3573 25.2907 31.4243 25.088C31.5 24.8588 31.5 24.6018 31.5 24.0878Z"
                    stroke="#4C5DF5"
                    strokeWidth="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <h2  className="font-manrope  lg:text-[14px] text-[22px]       text-black font-bold">
                Oznajomtes s nashimi partnerami
            </h2>
              </div>

              <p className='font-poppins  md:text-start  text-center leading-[2] lg:text-[12px] text-[14px]    text-[#000000ad] font-normal'>
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet  faucibus tincidunt eu adipiscing sociis arcu
                lorem porttitor.
              </p>
            </div>
          </div>
       
        </div>
        {isMobile ?(
           <Swiper
           pagination={{
             dynamicBullets: true,
             clickable: true,
           }}
           modules={[Pagination]}
           className="mySwiper"
         >
           <div className="flex items-center  space-x-4 justify-center pt-20">
             <SwiperSlide>
               <div className="max-w-[225px] w-full ">
                 <img
                   className="w-full h-full object-contain"
                   src={gosupport}
                   alt="Iphone2"
                 />
               </div>
             </SwiperSlide>
             <SwiperSlide>
               <div className="max-w-[225px] w-full  ">
                 <img
                   className="w-full h-full object-contain"
                   src={user}
                   alt="Iphone4"
                 />
               </div>
             </SwiperSlide>
             <SwiperSlide>
               <div className="max-w-[225px] w-full  ">
                 <img
                   className="w-full h-full object-contain"
                   src={wallet2}
                   alt="Iphone2"
                 />
               </div>
             </SwiperSlide>
           </div>
         </Swiper>

        ):(
          <div className="flex items-center  space-x-4 justify-center pt-20">
          <div className="w-[300px] h-[490px]">
            <img
              className="w-full h-full object-contain"
              src={iphone4}
              alt="Iphone2"
            />
          </div>
          <div className="w-[280px] h-[490px]">
            <img
              className="w-full h-full object-contain"
              src={iphone5}
              alt="Iphone4"
            />
          </div>
          <div className="w-[280px] h-[490px]">
            <img
              className="w-full h-full object-contain"
              src={iphone6}
              alt="Iphone2"
            />
          </div>
        </div>
        )}
     
      </section>
    </>
  );
}
function BuyLinkPartner2() {
  return (
    <>
      <section>
        <div
          className="flex flex-col lg:items-center  items-stretch text-center"
          id="buylinkpartner"
        >
          <div className="space-y-4">
            <h2  className="font-manrope  lg:text-[40px] text-[30px]      leading-8  text-black font-bold">
            Get cash 
              <span className="text-[#4C5DF5]"> in 3 steps</span>
            </h2>
            <p className='text-[17px]'>
              End-to-end payments and financial management in a single solution.
              Meet the right <br /> platform to help realize.
            </p>
          </div>
          <div className="flex lg:flex-row flex-col     max-w-full lg:w-[80%]">
            <div className="pt-4  ">
              <div className="flex items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <path
                    d="M18 3.75V18M18 18L30.75 10.9166M18 18L5.25 10.9166M18 18V32.25M30.75 25.0833L19.1655 18.6475C18.7401 18.4112 18.5274 18.293 18.3022 18.2467C18.1028 18.2057 17.8972 18.2057 17.6978 18.2467C17.4726 18.293 17.2599 18.4112 16.8345 18.6475L5.25 25.0833M31.5 24.0878V11.9122C31.5 11.3982 31.5 11.1412 31.4243 10.912C31.3573 10.7093 31.2478 10.5231 31.1031 10.3661C30.9395 10.1886 30.7148 10.0638 30.2655 9.81419L19.1655 3.64753C18.7401 3.41119 18.5274 3.29302 18.3022 3.24669C18.1028 3.20569 17.8972 3.20569 17.6978 3.24669C17.4726 3.29302 17.2599 3.41119 16.8345 3.64753L5.73446 9.8142C5.28517 10.0638 5.06053 10.1886 4.89695 10.3661C4.75224 10.5231 4.64272 10.7093 4.57573 10.912C4.5 11.1412 4.5 11.3982 4.5 11.9122V24.0878C4.5 24.6018 4.5 24.8588 4.57573 25.088C4.64272 25.2907 4.75224 25.4769 4.89695 25.6339C5.06053 25.8114 5.28517 25.9362 5.73446 26.1858L16.8345 32.3525C17.2599 32.5888 17.4726 32.707 17.6978 32.7533C17.8972 32.7943 18.1028 32.7943 18.3022 32.7533C18.5274 32.707 18.7401 32.5888 19.1655 32.3525L30.2655 26.1858C30.7148 25.9362 30.9395 25.8114 31.1031 25.6339C31.2478 25.4769 31.3573 25.2907 31.4243 25.088C31.5 24.8588 31.5 24.6018 31.5 24.0878Z"
                    stroke="#4C5DF5"
                    strokeWidth="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <h2  className="font-manrope  lg:text-[14px] text-[22px]       text-black font-bold">
                Oznajomtes s nashimi partnerami
               </h2>
              </div>

              <p className='font-poppins leading-[2] lg:text-[12px] text-[14px] md:text-start  text-center  text-[#000000ad] font-normal'>
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet  faucibus tincidunt eu adipiscing sociis arcu
                lorem porttitor.
              </p>
            </div>
            <div className="pt-4">
              <div className="flex items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <path
                    d="M18 3.75V18M18 18L30.75 10.9166M18 18L5.25 10.9166M18 18V32.25M30.75 25.0833L19.1655 18.6475C18.7401 18.4112 18.5274 18.293 18.3022 18.2467C18.1028 18.2057 17.8972 18.2057 17.6978 18.2467C17.4726 18.293 17.2599 18.4112 16.8345 18.6475L5.25 25.0833M31.5 24.0878V11.9122C31.5 11.3982 31.5 11.1412 31.4243 10.912C31.3573 10.7093 31.2478 10.5231 31.1031 10.3661C30.9395 10.1886 30.7148 10.0638 30.2655 9.81419L19.1655 3.64753C18.7401 3.41119 18.5274 3.29302 18.3022 3.24669C18.1028 3.20569 17.8972 3.20569 17.6978 3.24669C17.4726 3.29302 17.2599 3.41119 16.8345 3.64753L5.73446 9.8142C5.28517 10.0638 5.06053 10.1886 4.89695 10.3661C4.75224 10.5231 4.64272 10.7093 4.57573 10.912C4.5 11.1412 4.5 11.3982 4.5 11.9122V24.0878C4.5 24.6018 4.5 24.8588 4.57573 25.088C4.64272 25.2907 4.75224 25.4769 4.89695 25.6339C5.06053 25.8114 5.28517 25.9362 5.73446 26.1858L16.8345 32.3525C17.2599 32.5888 17.4726 32.707 17.6978 32.7533C17.8972 32.7943 18.1028 32.7943 18.3022 32.7533C18.5274 32.707 18.7401 32.5888 19.1655 32.3525L30.2655 26.1858C30.7148 25.9362 30.9395 25.8114 31.1031 25.6339C31.2478 25.4769 31.3573 25.2907 31.4243 25.088C31.5 24.8588 31.5 24.6018 31.5 24.0878Z"
                    stroke="#4C5DF5"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <h2  className="font-manrope  lg:text-[14px] text-[22px]       text-black font-bold">
                Oznajomtes s nashimi partnerami
            </h2>
              </div>

              <p className='font-poppins  md:text-start  text-center leading-[2] lg:text-[12px] text-[14px]   text-[#000000ad] font-normal'>
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet  faucibus tincidunt eu adipiscing sociis arcu
                lorem porttitor.
              </p>
            </div>
            <div className="pt-4">
              <div className="flex items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <path
                    d="M18 3.75V18M18 18L30.75 10.9166M18 18L5.25 10.9166M18 18V32.25M30.75 25.0833L19.1655 18.6475C18.7401 18.4112 18.5274 18.293 18.3022 18.2467C18.1028 18.2057 17.8972 18.2057 17.6978 18.2467C17.4726 18.293 17.2599 18.4112 16.8345 18.6475L5.25 25.0833M31.5 24.0878V11.9122C31.5 11.3982 31.5 11.1412 31.4243 10.912C31.3573 10.7093 31.2478 10.5231 31.1031 10.3661C30.9395 10.1886 30.7148 10.0638 30.2655 9.81419L19.1655 3.64753C18.7401 3.41119 18.5274 3.29302 18.3022 3.24669C18.1028 3.20569 17.8972 3.20569 17.6978 3.24669C17.4726 3.29302 17.2599 3.41119 16.8345 3.64753L5.73446 9.8142C5.28517 10.0638 5.06053 10.1886 4.89695 10.3661C4.75224 10.5231 4.64272 10.7093 4.57573 10.912C4.5 11.1412 4.5 11.3982 4.5 11.9122V24.0878C4.5 24.6018 4.5 24.8588 4.57573 25.088C4.64272 25.2907 4.75224 25.4769 4.89695 25.6339C5.06053 25.8114 5.28517 25.9362 5.73446 26.1858L16.8345 32.3525C17.2599 32.5888 17.4726 32.707 17.6978 32.7533C17.8972 32.7943 18.1028 32.7943 18.3022 32.7533C18.5274 32.707 18.7401 32.5888 19.1655 32.3525L30.2655 26.1858C30.7148 25.9362 30.9395 25.8114 31.1031 25.6339C31.2478 25.4769 31.3573 25.2907 31.4243 25.088C31.5 24.8588 31.5 24.6018 31.5 24.0878Z"
                    stroke="#4C5DF5"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <h2  className="font-manrope  lg:text-[14px] text-[22px]       text-black font-bold">
                Oznajomtes s nashimi partnerami
            </h2>
              </div>

              <p className='font-poppins  md:text-start  text-center leading-[2] lg:text-[12px] text-[14px]    text-[#000000ad] font-normal'>
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet  faucibus tincidunt eu adipiscing sociis arcu
                lorem porttitor.
              </p>
            </div>
          </div>
       
        </div>
        {isMobile ?(
           <Swiper
           pagination={{
             dynamicBullets: true,
             clickable: true,
           }}
           modules={[Pagination]}
           className="mySwiper"
         >
           <div className="flex items-center  space-x-4 justify-center pt-20">
             <SwiperSlide>
               <div className="max-w-[225px] w-full ">
                 <img
                   className="w-full h-full object-contain"
                   src={gosupport}
                   alt="Iphone2"
                 />
               </div>
             </SwiperSlide>
             <SwiperSlide>
               <div className="max-w-[225px] w-full  ">
                 <img
                   className="w-full h-full object-contain"
                   src={user}
                   alt="Iphone4"
                 />
               </div>
             </SwiperSlide>
             <SwiperSlide>
               <div className="max-w-[225px] w-full  ">
                 <img
                   className="w-full h-full object-contain"
                   src={wallet2}
                   alt="Iphone2"
                 />
               </div>
             </SwiperSlide>
           </div>
         </Swiper>

        ):(
          <div className="flex items-center  space-x-4 justify-center pt-20">
          <div className="w-[300px] h-[490px]">
            <img
              className="w-full h-full object-contain"
              src={gosupport}
              alt="Iphone2"
            />
          </div>
          <div className="w-[280px] h-[490px]">
            <img
              className="w-full h-full object-contain"
              src={user}
              alt="Iphone4"
            />
          </div>
          <div className="w-[280px] h-[490px]">
            <img
              className="w-full h-full object-contain"
              src={wallet2}
              alt="Iphone2"
            />
          </div>
        </div>
        )}
     
      </section>
    </>
  );
}
function BuyLinkPartner3() {
  return (
    <>
      <section>
        <div
          className="flex flex-col lg:items-center  items-stretch text-center"
          id="buylinkpartner"
        >
          <div className="space-y-4">
            <h2  className="font-manrope  lg:text-[40px] text-[30px]      leading-8  text-black font-bold">
            How to 
              <span className="text-[#4C5DF5]"> get discount? </span>
            </h2>
            <p className='text-[17px]'>
              End-to-end payments and financial management in a single solution.
              Meet the right <br /> platform to help realize.
            </p>
          </div>
          <div className="flex lg:flex-row flex-col     max-w-full lg:w-[80%]">
            <div className="pt-4  ">
              <div className="flex items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <path
                    d="M18 3.75V18M18 18L30.75 10.9166M18 18L5.25 10.9166M18 18V32.25M30.75 25.0833L19.1655 18.6475C18.7401 18.4112 18.5274 18.293 18.3022 18.2467C18.1028 18.2057 17.8972 18.2057 17.6978 18.2467C17.4726 18.293 17.2599 18.4112 16.8345 18.6475L5.25 25.0833M31.5 24.0878V11.9122C31.5 11.3982 31.5 11.1412 31.4243 10.912C31.3573 10.7093 31.2478 10.5231 31.1031 10.3661C30.9395 10.1886 30.7148 10.0638 30.2655 9.81419L19.1655 3.64753C18.7401 3.41119 18.5274 3.29302 18.3022 3.24669C18.1028 3.20569 17.8972 3.20569 17.6978 3.24669C17.4726 3.29302 17.2599 3.41119 16.8345 3.64753L5.73446 9.8142C5.28517 10.0638 5.06053 10.1886 4.89695 10.3661C4.75224 10.5231 4.64272 10.7093 4.57573 10.912C4.5 11.1412 4.5 11.3982 4.5 11.9122V24.0878C4.5 24.6018 4.5 24.8588 4.57573 25.088C4.64272 25.2907 4.75224 25.4769 4.89695 25.6339C5.06053 25.8114 5.28517 25.9362 5.73446 26.1858L16.8345 32.3525C17.2599 32.5888 17.4726 32.707 17.6978 32.7533C17.8972 32.7943 18.1028 32.7943 18.3022 32.7533C18.5274 32.707 18.7401 32.5888 19.1655 32.3525L30.2655 26.1858C30.7148 25.9362 30.9395 25.8114 31.1031 25.6339C31.2478 25.4769 31.3573 25.2907 31.4243 25.088C31.5 24.8588 31.5 24.6018 31.5 24.0878Z"
                    stroke="#4C5DF5"
                    strokeWidth="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <h2  className="font-manrope  lg:text-[14px] text-[22px]       text-black font-bold">
                Oznajomtes s nashimi partnerami
               </h2>
              </div>

              <p className='font-poppins leading-[2] lg:text-[12px] text-[14px] md:text-start  text-center  text-[#000000ad] font-normal'>
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet  faucibus tincidunt eu adipiscing sociis arcu
                lorem porttitor.
              </p>
            </div>
            <div className="pt-4">
              <div className="flex items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <path
                    d="M18 3.75V18M18 18L30.75 10.9166M18 18L5.25 10.9166M18 18V32.25M30.75 25.0833L19.1655 18.6475C18.7401 18.4112 18.5274 18.293 18.3022 18.2467C18.1028 18.2057 17.8972 18.2057 17.6978 18.2467C17.4726 18.293 17.2599 18.4112 16.8345 18.6475L5.25 25.0833M31.5 24.0878V11.9122C31.5 11.3982 31.5 11.1412 31.4243 10.912C31.3573 10.7093 31.2478 10.5231 31.1031 10.3661C30.9395 10.1886 30.7148 10.0638 30.2655 9.81419L19.1655 3.64753C18.7401 3.41119 18.5274 3.29302 18.3022 3.24669C18.1028 3.20569 17.8972 3.20569 17.6978 3.24669C17.4726 3.29302 17.2599 3.41119 16.8345 3.64753L5.73446 9.8142C5.28517 10.0638 5.06053 10.1886 4.89695 10.3661C4.75224 10.5231 4.64272 10.7093 4.57573 10.912C4.5 11.1412 4.5 11.3982 4.5 11.9122V24.0878C4.5 24.6018 4.5 24.8588 4.57573 25.088C4.64272 25.2907 4.75224 25.4769 4.89695 25.6339C5.06053 25.8114 5.28517 25.9362 5.73446 26.1858L16.8345 32.3525C17.2599 32.5888 17.4726 32.707 17.6978 32.7533C17.8972 32.7943 18.1028 32.7943 18.3022 32.7533C18.5274 32.707 18.7401 32.5888 19.1655 32.3525L30.2655 26.1858C30.7148 25.9362 30.9395 25.8114 31.1031 25.6339C31.2478 25.4769 31.3573 25.2907 31.4243 25.088C31.5 24.8588 31.5 24.6018 31.5 24.0878Z"
                    stroke="#4C5DF5"
                    strokeWidth="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <h2  className="font-manrope  lg:text-[14px] text-[22px]       text-black font-bold">
                Oznajomtes s nashimi partnerami
            </h2>
              </div>

              <p className='font-poppins  md:text-start  text-center leading-[2] lg:text-[12px] text-[14px]   text-[#000000ad] font-normal'>
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet  faucibus tincidunt eu adipiscing sociis arcu
                lorem porttitor.
              </p>
            </div>
            <div className="pt-4">
              <div className="flex items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <path
                    d="M18 3.75V18M18 18L30.75 10.9166M18 18L5.25 10.9166M18 18V32.25M30.75 25.0833L19.1655 18.6475C18.7401 18.4112 18.5274 18.293 18.3022 18.2467C18.1028 18.2057 17.8972 18.2057 17.6978 18.2467C17.4726 18.293 17.2599 18.4112 16.8345 18.6475L5.25 25.0833M31.5 24.0878V11.9122C31.5 11.3982 31.5 11.1412 31.4243 10.912C31.3573 10.7093 31.2478 10.5231 31.1031 10.3661C30.9395 10.1886 30.7148 10.0638 30.2655 9.81419L19.1655 3.64753C18.7401 3.41119 18.5274 3.29302 18.3022 3.24669C18.1028 3.20569 17.8972 3.20569 17.6978 3.24669C17.4726 3.29302 17.2599 3.41119 16.8345 3.64753L5.73446 9.8142C5.28517 10.0638 5.06053 10.1886 4.89695 10.3661C4.75224 10.5231 4.64272 10.7093 4.57573 10.912C4.5 11.1412 4.5 11.3982 4.5 11.9122V24.0878C4.5 24.6018 4.5 24.8588 4.57573 25.088C4.64272 25.2907 4.75224 25.4769 4.89695 25.6339C5.06053 25.8114 5.28517 25.9362 5.73446 26.1858L16.8345 32.3525C17.2599 32.5888 17.4726 32.707 17.6978 32.7533C17.8972 32.7943 18.1028 32.7943 18.3022 32.7533C18.5274 32.707 18.7401 32.5888 19.1655 32.3525L30.2655 26.1858C30.7148 25.9362 30.9395 25.8114 31.1031 25.6339C31.2478 25.4769 31.3573 25.2907 31.4243 25.088C31.5 24.8588 31.5 24.6018 31.5 24.0878Z"
                    stroke="#4C5DF5"
                    strokeWidth="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <h2  className="font-manrope  lg:text-[14px] text-[22px]       text-black font-bold">
                Oznajomtes s nashimi partnerami
            </h2>
              </div>

              <p className='font-poppins  md:text-start  text-center leading-[2] lg:text-[12px] text-[14px]    text-[#000000ad] font-normal'>
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet  faucibus tincidunt eu adipiscing sociis arcu
                lorem porttitor.
              </p>
            </div>
          </div>
       
        </div>
        {isMobile ?(
           <Swiper
           pagination={{
             dynamicBullets: true,
             clickable: true,
           }}
           modules={[Pagination]}
           className="mySwiper"
         >
           <div className="flex items-center  space-x-4 justify-center pt-20">
             <SwiperSlide>
               <div className="max-w-[225px] w-full ">
                 <img
                   className="w-full h-full object-contain"
                   src={iphone15plus}
                   alt="Iphone2"
                 />
               </div>
             </SwiperSlide>
             <SwiperSlide>
               <div className="max-w-[225px] w-full  ">
                 <img
                   className="w-full h-full object-contain"
                   src={black}
                   alt="Iphone4"
                 />
               </div>
             </SwiperSlide>
             <SwiperSlide>
               <div className="max-w-[225px] w-full  ">
                 <img
                   className="w-full h-full object-contain"
                   src={mock}
                   alt="Iphone2"
                 />
               </div>
             </SwiperSlide>
           </div>
         </Swiper>

        ):(
          <div className="flex items-center  space-x-4 justify-center pt-20">
          <div className="w-[270px] h-[490px]">
            <img
              className="w-full h-full "
              src={iphone15plus}
              alt="Iphone2"
            />
          </div>
          <div className="w-[280px] h-[490px]">
            <img
              className="w-full h-full "
              src={black}
              alt="Iphone4"
            />
          </div>
          <div className="w-[280px] h-[490px]">
            <img
              className="w-full h-full "
              src={mock}
              alt="Iphone2"
            />
          </div>
        </div>
        )}
     
      </section>
    </>
  );
}


function Partner() {
  return (
    <>
      <div className=" max-w-[1480px] mx-auto w-full flex items-center justify-between     h-[460px]">
        <div className="flex flex-col items-center lg:items-start w-[70%]      justify-between lg:w-[40%]   ml-14 h-[240px]">
          <h2 className="font-manrope text-center lg:text-start lg:text-5xl text-3xl normal font-bold text-[#F3F2F2]">
            Become a parthner
          </h2>
          <p className="text-[#F3F2F2] text-center lg:text-start  lg:text-[23px] text-[10px] font-poppins font-normal">
            Risus habitant leo egestas mauris diam eget morbi tempus vulputate.
          </p>
          <button className="rounded-md text-[#4C5DF5] font-semibold bg-[#ffffffd9] w-[154px] h-[68px]">
            Join now
          </button>
        </div>
        <div className='hidden lg:block '>
          <img src={partnerLogo} className="object-contain" alt="" />
        </div>
      </div>
    </>
  );
}

function NewsLetter() {
  return (
    <section className="py-10 text-center">
    <h2 className="font-manrope  lg:text-[40px] text-[27px]      leading-8  text-black font-bold">
            Join our <span className='text-[#4C5DF5]'>newsletter</span>
          </h2>
      <p className='lg:text-2xl text-sm font-light font-grotesk text-[#1C1C1C]'>
        Will send you weekly updates for your better finance management.
      </p>

      <div className=" mt-10 space-y-4 lg:space-x-4  space-x-0  px-4">
        <input
          className="border-2 border-opacity-60  px-[35px] outline-none  border-[#979797] rounded-[14px] max-w-[511px] w-full h-[57px]"
          type="text"
          placeholder="Your email adress"
        />
       <button className="bg-[#4C5DF5]  rounded-2xl text-white text-[16px] max-w-[500px] w-full  lg:w-[152px]     h-[60px]">
              Join now
            </button>
      </div>
    </section>
  );
}
