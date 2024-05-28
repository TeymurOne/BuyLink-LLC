import edit from '../../images/action-icon/edit.svg';
import rubbish from '../../images/action-icon/rubish.svg';
import eye from '../../images/action-icon/details.svg';
import Swal from 'sweetalert2';
import {useRemoveProductMutation,} from '../../features/product/apiSlice';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

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

  const { image, discount_price, price, category, title,  id } = item;
  
  

  return (
    <>
      <tr className="   w-full dark:bg-boxdark border-0 bg-white hover:bg-tborderHover">
        <td className="  border-gray border-0 text-xs  px-4 dark:border-strokedark">
          {id}
        </td>
        <td className=" border-gray py-1 px-4  dark:border-strokedark xl:pl-11">
          <div className="font-medium w-10.5 h-10  dark:text-white">
            <img src={image} className="w-full h-full rounded-full" alt="" />
          </div>
        </td>
        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
          <p className="inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ">
            {title?.az}
          </p>
        </td>

       
        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
          <p className="text-black dark:text-white">{price}</p>
        </td>
        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
          <p className="text-black dark:text-white">{discount_price}</p>
        </td>
        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
           <p className="text-black dark:text-white ">{category?.name}</p> 
        </td>

        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
          <div className="flex items-center space-x-3.5 ">
          <Link to={`/admin/detailsproduct/${id}`}>
          <button className="hover:text-primary" >
          <img src={eye} alt="" className="w-5 h-5" />
            </button>
          </Link>
            <button
              onClick={() => handleDelete(id)}
              className="hover:text-primary"
            >
               <img src={rubbish} alt="" className="w-5 h-5" />
            </button>
            <Link to={`/admin/editproduct/${id}`}>
              <button className="hover:text-primary">
              <img src={edit} alt="" className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </td>
      </tr>
  
     

   
    </>
  );
};

export default Tbody;