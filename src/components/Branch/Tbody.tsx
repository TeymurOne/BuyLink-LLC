import React, { useEffect } from 'react';

import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { FiEdit2, FiEye } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';
import { IpostData } from './Form';
import {
  useLazyGetUpdateQuery,
  useRemoveProductMutation,
} from '../../features/branch/apiSlice';

interface TbodyProps {
  item: IpostData;
}

const Tbody: React.FC<TbodyProps> = ({ item }) => {
  const [deletePost] = useRemoveProductMutation();
  const navigate = useNavigate();

  const [updatePost] = useLazyGetUpdateQuery();

  const handleEdit = async (id: number) => {
    try {
      const response = await updatePost(id);

      if (response) {
        const dataToPass = response.data;
        navigate('/admin/branchEdit', { state: { data: dataToPass, id } });
      }
    } catch (error) {}
  };

  const handleDetails = () => {
    const itemAll = item;
    navigate('/admin/branchDetails', { state: { itemAll } });
  };
 
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
        console.log(dele);

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
  useEffect(()=>{
  

  }, [handleRemove])



  return (
    <>
      <tr>
        <td className="border-b border-[#0c0909] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
          <div className="font-medium w-10 dark:text-white">{item.id}</div>
        </td>
        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
          <p className="text-black dark:text-white">{item.name}</p>
        </td>
        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
          <p className="inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ">
            {item.lat}
          </p>
        </td>
        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
          <p className="text-black dark:text-white">{item.lng}</p>
        </td>
        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
          <p className="text-black dark:text-white">{item.address}</p>
        </td>

        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
          <div className="flex items-center space-x-3.5">
            <button className="hover:text-primary" onClick={handleDetails}>
              <FiEye />
            </button>
            <button
              className="hover:text-primary"
              onClick={() => handleRemove(item.id)}
            >
              <AiOutlineDelete />
            </button>
            <button
              className="hover:text-primary"
              onClick={() => handleEdit(item.id)}
            >
              <FiEdit2 />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default Tbody;
