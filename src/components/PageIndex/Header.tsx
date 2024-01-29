import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import search from '../../images//pageLand/search.svg';
import logo from '../../images//pageLand/logo.svg';
import globe from '../../images//pageLand/globe.svg';
import { Link } from 'react-router-dom';
import SignModal from '../../pages/Authentication/SignModal';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <header className='bg-[#F3F4F6] font-roboto'>
      <nav
        className="mx-auto px-4 flex max-w-[1480px] items-center justify-between py-3 lg:px-2"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 mr-[-180px]">
          <a href="#" className="-m-1.5 p-1.5 w-[67px] h-[75px]">
            <img className="w-full h-full" src={logo} alt="Logo" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex text-[#00000099] font-roboto lg:gap-x-4 font-medium text-[14px]">
          <a href="#about">About</a>

          <a href="#features">Features</a>
          <a href="#how-use">How to use</a>
          <a href="#faq">FAQ</a>
          <a href="#footer">Contact us</a>
        </div>
        <div className="hidden font-normal lg:flex text-[#000000de] lg:flex-1 text-[14px] lg:justify-end">
          <div className="flex space-x-1 mr-[-50px] items-center">
            <img src={search} alt="" className="w-[15px] h-[16px]" />
            <label htmlFor="Search">Search</label>
            <img src={globe} alt="" className="w-[16px] h-[16px]" />
            <select className="bg-transparent" name="" id="">
              <option value="ENG">ENG</option>

              <option value="AZE">AZE</option>
            </select>
          </div>
          <Link
            to=""
            onClick={() => setShowModal(true)}
            className="text-[14px]  text-[#000000de] w-[161px] h-[44px]    flex items-center justify-center rounded-sm     "
          >
            Login
          </Link>
          <Link
            to=""
            className="text-[16px] text-white w-[161px] h-[44px]    flex items-center justify-center rounded-sm  bg-[#000000de]    "
          >
            Become a partner
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
            <a href="#" className="-m-1.5 p-1.5 w-[67px] h-[75px]">
              <span className="sr-only">Your Company</span>
              <img src={logo} className="w-full h-full" alt="Logo" />
            </a>
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
                  onClick={() => setShowModal(true)}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link>
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
