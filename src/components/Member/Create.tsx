import React, { useState } from 'react';
import {
  useFetchMemberTypeQuery,
  usePostMemberMutation,
} from '../../features/members/apiSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  resetMembersState,
  setFullName,
  setImageUrl,
  setLoad,
  setMembersType,
  setPosition,
} from '../../features/members/membersSlice';
import CancelSaveButton from '../../data/helpers/Button';
import { RootState } from '../../app/api/store';
import { Title } from '../ui/Title';
import Input from '../../common/Form/Input';
import Select from '../../common/Form/Select';
import InputImg from '../../common/Form/InputImg';

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
  const [showimg, setShowimg] = useState<any>('');

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
      setShowimg(URL.createObjectURL(files[0]));
      // dispatch(setImageUrl(URL.createObjectURL(files[0])));
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

  const { fullname, position, membertypes, load } = useSelector(
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

            <InputImg showimg={showimg} onChange={handleImg} />

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <Input
                  id="Fullname"
                  label="Fullname"
                  value={fullname}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    dispatch(setFullName(e.target.value))
                  }
                  required={true}
                />
              </div>
              <div className="sm:col-span-3">
                <Input
                  id="position"
                  label="Position"
                  value={position}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    dispatch(setPosition(String(e.target.value)))
                  }
                  required={true}
                />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <Select
                  id="memberType"
                  label="Member Type*"
                  defaultValue="default"
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    dispatch(setMembersType(String(e.target.value)))
                  }
                >
                  <option disabled value="default">
                    Partner Secin
                  </option>
                  {content}
                </Select>
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
