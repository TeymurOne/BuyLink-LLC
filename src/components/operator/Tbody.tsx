import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineDelete } from 'react-icons/ai';
import { FiEdit2, FiEye } from 'react-icons/fi';
import Swal from 'sweetalert2';
import {
  useDeleteOperatorMutation,
  
} from '../../features/operator/apiSlice';
import { IitemApiOperator } from './CreateForm';

export interface TbodyProps {
  item: IitemApiOperator;
}

const Tbody: React.FC<TbodyProps> = ({ item }) => {
  const [deletePost] = useDeleteOperatorMutation();

  const navigate = useNavigate();

 

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


  return (
    <>
      <tr>
        <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
          <div className="font-medium w-10 dark:text-white">{item.id}</div>
        </td>
        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
          <p className="text-black dark:text-white">{item?.branch?.name}</p>
        </td>
        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
          <p className="text-black dark:text-white">{item.name}</p>
        </td>
        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
          <p className="text-black dark:text-white">{item?.email}</p>
        </td>
        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
          <div className="flex items-center space-x-3.5">
            <Link to={`/admin/operatordetails/${item.id}`}>
            <button className="hover:text-primary" >
              <FiEye />
            </button>
            </Link>
          
            <button
              className="hover:text-primary"
              onClick={() => handleRemove(item.id)}
            >
              <AiOutlineDelete />
            </button>
            <Link to={`/admin/operatoredit/${item.id}`}
              className="hover:text-primary"
            >
              <FiEdit2 />
            </Link>
          </div>
        </td>
      </tr>
    </>
  );
};

export default Tbody;
