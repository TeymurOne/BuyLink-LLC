import Accordion from './Accordion';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import plusIphene1 from '../../images/pageLand/15 Plus.svg';
import plusIphone2 from '../../images/pageLand/15 Plus (1).svg';
import iphone3 from '../../images/pageLand/iphone3.svg';
import iphone4 from '../../images/pageLand/iphone4.svg';
import cube from '../../images/pageLand/cube-02.svg';

const Index = () => {
  return (
    <>
      <div className="w-full h-auto  bg-[#EFEDED] cursor-pointer">
        <Header />
        <Main />
        <section className=' ellips-coder '>
          <div className="gap-16  py-8 px-2 mx-auto max-w-[1370px] lg:grid lg:grid-cols-2 lg:py-16 lg:px-2">
            <div className="font-light  sm:text-lg h-full">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-[#000000de] dark:text-white ">
                Explore new users and parthners
              </h2>
              <div className="flex space-x-2">
                <img src={cube} alt="" />
                <h6 className="text-[18px] font-bold  text-[#000000de]">
                  Oznajomtes s nashimi partnerami
                </h6>
              </div>
              <p className="mb-4 text-[24px] font-normal font-poppins">
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                porttitor.
              </p>
              <div className="flex space-x-2">
                <img src={cube} alt="" />
                <h6 className="text-[18px] font-bold  text-[#000000de]">
                  Oznajomtes s nashimi partnerami
                </h6>
              </div>
              <p className="mb-4 text-[24px] font-normal font-poppins">
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                porttitor.
              </p>
              <button className="w-[200px]  h-[60px] bg-[#000000DE] text-white rounded">
                Try it now
              </button>

            </div>
            <div className="grid grid-cols-2 gap-4  lg:mt-[-10px] mt-8 ">
              <img
                className="w-full lg:mt-12 rounded-lg"
                src={plusIphene1}
                alt="office content 1"
              />
              <img
                className="mt-4 w-full  rounded-lg"
                src={plusIphone2}
                alt="office content 2"
              />
            </div>
            
          </div>
        </section>

        <section className='mx-auto max-w-[1370px]' id='how-use'>
          <div className="gap-16 items-center py-8 px-2 mx-auto max-w-[1370px] lg:grid lg:grid-cols-2 lg:py-16 lg:px-2">
          <div className="grid grid-cols-2 gap-4 mt-8  ">
              <img
                className="w-full rounded-lg"
                src={iphone3}
                alt="office content 1"
              />
              <img
                className="mt-4 w-full lg:mt-12 rounded-lg "
                src={iphone4}
                alt="office content 2"
              />
            </div>
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400   ">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-[#000000de] dark:text-white ">
                Explore new users and parthners
              </h2>
              <div className="flex space-x-2">
                <img src={cube} alt="" />
                <h6 className="text-[18px] font-bold  text-[#000000de]">
                  Oznajomtes s nashimi partnerami
                </h6>
              </div>
              <p className="mb-4 text-[24px] font-normal font-poppins">
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                porttitor.
              </p>
              <div className="flex space-x-2">
                <img src={cube} alt="" />
                <h6 className="text-[18px] font-bold  text-[#000000de]">
                  Oznajomtes s nashimi partnerami
                </h6>
              </div>
              <p className="mb-4 text-[24px] font-normal font-poppins">
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                porttitor.
              </p>
              <button className="w-[200px]  h-[60px] bg-[#000000DE] text-white rounded">
                Try it now
              </button>

            </div>
         
          </div>
        </section>

    

        <section className='mx-auto max-w-[1370px] ' id='features'>
          <div className="gap-16  py-8 px-2 mx-auto max-w-[1370px] lg:grid lg:grid-cols-2 lg:py-16 lg:px-2">
            <div className="font-light  sm:text-lg h-full">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-[#000000de] dark:text-white ">
                Explore new users and parthners
              </h2>
              <div className="flex space-x-2">
                <img src={cube} alt="" />
                <h6 className="text-[18px] font-bold  text-[#000000de]">
                  Oznajomtes s nashimi partnerami
                </h6>
              </div>
              <p className="mb-4 text-[24px] font-normal font-poppins">
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                porttitor.
              </p>
              <div className="flex space-x-2">
                <img src={cube} alt="" />
                <h6 className="text-[18px] font-bold  text-[#000000de]">
                  Oznajomtes s nashimi partnerami
                </h6>
              </div>
              <p className="mb-4 text-[24px] font-normal font-poppins">
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                porttitor.
              </p>
              <button className="w-[200px]  h-[60px] bg-[#000000DE] text-white rounded">
                Try it now
              </button>

            </div>
            <div className="grid grid-cols-2 gap-4  lg:mt-[-10px] mt-8 ">
              <img
                className="w-full lg:mt-12 rounded-lg"
                src={plusIphene1}
                alt="office content 1"
              />
              <img
                className="mt-4 w-full  rounded-lg"
                src={plusIphone2}
                alt="office content 2"
              />
            </div>
          </div>
        </section>
        <section className=" w-full  py-10 partner flex items-center justify-start">
          <div className='   ml-11  max-w-[549px]  leading-10  '>
            <h2 className="xl:text-6xl lg:text-4xl text-2xl pb-4 text-white font-bold normal font-manrope">
              Become a parthner
            </h2>
            <p className="text-[24px] py-4 text-white font-normal normal font-manrope">
              Risus habitant leo egestas mauris diam eget  morbi tempus vulputate
            </p>
            <button className="w-[160px]  h-[60px] bg-[#000000DE] text-white rounded">
              Join now
            </button>
          </div>
        </section>
        <Accordion />

        <Footer />
      </div>


      
    </>
  );
};

export default Index;



{
  /* <div className="flex space-x-2 absolute right-[50px] top-[7%]     ">
<div>
  <img src={user1} alt="" />
</div>

<div className=" user1   w-[383px]  rounded-md   flex justify-around  items-center  h-[115px] ">
  <div className=" bg-white  grid place-items-center rounded-md w-[60px] h-[60px]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
    >
      <path
        d="M2 26L26 2M26 2H9.13513M26 2V18.2162"
        stroke="#4C5DF5"
        stroke-width="3.82979"
      />
    </svg>
  </div>
  <div>
    <div className="text-[16px] flex justify-between font-DMSans font-medium text-[#000000de]  ">
      <p> 89$ (10% from deal)</p>
      <span className="text-[11px] normal font-inter fonrt-medium text-[#00000099]">
        23.01.23
      </span>
    </div>
    <p className="text-[14px]  font-DMSans font-normal text-[#000000de]">
      Purchased from United Colors of Benetton
    </p>
    <p className="text-[14px]  font-DMSans font-semibold text-[#000000de]">
      Kate Jackson
    </p>
  </div>
</div>
</div> */
}
