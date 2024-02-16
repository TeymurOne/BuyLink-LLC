import Header from './Header';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import cube from '../../images/pageLand/cube.svg';

import { Pagination } from 'swiper/modules';

import dollar from '../../images/pageLand/dollar.svg';
import money from '../../images/pageLand/money.svg';
import info from '../../images/pageLand/info.svg';

import Slider from './Slider';
import VideoSection from './VideoSection';

import partnerA from '../../images/pageLand/partnerA.svg';
import partnerB from '../../images/pageLand/partnerB.svg';
import partnerC from '../../images/pageLand/partnerC.svg';

import partner2A from '../../images/pageLand/partner2A.svg';
import partner2B from '../../images/pageLand/partner2B.svg';
import partner2C from '../../images/pageLand/partner2C.svg';

import partner3A from '../../images/pageLand/partner3A.svg';
import partner3B from '../../images/pageLand/partner3B.svg';
import partner3C from '../../images/pageLand/partner3C.svg';



import iphone15plus from '../../images/pageLand/15plus.png';
import mock from '../../images/pageLand/iphonemock.png';
import black from '../../images/pageLand/black.png';


import main from '../../images/pageLand/main.png';
import card1 from '../../images/pageLand/card1.png';
import apple from '../../images/pageLand/apple.svg';

import play from '../../images/pageLand/play.cvg.svg';

import partnerLogo from '../../images/pageLand/mask.svg';
import Accordion from './Accordion';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
export const isMobile = window.innerWidth <= 455;

const Index = () => {
  return (
    <>
      <div className="bg-white   ">
        <div className="bg-white container mx-auto lg:px-10 1536px:px-0 md:px-0 px-0    h-auto  cursor-pointer">
          <Header />
          <Main />
        </div>
      </div>

      <div className="bg-[#F3F4F6] ">
        <div className=" container mx-auto lg:px-10 1536px:px-0 md:px-0 px-0   ">
          <Slider />

          <VideoSection />

          <WalletBuylink />
          <BuyLinkPartner />
        </div>
      </div>

      <div className="bg-white  py-20">
        <div className="container mx-auto lg:px-10 1536px:px-0 md:px-0 px-0  ">
          <BuyLinkPartner2 />
        </div>
      </div>
      <div className="bg-[#F3F4F6] py-20 ">
        <div className="container mx-auto lg:px-10 1536px:px-0 md:px-0 px-0  ">
          <BuyLinkPartner3 />
        </div>
      </div>

      <div className=" bg-[#4C5DF5]    ">
        <div className="container  mx-auto lg:px-10 1536px:px-0 md:px-0 px-0  ">
          <Partner />
        </div>
      </div>
      <NewsLetter />
      <div className=" bg-[#F3F4F6] py-10 " id='faq'>
        <div className=" py-20 container mx-auto lg:px-10 1536px:px-0 md:px-0 px-0   ">
          <Accordion />
        </div>
      </div>
      <div className="bg-[#000000DE] w-full  py-12">
        <Footer />
      </div>
    </>
  );
};

export default Index;

function Main() {
  const { t } = useTranslation();

  return (
    <>
      <div className=" container mx-auto gap-10 space-x-4  py-5 lg:px-2 md:pl-6 px-2   flex md:flex-row flex-col items-center ">
        <div className="max-w-[650px] md:text-justify text-center  w-full flex flex-col  justify-between">
          <h2 className=" font-manrope  xl:text-[2.40em] lg:text-[1.775em] text-[32px] 992px:text-[40px]  whitespace-wrap  leading-10 font-bold text-black-2">
            <span className="text-[#4C5DF5]">{t("index-main.0")}</span> {t("index-main.1")}
          </h2>
          <p className="lg:text-[24px] text-[20px] py-4">
          {t("index-main.2")}
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
        <div>
          <img
            src={main}
            className=" border rounded-xl border-[#979797] border-opacity-60  object-contain"
            alt="Main"
          />
        </div>
      </div>
    </>
  );
}

