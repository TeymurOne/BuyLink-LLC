
const Transactions = ({ newData }: any) => {
  let content;
  if (newData) {
    console.log(newData, 'newdata');

    content = newData.map((item: any, index: number) => {
      return <Tbody item={item} key={index} />;
    });
  }

  return (
    <>
      <tbody>{content}</tbody>
    </>
  );
};

const Tbody = ({ item }: any) => {
  return (
    <>
      <tr className=" dark:bg-boxdark ">
        <td className="border-b border-[#eee] text-[16px] py-5 px-4 dark:border-strokedark">
          {item?.id}
        </td>

        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
          <p className="inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium  ">
            {item?.profit}
          </p>
        </td>
        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
          <p className="inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ">
            {item?.amount}
          </p>
        </td>
        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
          <p className="inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ">
            {item?.discounted_amount}
          </p>
        </td>
        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
          <p className="inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ">
            {item?.discounted_percent}
          </p>
        </td>
        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
          <p className="inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ">
            {item?.created_at}
          </p>
        </td>

        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
          <p className="inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ">
            {item?.partner.name}
          </p>
        </td>
      </tr>

  
    </>
  );
};

export default Transactions;
