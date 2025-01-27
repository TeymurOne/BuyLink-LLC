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
  rate2?: any;
  title2?: string;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  children,
  title,
  rate,
  apiData,
  icon,
  rate2,
  title3,
  title2,
  className,
}) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    if (apiData) dispatch(setFilter(apiData));
  };
console.log(rate2)
  const truncateNumber = (value: any) => {
    if (isNaN(value) || value === null) return '';
    const numberStr = value.toString();
    const dotIndex = numberStr.indexOf('.');
    if (dotIndex === -1) return numberStr;
    return numberStr.slice(0, dotIndex + 3);
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
            <div className="flex w-55 justify-between">
              <p className="items-start py-2 text-sm  font-bold text-darkgray dark:text-white xl:text-base">
                {title}
              </p>
              <p className="items-start py-2 text-sm font-normal text-darkgray dark:text-white xl:text-base">
                {title3}
              </p>
              {(title3 === 'Total' ||
                title3 === 'Ümumi' ||
                title3 === 'Общий') && (
                <img className="w-[8%]"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAXklEQVR4nO3RwQmAQBAEwU344PL/KIbgr0+rYAIYeoaf2Wtdz+Z025EYRWoUqVGkRpEaRWoUqVGkRpEaRWoUqVGkRpEaRWoUqVGkRpEaRWoUqVGkRpEaRWo+U4R55wZ3udI9hIEDWQAAAABJRU5ErkJggg=="
                  alt="vertical-line"
                />
              )}

              <p className="items-start py-2 text-sm font-normal text-darkgray dark:text-white xl:text-base">
                {title2}
              </p>
            </div>
            <span
              className={`flex items-center text-xl font-medium dark:text-white xl:text-xl ${
                title3 === 'Ümumi' || title3 === 'Total' || title3 === 'Общий' ? 'ml-11' : ''
              }`}
            >              {truncateNumber(rate)} {icon}
              {(title3 === 'Ümumi' || title3 === 'Total' ||
                title3 === 'Общий') && (
                <span className="flex items-center pl-2">
                  <span className="ml-1"> {rate2}</span>
                  <span>{icon}</span>
                </span>
              )}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDataStats;
