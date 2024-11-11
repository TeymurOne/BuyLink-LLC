import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRemoveProductMutation } from '../../features/product/apiSlice';
import ActionLink from '../ui/ActionLink';
import { Delete, Details, Edit } from '../../data/helpers/Svg';
import {
  showConfirmation,
  showDeletedMessage,
  showError,
} from '../../data/helpers/SweatAlert';

const TbodyResponsive = ({ item }: any) => {
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
  const [show, setShow] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <div className="block w-full max-w-full md:hidden">
        <h2>
          <button
            onClick={() => setShow(!show)}
            type="button"
            className="flex w-full items-center justify-between rounded-t-xl bg-white p-5  font-medium dark:bg-boxdark  rtl:text-right"
          >
            <div className="flex w-80 items-center space-x-2">
              <div className="grid h-7.5 w-7.5 place-items-center rounded-xl bg-btnBgColor">
                {show ? (
                  <IoIosArrowDown style={{ color: 'white' }} />
                ) : (
                  <IoIosArrowUp style={{ color: 'white' }} />
                )}
              </div>
              <span>{item?.title?.az}</span>
            </div>
            <img
              className="h-8 w-8 rounded-full shadow-lg"
              src={item.image}
              alt="Item images"
            />
          </button>
        </h2>
        <div
          className={`h-0 w-full overflow-hidden text-lg duration-700 ${
            show && 'h-50  duration-500'
          }`}
        >
          <div className="flex px-2 pt-5">
            <ul className=" mx-2 w-full text-xs text-black dark:text-white">
              <li className="flex justify-between">
                <p>{t('product.5')}</p>
                <p>{item?.price}</p>
              </li>
              <li className="flex justify-between">
                <p>{t('product.6')}</p>
                <p>{item?.discount_price}</p>
              </li>
              <li className="flex justify-between">
                <p>{t('product.4')}</p>
                <p>{item?.description?.az}</p>
              </li>
            </ul>
          </div>
          <div className="mt-2 flex items-center justify-end space-x-3 px-5">
            <ActionLink
              bg="#DFE8FA"
              icon={Details()}
              to={`/admin/product/details/${item?.id}`}
            />
            <ActionLink
              bg="#E5FDEF"
              icon={Edit()}
              to={`/admin/product/edit/${item?.id}`}
            />
            <ActionLink
              bg="#FFECEC"
              icon={Delete()}
              onClick={() => handleDelete(item?.id)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TbodyResponsive;
