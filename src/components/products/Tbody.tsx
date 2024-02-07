import { AiOutlineDelete } from 'react-icons/ai';
import { FiEdit2, FiEye } from 'react-icons/fi';
import Swal from 'sweetalert2';
import {
  
  useRemoveProductMutation,
} from '../../features/product/apiSlice';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

interface IproductResponse {
  id: number;
  title: string;
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
        await deletePost(id);
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

  useEffect(() => {}, [handleDelete]);

  const { image, discount_price, price, title, id, description } = item;

  return (
    <>
      <tr className="text-sm">
        <td className="border-b border-[#eee] text-[16px] py-5 px-4 dark:border-strokedark">
          {id}
        </td>
        <td className="border-b border-[#eee] py-5 px-4  dark:border-strokedark xl:pl-11">
          <div className="font-medium w-11 h-10  dark:text-white">
            <img src={image} className="w-full h-full rounded-full" alt="" />
          </div>
        </td>
        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
          <p className="inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ">
            {title}
          </p>
        </td>

        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
          <p className="text-black dark:text-white">
            {description.slice(0, 4)}.....
          </p>
        </td>
        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
          <p className="text-black dark:text-white">{price}</p>
        </td>
        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
          <p className="text-black dark:text-white">{discount_price}</p>
        </td>
        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
          <p className="text-black dark:text-white ">{item.category.name}</p>
        </td>

        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
          <div className="flex items-center space-x-3.5 ">
          <Link to={`/admin/detailsproduct/${id}`}>
          <button className="hover:text-primary" >
              <FiEye />
            </button>
          </Link>
            <button
              onClick={() => handleDelete(id)}
              className="hover:text-primary"
            >
              <AiOutlineDelete />
            </button>
            <Link to={`/admin/editproduct/${id}`}>
              <button className="hover:text-primary">
                <FiEdit2 />
              </button>
            </Link>
          </div>
        </td>
      </tr>
    </>
  );
};

export default Tbody;
