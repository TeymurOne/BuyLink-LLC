import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';
import axiosInstance from '../../../core/lib/axios.config';

function Partnyor() {
  const [sliderData, setSliderData] = useState([]);
  
  useEffect(() => {
    const fetchSliderData = async () => {
      try {
        const response = await axiosInstance('/partner-logos');
        setSliderData(response?.data);
      } catch (error) {
        console.error('Error fetching slider data:', error);
      }
    };

    fetchSliderData();
  }, []);

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container overflow-hidden pt-10">
      <Slider {...settings}>
        {sliderData.data?.map((item, index) => (
          <div className="" key={index}>
            <img
              className=" h-[70px]"
              src={item?.image}
              alt=""
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Partnyor;
