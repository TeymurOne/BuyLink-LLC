import React, { useEffect, useState } from 'react';

import addImg from '../../images/partnyor/addimg.svg';
import {
  useFetchProducttypeQuery,
  usePostProductTypeMutation,
} from '../../features/product/apiSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { data } from '../Member/Form';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
  setPrice,
  setcategoryId,
  setActive,
  setLoad,
  setDiscount,
  setName,
  setDesc,
  setReset,

} from '../../features/product/productSlice';

const Form = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const { active, load, categoryId, error, name, desc, price, discount } =
    useSelector((store: any) => store.productSlice);
  const btnDisabled = !categoryId || !name;

  const { isSuccess, data, isError } = useFetchProducttypeQuery('');
  const language = ['az', 'en', 'ru'];
  const [showimg, setShowimg] = useState<string>();
  const [images, setImages] = useState('');

  const postData = new FormData();
  const navigate = useNavigate();

  useEffect(() => {
    const id = params?.id;

    id && dispatch(setcategoryId(id));
  }, [params]);

  const handleTitle = (
    e: React.ChangeEvent<HTMLInputElement>,
    language: string,
  ) => {
    const value = e.target.value;
    dispatch(setName({ language, value }));
  };

  const handleDesc = (
    e: React.ChangeEvent<HTMLInputElement>,
    language: string,
  ) => {
    const value = e.target.value;
    dispatch(setDesc({ language, value }));
  };
  const handlePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setPrice(value));
  };

  const handleImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    let files = e.target.files;

    if (files) {
      setImages(files[0]);
      setShowimg(URL.createObjectURL(files[0]));
    }
  };
  const [postProduct] = usePostProductTypeMutation();
  const { t } = useTranslation();
  const local = t('default.0');

  let content;
  if (isSuccess) {
    content = data.data?.map((item: data, index: number) => {
      return (
        <>
          <option
            key={index}
            value={item?.id}
            selected={item.id === Number(params.id)}
          >
            {item.name[local]}
          </option>
        </>
      );
    });
  } else if (isError) {
    console.error('Error fetching data', 'Products Types');
  }

  const postSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    dispatch(setLoad(true));
    e.preventDefault();

    postData.append('image', images);
    postData.append('category_id', categoryId!.toString());
    postData.append('price', price!.toString());

    language.forEach((key: any) => {
      const value = desc[key];
      postData.append(`description[${key}]`, value || '');
    });
    language.forEach((key: any) => {
      const value = name[key];
      postData.append(`title[${key}]`, value || ' ');
    });

    try {
      if (postData) {
        await postProduct(postData)
          .unwrap()
          .then((response) => {
            if (response.data) {
              navigate('/admin/productCreate');
              dispatch(setReset());
            }
          });
      }
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setLoad(false));
    }
  };
  return (
    <>
      <form className="h-auto" onSubmit={postSubmit}>
        <h2 className="text-3xl font-semibold ">Product Details</h2>

        <div>
          <label
            htmlFor="photo"
            className="block text-tdColor pt-10 text-base font-normal "
          >
            Photo
          </label>
          <div className=" flex flex-wrap  py-2 items-center gap-x-3">
            <img
              className="h-full mb-4 object-cover py-4 rounded-xl  w-26 "
              src={showimg || addImg}
              alt="asas"
            />
            <input
              id="file-upload"
              name="file-upload"
              type="file"
              className="py-2 sr-only  "
              onChange={handleImg}
            />
            <label
              htmlFor="file-upload"
              className="rounded-md bg-white px-13 border py-2.5   text-sm
           font-semibold shadow-sm  border-black border-opacity-20  h-10"
            >
              Add Image
            </label>
          </div>
        </div>

        <select
          onChange={(e: any) => dispatch(setActive(e.target.value))}
          
          className="w-21 border-black border-opacity-20 border h-10 pl-4 rounded-md shadow-1"
        >
          {language.map((item, index) => (
            <option
            
              className="me-2"
              key={index}
              onClick={() => dispatch(setActive(item))}
            >
              {item}
            </option>
          ))}
        </select>
        <div>
          {language.map((lang, index) => (
            <div className="py-3">
              <div
                key={index}
                className={`grid gap-4 place-content-between lg:grid-cols-2 grid-cols-1 w-full items-start ${
                  active !== lang ? 'hidden' : ''
                }`}
              >
                <div className="w-full">
                  <label
                    htmlFor={`title-${lang}`}
                    className="block text-sm text-tdColor font-medium font-works mb-2"
                  >
                    Partner Name {lang.toUpperCase()}
                  </label>
                  <input
                    name={`title-${lang}`}
                    id={`title-${lang}`}
                    className="block w-full  px-2 rounded-lg border-1 py-1.5 shadow-md    "
                    value={name[lang]}
                    onChange={(e) => handleTitle(e, lang)}
                  ></input>
                </div>

                <div className="w-full">
                  <label
                    htmlFor="description"
                    className="block text-sm text-tdColor font-medium font-works mb-2 "
                  >
                    Description {lang.toUpperCase()}
                  </label>
                  <textarea
                    name={`description-${lang}`}
                    id={`description-${lang}`}
                    rows={3}
                    
                    className="block  px-4 w-full rounded-lg border-1 py-1.5  shadow-md"
                    value={desc[lang]}
                    onChange={(e) => handleDesc(e, lang)}
                  ></textarea>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className=" grid grid-cols-6 gap-x-6 gap-y-4 sm:grid-cols-6">
          <div className="sm:col-span-2 col-span-6">
            <label
              htmlFor="country"
              className="block text-sm text-tdColor font-medium font-works mb-2"
            >
              Category*
            </label>
            <div className="mt-2">
              <select
                id="category"
                onChange={(e: any) =>
                  dispatch(setcategoryId(Number(e.target.value)))
                }
                name="category"
                required
                className=" w-full  h-10 pl-4 rounded-xl shadow-md"
              >
                <option selected disabled value="default">
                  Category seçin
                </option>

                {content}
              </select>
            </div>
          </div>
          <div className="sm:col-span-2 col-span-6">
            <label
              htmlFor="Price"
              title="Price"
              className="block text-sm text-tdColor font-medium font-works mb-2"
            >
              Price
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="Price"
                placeholder=" Price"
                id="Price"
                onChange={handlePrice}
                value={price}
                required
                autoComplete="given-name"
                className={`w-full   h-10 pl-4 rounded-xl shadow-md`}
              />
            </div>
          </div>

          <div className="sm:col-span-2 col-span-6">
            <label
              title="Discount Price"
              htmlFor="Price"
              className="block text-sm text-tdColor font-medium font-works mb-2 "
            >
              Discount Price
            </label>
            <div className="mt-2">
              <input
                value={discount}
                onChange={(e) => dispatch(setDiscount(e.target.value))}
                type="text"
                name="DiscountPrice"
                id="DiscountPrice"
                placeholder="Discount Price"
                autoComplete="given-name"
                className=" max-w-full w-full h-10 pl-4 rounded-xl shadow-md  "
              />
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
              <input
               
                type="submit"
                className={` ${
                  btnDisabled ? ' opacity-65' : 'opacity-100'
                }  bg-btnBgColor rounded-md  h-10 w-27  text-sm font-normal text-white
                  focus-visible:outline 
                 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
              />
                
             
            </>
          )}
        </div>
      </form>
    </>
  );
};

export default Form;
