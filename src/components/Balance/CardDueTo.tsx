import React, { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../features/balance/balanceSlice';

interface CardDataStatsProps {
  children: ReactNode;
  title: string;
  rate: string;
  icon?: any;
  apiData?: string;
  className?: string;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  children,
  title,
  rate,
  apiData,
  icon,
  className,
}) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    if (apiData) dispatch(setFilter(apiData));
  };

  return (
    <>
      <div
        onClick={handleClick}
        className={`w-full cursor-auto cursor-pointer rounded-xl bg-[#E9F0FF] py-3 transition dark:bg-boxdark ${className}`}
      >
        <div className="relative w-full space-x-4">
          <div className="pl-4">{children}</div>
          <div className="w-full flex-col">
            <p className="items-start py-2 text-sm font-normal text-darkgray dark:text-white xl:text-base">
              {title}
            </p>
            <span className="flex items-center text-xl font-medium dark:text-white xl:text-2xl">
              {rate} {icon}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDataStats;
