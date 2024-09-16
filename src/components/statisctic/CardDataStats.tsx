import React, { ReactNode } from 'react';

interface CardDataStatsProps {
  title: string;
  total: string;
  rate: string;
  levelUp?: boolean;
  levelDown?: boolean;
  children: ReactNode;
}

const truncateNumber = (value: any) => {
  if (isNaN(value) || value === null) return '';
  const numberStr = value.toString();
  const dotIndex = numberStr.indexOf('.');
  if (dotIndex === -1) return numberStr;
  return numberStr.slice(0, dotIndex + 3);
};

const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  total,
  children,
}) => {
  return (
    <div className="rounded-2xl border border-stroke bg-white px-7.5 py-6 shadow-sm dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-md bg-white300 dark:rounded-full dark:bg-white">
        {children}
      </div>
      <div className="mt-4 flex items-end justify-between gap-7">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {truncateNumber(total)}
          </h4>
        </div>

        <span className="flex items-center text-sm font-normal text-black200 dark:text-white">
          {title}
        </span>
      </div>
    </div>
  );
};

export default CardDataStats;
