import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
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
import PartnerUi from './ui/PartnerUi';
export function BuyLinkPartner3() {
  const isMobile = window.innerWidth <= 600;

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
            <h2 className="font-manrope lg:text-title-xxl   text-title-lg     text-black font-bold">
              <span className="text-starrating"> {t('partnyor3.0')} </span>{' '}
              {t('partnyor3.1')}
            </h2>
            <p className="lg:text-xl text-base text-center  font-poppins opacity-70 font-normal pb-10 ">
              {t('partnyor3.2')}
            </p>
          </div>
          <div className=" flex lg:mb-0  mb-10  lg:flex-row flex-col gap-4 w-full">
            <PartnerUi
              title={t('partnyor3.3')}
              img={d_icon1}
              desc={t('partnyor3.4')}
            />
            <PartnerUi
              title={t('partnyor3.5')}
              img={d_icon2}
              desc={t('partnyor3.6')}
            />
            <PartnerUi
              title={t('partnyor3.7')}
              img={d_icon3}
              desc={t('partnyor3.8')}
            />
          </div>
        </div>
        {isMobile ? (
          <Swiper
          loop={true}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <div className="flex mb-20  items-center w-auto  pb-20  justify-center ">
              <SwiperSlide>
                <div className="max-w-70 pb-10 h-full w-full ">
                  <img
                    className="w-full h-full"
                    src={language == 'az' ? d1az : d1en}
                    alt="Iphone2"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="max-w-70  w-full  ">
                  <img
                    className="w-full h-full object-contain"
                    src={language == 'az' ? d2az : d2en}
                    alt="Iphone4"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="max-w-70  w-full  ">
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
          <div className="flex items-center pt-10  lg:mb-10 mb-3 space-x-10 justify-center ">
            <div className="w-73 ">
              <img
                className="w-full h-full "
                src={language == 'az' ? d1az : d1en}
                alt="Iphone2"
              />
            </div>
            <div className="w-73 ">
              <img
                className="w-full h-full "
                src={language == 'az' ? d3az : d3en}
                alt="Iphone4"
              />
            </div>
            <div className="w-73 ">
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
