import { useTranslation } from 'react-i18next';
import partnerlogo from '../../images/Pages-index/head-main/becomepartner.png';
import { Link } from 'react-router-dom';

export function Partner() {
  const { t } = useTranslation();
  return (
    <>
      <div className=" flex w-full  items-center justify-between py-20  pl-8 md:py-20 md:pl-10   lg:py-0 lg:pl-20     ">
        <div className="flex w-150  flex-col items-center justify-center  space-y-4 pr-14 md:items-start  md:justify-normal md:space-y-6  ">
          <h2 className="normal text-center font-manrope text-3xl font-bold text-gray200 lg:text-start lg:text-6xl">
            {t('partner.0')}
          </h2>
          <p className="my-4 text-center  font-poppins text-sm font-light    text-gray200 md:text-left lg:text-2xl">
            {t('partner.1')}
          </p>
          <button className="h-17 w-39 rounded-md bg-whiten font-bold text-starrating">
            <Link
              to="https://47gk82mq.forms.app/terefdashliq-formasi"
              target="_blank"
            >
              {' '}
              {t('partner.2')}
            </Link>
          </button>
        </div>
        <div className="hidden lg:block ">
          <img
            src={partnerlogo}
            className=" mt-1 h-115 w-auto"
            alt="Partner Logo"
          />
        </div>
      </div>
    </>
  );
}
