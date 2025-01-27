import { useDispatch, useSelector } from 'react-redux';
import { Title } from '../../components/ui/Title';
import { useGetDueToQuery } from '../../features/statistcs/apiSlice';
import { useGetBalanceQuery} from '../../features/statistcs/apiSlice';
import {
  setNetDebt,
  setPayment,
  setTotalDebt,
} from '../../features/balance/balanceSlice';
import { TbCurrencyManat } from 'react-icons/tb';
import interest_rate from '../../images/icon/interest-rate.png';
import payment from '../../images/icon/payment.png';
import fund from '../../images/icon/fund.png';
import React, { useEffect } from 'react';
import TableSkeleton from '../../skeleton/TableSkeleton';
import { useTranslation } from 'react-i18next';
import DueTransactions from './DueTransactions.tsx';
import CardDueTo from './CardDueTo.tsx';

export default function Balance() {
  const dispatch = useDispatch();
  const { net_debts, total_debts, payments } = useSelector(
    (store: any) => store.balance,
  );

  const { data, isSuccess, isLoading } = useGetDueToQuery('');
  const transactions = useGetDueToQuery('');
const {data: balance } = useGetBalanceQuery()
  const { t } = useTranslation();
  useEffect(() => {
    if (isSuccess) {
      dispatch(setNetDebt(data?.net_debts));
      dispatch(setPayment(data?.payments));
      dispatch(setTotalDebt(data?.total_debts));
    }
  }, [isSuccess]);

  if (isLoading || transactions.isLoading) return <TableSkeleton count="20" />;

  if (!transactions.isSuccess) return;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2em"
        onClick={() => history.back()}
        height="2em"
        className="mb-2 cursor-pointer"
        viewBox="0 0 256 256"
      >
        <path
          fill="currentColor"
          d="M222 128a6 6 0 0 1-6 6H54.49l61.75 61.76a6 6 0 1 1-8.48 8.48l-72-72a6 6 0 0 1 0-8.48l72-72a6 6 0 0 1 8.48 8.48L54.49 122H216a6 6 0 0 1 6 6"
        />
      </svg>
      <Title>{t('member.14')}</Title>

      <div className="grid w-full grid-cols-2 gap-8 py-4 xl:grid-cols-4">
        <div className="layout2 order-5 col-span-2 w-full sm:col-span-1  xl:order-none">
          <CardDueTo
            title={t('balance.12')}
            rate={
              total_debts +
              (balance?.balance < 0 ? balance?.balance * -1 : balance?.balance )
            }
            icon={<TbCurrencyManat />}
          >
            <div className="flex h-13.5 w-13.5 items-center justify-center rounded bg-[#F4F4F4]">
              <img src={interest_rate} alt="icon" />
            </div>
          </CardDueTo>

        </div>
        <div className="col-span-2 w-full">
          <CardDueTo
            title={t('balance.13')}
            apiData="all"
            rate={payments}
            icon={<TbCurrencyManat />}
          >
            <div className="flex h-13.5 w-13.5 items-center justify-center rounded bg-[#F4F4F4]">
              <img src={payment} alt="icon" />
            </div>
          </CardDueTo>
        </div>
        <div className="layout2 order-5 col-span-2 w-full sm:col-span-1  xl:order-none">
          <CardDueTo
            title={t('balance.14')}
            rate={net_debts}
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
                  {t('balance.21')}
                </td>
                <td className="dark:text-white5 min-w-24.5 border-b border-r border-tborder py-2 font-medium sm:pl-0 md:pl-4">
                  {t('balanceTable.9')}
                </td>
                <td className="dark:text-white5 min-w-24.5 border-b border-r border-tborder py-2 font-medium sm:pl-0 md:pl-4">
                  {t('balanceTable.10')}
                </td>
              </tr>
            </thead>
            <tbody>
              <>
                {transactions.currentData?.data &&
                  transactions.currentData?.data.map(
                    (item: any, index: number) => {
                      return <DueTransactions item={item} key={index} />;
                    },
                  )}
              </>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
