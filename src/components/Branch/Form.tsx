import React, { useReducer, ChangeEvent, FormEvent } from 'react';
import { usePostBranchMutation } from '../../features/branch/apiSlice';
import { useNavigate } from 'react-router-dom';
import App from '../../Map/App';
import { useSelector } from 'react-redux';
import { selectLat, selectLng } from '../../features/map/MapSlice';

interface IpostData {
  id?: any;
  name: string;
  phone?: string | number;
  address: any;
  lat: any ;
  lng: any ;
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
  const initialState: IpostData = {
    address: '',
    phone: '',
    name: '',
    lat: null,
    lng: null,
    load: false,
  };
  const [{ address, phone, name, load }, dispatch] = useReducer( Reducer, initialState, );
  const navigate = useNavigate();
  const [postBranches] = usePostBranchMutation();
  const latData = useSelector(selectLat);
  const lngData = useSelector(selectLng);

  const postSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      dispatch({ type: 'setLaod', payload: true });
    
      if (address && latData && lngData && name && phone) {
        const postData: IpostData = {
          name,
          address,
          phone,
          lat:String(latData) ,
          lng: String(lngData),
        };
      
        
        const response = await postBranches(postData).unwrap();
        if (response.success) {

          navigate('/admin/branchcreate');
        }
      }
    } catch (error) {
      console.error('Error while submitting form:', error);
    } finally {
      dispatch({ type: 'setLaod', payload: false });
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
              <App lat="" lng="" />
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6 ">
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
              Save
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default Form;
