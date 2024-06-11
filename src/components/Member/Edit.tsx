import React, { useEffect } from 'react';
import {
  useFetchMemberTypeQuery,
  useLazyUpdateGetMemberQuery,
  useUpdateMemberMutation,
} from '../../features/members/apiSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
  resetState,
  setFullName,
  setId,
  setImage,
  setLoad,
  setMembersType,
  setPosition,
  setShowImg,
} from '../../features/members/membersSlice';
import { RootState } from '../../app/api/store';
import TableSkeleton from '../../skeleton/TableSkeleton';
import InputImg from '../../common/Form/InputImg';
import Input from '../../common/Form/Input';
import Select from '../../common/Form/Select';
import CancelSaveButton from '../../data/helpers/Button';
import { Title } from '../ui/Title';

type item = {
  id: number;
  name: string;
};

const EditForm = () => {
  const { showimg, images, fullname, position, membertypes, memberId } =useSelector((store: RootState) => store.memberSlice);

  const [updatePost] = useLazyUpdateGetMemberQuery();

  const dispatch = useDispatch();
  const { id } = useParams();

  const handleEdit = async (id: string | undefined) => {
    try {
      const response = await updatePost(id);

      if (response) {
        const data = response.data?.data;
        if (data) {
          dispatch(setShowImg(data?.image));

          dispatch(setFullName(data?.full_name));
          dispatch(setId(data?.id));
          dispatch(setPosition(data?.position));
          dispatch(setMembersType(data?.member_type.id));
          dispatch(setLoad(true));
        }
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
  const postData = new FormData();
  const navigate = useNavigate();
  if (isSuccess) {
    content = data?.map((item: item, index: number) => {
      return (
        <option
          key={index}
          value={item.id}
          selected={item.id === Number(membertypes)}
        >
          {item.name}
        </option>
      );
    });
  } else if (isError) {
    console.error('Error fetching data', 'Member Types');
  }

  const handleMember = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setMembersType(e.target.value));
  };

  const handleImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    let files: FileList | null = e.target.files;

    if (files && files?.length > 0) {
     

      const imageUrl = URL.createObjectURL(files[0]);
      dispatch(setImage(files[0]));
      dispatch(setShowImg(imageUrl));
    }
  };

  const handleUpdate = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    postData.append('member_type_id', membertypes);
    postData.append('full_name', fullname);
    postData.append('position', position);

    if (images instanceof File) {
      postData.append('image', images || showimg);
    }

    try {
      if (postData && memberId) {
        await dataEdit({ postData, memberId });
        dispatch(resetState());
        navigate('/admin/member');
      }
    } catch (error) {}
  };
  const btnDisabled: boolean = !fullname ;

  return (
    <>
      {!updatePost.length ? (
        <TableSkeleton />
      ) : (
        <form>
          <div className="space-y-12">
            <Title>
              {t('member.0')} {t('member.7')}{' '}
            </Title>
            <InputImg showimg={showimg} onChange={handleImg} />

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <Input
                  id="Fullname"
                  label="Fullname"
                  value={fullname}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    dispatch(setFullName(String(e.target.value)))
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

              <div className="sm:col-span-3">
                <Select
                  onChange={handleMember}
                  id="memberType"
                  label="MemberType"
                  required={true}
                >
                  {content}
                </Select>
              </div>
            </div>
          </div>

          <CancelSaveButton
            onCancel={() => history.back()}
            onSave={handleUpdate}
            btnDisabled={btnDisabled}
          />
        </form>
      )}
    </>
  );
};

export default EditForm;
