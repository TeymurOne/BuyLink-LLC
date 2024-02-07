import { useEffect, useState } from 'react';

import {
  useLazyGetUpdateQuery,
  usePostUpdateMutation,
} from '../../features/branch/apiSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import { Map } from './Map';
export interface IpostData {
  id?: number;
  name: string;
  address: string;
  lat: number;
  lng: number;
}
const Form = () => {
  const { id } = useParams();
  const [res, setRes] = useState<any>({
    id: id,
    name_: '',
    lat_: 40.405999043422824  ,
    lng_: 49.91863556236839,
    addres_: '',
  });
  const { name_, addres_, lat_, lng_ } = res;
  const [selectedLat, setSelectedLat] = useState<number>(lat_);
  const [selectedLng, setSelectedLng] = useState<number>(lng_);
 
  const [updatePost] = useLazyGetUpdateQuery();



  

  const handleEdit = async (id: number) => {
    try {
      const response = await updatePost(id);

      if (response) {
        const dataToPass = response.data;

        setRes({
          ...res,
          name_: dataToPass?.data?.name,
          addres_: dataToPass?.data.address,
        });
        setSelectedLat(dataToPass?.data.lat )
        setSelectedLng(dataToPass?.data.lng )
      }
    } catch (error) {}
  };

  useEffect(() => {
    handleEdit(id);
  }, [id]);
  

  const navigate = useNavigate();

  const [load, setLoad] = useState<boolean>(false);
  const [postBranches] = usePostUpdateMutation();

  const [lat, setLat] = useState(40.405999043422824);
  const [lng, setLng] = useState(49.91863556236839);

  useEffect(() => {
    setLat(selectedLat);
    setLng(selectedLng);
  }, [selectedLat, selectedLng]);



  const [marker, setMarker] = useState(null);

  const handleLatChange = (lat: number) => {
    console.log(lat, 'lat');
    setSelectedLat(lat);
  };

  const handleLngChange = (lng: number) => {
    console.log(lng, 'lng');

    setSelectedLng(lng);
  };
  const defaultProps = {
    center: {
      lat: lat,
      lng: lng,
    },
    zoom: 13,
    draggable: true,
  };
  useEffect(() => {
    if (marker) {
      marker.setPosition({ lat, lng });
    }
  }, [lat, lat_,  lng, marker, selectedLat, selectedLng]);

  const loadMap = (map, maps) => {
    if (!marker) {
      const newMarker = new maps.Marker({
        position: {
          lat: defaultProps.center.lat,
          lng: defaultProps.center.lng,
        },
        map,
        draggable: true,
      });
      newMarker.addListener('dragend', handleDragEnd);
      setMarker(newMarker);
    }
  };

  const handleDragEnd = (e) => {
    handleLatChange(e.latLng.lat());
    handleLngChange(e.latLng.lng());
  };


  const postData = {
    name: name_,
    address: addres_,
    lat:String(selectedLat),
    lng:String(selectedLng),
  };


  
  const postSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      setLoad(true);
      if (postData.address && postData.lng && postData.lat && postData.name) {
        const res = await postBranches({ postData, id }).unwrap();
        if (res.success) {
          navigate('/admin/branchcreate');
        }
      }
    } catch (error) {
    } finally {
      setLoad(false);
    }
  };
  const btnDisabled = !selectedLat || !selectedLng || !addres_ || !name_;
  const { t } = useTranslation();

  return (
    <>
      <form>
        <div className="space-y-12">
          <div className=" pb-12">
            <h2 className="mb-2 flex items-center space-x-4 font-semibold italic">
              {t('branch.0')} {t('branch.7')}: <span>{id}</span>{' '}
              <FaArrowLeft onClick={() => window.history.back()} />
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  {t('branch.5')}
                </label>
                <div className="mt-2">
                  <input
                    value={addres_}
                    onChange={(e) =>
                      setRes({ ...res, addres_: e.target.value })
                    }
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
                  {t('branch.2')}
                </label>
                <div className="mt-2">
                  <input
                    value={name_}
                    onChange={(e) => setRes({ ...res, name_: e.target.value })}
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
                  {t('branch.12')}
                  <div className="w-full h-[400px]">
                    <Map  selectedLat={selectedLat}
                    selectedLng={selectedLng}
                    onLatChange={handleLatChange}
                    onLngChange={handleLngChange}/>
                
                      
                  </div>
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
                      value={ selectedLat }
                      onChange={(e) => setSelectedLat(Number( e.target.value))}
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
                      value={selectedLng }
                      onChange={(e) => setSelectedLng(Number( e.target.value))}

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
          <button
            onClick={() => window.history.back()}
            type="button"
            className="text-sm font-semibold leading-6"
          >
            {t('branch.8')}
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
                // disabled={btnDisabled}
                onClick={(e) => postSubmit(e)}
                type="submit"
                className=" opacity-100
                bg-[#4f46e5] px-3 py-2 text-sm font-semibold text-white
            shadow-sm  rounded-md 
          "
              >
                {t('branch.7')}
              </button>
            </>
          )}
        </div>
      </form>
    </>
  );
};

export default Form;
