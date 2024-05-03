import React, { useReducer, ChangeEvent, FormEvent, useEffect } from 'react';
import {
  useLazyGetUpdateQuery,
  usePostUpdateMutation,
} from '../../features/branch/apiSlice';
import { useNavigate, useParams } from 'react-router-dom';
import App from '../../Map/App';
import { useSelector } from 'react-redux';
import { selectLat, selectLng } from '../../features/map/MapSlice';
import Loader from '../../common/Loader';

interface IpostData {
  id?: any;
  name: string;
  phone: any;
  address: any;
  lat: number | string;
  lng: number | string;
  load?: boolean;
}

type RenderInputProps = {
  label: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  id: string;
  placeholder: string;
};

const Reducer = (state: IpostData, action: any) => {
  switch (action.type) {
    case 'setAddress':
      return {
        ...state,
        address: action.payload,
      };
    case 'setPhone':
      return {
        ...state,
        phone: action.payload,
      };
    case 'setName':
      return {
        ...state,
        name: action.payload,
      };
    case 'setLat':
      return {
        ...state,
        lat: action.payload,
      };
    case 'setLng':
      return {
        ...state,
        lng: action.payload,
      };
    case 'setLoad':
      return {
        ...state,
        load: action.payload,
      };
    default:
      return state;
  }
};

const RenderInput: React.FC<RenderInputProps> = React.memo(
  ({ label, value, onChange, id, placeholder }) => (
    <div className="sm:col-span-3">
      <label htmlFor={id} className="block text-sm font-normal leading-6">
        {label}
      </label>
      <div className="mt-2">
        <input
          value={value}
          onChange={onChange}
          type="text"
          id={id}
          placeholder={placeholder}
          autoComplete="given-name"
          className="block w-full pl-4 rounded-lg outline-none h-10 shadow-md border-inputColor sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  ),
);

const Form: React.FC = () => {
  const { id } = useParams();
  const [updatePost] = useLazyGetUpdateQuery();
  const [postBranches] = usePostUpdateMutation();
  const handleEdit = async (id: any) => {
    try {
      const response = await updatePost(id);

      if (response) {
        const dataToPass = response.data;

        dispatch({ type: 'setAddress', payload: dataToPass?.data.address });
        dispatch({ type: 'setName', payload: dataToPass?.data?.name });
        dispatch({ type: 'setPhone', payload: dataToPass?.data?.phone });
        dispatch({ type: 'setLat', payload: dataToPass?.data.lat });
        dispatch({ type: 'setLng', payload: dataToPass?.data.lng });
      }
    } catch (error) {}
  };

  useEffect(() => {
    handleEdit(id);
  }, [id]);

  const initialState: IpostData = {
    address: '',
    phone: '',
    name: '',
    lat: 0,
    lng: 0,
    load: false,
  };
  const [{ address, phone, name, load, lat, lng }, dispatch] = useReducer(
    Reducer,
    initialState,
  );
  const navigate = useNavigate();

  const latData = useSelector(selectLat);
  const lngData = useSelector(selectLng);

  const postSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      dispatch({ type: 'setLoad', payload: true });
      const currentLat = latData || useSelector(selectLat);
      const currentLng = lngData || useSelector(selectLng);

      if (address && currentLat && currentLng && name && phone) {
        const postData: IpostData = {
          name,
          address,
          phone,
          lat: currentLat,
          lng: currentLng,
        };
        console.log(postData, 'psodata');
        const response = await postBranches({postData, id}).unwrap();
        if (response.success) {
          navigate('/admin/branchcreate');
        }
      }
    } catch (error) {
      console.error('Error while submitting form:', error);
    } finally {
      dispatch({ type: 'setLoad', payload: false });
    }
  };

  const btnDisabled = !latData || !lngData || !address || !name || !phone;

  return (
    <>
      <form onSubmit={postSubmit}>
        <div className="space-y-12">
          <div className="pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <RenderInput
                label="Address"
                value={address}
                onChange={(e) =>
                  dispatch({ type: 'setAddress', payload: e.target.value })
                }
                id="Address"
                placeholder="Enter your address"
              />
              <RenderInput
                label="Phone"
                value={phone}
                onChange={(e) =>
                  dispatch({ type: 'setPhone', payload: e.target.value })
                }
                id="Phone"
                placeholder="+994"
              />
              <RenderInput
                label="Name"
                value={name}
                onChange={(e) =>
                  dispatch({ type: 'setName', payload: e.target.value })
                }
                id="Name"
                placeholder="Enter your name"
              />
            </div>
            <div className="w-full my-4">
              {lat && lng ? <App lat={lat} lng={lng} /> : <Loader />}
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            onClick={() => window.history.back()}
            type="button"
            className="text-sm font-semibold leading-6 "
          >
            Cancel
          </button>
          {load ? (
            <div
              className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          ) : (
            <button
              disabled={btnDisabled}
              type="submit"
              className={` ${
                btnDisabled ? ' opacity-65' : 'opacity-100'
              } bg-btnBgColor rounded-md h-10 w-27 text-sm font-normal text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
            >
              Update
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default Form;
