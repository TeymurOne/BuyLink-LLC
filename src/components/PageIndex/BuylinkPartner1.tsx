// partner-icon
import { useTranslation } from 'react-i18next';
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

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import './Main.css';
import { Pagination } from 'swiper/modules';

export function BuyLinkPartner1() {
  const isMobile = window.innerWidth <= 455;

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
              {t('partnyor.0')}
              <span className="text-[#4C5DF5]"> {t('partnyor.1')}</span>

              {t('partnyor.2')}
            </h2>
            <p className="lg:text-[20px] text-start text-[15px] pb-[2em] leading-[1.7]">
              {t('partnyor.3')}
            </p>
          </div>
          <div className=" grid place-items-center max-w-[1600px] mx-auto lg:grid-cols-3 md:grid-cols-1  gap-10 ">
            <div className="flex   flex-col items-start ">
              <span className="flex items-center space-x-2 ">
                <img src={p_icon1} alt="w-[20px] h-[28px]" />

                <h2 className="font-manrope   lg:text-lg md:text-sm text-lg lg:text-start text-center       text-black font-bold">
                  {t('partnyor.4')}
                </h2>
              </span>

              <p className="font-poppins text-center pt-4 lg:pt-2 opacity-70   md:text-start   leading-[1.9] lg:text-[12px] text-[14px]   text-[#000000ad] font-medium">
                {t('partnyor.5')}
              </p>
            </div>

            <div className="flex   flex-col  items-start       ">
              <span className="flex items-center">
                <img src={p_icon2} alt="w-[20px] h-[28px]" />

                <h2 className="font-manrope lg:text-lg md:text-sm text-lg        text-black font-bold">
                  {t('partnyor.6')}
                </h2>
              </span>

              <p className="font-poppins text-start pt-4 lg:pt-2 opacity-70     leading-[1.9] lg:text-[12px] text-[14px]   text-[#000000ad] font-medium">
                {t('partnyor.7')}
              </p>
            </div>

            <div className="flex  flex-col   items-start      ">
              <span className="flex items-center">
                <img src={p_icon3} alt="w-[20px] h-[28px]" />

                <h2 className="font-manrope   lg:text-lg md:text-sm text-lg       text-black font-bold">
                  {t('partnyor.8')}
                </h2>
              </span>

              <p className="font-poppins  text-start pt-4 lg:pt-2 opacity-70    leading-[1.9] lg:text-[12px] text-[14px]   text-[#000000ad] font-medium">
                {t('partnyor.9')}
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
                <div className="  max-w-[225px] w-full pb-2  ">
                  <img
                    className="w-full h-[377px] object-contain"
                    src={language == 'Aze' ? p1aze : p1en}
                    alt="Iphone2"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="    max-w-[225px] w-full ">
                  <img
                    className="w-full h-[377px] object-contain"
                    src={language == 'Aze' ? p2aze : p2en}
                    alt="Iphone4"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" pb-2  max-w-[225px] w-full  ">
                  <img
                    className="w-full h-[377px] object-contain"
                    src={language == 'Aze' ? p3aze : p3en}
                    alt="Iphone2"
                  />
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        ) : (
          <div
            className="flex items-center pt-10   space-x-10
             justify-center "
          >
            <div className=" h-[458px]">
              <img
                className="w-full h-full object-contain"
                src={language == 'az' ? p1aze : p1en}
                alt="Iphone2"
              />
            </div>
            <div className="h-[458px]">
              <img
                className="w-full h-full object-contain"
                src={language == 'az' ? p2aze : p2en}
                alt="Iphone4"
              />
            </div>
            <div className=" h-[458px]">
              <img
                className="w-full h-full object-contain"
                src={language == 'az' ? p3aze : p3en}
                alt="Iphone2"
              />
            </div>
          </div>
        )}
      </section>
    </>
  );
}
