import { useLocation } from "react-router-dom";
import { IpostData } from "./Form";
import { FaArrowLeft } from "react-icons/fa6";

const Details = () => {
  const details=useLocation()
  const {id, name, lat, lng, address}:IpostData=details.state?.itemAll
 

  
  return (
    <>
      <h2 className="mb-2 flex items-center space-x-4 font-semibold italic">
        Branch Details: <span>{id}</span> <FaArrowLeft onClick={()=>window.history.back()} />
      </h2>
      <div className="max-w-[1200px]  font-medium text-[17px] rounded-md w-full  dark:bg-strokedark bg-white h-auto p-1">
        <div className="flex justify-between lg:w-1/3 md:w-1/2 py-4 px-3  ">
          <span className=" font-medium text-black dark:text-white ">ID</span>
          <p className=" font-medium text-black dark:text-white">{id}</p>
        </div>
      
       
        <p className="border-b border-stroke  dark:border-strokedark  py-1"></p>
        <div className="flex justify-between lg:w-1/3 md:w-1/2 py-4 px-3  ">
          <span className=" font-medium text-black dark:text-white ">Address</span>
          <p className=" font-medium text-black dark:text-white">{address}</p>
        </div>
        <p className="border-b border-stroke  dark:border-strokedark  py-1"></p>
        <div className="flex justify-between lg:w-1/3 md:w-1/2 py-4 px-3  ">
          <span className=" font-medium text-black dark:text-white ">Name</span>
          <p className=" font-medium text-black dark:text-white ">{name}</p>
        </div>
        <p className="border-b border-stroke  dark:border-strokedark  py-1"></p>
        <div className="flex justify-between lg:w-1/3 md:w-1/2 py-4 px-3  ">
          <span className=" font-medium text-black dark:text-white ">Lat</span>
          <p className=" font-medium text-black dark:text-white ">{lat}</p>
        </div>
        <div className="flex justify-between lg:w-1/3 md:w-1/2 py-4 px-3  ">
          <span className=" font-medium text-black dark:text-white ">Long</span>
          <p className=" font-medium text-black dark:text-white ">{lng}</p>
        </div>
        
      </div>
    </>
  );
};

export default Details;
