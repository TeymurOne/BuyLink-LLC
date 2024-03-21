import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import logo from '../../images/Pages-index/head-main/logo.svg';
import vector from '../../images/Pages-index/head-main/vector.svg';

import { Link } from 'react-router-dom';
import SignModal from '../../pages/Authentication/SignModal';
import getState from '../../core/helpers/cookie';
import i18n from '../../../i18n/İ18n';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [popup, setPopup] = useState(false);
  const [lang, setLang] = useState(localStorage.getItem('lng'));
  const local = localStorage.getItem('lng');

  const cookie = getState();
  const { t } = useTranslation();

  const handleTranslate = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lng', lang);
  };

  function handleLang(lang: string) {
    setPopup(false);
    setLang(lang);
    handleTranslate(lang);
  }

  return (
    <header className="bg-white font-roboto  pb-6   pt-3    ">
      <nav
        className="mx-auto  flex  w-full items-center justify-between py-3"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 mr-[-180px]">
          <a
            href="/"
            className="-m-1.5   lg:block hidden p-1.5 w-[67px] h-[75px]"
          >
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
        <ul className="hidden   text-center  lg:flex  text-[#00000099] font-roboto lg:gap-x-4 font-medium text-[16px]">
          <li  className='px-3' >
            <a  href="/#about">
              {t('header.0')}
            </a>
          </li>
          <li className='px-3'  >
            <a  href="/#features">
              {t('header.1')}
            </a>
          </li>
          <li className=' w-[123px] px-3 ' >
            <a href="/#how-use">
              {t('header.2')}
            </a>
          </li>
          <li >
            <a  href="/#faq">
              {t('header.3')}
            </a>
          </li>
          <li  className='w-[123px]'>
            <a href="/#footer">
              {t('header.4')}
            </a>
          </li>
        </ul>

        <div className="hidden font-normal lg:flex text-[#000000de] lg:flex-1 text-[14px] lg:justify-end">
          <div
            onClick={() => setPopup(!popup)}
            className="flex     z-9999  mr-[-30px] items-center "
          >
            <label
              htmlFor="Select language"
              className="flex items-center space-x-1  cursor-pointer  "
            >
              <div className=" relative ">{lang}</div>
              <img src={vector} alt="Translate-vector arrow" />

              {popup && (
                <div className="h-[80px] mr-[-10px] text-center shadow-1 rounded-md w-[83px] top-14  absolute z-30  bg-white">
                  <p
                    onClick={() => handleLang('Eng')}
                    className="hover:bg-[#E6E9FF] hover:text-[#0019F8] mt-2  "
                  >
                    Eng
                  </p>
                  <p
                    onClick={() => handleLang('Aze')}
                    className="hover:bg-[#E6E9FF] hover:text-[#0019F8] mt-2 "
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
              {t('header.5')}
            </Link>
          )}

          <Link
            to=""
            className="text-[16px] text-white w-[161px] h-[44px]    flex items-center justify-center rounded-sm  bg-primary    "
          >
            {t('header.6')}
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
