import Header from '../../layout/Header';
import './main.css';
import VideoSection from '../../components/home/VideoSection';
import Accordion from '../../components/home/Accordion';
import { Main } from '../../components/home/Main';
import { WalletBuylink } from '../../components/home/Wallet';
import { BuyLinkPartner1 } from '../../components/home/BuylinkPartner1';
import { BuyLinkPartner2 } from '../../components/home/BuylinkPartner2';
import { BuyLinkPartner3 } from '../../components/home/BuylinkPartner3';
import { NewsLetter } from '../../components/home/NewsLetter';
import { Partner } from '../../components/home/Partner';
import ModalQr from '../../components/home/ModalQr';
import Partnyor from '../../components/home/slider/Partnyor';
import PagesLayout from '../../layout/PagesLayout';

export const isMobile = window.innerWidth <= 555;

const Index = () => {
  return (
    <PagesLayout>
      <div className="bg-white  w-full cursor-default   ">
        <div className="bg-white pb-10  container lg:px-16 md:px-10 px-4 mx-auto   h-auto  cursor-default">
          <Main />
        </div>
      </div>

      <div className="bg-white   w-full ">
        <Partnyor />

        <div className="  container  bg-white lg:px-16 md:px-4 px-4 mx-auto    h-auto  cursor-default    ">
          <VideoSection />

          <WalletBuylink />
          <BuyLinkPartner1 />
        </div>
      </div>

      <div className="bg-tborderHover  lg:py-10 py-6">
        <div className="  container   ">
          <BuyLinkPartner2 />{' '}
        </div>
      </div>
      <div className="bg-white py-20 ">
        <div className="  container  ">
          {' '}
          <BuyLinkPartner3 />{' '}
        </div>
      </div>

      <div className=" bg-starrating    ">
        <Partner />
      </div>
      <div className="bg-white py-10">
        <NewsLetter />
      </div>

      <ModalQr />
      <div className=" py-20 bg-white   ">
        <div className="container mx-auto">
          <Accordion />
        </div>
      </div>
    </PagesLayout>
  );
};

export default Index;
