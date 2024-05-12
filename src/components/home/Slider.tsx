
import slide1 from '../../images/Pages-index/slider/slider1.svg';
import slide2 from '../../images/Pages-index/slider/slider2.svg';
import slide3 from '../../images/Pages-index/slider/slider3.svg';
import slide4 from '../../images/Pages-index/slider/slider4.svg';
import slide5 from '../../images/Pages-index/slider/slider5.svg';
import slide6 from '../../images/Pages-index/slider/slider6.svg';
import slide7 from '../../images/Pages-index/slider/slider7.svg';
import OwlCarousel from 'react-owl-carousel';




const Slider = () => {

  


 const options={
    loop: true,
    margin:20,
    nav:false,
    autoplay:true,
    autoplayTimeout:2000,
    responsive:{
        100:{
            items:1
        },
        
        300:{
          items:2
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
}
  
  
    
  return (
   
    <>
    
 
        <div  className='flex  !important z-[10] items-center  py-14 justify-between mx-auto max-w-[93%]'>
        <OwlCarousel  className='owl-theme text-center grid place-items-center' {...options} loop margin={10}  >
          <div className="item w-[137px] h-[17px]">
            <img
              className="hover:contrast-100 w-full h-full px-2 contrast-0"
              src={slide1}
              alt="OpenZeppelin "
            />
          </div>
          <div className="item w-[137px] h-[17px]">
          <img
              className="hover:contrast-100 w-full h-full px-2 contrast-0"
              src={slide2}
              alt="OpenZeppelin "
            />
          </div>
          <div className="item w-[137px] h-[17px]">
          <img
              className="hover:contrast-100 w-full h-full px-2 contrast-0"
              src={slide3}
              alt="OpenZeppelin "
            />
          </div>
          <div className="item w-[137px] h-[17px]">
          <img
              className="hover:contrast-100 w-full h-full px-2 contrast-0"
              src={slide4}
              alt="OpenZeppelin "
            />
          </div>
          <div className="item w-[137px] h-[17px]">
          <img
              className="hover:contrast-100 w-full h-full px-2 contrast-0"
              src={slide5}
              alt="OpenZeppelin "
            />
          </div>
          <div className="item w-[137px] h-[17px]">
          <img
              className="hover:contrast-100 w-full h-full px-2 contrast-0"
              src={slide6}
              alt="OpenZeppelin "
            />
          </div>
          <div className="item w-[137px] h-[17px]">
          <img
              className="hover:contrast-100 w-full h-full px-2 contrast-0"
              src={slide7}
              alt="OpenZeppelin "
            />
          </div>
          
          </OwlCarousel>

         
        </div>
  
      
    </>
  );
};

export default Slider;
