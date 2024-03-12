import { useState } from 'react';
import { usePostBranchMutation } from '../../features/branch/apiSlice';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Map } from './Map';

export interface IpostData {
  id?: any;
  name: string;
  address: string;
  lat: number | string;
  lng: number | string;
  phone:number | undefined
}
const Form = () => {
  const [addres, setAddress] = useState<string>('');
  const [phone, setPhone]=useState<number >()
  const [name, setName] = useState<string>('');
  const navigate = useNavigate();

  const [selectedLat, setSelectedLat] = useState<number>(40.405999043422824);
  const [selectedLng, setSelectedLng] = useState<number>(49.91863556236839);
  const [load, setLoad] = useState<boolean>(false);
  const [postBranches] = usePostBranchMutation();

  const handleLatChange = (lat: number) => {
    setSelectedLat(lat);
  };

  const handleLngChange = (lng: number) => {

    setSelectedLng(lng);
  };
 
  const postData: IpostData = {
    name: name,
    address: addres,
    phone:phone,
    lat:String(selectedLat),
    lng:String(selectedLng),
  };
  const { t } = useTranslation();

  const postSubmit = async () => {
    try {
      setLoad(true);
      if (addres && selectedLat && selectedLng && name && phone) {
        await postBranches(postData)
          .unwrap()
          .then((res) => (res.success ? navigate('/admin/branchcreate') : ''));
      }
    } catch (error) {
    } finally {
      setLoad(false);
    }
  };
  const btnDisabled = !selectedLat || !selectedLng || !addres || !name ||  !phone;

  return (
    <>
      <form>
        <div className="space-y-12">
          <div className=" pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Personal Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Use a permanent address where you can receive mail.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="Address"
                  className="block text-sm font-medium leading-6"
                >
                  {t('branch.5')}
                </label>
                <div className="mt-2">
                  <input
                    value={addres}
                    onChange={(e) => setAddress(e.target.value)}
                    type="text"
                    name="Addess"
                    id="Address"
                    autoComplete="given-name"
                    className="block w-full px-2 rounded-md border-1 py-1.5  shadow-sm ring-1   placeholder:text-gray-400  border-[#ced4da] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="Phone"
                  className="block text-sm font-medium leading-6"
                >
                  Phone
                </label>
                <div className="mt-2">
                  <input
                    value={phone}
                    onChange={(e:any) => setPhone(e.target.value)}
                    type="number"
                    placeholder='099 - 000 - 00 -00'
                    name="number"
                    id="number"
                    autoComplete="given-name"
                    className="block w-full px-2 rounded-md border-1 py-1.5  shadow-sm ring-1   placeholder:text-gray-400  border-[#ced4da] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 "
                >
                  {t('branch.2')}
                </label>
                <div className="mt-2">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="given-name"
                    className="block w-full px-2 rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1   placeholder:text-gray-400  border-[#ced4da] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label
                  htmlFor="map"
                  className="block text-sm font-medium leading-6 "
                >
                                    {t("branch.13")}

                   <Map
                    selectedLat={selectedLat}
                    selectedLng={selectedLng}
                    onLatChange={handleLatChange}
                    onLngChange={handleLngChange}
                  />
                </label>
              </div>

              <div className="flex flex-col w-[300px]">
                <div className="sm:col-span-3 mb-4">
                  <label
                    htmlFor="Lat"
                    className="block text-sm font-medium leading-6 "
                  >
                    Lat
                  </label>
                  <div className="mt-2">
                    <input
                      value={selectedLat}
                      onChange={(e) => setSelectedLat(Number(e.target.value))}
                      id="lat"
                      name="lat"
                      type="number"
                      className="block  px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="Lng"
                    className="block text-sm font-medium leading-6 "
                  >
                    Lng
                  </label>
                  <div className="mt-2">
                    <input
                      value={selectedLng}
                      onChange={(e) => setSelectedLng(Number(e.target.value))}
                      id="lng"
                      name="lng"
                      type="number"
                      className="block  px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 p sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
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
            <>
              <button
                disabled={btnDisabled}
                onClick={postSubmit}
                type="submit"
                className={`rounded-md ${
                  btnDisabled ? 'opacity-65' : 'opacity-100'
                }  bg-[#4f46e5] px-3 py-2 text-sm font-semibold text-white
             shadow-sm 
            `}
              >
                Save
              </button>
            </>
          )}
        </div>
      </form>
    </>
  );
};

export default Form;
