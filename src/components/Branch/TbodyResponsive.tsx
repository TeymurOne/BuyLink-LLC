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
      <div className="block max-w-full md:hidden ">
        <h2>
          <button
            onClick={() => setShow(!show)}
            type="button"
            className="flex w-full items-center justify-between rounded-t-xl bg-white p-5  font-medium rtl:text-right  dark:bg-boxdark"
          >
            <div className="flex w-35 space-x-2 ">
              <div className="grid h-7.5 w-7.5 place-items-center rounded-xl bg-btnBgColor">
                {' '}
                <IoIosArrowDown style={{ color: 'white' }} />
              </div>
              <span className="dark:text-white300">{item.id}</span>
            </div>
          </button>
        </h2>
        <div
          className={`text-5 h-0   w-full overflow-hidden font-poppins duration-700 ${
            show && 'h-50  duration-500'
          }`}
        >
          <div className="flex px-2 pt-5">
            <ul className="  mx-2 w-full space-y-2 text-xs text-black   dark:text-white">
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
          <div className="mt-2 flex items-center justify-end space-x-4 px-5">
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
