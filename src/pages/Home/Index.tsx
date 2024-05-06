import Header from '../../components/PageIndex/Header';

// import 'swiper/css';
// import 'swiper/css/pagination';
import './main.css';

import Slider from '../../components/PageIndex/Slider';
import VideoSection from '../../components/PageIndex/VideoSection';

import Accordion from '../../components/PageIndex/Accordion';
// import Footer from './Footer';

// import { BuyLinkPartner1 } from './BuylinkPartner1';
// import { BuyLinkPartner2 } from './BuylinkPartner2';
// import { BuyLinkPartner3 } from './BuylinkPartner3';
// import { WalletBuylink } from './Wallet';
// import { Partner } from './Partner';
// import { NewsLetter } from './NewsLetter';
import { Main } from '../../components/PageIndex/Main';
import { WalletBuylink } from '../../components/PageIndex/Wallet';
import { BuyLinkPartner1 } from '../../components/PageIndex/BuylinkPartner1';
import { BuyLinkPartner2 } from '../../components/PageIndex/BuylinkPartner2';
import { BuyLinkPartner3 } from '../../components/PageIndex/BuylinkPartner3';
import { NewsLetter } from '../../components/PageIndex/NewsLetter';
import { Partner } from '../../components/PageIndex/Partner';
import Footer from '../../components/PageIndex/Footer';
import ModalQr from '../../components/PageIndex/ui/ModalQr';

export const isMobile = window.innerWidth <= 455;

const Index = () => {
  return (
    <>
      <div className="bg-white border-opacity-50  border-b w-full cursor-default   ">
        <div className="bg-white  container mx-auto   h-auto  cursor-default">
          <Header />
          <Main />
        </div>
      </div>

      <div className="bg-white ">
        <div className=" bg-white container mx-auto   h-auto  cursor-default    ">
          <Slider />

          <VideoSection />

          <WalletBuylink />
          <BuyLinkPartner1 />
        </div>
      </div>

      <div className="bg-white  py-20">
        <div className="  container   ">
          <BuyLinkPartner2 />{' '}
        </div>
      </div>
      <div className="bg-[#F3F4F6] py-20 ">
        <div className="  container  ">
          {' '}
          <BuyLinkPartner3 />{' '}
        </div>
      </div>

      <div className=" bg-[#4C5DF5]    ">
        <div className=" container    ">
          <Partner />
        </div>
      </div>
      <NewsLetter />
      <div className=" bg-[#F3F4F6] py-10 " >
        <ModalQr />
      <div className=" py-20 container  ">
          <Accordion />
        </div>
      </div>
      <div className="bg-[#000000DE] w-full  py-12">
        <Footer />
      </div>
    </>
  );
};

export default Index;
