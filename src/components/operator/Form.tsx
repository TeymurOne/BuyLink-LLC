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
import { Title } from '../ui/Title';
import CancelSaveButton from '../../data/helpers/Button';

const Form = () => {
  const { name, password, email } = useSelector((state: any) => state.operator);
  const dispatch = useDispatch();
  

  const { isSuccess, data, isError } = useFetchBranchAllQuery('');

  const postData = new FormData();
  const navigate = useNavigate();

  const btnDisabled = !name || !email || !password;
  const [postOperator] = usePostOperatorMutation();

  let content;

  if (isSuccess) {
    content = data.data?.map((item: IitemBranch, index: number) => {
      return (
        <option key={index} value={item.id}>
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
        await postOperator(postData)
          .unwrap()
          .then((response) => {
            if (response) {
              navigate('/admin/operator/all');
              dispatch(resetState())
            }
          });
      }
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setLoad(false));
    }
  };
  const { t } = useTranslation();

  return (
    <>
      <form>
        <div className="space-y-12">
          <div className=" pb-12">
            <Title>{t("operator.1")}</Title>

            <div className="mt-10 grid grid-cols-6 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="lg:col-span-3 col-span-6 ">
                <Input
                  label={t('operator.3')}
                  value={name}
                  onChange={(e) => dispatch(setName(e.target.value))}
                  id="Address"
                  placeholder="Enter your name"
                />
              </div>
              <div className="lg:col-span-3 col-span-6 ">
                <Input
                  label="E-mail"
                  value={email}
                  onChange={(e) => dispatch(setEmail(e.target.value))}
                  id="email"
                  placeholder="Enter your Email"
                />
              </div>
              <div className="lg:col-span-3 col-span-6 ">
                <Input
                type='password'
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
    </>
  );
};

export default Form;
