import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type TitleProps = {
  children?: ReactNode;
  link?: string;
  img?: string;
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
      <h4 className=" text-xl font-semibold text-black dark:text-white">
        {children}
      </h4>
    </>
  );
};

export const Search: React.FC<TitleProps> = () => {
  return (
    <>
      <input
        type="text"
        placeholder=" search..."
        className="max-w-70 w-full shadow-2 rounded-xl py-2 my-4   pl-9 focus:outline-none   "
      />
    </>
  );
};

export const CreateBtn: React.FC<TitleProps> = ({ link, children, img }) => {
  return (
    <>
      <Link
        to={`/admin/${link}`}
        className="bg-white text-xs font-medium  mb-4 lg:mb-0 md:mb-0 sm:mb-0 space-x-2  rounded-md  justify-center flex items-center h-9 w-full max-w-35 "
      >
        <img src={img} alt="Create icon" />
        {children}
      </Link>
    </>
  );
};

export const Thead: React.FC<TheadProps> = ({ titles }) => {
  return (
    <>
      <thead className='md:contents hidden'>
        <tr className=" bg-white  text-title-2xsm font-poppins text-black text-left dark:bg-meta-4">
          <th className="w-14.5 h-10  border-b border-r  border-tborder px-4  font-medium ">
            ID
          </th>
          {titles.map((title: string, index: number) => (
            <th
              key={index}
              className="min-w-24.5 py-2 border-b border-r  border-tborder px-4  font-medium"
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
