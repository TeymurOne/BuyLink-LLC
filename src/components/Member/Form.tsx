import React, { useState } from 'react';
import {
  useFetchMemberTypeQuery,
  usePostMemberMutation,
} from '../../features/members/apiSlice';
import { useNavigate } from 'react-router-dom';
import addImg from '../../images/icon/addImg.png';
type TinitialState = {
  fullname: string;
  membertypes: string;
  position: string;
  images: any;
};
const initialState: TinitialState = {
  fullname: '',
  membertypes: '',
  position: '',
  images: '',
};

export type Titem = {
  id: number;
  name: string;
};

const Form = () => {
  const [showimg, setShowimg] = useState<string>();
  const [formValue, setFormValue] = useState<TinitialState>(initialState);
  const { fullname, position, membertypes, images } = formValue;
  const [load, setLoad] = useState<boolean>(false);
  const postData = new FormData();
  const navigate = useNavigate();

  const { isSuccess, data, isError } = useFetchMemberTypeQuery();
  const [postForm] = usePostMemberMutation();

  let content;
  if (isSuccess) {
    content = data?.map((item: Titem, index: number) => {
      return (
        <option key={index} value={item.id}>
          {item.name}
        </option>
      );
    });
  } else if (isError) {
    console.error('Error fetching data', 'Member Types');
  }

  const handleMember = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setFormValue({ ...formValue, membertypes: e.target.value });
  };
  const handleFullname = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormValue({ ...formValue, fullname: e.target.value });
  };

  const handleImg = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let files: FileList | null = e.target.files;

    if (files) {
      setFormValue({ ...formValue, images: files[0] });
      setShowimg(URL.createObjectURL(files[0]));
    }
  };

  const handlePosition = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormValue({ ...formValue, position: e.target.value });
  };
  const postSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    setLoad(true);
    e.preventDefault();
    postData.append('image', images);
    postData.append('member_type_id', membertypes);
    postData.append('full_name', fullname);
    postData.append('position', position);

    try {
      if (postData) {
        await postForm(postData)
          .unwrap()
          .then((response) => {
            if (response.success) {
              navigate('/admin/createForm');
              setFormValue(initialState);
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }
    } catch (error) {
      console.error(error, 'Request failed');
    } finally {
      setLoad(false);
    }
  };

  const btnDisabled: boolean = !fullname || !position || !membertypes || !images;
  return (
    <>
      <form>
        <div className="space-y-12">
          <div className=" pb-12">
            <h2 className="text-base font-semibold leading-7 ">
              Personal Information
            </h2>
            <p className="mt-1 text-sm leading-6 ">
              Use a permanent address where you can receive mail.
            </p>
            <div className=" col-span-full">
              <label
                htmlFor="photo"
                className="block text-sm font-medium leading-6"
              >
                Photo
              </label>
              <div className="mt-6 flex h-20 items-center gap-x-3">
                <img
                  className="h-20 mb-4 object-cover rounded-[6px]  w-20 "
                  src={showimg || addImg}
                  alt="asas"
                />
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="py-2 sr-only bg-danger"
                  onChange={handleImg}
                />
                <label
                  htmlFor="file-upload"
                  className="rounded-md bg-white  px-2.5 py-1.5 text-sm
               font-semibold text-gray-900 m shadow-sm ring-1 ring-inset mb-4 ring-gray-300 hover:bg-gray-3"
                >
                  Change
                </label>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="fullname"
                  className="block text-sm font-medium leading-6"
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
                    className="block w-full px-2 rounded-md py-1.5 text-gray-900 shadow-md      border-inputColor sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="position"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Position
                </label>
                <div className="mt-2">
                  <input
                    value={position}
                    onChange={handlePosition}
                    type="text"
                    name="position"
                    id="fullname"
                    autoComplete="fullname"
                    className="block w-full px-2 rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="MemberType"
                  className="block text-sm font-medium leading-6 "
                >
                  MemberType*
                </label>
                <div className="mt-2">
                  <select
                    onChange={handleMember}
                    id="memberType"
                    name="memberType"
                    defaultValue="default"
                    autoComplete="partner-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option disabled value="default">
                      Partner Secin
                    </option>
                    {content}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            onClick={() => history.back()}
            type="button"
            className="text-sm font-semibold leading-6 "
          >
            Cancel
          </button>
          {load ? (
            <div
              className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          ) : (
            <>
              <button
                disabled={btnDisabled}
                onClick={postSubmit}
                type="submit"
                className={`rounded-md ${
                  btnDisabled ? 'opacity-65' : 'opacity-100'
                }  bg-[#4f46e5] px-3 py-2 text-sm font-semibold text-white
             shadow-sm 
            `}
              >
                Save
              </button>
            </>
          )}
        </div>
      </form>
    </>
  );
};

export default Form;
