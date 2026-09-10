import React from 'react';
import { useTranslation } from 'react-i18next';

interface Date {
  rate?: number;
}

const DateCard: React.FC<Date> = ({ rate }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex w-full items-center space-x-4 rounded-xl border border-black border-opacity-60 bg-transparent py-3 pl-4 shadow dark:bg-boxdark">
        <div>
          <svg
            width="60"
            height="61"
            viewBox="0 0 60 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="0.5" width="60" height="60" rx="30" fill="#39B554" />
            <path
              d="M45 32.1667C45 40.4509 38.2843 47.1667 30 47.1667C21.7157 47.1667 15 40.4509 15 32.1667C15 23.8824 21.7157 17.1667 30 17.1667C38.2843 17.1667 45 23.8824 45 32.1667Z"
              stroke="white"
              strokeWidth="1.5"
            />
            <path
              d="M30 32.1667V25.5"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M26.6667 13.8333H33.3333"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="font-roboto text-xl font-bold dark:text-white xl:text-lg">
            {rate}{' '}
            <span className="text-lg font-normal">{t('balance.10')}</span>
          </span>
          <span className="text-sm">{t('balance.7')}</span>
        </div>
      </div>
    </>
  );
};

export default DateCard;
