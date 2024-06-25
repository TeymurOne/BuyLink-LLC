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
      <section className="bg-white pt-2 md:pt-10 lg:pt-14">
        <div className="flex h-full flex-col items-center justify-between lg:flex-row">
          <div className="h-full w-full max-w-94 space-y-10 text-center lg:text-start">
            <div>
              <h2 className="h-full font-manrope text-4xl font-bold text-starrating">
                {t('main.3')}
              </h2>
              <p className="mt-2 font-poppins text-sm font-normal lg:text-title-sm">
                {t('main.4')}
              </p>
              <p className="font-poppins text-sm font-normal lg:text-title-sm">
                {t('main.5')}
              </p>
            </div>
            <button className="h-15 w-full max-w-40 rounded bg-starrating text-base font-medium text-white">
              <a href="#buylinkdownload">{t('main.6')}</a>
            </button>
          </div>
          <div className="mt-10 h-auto w-full max-w-4xl md:h-75 lg:h-100">
            <video
              id="myVideo"
              width="100%"
              controlsList="nodownload"
              preload="true"
              autoPlay
              muted
              className="h-full w-full"
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
