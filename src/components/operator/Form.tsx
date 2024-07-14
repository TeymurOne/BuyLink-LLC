import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePostOperatorMutation } from '../../features/operator/apiSlice';
import { useFetchBranchAllQuery } from '../../features/branch/apiSlice';
import { IitemBranch } from './CreateForm';
import { useTranslation } from 'react-i18next';
import Input from '../../common/Form/Input';
import { useDispatch, useSelector } from 'react-redux';
import {
  resetState,
  setEmail,
  setLoad,
  setName,
  setPwd,
} from '../../features/operator/operatoreSlice';
import { TitleArrow } from '../ui/Title';
import CancelSaveButton from '../../data/helpers/Button';
import { toast, ToastContainer } from 'react-toastify';

interface OperatorState {
  name: string;
  password: string;
  email: string;
}

interface ErrorResponse {
  error: {
    [key: string]: string[];
  };
}

const Form: React.FC = () => {
  const { name, password, email } = useSelector(
    (state: { operator: OperatorState }) => state.operator,
  );
  const dispatch = useDispatch();
  const { data, isSuccess, isError } = useFetchBranchAllQuery('');
  const navigate = useNavigate();
  const [postOperator] = usePostOperatorMutation();
  const btnDisabled = !name || !email || !password;
  let content: JSX.Element[] | undefined;

  if (isSuccess && data) {
    content = data.data?.map((item: IitemBranch, index: number) => (
      <option key={index} value={item.id}>
        {item.name}
      </option>
    ));
  } else if (isError) {
    console.error('Error fetching data', 'Products Types');
  }

  const postSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(setLoad(true));
    const postData = new FormData();
    postData.append('name', name);
    postData.append('email', email);
    postData.append('password', password);

    try {
      await postOperator(postData).unwrap();
      toast.success('Added successfully!');
      navigate('/admin/operator/all');
      dispatch(resetState());
    } catch (error) {
      console.error(error);
      if ((error as { data?: ErrorResponse }).data?.error) {
        Object.keys((error as ErrorResponse).data!.error).forEach((key) => {
          (error as ErrorResponse).data!.error[key].forEach(
            (message: string) => {
              toast.error(message);
            },
          );
        });
      }
    } finally {
      dispatch(setLoad(false));
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const cleanedValue = value.replace(/[^a-zA-Z\s]/g, '');
    dispatch(setName(cleanedValue));
  };
  const { t } = useTranslation();

  return (
    <>
      <form>
        <div className="space-y-12">
          <div className=" pb-12">
            <TitleArrow>{t('operator.1')}</TitleArrow>
            <div className="mt-10 grid grid-cols-6 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-6 lg:col-span-3 ">
                <Input
                  label={t('operator.3')}
                  value={name}
                  onChange={handleNameChange}
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
              <div className="col-span-6 lg:col-span-3">
                <Input
                  type="password"
                  label={t('operator.9')}
                  value={password}
                  onChange={(e) => dispatch(setPwd(String(e.target.value)))}
                  id="password"
                  placeholder="Enter your password"
                />
              </div>
            </div>
          </div>
        </div>

        <CancelSaveButton
          btnDisabled={btnDisabled}
          onCancel={() => history.back()}
          onSave={postSubmit}
        />
      </form>
      <ToastContainer />
    </>
  );
};

export default Form;
