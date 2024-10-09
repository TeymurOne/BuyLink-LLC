import { useState } from 'react';
import { useRemovebranchMutation } from '../../features/branch/apiSlice';
import { IoIosArrowDown } from 'react-icons/io';
import { useTranslation } from 'react-i18next';
import {
  showConfirmation,
  showDeletedMessage,
  showError,
} from '../../data/helpers/SweatAlert';
import Modal from './Modal.tsx';

interface TbodyProps {
  item: any;
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

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

  const truncateNumber = (value: any) => {
    if (isNaN(value) || value === null) return '';
    const numberStr = value.toString();
    const dotIndex = numberStr.indexOf('.');
    if (dotIndex === -1) return numberStr;
    return numberStr.slice(0, dotIndex + 3);
  };

  const handleImageClick = (imageSrc: string) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage('');
  };

  return (
    <>
      <div className="block max-w-full md:hidden ">
        <h2>
          <button
            onClick={() => setShow(!show)}
            type="button"
            className="flex w-full items-center justify-between rounded-t-xl bg-white p-5 font-medium dark:bg-boxdark rtl:text-right"
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
          className={`text-5 h-0 w-full overflow-hidden duration-700 ${
            show && 'h-50  duration-500'
          }`}
        >
          <div className="flex px-2 pt-5">
            <ul className="mx-2 w-full space-y-2 text-xs text-black dark:text-white">
              <li className="flex justify-between">
                <p>{t('balanceTable.8')}</p>
                <p>{item?.operator_name}</p>
              </li>
              <li className="flex justify-between">
                <p>{t('balanceTable.0')}</p>
                <p>{truncateNumber(item?.amount)}</p>
              </li>
              <li className="flex justify-between">
                <p>{t('balanceTable.11')}</p>
                <img
                  src={item?.bill_image}
                  className="inline-flex w-5 cursor-pointer rounded"
                  alt="Bill"
                  onClick={() => handleImageClick(item?.bill_image)}
                />
              </li>
              <li className="flex justify-between">
                <p>{t('balanceTable.12')}</p>
                <p> {item?.user?.name}</p>
              </li>
              <li className="flex justify-between">
                <p>{t('balanceTable.13')}</p>
                <p> {item?.referer?.name}</p>
              </li>
              <li className="flex justify-between">
                <p>{t('balanceTable.1')}</p>
                <p>{truncateNumber(item?.discounted_percent)}</p>
              </li>

              <li className="flex justify-between">
                <p>{t('balanceTable.2')}</p>
                <p>{truncateNumber(item?.discounted_amount)}</p>
              </li>
              <li className="flex justify-between">
                <p>{t('balanceTable.3')}</p>
                <p>{truncateNumber(item?.partner.total_commission)}</p>
              </li>
              <li className="flex justify-between">
                <p>{t('balanceTable.4')}</p>
                <p>{truncateNumber(item?.commission_amount)}</p>
              </li>
              <li className="flex justify-between">
                <p>{t('balanceTable.5')}</p>
                <p>
                  {item?.created_at.slice(0, 10)} /{' '}
                  {item?.created_at.slice(11, 16)}
                </p>
              </li>
              <li className="flex justify-between">
                <p>{t('balanceTable.6')}</p>
                <p> {truncateNumber(item?.net_amount)}</p>
              </li>
              <li className="flex justify-between">
                <p>{t('balanceTable.7')}</p>
                <p>{item?.user?.id}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} imageSrc={modalImage} onClose={closeModal} />
    </>
  );
};

export default TbodyResponsive;
