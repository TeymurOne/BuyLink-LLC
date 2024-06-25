import React, { ReactNode } from 'react';

interface CardDataStatsProps {
  title: string;
  total: string;
  rate: string;
  levelUp?: boolean;
  levelDown?: boolean;
  children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  total,

  children,
}) => {
  return (
    <div className=" rounded-2xl  border border-stroke bg-white px-7.5 py-6 shadow-sm  dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-md bg-white300   dark:rounded-full dark:bg-white">
        {children}
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {total}
          </h4>
        </div>

        <span className="flex items-center gap-1 font-inter text-sm font-medium text-black200 dark:text-white ">
          {title}
        </span>
      </div>
    </div>
  );
};

export default CardDataStats;
