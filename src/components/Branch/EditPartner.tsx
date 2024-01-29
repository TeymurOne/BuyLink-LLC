import { useState } from 'react';
import { Map } from './Map';
import {  usePostUpdateMutation } from '../../features/branch/apiSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
export interface IpostData {
  id?: number;
  name: string;
  address: string;
  lat: number ;
  lng: number;
}
const Form = () => {
  const location=useLocation()
  const {address,lat , lng, id, name}=location.state?.data?.data

  const [addres_, setAddress] = useState<string>(address);
  const [name_, setName] = useState<string>(name);
  const navigate = useNavigate();
  
  


  const [selectedLat, setSelectedLat] = useState<number>(Number(lat) || 40.405999043422824 );
  const [selectedLng, setSelectedLng] = useState<number>( Number(lng) || 49.91863556236839 );
  const [load, setLoad] = useState<boolean>(false);
  const [postBranches] = usePostUpdateMutation();
  

  const handleLatChange = (lat: number) => {
    setSelectedLat(lat);
  };

  const handleLngChange = (lng: number) => {

    setSelectedLng(lng);
  };
  const postData: IpostData = {


    name: name_,
    address: addres_,
    lat: selectedLat,
    lng: selectedLng,
  };

  const postSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    
    try {
      setLoad(true);
      if (postData.address  && postData.lng && postData.lat && postData.name) {
        const res=await postBranches({postData, id}).unwrap()
        if (res.success) {
          navigate("/admin/partnerCreate")
          
        }
      
      
      }
    } catch (error) {
    } finally {
      setLoad(false);
    }
  };
  const btnDisabled = !selectedLat || !selectedLng || !addres_;
  const { t } = useTranslation();

  return (
    <>
      <form>
        <div className="space-y-12">
          <div className=" pb-12">
          <h2 className="mb-2 flex items-center space-x-4 font-semibold italic">
        {t("branch.0")}   {t("branch.7")}: <span>{id}</span> <FaArrowLeft onClick={()=>window.history.back()} />
      </h2>
          

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                {t("branch.5")}
                </label>
                <div className="mt-2">
                  <input
                    value={addres_}
                    onChange={(e) => setAddress(e.target.value)}
                    type="text"
                    name="Addess"
                    id="Address"
                    autoComplete="given-name"
                    className="block w-full px-2 rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1   placeholder:text-gray-400  border-[#ced4da] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  {t("branch.2")}
                </label>
                <div className="mt-2">
                  <input
                    value={name_}
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
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 "
                >
                  {t("branch.12")}
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
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 "
                  >
                    Lat
                  </label>
                  <div className="mt-2">
                    <input
                      value={selectedLat || lat}
                      onChange={(e) => setSelectedLat(Number(e.target.value))}
                      id="lat"
                      name="lat"
                      type="number"
                      className="block  px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300   sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="lng"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Lng
                  </label>
                  <div className="mt-2">
                    <input
                      value={selectedLng || lng}
                      onChange={(e) => setSelectedLng(Number(e.target.value))}
                      id="text"
                      name="text"
                      type="number"
                      className="block  px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button onClick={()=>window.history.back()}
            type="button"
            className="text-sm font-semibold leading-6"
          >
          {t("branch.8")}
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
                onClick={(e)=>postSubmit(e)}
                type="submit"
                className=" opacity-100
                bg-[#4f46e5] px-3 py-2 text-sm font-semibold text-white
            shadow-sm  rounded-md 
          "
              >
                  {t("branch.7")}
              </button>
            </>
          )}
        </div>
      </form>
    </>
  );
};

export default Form;
