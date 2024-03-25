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
    const isMobile = window.innerWidth <= 455;

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
                {t('partnyor2.0')}
                <span className="text-[#4C5DF5]"> {t('partnyor2.1')}</span>
                {t('partnyor2.9')}
              </h2>
              <p className="lg:text-[20px] text-[15px] pb-[2em] leading-[1.7]">
                {t('partnyor2.2')}
              </p>
            </div>
            <div className="w-[90%]  md:place-items-start   place-items-center grid lg:grid-cols-3 500px:grid-cols-2 md:grid-cols-2 grid-cols-1">
            <div className="pt-4 w-full max-w-[340px]">
              <div className="flex items-center   lg:space-x-2 ">
                <img src={s_icon1} alt="w-[20px] h-[28px]" />

                <h2 className="font-manrope   lg:text-[17px] lg:text-start text-center md:text-start  500px:text-[11px]   md:text-[14px]  992px:text-[16px]  text-[20px]       text-black font-bold">
                  {t('partnyor2.3')}
                </h2>
              </div>

              <p className="font-poppins pt-4 lg:pt-2 opacity-70   md:text-start  text-center leading-[1.9] lg:text-[12px] text-[14px]   text-[#000000ad] font-medium">
                {t('partnyor2.4')}
              </p>
            </div>
            <div className="pt-4  w-full max-w-[280px]">
              <div className="flex items-center   space-x-2 ">
                <img src={s_icon2} alt="w-[20px] h-[28px]" />

                <h2 className="font-manrope text-[20px]   lg:text-[17px] 500px:text-[11px]    md:text-[14px]  992px:text-[16px]        text-black font-bold">
                  {t('partnyor2.5')}
                </h2>
              </div>

              <p className="font-poppins pt-4 lg:pt-2 opacity-70   md:text-start  text-center leading-[1.9] lg:text-[12px] text-[14px]   text-[#000000ad] font-medium">
                {t('partnyor2.6')}
              </p>
            </div>
            <div className="pt-4  w-full max-w-[320px]">
              <div className="flex items-center   space-x-2 ">
                <img src={s_icon3} alt="w-[20px] h-[28px]" />

                <h2 className="font-manrope  text-[20px]  500px:text-[11px]   lg:text-[17px]  md:text-[14px]  992px:text-[16px]      text-black font-bold">
                  {t('partnyor2.7')}
                </h2>
              </div>

              <p className="font-poppins pt-4 pb-6  lg:pt-2 opacity-70   md:text-start  text-center leading-[1.9] lg:text-[12px] text-[14px]   text-[#000000ad] font-medium">
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
            <div className="flex items-center pt-10  space-x-10 justify-center ">
              <div >
                <img
                  className="w-full h-[458px] object-contain "
                  src={language == 'Aze' ? s1az : s1en}
                  alt="Iphone2"
                />
              </div>
              <div>
                <img
                  className="w-full h-[458px] object-contain "
                  src={language == 'Aze' ? s2az : s2en}
                  alt="Iphone4"
                />
              </div>
              <div>
                <img
                  className="w-full h-[458px] object-contain"
                  src={language == 'Aze' ? s3az : s3en}
                  alt="Iphone2"
                />
              </div>
            </div>
          )}
        </section>
      </>
    );
  }