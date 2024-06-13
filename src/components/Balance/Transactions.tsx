
const Transactions: React.FC<any> = ({ item }) => (
    <tr className="dark:bg-boxdark border-0 bg-white hover:bg-tborderHover">
      <td className="dark:text-white border-gray border-0 text-xs px-4 dark:border-strokedark">{item?.id}</td>
      <td className="border-gray dark:text-white py-1 px-4 dark:border-strokedark xl:pl-11">{item?.amount}</td>
      <td className="border-gray dark:text-white border-0 text-xs px-4 dark:border-strokedark">
        <p className="inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium">{item?.discounted_percent}</p>
      </td>
      <td className="border-gray dark:text-white border-0 text-xs px-4 dark:border-strokedark">
        <p className="inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium">{item?.discounted_amount}</p>
      </td>
      <td className="border-gray border-0 text-xs px-4 dark:border-strokedark">
        <p className="inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium">{item?.created_at}</p>
      </td>
      <td className="border-gray border-0 text-xs px-4 dark:border-strokedark">
        <p className="inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium">{item?.amount}</p>
      </td>
      <td className="border-gray border-0 text-xs px-4 dark:border-strokedark">
        <p className="inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium">{item?.user.id}</p>
      </td>
      <td className="border-gray border-0 text-xs px-4 dark:border-strokedark">
        <p className="inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium">{item?.amount-item?.partner.total_commission}</p>
      </td>
      <td className="border-gray border-0 text-xs px-4 dark:border-strokedark">
        <p className="inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium">{item?.user.id}</p>
      </td>
    </tr>
  );
  
  export default Transactions;
  