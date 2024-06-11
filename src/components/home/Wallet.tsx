import { useTranslation } from 'react-i18next';
// wallet
import card1 from '../../images/Pages-index/wallet/card.png';
import icon1 from '../../images/Pages-index/wallet/icon1.svg';
import icon2 from '../../images/Pages-index/wallet/icon2.svg';
import icon3 from '../../images/Pages-index/wallet/icon3.svg';
import icon4 from '../../images/Pages-index/wallet/icon4.svg';

export function WalletBuylink() {
  const { t } = useTranslation();
  return (
    <>
      <section className="  py-10 lg:px-0    grid place-items-center">
        <h2 className="text-center font-manrope lg:text-title-xxl md:text-title-xl text-3xl text-starrating font-bold lg:py-14 md:py-7">
          {' '}
          <span className="text-black"> {t('main.0')}</span> Wallet
        </h2>
        <div className=" flex  items-center justify-between  w-full  lg:flex-row pt-10   flex-col  ">
          <div className=" lg:mx-0  lg:h-70 h-auto   max-w-125 w-full    ">
            <img
              className="  h-full w-full rounded-xl "
              src={card1}
              alt="Buynet wallet img"
            />
          </div>

          <div className=" pt-6 lg:pt-0 lg:pl-10 pl-0 self-center  lg:self-baseline w-full max-w-190      text-black  ">
            <div className="lg:text-start space-y-4  text-center">
              <h2 className="font-manrope text-starrating  lg:text-title-xxl md:text-title-xl2   text-title-lg    font-semibold ">
                {t('wallet.1')}

                <span className="text-black-2 ">
                  {' '}
                  {t('wallet.8')} {t('wallet.0')}
                </span>
                <span className="text-starrating "> {t('wallet.9')} </span>
              </h2>

              <p className="lg:text-title-md text-sm opacity-90  lg:pb-6  font-normal    font-poppins">
                {t('wallet.3')}
              </p>
            </div>
            <div className=" grid lg:grid-cols-2 2xsm:mx-auto w-full lg:mx-0 lg:pt-0 pt-6   lg:w-full sm:grid-cols-2 grid-cols-1  place-content-center   lg:gap-y-8  md:gap-y-3  gap-y-2   font-manrope normal font-medium text-black700">
              <div className="flex space-x-4    items-center w-full max-w-70  ">
                <img className="w-10.5 h-10.5 " src={icon1} alt="Group 155" />
                <p className="font-manrope lg:text-lg  text-sm font-medium">
                  {t('wallet.4')}
                </p>
              </div>
              <div className="flex items-center  space-x-4">
                <img className="w-10.5 h-10.5" src={icon2} alt="Group 155" />
                <p className="font-manrope lg:text-lg   text-smfont-medium">
                  {t('wallet.5')}
                </p>
              </div>
              <div className="flex items-center  space-x-4">
                <img className="w-10.5 h-10.5" src={icon3} alt="Group 155" />
                <p className="font-manrope lg:text-lg  text-sm font-medium">
                  {t('wallet.6')}{' '}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <img className="w-10.5 h-10.5" src={icon4} alt="Group 155" />
                <p className="font-manrope lg:text-lg  text-sm font-medium">
                  {t('wallet.7')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
