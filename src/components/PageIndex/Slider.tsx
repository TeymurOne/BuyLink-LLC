
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
     
        <div  className='flex items-center xl:py-20 md:py-16 py-10 justify-between mx-auto max-w-[1240px]'>
          <div className="item">
            <img
              className="hover:contrast-100 px-2 contrast-0"
              src={slide1}
              alt="OpenZeppelin "
            />
          </div>
          <div className="item">
          <img
              className="hover:contrast-100 px-2 contrast-0"
              src={slide2}
              alt="OpenZeppelin "
            />
          </div>
          <div className="item">
          <img
              className="hover:contrast-100 px-2 contrast-0"
              src={slide3}
              alt="OpenZeppelin "
            />
          </div>
          <div className="item">
          <img
              className="hover:contrast-100 px-2 contrast-0"
              src={slide4}
              alt="OpenZeppelin "
            />
          </div>
          <div className="item">
          <img
              className="hover:contrast-100 px-2 contrast-0"
              src={slide5}
              alt="OpenZeppelin "
            />
          </div>
          <div className="item">
          <img
              className="hover:contrast-100 px-2 contrast-0"
              src={slide6}
              alt="OpenZeppelin "
            />
          </div>
          <div className="item">
          <img
              className="hover:contrast-100 px-2 contrast-0"
              src={slide7}
              alt="OpenZeppelin "
            />
          </div>
         
        </div>
  
      
    </>
  );
};

export default Slider;
