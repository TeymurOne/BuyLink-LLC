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
  rate,
  levelUp,
  levelDown,
  children,
}) => {
  return (
    <div className=" border rounded-2xl shadow-sm border-stroke bg-white py-6 px-7.5  dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11.5 w-11.5 items-center justify-center dark:rounded-full   bg-white300 dark:bg-white">
        {children}
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {total}
          </h4>
        </div>

        <span className="flex items-center font-inter text-black200 gap-1 text-sm font-medium ">
         {title}
        </span>
      </div>
    </div>
  );
};

export default CardDataStats;
