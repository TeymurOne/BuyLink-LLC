import { Link } from 'react-router-dom';
import React, { ReactNode } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
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
      <h4 className="flex items-center  px-4 text-xl font-semibold text-black dark:text-white md:px-0">
        {children}
      </h4>
    </>
  );
};
export const TitleArrow: React.FC<TitleProps> = ({ children }) => {
  return (
    <>
      <h4 className="flex items-center text-xl font-semibold text-black dark:text-white">
        {children}
        <FaArrowLeft
          onClick={() => window.history.back()}
          style={{ cursor: 'pointer', marginLeft: '20px' }}
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
        placeholder="search..."
        className="my-4 w-full max-w-70 rounded-xl py-2 pl-9 shadow-2 focus:outline-none dark:bg-boxdark   "
      />
    </>
  );
};

export const CreateBtn: React.FC<TitleProps> = ({ link, children, img }) => {
  return (
    <>
      <Link
        to={`/admin/${link}`}
        className="mb-4 flex h-9 w-full max-w-35 items-center justify-center space-x-2 rounded-md bg-white text-xs font-medium dark:bg-meta-4 dark:text-white sm:mb-0 md:mb-0 lg:mb-0 "
      >
        <img src={create} className="mr-2" alt="Create icon" />
        {children}
      </Link>
    </>
  );
};

export const Thead: React.FC<TheadProps> = ({ titles }) => {
  return (
    <>
      <thead className="md:contents">
        <tr className="bg-white text-left text-title-2xsm text-black dark:bg-meta-4">
          <th className="h-10 w-14.5 border-b border-r border-tborder px-4 font-medium dark:text-white ">
            Sıra sayı
          </th>
          {titles.map((title: string, index: number) => (
            <th
              key={index}
              className="min-w-24.5 border-b border-r border-tborder px-4 py-2 font-medium dark:text-white"
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
      <div className="rounded-sm shadow-default dark:border-strokedark dark:bg-boxdark md:block">
        <div className="max-w-full overflow-hidden overflow-x-auto rounded-lg border border-tborder">
          <table className="w-full table-auto bg-white">{children}</table>
        </div>
      </div>
    </>
  );
};
