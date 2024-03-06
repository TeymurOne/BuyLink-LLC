import logo from '../../images/pageLand/logo.svg';
import linkedln from '../../images/pageLand/linkedln.svg';
import envolede from '../../images/pageLand/envolede.svg';
import facebook from '../../images/pageLand/fb.svg';
import instagram from '../../images/pageLand/instagram.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Footer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <footer
        className="  container mx-auto lg:px-4 1536px:px-0 md:px-0 px-3   "
        id="footer"
      >
        <div className="  h-full">
          <div className="grid lg:grid-cols-4 gap-10   grid-cols-1  w-[70%] pb-10 pt-10 xsm:px-4   ">
            <div className=" flex flex-col justify-between px-2 lg:h-[190px]  h-auto   ">
              <img className="w-[67px] h-[75px]" src={logo} alt="Logo-footer" />
              <p className="text-white text-[16px] normal font-light">
                {t('footer.0')}
              </p>
              <div className="flex space-x-3 items-center  max-w-[100px]">
                <img
                  className="w-[32px] h-[32px]"
                  alt="facebook"
                  src={facebook}
                />
                <img
                  className="w-[32px]  h-[32px] cursor-pointer"
                  alt="messenger"
                  src={envolede}
                  onClick={() =>
                    (window.location.href = 'mailto:partnership@buylink.info')
                  }
                />

                <img
                  className="w-[32px] h-[32px]"
                  src={instagram}
                  alt="instagram"
                />

                <img
                  className="w-[32px] h-[32px] cursor-pointer"
                  alt="Logo-linkedln"
                  src={linkedln}
                  onClick={()=>window.location.href='https://www.linkedin.com/company/buylink.info/?viewAsMember=true'}
                />
              </div>
            </div>
            <div className="px-2 w-full max-w-[100px]">
              <h2 className=" text-[21px] normal font-bold font-Space Grotesk text-white">
                {t('footer.1')}
              </h2>
              <ul>
                <li className="text-[16px] my-2 normal font-light text-white">
                  <a href="#about">{t('footer.2')}</a>
                </li>
                <li className="text-[16px] normal my-2 font-light text-white">
                  <Link to="">{t('footer.3')}</Link>
                </li>
                <li className="text-[16px] normal my-2 font-light text-white">
                  <Link to=""> {t('footer.4')}</Link>
                </li>
              </ul>
            </div>
            <div className="px-2  w-full max-w-[100px]">
              <h2 className=" text-[21px] normal font-bold font-Space Grotesk text-white">
                {t('footer.5')}
              </h2>
              <ul>
                <li className="text-[16px] my-2 normal font-light text-white">
                  <Link to="">{t('footer.6')} </Link>
                </li>
                <li className="text-[16px] normal my-2 font-light text-white">
                  <Link to="">{t('footer.7')}</Link>
                </li>
                <li className="text-[16px] normal my-2 font-light text-white">
                  <Link to=""> {t('footer.8')}</Link>
                </li>
              </ul>
            </div>
            <div className="px-2  w-full max-w-[170px]">
              <h2 className=" text-[21px] normal font-bold font-Space Grotesk text-white">
                Resources
              </h2>
              <ul>
                <li className="text-[16px] my-2 normal font-light text-white">
                  <Link to="">{t('footer.9')}</Link>
                </li>
                <li className="text-[16px] normal my-2 font-light text-white">
                  <Link to="">{t('footer.10')}</Link>
                </li>
                <li className="text-[16px] normal my-2 font-light text-white">
                  <Link to=""> {t('footer.11')}</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col  border-t-[3px] border-[#4C5DF5]   items-center justify-center">
            <div className="py-4">
              <ul className="text-[#C4C4C4] text-[14px] font-medium flex xl:flex-row flex-col space-x-0 xl:space-x-9 justify-between">
                <li className="divide-x divide-blue-200">{t('footer.13')}</li>
                <li className="">{t('footer.14')}</li>
                <li className="">{t('footer.15')}</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
