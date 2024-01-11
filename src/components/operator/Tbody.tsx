import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineDelete } from 'react-icons/ai';
import { FiEdit2, FiEye } from 'react-icons/fi';
import Swal from 'sweetalert2';
import {
  useDeleteOperatorMutation,
  useLazyUpdateOperatorGetQuery,
} from '../../features/operator/apiSlice';

export interface TbodyProps {
  item: any;
}

const Tbody: React.FC<TbodyProps> = ({ item }) => {

  
  const [deletePost] = useDeleteOperatorMutation();
  const [updateGet] = useLazyUpdateOperatorGetQuery();

  const navigate = useNavigate();

  const handleDetails = () => {
    const itemAll = item;
    navigate('/admin/operatorDetails', { state: { itemAll } });
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
  const handleEdit = async (id: number) => {
    const resUpdate = await updateGet(id);
    console.log(resUpdate);
    if (resUpdate.status==='fulfilled') {
      const  editData=resUpdate?.data
      navigate('/admin/operatorEdit', { state: { data:editData, id } });
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
