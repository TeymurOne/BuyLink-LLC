import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import logo from '../../images//pageLand/logo.svg';
import vector from '../../images//pageLand/Vector.svg';

import arrow from '../../images//pageLand/arrow.svg';
import { Link } from 'react-router-dom';
import SignModal from '../../pages/Authentication/SignModal';
import getState from '../../core/helpers/cookie';
import i18n from '../../i18n/İ18n';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [popup, setPopup] = useState(false);
  const [lang, setLang] = useState('Eng');

  const cookie = getState();
  const { t } = useTranslation();

  const handleTranslate = (lang: string) => {
    console.log(lang);

    i18n.changeLanguage(lang);
    localStorage.setItem('lng', lang);
  };

  function handleLang(lang: string) {
    setPopup(false)
    setLang(lang);
    handleTranslate(lang);
  }

  return (
    <header className="bg-white font-roboto       ">
      <nav
        className="mx-auto px-4 flex  w-full items-center justify-between py-3 lg:px-2"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 mr-[-180px]">
          <a href="#" className="-m-1.5   lg:block hidden p-1.5 w-[67px] h-[75px]">
            <img className="w-full h-full" src={logo} alt="Logo" />
          </a>
          <button
            type="button"
            className="-m-2.5 inline-flex lg:hidden items-center justify-center rounded-md p-2.5 "
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="flex lg:hidden">
          <Link
            to=""
            onClick={() => setShowModal(true)}
            className="-mx-3 text-[14px]  rounded-lg font-[grotesk] p-2 text-white  text-center w-[68px] h-[44px]  bg-[#202020]"
          >
            Login
          </Link>
        </div>
        <div className="hidden lg:flex text-[#00000099] font-roboto lg:gap-x-4 font-medium text-[16px]">
          <a href="#about">{t('index-header.0')}</a>

          <a href="#features">{t('index-header.1')}</a>
          <a href="#how-use">{t('index-header.2')}</a>
          <a href="#faq">{t('index-header.3')}</a>
          <a href="#footer">{t('index-header.4')}</a>
        </div>
        <div className="hidden font-normal lg:flex text-[#000000de] lg:flex-1 text-[14px] lg:justify-end">
          <div className="flex   z-9999  mr-[-30px] items-center ">
            <label
              htmlFor="Select language"
              className="flex items-center space-x-1"
            >
              <div onClick={() => setPopup(!popup)} className=" relative cursor-pointer   ">
                {lang}
              </div>
              <img
                src={vector}
                alt="Translate-vector arrow"
             
              />

              {popup && (
                <div className="h-[80px] text-center right-[310px]  w-[83px] top-16  absolute z-30  bg-white">
                  <p
                    onClick={() => handleLang('Eng')}
                    className="hover:bg-[#E6E9FF] hover:text-[#0019F8]  "
                  >
                    Eng
                  </p>
                  <p
                    onClick={() => handleLang('Aze')}
                    className="hover:bg-[#E6E9FF] hover:text-[#0019F8] "
                  >
                    Aze
                  </p>
                </div>
              )}
            </label>
          </div>

          {cookie ? (
            <Link
              to="/admin"
              onClick={() => {
                setTimeout(
                  () => {
                    window.location.reload();
                  },
                  0,
                  122,
                );
              }}
              className="text-[16px] space-x-2 text-black w-[151px] h-[44px]    flex items-center justify-center rounded-sm      "
            >
              Admin
            </Link>
          ) : (
            <Link
              to=""
              onClick={() => setShowModal(true)}
              className="text-[14px]  text-[#000000de] w-[161px] h-[44px]    flex items-center justify-center rounded-sm     "
            >
              {t('index-header.5')}
            </Link>
          )}

          <Link
            to=""
            className="text-[16px] text-white w-[161px] h-[44px]    flex items-center justify-center rounded-sm  bg-primary    "
          >
            {t('index-header.6')}
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 ">
            <div className="-my-6 divide-y">
              <div className="space-y-2 py-6">
                <a
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 "
                >
                  About
                </a>
                <a
                  href="#features"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7"
                >
                  Features
                </a>
                <a
                  href="#how-use"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 "
                >
                  How to use
                </a>
                <a
                  href="#faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 "
                >
                  FAQ
                </a>
                <a
                  href="#footer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 "
                >
                  Contact Us
                </a>
              </div>
              <div className="py-6">
                <Link
                  to=""
                  className="text-sm text-white w-[161px] h-[44px]    flex items-center justify-center rounded-sm  bg-[#000000de]    "
                >
                  Become a partner
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
      <SignModal showModal={showModal} setShowModal={setShowModal} />
    </header>
  );
}
