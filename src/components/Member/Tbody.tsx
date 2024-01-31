import React from 'react';
import {
  IMemberApiResponse,
  useDeleteMemberMutation,
  useLazyUpdateGetMemberQuery,
} from '../../features/members/apiSlice';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import { FiEdit2, FiEye } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';

interface TbodyProps {
  item: IMemberApiResponse;
}

const Tbody: React.FC<TbodyProps> = ({ item }) => {
  const [deletePost] = useDeleteMemberMutation();
  const navigate = useNavigate();
  const [updatePost] = useLazyUpdateGetMemberQuery();
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



  return (
    <>
      <tr className=" dark:bg-boxdark">
        <td className="border-b border-[#eee] text-[16px] py-5 px-4 dark:border-strokedark">
          {item?.id}
        </td>
        <td className="border-b border-[#eee] py-5 px-4  dark:border-strokedark xl:pl-11">
          <div className="font-medium w-11 h-10  dark:text-white">
            <img
              src={item?.image}
              className="w-full h-full rounded-full"
              alt=""
            />
          </div>
        </td>
        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
          <p className="inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium  ">
            {item?.member_type?.name}
          </p>
        </td>
        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
          <p className="inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ">
            {item?.full_name}
          </p>
        </td>
        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
          <p className="inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ">
            {item?.position}
          </p>
        </td>

        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
          <div className="flex items-center space-x-3.5">
            <Link
              to={`/admin/member/details/${item.id}`}
              className="hover:text-primary"
            >
              <FiEye />
            </Link>
            <button
              className="hover:text-primary"
              onClick={() => handleDelete(item.id)}
            >
              <AiOutlineDelete />
            </button>
            <Link
              to={`/admin/editMember/${item.id}`}
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
