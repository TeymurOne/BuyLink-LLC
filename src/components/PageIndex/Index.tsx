import Header from './Header';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import './Main.css';
import { Pagination } from 'swiper/modules';
// main

import apple from '../../images/Pages-index/head-main/apple-icon.svg';
import play from '../../images/Pages-index/head-main/store-icon.svg';
import main from '../../images/Pages-index/head-main/main.svg';

//

// wallet
import card1 from '../../images/Pages-index/wallet/card.png';
import icon1 from '../../images/Pages-index/wallet/icon-1.svg';
import icon2 from '../../images/Pages-index/wallet/icon-2.svg';
import icon3 from '../../images/Pages-index/wallet/icon-3.svg';
import icon4 from '../../images/Pages-index/wallet/icon-4.svg';
///////////////////////////////////////

// partner-icon
import p_icon1 from '../../images/Pages-index/partner/icon-1.svg';
import p_icon2 from '../../images/Pages-index/partner/icon-2.svg';
import p_icon3 from '../../images/Pages-index/partner/icon-3.svg';

// partner-img
import p1aze from '../../images/Pages-index/partner/p1az.png';
import p1en from '../../images/Pages-index/partner/p1en.png';

import p2aze from '../../images/Pages-index/partner/p2az.png';
import p2en from '../../images/Pages-index/partner/p2en.png';

import p3aze from '../../images/Pages-index/partner/p3az.png';
import p3en from '../../images/Pages-index/partner/p3en.png';

// steps
import s_icon1 from '../../images/Pages-index/steps/icon-1.svg';
import s_icon2 from '../../images/Pages-index/steps/icon-1.svg';
import s_icon3 from '../../images/Pages-index/steps/icon-1.svg';

import s1az from '../../images/Pages-index/steps/s1az.png';
import s1en from '../../images/Pages-index/steps/s1en.png';
import s2az from '../../images/Pages-index/steps/s2az.png';
import s2en from '../../images/Pages-index/steps/s2en.png';
import s3az from '../../images/Pages-index/steps/s3az.png';
import s3en from '../../images/Pages-index/steps/s3en.png';



// disocunt
import d_icon1 from '../../images/Pages-index/disocunt/icon-1.svg';
import d_icon2 from '../../images/Pages-index/disocunt/icon-1.svg';
import d_icon3 from '../../images/Pages-index/disocunt/icon-1.svg';

import d1az from '../../images/Pages-index/disocunt/d1az.png';
import d1en from '../../images/Pages-index/disocunt/d1en.png';
import d2az from '../../images/Pages-index/disocunt/d2az.png';
import d2en from '../../images/Pages-index/disocunt/d2en.png';
import d3az from '../../images/Pages-index/disocunt/d3az.png';
import d3en from '../../images/Pages-index/disocunt/d3en.png';



import partner_logo from '../../images/Pages-index/head-main/partner-logo.svg';

import Slider from './Slider';
import VideoSection from './VideoSection';

import Accordion from './Accordion';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
export const isMobile = window.innerWidth <= 455;