function WalletBuylink() {
  const {t}=useTranslation()
  return (
    <>
       <section className="  py-10">
        <div className=" grid  lg:grid-cols-2 gap-8 lg:px-0 md:px-0 px-2  md:grid-cols-1    ">
          <div className="    mx-auto  ">
            <img
              className="     rounded-xl "
              src={card1}
              alt="Buynet wallet img"
            />
          </div>

          <div className="   max-w-[698px] mx-auto  w-full   text-black  ">
            <div className="lg:text-start  text-center">
              <h2 className="font-manrope  xl:text-[2.20em] lg:text-[1.775em] text-[32px] 992px:text-[40px]  whitespace-wrap  leading-10 font-bold text-black-2">
                {t("index-wallet.0")} {t("index-wallet.1")}
                <span className="text-[#4C5DF5]">  {t("index-wallet.2")}</span>
              </h2>

              <p className="lg:text-[20px] text-[14px] lg:leading-6 leading-4  font-medium py-4 normal font-poppins">
              {t("index-wallet.3")}
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
                <p>{t("index-wallet.4")}</p>
              </div>
              <div className="flex items-center space-x-4">
                <img
                  className="w-[37px] h-[37px]"
                  src={money}
                  alt="Group 155"
                />
                <p>{t("index-wallet.5")}</p>
              </div>
              <div className="flex items-center space-x-4">
                <img className="w-[37px] h-[37px]" src={info} alt="Group 155" />
                <p>{t("index-wallet.6")} </p>
              </div>
              <div className="flex items-center space-x-4">
                <img
                  className="w-[37px] h-[37px]"
                  src={dollar}
                  alt="Group 155"
                />
                <p>{t("index-wallet.7")}</p>
              </div>
            </div>
          </div>
        </div>
      </section> 

  
    </>
  );
}

