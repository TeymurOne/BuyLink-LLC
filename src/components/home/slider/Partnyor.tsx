import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';
import s1 from '../../../images/Pages-index/slider/slider1.svg';
import s2 from '../../../images/Pages-index/slider/slider2.svg';
import s3 from '../../../images/Pages-index/slider/slider3.svg';
import s4 from '../../../images/Pages-index/slider/slider4.svg';
import s5 from '../../../images/Pages-index/slider/slider5.svg';
import s6 from '../../../images/Pages-index/slider/slider6.svg';
import s7 from '../../../images/Pages-index/slider/slider7.svg';
import s8 from '../../../images/Pages-index/slider/slider8.svg';
import s9 from '../../../images/Pages-index/slider/slider9.svg';

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
      { id: 10, image: s1 },
      { id: 11, image: s2 },
      { id: 12, image: s3 },
      { id: 13, image: s4 },
      { id: 14, image: s5 },
      { id: 15, image: s6 },
      { id: 16, image: s7 },
      { id: 17, image: s8 },
      { id: 18, image: s9 },
    ];
    setPartners(partnersData);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed:3000,
    autoplay: true,
    autoplaySpeed: 700,
    slidesToShow: 9,
    slidesToScroll: 4,
    initialSlide: 0,
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
          infinite: true,
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
    <div className="slider-container overflow-hidden pt-10">
      <Slider {...settings}>
        {partners.map((partner: Partner, index: number) => (
          <div key={index}  >
            <img className="lg:h-22 lg:w-22 h-18 w-18 " src={partner.image} alt={`Partner ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Partnyor;
