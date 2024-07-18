import React, { useEffect, useState } from 'react';
import addImg from '../../images/partnyor/addimg.svg';
import { LuAsterisk } from 'react-icons/lu';
import {
  useFetchPartnerrAllQuery,
  usePostPartnerrAllMutation,
} from '../../features/partner/apiSlice';
import { toast } from 'react-toastify';
import App from '../../Map/App';
import { useSelector } from 'react-redux';
import { selectLat, selectLng } from '../../features/map/MapSlice';
import MapSkeleton from '../../skeleton/Map';
import TableSkeleton from '../../skeleton/TableSkeleton';
import { useTranslation } from 'react-i18next';
import CancelSaveButton from '../../data/helpers/Button';

interface Initial {
  title_: any;
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
  lat: string;
  lng: string;
}

const Form = () => {
  const latData = useSelector(selectLat);
  const lngData = useSelector(selectLng);
  const { data, isSuccess, isLoading, refetch } = useFetchPartnerrAllQuery('');
  const language = ['az', 'en', 'ru'];
  const [active, setActive] = useState<string>('az');
  const [formValue, setFormValue] = useState<Initial>({
    title_: '',
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
    lat: '',
    lng: '',
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
        lat: data?.data.location?.lat,
        lng: data?.data.location?.lng,
      }));
    }
  }, [isSuccess, data]);

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

  const handleDesc = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
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
    e: React.ChangeEvent<HTMLTextAreaElement>,
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
    const inputVal = e.target.value.replace(/[^0-9]/g, '');
    setFormValue({ ...formValue, phone_: inputVal });
  };

  const handleImgLogo = (e: React.ChangeEvent<HTMLInputElement>) => {
    let files: any = e.target.files;

    if (files) {
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

  const handleFb = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const postSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    setLoad(true);
    e.preventDefault();
    postData.append('image', img_);
    postData.append('cover', cover_);
    postData.append('facebook', facebook_);
    postData.append('email', email_);
    postData.append('instagram', instagram_);
    postData.append('title', title_);
    language.forEach((key) => {
      const value = description_[key];
      postData.append(`description[${key}]`, value || ' ');
    });
    language.forEach((key) => {
      const value = address_[key];
      postData.append(`address[${key}]`, value || ' ');
    });
    postData.append('phone', phone_);
    postData.append('website', website_);
    postData.append('lat', latData);
    postData.append('lng', lngData);
    try {
      if (postData) {
        await postProduct(postData)
          .unwrap()
          .then((response) => {
            if (response.success) {
              toast.success('Success!');
              refetch();
            }
          });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoad(false);
    }
  };
  const { t } = useTranslation();
  const handleTab = (item: string) => {
    setActive(item);
  };
  if (isLoading) {
    return (
      <>
        <MapSkeleton />
        <TableSkeleton count="5" />
      </>
    );
  }
  return (
    <>
      <div>
        <div className="space-y-12 ">
          <div className="pb-12">
            <div className="col-span-full mr-10 inline-block">
              <label
                htmlFor="logo"
                className="text-gray-900 block text-sm font-medium leading-6"
              >
                Logo
              </label>
              <div className="mt-6 flex h-20 items-center gap-x-3">
                <div className="h-16  w-19 rounded-md">
                  <img
                    className="mb-4 h-16 w-20 rounded-md object-cover"
                    src={imglogo || img_ ? imglogo || img_ : addImg}
                    alt="Logo"
                  />
                </div>
                <input
                  id="file-upload-logo"
                  name="file-upload-logo"
                  type="file"
                  className="b sr-only py-2"
                  onChange={handleImgLogo}
                />
                <label
                  htmlFor="file-upload-logo"
                  className="mb-4 w-40 rounded-md bg-white py-1.5
                    pl-10.5 text-sm font-normal shadow-sm hover:bg-gray-3"
                >
                  {t('branch.7')}
                </label>
              </div>
            </div>
            <div className="col-span-full inline-block">
              <label
                htmlFor="cover-photo"
                className="text-gray-900 block text-sm font-medium leading-6"
              >
                {t('partnerinfo.3')}
              </label>
              <div className="mt-6 flex h-20 items-center gap-x-3">
                <div className="h-16 w-26 rounded-md">
                  <img
                    alt="cover"
                    className="mb-4 h-full w-full rounded-[6px] object-cover"
                    src={imgcover || cover_ ? imgcover || cover_ : addImg}
                  />
                </div>

                <input
                  id="file-upload-cover"
                  name="file-upload-cover"
                  type="file"
                  className="sr-only py-2 outline-none"
                  onChange={handleImgCover}
                />
                <label
                  htmlFor="file-upload-cover"
                  className="mb-4 w-40 rounded-md bg-white py-1.5
                    pl-10.5 text-sm font-normal shadow-sm hover:bg-gray-3"
                >
                  {t('branch.7')}
                </label>
              </div>
            </div>

            <div className="w-full max-w-150">
              <label
                htmlFor="title"
                className="flex items-center text-sm font-normal leading-6 text-[#5B5B5B]"
              >
                <LuAsterisk style={{ color: 'red' }} />{' '}
                <p className="dark:text-white"> {t('partnerinfo.18')}</p>
              </label>
              <div className="mb-4 mt-2">
                <input
                  onChange={handleTitle}
                  value={title_}
                  placeholder="Title"
                  id="text"
                  name="text"
                  type="text"
                  maxLength={30}
                  className="block w-full rounded-lg border-0 py-1.5 pl-4 shadow-md outline-none sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {(lat == null && lng == null) ||
            (lat == 'undefined' && lng == 'undefined') ? (
              <App lat="" lng="" />
            ) : lat == '' && lng == '' ? (
              <MapSkeleton />
            ) : (
              <App lat={lat} lng={lng} />
            )}
            <select
              name="language"
              className="my-4 h-10 w-20 rounded-md bg-white text-center shadow-md outline-none"
              id="language"
              onChange={(e) => handleTab(e.target.value)}
            >
              {language.map((item, index) => (
                <option
                  key={index}
                  className={`me-2 mt-10 inline-block rounded-lg px-4 py-3 shadow-2 hover:text-white ${
                    active === item ? 'active' : ''
                  }`}
                  aria-current={active === item ? 'page' : undefined}
                >
                  {item}
                </option>
              ))}
            </select>

            {language.map((lang, index) => (
              <div
                className="grid grid-cols-1 gap-4 lg:grid-cols-2"
                key={index}
              >
                <div className={`my-1 ${active !== lang ? 'hidden' : ''}`}>
                  <label
                    htmlFor={`description-${lang}`}
                    className="mb-4 block text-sm font-medium leading-6"
                  >
                    {t('partnerinfo.7')} {lang.toUpperCase()}
                  </label>
                  <textarea
                    name={`description-${lang}`}
                    id={`description-${lang}`}
                    className="h-25 w-full rounded-lg pl-4 pt-2 shadow-md outline-none"
                    value={description_[lang]}
                    onChange={(e) => handleDesc(e, lang)}
                  ></textarea>
                </div>
                <div className={`my-1  ${active !== lang ? 'hidden' : ''}`}>
                  <label
                    htmlFor={`address-${lang}`}
                    className="mb-4 block text-sm font-medium leading-6"
                  >
                    {t('partnerinfo.6')} {lang.toUpperCase()}
                  </label>
                  <textarea
                    name={`address-${lang}`}
                    id={`address-${lang}`}
                    className="h-25 w-full rounded-lg pl-4 pt-2 shadow-md outline-none"
                    value={address_[lang]}
                    onChange={(e) => handleAddress(e, lang)}
                  ></textarea>
                </div>
              </div>
            ))}
            <div className="grod-cols-1 grid gap-4 lg:grid-cols-2">
              <div className="max-w-full">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleEmail}
                    value={email_}
                    placeholder="Email"
                    id="text"
                    name="text"
                    type="email"
                    className="block w-full rounded-md border-0 py-1.5 pl-4 shadow-md sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="w-full max-w-full">
                <label
                  htmlFor="phone"
                  title="phone"
                  className="flex items-center text-sm font-medium leading-6 "
                >
                  <LuAsterisk style={{ color: 'red' }} />
                  <p className="dark:text-white300"> {t('partnerinfo.9')}</p>
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    value={`+${phone_}`}
                    name="phone"
                    id="Phone"
                    onChange={handlePhone}
                    autoComplete="tel"
                    className="border-1 block w-full appearance-none rounded-md px-2 py-1.5 shadow-md outline-none sm:text-sm sm:leading-6"
                    inputMode="numeric"
                  />
                </div>
              </div>
            </div>
            <div className="mt-10 grid grid-cols-6 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-6 lg:col-span-3 ">
                <label
                  htmlFor="facebook"
                  className="block text-sm font-medium leading-6"
                >
                  Facebook
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleFb}
                    value={facebook_}
                    id="facebook"
                    name="facebook_"
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 pl-4 shadow-md outline-none sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-6 lg:col-span-3 ">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium leading-6"
                >
                  Instagram
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleFb}
                    value={instagram_}
                    id="instagram"
                    name="instagram_"
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 pl-4 shadow-md outline-none sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="col-span-6 lg:col-span-3">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium leading-6"
                >
                  Website
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleFb}
                    value={website_}
                    placeholder="https://www.example.com"
                    id="website"
                    name="website_"
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 pl-4 shadow-md outline-none sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <CancelSaveButton
          btnDisabled={btnDisabled}
          onSave={postSubmit}
          onCancel={() => history.back()}
          loading={load}
        />
      </div>
    </>
  );
};

export default Form;
