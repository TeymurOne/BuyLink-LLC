import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import edit from '../../images/action-icon/edit.svg';
import rubbish from '../../images/action-icon/rubish.svg';
import eye from '../../images/action-icon/details.svg';
import { useState } from 'react';
import { useDeleteMemberMutation } from '../../features/members/apiSlice';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';

const TbodyResponsive = ({ item }:any) => {
    const [deletePost] = useDeleteMemberMutation();
  
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

  const [show, setShow] = useState(false);
  const { t } = useTranslation();

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
              <span className='dark:text-white300'>{item.id}</span>
            </div>
            <img
              className="w-10.5 h-10.5 rounded-full"
              src={item.image}
              alt=""
            />
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
                <p>Membertype</p>
                <p>{item?.member_type.name}</p>
              </li>
              <li className="flex justify-between">
                <p>Full name</p>
                <p>{item?.full_name}</p>
              </li>
              <li className="flex justify-between">
                <p>Position</p>
                <p>{item?.position}</p>
              </li>
            </ul>
          </div>
          <div className="flex justify-end mt-2 px-5 items-center space-x-4">
            <Link className='bg-[#DFE8FA] rounded-[60px] w-8.5 h-8.5 grid place-items-center'     to={`/admin/member/details/${item.id}`}>
              <img src={eye} alt="" className="w-5 h-5" />
            </Link>
            <Link to={`/admin/editMember/${item.id}`} className=' bg-[#E5FDEF] rounded-[60px] w-8.5 h-8.5 grid place-items-center'>
              <img src={edit} alt="" className="w-5 h-5" />
            </Link>
            <Link to={''} onClick={() => handleDelete(item.id)} className=' bg-[#FFECEC] rounded-[60px] w-8.5 h-8.5 grid place-items-center'>
              <img src={rubbish} alt="" className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default TbodyResponsive;