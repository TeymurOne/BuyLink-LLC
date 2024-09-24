import { useDispatch, useSelector } from 'react-redux';
import CardDataStats from '../../components/Balance/CardDataStats';
import DateCard from '../../components/Balance/DateCard.tsx';
import { Title } from '../../components/ui/Title';
import {
  useGetBalanceQuery,
  useGetTransactionsQuery,
} from '../../features/statistcs/apiSlice';
import {
  setBuylinkWallet,
  setCashTill,
  setDate,
  setDueBuyLink,
  setNetAmount,
  setTotalRevenue,
} from '../../features/balance/balanceSlice';
import { TbCurrencyManat } from 'react-icons/tb';
import icon_azn from '../../images/icon/azn.png';
import icon_card from '../../images/icon/Card.png';
import icon_money from '../../images/icon/money.png';
import icon_wallet from '../../images/icon/kaslok.png';
import icon_cash from '../../images/icon/money2.png';
import React, { useEffect } from 'react';
import Transactions from '../../components/Balance/Transactions';
import TableSkeleton from '../../skeleton/TableSkeleton';
import { useTranslation } from 'react-i18next';
import TbodyResponsive from '../../components/Balance/TbodyResponsive.tsx';

export default function Balance() {
  const dispatch = useDispatch();
  const {
    total_revenue,
    cash_till,
    due_to_buylink,
    net_amount,
    debt_date,
    buylink_wallet,
    filter,
  } = useSelector((store: any) => store.balance);
  const { data, isSuccess, isLoading } = useGetBalanceQuery('');
  const transactions = useGetTransactionsQuery(filter);
  const { t } = useTranslation();

  const sortedTransactions = transactions.currentData?.data
    ? [...transactions.currentData.data].sort((a: any, b: any) => {
        return (
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
      })
    : [];

  useEffect(() => {
    if (isSuccess) {
      dispatch(setTotalRevenue(data?.total_revenue));
      dispatch(setCashTill(data?.cash_till));
      dispatch(setDueBuyLink(Math.abs(data?.due_to_buylink)));
      dispatch(setNetAmount(data?.net_amount));
      dispatch(setBuylinkWallet(data?.wallet));
      dispatch(setDate(data?.debt_date));
    }
  }, [isSuccess]);

  if (isLoading || transactions.isLoading) return <TableSkeleton count="20" />;
  if (!transactions.isSuccess) return;

  return (
    <>
      <Title>{t('member.13')}</Title>
      <div className="grid w-full grid-cols-2 gap-8 px-4 py-4 xl:grid-cols-4">
        <div className="col-span-2 w-full">
          <CardDataStats
            title={t('balance.0')}
            apiData="all"
            rate={total_revenue}
            icon={<TbCurrencyManat />}
          >
            <div className="flex h-13.5 w-13.5 items-center justify-center rounded bg-[#F4F4F4]">
              <img src={icon_azn} alt="icon" />
            </div>
          </CardDataStats>
        </div>
        <div className="col-span-2 w-full sm:col-span-1">
          <CardDataStats
            title={t('balance.1')}
            rate={due_to_buylink}
            icon={<TbCurrencyManat />}
          >
            <div className="flex h-13.5 w-13.5 items-center justify-center rounded bg-[#F4F4F4]">
              <img src={icon_money} alt="icon" />
            </div>
          </CardDataStats>
        </div>
        <div className="col-span-2 w-full sm:col-span-1">
          <CardDataStats
            title={t('balance.4')}
            rate={net_amount}
            icon={<TbCurrencyManat />}
          >
            <div className="flex h-13.5 w-13.5 items-center justify-center rounded bg-[#F4F4F4]">
              <img src={icon_card} alt="icon" />
            </div>
          </CardDataStats>
        </div>
        <div className="sm-mt-1 col-span-2 w-full sm:col-span-1">
          <CardDataStats
            title={t('balance.3')}
            rate={buylink_wallet}
            apiData="wallet"
            icon={<TbCurrencyManat />}
          >
            <div className="flex h-13.5 w-13.5 items-center justify-center rounded bg-[#F4F4F4]">
              <img src={icon_wallet} alt="icon" />
            </div>
          </CardDataStats>
        </div>
        <div className="sm-mt-1 col-span-2 w-full sm:col-span-1">
          <CardDataStats
            title={t('balance.2')}
            rate={cash_till}
            apiData="cash_till"
            icon={<TbCurrencyManat />}
          >
            <div className="flex h-13.5 w-13.5 items-center justify-center rounded bg-[#F4F4F4]">
              <img src={icon_cash} className="items-center" alt="icon" />
            </div>
          </CardDataStats>
        </div>
        <div className="col-span-2 w-full sm:-mt-1">
          {due_to_buylink >= 30 && debt_date && (
            <DateCard title="Total Revenue" rate={debt_date} />
          )}
        </div>
      </div>
      {!transactions.currentData?.data && (
        <TableSkeleton count="10" height="0.1" />
      )}
      {transactions.currentData?.data &&
        transactions.currentData?.data.map((item: any, index: number) => (
          <TbodyResponsive item={item} key={index} />
        ))}
      <div className="mt-4 hidden rounded-sm shadow-default dark:border-strokedark dark:bg-boxdark md:block lg:mt-10 xl:mt-8 ">
        <div className="max-w-full overflow-hidden overflow-x-auto rounded-lg border border-tborder dark:border-white">
          <table className="w-full table-auto bg-white">
            <thead>
              <tr className="bg-white text-left text-title-2xsm text-black dark:bg-meta-4 dark:text-white">
                <td className="h-10 w-14.5 border-b border-r border-tborder px-4 font-medium">
                  ID
                </td>
                <td className="dark:text-white5 min-w-24.5 border-b border-r border-tborder py-2 font-medium sm:pl-0 md:pl-4">
                  {t('balanceTable.8')}
                </td>
                <td className="dark:text-white5 min-w-24.5 border-b border-r border-tborder py-2 font-medium sm:pl-0 md:pl-4">
                  {t('balanceTable.0')}
                </td>
                <td className="min-w-22.5 border-b border-r border-tborder px-3 py-2 font-medium dark:text-white">
                  {t('balanceTable.11')}
                </td>
                <td className="min-w-24.5 border-b border-r border-tborder px-2  py-2 font-medium dark:text-white">
                  {t('balanceTable.1')}
                </td>
                <td className="min-w-25.5 border-b border-r border-tborder  px-1 py-2 font-medium dark:text-white">
                  {t('balanceTable.2')}
                </td>
                <td className="min-w-22.5 border-b border-r border-tborder  px-3 py-2 font-medium dark:text-white">
                  {t('balanceTable.3')}
                </td>
                <td className="min-w-20.5 border-b border-r border-tborder px-2 py-2 font-medium dark:text-white ">
                  {t('balanceTable.4')}
                </td>
                <td className=" min-w-24.5 border-b border-r border-tborder px-4 py-2 font-medium">
                  {t('balanceTable.5')}
                </td>
                <td className="min-w-24.5 border-b border-r border-tborder px-4 py-2 font-medium dark:text-white">
                  {t('balanceTable.6')}
                </td>
                <td className="min-w-24.5 border-b border-l border-tborder px-4 py-2 font-medium">
                  {t('balanceTable.7')}
                </td>
              </tr>
            </thead>
            <tbody>
              <>
                {sortedTransactions.map((item: any, index: number) => (
                  <Transactions item={item} key={index} />
                ))}
              </>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
