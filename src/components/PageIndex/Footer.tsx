import logo from '../../images/pageLand/logo.svg';
import linkedln from '../../images/pageLand/linked.svg';
import messenger from '../../images/pageLand/messenger.svg';
import twitter from '../../images/pageLand/twitter.svg';
import twoo from '../../images/pageLand/twoo.svg';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      <footer className="bg-[#000000DE] w-full py-12 " id='footer'>
        <div className=" mx-auto  max-w-[1430px] h-full">
          <div className="flex flex-wrap justify-between py-10 xsm:px-4  border-b-[3px] border-[#4C5DF5]   ">
            <div className='w-[20%] flex flex-col px-2 justify-between lg:h-[190px] sm:h-0 sm:pb-20 '>
              <img className='w-[67px] h-[75px]' src={logo} alt="Logo-footer" />
              <p className='text-white text-[16px] normal font-light'>Finance helps companies manage payments easily.</p>
              <div className="flex space-x-3 items-center  max-w-[100px]">
                <img
                  className="w-[20px] h-[20px]"
                  src={linkedln}
                  alt="Logo-linkedln"
                />
                <img
                  className="w-[20px] h-[20px]"
                  src={messenger}
                  alt="Logo-messenger"
                />
                <img
                  className="w-[20px] h-[20px]"
                  src={twitter}
                  alt="Logo-twitter"
                />
                <img className="w-[20px] h-[20px]" src={twoo} alt="Logo-two" />
              </div>
            </div>
            <div className='px-2 w-full max-w-[100px]'  >
              <h2 className=" text-[21px] normal font-bold font-Space Grotesk text-white">
                Company
              </h2>
              <ul >
                <li className="text-[16px] my-2 normal font-light text-white">
                  <Link to="">About Us</Link>
                </li>
                <li className="text-[16px] normal my-2 font-light text-white">
                  <Link to="">Careers</Link>
                </li>
                <li className="text-[16px] normal my-2 font-light text-white">
                  <Link to=""> Blog</Link>
                </li>
                <li className="text-[16px] normal font-light text-white">
                  <Link to=""> Pricing</Link>
                </li>
              </ul>
            </div>
            <div  className='px-2  w-full max-w-[100px]'>
              <h2 className=" text-[21px] normal font-bold font-Space Grotesk text-white">
              Product
              </h2>
              <ul >
                <li className="text-[16px] my-2 normal font-light text-white">
                  <Link to="">Invoicing </Link>
                </li>
                <li className="text-[16px] normal my-2 font-light text-white">
                  <Link to="">Contract</Link>
                </li>
                <li className="text-[16px] normal my-2 font-light text-white">
                  <Link to=""> Accounting</Link>
                </li>
                <li className="text-[16px] normal font-light text-white">
                  <Link to=""> Proposal</Link>
                </li>
              </ul>
            </div>
            <div className='px-2  w-full max-w-[170px]' >
              <h2 className=" text-[21px] normal font-bold font-Space Grotesk text-white">
              Resources
              </h2>
              <ul >
                <li className="text-[16px] my-2 normal font-light text-white">
                  <Link to="">Proposal Template</Link>
                </li>
                <li className="text-[16px] normal my-2 font-light text-white">
                  <Link to="">Invoice Template</Link>
                </li>
                <li className="text-[16px] normal my-2 font-light text-white">
                  <Link to=""> Tuturoial</Link>
                </li>
                <li className="text-[16px] normal font-light text-white">
                  <Link to=""> write</Link>
                </li>
              </ul>
            </div>
            <div className='px-2    ' >
              <h2 className=" text-[21px] normal mb-4 font-bold font-Space Grotesk text-white">Join Our Newsletter</h2>
              <input
                className="rounded-[14px] border max-w-[285px] pl-8 w-full py-[22px]  bg-black-2 text-[#C4C4C4]"
                placeholder="Your email adress"
                type="email"
              />
              <button className="bg-[#4C5DF5] py-[20px] px-[35px] rounded-[14px] ml-3 text-white">
                Join now
              </button>
              <p className="text-[16px] my-4 w-[360px] font-light  text-white"  >
                * Will send you weekly updates for your better finance
                management.
              </p>
            </div>
          </div>
          <div className='flex flex-col  items-center justify-center'>
            <div className='pt-4'>
                <ul className='flex text-[14px] normal text-white space-x-2'>
                    <li className=' border-b-[2px] '><Link to="">Twitter</Link></li>
                    <li className='border-b-[2px] '><Link to="">Dribbble</Link></li>
                    <li className='border-b-[2px] '><Link to="">Instagram</Link></li>
                    <li className='border-b-[2px]'><Link to="">YouTube</Link></li>
                    <li className='border-b-[2px] '><Link to="">Slack</Link></li>
                </ul>
            </div>
            <div className='py-4'>
                <ul className='text-[#C4C4C4] text-[14px] font-medium flex xl:flex-row flex-col space-x-0 xl:space-x-9 justify-between'>
                    <li className='divide-x divide-blue-200'>2023 All Rights Reserved</li>
                    <li className=''>2023 All Rights Reserved</li>
                    <li className=''>2023 All Rights Reserved</li>
                </ul>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
