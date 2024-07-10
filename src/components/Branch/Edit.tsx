import React, { FormEvent, useEffect } from 'react';
import {
  useLazyGetUpdateQuery,
  usePostUpdateMutation,
} from '../../features/branch/apiSlice';
import { useNavigate, useParams } from 'react-router-dom';
import App from '../../Map/App';
import { useDispatch, useSelector } from 'react-redux';
import { selectLat, selectLng } from '../../features/map/MapSlice';
import Loader from '../../common/Loader';
import {
  resetState,
  setAddress,
  setLat,
  setLng,
  setLoad,
  setName,
  setPhone,
} from '../../features/branch/branchSlice';
import Input from '../../common/Form/Input';
import CancelSaveButton from '../../data/helpers/Button';
import { TitleArrow } from '../ui/Title';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

interface IpostData {
  id?: any;
  name: string;
  phone: any;
  address: any;
  lat: number | string;
  lng: number | string;
  load?: boolean;
}

const Form: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [updatePost] = useLazyGetUpdateQuery();
  const [postBranches] = usePostUpdateMutation();
  const { t } = useTranslation();
  const handleEdit = async (id: any) => {
    try {
      const response = await updatePost(id);

      if (response) {
        const dataToPass = response.data;
        dispatch(setAddress(dataToPass?.data.address));
        dispatch(setName(dataToPass?.data?.name));
        dispatch(setPhone(dataToPass?.data?.phone));
        dispatch(setAddress(dataToPass?.data.address));
        dispatch(setAddress(dataToPass?.data.address));
        dispatch(setLat(parseFloat(dataToPass?.data.lat)));
        dispatch(setLng(parseFloat(dataToPass?.data.lng)));
      }
    } catch (error) {}
  };

  useEffect(() => {
    handleEdit(id);
  }, [id]);

  const { address, phone, name, lat, lng, load } = useSelector(
    (state: any) => state.branch,
  );
  const navigate = useNavigate();

  const latData = useSelector(selectLat);
  const lngData = useSelector(selectLng);

  const postSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      dispatch(setLoad(true));
      const currentLat = latData || useSelector(selectLat);
      const currentLng = lngData || useSelector(selectLng);

      if (address && currentLat && currentLng && name && phone) {
        const postData: IpostData = {
          name,
          address,
          phone,
          lat: String(currentLat),
          lng: String(currentLng),
        };
        const response = await postBranches({ postData, id }).unwrap();
        if (response) {
          toast.success('Updated successfully!');
          navigate('/admin/branch/all');
          dispatch(resetState());
        }
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    } finally {
      dispatch(setLoad(false));
    }
  };

  const btnDisabled = !latData || !lngData || !address || !name || !phone;

  return (
    <>
      <form onSubmit={postSubmit}>
        <div className="space-y-10">
          <TitleArrow>
            {t('branch.10')} {id}
          </TitleArrow>
          <div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <Input
                label={t('branch.5')}
                value={address}
                onChange={(e) => dispatch(setAddress(e.target.value))}
                id="Address"
                placeholder="Enter your address"
              />
              <Input
                label={t('branch.14')}
                value={phone}
                onChange={(e) => dispatch(setPhone(e.target.value))}
                id="Phone"
                placeholder="+994"
              />
            </div>
            <div className="grid grid-cols-1 pt-4 lg:grid-cols-2 lg:pt-10">
              <Input
                label={t('branch.2')}
                value={name}
                onChange={(e) => dispatch(setName(e.target.value))}
                id="Name"
                placeholder="Enter your name"
              />
            </div>
            <div className="my-4 w-full">
              {lat && lng ? <App lat={lat} lng={lng} /> : <Loader />}
            </div>
          </div>
          <CancelSaveButton
            onCancel={() => {
              history.back();
              dispatch(resetState());
            }}
            onSave={postSubmit}
            btnDisabled={btnDisabled}
            loading={load}
          >
            {t('branch.10')}
          </CancelSaveButton>
        </div>
      </form>
    </>
  );
};

export default Form;
