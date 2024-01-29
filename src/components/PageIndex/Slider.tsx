
import slide1 from '../../images/pageLand/slide1.svg';
import slide2 from '../../images/pageLand/slide2.svg';
import slide3 from '../../images/pageLand/slide3.svg';
import slide4 from '../../images/pageLand/slide4.svg';
import slide5 from '../../images/pageLand/slide5.svg';
import slide6 from '../../images/pageLand/slide6.svg';
import slide7 from '../../images/pageLand/slide7.svg';


const Slider = () => {
  
    
  return (
   
    <>
     
        <div  className='flex items-center py-14 justify-between mx-auto max-w-[140px]'>
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
              className="hover:contrast-100 w-full h-ful px-2 contrast-0"
              src={slide7}
              alt="OpenZeppelin "
            />
          </div>
         
        </div>
  
      
    </>
  );
};

export default Slider;
