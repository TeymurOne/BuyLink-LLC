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
import PartnerUi from './ui/PartnerUi';

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
          className="flex flex-col items-stretch  text-center lg:items-center"
          id="buylinkpartner"
        >
          <div className="space-y-4 ">
            <h2 className="font-manrope text-title-lg   font-bold     text-black lg:text-title-xxl">
              {t('partnyor2.0')}
              <span className="text-starrating"> {t('partnyor2.1')}</span>
              {t('partnyor2.9')}
            </h2>
            <p className="pb-6  text-center  font-poppins text-base font-normal opacity-70 lg:text-xl ">
              {t('partnyor2.2')}
            </p>
          </div>

          <div className=" mb-10 flex w-full flex-col gap-4 lg:flex-row">
            <PartnerUi
              title={t('partnyor2.3')}
              img={s_icon1}
              desc={t('partnyor2.4')}
            />
            <PartnerUi
              title={t('partnyor2.5')}
              img={s_icon2}
              desc={t('partnyor2.6')}
            />
            <PartnerUi
              title={t('partnyor2.7')}
              img={s_icon3}
              desc={t('partnyor2.8')}
            />
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
            <div className="flex w-100  items-center justify-center ">
              <SwiperSlide>
                <div className="h-125 w-full max-w-70 bg-transparent pb-2 ">
                  <img
                    className="h-full w-full object-contain"
                    src={language == 'az' ? s1az : s1en}
                    alt="Iphone2"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="mb-10 h-125 w-full max-w-70 bg-transparent  ">
                  <img
                    className="h-full w-full object-contain"
                    src={language == 'az' ? s2az : s2en}
                    alt="Iphone4"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-125 w-full max-w-70 bg-transparent  ">
                  <img
                    className="h-full w-full object-contain"
                    src={language == 'az' ? s3az : s3en}
                    alt="Iphone2"
                  />
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        ) : (
          <div className="flex items-center justify-center  space-x-10 pt-10 ">
            <div>
              <img
                className="h-115 w-full object-contain "
                src={language == 'az' ? s1az : s1en}
                alt="Iphone2"
              />
            </div>
            <div>
              <img
                className="h-115 w-full object-contain "
                src={language == 'az' ? s2az : s2en}
                alt="Iphone4"
              />
            </div>
            <div>
              <img
                className="h-115 w-full object-contain"
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
