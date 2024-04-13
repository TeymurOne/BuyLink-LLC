import { useTranslation } from 'react-i18next';
import ModalQr from './ui/ModalQr';
import { useState, useEffect } from 'react';

function VideoSection() {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [language, setLanguage] = useState<any>('');
 
  

  useEffect(() => {
    setLanguage(localStorage.getItem('lng'));
  }, [localStorage.getItem('lng'), language]);
  return (
    <>
      <section className="pt-2 lg:pb-30 pb-4 md:px-0  px-6" id="about">
        <div className="flex  lg:flex-row flex-col  gap-10 ">
          <div className="max-w-[384px]  mx-auto items-center  lg:text-left text-center  self-stretch   w-full lg:space-y-10 space-y-6">
            <div>
              <h2 className="   text-2xl  text-[#4C5DF5] font-bold">
                {t('main.3')}
              </h2>
              <p className="lg:text-[16px] mt-2  text-[14px] leading-5 lg:leading-6   font-poppins  text-[#000000ad] font-medium">
                {t('main.4')}
              </p>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="bg-[#4C5DF5]  rounded text-white font-thin text-[16px] px-4  h-[60px]"
            >
              {t('main.5')}
            </button>
          </div>
          <div className="max-w-[100%] lg:max-w-[65%] w-full        bg-black-2  ">
            <video
              id="myVideo"
              width="100%"
              className="bg-black-2 object-contain  w-full    max-h-[370px]      "
              controls={true}
            >
              {' '}
              {language == 'az' && <source src="./Aze.mp4" type="video/mp4" />}
              {language == 'en' && <source src="./eng.mp4" type="video/mp4" />}
            </video>
          </div>
        </div>
      </section>
      <ModalQr showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}

export default VideoSection;
