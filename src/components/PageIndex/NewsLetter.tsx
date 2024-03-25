import { useTranslation } from "react-i18next";

export function NewsLetter() {
    const { t } = useTranslation();
    return (
      <section className="py-10 text-center lg:px-0 px-2">
        <h2 className="font-manrope  lg:text-[40px] text-[27px]      leading-8  text-black font-bold">
          {t('letters.0')}{' '}
          <span className="text-[#4C5DF5]">{t('letters.1')}</span>
        </h2>
        <p className="lg:text-2xl text-sm font-light font-grotesk text-[#1C1C1C]">
          {t('letters.2')}
        </p>
  
        <div className=" mt-10 space-y-4 lg:space-x-4  space-x-0  px-4">
          <input
            className="border-2 border-opacity-60  px-[35px] outline-none  border-[#979797] rounded-[14px] max-w-[511px] w-full h-[57px]"
            type="text"
            placeholder="Your email adress"
          />
          <button className="bg-[#4C5DF5]  rounded-2xl text-white text-[16px] max-w-[500px] w-full  lg:w-[152px]     h-[60px]">
            {t('letters.3')}
          </button>
        </div>
      </section>
    );
  }
  