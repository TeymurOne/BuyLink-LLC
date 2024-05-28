import React, { useState } from 'react';
import {
  IMemberApiResponse,
  useDeleteMemberMutation,
} from '../../features/members/apiSlice';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

import edit from '../../images/action-icon/edit.svg';
import rubbish from '../../images/action-icon/rubish.svg';
import eye from '../../images/action-icon/details.svg';
import TableSkeleton from '../../skeleton/TableSkeleton';
import { IoIosArrowDown } from 'react-icons/io';

interface TbodyProps {
  item?: IMemberApiResponse;
}

const Tbody: React.FC<TbodyProps> = ({ item }) => {
  const [deletePost] = useDeleteMemberMutation();

  const handleDelete = async (id: number) => {
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
        await deletePost(id);
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
  if (!item) {
    return <TableSkeleton count="2" />;
  }
  const [show, setShow]=useState(false)

  return (
    <>
      <tr className="        dark:bg-boxdark border-0 bg-white hover:bg-tborderHover">
        <td className="  border-gray border-0 text-xs  px-4 dark:border-strokedark">
          {item?.id}
        </td>
        <td className=" border-gray py-1 px-4  dark:border-strokedark xl:pl-11">
          <div className="font-medium w-10.5 h-10.5  dark:text-white">
            <img
              src={item?.image}
              className="w-full h-full rounded-full"
              alt="Member Images"
            />
          </div>
        </td>
        <td className="  border-gray border-0 text-xs  px-4 dark:border-strokedark">
          <p className="inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium  ">
            {item?.member_type?.name}
          </p>
        </td>
        <td className="  border-gray border-0 text-xs  px-4 dark:border-strokedark">
          <p className="inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ">
            {item?.full_name.slice(0, 10)}{' '}
            {item?.full_name.length > 10 ? `.....` : ''}
          </p>
        </td>
        <td className="  border-gray border-0 text-xs  px-4 dark:border-strokedark">
          <p className="inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ">
            {item?.position.slice(0, 10)}
            {item?.position?.length > 10 ? `.....` : ''}
          </p>
        </td>

        {!window.location.pathname.includes('details') && (
          <td className="  border-gray border-0 text-xs  px-4 dark:border-strokedark">
            <div className="flex items-center space-x-2">
              <Link to={''} onClick={() => handleDelete(item?.id)}>
                <img src={rubbish} alt="" className="w-5 h-5" />
              </Link>

              <Link to={`/admin/member/details/${item?.id}`}>
                <img src={eye} alt="" className="w-5 h-5" />
              </Link>
              <Link to={`/admin/editMember/${item?.id}`}>
                <img src={edit} alt="" className="w-5 h-5" />
              </Link>
            </div>
          </td>
        )}
      </tr>
      <div className="max-w-full w-full hidden ">
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
            <img
              className="w-[42px] h-[42px] rounded-full"
              src={item.image}
              alt=""
            />
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
                <p>Membertype</p>
                <p>{item?.member_type.name}</p>
              </li>
              <li className="flex justify-between">
                <p>Full name</p>
                <p>{item?.full_name}</p>
              </li>
              <li className="flex justify-between">
                <p>Position</p>
                <p>{item?.position}</p>
              </li>
            </ul>
          </div>
          <div className="flex justify-end mt-2 px-5 items-center space-x-4">
            <Link className='bg-[#DFE8FA] rounded-[60px] w-[34px] h-[34px] grid place-items-center'     to={`/admin/member/details/${item.id}`}>
              <img src={eye} alt="" className="w-[20px] h-[20px]" />
            </Link>
            <Link to={`/admin/editMember/${item.id}`} className=' bg-[#E5FDEF] rounded-[60px] w-[34px] h-[34px] grid place-items-center'>
              <img src={edit} alt="" className="w-[20px] h-[20px]" />
            </Link>
            <Link to={''} onClick={() => handleDelete(item.id)} className=' bg-[#FFECEC] rounded-[60px] w-[34px] h-[34px] grid place-items-center'>
              <img src={rubbish} alt="" className="w-[20px] h-[20px]" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tbody;
