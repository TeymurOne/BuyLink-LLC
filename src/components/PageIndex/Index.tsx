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
import apple from '../../images/pageLand/apple.svg';

import play from '../../images/pageLand/play.cvg.svg';

import partnerLogo from '../../images/pageLand/mask.svg';
import Accordion from './Accordion';
import Footer from './Footer';
import { Link } from 'react-router-dom';
export const isMobile = window.innerWidth <= 455;

const Index = () => {
  return (
    <>
      <div className="bg-white ">
        <div className="bg-white max-w-[1450px]  mx-auto h-auto  cursor-pointer">
          <Header />
          <Main />
        </div>
      </div>

      <div className="bg-[#F3F4F6] px-4">
        <div className="max-w-[1450px] mx-auto">
          <Slider />

          <VideoSection />

          <WalletBuylink />
          <BuyLinkPartner />
        </div>
      </div>

      <div className="bg-white  py-20">
        <div className="max-w-[1450px] px-4 mx-auto">
          <BuyLinkPartner2 />
        </div>
      </div>
      <div className="bg-[#F3F4F6] py-20 ">
        <div className="max-w-[1450px] px-4 mx-auto">
          <BuyLinkPartner3 />
        </div>
      </div>

      <div className=" bg-[#4C5DF5]   ">
        <div className="max-w-[1450px]  mx-auto">
          <Partner />
        </div>
      </div>
      <NewsLetter />
      <div className=" bg-[#F3F4F6] py-10 ">
        <div className="max-w-[1450px] py-20 mx-auto">
          <Accordion />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;

function Main() {
  return (
    <>
      <div className="  py-5 lg:px-2 md:pl-6 px-2   flex md:flex-row flex-col items-center ">
        <div className="max-w-[600px] md:text-justify text-center  w-full flex flex-col justify-between">
          <h2 className=" font-manrope  xl:text-[2.875em] lg:text-[2.875em] text-[32px] 992px:text-[40px]   leading-10 font-bold text-black-2">
            <span className="text-[#4C5DF5]">BuyLink</span> is the world first
            digital referral network{' '}
          </h2>
          <p className="lg:text-[24px] text-[20px] py-4">
            Our mission is to connect people in one referral social network
            where they are able to get actual benefits from recommendations.
          </p>

          <div className="flex md:flex-row flex-col items-center space-y-4 md:space-y-0 md:space-x-8 ">
            <Link
              to=""
              className="bg-black-2 h-[61px] grid place-items-center   w-[188px]"
            >
              <div className="h-[60px] flex items-center space-x-1  ">
                <img
                  src={apple}
                  alt="Apple icon"
                  className="w-[21px] h-[25px]"
                />
                <span className="flex flex-col mb-[10px]  text-white">
                  <p className="text-[10px]">Download on the</p>
                  <p className="text-[19px] mt-[-12px] font-medium">
                    App Store
                  </p>
                </span>
              </div>
            </Link>
            <Link
              to=""
              className="bg-black-2 h-[61px] grid place-items-center   w-[188px]"
            >
              <div className="h-[60px] flex items-center space-x-1  ">
                <img
                  src={play}
                  alt="Apple icon"
                  className="w-[23px] h-[32px]"
                />
                <span className="flex flex-col mb-[13px]   text-white">
                  <p className="text-[10px]  font-thin">Get it on</p>
                  <p className="text-[19px]  mt-[-13px] font-medium">
                    Google Play
                  </p>
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={main}
            className=" h-[300px] lg:h-[500px] object-contain w-[800px]"
            alt="Main"
          />
        </div>
      </div>
    </>
  );
}

function WalletBuylink() {
  return (
    <>
      <section>
        <div className=" flex  justify-between lg:space-x-4 md:space-x-4 space-x-0 lg:py-14 py-6 xl:px-0 flex-col md:flex-col lg:flex-row">
          <div className=" lg:pl-10 pl-0   max-w-[518px]   " id="walletBuylink">
            <img
              className=" w-full h-[307px] object-contain    rounded-xl "
              src={card1}
              alt="Buynet wallet img"
            />
          </div>

          <div className="     max-w-[798px] w-full         text-black  ">
            <div className="lg:text-start text-center">
              <h2 className="font-manrope   lg:text-[40px] md:text-[30px] text-[20px] leading-6    lg:leading-8    text-black font-semibold">
                BuyLink Wallet - serves as a savings for your
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
                  See you network recommendations in referral page
                </h2>
              </div>

              <p className="font-poppins pt-4 lg:pt-2 opacity-70   md:text-start  text-center leading-[1.9] lg:text-[12px] text-[14px]   text-[#000000ad] font-medium">
                See all posts that you network share, and chooseone that
                interests you
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
                Here you can see all rederral links from different users for
                different partners
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
                When you show you Qr code you get discount for you purchases
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
                <div className="max-w-[225px] h-[590px] w-full ">
                  <img
                    className="w-full h-full object-contain"
                    src={iphone15plus}
                    alt="Iphone2"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="max-w-[225px] h-[590px] w-full  ">
                  <img
                    className="w-full h-full object-contain"
                    src={black}
                    alt="Iphone4"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="max-w-[225px] h-[590px] w-full  ">
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
            <div className="w-[300px] h-[590px]">
              <img
                className="w-full h-full "
                src={iphone15plus}
                alt="Iphone2"
              />
            </div>
            <div className="w-[280px] h-[590px]">
              <img
                className="w-full h-full object-cover"
                src={black}
                alt="Iphone4"
              />
            </div>
            <div className="w-[280px] h-[590px]">
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
      <div className=" w-full flex pl-2 items-center justify-between    ">
        <div className="flex flex-col md:items-start  items-center md:space-y-4  space-y-2 w-[636px] h-[267px] ">
          <h2 className="font-manrope text-center lg:text-start lg:text-4xl text-3xl normal font-bold text-[#F3F2F2]">
            Become a partner
          </h2>
          <p className="text-[#F3F2F2] text-center lg:text-start md:leading-6 leading-4  lg:text-[20px] text-[10px] font-poppins font-normal">
            Risus habitant leo egestas mauris diam eget morbi tempus vulputate.
          </p>
          <button className="rounded-md text-[#4C5DF5] font-semibold bg-[#ffffffd9] w-[154px] h-[68px]">
            Join now
          </button>
        </div>
        <div className="hidden lg:block ">
          <img src={partnerLogo} className="object-contain h-[400px]" alt="" />
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
