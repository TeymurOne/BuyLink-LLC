import React, { useEffect } from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";

import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { FiEdit2, FiEye } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';
import { IpostData } from './Form';
import { useRemovebranchMutation } from '../../features/branch/apiSlice';

interface TbodyProps {
  item: IpostData;
  handeMapShow: () => void;
}

const Tbody: React.FC<TbodyProps> = ({ item, handeMapShow }) => {
  const [deletePost] = useRemovebranchMutation();

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
 
      <tr  >
        <td className=" py-6 px-4 pl-9 dark:border-strokedark xl:pl-11 ">
          <div className="font-medium w-10 dark:text-white">{item.id}</div>
        </td>
        <td className="border-b border-[#eee] py-2 px-4 dark:border-strokedark">
          <p className="text-black dark:text-white">{item.name}</p>
        </td>

        <td className="border-b border-[#eee] py-2 px-4 dark:border-strokedark">
          <p className="text-black dark:text-white">{item.address}</p>
        </td>

        <td className="border-b border-[#eee] py-2 px-4 dark:border-strokedark">
          <div className="flex items-center space-x-3.5">
            <Link to={`/admin/branchdetails/${item.id}`}>
              <button className="hover:text-primary">
                <FiEye />
              </button>
            </Link>
            <button
              className="hover:text-primary"
              onClick={() => handleRemove(item.id)}
            >
              <AiOutlineDelete />
            </button>
            <Link
              to={`/admin/branchEdit/${item.id}`}
              className="hover:text-primary"
            >
              <FiEdit2 />
            </Link>
          </div>
        </td>
        <td className="border-b border-[#eee] py-2 px-4 dark:border-strokedark">
          <div className="flex items-center">
          <button onClick={handeMapShow}>
          <FaMapMarkerAlt />
          </button>
          
          </div>
        </td>
      </tr>
    </>
  );
};

export default Tbody;
