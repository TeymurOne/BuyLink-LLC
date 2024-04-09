import React, { useEffect, useState } from 'react';

import addImg from '../../images/icon/addImg.png';
import {
  useFetchProducttypeQuery,
  usePostProductTypeMutation,
} from '../../features/product/apiSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { data } from '../Member/Form';

const Form = () => {
  const params = useParams();

  interface Initial {
    title: any;
    description: any;
    price: null | number;
    discountprice: number | null;
    productID: number | null;
    images: any;
  }
  const InitialData: Initial = {
    title: '',
    description: '',
    price: null,
    discountprice: null,
    productID: null,
    images: '',
  };

  const [formValue, setFormValue] = useState<Initial>(InitialData);
  const { title, description, price, discountprice, productID, images } =
    formValue;
  const { isSuccess, data, isError } = useFetchProducttypeQuery('');
  const [category, setCategory] = useState<string>();
  const language = ['az', 'en', 'ru'];
  const [active, setActive] = useState<string>('az');

  const [showimg, setShowimg] = useState<string>();
  const [load, setLoad] = useState<boolean>(false);
  const postData = new FormData();
  const navigate = useNavigate();
  useEffect(() => {
    setCategory(params?.id);
    setFormValue({ ...formValue, productID: params?.id });
  }, [params]);

  const handleTitle = (
    e: React.ChangeEvent<HTMLInputElement>,
    language: string,
  ) => {
    const value = e.target.value;

    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      title: {
        ...prevFormValue.title,
        [language]: value,
      },
    }));
  };

  const handleDesc = (
    e: React.ChangeEvent<HTMLInputElement>,
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

  const handleNum = (e: React.ChangeEvent<HTMLInputElement>) => {
    const priceNum = Number(e.target.value);
    setFormValue({ ...formValue, price: priceNum });
  };
  const handleDiscountPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const priceNum = Number(e.target.value);
    setFormValue({ ...formValue, discountprice: priceNum });
  };
  const handleMember = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const priceNum = Number(e.target.value);
    setFormValue({ ...formValue, productID: priceNum });
  };
  const handleImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    let files = e.target.files;

    if (files) {
      setFormValue({ ...formValue, images: files[0] });
      setShowimg(URL.createObjectURL(files[0]));
    }
  };
  const handleTab = (item: string) => {
    setActive(item);
  };
  const btnDisabled = !title || !productID || !price || !images;
  const [postProduct] = usePostProductTypeMutation();
  const local = localStorage.getItem('lng');

  

  let content;
  if (isSuccess) {
    content = data.data?.map((item: data, index: number) => {
     
      
      return (
        <option
          key={index}
          value={item?.id}
          selected={item.id === Number(params.id)}
        >
          {item.name[local]}
        </option>
      );
    });
  } else if (isError) {
    console.error('Error fetching data', 'Products Types');
  }

  const postSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    setLoad(true);
    e.preventDefault();

    postData.append('image', images);
    postData.append('category_id', productID!.toString());

    postData.append('price', price!.toString());
    postData.append('discounted_price', discountprice);

    language.forEach((key) => {
      const value = description[key];
      postData.append(`description[${key}]`, value || '');
    });
    language.forEach((key) => {
      const value = title[key];
      postData.append(`title[${key}]`, value || ' ');
    });

    try {
      if (postData) {
        await postProduct(postData)
          .unwrap()
          .then((response) => {
            if (response.data) {
              navigate('/admin/productCreate');
            }
          });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoad(false);
    }
  };
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
            <div className=" col-span-full">
              <label
                htmlFor="photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Photo
              </label>
              <div className="mt-6 flex h-20 items-center gap-x-3">
                <img
                  className="h-20 mb-4 object-cover rounded-[6px]  w-20 "
                  src={showimg || addImg}
                  alt="asas"
                />
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="py-2 sr-only bg-danger"
                  onChange={handleImg}
                />
                <label
                  htmlFor="file-upload"
                  className="rounded-md bg-white  px-2.5 py-1.5 text-sm
               font-semibold text-gray-900 m shadow-sm ring-1 ring-inset mb-4 ring-gray-300 hover:bg-gray-3"
                >
                  Add
                </label>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-6 gap-x-6 gap-y-8 sm:grid-cols-6">
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
                      htmlFor={`title-${lang}`}
                      className="block text-sm font-medium leading-6 mb-4"
                    >
                      Title {lang.toUpperCase()}
                    </label>
                    <input
                      name={`title-${lang}`}
                      id={`title-${lang}`}
                      className="block w-1/3 px-2 rounded-md border-1 py-1.5
                   shadow-sm ring-1 w   placeholder:text-gray-400  border-[#ced4da]
                    sm:text-sm sm:leading-6  "
                      value={title[lang]}
                      onChange={(e) => handleTitle(e, lang)}
                    ></input>

                    <div className="sm:col-span-6 col-span-6 my-4 ">
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium leading-6 mb-4 "
                      >
                        Description {lang.toUpperCase()}
                      </label>
                      <input
                        name={`description-${lang}`}
                        id={`description-${lang}`}
                        className="w-full h-[100px] pl-4 pt-2"
                        value={description[lang]}
                        onChange={(e) => handleDesc(e, lang)}
                      ></input>
                    </div>
                  </div>
                </>
              ))}

              <div className="sm:col-span-2 col-span-6">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Category*
                </label>
                <div className="mt-2">
                  <select
                    id="category"
                    onChange={handleMember}
                    name="category"
                    className="block w-full rounded-md border-0 py-[11px]  shadow-sm ring-1 ring-inset    sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option value="default">Category Seçin</option>
                    {content}
                  </select>
                </div>
              </div>
              <div className="sm:col-span-2 col-span-6">
                <label
                  htmlFor="Price"
                  title="Price"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Price
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="Price"
                    placeholder=" Price"
                    id="Price"
                    onChange={handleNum}
                    value={formValue?.price !== null ? formValue.price : ''}
                    autoComplete="given-name"
                    className="block w-full px-2 rounded-md border-1 py-1.5
                   shadow-sm ring-1   placeholder:text-gray-400  border-[#ced4da]
                    sm:text-sm sm:leading-6  appearance-none "
                  />
                </div>
              </div>

              <div className="sm:col-span-2 col-span-6">
                <label
                  title="Discount Price"
                  htmlFor="Price"
                  className="block text-sm font-medium leading-6 "
                >
                  Discount Price
                </label>
                <div className="mt-2">
                  <input
                    value={
                      formValue.discountprice !== null
                        ? formValue.discountprice
                        : ''
                    }
                    onChange={handleDiscountPrice}
                    type="number"
                    name="DiscountPrice"
                    id="DiscountPrice"
                    placeholder="Discount Price"
                    autoComplete="given-name"
                    className="block w-full px-2 rounded-md border-1 py-1.5 
                   shadow-sm ring-1   border-[#ced4da]
                    sm:text-sm sm:leading-6   "
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
      </form>
    </>
  );
};

export default Form;
