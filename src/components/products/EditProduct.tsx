import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  useFetchProducttypeQuery,
  useUpdateProductMutation,
} from '../../features/product/apiSlice';
interface Data {
  title_: string;
  desc: string;
  price_: number;
  discountedPrice: number;
  category: {
    name: string;
    id: number;
  };

  images: any;
}
type data = {
  id: number;
  name: string;
};

const EditProduct = () => {
  const navigate = useNavigate();
  let content;
  let defaultValue;
  const { isSuccess, data, isError } = useFetchProducttypeQuery('');

  const [dataEdit] = useUpdateProductMutation();
  const [showimg, setShowimg] = useState<string>();
  const location = useLocation();
  const postData = new FormData();
  const { title, description, image, price, discount_price } =
    location.state?.data.data;

  const idUrl: number = location.state.id;

  const initialState = {
    title_: title,
    desc: description,
    price_: price,
    discountedPrice: discount_price,
    images: image,
    category: {
      name: location.state?.data.data?.category.name,
      id: location.state?.data.data?.category.id,
    },
  };
  console.log(typeof initialState.price_, 'inintiale state price');

  const [formValue, setFormValue] = useState<Data>(initialState);
  const { desc, title_, price_, discountedPrice, images } = formValue;

  if (isSuccess) {
    console.log(data?.data);

    (content = data?.data?.map((item: data, index: number) => {
      return (
        <option key={index} value={item.id}>
          {item.name}
        </option>
      );
    })),
      (defaultValue = data?.data?.find(
        (item: any) => item.id == location.state?.data.data?.category.id,
      ));
  } else if (isError) {
    console.error('Error fetching data', 'Member Types');
  }
  const handleFullname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({ ...formValue, title_: e.target.value });
  };
  const handleDesc = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({ ...formValue, desc: e.target.value });
  };
  const handlePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numPrice = Number(e.target.value);
    setFormValue({ ...formValue, price_: numPrice });
  };
  const handleDiscountPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numDiscountrice = Number(e.target.value);
    setFormValue({ ...formValue, discountedPrice: numDiscountrice });
  };
  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const categoryId = parseInt(e.target.value, 10);
    setFormValue((prev) => ({
      ...prev,
      category: { ...prev.category, id: categoryId },
    }));
  };
  const handleImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    let files = e.target.files;

    if (files) {
      setFormValue({ ...formValue, images: files[0] });
      setShowimg(URL.createObjectURL(files[0]));
    }
  };
  const handleUpdate = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    postData.append('image', images);
    postData.append('category_id', formValue.category.id.toString());
    postData.append('title', title_);
    postData.append('description', desc);
    postData.append('price', price_.toString());
    postData.append('discounted_price', discountedPrice.toString());

    postData.append('image', initialState.images);

    try {
      if (postData) {
        await dataEdit({ postData, idUrl });
        navigate('/admin/productCreate');
      }
    } catch (error) {}
  };
  return (
    <>
      <form>
        <div className="space-y-2">
       
          <div className=" col-span-full">
              <label
                htmlFor="photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Photo
              </label>
              <div className="mt-2 flex h-20 items-center gap-x-3">
                <img
                  className="h-12 mb-4 rounded-full  w-12 text-gray-300"
                  src={showimg || images}
                  alt="asas"
                />
                <input
                  onChange={handleImg}
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="py-2 sr-only bg-danger"
                />
                <label
                  htmlFor="file-upload"
                  className="rounded-md bg-white  px-2.5 py-1.5 text-sm
               font-semibold text-gray-900 m shadow-sm ring-1 ring-inset mb-4 ring-gray-300 hover:bg-gray-3"
                >
                  Change
                </label>
              </div>
            </div>
          <div className="mt-10 grid grid-cols-6 gap-x-6  sm:grid-cols-6">
          

            <div className="lg:col-span-3 col-span-6 ">
              <label
                htmlFor="title"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Title
              </label>
              <div className="mt-2">
                <input
                  value={title_}
                  onChange={handleFullname}
                  type="text"
                  name="title"
                  id="title"
                  autoComplete="given-name"
                  required
                  className="block w-full px-2 rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1   placeholder:text-gray-400  border-[#ced4da] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-6 col-span-6 my-4 ">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Description
              </label>
              <div className="mt-2">
                <input
                  onChange={handleDesc}
                  value={desc}
                  type="text"
                  name="Description"
                  id="Description"
                  autoComplete="family-name"
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 col-span-6">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Price
              </label>
              <div className="mt-2">
                <input
                  onChange={handlePrice}
                  value={price_}
                  type="text"
                  name="Price"
                  id="Price"
                  autoComplete="Price"
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            
          <div className="sm:col-span-2 col-span-6">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 "
            >
              Discount Price
            </label>
            <div className="mt-2">
              <input
                onChange={handleDiscountPrice}
                value={discountedPrice}
                type="text"
                name="discountedPrice"
                id="Discount Price"
                autoComplete="Discount Price"
                className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 p sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2 col-span-6">
            <label
              htmlFor="country"
              className="block text-sm font-medium leading-6 "
            >
              Category*
            </label>
            <div className="mt-2">
              <select
                onChange={handleCategory}
                id="category"
                name="category"
                defaultValue={defaultValue?.name}
                autoComplete="partner-name"
                className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset  sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option
                  disabled
                  value={initialState.category.id || 'defaultValue'}
                >
                  Product Seçin
                </option>
                {content}
              </select>
            </div>
          </div>
          </div>


      
        </div>

        <div className=" flex items-center justify-end gap-x-6 my-3">
          <button
            onClick={() => history.back()}
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>

          <button
            onClick={handleUpdate}
            type="submit"
            className=" 
                bg-[#4f46e5] px-3 py-2 text-sm font-semibold text-white
            shadow-sm hover:bg-opacity-90 rounded-md 
           "
          >
            Update
          </button>
        </div>
      </form>
    </>
  );
};

export default EditProduct;
