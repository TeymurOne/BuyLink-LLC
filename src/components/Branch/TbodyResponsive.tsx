import React, { useEffect, useState } from 'react';
import edit from '../../images/action-icon/edit.svg';
import rubbish from '../../images/action-icon/rubish.svg';
import eye from '../../images/action-icon/details.svg';

import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

import { IpostData } from './Form';
import { useRemovebranchMutation } from '../../features/branch/apiSlice';
import { IoIosArrowDown } from 'react-icons/io';
import { useTranslation } from 'react-i18next';

interface TbodyProps {
  item: IpostData;
}

const TbodyResponsive: React.FC<TbodyProps> = ({ item }) => {
  const [deletePost] = useRemovebranchMutation();
  const [show, setShow] = useState(false);
  const { t } = useTranslation();

  const handleRemove = async (id: number) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    });

    if (result.isConfirmed) {
      try {
        const dele = await deletePost(id);
        window.location.reload();

        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
        });
      } catch (error) {
        Swal.fire({
          title: 'Error!',
          text: 'An error occurred while deleting.',
          icon: 'error',
        });
      }
    }
  };
  useEffect(() => {}, [handleRemove]);

  return (
    <>
      <div className="max-w-full md:hidden block w-full">
        <h2>
          <button
            onClick={() => setShow(!show)}
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right  rounded-t-xl  bg-white"
          >
            <div className="w-[140px] flex space-x-2 ">
              <div className="bg-[#2D83B6] w-[30px] h-[30px] rounded-xl grid place-items-center">
                {' '}
                <IoIosArrowDown style={{ color: 'white' }} />
              </div>
              <span>{item.id}</span>
            </div>
          </button>
        </h2>
        <div
          className={`text-[20px] w-full   h-0 duration-700 overflow-hidden font-poppins ${
            show && 'h-[200px]  duration-500'
          }`}
        >
          <div className="flex pt-5 px-2">
            <ul className="  mx-2 text-[0.800em] w-full   text-black">
              <li className="flex justify-between">
                <p>Name</p>
                <p>{item?.name}</p>
              </li>
              <li className="flex justify-between">
                <p>Address</p>
                <p>{item?.address}</p>
              </li>
              <li className="flex justify-between">
                <p>Phone</p>
                <p>{item?.phone}</p>
              </li>
            </ul>
          </div>
          <div className="flex justify-end mt-2 px-5 items-center space-x-4">
            <Link
              className="bg-[#DFE8FA] rounded-[60px] w-[34px] h-[34px] grid place-items-center"
              to={`/admin/branchdetails/${item.id}`}
            >
              <img src={eye} alt="" className="w-[20px] h-[20px]" />
            </Link>
            <Link
              to={`/admin/branchEdit/${item.id}`}
              className=" bg-[#E5FDEF] rounded-[60px] w-[34px] h-[34px] grid place-items-center"
            >
              <img src={edit} alt="" className="w-[20px] h-[20px]" />
            </Link>
            <Link
              to=""
              onClick={() => handleRemove(item.id)}
              className=" bg-[#FFECEC] rounded-[60px] w-[34px] h-[34px] grid place-items-center"
            >
              <img src={rubbish} alt="" className="w-[20px] h-[20px]" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TbodyResponsive;
