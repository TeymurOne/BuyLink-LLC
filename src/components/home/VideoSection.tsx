import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

function VideoSection() {
  const { t } = useTranslation();

  const [language, setLanguage] = useState<any>('');

  useEffect(() => {
    setLanguage(localStorage.getItem('lng'));
  }, [localStorage.getItem('lng'), language]);
  return (
    <>
      <section className="bg-white">
        <div className="flex lg:flex-row flex-col items-center justify-between h-full   ">
          <div className=" h-full space-y-10  text-center  lg:text-start max-w-94 w-full">
            <div >
              <h2 className="   text-4xl  font-manrope h-full  text-starrating font-bold">
                {t('main.3')}
              </h2>
              <p className="lg:text-title-sm  mt-2   text-sm   font-poppins   font-normal">
                {t('main.4')}
              </p>
              <p className="lg:text-title-sm     text-sm   font-poppins   font-normal">
                {t('main.5')}
              </p>
            </div>
            <button className="bg-starrating  rounded text-white font-medium max-w-40  w-full text-base   h-15">
              {t('main.6')}
            </button>
          </div>

          <div className=" bg-black-2 mt-10  max-w-[889px] w-full h-[400px]  ">
            <video
              id="myVideo"
              width="100%"
              className="bg-black-2    w-full  h-full         "
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
