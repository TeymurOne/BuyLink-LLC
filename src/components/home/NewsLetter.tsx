import { useTranslation } from "react-i18next";

export function NewsLetter() {
    const { t } = useTranslation();
    return (
      <section className="py-14 text-center lg:px-0 px-2 ">
        <h2 className="font-manrope  lg:text-title-xxl text-4xl      leading-8  text-black font-bold">
          {t('letters.0')}{' '}
          <span className="text-starrating">{t('letters.1')}</span>
        </h2>
        <p className="lg:text-2xl pt-3 opacity-75  text-sm font-light font-grotesk text-black">
          {t('letters.2')}
        </p>
  
        <div className=" mt-10 space-y-4 lg:space-x-4  space-x-0  px-4">
          <input
            className="border-2 border-opacity-60  px-9 outline-none  border-searchColor rounded-2xl max-w-125 w-full h-14"
            type="text"
            placeholder="Your email adress"
          />
          <button className="bg-starrating  rounded-2xl text-white text-base max-w-125 w-full  lg:w-37.5     h-15">
            {t('letters.3')}
          </button>
        </div>
      </section>
    );
  }
  