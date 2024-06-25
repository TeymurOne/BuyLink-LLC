import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

function VideoSection() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    const handleLanguageChange = () => {
      setLanguage(i18n.language);
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  useEffect(() => {
    const storedLanguage = localStorage.getItem('lng');
    if (storedLanguage) {
      setLanguage(storedLanguage);
    } else {
      setLanguage(i18n.language);
    }
  }, [i18n.language]);

  return (
    <>
      <section className="bg-white lg:pt-14 md:pt-10 pt-2">
        <div className="flex lg:flex-row flex-col items-center justify-between h-full">
          <div className="h-full space-y-10 text-center lg:text-start max-w-94 w-full">
            <div>
              <h2 className="text-4xl font-manrope h-full text-starrating font-bold">
                {t('main.3')}
              </h2>
              <p className="lg:text-title-sm mt-2 text-sm font-poppins font-normal">
                {t('main.4')}
              </p>
              <p className="lg:text-title-sm text-sm font-poppins font-normal">
                {t('main.5')}
              </p>
            </div>
            <button className="bg-starrating rounded text-white font-medium max-w-40 w-full text-base h-15">
              <a href="#buylinkdownload">{t('main.6')}</a>
            </button>
          </div>
          <div className="mt-10 max-w-4xl w-full h-auto md:h-75 lg:h-100">
            <video
              id="myVideo"
              width="100%"
              controlsList="nodownload"
              preload="true"
              autoPlay
              muted
              className="w-full h-full"
              controls={true}
              key={language}
            >
              {language === 'az' && <source src="./Aze.mp4" type="video/mp4" />}
              {language === 'en' && <source src="./eng.mp4" type="video/mp4" />}
            </video>
          </div>
        </div>
      </section>
    </>
  );
}

export default VideoSection;
