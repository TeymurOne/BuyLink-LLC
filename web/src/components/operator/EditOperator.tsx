import React, { useEffect, useState } from 'react';
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
import CommonSelect from '../../common/Form/CommonSelect';

const Form = () => {
  const { id }: any = useParams();
  const { name, email, password, branch_id } = useSelector(
    (store: any) => store.operator,
  );
  const [selectedBranchId, setSelectedBranchId] = useState<string>('');
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  const [updateGet] = useLazyUpdateOperatorGetQuery();
  const [postOperator] = useUpdateOperatorMutation();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const postData = new FormData();

  const handleEdit = async (id: number) => {
    try {
      const resUpdate = await updateGet(id);
      if (resUpdate) {
        const data = resUpdate.data?.data;
        dispatch(setName(data?.name));
        dispatch(setEmail(data?.email));
        setSelectedBranchId(data?.branch?.id);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleEdit(id);
  }, [id]);

  const { isSuccess, data, isError } = useFetchBranchAllQuery('');

  let branchOptions;
  if (isSuccess) {
    branchOptions = data?.data.map((item: IitemBranch, index: number) => {
      return (
        <option key={index} value={item.id}>
          {item.name}
        </option>
      );
    });
  } else if (isError) {
    console.error('Error fetching branch data');
  }

  const postSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setAttemptedSubmit(true);

    if (!name || !email || !password) {
      toast.error(t('toast.11'));
      return;
    }

    if (branchOptions && branchOptions.length > 1 && !selectedBranchId) {
      toast.error(t('toast.11'));
      return;
    }

    dispatch(setLoad(true));
    postData.append('name', name);
    postData.append('email', email);
    postData.append('password', password);

    if (branchOptions && branchOptions.length > 1) {
      postData.append('branch_id', selectedBranchId);
    }

    try {
      if (postData) {
        await postOperator({ postData, id })
          .unwrap()
          .then((response) => {
            if (response) {
              toast.success(t('toast.5'));
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

  const handleBranchChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBranchId(e.target.value);
  };

  return (
    <>
      <form>
        <div className="space-y-12">
          <div className="pb-12">
            <TitleArrow>
              {t('operator.0')} {t('operator.8')}
            </TitleArrow>
            <div className="mt-10 grid grid-cols-6 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-6 lg:col-span-3">
                <Input
                  label={t('operator.3')}
                  value={name}
                  onChange={(e) => dispatch(setName(e.target.value))}
                  id="name"
                  placeholder="Enter your name"
                />
              </div>

              <div className="col-span-6 lg:col-span-3">
                <Input
                  label="E-mail"
                  value={email}
                  onChange={(e) => dispatch(setEmail(e.target.value))}
                  id="email"
                  placeholder="Enter your Email"
                />
              </div>
              <div className="col-span-6 lg:col-span-3">
                <Input
                  type="password"
                  label={t('operator.11')}
                  value={password}
                  onChange={(e) => dispatch(setPwd(e.target.value))}
                  id="password"
                  placeholder="Enter your password"
                />
              </div>
              {branchOptions && branchOptions.length > 1 && (
                <div className="col-span-6 lg:col-span-3">
                  <CommonSelect
                    label={t('operator.13')}
                    value={selectedBranchId}
                    onChange={handleBranchChange}
                    option={t('branch.16')}
                    required={true}
                    attemptedSubmit={attemptedSubmit}
                  >
                    <option value="">{t('branch.select')}</option>
                    {branchOptions}
                  </CommonSelect>
                  {attemptedSubmit && !selectedBranchId && (
                    <span className="text-xs text-errorMessage">
                      *Please select a branch
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <CancelSaveButton onCancel={() => navigate(-1)} onSave={postSubmit} />
      </form>
    </>
  );
};

export default Form;
