import React, { useState } from 'react';
import {
  useFetchMemberTypeQuery,
  usePostMemberMutation,
} from '../../features/members/apiSlice';
import { useNavigate } from 'react-router-dom';
import addImg from '../../images/partnyor/addimg.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  resetMembersState,
  setFullName,
  setImageUrl,
  setLoad,
  setMembersType,
  setPosition,
} from '../../features/members/membersSlice';
import renderInput, { RenderSelect } from '../../data/helpers/Fields';
import CancelSaveButton from '../../data/helpers/Button';
import { RootState } from '../../app/api/store';
import { Title } from '../ui/Title';

export type Titem = {
  id: number;
  name: string;
};

const Form = () => {
  const postData = new FormData();
  const navigate = useNavigate();

  const { isSuccess, data, isError } = useFetchMemberTypeQuery();
  const [postForm] = usePostMemberMutation();
  const dispatch = useDispatch();
  const [images, setImages] = useState<any>('');

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

  const handleImg = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let files: FileList | null = e.target.files;

    if (files) {
      setImages(files[0]);
      dispatch(setImageUrl(URL.createObjectURL(files[0])));
    }
  };

  const postSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    dispatch(setLoad(true));
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
              navigate('/admin/member');
              dispatch(resetMembersState());
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }
    } catch (error) {
      console.error(error, 'Request failed');
    } finally {
      dispatch(setLoad(false));
    }
  };

  const { showimg, fullname, position, membertypes, load } = useSelector(
    (store: RootState) => store.memberSlice,
  );

  const btnDisabled: boolean =
    !fullname || !position || !membertypes || !images;

  return (
    <>
      <form>
        <div className="space-y-12">
          <div className=" pb-12">
            <Title>Personal Information</Title>

            <div className=" col-span-full">
              <label
                htmlFor="photo"
                className="block text-sm font-medium leading-6"
              >
                Photo
              </label>
              <div className="mt-6 flex h-20 items-center gap-x-3">
                <img
                  className="h-15 mb-4 object-cover rounded-xl bg-white   w-20 "
                  src={showimg || addImg}
                  alt="Member Photo "
                />
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="py-2 sr-only"
                  onChange={handleImg}
                />
                <label
                  htmlFor="file-upload"
                  className="rounded-md bg-white lg:px-13 md:px-10 px-6 mb-3 border py-2.5   text-sm
                     font-semibold shadow-sm   border-black border-opacity-20  h-10"
                >
                  Add Image
                </label>
                <input
                  type="hidden"
                  placeholder="Add-img"
                  onChange={handleImg}
                />
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                {renderInput({
                  id: 'Fullname',
                  label: 'Fullname',
                  value: fullname,
                  onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                    dispatch(setFullName(e.target.value)),
                  required: true,
                })}
              </div>
              <div className="sm:col-span-3">
                {renderInput({
                  id: 'position',
                  label: 'Position',
                  value: position,
                  onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                    dispatch(setPosition(String(e.target.value))),
                  required: true,
                })}
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <RenderSelect
                  id="memberType"
                  label="Member Type*"
                  defaultValue="default"
                  onChange={(e) => dispatch(setMembersType(e.target.value))}
                >
                  <option disabled value="default">
                    Partner Secin
                  </option>
                  {content}
                </RenderSelect>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <CancelSaveButton
            onCancel={() => history.back()}
            onSave={postSubmit}
            btnDisabled={btnDisabled}
            loading={load}
          />
        </div>
      </form>
    </>
  );
};

export default Form;
