import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';
import s1 from '../../../images/Pages-index/slider/s1.svg';
import s2 from '../../../images/Pages-index/slider/s2.svg';
import s3 from '../../../images/Pages-index/slider/s3.svg';
import s4 from '../../../images/Pages-index/slider/s4.svg';
import s5 from '../../../images/Pages-index/slider/s5.svg';
import s6 from '../../../images/Pages-index/slider/s6.svg';
import s7 from '../../../images/Pages-index/slider/s7.svg';
import s8 from '../../../images/Pages-index/slider/s8.svg';
import s9 from '../../../images/Pages-index/slider/s9.svg';
import s10 from '../../../images/Pages-index/slider/s10.svg';

import s11 from '../../../images/Pages-index/slider/s11.svg';
import s12 from '../../../images/Pages-index/slider/s12.svg';
import s13 from '../../../images/Pages-index/slider/s13.svg';
import s14 from '../../../images/Pages-index/slider/s14.svg';
import s15 from '../../../images/Pages-index/slider/s15.svg';
import s16 from '../../../images/Pages-index/slider/s16.svg';
import s17 from '../../../images/Pages-index/slider/s17.svg';
import s18 from '../../../images/Pages-index/slider/s18.svg';
import s19 from '../../../images/Pages-index/slider/s19.svg';
import s20 from '../../../images/Pages-index/slider/s20.svg';
import { Autoplay } from 'swiper/modules';

interface Partner {
  id: number;
  image: string;
}

function Partnyor() {
  const [partners, setPartners] = useState<Partner[]>([]);

  useEffect(() => {
  
    const partnersData: Partner[] = [
      { id: 1, image: s1 },
      { id: 2, image: s2 },
      { id: 3, image: s3 },
      { id: 4, image: s4 },
      { id: 5, image: s5 },
      { id: 6, image: s6 },
      { id: 7, image: s7 },
      { id: 8, image: s8 },
      { id: 9, image: s9 },
      { id: 10, image: s10 },
      { id: 11, image: s11 },
      { id: 12, image: s12 },
      { id: 13, image: s13 },
      { id: 14, image: s14 },
      { id: 15, image: s15 },
      { id: 16, image: s16 },
      { id: 17, image: s17 },
      { id: 18, image: s18 },
      { id: 19, image: s19 },
      { id: 20, image: s20 },
  
    ];
    setPartners(partnersData);
  }, []);

  const settings = {
    slidesToShow: 9,
    initialSlide: 0,
    autoplay: true, 
    infinite: true, 
    speed:"700",
    autoplaySpeed: Autoplay,
    focusOnSelect: true,
    cssEase:'linear',
  
  
  
  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 9,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 5,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };



  return (
    <div className="slider-container border-t border-black border-opacity-20 overflow-hidden pt-10">
      <Slider {...settings}>
        {partners.map((partner: Partner, index: number) => (
          <div key={index} className=' '>
            <img className="h-17.5 w-auto mx-auto  "  src={partner.image} alt={`Partner ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Partnyor;
