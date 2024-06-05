import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';

import { FreeMode, Pagination } from 'swiper/modules';
import CardTeam from './CardTeam';

const TeamMember = () => {
  return (
    <>
      <div className="flex items-center justify-center flex-col h-screen container  mx-auto ">
        {/* <h2 className='text-center text-5xl text-primary '>Komanda <span className='text-primart'>üzvləri</span></h2> */}
        <Swiper
         slidesPerView={4}
         breakpoints={{
          345: {
            slidesPerView: 2,
            spaceBetween:15
          },
          700: {
            slidesPerView: 3,
            spaceBetween:10
          },
          992: {
            slidesPerView: 4,
            spaceBetween:20
          },
        
        }}
        freeMode={true}
          pagination={{
            dynamicBullets: true,
            clickable:true
          }}
          spaceBetween={10}
          modules={[Pagination, FreeMode]}
          className="mySwiper max-w-[95%] lg:max-w-[90%]"
          
        >
            <SwiperSlide>
              <CardTeam />
            </SwiperSlide>
            <SwiperSlide>
              <CardTeam />
            </SwiperSlide>
            <SwiperSlide>
              <CardTeam />
            </SwiperSlide>
            <SwiperSlide>
              <CardTeam />
            </SwiperSlide>
            <SwiperSlide>
              <CardTeam />
            </SwiperSlide>
            <SwiperSlide>
              <CardTeam />
            </SwiperSlide>
          
         
           
        
        
        
        </Swiper>
      </div>
    </>
  );
};

export default TeamMember;
