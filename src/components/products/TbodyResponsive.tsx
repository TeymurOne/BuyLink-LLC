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
      <div className="max-w-full md:hidden block w-full">
        <h2>
          <button
            onClick={() => setShow(!show)}
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right  rounded-t-xl dark:bg-boxdark  bg-white"
          >
            <div className="w-35 flex space-x-2 ">
              <div className="bg-btnBgColor w-7.5 h-7.5 rounded-xl grid place-items-center">
                {show ? (
                  <IoIosArrowDown style={{ color: 'white' }} />
                ) : (
                  <IoIosArrowUp style={{ color: 'white' }} />
                )}
              </div>
              <span>{item.id}</span>
            </div>
            <img
              className="w-8 shadow-lg h-8 rounded-full"
              src={item.image}
              alt="Item images"
            />
          </button>
        </h2>
        <div
          className={`text-lg w-full   h-0 duration-700 overflow-hidden font-poppins ${
            show && 'h-50  duration-500'
          }`}
        >
          <div className="flex pt-5 px-2">
            <ul className=" dark:text-white  mx-2 text-xs w-full   text-black">
              <li className="flex justify-between">
                <p>Title</p>
                <p>{item?.name}</p>
              </li>
              <li className="flex justify-between">
                <p>Price</p>
                <p>{item?.price}</p>
              </li>
              <li className="flex justify-between">
                <p>Discount price</p>
                <p>{item?.discount_price}</p>
              </li>
              <li className="flex justify-between">
                <p>Description</p>
                <p>{item?.description.az}</p>
              </li>
            </ul>
          </div>
          <div className="flex justify-end mt-2 px-5 items-center space-x-3">
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
