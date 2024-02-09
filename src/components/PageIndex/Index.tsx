import Header from './Header';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import cube from '../../images/pageLand/cube.svg';

import { Pagination } from 'swiper/modules';

import dollar from '../../images/pageLand/dollar.svg';
import money from '../../images/pageLand/money.svg';
import info from '../../images/pageLand/info.svg';

import Slider from './Slider';
import VideoSection from './VideoSection';

import iphone4 from '../../images/pageLand/iphone4.png';
import iphone5 from '../../images/pageLand/iphone5.png';
import iphone6 from '../../images/pageLand/iphone6.png';

import gosupport from '../../images/pageLand/gosport.png';
import user from '../../images/pageLand/user.png';
import wallet2 from '../../images/pageLand/wallet2.png';

import iphone15plus from '../../images/pageLand/15plus.png';
import mock from '../../images/pageLand/iphonemock.png';
import black from '../../images/pageLand/black.png';

import main from '../../images/pageLand/main.png';
import card1 from '../../images/pageLand/card1.png';


import partnerLogo from '../../images/pageLand/mask.svg';
import Accordion from './Accordion';
import Footer from './Footer';
export const isMobile = window.innerWidth <= 455;

const Index = () => {
  return (
    <div  className='w-full'>
      <div className="w-full h-auto px-4 max-w-[1500px] mx-auto    cursor-pointer">
    
         <HeadMainVideo />
        <WalletBuylink />
        <BuyLinkPartner />
    
      </div>

      <div className=" bg-white  w-full px-4  ">
        <div className=" py-10 max-w-[1500px] mx-auto  ">
          <BuyLinkPartner2 />
        </div>
      </div>
      <div className=" bg-[#F3F4F6] py-10 ">
        <div className="max-w-[1400px] px-4 mx-auto">
          <BuyLinkPartner3 />
        </div>
      </div>
      <div className=" bg-[#4C5DF5]  ">
        <Partner />
      </div>
      <NewsLetter />
      <div className=" bg-[#F3F4F6] py-10 ">
        <div className="max-w-[1500px] py-20 mx-auto">
          <Accordion />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;

function HeadMainVideo() {
  return (
    <>
      <div className="w-full bg-[#F3F4F6] h-auto      cursor-pointer">
        <Header />
        <div className="py-2 ">
          <img src={main} className="h-full w-full" alt="Main" />
        </div>

        <Slider />
        <VideoSection />
      </div>
    </>
  );
}

function WalletBuylink() {
  return (
    <>
      <section >
        <div className=" flex  justify-between lg:space-x-4 md:space-x-4 space-x-0 py-14 xl:px-0 flex-col md:flex-col lg:flex-row">
          <div className="  w-full   max-w-[610px] " id="walletBuylink">
            <img
              className=" w-full h-[300px] object-contain   rounded-xl "
              src={card1}
              alt="Buynet wallet img"
            />
          </div>

          <div className="    max-w-[778px] w-full         text-black  ">
            <div className="lg:text-start text-center">
              <h2 className="font-manrope    lg:text-[2.65em] xl:text-[2.65em] text-[1.75em]   leading-10    text-black font-bold">
                BuyLink Wallet - serves as a savings for you
                <span className="text-[#4C5DF5]"> bonuses and rewards</span>
              </h2>

              <p className="lg:text-[20px] text-[14px] lg:leading-6 leading-4  font-medium py-4 normal font-poppins">
                This is the easisest way to manege your payments
              </p>
            </div>
            <div
              className=" grid lg:grid-cols-2 2xsm:mx-auto w-full lg:mx-0   lg:w-full sm:grid-cols-2 grid-cols-1 place-content-center   gap-y-2     font-manrope normal font-medium text-[#000000ad]"
              id="payments"
            >
              <div className="flex space-x-4   items-center w-full max-w-[300px]  ">
                <img
                  className="w-[37px] h-[37px] "
                  src={dollar}
                  alt="Group 155"
                />
                <p>Cash withdrawals</p>
              </div>
              <div className="flex items-center space-x-4">
                <img
                  className="w-[37px] h-[37px]"
                  src={money}
                  alt="Group 155"
                />
                <p>Saving of rewerads</p>
              </div>
              <div className="flex items-center space-x-4">
                <img className="w-[37px] h-[37px]" src={info} alt="Group 155" />
                <p>Payment via wallet at our partner </p>
              </div>
              <div className="flex items-center space-x-4">
                <img
                  className="w-[37px] h-[37px]"
                  src={dollar}
                  alt="Group 155"
                />
                <p>New feature is in progress</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function BuyLinkPartner() {
  return (
    <>
      <section>
        <div
          className="flex flex-col lg:items-center  items-stretch text-center"
          id="buylinkpartner"
        >
          <div className="space-y-4 ">
            <h2 className="font-manrope  lg:text-[40px] text-[30px]   leading-0    sm:leading-8  text-black font-bold">
              Explore new
              <span className="text-[#4C5DF5]"> users and partners</span>
            </h2>
            <p className="lg:text-[20px] text-[15px] pb-[2em] leading-[1.7]">
              End-to-end payments and financial management in a single solution.
              Meet the right platform to <br /> help realize.
            </p>
          </div>
          <div className="w-[83%] grid lg:grid-cols-3 500px:grid-cols-2 md:grid-cols-2 grid-cols-1">
            <div className="pt-4 w-full max-w-[280px]">
              <div className="flex items-center  space-x-6 lg:space-x-2 ">
                <img src={cube} alt="w-[20px] h-[28px]" />

                <h2 className="font-manrope   lg:text-[17px]  500px:text-[11px]   md:text-[14px]  992px:text-[16px]  text-[20px]       text-black font-bold">
                  Explore Our partners
                </h2>
              </div>

              <p className="font-poppins pt-4 lg:pt-2 opacity-70   md:text-start  text-center leading-[1.9] lg:text-[12px] text-[14px]   text-[#000000ad] font-medium">
                Meet our list of partnes at our homepage
              </p>
            </div>
            <div className="pt-4  w-full max-w-[280px]">
              <div className="flex items-center   space-x-2 ">
                <img src={cube} alt="w-[20px] h-[28px]" />

                <h2 className="font-manrope text-[20px]   lg:text-[17px] 500px:text-[11px]    md:text-[14px]  992px:text-[16px]        text-black font-bold">
                  Add People to your Network
                </h2>
              </div>

              <p className="font-poppins pt-4 lg:pt-2 opacity-70   md:text-start  text-center leading-[1.9] lg:text-[12px] text-[14px]   text-[#000000ad] font-medium">
                Use search to find your friends and new users. Add them, and
                start to recommend each other
              </p>
            </div>
            <div className="pt-4  w-full max-w-[280px]">
              <div className="flex items-center   space-x-2 ">
                <img src={cube} alt="w-[20px] h-[28px]" />

                <h2 className="font-manrope  text-[20px]  500px:text-[11px]   lg:text-[17px]  md:text-[14px]  992px:text-[16px]      text-black font-bold">
                  Explore different categories
                </h2>
              </div>

              <p className="font-poppins pt-4 pb-6  lg:pt-2 opacity-70   md:text-start  text-center leading-[1.9] lg:text-[12px] text-[14px]   text-[#000000ad] font-medium">
                Here you can find different industries,choose any that you
                areasasa interested in
              </p>
            </div>
          </div>
        </div>
        {isMobile ? (
          <Swiper
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <div className="flex items-center  space-x-4 justify-center pt-20">
              <SwiperSlide>
                <div className="max-w-[225px] pb-2 h-[390px] w-full ">
                  <img
                    className="w-full h-full object-contain"
                    src={gosupport}
                    alt="Iphone2"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="max-w-[225px] pb-2 h-[390px] w-full  ">
                  <img
                    className="w-full h-full object-contain"
                    src={user}
                    alt="Iphone4"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="max-w-[225px] pb-2 h-[390px] w-full  ">
                  <img
                    className="w-full h-full object-contain"
                    src={wallet2}
                    alt="Iphone2"
                  />
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        ) : (
          <div className="flex items-center  space-x-4 justify-center pt-20">
            <div className="w-[300px] h-[490px]">
              <img
                className="w-full h-full object-contain"
                src={iphone4}
                alt="Iphone2"
              />
            </div>
            <div className="w-[280px] h-[490px]">
              <img
                className="w-full h-full object-contain"
                src={iphone5}
                alt="Iphone4"
              />
            </div>
            <div className="w-[280px] h-[490px]">
              <img
                className="w-full h-full object-contain"
                src={iphone6}
                alt="Iphone2"
              />
            </div>
          </div>
        )}
      </section>
    </>
  );
}
function BuyLinkPartner2() {
  return (
    <>
      <section>
        <div
          className="flex flex-col lg:items-center  items-stretch text-center"
          id="buylinkpartner"
        >
          <div className="space-y-4 ">
            <h2 className="font-manrope  lg:text-[40px] text-[30px]   leading-0    sm:leading-8  text-black font-bold">
              Get cash
              <span className="text-[#4C5DF5]"> in 3 steps</span>
            </h2>
            <p className="lg:text-[20px] text-[15px] pb-[2em] leading-[1.7]">
              End-to-end payments and financial management in a single solution.
              Meet the right platform to <br /> help realize.
            </p>
          </div>
          <div className="w-[83%] grid lg:grid-cols-3 500px:grid-cols-2 md:grid-cols-2 grid-cols-1">
            <div className="pt-4 w-full max-w-[280px]">
              <div className="flex items-center  space-x-6 lg:space-x-2 ">
                <img src={cube} alt="w-[20px] h-[28px]" />

                <h2 className="font-manrope   lg:text-[17px]  500px:text-[11px]   md:text-[14px]  992px:text-[16px]  text-[20px]       text-black font-bold">
                  Enter to partner page
                </h2>
              </div>

              <p className="font-poppins pt-4 lg:pt-2 opacity-70   md:text-start  text-center leading-[1.9] lg:text-[12px] text-[14px]   text-[#000000ad] font-medium">
                Explore menu / catalogue of partner. With list of products of
                services, prices, discounts, and referral cashbacks
              </p>
            </div>
            <div className="pt-4  w-full max-w-[340px]">
              <div className="flex items-center   space-x-2 ">
                <img src={cube} alt="w-[20px] h-[28px]" />

                <h2 className="font-manrope text-[20px]   lg:text-[17px] 500px:text-[11px]    md:text-[14px]  992px:text-[16px]        text-black font-bold">
                  Share referral link to your network
                </h2>
              </div>

              <p className="font-poppins pt-4 lg:pt-2 opacity-70   md:text-start  text-center leading-[1.9] lg:text-[12px] text-[14px]   text-[#000000ad] font-medium">
                In partner page you can recommend this business to your network
                via chat on share on post
              </p>
            </div>
            <div className="pt-4  w-full max-w-[340px]">
              <div className="flex items-center   space-x-2 ">
                <img src={cube} alt="w-[20px] h-[28px]" />

                <h2 className="font-manrope  text-[20px]  500px:text-[11px]   lg:text-[17px]  md:text-[14px]  992px:text-[16px]      text-black font-bold">
                  Go to wallet and check you balance
                </h2>
              </div>

              <p className="font-poppins pt-4 pb-6  lg:pt-2 opacity-70   md:text-start  text-center leading-[1.9] lg:text-[12px] text-[14px]   text-[#000000ad] font-medium">
                After your network use your referral link , you again rewards ,
                and can check your balance in wallet page
              </p>
            </div>
          </div>
        </div>
        {isMobile ? (
          <Swiper
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <div className="flex items-center  space-x-4 justify-center ">
              <SwiperSlide>
                <div className="max-w-[225px] h-[390px] w-full ">
                  <img
                    className="w-full h-full object-contain"
                    src={gosupport}
                    alt="Iphone2"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="max-w-[225px] h-[390px] w-full  ">
                  <img
                    className="w-full h-full object-contain"
                    src={user}
                    alt="Iphone4"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="max-w-[225px] h-[390px] w-full  ">
                  <img
                    className="w-full h-full object-contain"
                    src={wallet2}
                    alt="Iphone2"
                  />
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        ) : (
          <div className="flex items-center  space-x-4 justify-center ">
            <div className="w-[300px] h-[490px]">
              <img
                className="w-full h-full object-contain"
                src={gosupport}
                alt="Iphone2"
              />
            </div>
            <div className="w-[280px] h-[490px]">
              <img
                className="w-full h-full object-contain"
                src={user}
                alt="Iphone4"
              />
            </div>
            <div className="w-[280px] h-[490px]">
              <img
                className="w-full h-full object-contain"
                src={wallet2}
                alt="Iphone2"
              />
            </div>
          </div>
        )}
      </section>
    </>
  );
}
function BuyLinkPartner3() {
  return (
    <>
      <section>
        <div
          className="flex flex-col lg:items-center  items-stretch text-center"
          id="buylinkpartner"
        >
          <div className="space-y-4 ">
            <h2 className="font-manrope  lg:text-[40px] text-[30px]   leading-0    sm:leading-8  text-black font-bold">
              How to get
              <span className="text-[#4C5DF5]"> discount</span>
            </h2>
            <p className="lg:text-[20px] text-[15px] pb-[2em] leading-[1.7]">
              End-to-end payments and financial management in a single solution.
              Meet the right platform to <br /> help realize.
            </p>
          </div>
          <div className="w-[90%] grid lg:grid-cols-3 500px:grid-cols-2 md:grid-cols-2 grid-cols-1">
            <div className="pt-4 w-full max-w-[340px]">
              <div className="flex items-center   lg:space-x-2 ">
                <img src={cube} alt="w-[20px] h-[28px]" />

                <h2 className="font-manrope   lg:text-[17px] lg:text-start text-center md:text-start  500px:text-[11px]   md:text-[14px]  992px:text-[16px]  text-[20px]       text-black font-bold">
                  See you  network recommendations in referral  page
                </h2>
              </div>

              <p className="font-poppins pt-4 lg:pt-2 opacity-70   md:text-start  text-center leading-[1.9] lg:text-[12px] text-[14px]   text-[#000000ad] font-medium">
                See all posts that you network share, and chooseone that interests you
              </p>
            </div>
            <div className="pt-4  w-full max-w-[280px]">
              <div className="flex items-center   space-x-2 ">
                <img src={cube} alt="w-[20px] h-[28px]" />

                <h2 className="font-manrope text-[20px]   lg:text-[17px] 500px:text-[11px]    md:text-[14px]  992px:text-[16px]        text-black font-bold">
                  Add referral link to Qr Basket
                </h2>
              </div>

              <p className="font-poppins pt-4 lg:pt-2 opacity-70   md:text-start  text-center leading-[1.9] lg:text-[12px] text-[14px]   text-[#000000ad] font-medium">
                Here you can see all rederral links from different users for different partners
              </p>
            </div>
            <div className="pt-4  w-full max-w-[320px]">
              <div className="flex items-center   space-x-2 ">
                <img src={cube} alt="w-[20px] h-[28px]" />

                <h2 className="font-manrope  text-[20px]  500px:text-[11px]   lg:text-[17px]  md:text-[14px]  992px:text-[16px]      text-black font-bold">
                  Show qr code and get discount
                </h2>
              </div>

              <p className="font-poppins pt-4 pb-6  lg:pt-2 opacity-70   md:text-start  text-center leading-[1.9] lg:text-[12px] text-[14px]   text-[#000000ad] font-medium">
               When you show you Qr code you get discount  for you purchases
              </p>
            </div>
          </div>
        </div>
        {isMobile ? (
          <Swiper
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <div className="flex items-center  space-x-4 justify-center ">
              <SwiperSlide>
                <div className="max-w-[225px] h-[390px] w-full ">
                  <img
                    className="w-full h-full object-contain"
                    src={iphone15plus}
                    alt="Iphone2"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="max-w-[225px] h-[390px] w-full  ">
                  <img
                    className="w-full h-full object-contain"
                    src={black}
                    alt="Iphone4"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="max-w-[225px] h-[390px] w-full  ">
                  <img
                    className="w-full h-full object-contain"
                    src={mock}
                    alt="Iphone2"
                  />
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        ) : (
          <div className="flex items-center  space-x-4 justify-center ">
            <div className="w-[270px] h-[490px]">
              <img
                className="w-full h-full "
                src={iphone15plus}
                alt="Iphone2"
              />
            </div>
            <div className="w-[280px] h-[490px]">
              <img className="w-full h-full " src={black} alt="Iphone4" />
            </div>
            <div className="w-[280px] h-[490px]">
              <img className="w-full h-full " src={mock} alt="Iphone2" />
            </div>
          </div>
        )}
      </section>
    </>
  );
}

function Partner() {
  return (
    <>
      <div className="max-w-[1400px] mx-auto w-full flex items-center justify-between     h-[460px]">
        <div className="flex flex-col items-center lg:items-start w-[70%]      justify-between lg:w-[40%]  h-[180px] 2xl:h-[220px]   ml-14 lg:h-[220px]">
          <h2 className="font-manrope text-center lg:text-start lg:text-5xl text-3xl normal font-bold text-[#F3F2F2]">
            Become a parthner
          </h2>
          <p className="text-[#F3F2F2] text-center lg:text-start  lg:text-[23px] text-[10px] font-poppins font-normal">
            Risus habitant leo egestas mauris diam eget morbi tempus vulputate.
          </p>
          <button className="rounded-md text-[#4C5DF5] font-semibold bg-[#ffffffd9] w-[154px] h-[68px]">
            Join now
          </button>
        </div>
        <div className="hidden lg:block ">
          <img src={partnerLogo} className="object-contain" alt="" />
        </div>
      </div>
    </>
  );
}

function NewsLetter() {
  return (
    <section className="py-10 text-center">
      <h2 className="font-manrope  lg:text-[40px] text-[27px]      leading-8  text-black font-bold">
        Join our <span className="text-[#4C5DF5]">newsletter</span>
      </h2>
      <p className="lg:text-2xl text-sm font-light font-grotesk text-[#1C1C1C]">
        Will send you weekly updates for your better finance management.
      </p>

      <div className=" mt-10 space-y-4 lg:space-x-4  space-x-0  px-4">
        <input
          className="border-2 border-opacity-60  px-[35px] outline-none  border-[#979797] rounded-[14px] max-w-[511px] w-full h-[57px]"
          type="text"
          placeholder="Your email adress"
        />
        <button className="bg-[#4C5DF5]  rounded-2xl text-white text-[16px] max-w-[500px] w-full  lg:w-[152px]     h-[60px]">
          Join now
        </button>
      </div>
    </section>
  );
}
