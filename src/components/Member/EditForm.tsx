import React, { useEffect, useState } from 'react';
import {
  useFetchMemberTypeQuery,
  useLazyUpdateGetMemberQuery,
  useUpdateMemberMutation,
} from '../../features/members/apiSlice';
import {  useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaArrowLeft } from 'react-icons/fa6';

type item = {
  id: number;
  name: string;
};

const EditForm = () => {
  const [updatePost] = useLazyUpdateGetMemberQuery();
  const { id } = useParams();
  const [res, setRes] = useState<any>({
    id: id,
    fullname: '',
    membertype: '',
    posotion_formvalue: '',
    images: '',
  });
  

  const handleEdit = async (id: string | undefined) => {
    try {
      const response = await updatePost(id);

      if (response) {
        const data = response.data?.data;
        setRes({
          ...res,
          fullname: data.full_name,
          membertype: data.member_type?.id,
          posotion_formvalue: data?.position,
          images:data?.image
        });
      }
    } catch (error) {}
  };

  
  useEffect(() => {
    handleEdit(id);
  }, [id]);

  const { t } = useTranslation();

  let content;
  const { isSuccess, data, isError } = useFetchMemberTypeQuery();
  const [dataEdit] = useUpdateMemberMutation();
  const [showimg, setShowimg] = useState<string>();
  const postData = new FormData();
  const navigate=useNavigate()
  

  if (isSuccess) {
    content = data?.map((item: item, index: number) => {
      
    
      
      return (
        <option
          key={index}
          value={item.id}
          selected={item.id===Number(res?.membertype)}
        >
          {item.name}
        </option>
      );
    });
  } else if (isError) {
    console.error('Error fetching data', 'Member Types');
  }
  const handleFullname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRes({ ...res, fullname: e.target.value });
  };
  const handlePosition = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRes({ ...res, posotion_formvalue: e.target.value });
  };
  const handleMember = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRes({ ...res, membertype: e.target.value });
  };
  const handleImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    let files: FileList | null = e.target.files;

    if (files && files.length > 0) {
      setRes({ ...res, images: files[0] });
      setShowimg(URL.createObjectURL(files[0]));
    }
  };
  const idUrl=res?.id  
  const handleUpdate = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    postData.append('member_type_id', res?.membertype);
    postData.append('full_name', res?.fullname);
    postData.append('position', res?.posotion_formvalue);

    if (res?.images instanceof File) {
      postData.append('image', res?.images);
    }
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
          <h2 className="mb-2 flex items-center space-x-4 font-semibold italic">
            {t('member.0')} {t('member.7')}{' '}
            <FaArrowLeft onClick={() => window.history.back()} />
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 "
              >
                {t('member.4')}
              </label>
              <div className="mt-2">
                <input
                  value={res.fullname}
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
                className="block text-sm font-medium leading-6 "
              >
                {t('member.5')}
              </label>
              <div className="mt-2">
                <input
                  onChange={handlePosition}
                  value={res.posotion_formvalue}
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
                className="block text-sm font-medium leading-6 "
              >
                {t('member.11')}
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
              className="block text-sm font-medium leading-6 "
            >
              {t('member.2')}
            </label>
            <div className="mt-2 flex h-20 items-center gap-x-3">
              <img
                className="h-12 mb-4 rounded-full  w-12 "
                src={showimg || res.images}
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
                {t('member.7')}
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
            {t('member.8')}
          </button>

          <button
            type="submit"
            onClick={handleUpdate}
            className=" 
                bg-[#4f46e5] px-3 py-2 text-sm font-semibold text-white
            shadow-sm hover:bg-opacity-90 rounded-md 
           "
          >
            {t('member.10')}
          </button>
        </div>
      </form>
    </>
  );
};

export default EditForm;
