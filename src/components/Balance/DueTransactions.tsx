const DueTransactions = ({ item }: any) => {
  console.log(item, 'item');

  return (
    <>
      <tr className="border-0 bg-white hover:bg-tborderHover dark:bg-boxdark">
        <td className="border-gray px-4 py-1 text-xs dark:border-strokedark dark:text-white xl:pl-11"></td>
      </tr>
    </>
  );
};

export default DueTransactions;
