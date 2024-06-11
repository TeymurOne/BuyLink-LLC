import React, { ReactNode } from 'react';
interface Type {
  children: ReactNode;
}

export const TR: React.FC<Type> = ({ children }) => {
  return (
    <tr className="         dark:bg-boxdark border-0 bg-white hover:bg-tborderHover">
      {children}
    </tr>
  );
};

export const TD: React.FC<Type> = ({ children }) => {
  return (
    <>
      <td className="  dark:text-white300 border-gray border-0 py-2 text-xs  px-4 dark:border-strokedark">
        {children}
      </td>
    </>
  );
};
