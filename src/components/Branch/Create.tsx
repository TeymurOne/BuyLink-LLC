import { usePostBranchMutation } from '../../features/branch/apiSlice';
import { useNavigate } from 'react-router-dom';
import App from '../../Map/App';
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
    try {
      dispatch(setLoad(true));

      if (address && latData && lngData && name && phone) {
        const postData: IpostData = {
          name,
          address,
          phone,
          lat: String(latData),
          lng: String(lngData),
        };

        const response = await postBranches(postData).unwrap();
        if (response.success) {
          navigate('/admin/branch/all');
          dispatch(resetState());
        }
      }
    } catch (error) {
      console.error('Error while submitting form:', error);
    } finally {
      dispatch(setLoad(false));
    }
  };

  const { t } = useTranslation();
  const btnDisabled = !latData || !lngData || !address || !name || !phone;

  return (
    <>
      <form onSubmit={postSubmit}>
        <div className="pb-12">
          <div className="mt-10 gap-4  grid lg:grid-cols-2  grid-cols-1">
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
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:pt-10 pt-4">
            <Input
              label={t('branch.2')}
              value={name}
              onChange={(e) => dispatch(setName(e.target.value))}
              id="Name"
              placeholder="Enter your name"
            />
          </div>

          <div className="w-full my-4">
            <App lat="" lng="" />
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
