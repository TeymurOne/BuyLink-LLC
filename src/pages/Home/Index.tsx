import Header from '../../components/home/layout/Header';

// import 'swiper/css';
// import 'swiper/css/pagination';
import './main.css';

import Slider from '../../components/home/Slider';
import VideoSection from '../../components/home/VideoSection';

import Accordion from '../../components/home/Accordion';
// import Footer from './Footer';

// import { BuyLinkPartner1 } from './BuylinkPartner1';
// import { BuyLinkPartner2 } from './BuylinkPartner2';
// import { BuyLinkPartner3 } from './BuylinkPartner3';
// import { WalletBuylink } from './Wallet';
// import { Partner } from './Partner';
// import { NewsLetter } from './NewsLetter';
import { Main } from '../../components/PageIndex/Main';
import { WalletBuylink } from '../../components/home/Wallet';
import { BuyLinkPartner1 } from '../../components/home/BuylinkPartner1';
import { BuyLinkPartner2 } from '../../components/home/BuylinkPartner2';
import { BuyLinkPartner3 } from '../../components/home/BuylinkPartner3';
import { NewsLetter } from '../../components/PageIndex/NewsLetter';
import { Partner } from '../../components/home/Partner';
import Footer from '../../components/home/layout/Footer';
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
