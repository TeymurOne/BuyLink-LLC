import React, { useEffect, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import logo from '../images/Pages-index/head-main/logo.svg';
import vector from '../images/Pages-index/head-main/vector.svg';

import { Link, useLocation } from 'react-router-dom';
import SignModal from '../pages/Authentication/SignModal';
import getState from '../data/helpers/cookie';
import i18n from '../../i18n/İ18n';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [popup, setPopup] = useState(false);
  const [lang, setLang] = useState(localStorage.getItem('lng') || 'az');

  const cookie = getState();

  const { t } = useTranslation();

  const handleTranslate = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lng', lang);
  };

  function handleLang(lang: string) {
    setPopup(false);
    setLang(lang);
    setMobileMenuOpen(false);
    handleTranslate(lang);
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popup && !(event.target as HTMLElement).closest('.popup')) {
        setPopup(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [popup]);

  const useparams = useLocation();

  return (
    <div className="container mx-auto bg-white px-4 md:px-10 lg:px-16">
      <header
        className={`${
          useparams.pathname === '/privacypolicy' ? 'bg-gray2' : 'bg-white'
        } pb-6 pt-3 font-roboto`}
      >
        <nav
          className="mx-auto flex w-full items-center justify-between py-3"
          aria-label="Global"
        >
          <div className="-mr-45 flex lg:flex-1">
            <Link to="/" className="-m-1.5 hidden h-19 w-17 p-1.5 lg:block">
              <img className="h-full w-full" src={logo} alt="Logo" />
            </Link>
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 lg:hidden"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flex lg:hidden">
            <div
              onClick={() => setPopup(!popup)}
              className="relative z-9999 mr-8 hidden items-center lg:flex"
            >
              <label
                htmlFor="Select language"
                className="flex cursor-pointer items-center space-x-1"
              >
                <div className="relative cursor-pointer">
                  {lang === 'az' ? 'Aze' : 'Eng'}
                </div>
                <img src={vector} alt="Translate-vector arrow" />
                {popup && (
                  <div className="absolute -left-2 top-0 z-30 h-20 w-21 rounded-md bg-white text-center shadow-1">
                    <p
                      onClick={() => handleLang('en')}
                      className="popup mt-2 hover:bg-textHover hover:text-textPrimary"
                    >
                      Eng
                    </p>
                    <p
                      onClick={() => handleLang('az')}
                      className="popup mt-2 hover:bg-textHover hover:text-textPrimary"
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
                className="flex h-11 w-30 items-center justify-center space-x-2 rounded-md bg-black font-roboto text-sm text-white"
              >
                Admin
              </Link>
            ) : (
              <Link
                to=""
                onClick={() => setShowModal(true)}
                className="justify-centertext-lg flex flex h-11 h-11 w-30 items-center items-center justify-center space-x-2 space-x-2 rounded-md rounded-sm bg-black font-roboto font-roboto text-sm text-black text-white"
              >
                {t('header.5')}
              </Link>
            )}
          </div>
          <ul className="hidden space-x-6 text-center font-roboto text-lg font-normal text-black lg:flex">
            <li className="w-32 px-3">
              <a href="/#how-use">{t('header.2')}</a>
            </li>
            <li>
              <a href="/#faq" onClick={() => setMobileMenuOpen(false)}>
                {t('header.3')}
              </a>
            </li>
            <li className="w-32">
              <a href="/#footer">{t('header.4')}</a>
            </li>
          </ul>
          <div className="hidden space-x-6 text-sm font-normal text-black lg:flex lg:flex-1 lg:justify-end">
            <div
              onClick={() => setPopup(!popup)}
              className="relative z-9999 flex items-center"
            >
              <label
                htmlFor="Select language"
                className="flex cursor-pointer items-center space-x-1"
              >
                <div className="relative text-lg">
                  {lang === 'az' ? 'Aze' : 'Eng'}
                </div>
                <img src={vector} alt="Translate-vector arrow" />
                {popup && (
                  <div className="absolute -left-6 top-10 z-30 w-21.5 rounded-md bg-white text-center font-roboto text-lg font-normal text-black shadow-1">
                    <p
                      onClick={() => handleLang('en')}
                      className="popup mt-2 hover:bg-textHover hover:text-textPrimary"
                    >
                      Eng
                    </p>
                    <p
                      onClick={() => handleLang('az')}
                      className="popup mb-2 hover:bg-textHover hover:text-textPrimary"
                    >
                      Aze
                    </p>
                  </div>
                )}
              </label>
            </div>
            <div className="z-9999 flex items-center">
              {cookie ? (
                <Link
                  to="/admin"
                  className="flex h-11 items-center justify-center space-x-2 rounded-sm font-roboto text-lg text-black"
                >
                  Admin
                </Link>
              ) : (
                <Link
                  to=""
                  onClick={() => setShowModal(true)}
                  className="flex h-11 items-center justify-center space-x-2 rounded-sm font-roboto text-lg text-black"
                >
                  {t('header.5')}
                </Link>
              )}
            </div>
            <div>
              <Link
                to="https://47gk82mq.forms.app/terefdashliq-formasi"
                target="_blank"
                className="flex h-11 w-44 items-center justify-center rounded-sm bg-primary px-2 font-roboto text-lg text-white"
              >
                {t('header.6')}
              </Link>
            </div>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm">
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6">
              <div className="-my-6 divide-y">
                <div className="space-y-2 py-6">
                  <a
                    href="#how-use"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-lg font-normal leading-7"
                  >
                    {t('header.2')}
                  </a>
                  <a
                    href="#faq"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-lg font-normal leading-7"
                  >
                    {t('header.3')}
                  </a>
                  <a
                    href="#footer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7"
                  >
                    {t('header.4')}
                  </a>
                  <div
                    onClick={() => setPopup(!popup)}
                    className="relative z-9999 flex items-center"
                  >
                    <label
                      htmlFor="Select language"
                      className="flex cursor-pointer items-center space-x-1"
                    >
                      <div className="relative text-base font-semibold">
                        {lang === 'az' ? 'Aze' : 'Eng'}
                      </div>
                      <img src={vector} alt="Translate-vector arrow" />
                      {popup && (
                        <div className="absolute -left-2.5 top-[96%] z-30 h-20 w-21 rounded-md bg-white text-center shadow-1">
                          <p
                            onClick={() => handleLang('en')}
                            className="popup mt-2 hover:bg-textHover hover:text-textPrimary"
                          >
                            Eng
                          </p>
                          <p
                            onClick={() => handleLang('az')}
                            className="popup mt-2 hover:bg-textHover hover:text-textPrimary"
                          >
                            Aze
                          </p>
                        </div>
                      )}
                    </label>
                  </div>
                </div>
                <div className="py-6">
                  <Link
                    to="https://47gk82mq.forms.app/terefdashliq-formasi"
                    target="_blank"
                    className="flex h-11 w-40 items-center justify-center rounded-sm bg-primary text-lg text-white"
                  >
                    {t('header.6')}
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
        <SignModal showModal={showModal} setShowModal={setShowModal} />
      </header>
    </div>
  );
}
