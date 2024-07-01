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
      <div className=" w-full cursor-default bg-white   ">
        <div className="container mx-auto  h-auto cursor-default bg-white px-4 pb-10   md:px-10  lg:px-16">
          <Main />
        </div>
      </div>

      <div className="w-full   bg-white ">
        <Partnyor />

        <div className="  container  mx-auto h-auto cursor-default bg-white px-4    md:px-4  lg:px-16    ">
          <VideoSection />

          <WalletBuylink />
          <BuyLinkPartner1 />
        </div>
      </div>

      <div className="bg-tborderHover  py-6 lg:py-10">
        <div className="  container   ">
          <BuyLinkPartner2 />{' '}
        </div>
      </div>
      <div className="bg-white pt-20 ">
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

      <div id="faq" className=" bg-white py-6 md:py-10 lg:py-20   ">
        <div className="container mx-auto">
          <Accordion />
        </div>
      </div>
    </PagesLayout>
  );
};

export default Index;