const Index = () => {
  return (
    <>
      <div className="bg-white   ">
        <div className="bg-white custom-con px-6 lg:px-4 md:px-0   h-auto  cursor-default">
          <Header />
          <Main />
        </div>
      </div>

      <div className="bg-[#F3F4F6] ">
        <div className=" custom-con   ">
          <Slider />

          <VideoSection />

          <WalletBuylink />
          <BuyLinkPartner />
        </div>
      </div>

      <div className="bg-white  py-20">
        <div className="custom-con  "> <BuyLinkPartner2 /> </div>
      </div>
      <div className="bg-[#F3F4F6] py-20 ">
        <div className="custom-con  "> <BuyLinkPartner3 /> </div>
      </div>

      <div className=" bg-[#4C5DF5]    ">
        <div className="custom-con  ">
          <Partner />
        </div>
      </div>
      <NewsLetter />
      <div className=" bg-[#F3F4F6] py-10 " id="faq">
        <div className=" py-20 custom-con   ">
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
      <div className="  gap-10 space-x-4  py-5 lg:px-2 md:pl-6    flex md:flex-row flex-col items-center ">
        <div className="max-w-[650px] md:text-justify text-center  w-full flex flex-col  justify-between">
          <h2 className=" font-manrope  xl:text-[2.40em] lg:text-[1.775em] text-[32px] 992px:text-[40px]  whitespace-wrap  leading-10 font-bold text-black-2">
            <span className="text-[#4C5DF5]">{t('index_main.0')}</span>{' '}
            {t('index_main.1')}
          </h2>
          <p className="lg:text-[24px] text-[20px] py-4">{t('index_main.2')}</p>

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
  const { t } = useTranslation();
  return (
    <>
      <section className="  py-10">
        <div className=" grid  lg:grid-cols-2 gap-20 lg:px-0 md:px-0 px-2  md:grid-cols-1    ">
          <div className="    mx-auto max-w-[460px]  ">
            <img
              className="     rounded-xl "
              src={card1}
              alt="Buynet wallet img"
            />
          </div>

          <div className="   max-w-[698px] mx-auto  w-full   text-black  ">
            <div className="lg:text-start  text-center">
              <h2 className="font-manrope  xl:text-[2.20em] lg:text-[1.775em] text-[32px] 992px:text-[40px]  whitespace-wrap  leading-10 font-bold text-black-2">
                {t('index_wallet.0')}- {t('index_wallet.1')}
                <span className="text-[#4C5DF5]"> {t('index_wallet.2')}</span>
              </h2>

              <p className="lg:text-[20px] text-[14px] lg:leading-6 leading-4  font-medium py-4 normal font-poppins">
                {t('index_wallet.3')}
              </p>
            </div>
            <div
              className=" grid lg:grid-cols-2 2xsm:mx-auto w-full lg:mx-0   lg:w-full sm:grid-cols-2 grid-cols-1 place-content-center   gap-y-2     font-manrope normal font-medium text-[#000000ad]"
              id="payments"
            >
              <div className="flex space-x-4   items-center w-full max-w-[300px]  ">
                <img
                  className="w-[37px] h-[37px] "
                  src={icon1}
                  alt="Group 155"
                />
                <p>{t('index_wallet.4')}</p>
              </div>
              <div className="flex items-center space-x-4">
                <img
                  className="w-[37px] h-[37px]"
                  src={icon2}
                  alt="Group 155"
                />
                <p>{t('index_wallet.5')}</p>
              </div>
              <div className="flex items-center space-x-4">
                <img
                  className="w-[37px] h-[37px]"
                  src={icon3}
                  alt="Group 155"
                />
                <p>{t('index_wallet.6')} </p>
              </div>
              <div className="flex items-center space-x-4">
                <img
                  className="w-[37px] h-[37px]"
                  src={icon4}
                  alt="Group 155"
                />
                <p>{t('index_wallet.7')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function BuyLinkPartner() {
  const { t } = useTranslation();
  const [language, setLanguage] = useState<any>('');

  useEffect(() => {
    setLanguage(localStorage.getItem('lng'));
  }, [localStorage.getItem('lng'), language]);

  return (
    <>
      <section className=" lg:px-0 px-1" id="features">
        <div
          className="flex flex-col lg:items-center  items-stretch text-center"
          id="buylinkpartner"
        >
          <div className="space-y-4 ">
            <h2 className="font-manrope  lg:text-[40px] text-[30px]   leading-0    sm:leading-8  text-black font-bold">
              {t('index_partnyor.0')}
              <span className="text-[#4C5DF5]">
                {' '}
                {t('index_partnyor.1')} {t('index_partnyor.2')}
              </span>
            </h2>
            <p className="lg:text-[20px] text-[15px] pb-[2em] leading-[1.7]">
              {t('index_partnyor.3')}
            </p>
          </div>
          <div className="w-[83%] md:place-items-start   place-items-center place-content-start grid lg:grid-cols-3 500px:grid-cols-2 md:grid-cols-2 grid-cols-1">
            <div className="pt-4 w-full max-w-[280px]">
              <div className="flex items-center  space-x-6 lg:space-x-2 ">
                <img src={p_icon1} alt="w-[20px] h-[28px]" />

                <h2 className="font-manrope   lg:text-[17px]  500px:text-[11px]   md:text-[14px]  992px:text-[16px]  text-[20px]       text-black font-bold">
                  {t('index_partnyor.4')}
                </h2>
              </div>

              <p className="font-poppins pt-4 lg:pt-2 opacity-70   md:text-start  text-center leading-[1.9] lg:text-[12px] text-[14px]   text-[#000000ad] font-medium">
                {t('index_partnyor.5')}
              </p>
            </div>
            <div className="pt-4  w-full max-w-[280px]">
              <div className="flex items-center   space-x-2 ">
                <img src={p_icon2} alt="w-[20px] h-[28px]" />

                <h2 className="font-manrope text-[20px]   lg:text-[17px] 500px:text-[11px]    md:text-[14px]  992px:text-[16px]        text-black font-bold">
                  {t('index_partnyor.6')}
                </h2>
              </div>

              <p className="font-poppins pt-4 lg:pt-2 opacity-70   md:text-start  text-center leading-[1.9] lg:text-[12px] text-[14px]   text-[#000000ad] font-medium">
                {t('index_partnyor.7')}
              </p>
            </div>
            <div className="pt-4  w-full max-w-[280px]">
              <div className="flex items-center   space-x-2 ">
                <img src={p_icon3} alt="w-[20px] h-[28px]" />

                <h2 className="font-manrope  text-[20px]  500px:text-[11px]   lg:text-[17px]  md:text-[14px]  992px:text-[16px]      text-black font-bold">
                  {t('index_partnyor.8')}
                </h2>
              </div>

              <p className="font-poppins pt-4 pb-6  lg:pt-2 opacity-70   md:text-start  text-center leading-[1.9] lg:text-[12px] text-[14px]   text-[#000000ad] font-medium">
                {t('index_partnyor.9')}
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
                    src={language == 'Aze' ? p1aze : p1en}
                    alt="Iphone2"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" pb-2   max-w-[225px] w-full ">
                  <img
                    className="w-full h-full object-contain"
                    src={language == 'Aze' ? p2aze : p2en}
                    alt="Iphone4"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" pb-2  max-w-[225px] w-full  ">
                  <img
                    className="w-full h-full object-contain"
                    src={language == 'Aze' ? p3aze : p3en}
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
                src={language == 'Aze' ? p1aze : p1en}
                alt="Iphone2"
              />
            </div>
            <div className="w-[280px] h-[490px]">
              <img
                className="w-full h-full object-contain"
                src={language == 'Aze' ? p2aze : p2en}
                alt="Iphone4"
              />
            </div>
            <div className="w-[280px] h-[490px]">
              <img
                className="w-full h-full object-contain"
                src={language == 'Aze' ? p3aze : p3en}
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
  const { t } = useTranslation();
  const [language, setLanguage] = useState<any>('');

  useEffect(() => {
    setLanguage(localStorage.getItem('lng'));
  }, [localStorage.getItem('lng'), language]);
  return (
    <>
      <section>
        <div
          className="flex flex-col lg:items-center  items-stretch text-center"
          id="buylinkpartner"
        >
          <div className="space-y-4 ">
            <h2 className="font-manrope  lg:text-[40px] text-[30px]   leading-0    sm:leading-8  text-black font-bold">
              {t('index_partnyor2.0')}
              <span className="text-[#4C5DF5]"> {t('index_partnyor2.1')}</span>
            </h2>
            <p className="lg:text-[20px] text-[15px] pb-[2em] leading-[1.7]">
              {t('index_partnyor2.2')}
            </p>
          </div>
          <div className="w-[83%] grid lg:grid-cols-3 500px:grid-cols-2 md:place-items-start   place-items-center    md:grid-cols-2 grid-cols-1">
            <div className="pt-4 w-full max-w-[280px]">
              <div className="flex items-center  space-x-6 lg:space-x-2 ">
                <img src={s_icon1} alt="w-[20px] h-[28px]" />

                <h2 className="font-manrope   lg:text-[17px]  500px:text-[11px]   md:text-[14px]  992px:text-[16px]  text-[20px]       text-black font-bold">
                  {t('index_partnyor2.3')}
                </h2>
              </div>

              <p className="font-poppins pt-4 lg:pt-2 opacity-70   md:text-start  text-center leading-[1.9] lg:text-[12px] text-[14px]   text-[#000000ad] font-medium">
                {t('index_partnyor2.4')}
              </p>
            </div>
            <div className="pt-4  w-full max-w-[340px]">
              <div className="flex items-center   space-x-2 ">
                <img src={s_icon2} alt="w-[20px] h-[28px]" />

                <h2 className="font-manrope text-[20px]   lg:text-[17px] 500px:text-[11px]    md:text-[14px]  992px:text-[16px]        text-black font-bold">
                  {t('index_partnyor2.5')}
                </h2>
              </div>

              <p className="font-poppins pt-4 lg:pt-2 opacity-70   md:text-start  text-center leading-[1.9] lg:text-[12px] text-[14px]   text-[#000000ad] font-medium">
                {t('index_partnyor2.6')}
              </p>
            </div>
            <div className="pt-4  w-full max-w-[340px]">
              <div className="flex items-center   space-x-2 ">
                <img src={s_icon3} alt="w-[20px] h-[28px]" />

                <h2 className="font-manrope  text-[20px]  500px:text-[11px]   lg:text-[17px]  md:text-[14px]  992px:text-[16px]      text-black font-bold">
                  {t('index_partnyor2.7')}
                </h2>
              </div>

              <p className="font-poppins pt-4 pb-6  lg:pt-2 opacity-70   md:text-start  text-center leading-[1.9] lg:text-[12px] text-[14px]   text-[#000000ad] font-medium">
                {t('index_partnyor2.8')}
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
                    src={language == 'Aze' ? s1az : s1en}

                    alt="Iphone2"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="max-w-[225px] h-[390px] w-full  ">
                  <img
                    className="w-full h-full object-contain"
                    src={language == 'Aze' ? s2az : s2en}

                    alt="Iphone4"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="max-w-[225px] h-[390px] w-full  ">
                  <img
                    className="w-full h-full object-contain"
                    src={language == 'Aze' ? s3az : s3en}

                    alt="Iphone2"
                  />
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        ) : (
          <div className="flex items-center pt-10  space-x-4 justify-center ">
            <div className="w-[300px] h-[490px]">
              <img className="w-full h-full "   src={language == 'Aze' ? s1az : s1en} alt="Iphone2" />
            </div>
            <div className="w-[300px] h-[490px]">
              <img className="w-full h-full " src={language == 'Aze' ? s2az : s2en} alt="Iphone4" />
            </div>
            <div className="w-[300px] h-[490px]">
              <img className="w-full h-full" src={language == 'Aze' ? s3az : s3en} alt="Iphone2" />
            </div>
          </div>
        )}
      </section>
    </>
  );
}
function BuyLinkPartner3() {
  const { t } = useTranslation();
  const [language, setLanguage] = useState<any>('');

  useEffect(() => {
    setLanguage(localStorage.getItem('lng'));
  }, [localStorage.getItem('lng'), language]);
  return (
    <>
      <section id="how-use">
        <div
          className="flex flex-col lg:items-center  items-stretch text-center"
          id="buylinkpartner"
        >
          <div className="space-y-4 ">
            <h2 className="font-manrope  lg:text-[40px] text-[30px]   leading-0    sm:leading-8  text-black font-bold">
              {t('index_partnyor3.1')}
              <span className="text-[#4C5DF5]"> {t('index_partnyor3.0')} </span>
            </h2>
            <p className="lg:text-[20px] text-[15px] pb-[2em] leading-[1.7]">
              {t('index_partnyor3.2')}
            </p>
          </div>
          <div className="w-[90%]  md:place-items-start   place-items-center grid lg:grid-cols-3 500px:grid-cols-2 md:grid-cols-2 grid-cols-1">
            <div className="pt-4 w-full max-w-[340px]">
              <div className="flex items-center   lg:space-x-2 ">
                <img src={d_icon1} alt="w-[20px] h-[28px]" />

                <h2 className="font-manrope   lg:text-[17px] lg:text-start text-center md:text-start  500px:text-[11px]   md:text-[14px]  992px:text-[16px]  text-[20px]       text-black font-bold">
                  {t('index_partnyor3.3')}
                </h2>
              </div>

              <p className="font-poppins pt-4 lg:pt-2 opacity-70   md:text-start  text-center leading-[1.9] lg:text-[12px] text-[14px]   text-[#000000ad] font-medium">
                {t('index_partnyor3.4')}
              </p>
            </div>
            <div className="pt-4  w-full max-w-[280px]">
              <div className="flex items-center   space-x-2 ">
                <img src={d_icon2} alt="w-[20px] h-[28px]" />

                <h2 className="font-manrope text-[20px]   lg:text-[17px] 500px:text-[11px]    md:text-[14px]  992px:text-[16px]        text-black font-bold">
                  {t('index_partnyor3.5')}
                </h2>
              </div>

              <p className="font-poppins pt-4 lg:pt-2 opacity-70   md:text-start  text-center leading-[1.9] lg:text-[12px] text-[14px]   text-[#000000ad] font-medium">
                {t('index_partnyor3.6')}
              </p>
            </div>
            <div className="pt-4  w-full max-w-[320px]">
              <div className="flex items-center   space-x-2 ">
                <img src={d_icon3} alt="w-[20px] h-[28px]" />

                <h2 className="font-manrope  text-[20px]  500px:text-[11px]   lg:text-[17px]  md:text-[14px]  992px:text-[16px]      text-black font-bold">
                  {t('index_partnyor3.7')}
                </h2>
              </div>

              <p className="font-poppins pt-4 pb-6  lg:pt-2 opacity-70   md:text-start  text-center leading-[1.9] lg:text-[12px] text-[14px]   text-[#000000ad] font-medium">
                {t('index_partnyor3.8')}
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
                    src={language == 'Aze' ? d1az : d1en}
                    alt="Iphone2"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="max-w-[225px] h-[590px] w-full  ">
                  <img
                    className="w-full h-full object-contain"
                    src={language == 'Aze' ? d2az : d2en}
                    alt="Iphone4"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="max-w-[225px] h-[590px] w-full  ">
                  <img
                    className="w-full h-full object-contain"
                    src={language == 'Aze' ? d3az : d3en}
                    alt="Iphone2"
                  />
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        ) : (
          <div className="flex items-center pt-10  space-x-4 justify-center ">
            <div className="w-[290px] h-[550px]">
              <img className="w-full h-full " src={language == 'Aze' ? d1az : d1en} alt="Iphone2" />
            </div>
            <div className="w-[290px] h-[550px]">
              <img className="w-full h-full " src={language == 'Aze' ? d2az : d2en} alt="Iphone4" />
            </div>
            <div className="w-[290px] h-[550px]">
              <img className="w-full h-full " src={language == 'Aze' ? d3az : d3en} alt="Iphone2" />
            </div>
          </div>
        )}
      </section>
    </>
  );
}

function Partner() {
  const { t } = useTranslation();
  return (
    <>
      <div className=" w-full flex  ml-2   items-center justify-between    ">
        <div className="flex flex-col md:items-start justify-center md:justify-normal  items-center md:space-y-4  space-y-2 w-[636px] h-[267px] ">
          <h2 className="font-manrope text-center lg:text-start lg:text-4xl text-3xl normal font-bold text-[#F3F2F2]">
            {t('partner.0')}
          </h2>
          <p className="text-[#F3F2F2] text-center lg:text-start md:leading-6 leading-4  lg:text-[20px] text-[10px] font-poppins font-normal">
            {t('partner.1')}
          </p>
          <button className="rounded-md text-[#4C5DF5] font-semibold bg-[#ffffffd9] w-[154px] h-[68px]">
            {t('partner.2')}
          </button>
        </div>
        <div className="hidden lg:block ">
          <img src={partner_logo} className="object-contain h-[400px]" alt="" />
        </div>
      </div>
    </>
  );
}

function NewsLetter() {
  const { t } = useTranslation();
  return (
    <section className="py-10 text-center lg:px-0 px-2">
      <h2 className="font-manrope  lg:text-[40px] text-[27px]      leading-8  text-black font-bold">
        {t('letters.0')}{' '}
        <span className="text-[#4C5DF5]">{t('letters.1')}</span>
      </h2>
      <p className="lg:text-2xl text-sm font-light font-grotesk text-[#1C1C1C]">
        {t('letters.2')}
      </p>

      <div className=" mt-10 space-y-4 lg:space-x-4  space-x-0  px-4">
        <input
          className="border-2 border-opacity-60  px-[35px] outline-none  border-[#979797] rounded-[14px] max-w-[511px] w-full h-[57px]"
          type="text"
          placeholder="Your email adress"
        />
        <button className="bg-[#4C5DF5]  rounded-2xl text-white text-[16px] max-w-[500px] w-full  lg:w-[152px]     h-[60px]">
          {t('letters.3')}
        </button>
      </div>
    </section>
  );
}
