import React, { useEffect, useState } from 'react';
import addImg from '../../images/icon/addImg.png';
import { LuAsterisk } from 'react-icons/lu';
import {
  useFetchPartnerrAllQuery,
  usePostPartnerrAllMutation,
} from '../../features/partner/apiSlice';
import { useNavigate } from 'react-router-dom';
import EditMap from './EditMap';
import Loader from '../../common/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Initial {
  title_: any;
  about_: string;
  description_: any;
  phone_: any;
  address_: any;
  email_: string;
  cover_: any;
  img_: any;
  facebook_: string;
  whatsapp_: string;
  instagram_: string;
  twitter_: string;
  youtube_: string;
  linkedln_: string;
  website_: string;
  lat: any;
  lng: any;
}
const Form = () => {
  const { data, isSuccess, isLoading } = useFetchPartnerrAllQuery('');
  const language = ['az', 'en', 'ru'];
  const [active, setActive] = useState<string>('az');
  const [formValue, setFormValue] = useState<Initial>({
    title_: '',
    about_: '',
    description_: {},
    phone_: '',
    address_: {},
    email_: '',
    cover_: '',
    img_: '',
    facebook_: '',
    whatsapp_: '',
    instagram_: '',
    twitter_: '',
    youtube_: '',
    linkedln_: '',
    website_: '',
    lat: null,
    lng: null,
  });

  useEffect(() => {
    if (isSuccess) {
      setFormValue((prevFormValue) => ({
        ...prevFormValue,
        title_: data?.data.title || '',
        about_: data?.data.about || '',
        description_: data?.data.description || '',
        phone_: data?.data.phone || '',
        address_: data?.data.address || '',
        email_: data?.data.email || '',
        cover_: data?.data.cover || '',
        img_: data?.data.image || '',
        facebook_: data?.data.socials?.facebook || '',
        whatsapp_: data?.data.socials?.whatsapp || '',
        instagram_: data?.data.socials?.instagram || '',
        twitter_: data?.data.socials?.twitter || '',
        youtube_: data?.data.socials?.youtube || '',
        linkedln_: data?.data.socials?.linkedln || '',
        website_: data?.data.website || '',
        lat: data?.data.location?.lat || '',
        lng: data?.data.location?.lng || '',
      }));
    }
  }, [isSuccess, data]);

  const navigate = useNavigate();

  const {
    title_,
    description_,

    phone_,
    address_,
    website_,
    facebook_,
    instagram_,
    cover_,
    img_,
    email_,
    about_,
    lat,
    lng,
  } = formValue;
  const [imglogo, setLogo] = useState<string>('');
  const [imgcover, setCover] = useState<string>('');

  const [load, setLoad] = useState<boolean>(false);
  const postData = new FormData();

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({ ...formValue, title_: e.target.value });
  };
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({ ...formValue, email_: e.target.value });
  };
  const handleAbout = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({ ...formValue, about_: e.target.value });
  };

  const handleDesc = (
    e: React.ChangeEvent<HTMLInputElement>,
    language: string,
  ) => {
    const value = e.target.value;

    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      description_: {
        ...prevFormValue.description_,
        [language]: value,
      },
    }));
  };

  const handleAddress = (
    e: React.ChangeEvent<HTMLInputElement>,
    language: string,
  ) => {
    const value = e.target.value;

    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      address_: {
        ...prevFormValue.address_,
        [language]: value,
      },
    }));
  };

  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const priceNum = Number(e.target.value);
    setFormValue({ ...formValue, phone_: priceNum });
  };

  const handleImgLogo = (e: React.ChangeEvent<HTMLInputElement>) => {
    let files: any = e.target.files;

    if (files) {
      console.log(files[0]);

      setFormValue((prevFormValue) => ({ ...prevFormValue, img_: files[0] }));
      setLogo(URL.createObjectURL(files[0]));
    }
  };

  const handleImgCover = (e: React.ChangeEvent<HTMLInputElement>) => {
    let files: any = e.target.files;

    if (files) {
      setFormValue((prevFormValue) => ({ ...prevFormValue, cover_: files[0] }));
      setCover(URL.createObjectURL(files[0]));
    }
  };

  const btnDisabled = !title_ || !phone_;

  const [postProduct] = usePostPartnerrAllMutation();

  // sosial network
  const handleFb = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  function onLat(lat_: any) {
    setFormValue((prevFormValue) => ({ ...prevFormValue, lat: lat_ }));
  }

  function onLng(lng_: any) {
    setFormValue((prevFormValue) => ({ ...prevFormValue, lng: lng_ }));
  }

  const postSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    const notify = () => toast('Wow so easy!');
    setLoad(true);
    e.preventDefault();

    if (img_.length > 0 && img_ !== 'null') {
      postData.append('image', img_);
    }
    if (cover_.length > 0 && cover_ !== 'null') {
      postData.append('cover', cover_);
    }

    postData.append('facebook', facebook_);
    postData.append('instagram', instagram_);
    postData.append('title', title_);
    Object.keys(description_).forEach((key) => {
      const value = description_[key];
      postData.append(`description[${key}]`, value);
    });
    Object.keys(address_).forEach((key) => {
      const value = address_[key];
      postData.append(`address[${key}]`, value);
    });

    postData.append('phone', phone_);
    postData.append('about', about_);

    postData.append('website', website_);

    postData.append('lat', lat);
    postData.append('lng', lng);

    try {
      if (postData) {
        await postProduct(postData)
          .unwrap()
          .then((response) => {
            if (response.success) {
              toast.success('Success!');
            }
          });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoad(false);
    }
  };
  const handleTab = (item: string) => {
    setActive(item);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <ToastContainer />
          <div className="space-y-12">
            <div className=" pb-12">
              <div className=" col-span-full mr-20 inline-block">
                <label
                  htmlFor="logo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Logo
                </label>
                <div className="mt-6 flex h-20 items-center gap-x-3">
                  <img
                    className="h-16 mb-4 object-cover rounded-[6px]  w-20 "
                    src={imglogo || img_ ? imglogo || img_ : addImg}
                    alt="asas"
                  />
                  <input
                    id="file-upload-logo"
                    name="file-upload-logo"
                    type="file"
                    className="py-2 sr-only bg-danger"
                    onChange={handleImgLogo}
                  />
                  <label
                    htmlFor="file-upload-logo"
                    className="rounded-md bg-white  px-2.5 py-1.5 text-sm
               font-semibold text-gray-900 m shadow-sm ring-1 ring-inset mb-4 ring-gray-300 hover:bg-gray-3"
                  >
                    Change
                  </label>
                </div>
              </div>
              <div className=" col-span-full inline-block">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Cover Photo
                </label>
                <div className="mt-6 flex h-20 items-center gap-x-3">
                  <img
                    className="h-20 mb-4 object-cover rounded-[6px]  w-20 "
                    src={imgcover || cover_ ? imgcover || cover_ : addImg}
                  />
                  <input
                    id="file-upload-cover"
                    name="file-upload-cover"
                    type="file"
                    className="py-2 sr-only bg-danger"
                    onChange={handleImgCover}
                  />
                  <label
                    htmlFor="file-upload-cover"
                    className="rounded-md bg-white  px-2.5 py-1.5 text-sm
               font-semibold text-gray-900 m shadow-sm ring-1 ring-inset mb-4 ring-gray-300 hover:bg-gray-3"
                  >
                    Change
                  </label>
                </div>
              </div>

              <div className="mt-10 grid grid-cols-6 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="lg:col-span-3 col-span-6 mb-4 ">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium leading-6 "
                  >
                    Title <LuAsterisk style={{ color: 'red' }} />
                  </label>
                  <div className="mt-2 mb-4">
                    <input
                      onChange={handleTitle}
                      value={title_}
                      placeholder="Title"
                      id="text"
                      name="text"
                      type="text"
                      className="block  pl-4 w-full rounded-md border-0 py-1.5  shadow-sm ring-1  sm:text-sm sm:leading-6"
                    />
                  </div>
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium leading-6 "
                  >
                    Ada görə axtarış
                  </label>
                  <EditMap lat={lat} lng={lng} onLat={onLat} onLng={onLng} />
                </div>

                <div className="lg:col-span-3 mt-3 col-span-6 ">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 "
                  >
                    About
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={handleAbout}
                      value={about_}
                      placeholder="About"
                      id="about"
                      name="about"
                      type="text"
                      className="block  pl-4 w-full rounded-md border-0 py-1.5  shadow-sm ring-1  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <ul className="flex flex-wrap w-[400px] text-sm font-medium text-center">
                  {language.map((item, index) => (
                    <li
                      className="me-2"
                      key={index}
                      onClick={() => handleTab(item)}
                    >
                      <a
                        href="#"
                        className={`shadow-2 inline-block px-4 mt-10 py-3 hover:bg-starrating hover:text-white rounded-lg ${
                          active === item ? 'active' : ''
                        }`}
                        aria-current={active === item ? 'page' : undefined}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>

                {language.map((lang, index) => (
                  <>
                    <div
                      key={index}
                      className={`sm:col-span-6 col-span-6 my-1 ${
                        active !== lang ? 'hidden' : ''
                      }`}
                    >
                      <label
                        htmlFor={`description-${lang}`}
                        className="block text-sm font-medium leading-6 mb-4"
                      >
                        Description {lang.toUpperCase()}
                      </label>
                      <textarea
                        name={`description-${lang}`}
                        id={`description-${lang}`}
                        className="w-full h-[100px] pl-4 pt-2"
                        value={description_[lang]}
                        onChange={(e) => handleDesc(e, lang)}
                      ></textarea>
                      <div className="sm:col-span-6 col-span-6 my-4 ">
                        <label
                          htmlFor="address"
                          className="block text-sm font-medium leading-6 mb-4 "
                        >
                          Address {lang.toUpperCase()}
                        </label>
                        <textarea
                          name={`address_-${lang}`}
                          id={`address_-${lang}`}
                          className="w-full h-[100px] pl-4 pt-2"
                          value={address_[lang]}
                          onChange={(e) => handleAddress(e, lang)}
                        ></textarea>
                      </div>
                    </div>
                  </>
                ))}

                <div className="lg:col-span-3 mt-4 col-span-6 ">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 "
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={handleEmail}
                      value={email_}
                      placeholder="About"
                      id="text"
                      name="text"
                      type="email"
                      className="block  pl-4 w-full rounded-md border-0 py-1.5  shadow-sm ring-1  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2  col-span-6">
                  <label
                    htmlFor="phone"
                    title="phone"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    <LuAsterisk style={{ color: 'red' }} />
                    Phone
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      value={phone_}
                      name="phone"
                      placeholder="Phone"
                      id="Phone"
                      onChange={handlePhone}
                      autoComplete="given-name"
                      className="block w-full px-2 rounded-md border-1 py-1.5
                   shadow-sm ring-1   placeholder:text-gray-400  border-[#ced4da]
                    sm:text-sm sm:leading-6  appearance-none "
                    />
                  </div>
                </div>
              </div>

              <div className="mt-10 grid grid-cols-6 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="lg:col-span-3 col-span-6 ">
                  <label
                    htmlFor="facebook"
                    className="block text-sm font-medium leading-6 "
                  >
                    Facebook
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={handleFb}
                      value={facebook_}
                      placeholder="facebook"
                      id="facebook"
                      name="facebook_"
                      type="text"
                      className="block  pl-4 w-full rounded-md border-0 py-1.5  shadow-sm ring-1  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="lg:col-span-3 col-span-6 ">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium leading-6 "
                  >
                    Instagram
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={handleFb}
                      value={instagram_}
                      placeholder="instagram url"
                      id="instagram"
                      name="instagram_"
                      type="text"
                      className="block  pl-4 w-full rounded-md border-0 py-1.5  shadow-sm ring-1  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="lg:col-span-3 col-span-6 ">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium leading-6 "
                  >
                    Website
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={handleFb}
                      value={website_}
                      placeholder="instagram"
                      id="website"
                      name="website_"
                      type="text"
                      className="block  pl-4 w-full rounded-md border-0 py-1.5  shadow-sm ring-1  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              onClick={() => history.back()}
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
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
              <>
                <button
                  disabled={btnDisabled}
                  onClick={postSubmit}
                  type="submit"
                  className={`rounded-md ${
                    btnDisabled ? 'opacity-65' : 'opacity-100'
                  }  bg-[#4f46e5] px-3 py-2 text-sm font-semibold text-white
                 shadow-sm hover:bg-indigo-500 focus-visible:outline 
                 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                >
                  Save
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Form;
