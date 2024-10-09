import { useState } from 'react';
import Modal from './Modal.tsx';

const Transactions = ({ item }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
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
      <tr className="border-0 bg-white hover:bg-tborderHover dark:bg-boxdark">
        <td className="border-0 border-gray px-4 text-xs dark:border-strokedark dark:text-white">
          {item?.id}
        </td>
        <td className="border-0 border-gray px-4 text-xs dark:border-strokedark dark:text-white">
          <p className="inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium">
            {item?.operator_name}
          </p>
        </td>
        <td className="border-gray px-4 py-1 text-xs dark:border-strokedark dark:text-white xl:pl-11">
          {truncateNumber(item?.amount)}
        </td>
        <td className="border-gray px-3 px-9.5 py-1 text-xs dark:border-strokedark dark:text-white">
          <img
            src={item?.bill_image}
            className="inline-flex cursor-pointer rounded"
            alt="Bill"
            onClick={() => handleImageClick(item?.bill_image)}
          />
        </td>
        <td className="border-0 border-gray px-4 dark:border-strokedark dark:text-white">
          <p className="inline-flex rounded-full bg-opacity-10 px-3 py-1 text-xs font-medium">
            {item?.user?.name}
          </p>
        </td>
        <td className="border-0 border-gray px-4 dark:border-strokedark dark:text-white">
          <p className="inline-flex rounded-full bg-opacity-10 px-3 py-1 text-xs font-medium">
            {item?.referer?.name}
          </p>
        </td>
        <td className="border-0 border-gray px-4 dark:border-strokedark dark:text-white">
          <p className="inline-flex rounded-full bg-opacity-10 px-3 py-1 text-xs font-medium">
            {truncateNumber(item?.discounted_percent)}
          </p>
        </td>
        <td className="border-0 border-gray px-4 dark:border-strokedark dark:text-white">
          <p className="inline-flex rounded-full bg-opacity-10 px-3 py-1 text-xs font-medium">
            {truncateNumber(item?.discounted_amount)}
          </p>
        </td>
        <td className="border-0 border-gray px-4 dark:border-strokedark dark:text-white">
          <p className="inline-flex rounded-full bg-opacity-10 px-3 py-1 text-xs font-medium">
            {truncateNumber(item?.commission)}
          </p>
        </td>
        <td className="border-0 border-gray px-4 dark:border-strokedark">
          <p className="inline-flex rounded-full bg-opacity-10 px-3 py-1 text-xs font-medium">
            {truncateNumber(item?.commission_amount)}
          </p>
        </td>
        <td className="border-0 border-gray px-4 dark:border-strokedark">
          <p className="inline-flex rounded-full bg-opacity-10 px-3 py-1 text-xs font-medium">
            {item?.created_at.slice(0, 10)} / {item?.created_at.slice(11, 16)}
          </p>
        </td>
        <td className="border-0 border-gray px-4 dark:border-strokedark">
          <p className="inline-flex rounded-full bg-opacity-10 px-3 py-1 text-xs font-medium">
            {truncateNumber(item?.net_amount)}
          </p>
        </td>
        <td className="border-0 border-gray px-4 dark:border-strokedark">
          <p className="inline-flex rounded-full bg-opacity-10 px-3 py-1 text-xs font-medium">
            {item?.user?.id}
          </p>
        </td>
      </tr>
      <Modal isOpen={isModalOpen} imageSrc={modalImage} onClose={closeModal} />
    </>
  );
};

export default Transactions;
