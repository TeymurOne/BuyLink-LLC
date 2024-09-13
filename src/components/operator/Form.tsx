import React, { useEffect, useState } from 'react';
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
  data?: {
    error: {
      [key: string]: string[];
    };
  };
}

const Form: React.FC = () => {
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: boolean }>({
    name: false,
    email: false,
    password: false,
  });

  const { name, password, email } = useSelector(
    (state: { operator: OperatorState }) => state.operator,
  );
  const dispatch = useDispatch();
  const { data, isSuccess, isError } = useFetchBranchAllQuery('');
  const navigate = useNavigate();
  const [postOperator] = usePostOperatorMutation();
  let content: JSX.Element[] | undefined;
  useEffect(() => {
    dispatch(resetState());
  }, [dispatch]);
  if (isSuccess && data) {
    content = data.data?.map((item: IitemBranch, index: number) => (
      <option key={index} value={item.id}>
        {item.name}
      </option>
    ));
  } else if (isError) {
    console.error('Error fetching data', 'Products Types');
  }

  const validateForm = () => {
    const errors: { [key: string]: boolean } = {};
    errors.name = !name.trim();
    errors.email = !email.trim();
    errors.password = !password.trim();
    setFormErrors(errors);
    return !Object.values(errors).some((error) => error);
  };

  const postSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAttemptedSubmit(true);

    if (!validateForm()) {
      toast.error(t('toast.11'));
      return;
    }

    dispatch(setLoad(true));
    const postData = new FormData();
    postData.append('name', name);
    postData.append('email', email);
    postData.append('password', password);

    try {
      await postOperator(postData).unwrap();
      toast.success(t('toast.4'));
      navigate('/admin/operator/all');
      dispatch(resetState());
    } catch (error) {
      console.error(error);
      const errorResponse = error as ErrorResponse;
      if (errorResponse.data && errorResponse.data.error) {
        Object.keys(errorResponse.data.error).forEach((key) => {
          errorResponse.data.error[key].forEach((message: string) => {
            toast.error(message);
          });
        });
      }
    } finally {
      dispatch(setLoad(false));
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(setName(value));
    setFormErrors((prevErrors) => ({ ...prevErrors, name: false }));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmail(e.target.value));
    setFormErrors((prevErrors) => ({ ...prevErrors, email: false }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPwd(String(e.target.value)));
    setFormErrors((prevErrors) => ({ ...prevErrors, password: false }));
  };

  const inputClassName = (isInvalid: boolean): string =>
    isInvalid ? 'error-input' : '';

  const { t } = useTranslation();

  return (
    <>
      <form onSubmit={postSubmit}>
        <div className="space-y-12">
          <div className="pb-12">
            <TitleArrow>{t('operator.1')}</TitleArrow>
            <div className="mt-10 grid grid-cols-6 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="relative col-span-6 lg:col-span-3">
                <Input
                  label={t('operator.3')}
                  value={name}
                  onChange={handleNameChange}
                  id="name"
                  placeholder="John Brown"
                  className={inputClassName(attemptedSubmit && formErrors.name)}
                />
                {attemptedSubmit && formErrors.name && (
                  <span className="text-xs text-errorMessage">
                    *Please fill out this field
                  </span>
                )}
              </div>
              <div className="relative col-span-6 lg:col-span-3">
                <Input
                  label="E-mail"
                  value={email}
                  onChange={handleEmailChange}
                  id="email"
                  placeholder="john@example.com"
                  className={inputClassName(
                    attemptedSubmit && formErrors.email,
                  )}
                />
                {attemptedSubmit && formErrors.email && (
                  <span className="text-xs text-errorMessage">
                    *Please fill out this field
                  </span>
                )}
              </div>
              <div className="relative col-span-6 lg:col-span-3">
                <Input
                  type="password"
                  label={t('operator.9')}
                  value={password}
                  onChange={handlePasswordChange}
                  id="password"
                  placeholder="***********"
                  className={inputClassName(
                    attemptedSubmit && formErrors.password,
                  )}
                />
                {attemptedSubmit && formErrors.password && (
                  <span className="text-xs text-errorMessage">
                    *Please fill out this field
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        <CancelSaveButton onCancel={() => history.back()} onSave={postSubmit} />
      </form>
      <ToastContainer />
    </>
  );
};

export default Form;
