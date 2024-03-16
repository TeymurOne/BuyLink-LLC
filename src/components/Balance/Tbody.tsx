
const Transactions = ({newData}:any) => {
   
    
  let content;
  if (newData) {
  
    content = newData.map((item: any, index: number) => {
      return <Tbody item={item} key={index} />;
    });
  }

  return (
    <>
      <div className="rounded-sm pt-20   shadow-default dark:border-strokedark dark:bg-boxdark ">
        <div className="max-w-full  overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-[14px] text-left dark:bg-meta-4">
                <th className="min-w-[50px] py-4 px-4  font-medium ">ID</th>

                <th className="min-w-[200px] py-4 px-4 font-medium ">Profit</th>
                <th className="min-w-[200px] py-4 px-4 font-medium ">Amount</th>
                <th className="min-w-[200px] py-4 px-4 font-medium ">
                  Discounted_amount
                </th>

                <th className=" min-w-[200px] py-4 px-4  font-medium ">
                  Discounted_percent
                </th>
                <th className="min-w-[200px] py-4 px-4 font-medium ">
                  Created_at
                </th>
                <th className="min-w-[200px] py-4 px-4 font-medium ">User</th>
              </tr>
            </thead>
            <tbody>{content}</tbody>
          </table>
        </div>
      </div>
    </>
  );
};

const Tbody = ({ item }: any) => {

  return (
    <>
      <tr className=" dark:bg-boxdark">
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
