import React, { ReactNode } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import create from '../../images/action-icon/create.svg';


type TitleProps = {
  children?: ReactNode;
  link?: string;
  img?: string;
  onchange?: any;
};
type TheadProps = {
  titles: string[];
};
type TableProps = {
  children: any;
};
export const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <>
      
      <h4 className=" flex items-center  text-xl font-semibold text-black dark:text-white">
        {children}
        <FaArrowLeft
        onClick={() => window.history.back()}
        style={{ cursor: 'pointer', marginLeft:'20px' }}
      />
      </h4>
    </>
  );
};

export const Search: React.FC<TitleProps> = ({ onchange }) => {
  return (
    <>
      <input
        type="text"
        onChange={onchange}
        placeholder=" search..."
        className="max-w-70 dark:bg-boxdark w-full shadow-2 rounded-xl py-2 my-4   pl-9 focus:outline-none   "
      />
    </>
  );
};

export const CreateBtn: React.FC<TitleProps> = ({ link, children, img }) => {

  return (
    <>
      <Link
        to={`/admin/${link}`}
        className="bg-white text-xs dark:bg-meta-4 dark:text-white font-medium  mb-4 lg:mb-0 md:mb-0 sm:mb-0 space-x-2  rounded-md  justify-center flex items-center h-9 w-full max-w-35 "
      >
        <img src={create} className='mr-2' alt="Create icon" />
        {children}
      </Link>
    </>
  );
};

export const Thead: React.FC<TheadProps> = ({ titles }) => {
  return (
    <>
      <thead className="md:contents hidden">
        <tr className=" bg-white  text-title-2xsm font-poppins text-black text-left dark:bg-meta-4">
          <th className="w-14.5 h-10  border-b border-r dark:text-white  border-tborder px-4  font-medium ">
            Sıra sayı
          </th>
          {titles.map((title: string, index: number) => (
            
            
            <th
              key={index}
              className="min-w-24.5 py-2 border-b dark:text-white border-r  border-tborder px-4  font-medium"
            >
              {title}
            </th>
          ))}
        </tr>
      </thead>
    </>
  );
};

export const TableLayout: React.FC<TableProps> = ({ children }) => {
  return (
    <>
      <div className="rounded-sm md:block hidden    shadow-default  dark:border-strokedark dark:bg-boxdark ">
        <div className="max-w-full  border  rounded-lg border-tborder overflow-hidden   overflow-x-auto   ">
          <table className="w-full table-auto bg-white    ">{children}</table>
        </div>
      </div>
    </>
  );
};
