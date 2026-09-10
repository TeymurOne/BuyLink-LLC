import { useDispatch, useSelector } from 'react-redux';
import { Title } from '../../components/ui/Title';
import { useGetDueToQuery } from '../../features/statistcs/apiSlice';
import { useGetBalanceQuery} from '../../features/statistcs/apiSlice';
import { TbCurrencyManat } from 'react-icons/tb';
import interest_rate from '../../images/icon/interest-rate.png';
import payment from '../../images/icon/payment.png';
import fund from '../../images/icon/fund.png';
import React, { useEffect, useState } from 'react';
import TableSkeleton from '../../skeleton/TableSkeleton';
import { useTranslation } from 'react-i18next';
import CardDueTo from './CardDueTo.tsx';
import getState from '../../data/helpers/cookie.ts';
import axiosInstance from '../../core/lib/axios.config.ts';
import { setCredentials } from '../../features/auth/authSlice.ts';

export default function Balance() {
  const dispatch = useDispatch();
  const { net_debts, total_debts, payments } = useSelector(
    (store: any) => store.balance,
  );
  const [userData, setUserData] = useState<any>(null);
  const [balanceData, setBalanceData] = useState<any>(null);
  const tokenget = getState();
  const { data, isSuccess, isLoading } = useGetDueToQuery('');
  const transactions = useGetDueToQuery('');
  const {data: balance } = useGetBalanceQuery()
  const { t } = useTranslation();
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axiosInstance.get('/auth/user');
        const user = response.data?.data;
        setUserData(user);
        dispatch(setCredentials({ ...user }));
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (tokenget) {
      fetchUserData();
    }
  }, []);
  useEffect(() => {
    const fetchBalanceData = async () => {
      try {
        const response = await axiosInstance.get('/partner-balances');
       const balance = response.data
        setBalanceData(balance);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (tokenget) {
      fetchBalanceData();
    }
  }, []);
  if (isLoading || transactions.isLoading) return <TableSkeleton count="20" />;

  if (!transactions.isSuccess) return;
  const discount = userData?.partners?.reduce((sum, partner) => {
    return sum + (partner?.discounted_revenue || 0);
  }, 0);
  console.log(discount)
  return (
    <>
      <Title>{t('member.18')}</Title>
      <div className="grid w-full grid-cols-2 gap-4 py-4 xl:grid-cols-4">
        <div className="layout2 order-5 col-span-2 w-full sm:col-span-1  xl:order-none">
          <div className="col-span-2 w-full sm:col-span-1">
            <CardDueTo
              title={t('statistic.8')}
              title3={t('balance.19')}
              title2={t('balance.20')}
              rate={balanceData?.total_revenue}
              rate2={discount}
              icon={<TbCurrencyManat />}
              className="flex justify-between"
            >
              <div className="flex w-45 justify-between">
                <div className="flex h-13.5 w-13.5 items-center justify-center rounded bg-[#F4F4F4]">
                  <img src={interest_rate} alt="icon" />
                </div>

              </div>
            </CardDueTo>
          </div>
        </div>
        <div className="col-span-1 w-full">
          <CardDueTo
            title={t('balance.1')}
            apiData="all"
            rate={balanceData?.due_to_buylink}
            icon={<TbCurrencyManat />}
          >
            <div className="flex h-13.5 w-13.5 items-center justify-center rounded bg-[#F4F4F4]">
              <img src={payment} alt="icon" />
            </div>
          </CardDueTo>
        </div>
        <div className="col-span-1 w-full">
          <CardDueTo
            title={t('balance.15')}
            apiData="all"
            rate={balanceData?.payments_amount}
            icon={<TbCurrencyManat />}
          >
            <div className="flex h-13.5 w-13.5 items-center justify-center rounded bg-[#F4F4F4]">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.6875 7.18824V10.4063C21.8271 10.8406 23.4375 12.7322 23.4375 15C23.4375 17.2678 21.8271 19.1594 19.6875 19.5937V22.8118C20.9837 22.8087 21.9673 22.7929 22.7628 22.712C23.7241 22.6142 24.3062 22.4291 24.757 22.1278C25.2006 21.8314 25.5815 21.4506 25.8778 21.007C26.1791 20.5562 26.3642 19.9741 26.462 19.0128C26.5614 18.0358 26.5625 16.7751 26.5625 15C26.5625 13.2249 26.5614 11.9642 26.462 10.9872C26.3642 10.0259 26.1791 9.44384 25.8778 8.993C25.5815 8.54941 25.2006 8.16855 24.757 7.87215C24.3062 7.57091 23.7241 7.38581 22.7628 7.28802C21.9673 7.2071 20.9837 7.19131 19.6875 7.18824ZM17.8125 22.8125L17.8125 7.1875L12.1875 7.1875V22.8125H17.8125ZM10.3125 22.8118V19.5937C8.1729 19.1594 6.5625 17.2678 6.5625 15C6.5625 12.7322 8.1729 10.8406 10.3125 10.4063V7.18824C9.01629 7.19131 8.03267 7.2071 7.23719 7.28802C6.27589 7.38581 5.69384 7.57091 5.243 7.87216C4.79941 8.16855 4.41855 8.54941 4.12215 8.993C3.82091 9.44384 3.63581 10.0259 3.53802 10.9872C3.43863 11.9642 3.4375 13.2249 3.4375 15C3.4375 16.7751 3.43863 18.0358 3.53802 19.0128C3.63581 19.9741 3.82091 20.5562 4.12216 21.007C4.41855 21.4506 4.79941 21.8314 5.243 22.1278C5.69384 22.4291 6.27589 22.6142 7.23719 22.712C8.03267 22.7929 9.01629 22.8087 10.3125 22.8118ZM10.3125 12.3475C9.22013 12.7336 8.4375 13.7754 8.4375 15C8.4375 16.2246 9.22013 17.2664 10.3125 17.6525L10.3125 12.3475ZM19.6875 17.6525C20.7799 17.2664 21.5625 16.2246 21.5625 15C21.5625 13.7754 20.7799 12.7336 19.6875 12.3475L19.6875 17.6525ZM22.9526 5.42265C24.0621 5.53552 24.9884 5.77174 25.7987 6.31315C26.447 6.74634 27.0037 7.30299 27.4368 7.9513C27.9783 8.76158 28.2145 9.68787 28.3274 10.7974C28.4375 11.8804 28.4375 13.2365 28.4375 14.9481V15.0519C28.4375 16.7635 28.4375 18.1196 28.3274 19.2026C28.2145 20.3121 27.9783 21.2384 27.4368 22.0487C27.0037 22.697 26.447 23.2537 25.7987 23.6868C24.9884 24.2283 24.0621 24.4645 22.9526 24.5774C21.8696 24.6875 20.5135 24.6875 18.802 24.6875H11.198C9.4865 24.6875 8.13037 24.6875 7.04743 24.5774C5.93788 24.4645 5.01158 24.2283 4.2013 23.6868C3.55299 23.2537 2.99634 22.697 2.56315 22.0487C2.02174 21.2384 1.78552 20.3121 1.67265 19.2026C1.56248 18.1196 1.56249 16.7635 1.5625 15.052V14.948C1.56249 13.2365 1.56248 11.8804 1.67265 10.7974C1.78552 9.68788 2.02174 8.76158 2.56315 7.9513C2.99634 7.30299 3.55299 6.74634 4.2013 6.31315C5.01158 5.77174 5.93787 5.53552 7.04743 5.42265C8.13038 5.31248 9.4865 5.31249 11.198 5.3125L18.802 5.3125C20.5135 5.31249 21.8696 5.31248 22.9526 5.42265Z"
                  fill="#1A518E"
                />
              </svg>
            </div>
          </CardDueTo>
        </div>
        <div className="layout2 order-5 col-span-2 w-full sm:col-span-1  xl:order-none">
          <CardDueTo
            title={t('balance.18')}
            rate={balanceData?.due_to_buylink + balanceData?.payments_amount}
            icon={<TbCurrencyManat />}
          >
            <div className="flex h-13.5 w-13.5 items-center justify-center rounded bg-[#F4F4F4]">
              <img src={fund} alt="icon" />
            </div>
          </CardDueTo>
        </div>
      </div>
      {!transactions.currentData?.data && (
        <TableSkeleton count="10" height="0.1" />
      )}
      <div className="mt-4 rounded-sm shadow-default dark:border-strokedark dark:bg-boxdark lg:mt-10 xl:mt-8">
        <div className="max-w-full overflow-hidden overflow-x-auto rounded-lg border border-tborder dark:border-white">
          <table className="w-full table-auto bg-white">
            <thead>
              <tr className="bg-white text-left text-title-2xsm text-black dark:bg-meta-4 dark:text-white">
                <td className="dark:text-white5 min-w-24.5 border-b border-r border-tborder py-2 font-medium sm:pl-0 md:pl-4">
                  {t('balance.16')}
                </td>
                <td className="dark:text-white5 min-w-24.5 border-b border-r border-tborder py-2 font-medium sm:pl-0 md:pl-4">
                  {t('balance.22')}
                </td>
                <td className="dark:text-white5 min-w-24.5 border-b border-r border-tborder py-2 font-medium sm:pl-0 md:pl-4">
                  {t('balance.23')}
                </td>
                <td className="dark:text-white5 min-w-24.5 border-b border-r border-tborder py-2 font-medium sm:pl-0 md:pl-4">
                  {t('balance.17')}
                </td>
                <td className="dark:text-white5 min-w-24.5 border-b border-r border-tborder py-2 font-medium sm:pl-0 md:pl-4">
                  {t('balance.1')}
                </td>
              </tr>
            </thead>
            <tbody>
              {userData?.partners.map((item) => (
                <tr className="border-0 bg-white hover:bg-tborderHover dark:bg-boxdark">
                  <td className="border-0 border-gray px-4 text-xs dark:border-strokedark dark:text-white">
                    <p className="inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium">
                      {item.title}
                    </p>
                  </td>
                  <td className="border-0 border-gray px-4 text-xs dark:border-strokedark dark:text-white">
                    <p className="inline-flex rounded-full bg-opacity-10 px-3 py-1 text-xs font-medium text-[#1A518E]">
                      {item?.total_revenue || '-'}
                    </p>
                  </td>
                  <td className="border-0 border-gray px-4 text-xs dark:border-strokedark dark:text-white">
                    <p className="inline-flex rounded-full bg-opacity-10 px-3 py-1 text-xs font-medium text-[#1A518E]">
                      {item?.discounted_revenue || '-'}
                    </p>
                  </td>
                  <td className="border-0 border-gray px-4 text-xs dark:border-strokedark dark:text-white">
                    <p className="inline-flex rounded-full bg-opacity-10 px-3 py-1 text-xs font-medium text-[#1A518E]">
                      {item?.payments_amount || 0}
                    </p>
                  </td>
                  <td className="border-0 border-gray px-4 text-xs dark:border-strokedark dark:text-white">
                    <p className="inline-flex rounded-full bg-opacity-10 px-3 py-1 text-xs font-medium text-[#1A518E]">
                      {item?.balance}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
