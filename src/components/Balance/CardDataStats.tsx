import React, { ReactNode, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../features/balance/balanceSlice';
import logo from '../../images/icon/minilogo.png';

interface CardDataStatsProps {
  children: ReactNode;
  title: string;
  rate: string;
  icon?: any;
  apiData?: string;
  className?: string;
  isActive: boolean;
  onClick: () => void;
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
}) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const truncateNumber = (value: any) => {
    if (isNaN(value) || value === null) return '';
    const numberStr = value.toString();
    const dotIndex = numberStr.indexOf('.');
    if (dotIndex === -1) return numberStr;
    return numberStr.slice(0, dotIndex + 3);
  };

  const handleClick = () => {
    if (apiData) dispatch(setFilter(apiData));
    if (title === 'Due to BuyLink') {
      setShow(!show);
    }
    onClick();
  };

  return (
    <div
      onClick={handleClick}
      className={`w-full cursor-pointer rounded-xl py-3 shadow transition hover:scale-95 dark:bg-boxdark ${className} ${
        isActive ? 'bg-[#4C5DF5] text-white' : 'bg-white'
      }`}
    >
      <div className="relative flex w-full space-x-4">
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
          </span>{' '}
          <span
            className={`flex items-center text-xl font-medium xl:text-xl ${isActive ? 'text-white' : 'dark:text-white'}`}
          >
            {truncateNumber(rate)} {icon}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardDataStats;
