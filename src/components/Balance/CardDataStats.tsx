import React, { ReactNode, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../features/balance/balanceSlice';

interface CardDataStatsProps {
  children: ReactNode;
  title: string;
  rate: string;
  icon?: any;
  apiData?: string;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  children,
  title,
  rate,
  apiData,
  icon,
}) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClick = () => {
    if (apiData) dispatch(setFilter(apiData));
    if (title == 'Due to BuyLink') {
      setShow(!show);
    }
  };

  return (
    <>
      <div
        onClick={handleClick}
        className={` hover:bg-[#DAE2F4]  ${
          show ? 'rounded-t-xl ' : 'rounded-xl'
        }     w-full cursor-pointer bg-white  py-5 shadow dark:bg-boxdark `}
      >
        <div className="relative flex w-full space-x-4">
          <div className="pl-4">{children}</div>
          <div className="flex w-full  flex-col ">
            <span className="text-base font-normal text-darkgray dark:text-white xl:text-lg">
              {title}
            </span>
            <span className="flex text-xl font-medium dark:text-white xl:text-3xl">
              {rate} {icon}
            </span>
            {show && (
              <div
                id="chat"
                className="shadow-top-none absolute left-0 right-0 top-20 h-50 w-full overflow-y-scroll rounded-b-xl rounded-bl-xl bg-white px-3 pb-2 pt-4 shadow"
              >
                <ul>
                  <li className="flex justify-between border-b border-black border-opacity-20 pb-2">
                    <p className="text-lg font-normal text-black">
                      Buylink Wallet
                    </p>
                    <p className="text-lg font-medium text-menuBorder">
                      120 <sub>Azn</sub>
                    </p>
                  </li>
                  <li className="flex justify-between border-b border-black border-opacity-20 py-2 ">
                    <p className="text-lg font-normal text-black">
                      Buylink Wallet
                    </p>
                    <p className="text-lg font-medium text-menuBorder">
                      120 <sub>Azn</sub>
                    </p>
                  </li>
                  <li className="flex justify-between border-black border-opacity-20 py-2">
                    <p className="text-lg font-normal text-black">
                      Buylink Wallet
                    </p>
                    <p className="text-lg font-medium text-menuBorder">
                      120 <sub>Azn</sub>
                    </p>
                  </li>
                  <li className="flex justify-between border-b border-black border-opacity-20 pb-2 ">
                    <p className="text-lg font-normal text-black">
                      Buylink Wallet
                    </p>
                    <p className="text-lg font-medium text-menuBorder">
                      120 <sub>Azn</sub>
                    </p>
                  </li>
                  <li className="flex justify-between border-b border-black border-opacity-20 py-2">
                    <p className="text-lg font-normal text-black">
                      Buylink Wallet
                    </p>
                    <p className="text-lg font-medium text-menuBorder">
                      120 <sub>Azn</sub>
                    </p>
                  </li>
                  <li className="flex justify-between border-black border-opacity-20 py-2">
                    <p className="text-lg font-normal text-black">
                      Buylink Wallet
                    </p>
                    <p className="text-lg font-medium text-menuBorder">
                      120 <sub>Azn</sub>
                    </p>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDataStats;
