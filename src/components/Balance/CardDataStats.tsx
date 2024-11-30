import React, { ReactNode, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../features/balance/balanceSlice';
import logo from '../../images/icon/minilogo.png';
import { useTranslation } from 'react-i18next';

interface CardDataStatsProps {
  children: ReactNode;
  title: string;
  rate: string;
  icon?: any;
  apiData?: string;
  className?: string;
  isActive: boolean;
  onClick: () => void;
  showTitleTooltip?: boolean;
  showTooltipIcon?: boolean;
  id?: string;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  children,
  title,
  rate,
  apiData,
  icon,
  className,
  isActive,
  onClick,
  showTitleTooltip = false,
  showTooltipIcon = false,
  id,
}) => {
  const dispatch = useDispatch();
  const [showTooltip, setShowTooltip] = useState(false);
  const { t } = useTranslation();

  const truncateNumber = (value: any) => {
    if (isNaN(value) || value === null) return '';
    const numberStr = value.toString();
    const dotIndex = numberStr.indexOf('.');
    if (dotIndex === -1) return numberStr;
    return numberStr.slice(0, dotIndex + 3);
  };

  const handleClick = () => {
    if (apiData) dispatch(setFilter(apiData));
    onClick();
  };

  return (
    <div
      onClick={handleClick}
      className={`relative w-full rounded-xl py-3 shadow transition ${
        isActive ? 'bg-[#4C5DF5] text-white' : 'bg-white'
      } ${id !== 'netAmount' ? 'cursor-pointer hover:scale-95' : 'cursor-auto'} dark:bg-boxdark ${className}`}
    >
      <div className="flex w-full space-x-4">
        <div className="pl-4">{children}</div>
        <div className="flex w-full flex-col">
          <span
            className={`flex items-center text-sm font-normal text-darkgray xl:text-base ${
              isActive ? 'text-white' : 'dark:text-white'
            }`}
          >
            {(title === 'Balansdan' ||
              title === 'C Баланса' ||
              title === 'Wallet') && (
              <img src={logo} alt="logo" className="mr-2" />
            )}
            {title}

            {showTooltipIcon && (
              <span
                className="relative ml-2 cursor-pointer"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15px"
                  height="15px"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="#979797"
                    d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 5.25a.749.749 0 1 0 0-1.5a.749.749 0 0 0 0 1.498m.5 1.25a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0z"
                  />
                </svg>

                {showTitleTooltip && showTooltip && (
                  <div className="absolute -left-10 -top-10 z-10 w-max -translate-x-1/2 -translate-y-2 transform rounded-lg bg-[#F7F7F7] p-2 text-xs text-black shadow-xl">
                    {t('balance.2')} - {t('balance.1')} = {t('balance.4')}
                    <div className="absolute bottom-0 right-15 h-0 w-0 -translate-x-1/2 translate-y-full transform border-x-8 border-t-8 border-x-transparent border-t-[#F7F7F7]"></div>
                  </div>
                )}
              </span>
            )}
          </span>
          <span
            className={`flex items-center text-xl font-medium xl:text-xl ${
              isActive ? 'text-white' : 'dark:text-white'
            }`}
          >
            {truncateNumber(rate)} {icon}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardDataStats;
