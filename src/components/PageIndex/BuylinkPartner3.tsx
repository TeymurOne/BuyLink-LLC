import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// disocunt
import d_icon1 from '../../images/Pages-index/disocunt/icon-1.svg';
import d_icon2 from '../../images/Pages-index/disocunt/icon-2.svg';
import d_icon3 from '../../images/Pages-index/disocunt/icon-3.svg';

import d1az from '../../images/Pages-index/disocunt/d1az.png';
import d1en from '../../images/Pages-index/disocunt/d1en.png';
import d2az from '../../images/Pages-index/disocunt/d2az.png';
import d2en from '../../images/Pages-index/disocunt/d2en.png';
import d3az from '../../images/Pages-index/disocunt/d3az.png';
import d3en from '../../images/Pages-index/disocunt/d3en.png';

import 'swiper/css';
import 'swiper/css/pagination';
import './Main.css';
import { Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
export function BuyLinkPartner3() {
  const isMobile = window.innerWidth <= 455;

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
              <span className="text-[#4C5DF5]"> {t('partnyor3.0')} </span>{' '}
              {t('partnyor3.1')}
            </h2>
            <p className="lg:text-[20px] text-[15px] pb-[2em] leading-[1.7]">
              {t('partnyor3.2')}
            </p>
          </div>
          <div className="grid lg:grid-cols-12   gap-10     ">
            <div className="w-full p-6 lg:col-span-4 md:col-span-6 bg-white border border-gray700 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
              <span className='flex justify-center space-x-2'>
              <img src={d_icon1} alt="Icon" className="w-6" />
              <h2 className="font-manrope text-lg        text-black font-bold">
                {t('partnyor3.3')}
              </h2>
              </span>

              <p className="mb-3 font-normal opacity-70 font-poppins text-xs pt-2 text-black700">
                {t('partnyor3.4')}
              </p>
            </div>

            <div className="w-full p-6 lg:col-span-4 md:col-span-6 bg-white border border-gray700  rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
              <span className='flex justify-center space-x-2'>
                <img src={d_icon2} alt="Icon" className="w-6" />
                <h2 className="font-manrope text-lg      text-black font-bold">
                  {t('partnyor3.5')}
                </h2>
              </span>

              <p className="mb-3 font-normal opacity-70 font-poppins text-xs pt-2 text-black700 ">
                {t('partnyor3.6')}
              </p>
            </div>
            <div className="w-full p-6 lg:col-span-4 md:col-span-12 bg-white border border-gray700  rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
              <span className="flex  justify-center space-x-2">
                <img src={d_icon3} alt="Icon" className="w-6" />
                <h2 className="font-manrope text-lg         text-black font-bold">
                  {t('partnyor3.7')}
                </h2>
              </span>

              <p className="mb-3 font-normal font-poppins text-xs opacity-70 pt-2 text-black700 ">{t('partnyor3.8')}</p>
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
                    src={language == 'az' ? d1az : d1en}
                    alt="Iphone2"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="max-w-[225px] h-[590px] w-full  ">
                  <img
                    className="w-full h-full object-contain"
                    src={language == 'az' ? d2az : d2en}
                    alt="Iphone4"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="max-w-[225px] h-[590px] w-full  ">
                  <img
                    className="w-full h-full object-contain"
                    src={language == 'az' ? d3az : d3en}
                    alt="Iphone2"
                  />
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        ) : (
          <div className="flex items-center pt-10  space-x-10 justify-center ">
            <div className="w-[290px] ">
              <img
                className="w-full h-full "
                src={language == 'az' ? d1az : d1en}
                alt="Iphone2"
              />
            </div>
            <div className="w-[290px] ">
              <img
                className="w-full h-full "
                src={language == 'az' ? d3az : d3en}
                alt="Iphone4"
              />
            </div>
            <div className="w-[290px] ">
              <img
                className="w-full h-full "
                src={language == 'az' ? d2az : d2en}
                alt="Iphone2"
              />
            </div>
          </div>
        )}
      </section>
    </>
  );
}

