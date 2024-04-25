import React from 'react';
import {
  IMemberApiResponse,
  useDeleteMemberMutation,
} from '../../features/members/apiSlice';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

import edit from '../../images/action-icon/edit.svg';
import rubbish from '../../images/action-icon/rubish.svg';
import eye from '../../images/action-icon/details.svg';

interface TbodyProps {
  item: IMemberApiResponse;
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

  return (
    <>
      <tr className=" dark:bg-boxdark border-0 bg-white hover:bg-tborderHover">
        <td className="  border-gray border-0 text-xs  px-4 dark:border-strokedark">
          {item?.id}
        </td>
        <td className=" border-gray py-1 px-4  dark:border-strokedark xl:pl-11">
          <div className="font-medium w-10.5 h-10.5  dark:text-white">
            <img
              src={item?.image}
              className="w-full h-full rounded-full"
              alt=""
            />
          </div>
        </td>
        <td className=" border-gray py-1 px-4 dark:border-strokedark">
          <p className="inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium  ">
            {item?.member_type?.name}
          </p>
        </td>
        <td className=" border-gray py-1 px-4 dark:border-strokedark">
          <p className="inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ">
            {item?.full_name.slice(0,10)}{item?.full_name.length>10?`.....`:""}
          </p>
        </td>
        <td className=" border-gray py-1 px-4 dark:border-strokedark">
          <p className="inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ">
            {item?.position.slice(0, 10)}{item?.position.length>10?`.....`:""}
          </p>
        </td>

        <td className=" border-gray py-1 px-4 dark:border-strokedark">
          <div className="flex items-center space-x-2">
            <Link
              to={`/admin/member/details/${item.id}`}
            >
              <img src={eye} alt="" className="w-5 h-5" />
            </Link>
            <Link
              to={`/admin/editMember/${item.id}`}
           
            >
              <img src={edit} alt="" className="w-5 h-5" />
            </Link>
            <Link to={''} onClick={() => handleDelete(item.id)}>
              <img src={rubbish} alt="" className="w-5 h-5" />
            </Link>
          </div>
        </td>
      </tr>
    </>
  );
};

export default Tbody;
