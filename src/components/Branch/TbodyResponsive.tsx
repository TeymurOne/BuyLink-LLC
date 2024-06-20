import { useState } from 'react';

import { useRemovebranchMutation } from '../../features/branch/apiSlice';
import { IoIosArrowDown } from 'react-icons/io';
import { useTranslation } from 'react-i18next';
import {
  showConfirmation,
  showDeletedMessage,
  showError,
} from '../../data/helpers/SweatAlert';
import ActionLink from '../ui/ActionLink';
import { Delete, Details, Edit } from '../../data/helpers/Svg';

interface TbodyProps {
  address: any;
  id: any;
  lat: any;
  lng: any;
  name: any;
  phone: any;
}

const TbodyResponsive = ({ item }: TbodyProps) => {
  const [deletePost] = useRemovebranchMutation();
  const [show, setShow] = useState(false);
  const { t } = useTranslation();

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
      <div className="max-w-full md:hidden block ">
        <h2>
          <button
            onClick={() => setShow(!show)}
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right  rounded-t-xl dark:bg-boxdark  bg-white"
          >
            <div className="w-35 flex space-x-2 ">
              <div className="bg-btnBgColor w-7.5 h-7.5 rounded-xl grid place-items-center">
                {' '}
                <IoIosArrowDown style={{ color: 'white' }} />
              </div>
              <span className="dark:text-white300">{item.id}</span>
            </div>
          </button>
        </h2>
        <div
          className={`text-5 w-full   h-0 duration-700 overflow-hidden font-poppins ${
            show && 'h-50  duration-500'
          }`}
        >
          <div className="flex pt-5 px-2">
            <ul className="  mx-2 text-xs w-full dark:text-white space-y-2   text-black">
              <li className="flex justify-between">
                <p>Name</p>
                <p>{item?.name}</p>
              </li>
              <li className="flex justify-between">
                <p>Address</p>
                <p>{item?.address}</p>
              </li>
              <li className="flex justify-between">
                <p>Phone</p>
                <p>{item?.phone}</p>
              </li>
            </ul>
          </div>
          <div className="flex justify-end mt-2 px-5 items-center space-x-4">
            <ActionLink
              bg="#DFE8FA"
              icon={Details()}
              to={`/admin/branch/details/${item.id}`}
            />
            <ActionLink
              bg="#E5FDEF"
              icon={Delete()}
              onClick={() => handleRemove(item?.id)}
            />
            <ActionLink
              bg="#FFECEC"
              icon={Edit()}
              to={`/admin/branch/edit/${item.id}`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TbodyResponsive;
