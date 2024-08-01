const Transactions = ({ item }: any) => {
  console.log(item, 'item');

  return (
    <>
      <tr className="border-0 bg-white hover:bg-tborderHover dark:bg-boxdark">
        <td className="border-0 border-gray px-4 text-xs dark:border-strokedark dark:text-white">
          {item?.id}
        </td>
        <td className="border-0 border-gray px-4 text-xs dark:border-strokedark dark:text-white">
          <p className="inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium">
            {item?.operator_name}
          </p>
        </td>
        <td className="border-gray px-4 py-1 text-xs dark:border-strokedark dark:text-white xl:pl-11">
          {item?.amount}
        </td>
        <td className="border-0 border-gray  px-4 dark:border-strokedark dark:text-white">
          <p className="inline-flex rounded-full bg-opacity-10 px-3 py-1 text-xs font-medium">
            {item?.discounted_percent}
          </p>
        </td>

        <td className="border-0 border-gray px-4 dark:border-strokedark dark:text-white">
          <p className="inline-flex rounded-full bg-opacity-10 px-3 py-1 text-xs font-medium">
            {item?.discounted_amount}
          </p>
        </td>
        <td className="border-0 border-gray px-4 dark:border-strokedark dark:text-white">
          <p className="inline-flex rounded-full bg-opacity-10 px-3 py-1 text-xs font-medium">
            {item?.partner.total_commission}
          </p>
        </td>
        <td className="border-0 border-gray px-4 dark:border-strokedark">
          <p className="inline-flex rounded-full bg-opacity-10 px-3 py-1 text-xs font-medium">
            {item?.commission_amount} {/* comisssion */}
          </p>
        </td>

        <td className="border-0 border-gray px-4 dark:border-strokedark">
          <p className="inline-flex rounded-full bg-opacity-10 px-3 py-1 text-xs font-medium">
            {item?.created_at.slice(0, 10)} / {item?.created_at.slice(11, 16)}
          </p>
        </td>

        <td className="border-0 border-gray px-4 dark:border-strokedark">
          <p className="inline-flex rounded-full bg-opacity-10 px-3 py-1 text-xs font-medium">
            {item?.net_amount}
          </p>
        </td>
        <td className="border-0 border-gray px-4 dark:border-strokedark">
          <p className="inline-flex rounded-full bg-opacity-10 px-3 py-1 text-xs font-medium">
            {item?.user?.id}
          </p>
        </td>
      </tr>
    </>
  );
};

export default Transactions;
