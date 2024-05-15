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
  const isMobile = window.innerWidth <= 600;

  const { t } = useTranslation();
  const [language, setLanguage] = useState<string | null>('');


  useEffect(() => {
    if (localStorage.getItem("lng")) {
      setLanguage(localStorage.getItem('lng'));

    }
  }, [localStorage.getItem('lng'), language]);

  return (
    <>
      <section className=" lg:pt-20 lg:py-30 md:py-10 py-4 md:pt-10 pt-2" >
        <div className="flex flex-col lg:items-center  items-stretch text-center">
          <div className="space-y-4  max-w-5xl mx-auto ">
            <h2 className="font-manrope  lg:text-title-xxl text-title-lg   leading-0    sm:leading-8  text-black font-bold">
              {t('partnyor.0')}
              <span className="text-starrating"> {t('partnyor.1')}</span>

              {t('partnyor.2')}
            </h2>
            <p className="lg:text-title-md text-center  text-sm font-poppins opacity-70 font-normal pb-[2em] ">
              {t('partnyor.3')}
            </p>
          </div>
          <div className="grid  lg:grid-cols-12 mb-10   gap-10     ">
            <div className="w-full p-6  lg:col-span-4 md:col-span-6 col-span-full bg-white border border-gray700 rounded-lg shadow-3">
              <span className="flex pt-3 justify-center space-x-2">
                <img src={p_icon1} alt="Icon" className="w-6" />
                <h2 className="font-manrope text-lg        text-black font-bold">
                  {t('partnyor.4')}
                </h2>
              </span>

              <p className="mb-3 font-normal pt-2 opacity-70 font-poppins  text-xs">
                {t('partnyor.5')}
              </p>
            </div>

            <div className="w-full p-6 lg:col-span-4 md:col-span-6 col-span-full bg-white border border-gray700  rounded-lg shadow-md ">
              <span className="flex pt-2 justify-center space-x-2">
                <img src={p_icon2} alt="Icon" className="w-6" />
                <h2 className="font-manropetext-lg       text-black font-bold">
                  {t('partnyor.6')}
                </h2>
              </span>

              <p className="mb-3 font-normal text-xs opacity-70 font-poppins pt-2">
                {t('partnyor.7')}
              </p>
            </div>
            <div className="w-full p-6 lg:col-span-4 md:col-span-12 col-span-full bg-white border border-gray700  rounded-lg shadow-md">
              <span className="flex pt-2  justify-center space-x-2">
                <img src={p_icon3} alt="Icon" className="w-6" />
                <h2 className="font-manrope text-lg         text-black font-bold">
                  {t('partnyor.8')}
                </h2>
              </span>

              <p className="mb-3 font-normal pt-2 opacity-70 font-poppins text-xs ">
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
            loop={true}
            className="mySwiper"
          >
            <div className="flex items-center    w-100 justify-center ">
              <SwiperSlide>
                <div className="  max-w-70  w-full pb-2  ">
                  <img
                    className="w-full h-94 object-contain"
                    src={language == 'Aze' ? p1aze : p1en}
                    alt="Iphone2"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="    max-w-70 mb-10  w-full ">
                  <img
                    className="w-full h-94 object-contain"
                    src={language == 'Aze' ? p2aze : p2en}
                    alt="Iphone4"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" pb-2 max-w-70  w-full  ">
                  <img
                    className="w-full h-94 object-contain"
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
            <div className=" h-115">
              <img
                className="w-full h-full object-contain"
                src={language == 'az' ? p1aze : p1en}
                alt="Iphone2"
              />
            </div>
            <div className="h-115">
              <img
                className="w-full h-full object-contain"
                src={language == 'az' ? p2aze : p2en}
                alt="Iphone4"
              />
            </div>
            <div className=" h-115">
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
