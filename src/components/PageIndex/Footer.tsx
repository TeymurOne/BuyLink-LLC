import logo from '../../images/pageLand/logo.svg';
import linkedln from '../../images/pageLand/linkedln.svg';
import envolede from '../../images/pageLand/envolede.svg';
import facebook from '../../images/pageLand/fb.svg';
import instagram from '../../images/pageLand/instagram.svg';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      <footer className="bg-[#000000DE] w-full py-12 " id="footer">
        <div className=" mx-auto  max-w-[1430px] h-full">
          <div className="grid lg:grid-cols-4 gap-10   grid-cols-1  w-[70%] pb-20 xsm:px-4   ">
            <div className="w-[100px] flex flex-col px-2 lg:h-[190px]  h-auto   ">
              <img className="w-[67px] h-[75px]" src={logo} alt="Logo-footer" />
              <p className="text-white text-[16px] normal font-light">
                Finance helps companies manage payments easily.
              </p>
              <div className="flex space-x-3 items-center  max-w-[100px]">
                <img
                  className="w-[20px] h-[20px]"
                  alt="facebook"
                  src={facebook}
                />
                <img
                  className="w-[20px] h-[20px]"
                  alt="messenger"
                  src={envolede}
                />
                <img
                  className="w-[20px] h-[20px]"
                  src={instagram}
                  alt="instagram"
                />

                <img
                  className="w-[20px] h-[20px]"
                  alt="Logo-linkedln"
                  src={linkedln}
                />
              </div>
            </div>
            <div className="px-2 w-full max-w-[100px]">
              <h2 className=" text-[21px] normal font-bold font-Space Grotesk text-white">
                Company
              </h2>
              <ul>
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
            <div className="px-2  w-full max-w-[100px]">
              <h2 className=" text-[21px] normal font-bold font-Space Grotesk text-white">
                Product
              </h2>
              <ul>
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
            <div className="px-2  w-full max-w-[170px]">
              <h2 className=" text-[21px] normal font-bold font-Space Grotesk text-white">
                Resources
              </h2>
              <ul>
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
          </div>
          <div className="flex flex-col  border-t-[3px] border-[#4C5DF5]   items-center justify-center">
            <div className="pt-4">
              <ul className="flex text-[14px] normal text-white space-x-2">
                <li className=" border-b-[2px] ">
                  <Link to="">Twitter</Link>
                </li>
                <li className="border-b-[2px] ">
                  <Link to="">Dribbble</Link>
                </li>
                <li className="border-b-[2px] ">
                  <Link to="">Instagram</Link>
                </li>
                <li className="border-b-[2px]">
                  <Link to="">YouTube</Link>
                </li>
                <li className="border-b-[2px] ">
                  <Link to="">Slack</Link>
                </li>
              </ul>
            </div>
            <div className="py-4">
              <ul className="text-[#C4C4C4] text-[14px] font-medium flex xl:flex-row flex-col space-x-0 xl:space-x-9 justify-between">
                <li className="divide-x divide-blue-200">
                  2023 All Rights Reserved
                </li>
                <li className="">2023 All Rights Reserved</li>
                <li className="">2023 All Rights Reserved</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
