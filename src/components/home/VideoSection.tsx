import { useTranslation } from 'react-i18next';
import ModalQr from '../PageIndex/ui/ModalQr';
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
      <section className="bg-white">
        <div className="flex lg:flex-row flex-col items-center justify-between h-full   ">
          <div className='space-y-4 text-center  lg:text-start max-w-94 w-full'>
            <h2 className="   text-4xl font-manrope  text-starrating font-bold">
              {t('main.3')}
            </h2>
            <p className="lg:text-title-sm   text-sm   font-poppins   font-normal">
              {t('main.4')}
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="bg-starrating  rounded text-white font-medium max-w-40  w-full text-base   h-15"
            >
              {t('main.5')}
            </button>
          </div>

          <div className=" bg-black-2 mt-10 h-auto max-w-180 w-full  ">
            <video
              id="myVideo"
              width="100%"
              className="bg-black-2    w-full          "
              controls={true}
            >
            
              {language == 'az' && <source src="./Aze.mp4" type="video/mp4" />}
              {language == 'en' && <source src="./eng.mp4" type="video/mp4" />}
            </video>
          </div>
        </div>
      </section>
   
    </>
  );
}

export default VideoSection;
