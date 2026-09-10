import React, { useEffect, useState } from 'react';
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
  setLat,
  setLng,
  setLoad,
  setName,
  setPhone,
} from '../../features/branch/branchSlice';
import { useTranslation } from 'react-i18next';
import { TitleArrow } from '../ui/Title.tsx';

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

  const { t } = useTranslation();

  useEffect(() => {
    dispatch(resetState());
  }, [dispatch]);

  const validatePhoneNumber = (phone: string) => {
    const phoneRegex = /^\+994\d{9}$/;
    return phoneRegex.test(phone);
  };

  const postSubmit = async (e: any) => {
    e.preventDefault();
    setAttemptedSubmit(true);

    if (load) return;
    toast.dismiss();

    if (!address || !latData || !lngData || !name.trim() || !phone.trim()) {
      toast.error(t('toast.3'), { toastId: 'formError' });
      return;
    }

    if (!validatePhoneNumber(phone)) {
      toast.error(t('toast.2'), { toastId: 'phoneError' });
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
        toast.success(t('toast.4'), { toastId: 'successMessage' });
        navigate('/admin/branch/all');
        dispatch(resetState());
      }
    } catch (error) {
      toast.error(t('toast.6'), { toastId: 'submitError' });
    } finally {
      dispatch(setLoad(false));
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (/^[+\d]*$/.test(value)) {
      dispatch(setPhone(value));
    }
  };
  const inputClassName = (isInvalid: boolean): string =>
    isInvalid ? 'error-input' : '';

  return (
    <>
      <form onSubmit={postSubmit}>
        <div className="pb-12 ">
          <TitleArrow>{t('branch.1')}</TitleArrow>
          <div className="mt-10 grid grid-cols-1 items-center gap-4 lg:grid-cols-2">
            <div style={{ position: 'relative' }}>
              <Input
                label={t('branch.5')}
                value={address}
                onChange={(e) => dispatch(setAddress(e.target.value))}
                id="Address"
                placeholder={t('branch.16')}
                className={inputClassName(attemptedSubmit && !address)}
              />
              {attemptedSubmit && !address && (
                <span className="text-xs text-errorMessage">
                  *{t('toast.12')}
                </span>
              )}
            </div>
            <div className="relative">
              <Input
                label={t('branch.14')}
                value={phone}
                onChange={handlePhoneChange}
                id="Phone"
                className={inputClassName(attemptedSubmit && !phone)}
                maxLength={13}
                placeholder="+994553241765"
              />
              {attemptedSubmit && !phone && (
                <span className="text-xs text-errorMessage">
                  *{t('toast.12')}
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
                placeholder="Shane English School"
                className={inputClassName(attemptedSubmit && !name)}
              />
              {attemptedSubmit && !name && (
                <span className="text-xs text-errorMessage">
                  *{t('toast.12')}
                </span>
              )}
            </div>
          </div>

          <div className="my-4 w-full">
            <App
              lat={latData}
              lng={lngData}
              attemptedSubmit={attemptedSubmit}
              setCoordinate={(newLat: string, newLng: string) => {
                dispatch(setLat(newLat));
                dispatch(setLng(newLng));
              }}
              resetCoordinates
            />
          </div>
        </div>
        <CancelSaveButton
          onCancel={() => history.back()}
          onSave={postSubmit}
          loading={load}
        />
      </form>
    </>
  );
};

export default Form;
