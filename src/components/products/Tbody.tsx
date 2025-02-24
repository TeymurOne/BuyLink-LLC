import { useRemoveProductMutation } from '../../features/product/apiSlice';
import { useEffect } from 'react';
import { TD, TR } from '../../common/Table/Table';
import {
  showConfirmation,
  showDeletedMessage,
  showError,
} from '../../data/helpers/SweatAlert';
import { Delete, Details, Edit } from '../../data/helpers/Svg';
import ActionLink from '../ui/ActionLink';
import defaultImg from '../../images/action-icon/default-featured-image.png.jpg';

interface IproductResponse {
  id: number;
  title: any;
  description: string;
  image: string;
  discount_price: number;
  price: number;
  category: {
    name: string;
  };
}

interface itemAllData {
  item: IproductResponse;
}

const Tbody: React.FC<itemAllData> = ({ item }) => {
  const [deletePost] = useRemoveProductMutation();

  const handleDelete = async (id: number) => {
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

  useEffect(() => {}, [handleDelete]);

  const { image, discount_price, price, category, title, id } = item;

  return (
    <>
      <TR>
        <TD>
          <div className="h-10 w-10.5 font-medium  dark:text-white">
            <img    src={image || ''} className="h-full w-full rounded-full" alt="" />
          </div>
        </TD>

        <TD> {title?.az}</TD>
        <TD> {price}</TD>
        <TD> {category?.name}</TD>

        <TD>
          <div className="flex items-center  ">
            <ActionLink
              bg=""
              icon={Details()}
              to={`/admin/product/details/${id}`}
            />
            <ActionLink
              bg=""
              icon={Delete()}
              onClick={() => handleDelete(id)}
            />
            <ActionLink bg="" icon={Edit()} to={`/admin/product/edit/${id}`} />
          </div>
        </TD>
      </TR>
    </>
  );
};

export default Tbody;
