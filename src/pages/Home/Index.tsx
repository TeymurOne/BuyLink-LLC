import Header from '../../components/home/layout/Header';
import './main.css';
import VideoSection from '../../components/home/VideoSection';
import Accordion from '../../components/home/Accordion';
import { Main } from '../../components/PageIndex/Main';
import { WalletBuylink } from '../../components/home/Wallet';
import { BuyLinkPartner1 } from '../../components/home/BuylinkPartner1';
import { BuyLinkPartner2 } from '../../components/home/BuylinkPartner2';
import { BuyLinkPartner3 } from '../../components/home/BuylinkPartner3';
import { NewsLetter } from '../../components/PageIndex/NewsLetter';
import { Partner } from '../../components/home/Partner';
import Footer from '../../components/home/layout/Footer';
import ModalQr from '../../components/PageIndex/ui/ModalQr';
import Partnyor from '../../components/home/slider/Partnyor';

export const isMobile = window.innerWidth <= 455;

const Index = () => {
  return (
    <>
      <div className="bg-white  w-full cursor-default   ">
        <div className="bg-white  container lg:px-16 md:px-10 px-4 mx-auto   h-auto  cursor-default">
          <Header />
          <Main />
        </div>
      </div>

      <div className="bg-white w-full ">
        <Partnyor />

        <div className="  container  bg-white lg:px-16 md:px-4 px-4 mx-auto    h-auto  cursor-default    ">
          <VideoSection />

          <WalletBuylink />
          <BuyLinkPartner1 />
        </div>
      </div>

      <div className="bg-[#F8F8F8]  py-20">
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
     <div className='bg-white py-10'>
     <NewsLetter />
     </div>
   
        <ModalQr />
        <div className=" py-20 bg-white container  ">
          <Accordion />
      </div>
      <div className="bg-[#000000DE] w-full  py-12">
        <Footer />
      </div>
    </>
  );
};

export default Index;
