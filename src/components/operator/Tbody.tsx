import React from 'react';

import { useDeleteOperatorMutation } from '../../features/operator/apiSlice';
import { IitemApiOperator } from './CreateForm';
import { TD, TR } from '../../common/Table/Table';
import ActionLink from '../ui/ActionLink';
import { Delete, Details, Edit } from '../../data/helpers/Svg';
import { showConfirmation, showError } from '../../data/helpers/SweatAlert';

export interface TbodyProps {
  item: IitemApiOperator;
}

const Tbody: React.FC<TbodyProps> = ({ item }) => {
  const [deletePost] = useDeleteOperatorMutation();

  const handleRemove = async (id: number) => {
    const confirmed = await showConfirmation();

    if (confirmed) {
      try {
        await deletePost(id);
      } catch (error) {
        showError();
      }
    }
  };

  return (
    <>
      <TR>
        <TD>{item.id}</TD>
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
