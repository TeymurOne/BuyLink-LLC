import { ReactNode, useState } from 'react';

interface CardDataStatsProps {
  children: ReactNode;
  title: string;
  rate: string;
  icon?: any;
  apiData?: string;
}

import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../features/balance/balanceSlice';

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
        }     py-5 w-full cursor-pointer  shadow dark:bg-boxdark bg-white `}
      >
        <div className="flex space-x-4 relative w-full">
          <div className="pl-4">{children}</div>
          <div className="flex flex-col  w-full ">
            <span className="font-inter text-darkgray dark:text-white xl:text-lg text-base font-normal">
              {title}
            </span>
            <span className="xl:text-3xl flex text-xl dark:text-white font-medium font-inter">
              {rate} {icon}
            </span>
            {show && (
              <div id='chat' className="bg-white pt-4 pb-2 overflow-y-scroll px-3 shadow shadow-top-none rounded-b-xl rounded-bl-xl  absolute top-20 left-0 h-50 w-full  right-0">
                <ul>
                  <li className="border-b flex pb-2 justify-between border-black border-opacity-20 ">
                    <p className='font-normal text-lg font-inter text-black'>Buylink Wallet</p>
                    <p className='text-menuBorder font-medium text-lg font-inter'>120 <sub>Azn</sub></p>
                  </li>
                  <li className="border-b    py-2 flex justify-between border-black border-opacity-20 ">
                    <p className='font-normal text-lg font-inter text-black'>Buylink Wallet</p>
                    <p className='text-menuBorder font-medium text-lg font-inter'>120 <sub>Azn</sub></p>
                  </li>
                  <li className="  py-2 flex justify-between border-black border-opacity-20 ">
                    <p className='font-normal text-lg font-inter text-black'>Buylink Wallet</p>
                    <p className='text-menuBorder font-medium text-lg font-inter'>120 <sub>Azn</sub></p>
                  </li>
                  <li className="border-b flex pb-2 justify-between border-black border-opacity-20 ">
                    <p className='font-normal text-lg font-inter text-black'>Buylink Wallet</p>
                    <p className='text-menuBorder font-medium text-lg font-inter'>120 <sub>Azn</sub></p>
                  </li>
                  <li className="border-b    py-2 flex justify-between border-black border-opacity-20 ">
                    <p className='font-normal text-lg font-inter text-black'>Buylink Wallet</p>
                    <p className='text-menuBorder font-medium text-lg font-inter'>120 <sub>Azn</sub></p>
                  </li>
                  <li className="  py-2 flex justify-between border-black border-opacity-20 ">
                    <p className='font-normal text-lg font-inter text-black'>Buylink Wallet</p>
                    <p className='text-menuBorder font-medium text-lg font-inter'>120 <sub>Azn</sub></p>
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
