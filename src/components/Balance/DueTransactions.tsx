const DueTransactions = ({ item }: any) => {

  return (
    <>
      <td className="border-0 border-gray px-4 text-xs dark:border-strokedark dark:text-white">
        <p className="inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium">
          {item?.date}
        </p>
      </td>
      <td className="border-0 border-gray px-4 text-xs dark:border-strokedark dark:text-white">
        <p className="inline-flex rounded-full bg-opacity-10 px-3 py-1 text-[#1A518E] text-xs font-medium">
          {item?.amount} AZN
        </p>
      </td>
      <td className="border-0 border-gray px-4 text-xs dark:border-strokedark dark:text-white">
        <p className="inline-flex rounded-full bg-opacity-10 px-3 py-1 text-xs text-[#1A518E] font-medium">
          {item?.payment_type}
        </p>
      </td>
    </>
  );
};

export default DueTransactions;
