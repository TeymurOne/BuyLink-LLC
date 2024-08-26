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
import basket from '../../images/icon/basket.png';
import percent from '../../images/icon/percent.png';
import CancelSaveButton from '../../data/helpers/Button';
import { ProgressCircle } from '../ProgressCircle.tsx';
import { useGetTransactionsQuery } from '../../features/statistcs/apiSlice.tsx';

interface Initial {
  title: any;
  description: any;
  phone: any;
  address: any;
  email: string;
  cover: any;
  img: any;
  facebook: string;
  whatsapp: string;
  instagram: string;
  twitter: string;
  youtube: string;
  linkedln: string;
  website: string;
  lat: string;
  lng: string;
}

const Form = () => {
  const latData = useSelector(selectLat);
  const lngData = useSelector(selectLng);
  const { data, isSuccess, isLoading, refetch } = useFetchPartnerrAllQuery('');
  const language = ['az', 'en', 'ru'];
  const { filter } = useSelector((store: any) => store.balance);
  const transactions = useGetTransactionsQuery(filter);
  const [active, setActive] = useState<string>('az');
  const [formValue, setFormValue] = useState<Initial>({
    title: '',
    description: {},
    phone: '',
    address: {},
    email: '',
    cover: '',
    img: '',
    facebook: '',
    whatsapp: '',
    instagram: '',
    twitter: '',
    youtube: '',
    linkedln: '',
    website: '',
    lat: '',
    lng: '',
  });

  useEffect(() => {
    if (isSuccess) {
      setFormValue((prevFormValue) => ({
        ...prevFormValue,
        title: data?.data.title || '',
        description: data?.data.description || {},
        phone: data?.data.phone || '',
        address: data?.data.address || {},
        email: data?.data.email || '',
        cover: data?.data.cover || '',
        img: data?.data.image || '',
        facebook: data?.data.socials?.facebook || '',
        whatsapp: data?.data.socials?.whatsapp || '',
        instagram: data?.data.socials?.instagram || '',
        twitter: data?.data.socials?.twitter || '',
        youtube: data?.data.socials?.youtube || '',
        linkedln: data?.data.socials?.linkedln || '',
        website: data?.data.website || '',
        lat: data?.data.location?.lat,
        lng: data?.data.location?.lng,
      }));
    }
  }, [isSuccess, data]);

  const {
    title,
    description,
    phone,
    address,
    website,
    facebook,
    instagram,
    cover,
    img,
    email,
    lat,
    lng,
  } = formValue;

  const [imglogo, setLogo] = useState<string>('');
  const [imgcover, setCover] = useState<string>('');

  const [load, setLoad] = useState<boolean>(false);
  const postData = new FormData();

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({ ...formValue, title: e.target.value });
  };
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({ ...formValue, email: e.target.value });
  };

  const handleDesc = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    language: string,
  ) => {
    const value = e.target.value;

    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      description: {
        ...prevFormValue.description,
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
      address: {
        ...prevFormValue.address,
        [language]: value,
      },
    }));
  };

  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({ ...formValue, phone: e.target.value });
  };

  const handleImgLogo = (e: React.ChangeEvent<HTMLInputElement>) => {
    let files: any = e.target.files;

    if (files) {
      setFormValue((prevFormValue) => ({ ...prevFormValue, img: files[0] }));
      setLogo(URL.createObjectURL(files[0]));
    }
  };

  const handleImgCover = (e: React.ChangeEvent<HTMLInputElement>) => {
    let files: any = e.target.files;

    if (files) {
      setFormValue((prevFormValue) => ({ ...prevFormValue, cover: files[0] }));
      setCover(URL.createObjectURL(files[0]));
    }
  };

  const btnDisabled = !title || !phone;
  const [postProduct] = usePostPartnerrAllMutation();

  const handleFb = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^\+994[0-9]{9}$/;
    return phoneRegex.test(phone);
  };

  const postSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!validatePhone(formValue.phone)) {
      toast.error('The phone format is invalid.');
      return;
    }

    setLoad(true);
    postData.append('image', img);
    postData.append('cover', cover);
    postData.append('facebook', facebook);
    postData.append('email', email);
    postData.append('instagram', instagram);
    postData.append('title', title);
    language.forEach((key) => {
      const value = description[key];
      postData.append(`description[${key}]`, value || ' ');
    });
    language.forEach((key) => {
      const value = address[key];
      postData.append(`address[${key}]`, value || ' ');
    });
    postData.append('phone', phone);
    postData.append('website', website);
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
      toast.error('Something went wrong!');
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
          <div className="flex w-full flex-col items-start  md:flex-row md:justify-between">
            <h2 className="pb-4 text-3xl md:pb-0">{t('partnerinfo.0')}</h2>
            <div className="flex w-full flex-col items-center md:w-115 md:flex-row md:justify-between">
              <div className="mb-4 flex w-full items-center gap-2 md:mb-0 md:w-55">
                <img className="h-8 w-8" src={percent} alt="Commission" />
                <span className="text-sm font-medium text-[#1859A8]">
                  {t('partnerinfo.19')}
                </span>
                {transactions.currentData?.data?.length > 0 && (
                  <div>
                    <ProgressCircle
                      className="h-13 w-13"
                      variant="default"
                      value={
                        transactions.currentData.data[0].partner
                          .total_commission
                      }
                      radius={50}
                    >
                      <span className="text-gray-900 dark:text-gray-50 text-sm font-medium">
                        {`${transactions.currentData.data[0].partner.total_commission}%`}
                      </span>
                    </ProgressCircle>
                  </div>
                )}
              </div>
              <div className="flex w-full items-center gap-2 md:w-55">
                <img className="h-8 w-8" src={basket} alt="Discount" />
                <span className="text-sm font-medium text-[#1859A8]">
                  {t('partnerinfo.20')}
                </span>
                {transactions.currentData?.data?.length > 0 && (
                  <div>
                    <ProgressCircle
                      className="h-13 w-13"
                      variant="default"
                      value={
                        transactions.currentData.data[0].discounted_percent
                      }
                      radius={50}
                    >
                      <span className="text-gray-900 dark:text-gray-50 text-sm font-medium">
                        {`${transactions.currentData.data[0].discounted_percent}%`}
                      </span>
                    </ProgressCircle>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="pb-12">
            <div className="col-span-full mr-10 inline-block">
              <label
                htmlFor="logo"
                className="text-gray-900 block text-sm font-medium leading-6"
              >
                Logo
              </label>
              <div className="mt-6 flex h-20 items-center gap-x-3">
                <div className="h-16 w-19 rounded-md">
                  <img
                    className="mb-4 h-16 w-20 rounded-md object-cover"
                    src={imglogo || img ? imglogo || img : addImg}
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
                    src={imgcover || cover ? imgcover || cover : addImg}
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
                  value={title}
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
                    value={description[lang]}
                    onChange={(e) => handleDesc(e, lang)}
                  ></textarea>
                </div>
                <div className={`my-1 ${active !== lang ? 'hidden' : ''}`}>
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
                    value={address[lang]}
                    onChange={(e) => handleAddress(e, lang)}
                  ></textarea>
                </div>
              </div>
            ))}
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
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
                    value={email}
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
                  className="flex items-center text-sm font-medium leading-6"
                >
                  <LuAsterisk style={{ color: 'red' }} />
                  <p className="dark:text-white300"> {t('partnerinfo.9')}</p>
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    value={phone}
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
                    value={facebook}
                    id="facebook"
                    name="facebook"
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 pl-4 shadow-md outline-none sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-6 lg:col-span-3 ">
                <label
                  htmlFor="instagram"
                  className="block text-sm font-medium leading-6"
                >
                  Instagram
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleFb}
                    value={instagram}
                    id="instagram"
                    name="instagram"
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 pl-4 shadow-md outline-none sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="col-span-6 lg:col-span-3">
                <label
                  htmlFor="website"
                  className="block text-sm font-medium leading-6"
                >
                  Website
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleFb}
                    value={website}
                    placeholder="https://www.example.com"
                    id="website"
                    name="website"
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
