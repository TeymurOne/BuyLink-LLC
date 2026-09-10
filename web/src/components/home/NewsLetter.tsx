import { useTranslation } from 'react-i18next';

export function NewsLetter() {
  const { t } = useTranslation();
  return (
    <section className="px-2 py-7 text-center lg:px-0 lg:py-14 ">
      <h2 className="font-manrope  text-4xl font-bold      leading-8  text-black lg:text-title-xxl">
        {t('letters.0')}{' '}
        <span className="mx-2 text-starrating">{t('letters.1')}</span>
      </h2>
      <p className="pt-3 font-grotesk text-sm  font-light text-black opacity-75 lg:text-2xl">
        {t('letters.2')}
      </p>

      <div className=" mt-10 space-x-0 space-y-4  px-4  lg:space-x-4">
        <input
          className="h-14 w-full  max-w-125 rounded-2xl  border-2 border-searchColor border-opacity-60 pl-3 outline-none"
          type="text"
          placeholder="Your email adress"
        />
        <button className="h-15  w-full max-w-125 rounded-2xl bg-starrating text-base  text-white     lg:w-37.5">
          {t('letters.3')}
        </button>
      </div>
    </section>
  );
}
