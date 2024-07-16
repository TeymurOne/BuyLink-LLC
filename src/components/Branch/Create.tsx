import { useState } from 'react';
import { usePostBranchMutation } from '../../features/branch/apiSlice';
import { useNavigate } from 'react-router-dom';
import App from '../../Map/App';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { selectLat, selectLng } from '../../features/map/MapSlice';
import Input from '../../common/Form/Input';
import CancelSaveButton from '../../data/helpers/Button';
import {
  resetState,
  setAddress,
  setLoad,
  setName,
  setPhone,
} from '../../features/branch/branchSlice';
import { useTranslation } from 'react-i18next';

interface IpostData {
  id?: any;
  name: string;
  phone?: string | number;
  address: any;
  lat: any;
  lng: any;
  load?: boolean;
}

const Form: React.FC = () => {
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const dispatch = useDispatch();
  const { address, phone, name, load } = useSelector(
    (state: any) => state.branch,
  );
  const navigate = useNavigate();
  const [postBranches] = usePostBranchMutation();
  const latData = useSelector(selectLat);
  const lngData = useSelector(selectLng);

  const postSubmit = async (e: any) => {
    e.preventDefault();
    setAttemptedSubmit(true);

    if (!address || !latData || !lngData || !name.trim() || !phone.trim()) {
      toast.error('Please fill out the form completely.');
      return;
    }

    try {
      dispatch(setLoad(true));

      const postData: IpostData = {
        name,
        address,
        phone,
        lat: String(latData),
        lng: String(lngData),
      };

      const response = await postBranches(postData).unwrap();
      if (response.success) {
        toast.success('Added successfully!');
        navigate('/admin/branch/all');
        dispatch(resetState());
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    } finally {
      dispatch(setLoad(false));
    }
  };

  const { t } = useTranslation();
  const btnDisabled = false;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (/^\d*$/.test(value)) {
      dispatch(setPhone(value));
    }
  };

  const inputClassName = (isInvalid: boolean): string =>
    isInvalid ? 'error-input' : '';

  return (
    <>
      <form onSubmit={postSubmit}>
        <div className="pb-12 ">
          <div className="mt-10 grid grid-cols-1 items-center gap-4 lg:grid-cols-2">
            <div style={{ position: 'relative' }}>
              <Input
                label={t('branch.5')}
                value={address}
                onChange={(e) => dispatch(setAddress(e.target.value))}
                id="Address"
                placeholder="Enter your address"
                className={inputClassName(attemptedSubmit && !address)}
              />
              {attemptedSubmit && !address && (
                <span className="text-xs text-errorMessage">
                  *Please fill out the form
                </span>
              )}
            </div>
            <div className="relative">
              <div className="w-full">
                <label
                  htmlFor="Phone"
                  className="block w-full text-sm font-medium leading-5 text-tdColor dark:text-white300"
                >
                  Phone
                </label>
                <div className="relative mt-1 flex rounded-md shadow-sm">
                  <select
                    id="Phone"
                    name="phone"
                    className={`${inputClassName(attemptedSubmit && !phone)} bg-gray-50 text-gray500 rounded-l-lg border-transparent text-sm focus:outline-none`}
                  >
                    <option>+994</option>
                    <option>012</option>
                  </select>
                  <input
                    type="text"
                    value={phone}
                    onChange={handlePhoneChange}
                    id="Phone"
                    maxLength={9}
                    className={`${inputClassName(attemptedSubmit && !phone)} block h-10 w-full rounded-r-lg border-inputColor pl-4 shadow-md outline-none sm:text-sm sm:leading-6`}
                    placeholder="Enter phone number"
                  />
                </div>
              </div>
              {attemptedSubmit && !phone && (
                <span className="text-xs text-errorMessage">
                  *Please fill out the form
                </span>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 pt-4 lg:grid-cols-2 lg:pt-10">
            <div className="relative">
              <Input
                label={t('branch.2')}
                value={name}
                onChange={(e) => dispatch(setName(e.target.value))}
                id="Name"
                placeholder="Enter your name"
                className={inputClassName(attemptedSubmit && !name)}
              />
              {attemptedSubmit && !name && (
                <span className="text-xs text-errorMessage">
                  *Please fill out the form
                </span>
              )}
            </div>
          </div>

          <div className="my-4 w-full">
            <App
              lat={latData}
              lng={lngData}
              attemptedSubmit={attemptedSubmit}
            />
          </div>
        </div>

        <CancelSaveButton
          onCancel={() => history.back()}
          onSave={postSubmit}
          btnDisabled={btnDisabled}
          loading={load}
        />
      </form>
    </>
  );
};

export default Form;
