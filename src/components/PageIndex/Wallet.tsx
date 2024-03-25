import { useTranslation } from "react-i18next";
// wallet
import card1 from '../../images/Pages-index/wallet/card.png';
import icon1 from '../../images/Pages-index/wallet/icon-1.svg';
import icon2 from '../../images/Pages-index/wallet/icon-2.svg';
import icon3 from '../../images/Pages-index/wallet/icon-3.svg';
import icon4 from '../../images/Pages-index/wallet/icon-4.svg';

export function WalletBuylink() {
    const { t } = useTranslation();
    return (
      <>
        <section className="  py-10 lg:px-0 px-6   grid place-items-center">
          <div className=" flex  items-center justify-between  w-full  lg:flex-row   flex-col  ">
            <div className=" lg:mx-0    max-w-[540px] w-full    ">
              <img
                className="  h-full w-full    rounded-xl "
                src={card1}
                alt="Buynet wallet img"
              />
            </div>
  
            <div className=" pt-6 lg:pt-0 lg:pl-10 pl-0 self-center  lg:self-baseline w-full max-w-[698px]      text-black  ">
              <div className="lg:text-start space-y-4  text-center">
                <h2 className="font-manrope lg:text-[36px] text-[32px] leading-[38px]    whitespace-wrap lg:leading-[44px] font-bold text-black-2">
                  {t('wallet.0')}
                  <span className="text-[#4C5DF5]"> {t('wallet.1')}</span>
                </h2>
  
                <p className="lg:text-[20px] text-[14px]   font-medium  normal font-poppins">
                  {t('wallet.3')}
                </p>
              </div>
              <div className=" grid lg:grid-cols-2 2xsm:mx-auto w-full lg:mx-0   lg:w-full sm:grid-cols-2 grid-cols-1 place-content-center   gap-y-2     font-manrope normal font-medium text-[#000000ad]">
                <div className="flex space-x-4    items-center w-full max-w-[300px]  ">
                  <img
                    className="w-[37px] h-[37px] "
                    src={icon1}
                    alt="Group 155"
                  />
                  <p>{t('wallet.4')}</p>
                </div>
                <div className="flex items-center  space-x-4">
                  <img
                    className="w-[37px] h-[37px]"
                    src={icon2}
                    alt="Group 155"
                  />
                  <p>{t('wallet.5')}</p>
                </div>
                <div className="flex items-center  space-x-4">
                  <img
                    className="w-[37px] h-[37px]"
                    src={icon3}
                    alt="Group 155"
                  />
                  <p>{t('wallet.6')} </p>
                </div>
                <div className="flex items-center space-x-4">
                  <img
                    className="w-[37px] h-[37px]"
                    src={icon4}
                    alt="Group 155"
                  />
                  <p>{t('wallet.7')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }