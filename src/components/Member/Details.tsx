import { useLocation } from "react-router-dom";
import { data } from "../../core/Type/data";

const Details = () => {
  const details=useLocation()
  const {id, full_name, position, image, member_type:{name} }:data=details.state?.itemAll
  console.log(details.state?.itemAll);
  

  
  return (
    <>
      <h2 className="mb-2">
        Member Details: <span>{id}</span>
      </h2>
      <div className="max-w-[1200px]  font-medium text-[17px] rounded-md w-full border-stroke dark:text-white  dark:bg-strokedark  bg-white h-auto p-1">
        <div className="flex justify-between lg:w-1/3 md:w-1/2 py-4 px-3  ">
          <span className=" font-medium text-black dark:text-white ">ID</span>
          <p className=" font-medium text-black dark:text-white ">{id}</p>
        </div>
        <p className="border-b border-stroke  dark:border-strokedark  py-1"></p>
        <div className="flex justify-between lg:w-1/3 md:w-1/2 py-4 px-3  ">
          <span className=" font-medium text-black dark:text-white ">MemberType</span>
          <p className=" font-medium text-black dark:text-white ">{name}</p>
        </div>
        <p className="border-b border-stroke  dark:border-strokedark  py-1"></p>
        <div className="flex justify-between lg:w-1/3 md:w-1/2 py-2 px-3  ">
          <span className=" font-medium text-black dark:text-white ">Image</span>
         <img className="w-20 h-20 rounded-full" src={image} alt="" />
        </div>
        <p className="border-b border-stroke  dark:border-strokedark  py-1"></p>
        <div className="flex justify-between lg:w-1/3 md:w-1/2 py-4 px-3  ">
          <span className=" font-medium text-black dark:text-white">Full name</span>
          <p className=" font-medium text-black dark:text-white ">{full_name}</p>
        </div>
        <p className="border-b border-stroke  dark:border-strokedark  py-1"></p>
        <div className="flex justify-between lg:w-1/3 md:w-1/2 py-4 px-3  ">
          <span className=" font-medium text-black dark:text-white ">Position</span>
          <p className=" font-medium text-black dark:text-white">{position}</p>
        </div>
        
      </div>
    </>
  );
};

export default Details;
