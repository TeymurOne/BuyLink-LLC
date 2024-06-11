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
import TableSkeleton from '../../skeleton/TableSkeleton';
import { TD, TR } from '../../common/Table/Table';

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
      confirmButtonColor: ' #d33',
      cancelButtonColor: '#3085d6',
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

  return (
    <>
      <TR>
        <TD> {item?.id}</TD>
        <TD>
          {
            <div className="w-10  ml-4  my-1 h-10">
              <img
                src={item?.image}
                className="w-full h-full  mx-auto rounded-full"
                alt="Member Images"
              />
            </div>
          }
        </TD>
        <TD>{item?.member_type?.name}</TD>
        <TD>
          {item?.full_name.slice(0, 10)}{' '}
          {item?.full_name.length > 10 ? `.....` : ''}
        </TD>
        <TD>
          {item?.position.slice(0, 10)}
          {item?.position?.length > 10 ? `.....` : ''}
        </TD>

        <TD>
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
        </TD>
      </TR>
    </>
  );
};

export default Tbody;
