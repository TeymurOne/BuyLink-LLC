import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineDelete } from 'react-icons/ai';
import { FiEdit2, FiEye } from 'react-icons/fi';
import Swal from 'sweetalert2';
import { useDeleteOperatorMutation } from '../../features/operator/apiSlice';
import { IitemApiOperator } from './CreateForm';
import { TD, TR } from '../../common/Table/Table';
import ActionLink from '../ui/ActionLink';
import { Delete, Details, Edit } from '../../data/helpers/Svg';

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
      <TR>
        <TD>{item.id}</TD>
        <TD>{item?.branch?.name}</TD>
        <TD>{item.name}</TD>
        <TD>{item.email}</TD>

        <TD>
          <div className="flex items-center  ">
            <ActionLink
              bg=""
              icon={Details()}
              to={`/admin/operator/details/${item?.id}`}
            />
            <ActionLink
              bg=""
              icon={Delete()}
              onClick={() => handleRemove(item?.id)}
            />
            <ActionLink
              bg=""
              icon={Edit()}
              to={`/admin/operator/edit/${item?.id}`}
            />
          </div>
        </TD>
      </TR>
    </>
  );
};

export default Tbody;
