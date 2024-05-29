import React, { useEffect } from 'react';

import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

import { useRemovebranchMutation } from '../../features/branch/apiSlice';
import edit from '../../images/action-icon/edit.svg';
import rubbish from '../../images/action-icon/rubish.svg';
import eye from '../../images/action-icon/details.svg';


const Tbody: React.FC<any> = ({ item }) => {
  const [deletePost] = useRemovebranchMutation();

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
        const dele = await deletePost(id);
        window.location.reload();

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
  useEffect(() => {}, [handleRemove]);

  return (
    <>
      <tr className=" dark:bg-boxdark border-0 bg-white h-15 hover:bg-tborderHover">
        <td className="  border-gray border-0 text-xs  px-4 dark:border-strokedark">
          <div className="font-medium w-10 dark:text-white">{item.id}</div>
        </td>
        <td className=" border-gray py-1 px-4  dark:border-strokedark xl:pl-11">
          <p className="text-black dark:text-white">{item.name}</p>
        </td>

        <td className="  border-gray border-0 text-xs  px-4 dark:border-strokedark">
          <p className="text-black dark:text-white">{item.address}</p>
        </td>
        <td className="  border-gray border-0 text-xs  px-4 dark:border-strokedark">
          <p className="text-black dark:text-white">{item.lat}</p>
        </td>
        <td className="  border-gray border-0 text-xs  px-4 dark:border-strokedark">
          <p className="text-black dark:text-white">{item.lng}</p>
        </td>
        {!window.location.pathname.includes('details') && (
          <td className="  border-gray border-0 text-xs  px-4 dark:border-strokedark">
            <div className="flex items-center space-x-3.5">
              <Link to={`/admin/details/${item.id}`}>
                <button className="hover:text-primary">
                  <img src={eye} alt="" className="w-5 h-5" />
                </button>
              </Link>
              <button
                className="hover:text-primary"
                onClick={() => handleRemove(item.id)}
              >
                <img src={rubbish} alt="" className="w-5 h-5" />
              </button>
              <Link
                to={`/admin/branchEdit/${item.id}`}
                className="hover:text-primary"
              >
                <img src={edit} alt="" className="w-5 h-5" />
              </Link>
            </div>
          </td>
        )}
      </tr>
    </>
  );
};

export default Tbody;
