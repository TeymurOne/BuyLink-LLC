// steps
import s_icon1 from '../../images/Pages-index/steps/icon-1.svg';
import s_icon2 from '../../images/Pages-index/steps/icon-2.svg';
import s_icon3 from '../../images/Pages-index/steps/icon-3.svg';

import s1az from '../../images/Pages-index/steps/s1az.png';
import s1en from '../../images/Pages-index/steps/s1en.png';
import s2az from '../../images/Pages-index/steps/s2az.png';
import s2en from '../../images/Pages-index/steps/s2en.png';
import s3az from '../../images/Pages-index/steps/s3az.png';
import s3en from '../../images/Pages-index/steps/s3en.png';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import './Main.css';
import { Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
export function BuyLinkPartner2() {
  const { t } = useTranslation();
  const isMobile = window.innerWidth <= 600;

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
            <h2 className="font-manrope  lg:text-title-xxl text-3xl     text-black font-bold">
              {t('partnyor2.0')}
              <span className="text-starrating"> {t('partnyor2.1')}</span>
              {t('partnyor2.9')}
            </h2>
            <p className="lg:text-2xl text-base pb-6 ">
              {t('partnyor2.2')}
            </p>
          </div>
          <div className="grid lg:grid-cols-12 mb-10   gap-10     ">
            <div className="w-full p-6 lg:col-span-4 md:col-span-6 bg-white border border-gray700 rounded-lg shadow-md ">
              <span className="flex justify-center space-x-2">
                <img src={s_icon1} alt="Icon" className="w-6" />
                <h2 className="font-manrope text-lg        text-black font-bold">
                  {t('partnyor2.3')}
                </h2>
              </span>

              <p className="mb-3 font-normal font-poppins text-xs opacity-70 pt-2 text-black700 ">
                {t('partnyor2.4')}
              </p>
            </div>

            <div className="w-full p-6 lg:col-span-4 md:col-span-6 bg-white border border-gray700  rounded-2xl shadow-md ">
              <span className="flex justify-center space-x-2">
                <img src={s_icon2} alt="Icon" className="w-6" />
                <h2 className="font-manrope text-lg       text-black font-bold">
                  {t('partnyor2.5')}
                </h2>
              </span>

              <p className="mb-3 font-normal font-poppins text-xs opacity-70 pt-2 text-black700 ">
                {t('partnyor2.6')}
              </p>
            </div>
            <div className="w-full p-6 lg:col-span-4 md:col-span-12 bg-white border border-gray700  rounded-xl shadow-5 ">
              <span className="flex  justify-center space-x-2">
                <img src={s_icon3} alt="Icon" className="w-6" />
                <h2 className="font-manrope text-lg         text-black font-bold">
                  {t('partnyor2.7')}
                </h2>
              </span>

              <p className="mb-3 font-normal font-poppins text-xs opacity-70 pt-2 text-black700 ">
                {t('partnyor2.8')}
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
            <div className="flex items-center  w-100 justify-center ">
              <SwiperSlide>
                <div className="max-w-70 h-125 w-full pb-2 ">
                  <img
                    className="w-full h-full object-contain"
                    src={language == 'az' ? s1az : s1en}
                    alt="Iphone2"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="max-w-70 mb-10 h-125 w-full  ">
                  <img
                    className="w-full h-full object-contain"
                    src={language == 'az' ? s2az : s2en}
                    alt="Iphone4"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="max-w-70 h-125 w-full  ">
                  <img
                    className="w-full h-full object-contain"
                    src={language == 'az' ? s3az : s3en}
                    alt="Iphone2"
                  />
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        ) : (
          <div className="flex items-center pt-10  space-x-10 justify-center ">
            <div>
              <img
                className="w-full h-115 object-contain "
                src={language == 'az' ? s1az : s1en}
                alt="Iphone2"
              />
            </div>
            <div>
              <img
                className="w-full h-115 object-contain "
                src={language == 'az' ? s2az : s2en}
                alt="Iphone4"
              />
            </div>
            <div>
              <img
                className="w-full h-115 object-contain"
                src={language == 'az' ? s3az : s3en}
                alt="Iphone2"
              />
            </div>
          </div>
        )}
      </section>
    </>
  );
}
