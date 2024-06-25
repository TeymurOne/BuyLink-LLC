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
      <section className="  grid place-items-center    py-10 lg:px-0">
        <h2 className="text-center font-manrope text-3xl font-bold text-starrating md:py-7 md:text-title-xl lg:py-14 lg:text-title-xxl">
          {' '}
          <span className="text-black"> {t('main.0')}</span> Wallet
        </h2>
        <div className=" flex  w-full flex-col  items-center  justify-between pt-10   lg:flex-row  ">
          <div className=" h-auto  w-full max-w-125   lg:mx-0 lg:h-70    ">
            <img
              className="  h-full w-full rounded-xl "
              src={card1}
              alt="Buynet wallet img"
            />
          </div>

          <div className=" w-full max-w-190 self-center pl-0 pt-6  text-black lg:self-baseline lg:pl-10      lg:pt-0  ">
            <div className="space-y-4 text-center  lg:text-start">
              <h2 className="font-manrope text-title-lg  font-semibold text-starrating   md:text-title-xl2    lg:text-title-xxl ">
                {t('wallet.1')}

                <span className="text-black-2 ">
                  {' '}
                  {t('wallet.8')} {t('wallet.0')}
                </span>
                <span className="text-starrating "> {t('wallet.9')} </span>
              </h2>

              <p className="font-poppins text-sm font-normal  opacity-90  lg:pb-6    lg:text-title-md">
                {t('wallet.3')}
              </p>
            </div>
            <div className=" normal grid w-full grid-cols-1 place-content-center gap-y-2 pt-6   font-manrope font-medium text-black700  2xsm:mx-auto   sm:grid-cols-2  md:gap-y-3  lg:mx-0   lg:w-full lg:grid-cols-2 lg:gap-y-8 lg:pt-0">
              <div className="flex w-full    max-w-70 items-center space-x-4  ">
                <img className="h-10.5 w-10.5 " src={icon1} alt="Group 155" />
                <p className="font-manrope text-sm  font-medium lg:text-lg">
                  {t('wallet.4')}
                </p>
              </div>
              <div className="flex items-center  space-x-4">
                <img className="h-10.5 w-10.5" src={icon2} alt="Group 155" />
                <p className="text-smfont-medium font-manrope   lg:text-lg">
                  {t('wallet.5')}
                </p>
              </div>
              <div className="flex items-center  space-x-4">
                <img className="h-10.5 w-10.5" src={icon3} alt="Group 155" />
                <p className="font-manrope text-sm  font-medium lg:text-lg">
                  {t('wallet.6')}{' '}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <img className="h-10.5 w-10.5" src={icon4} alt="Group 155" />
                <p className="font-manrope text-sm  font-medium lg:text-lg">
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