function BuyLinkPartner() {
  const {t}=useTranslation()
  return (
    <>
      <section className=" lg:px-0 px-1" id='features'>
        <div
          className="flex flex-col lg:items-center  items-stretch text-center"
          id="buylinkpartner"
        >
          <div className="space-y-4 ">
            <h2 className="font-manrope  lg:text-[40px] text-[30px]   leading-0    sm:leading-8  text-black font-bold">
            {t("index-partnyor.0")}
              <span className="text-[#4C5DF5]"> {t("index-partnyor.1")} {t("index-partnyor.2")}</span>
            </h2>
            <p className="lg:text-[20px] text-[15px] pb-[2em] leading-[1.7]">
            {t("index-partnyor.3")}
            </p>
          </div>
          <div className="w-[83%] md:place-items-start   place-items-center place-content-start grid lg:grid-cols-3 500px:grid-cols-2 md:grid-cols-2 grid-cols-1">
            <div className="pt-4 w-full max-w-[280px]">
              <div className="flex items-center  space-x-6 lg:space-x-2 ">
                <img src={cube} alt="w-[20px] h-[28px]" />

                <h2 className="font-manrope   lg:text-[17px]  500px:text-[11px]   md:text-[14px]  992px:text-[16px]  text-[20px]       text-black font-bold">
                {t("index-partnyor.4")}
                </h2>
              </div>

              <p className="font-poppins pt-4 lg:pt-2 opacity-70   md:text-start  text-center leading-[1.9] lg:text-[12px] text-[14px]   text-[#000000ad] font-medium">
              {t("index-partnyor.5")}
              </p>
            </div>
            <div className="pt-4  w-full max-w-[280px]">
              <div className="flex items-center   space-x-2 ">
                <img src={cube} alt="w-[20px] h-[28px]" />

                <h2 className="font-manrope text-[20px]   lg:text-[17px] 500px:text-[11px]    md:text-[14px]  992px:text-[16px]        text-black font-bold">
                {t("index-partnyor.6")}
                </h2>
              </div>

              <p className="font-poppins pt-4 lg:pt-2 opacity-70   md:text-start  text-center leading-[1.9] lg:text-[12px] text-[14px]   text-[#000000ad] font-medium">
              {t("index-partnyor.7")}
              </p>
            </div>
            <div className="pt-4  w-full max-w-[280px]">
              <div className="flex items-center   space-x-2 ">
                <img src={cube} alt="w-[20px] h-[28px]" />

                <h2 className="font-manrope  text-[20px]  500px:text-[11px]   lg:text-[17px]  md:text-[14px]  992px:text-[16px]      text-black font-bold">
                {t("index-partnyor.8")}
                </h2>
              </div>

              <p className="font-poppins pt-4 pb-6  lg:pt-2 opacity-70   md:text-start  text-center leading-[1.9] lg:text-[12px] text-[14px]   text-[#000000ad] font-medium">
              {t("index-partnyor.9")}
              </p>
            </div>
          </div>
        </div>
        {isMobile ? (
          <Swiper
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <div className="flex items-center   space-x-4 justify-center ">
              <SwiperSlide>
                <div className=" max-w-[225px] w-full pb-2  ">
                  <img
                    className="w-full h-full object-contain"
                    src={partnerA}
                    alt="Iphone2"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" pb-2   max-w-[225px] w-full ">
                  <img
                    className="w-full h-full object-contain"
                    src={partnerB}
                    alt="Iphone4"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" pb-2  max-w-[225px] w-full  ">
                  <img
                    className="w-full h-full object-contain"
                    src={partnerC}
                    alt="Iphone2"
                  />
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        ) : (
          <div className="flex items-center pt-10   space-x-4 justify-center ">
            <div className="w-[300px] h-[490px]">
              <img
                className="w-full h-full object-contain"
                src={partnerA}
                alt="Iphone2"
              />
            </div>
            <div className="w-[280px] h-[490px]">
              <img
                className="w-full h-full object-contain"
                src={partnerB}
                alt="Iphone4"
              />
            </div>
            <div className="w-[280px] h-[490px]">
              <img
                className="w-full h-full object-contain"
                src={partnerC}
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
  const {t}=useTranslation()
  return (
    <>
      <section>
        <div
          className="flex flex-col lg:items-center  items-stretch text-center"
          id="buylinkpartner"
        >
          <div className="space-y-4 ">
            <h2 className="font-manrope  lg:text-[40px] text-[30px]   leading-0    sm:leading-8  text-black font-bold">
            {t("index-partnyor2.0")}
              <span className="text-[#4C5DF5]"> {t("index-partnyor2.1")}</span>
            </h2>
            <p className="lg:text-[20px] text-[15px] pb-[2em] leading-[1.7]">
            {t("index-partnyor2.2")}
            </p>
          </div>
          <div className="w-[83%] grid lg:grid-cols-3 500px:grid-cols-2 md:place-items-start   place-items-center    md:grid-cols-2 grid-cols-1">
            <div className="pt-4 w-full max-w-[280px]">
              <div className="flex items-center  space-x-6 lg:space-x-2 ">
                <img src={cube} alt="w-[20px] h-[28px]" />

                <h2 className="font-manrope   lg:text-[17px]  500px:text-[11px]   md:text-[14px]  992px:text-[16px]  text-[20px]       text-black font-bold">
                {t("index-partnyor2.3")}
                </h2>
              </div>

              <p className="font-poppins pt-4 lg:pt-2 opacity-70   md:text-start  text-center leading-[1.9] lg:text-[12px] text-[14px]   text-[#000000ad] font-medium">
              {t("index-partnyor2.4")}
              </p>
            </div>
            <div className="pt-4  w-full max-w-[340px]">
              <div className="flex items-center   space-x-2 ">
                <img src={cube} alt="w-[20px] h-[28px]" />

                <h2 className="font-manrope text-[20px]   lg:text-[17px] 500px:text-[11px]    md:text-[14px]  992px:text-[16px]        text-black font-bold">
                {t("index-partnyor2.5")}
                </h2>
              </div>

              <p className="font-poppins pt-4 lg:pt-2 opacity-70   md:text-start  text-center leading-[1.9] lg:text-[12px] text-[14px]   text-[#000000ad] font-medium">
              {t("index-partnyor2.6")}
              </p>
            </div>
            <div className="pt-4  w-full max-w-[340px]">
              <div className="flex items-center   space-x-2 ">
                <img src={cube} alt="w-[20px] h-[28px]" />

                <h2 className="font-manrope  text-[20px]  500px:text-[11px]   lg:text-[17px]  md:text-[14px]  992px:text-[16px]      text-black font-bold">
                  {t("index-partnyor2.7")}
                </h2>
              </div>

              <p className="font-poppins pt-4 pb-6  lg:pt-2 opacity-70   md:text-start  text-center leading-[1.9] lg:text-[12px] text-[14px]   text-[#000000ad] font-medium">
              {t("index-partnyor2.8")}
              </p>
            </div>
          </div>
        </div>
        {isMobile ? (
          <Swiper
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <div className="flex items-center  space-x-4 justify-center ">
              <SwiperSlide>
                <div className="max-w-[225px] h-[390px] w-full ">
                  <img
                    className="w-full h-full object-contain"
                    src={partner2A}
                    alt="Iphone2"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="max-w-[225px] h-[390px] w-full  ">
                  <img
                    className="w-full h-full object-contain"
                    src={partner2B}
                    alt="Iphone4"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="max-w-[225px] h-[390px] w-full  ">
                  <img
                    className="w-full h-full object-contain"
                    src={partner2C}
                    alt="Iphone2"
                  />
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        ) : (
          <div className="flex items-center pt-10  space-x-4 justify-center ">
            <div className="w-[300px] h-[490px]">
              <img
                className="w-full h-full "
                src={partner2A}
                alt="Iphone2"
              />
            </div>
            <div className="w-[300px] h-[490px]">
              <img
                className="w-full h-full "
                src={partner2B}
                alt="Iphone4"
              />
            </div>
            <div className="w-[300px] h-[490px]">
              <img
                className="w-full h-full"
                src={partner2C}
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
  const {t}=useTranslation()
  return (
    <>
      <section id='how-use'>
        <div
          className="flex flex-col lg:items-center  items-stretch text-center"
          id="buylinkpartner"
        >
          <div className="space-y-4 ">
            <h2 className="font-manrope  lg:text-[40px] text-[30px]   leading-0    sm:leading-8  text-black font-bold">
            {t("index-partnyor3.0")}
              <span className="text-[#4C5DF5]"> {t("index-partnyor3.1")}</span>
            </h2>
            <p className="lg:text-[20px] text-[15px] pb-[2em] leading-[1.7]">
            {t("index-partnyor3.2")}
            </p>
          </div>
          <div className="w-[90%]  md:place-items-start   place-items-center grid lg:grid-cols-3 500px:grid-cols-2 md:grid-cols-2 grid-cols-1">
            <div className="pt-4 w-full max-w-[340px]">
              <div className="flex items-center   lg:space-x-2 ">
                <img src={cube} alt="w-[20px] h-[28px]" />

                <h2 className="font-manrope   lg:text-[17px] lg:text-start text-center md:text-start  500px:text-[11px]   md:text-[14px]  992px:text-[16px]  text-[20px]       text-black font-bold">
                {t("index-partnyor3.3")}
                </h2>
              </div>

              <p className="font-poppins pt-4 lg:pt-2 opacity-70   md:text-start  text-center leading-[1.9] lg:text-[12px] text-[14px]   text-[#000000ad] font-medium">
              {t("index-partnyor3.4")}
              </p>
            </div>
            <div className="pt-4  w-full max-w-[280px]">
              <div className="flex items-center   space-x-2 ">
                <img src={cube} alt="w-[20px] h-[28px]" />

                <h2 className="font-manrope text-[20px]   lg:text-[17px] 500px:text-[11px]    md:text-[14px]  992px:text-[16px]        text-black font-bold">
                {t("index-partnyor3.5")}
                </h2>
              </div>

              <p className="font-poppins pt-4 lg:pt-2 opacity-70   md:text-start  text-center leading-[1.9] lg:text-[12px] text-[14px]   text-[#000000ad] font-medium">
              {t("index-partnyor3.6")}
              </p>
            </div>
            <div className="pt-4  w-full max-w-[320px]">
              <div className="flex items-center   space-x-2 ">
                <img src={cube} alt="w-[20px] h-[28px]" />

                <h2 className="font-manrope  text-[20px]  500px:text-[11px]   lg:text-[17px]  md:text-[14px]  992px:text-[16px]      text-black font-bold">
                {t("index-partnyor3.7")}
                </h2>
              </div>

              <p className="font-poppins pt-4 pb-6  lg:pt-2 opacity-70   md:text-start  text-center leading-[1.9] lg:text-[12px] text-[14px]   text-[#000000ad] font-medium">
              {t("index-partnyor3.8")}
              </p>
            </div>
          </div>
        </div>
        {isMobile ? (
          <Swiper
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <div className="flex items-center  space-x-4 justify-center ">
              <SwiperSlide>
                <div className="max-w-[225px] h-[590px] w-full ">
                  <img
                    className="w-full h-full object-contain"
                    src={partner3A}
                    alt="Iphone2"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="max-w-[225px] h-[590px] w-full  ">
                  <img
                    className="w-full h-full object-contain"
                    src={partner3B}
                    alt="Iphone4"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="max-w-[225px] h-[590px] w-full  ">
                  <img
                    className="w-full h-full object-contain"
                    src={partner3C}
                    alt="Iphone2"
                  />
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        ) : (
          <div className="flex items-center pt-10  space-x-4 justify-center ">
            <div className="w-[290px] h-[550px]">
              <img
                className="w-full h-full "
                src={partner3A}
                alt="Iphone2"
              />
            </div>
            <div className="w-[290px] h-[550px]">
              <img
                className="w-full h-full "
                src={partner3B}
                alt="Iphone4"
              />
            </div>
            <div className="w-[290px] h-[550px]">
              <img className="w-full h-full " src={partner3C} alt="Iphone2" />
            </div>
          </div>
        )}
      </section>
    </>
  );
}

function Partner() {
  const {t}=useTranslation()
  return (
    <>
      <div className=" w-full flex  ml-2   items-center justify-between    ">
        <div className="flex flex-col md:items-start justify-center md:justify-normal  items-center md:space-y-4  space-y-2 w-[636px] h-[267px] ">
          <h2 className="font-manrope text-center lg:text-start lg:text-4xl text-3xl normal font-bold text-[#F3F2F2]">
          {t("partner.0")}
          </h2>
          <p className="text-[#F3F2F2] text-center lg:text-start md:leading-6 leading-4  lg:text-[20px] text-[10px] font-poppins font-normal">
          {t("partner.1")}
          </p>
          <button className="rounded-md text-[#4C5DF5] font-semibold bg-[#ffffffd9] w-[154px] h-[68px]">
          {t("partner.2")}
          </button>
        </div>
        <div className="hidden lg:block ">
          <img src={partnerLogo} className="object-contain h-[400px]" alt="" />
        </div>
      </div>
    </>
  );
}

function NewsLetter() {
  const {t}=useTranslation()
  return (
    <section className="py-10 text-center lg:px-0 px-2">
      <h2 className="font-manrope  lg:text-[40px] text-[27px]      leading-8  text-black font-bold">
      {t("letters.0")} <span className="text-[#4C5DF5]">{t("letters.1")}</span>
      </h2>
      <p className="lg:text-2xl text-sm font-light font-grotesk text-[#1C1C1C]">
      {t("letters.2")}
      </p>

      <div className=" mt-10 space-y-4 lg:space-x-4  space-x-0  px-4">
        <input
          className="border-2 border-opacity-60  px-[35px] outline-none  border-[#979797] rounded-[14px] max-w-[511px] w-full h-[57px]"
          type="text"
          placeholder="Your email adress"
        />
        <button className="bg-[#4C5DF5]  rounded-2xl text-white text-[16px] max-w-[500px] w-full  lg:w-[152px]     h-[60px]">
        {t("letters.3")}
        </button>
      </div>
    </section>
  );
}
