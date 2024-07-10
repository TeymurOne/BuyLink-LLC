import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  useLazyUpdateOperatorGetQuery,
  useUpdateOperatorMutation,
} from '../../features/operator/apiSlice';
import { useFetchBranchAllQuery } from '../../features/branch/apiSlice';
import { IitemBranch } from './CreateForm';
import { useTranslation } from 'react-i18next';
import Input from '../../common/Form/Input';
import { useDispatch, useSelector } from 'react-redux';
import {
  setEmail,
  setLoad,
  setName,
  setPwd,
} from '../../features/operator/operatoreSlice';
import CancelSaveButton from '../../data/helpers/Button';
import { TitleArrow } from '../ui/Title';
import { toast } from 'react-toastify';

const Form = () => {
  const { id }: any = useParams();
  const { name, email, password, branchID } = useSelector(
    (store: any) => store.operato,
  );
  const [updateGet] = useLazyUpdateOperatorGetQuery();
  const [postOperator] = useUpdateOperatorMutation();
  const { t } = useTranslation();
  const handleEdit = async (id: number) => {
    try {
      const resUpdate = await updateGet(id);
      if (resUpdate) {
        const data = resUpdate.data?.data;
        dispatch(setName(data?.name));
        dispatch(setEmail(data?.email));
      }
    } catch (error) {}
  };

  useEffect(() => {
    handleEdit(id);
  }, [id]);
  const { isSuccess, data, isError } = useFetchBranchAllQuery('');
  const dispatch = useDispatch();
  const postData = new FormData();
  const navigate = useNavigate();

  let content;
  if (isSuccess) {
    content = data?.data.map((item: IitemBranch, index: number) => {
      const isSelected = item.id === branchID;
      return (
        <option key={index} selected={isSelected} value={item.id}>
          {item.name}
        </option>
      );
    });
  } else if (isError) {
    console.error('Error fetching data', 'Products Types');
  }

  const postSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    dispatch(setLoad(true));
    setLoad(true);
    e.preventDefault();
    postData.append('name', name);
    postData.append('email', email);
    postData.append('password', password);

    try {
      if (postData) {
        await postOperator({ postData, id })
          .unwrap()
          .then((response) => {
            if (response) {
              toast.success('Updated successfully!');
              navigate('/admin/operator/all');
            }
          });
      }
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setLoad(false));
    }
  };
  return (
    <>
      <form>
        <div className="space-y-12">
          <div className="pb-12">
            <TitleArrow>
              {t('operator.0')} {t('operator.8')} : <span>{id}</span>
            </TitleArrow>
            <div className="mt-10 grid grid-cols-6 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-6 lg:col-span-3 ">
                <Input
                  label={t('operator.3')}
                  value={name}
                  onChange={(e) => dispatch(setName(e.target.value))}
                  id="name"
                  placeholder="Enter your name"
                />
              </div>

              <div className="col-span-6 lg:col-span-3 ">
                <Input
                  label="E-mail"
                  value={email}
                  onChange={(e) => dispatch(setEmail(e.target.value))}
                  id="email"
                  placeholder="Enter your Email"
                />
              </div>
              <div className="col-span-6 lg:col-span-3 ">
                <Input
                  type="password"
                  label={t('operator.11')}
                  value={password}
                  onChange={(e) => dispatch(setPwd(String(e.target.value)))}
                  id="password"
                  placeholder="Enter your password"
                />
              </div>
            </div>
          </div>
        </div>
        <CancelSaveButton onCancel={() => history.back()} onSave={postSubmit} />
      </form>
    </>
  );
};

export default Form;
