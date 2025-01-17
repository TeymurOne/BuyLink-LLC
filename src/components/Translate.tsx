import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import us from '../images/flagTranslate/usa.svg';
import aze from '../images/flagTranslate/aze.svg';
import ru from '../images/flagTranslate/ru.svg';

import { useTranslation } from 'react-i18next';
import i18n from '../../i18n/İ18n';

const Translate = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(
    localStorage.getItem('lng') || 'az',
  );

  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);

  const { t } = useTranslation();

  const handleClick = (lang: string) => {
    setDropdownOpen(false);
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
    localStorage.setItem('lng', lang);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem('lng') || 'az';
    i18n.changeLanguage(savedLang);
    setCurrentLang(savedLang);
  }, []);

  return (
    <li className="relative">
      <button
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="relative flex h-8.5 w-8.5 items-center justify-center rounded-full    hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white"
      >
        <span className="relative  z-1 grid  h-2 w-5 place-items-center rounded-full">
          {currentLang === 'az' ? (
            <img
              className="absolute h-6 w-6 rounded-md"
              src={aze}
              alt="Aze Flag"
            />
          ) : currentLang === 'en' ? (
            <img
              className="absolute h-6 w-6 rounded-md"
              src={us}
              alt="Usa Flag"
            />
          ) : (
            <img
              className="absolute h-6 w-6 rounded-md"
              src={ru}
              alt="Ru Flag"
            />
          )}
        </span>
      </button>

      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute  mt-2.5 flex h-auto w-50  flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark sm:right-0  ${
          dropdownOpen === true ? 'block' : 'hidden'
        }`}
      >
        <ul className="flex h-auto flex-col overflow-y-auto">
          <li>
            <Link
              onClick={() => handleClick('en')}
              className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
              to="#"
            >
              <p className="flex space-x-2 text-sm">
                <img className=" w-[24px] rounded-md" src={us} alt="Usa Flag" />
                <span className="text-black dark:text-white">EN</span>
              </p>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => handleClick('az')}
              className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
              to="#"
            >
              <p className="flex space-x-2 text-sm">
                <img className=" w-6 rounded-md" src={aze} alt="AZE Flag" />
                <span className="text-black dark:text-white">AZE </span>
              </p>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => handleClick('ru')}
              className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
              to="#"
            >
              <p className="flex space-x-2 text-sm">
                <img className=" w-6 rounded-md" src={ru} alt="RU Flag" />
                <span className="text-black dark:text-white">RU </span>
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default Translate;
