import { useTranslation } from 'react-i18next';
import { useState, useEffect,  } from 'react';

function VideoSection() {
  const { t } = useTranslation();

  const [language, setLanguage] = useState<any>('');
  const currentLanguage=t('default.0')
  console.log(currentLanguage, 'currentlanguyage');
  


  useEffect(() => {
    if (localStorage.getItem('lng')) {
      setLanguage(localStorage.getItem('lng'));
    }else{
      setLanguage(currentLanguage)
    }
  
  }, [localStorage.getItem('lng'), language]);
  
  

  return (
    <>
      <section className="bg-white lg:pt-14 md:pt-10 pt-2">
        <div className="flex lg:flex-row flex-col items-center justify-between h-full   ">
          <div className=" h-full space-y-10  text-center  lg:text-start max-w-94 w-full">
            <div>
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
            <button  className="bg-starrating  rounded text-white font-medium max-w-40  w-full text-base   h-15">
              <a href="#buylinkdownload">    {t('main.6')}</a>
          
            </button>
          </div>

          <div className=" bg-black-2 mt-10  max-w-4xl w-full h-auto md:h-75 lg:h-100  ">
            <video
              id="myVideo"
              width="100%"
              controlsList="nodownload" preload="true" autoPlay muted
              className="bg-black-2    w-full  h-full  "
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
