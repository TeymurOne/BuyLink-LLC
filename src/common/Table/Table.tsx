import React, { ReactNode } from 'react';

interface Type {
  children: ReactNode;
}

export const TR: React.FC<Type> = ({ children }) => {
  return (
    <tr className="         border-0 bg-white hover:bg-tborderHover dark:bg-boxdark">
      {children}
    </tr>
  );
};

export const TD: React.FC<Type> = ({ children }) => {
  return (
    <>
      <td className="  border-0 border-gray px-4 py-2 text-xs  dark:border-strokedark dark:text-white300">
        {children}
      </td>
    </>
  );
};
