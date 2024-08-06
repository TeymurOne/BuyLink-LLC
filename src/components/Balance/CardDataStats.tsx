import React, { ReactNode } from 'react';
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
  const handleClick = () => {
    if (apiData) dispatch(setFilter(apiData));
    onClick();
  };
  return (
    <div
      onClick={handleClick}
      className={`w-full cursor-pointer rounded-xl py-3 shadow transition hover:scale-95 dark:bg-boxdark ${className} ${isActive ? 'bg-[#4C5DF5]' : 'bg-white'}`}
    >
      <div className="relative flex w-full space-x-4">
        <div className="pl-4">{children}</div>
        <div className="flex w-full flex-col">
          <span
            className={`flex items-center ${isActive ? 'text-white' : ''} text-sm font-normal text-darkgray dark:text-white xl:text-base`}
          >
            {title === 'Balansdan' && (
              <img src={logo} alt="logo" className="mr-2" />
            )}
            {title}
          </span>
          <span
            className={`flex items-center text-xl font-medium dark:text-white  ${isActive ? 'text-white' : ''} xl:text-xl`}
          >
            {rate} {icon}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardDataStats;
