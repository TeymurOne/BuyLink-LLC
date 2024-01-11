import React, { useState } from 'react';
import {
  useFetchMemberTypeQuery,
  useUpdateMemberMutation,
} from '../../features/members/apiSlice';
import { useLocation, useNavigate } from 'react-router-dom';
type Data = {
  fullname: string;

  membertypes: string;
  posotion_formvalue: string;
  images: any;
};
type data = {
  id: number;
  name: string;
};

const EditForm = () => {
  const navigate = useNavigate();
  let content;
  const { isSuccess, data, isError } = useFetchMemberTypeQuery();
  const [dataEdit] = useUpdateMemberMutation();
  const [showimg, setShowimg] = useState<string>();
  const location = useLocation();
  const postData = new FormData();
  const { full_name, position, image, member_type } = location.state?.data.data;

  const idUrl: number = location.state.id;

  const initialState = {
    fullname: full_name,
    membertypes: member_type?.id,
    posotion_formvalue: position,
    images: '',
  };

  const [formValue, setFormValue] = useState<Data>(initialState);
  const { fullname, posotion_formvalue, membertypes } = formValue;

  if (isSuccess) {
    (content = data?.map((item: data, index: number) => {
      return (
        <option key={index} value={item.id} selected={item.id===member_type.id}>
          {item.name}
        </option>
      );
    }))
    
  }
   else if (isError) {
    console.error('Error fetching data', 'Member Types');
  }
  const handleFullname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({ ...formValue, fullname: e.target.value });
  };
  const handlePosition = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({ ...formValue, posotion_formvalue: e.target.value });
  };
  const handleMember = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormValue({ ...formValue, membertypes: e.target.value });
  };
  const handleImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    let files = e.target.files;

    if (files) {
      setFormValue({ ...formValue, images: files[0] });
      setShowimg(URL.createObjectURL(files[0]));
    }
  };
  const handleUpdate = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    postData.append('member_type_id', membertypes);
    postData.append('full_name', fullname);
    postData.append('position', posotion_formvalue);

    postData.append('image', formValue.images);
    try {
      if (postData) {
        await dataEdit({ postData, idUrl });
        navigate('/admin/createForm');
      }
    } catch (error) {}
  };
  return (
    <>
      <form>
        <div className="space-y-5">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Personal Information
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Use a permanent address where you can receive mail.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Full name
              </label>
              <div className="mt-2">
                <input
                  value={fullname}
                  onChange={handleFullname}
                  type="text"
                  name="fullname"
                  id="first-name"
                  autoComplete="given-name"
                  required
                  className="block w-full px-2 rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1   placeholder:text-gray-400  border-[#ced4da] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Position
              </label>
              <div className="mt-2">
                <input
                  onChange={handlePosition}
                  value={posotion_formvalue}
                  type="text"
                  name="position"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-12">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                MemberType*
              </label>
              <div className="mt-2">
                <select
                  onChange={handleMember}
                  id="memberType"
                  name="memberType"
                
                  autoComplete="partner-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                 
                  {content}
                </select>
              </div>
            </div>
          </div>

          <div className=" col-span-full">
            <label
              htmlFor="photo"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Photo
            </label>
            <div className="mt-2 flex h-20 items-center gap-x-3">
              <img
                className="h-12 mb-4 rounded-full  w-12 "
                src={showimg || image}
                alt="asas"
              />
              <input
                onChange={handleImg}
                id="file-upload"
                name="file-upload"
                type="file"
                className="py-2 sr-only "
              />
              <label
                htmlFor="file-upload"
                className="rounded-md cursor-pointer bg-white  px-2.5 py-1.5 text-sm
               font-semibold  shadow-sm ring-1 ring-inset mb-4  hover:bg-gray-3"
              >
                Change
              </label>
            </div>
          </div>
        </div>

        <div className=" flex items-center justify-end gap-x-6">
          <button
            onClick={() => history.back()}
            type="button"
            className="text-sm font-semibold leading-6 "
          >
            Cancel
          </button>

          <button
            onClick={handleUpdate}
            type="submit"
            className=" 
                bg-[#4f46e5] px-3 py-2 text-sm font-semibold text-white
            shadow-sm hover:bg-opacity-90 rounded-md 
           "
          >
            Update
          </button>
        </div>
      </form>
    </>
  );
};

export default EditForm;
