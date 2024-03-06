import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import us from '../images/flagTranslate/us.svg';
import aze from '../images/flagTranslate/aze.png';

import { useTranslation } from 'react-i18next';
import i18n from '../i18n/İ18n';

const Translate = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);

  const { t } = useTranslation();
  const handleClick = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lng', lang);
  };


  
  return (
    <li className="relative">
      <button
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white"
      >
        <span className="relative  right-0 z-1 h-2 w-4 rounded-full top-[-5px]">
        {localStorage.getItem("lng")=='Aze'?(
               <img
               className="absolute  h-[20px] w-[34px] rounded-md"
               src={aze}
   
               alt="Usa Flag"
             />
          ):(
            <img
            className="absolute  w-[29px] rounded-md"
            src={us}

            alt="Usa Flag"
          />
          )}
         
        </span>
      </button>

      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute  mt-2.5 flex h-auto w-[200px]  flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark sm:right-0  ${
          dropdownOpen === true ? 'block' : 'hidden'
        }`}
      >
        <ul className="flex h-auto flex-col overflow-y-auto">
          <li>
            <Link
              onClick={() => handleClick('Eng')}
              className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
              to="#"
            >
              <p className="text-sm flex space-x-2">
                <img className=" w-[24px] rounded-md" src={us} alt="Usa Flag" />
                <span className="text-black dark:text-white">EN</span>
              </p>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => handleClick('Aze')}
              className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
              to="#"
            >
              <p className="text-sm flex space-x-2">
                <img
                  className=" w-[24px] rounded-md"
                  src={aze}
                  alt="AZE Flag"
                />
                <span className="text-black dark:text-white">AZE </span>
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default Translate;
