import React from 'react';
import { useNavigate } from 'react-router-dom';
import successImage from '../../images/icon/pana.png';

const ThirdPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-[#F1FAFF] p-4 font-poppins">
      <div className="mt-10 flex flex-col items-center">
        <img src={successImage} alt="Success" className="mb-8 h-40 w-40" />
        <h1 className="mb-5 text-center text-[24px] font-medium leading-8">
          Discount received
          <br />
          successfully!
        </h1>
      </div>

      <div className="mb-10 w-full rounded-lg bg-[#F6F6F6] p-6 shadow-md">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm font-normal text-[#777777]">Date</p>
          <div className="rounded-xl bg-[#ECEEFF] p-2">
            <p className="text-sm font-normal">10-Feb-2024</p>
          </div>
        </div>
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm font-normal text-[#777777]">Initial Price</p>
          <div className="rounded-xl bg-[#ECEEFF] p-2">
            <p className="text-sm font-normal">90 AZN</p>
          </div>
        </div>
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm font-normal text-[#777777]">Discount</p>
          <div className="rounded-xl bg-[#ECEEFF] p-2">
            <p className="text-sm  font-normal">10%</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-normal text-[#777777]">Final price</p>
          <div className="rounded-xl  bg-[#4C5DF5]  p-2">
            <p className="text-sm font-normal text-white">81 AZN</p>
          </div>
        </div>
      </div>

      <button
        onClick={() => navigate('/partner')}
        className="w-full rounded-lg bg-blue-500 py-3 font-medium text-white"
      >
        Go To Catalog
      </button>
    </div>
  );
};

export default ThirdPage;
