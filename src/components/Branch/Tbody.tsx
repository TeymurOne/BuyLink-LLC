

import { useRemovebranchMutation } from '../../features/branch/apiSlice';

import { TD, TR } from '../../common/Table/Table';
import {
  showConfirmation,
  showDeletedMessage,
  showError,
} from '../../data/helpers/SweatAlert';
import ActionLink from '../ui/ActionLink';
import { Delete, Details, Edit } from '../../data/helpers/Svg';

const Tbody: React.FC<any> = ({ item }) => {
  const [deletePost] = useRemovebranchMutation();

  const handleRemove = async (id: number) => {
    const confirmed = await showConfirmation();

    if (confirmed) {
      try {
        await deletePost(id);

        showDeletedMessage();
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
        <TD>{item.address}</TD>
        <TD>{item.lat}</TD>
        <TD>{item.lng}</TD>

        <TD>
          <div className="flex items-center ">
            <ActionLink
              bg=""
              icon={Details()}
              to={`/admin/details/${item.id}`}
            />
            <ActionLink
              bg=""
              icon={Delete()}
              onClick={() => handleRemove(item?.id)}
            />
            <ActionLink
              bg=""
              icon={Edit()}
              to={`/admin/branchEdit/${item.id}`}
            />
          </div>
        </TD>
      </TR>
    </>
  );
};

export default Tbody;
