import { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import { useGetPenaltyQuery } from '../features/branch/apiSlice.tsx';

interface DueItem {
  overdue_days: number;
  amount: number;
  penalty: number;
}

const DefaultLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const { data }: { data?: { data: DueItem[] } } = useGetPenaltyQuery('');
  console.log(data);
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
                -{item.overdue_days} Days{' '}
                <span className="font-normal">Overdue Payment!</span> Penalties
                start to charge per each day (Overdue amount: {item.amount}₼,
                Penalty Amount: {item.penalty}₼)
              </span>
            </div>
          ))}
        <div className="flex flex-1 overflow-hidden">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <main className="flex-1">
              <div className="mx-auto max-w-screen-2xl bg-whiter p-2 dark:bg-boxdark-2 md:p-8 2xl:p-10">
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
