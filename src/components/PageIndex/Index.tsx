import Header from './Header';

import 'swiper/css';
import 'swiper/css/pagination';
import './Main.css';

import Slider from './Slider';
import VideoSection from './VideoSection';

import Accordion from './Accordion';
import Footer from './Footer';

import { BuyLinkPartner1 } from './BuylinkPartner1';
import { BuyLinkPartner2 } from './BuylinkPartner2';
import { BuyLinkPartner3 } from './BuylinkPartner3';
import { WalletBuylink } from './Wallet';
import { Main } from './Main';
import { Partner } from './Partner';
import { NewsLetter } from './NewsLetter';
export const isMobile = window.innerWidth <= 455;

const Index = () => {
  return (
    <>
      <div className="bg-white   ">
        <div className="bg-white custom-con px-6 lg:px-4 md:px-0   h-auto  cursor-default">
          <Header />
          <Main />
        </div>
      </div>

      <div className="bg-[#F3F4F6] ">
        <div className="  custom-con px-6 lg:px-4 md:px-0     ">
          <Slider />

          <VideoSection />

          <WalletBuylink />
          <BuyLinkPartner1 />
        </div>
      </div>

      <div className="bg-white  py-20">
        <div className="  custom-con px-6 lg:px-4 md:px-0   ">
          <BuyLinkPartner2 />{' '}
        </div>
      </div>
      <div className="bg-[#F3F4F6] py-20 ">
        <div className="  custom-con px-2 lg:px-4 md:px-0   ">
          {' '}
          <BuyLinkPartner3 />{' '}
        </div>
      </div>

      <div className=" bg-[#4C5DF5]    ">
        <div className=" custom-con px-6 lg:px-4 md:px-0    ">
          <Partner />
        </div>
      </div>
      <NewsLetter />
      <div className=" bg-[#F3F4F6] py-10 " id="faq">
        <div className=" py-20 custom-con   ">
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
