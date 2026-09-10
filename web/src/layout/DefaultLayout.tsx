import { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Outlet, useParams } from 'react-router-dom';
import { useGetPenaltyQuery } from '../features/branch/apiSlice.tsx';
import { useTranslation } from 'react-i18next';

interface DueItem {
  overdue_days: number;
  amount: number;
  penalty: number;
}

const DefaultLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const { data }: { data?: { data: DueItem[] } } = useGetPenaltyQuery(id);
  const truncateNumber = (value: any) => {
    if (isNaN(value) || value === null) return '';
    const numberStr = value.toString();
    const dotIndex = numberStr.indexOf('.');
    if (dotIndex === -1) return numberStr;
    return numberStr.slice(0, dotIndex + 3);
  };
  return (
    <>
      <div className="flex h-screen flex-col font-poppins dark:bg-boxdark-2 dark:text-bodydark">
        {data?.data
          ?.filter((item: DueItem) => item.overdue_days > 0)
          .map((item: DueItem, index: number) => (
            <div
              key={index}
              className={`flex h-6 shrink-0 items-center justify-center ${
                item.overdue_days < 3 ? 'bg-[#FF8D24]' : 'bg-[#FF0000]'
              }`}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.3em"
                  height="1.3em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.05"
                    d="m11.25 11.25l.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0m-9-3.75h.008v.008H12z"
                  />
                </svg>
              </span>

              <span className="pl-2 text-xs font-semibold text-white">
                {t('member.17', {
                  days: item.overdue_days,
                  amount: truncateNumber(item.amount),
                  penalty: item.penalty,
                })}
              </span>
            </div>
          ))}
        <div className="flex flex-1 overflow-hidden">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <main className="flex-1">
              <div className="mx-auto max-w-screen-2xl bg-whiter p-2 dark:bg-[#15192A] md:p-8 2xl:p-10">
                <Outlet />
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
