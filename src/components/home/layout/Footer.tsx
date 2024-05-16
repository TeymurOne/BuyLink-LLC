import logo from '../../../images/Pages-index/head-main/logo.svg';
import linkedln from '../../../images/Pages-index/footer/linked.svg';
import envolede from '../../../images/Pages-index/footer/msj.svg';
import facebook from '../../../images/Pages-index/footer/fb.svg';
import instagram from '../../../images/Pages-index/footer/insta.svg';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <footer
        className="  custom-con  " id="footer"
      >
        <div className="  h-full">
          <div className="grid lg:grid-cols-4 gap-10   grid-cols-1  w-[70%] pb-10 pt-10 xsm:px-4   ">
            <div className=" flex flex-col justify-between px-2 lg:h-[190px]  h-auto   ">
              <img className="w-17 h-19" src={logo} alt="Logo-footer" />
              <p className="text-white text-[16px] normal font-light">
                {t('footer.0')}
              </p>
              <div className="flex space-x-3 items-center  max-w-[100px]">
                <img
                  className="w-8 h-8 cursor-pointer"
                  alt="facebook"
                  src={facebook}
                  onClick={() =>
                    (window.location.href = 'https://www.facebook.com/buylinkapp?locale=ru_RU')
                  }
                />
                <img
                  className="w-8 h-8 cursor-pointer"
                  alt="messenger"
                  src={envolede}
                  onClick={() =>
                    (window.location.href = 'mailto:partnership@buylink.info')
                  }
                />

                <img
                  className="w-8 h-8 cursor-pointer"
                  src={instagram}
                  alt="instagram"
                  onClick={()=>window.location.href='https://www.instagram.com/buylinkapp?igsh=MXhsdXgybmlibGcybA=='}
                />

                <img
                  className="w-8 h-8 cursor-pointer"
                  alt="Logo-linkedln"
                  src={linkedln}
                  onClick={()=>window.location.href='https://www.linkedin.com/company/buylink.info/?viewAsMember=true'}
                />
              </div>
            </div>
            <div className="px-2 w-full max-w-25">
              <h2 className=" text-xl normal font-bold font-Space Grotesk text-white">
                {t('footer.1')}
              </h2>
              <ul>
                <li className="text-base my-2 normal font-light text-white">
                  <a href="#about">{t('footer.2')}</a>
                </li>
                <li className="text-base normal my-2 font-light text-white">
                  <Link to="">{t('footer.3')}</Link>
                </li>
                <li className="text-base normal my-2 font-light text-white">
                  <Link to=""> {t('footer.4')}</Link>
                </li>
              </ul>
            </div>
            <div className="px-2  w-full max-w-25">
              <h2 className=" text-xl normal font-bold font-Space Grotesk text-white">
                {t('footer.5')}
              </h2>
              <ul>
                <li className="text-base my-2 normal font-light text-white">
                  <Link to="">{t('footer.6')} </Link>
                </li>
                <li className="text-base normal my-2 font-light text-white">
                  <Link to="">{t('footer.7')}</Link>
                </li>
                <li className="text-base normal my-2 font-light text-white">
                  <Link to=""> {t('footer.8')}</Link>
                </li>
              </ul>
            </div>
            <div className="px-2  w-full max-w-42.5">
              <h2 className=" text-xl normal font-bold font-Space Grotesk text-white">
                Resources
              </h2>
              <ul>
                <li className="text-base my-2 normal font-light text-white">
                  <Link to="/privacypolicy">{t('footer.9')}</Link>
                </li>
                <li className="text-base normal my-2 font-light text-white">
                  <Link to="">{t('footer.10')}</Link>
                </li>
                <li className="text-base normal my-2 font-light text-white">
                  <Link to=""> {t('footer.11')}</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col  border-t-[3px] border-starrating   items-center justify-center">
            <div className="py-4">
              <ul className="text-border2 text-sm font-medium flex xl:flex-row flex-col space-x-0 xl:space-x-9 justify-between">
                <li className="divide-x divide-blue-200">{t('footer.13')}</li>
                <li className="">{t('footer.14')}</li>
                <li >051-411-84-44</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
