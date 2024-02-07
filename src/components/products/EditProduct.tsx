import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  useFetchProducttypeQuery,
  useLazyEditProductQuery,
  useUpdateProductMutation,
} from '../../features/product/apiSlice';
interface Data {
  id:string | undefined,
  title_: string;

  desc_: string;
  price_: any;
  discountedPrice: any;
  img: any;
  categoryId:any
}
type data = {
  id: number;
  name: string;
};

const EditProduct = () => {
  const { id } = useParams();

  const [editProduct] = useLazyEditProductQuery();

  const [res, setRes] = useState<Data>({
    id:id,
    title_: '',
    desc_: '',
    price_: '',
    discountedPrice: '',
    img: '',
    categoryId:''
  });

  async function handleEdit(id: any) {
    try {
      const response = await editProduct(id);
      if (response) {
        const data = response.data?.data;       
         
        setRes({
          ...res,
          title_: data?.title,
          desc_: data?.description,
          img: data?.image,
          price_: data?.price,
          categoryId:data?.category.id,
          discountedPrice: data?.discount_price,
        });
      }
    } catch (error) {}
  }
  useEffect(
    function () {
      handleEdit(id);
    },
    [id],
  );
  let content;
  const { isSuccess, data, isError } = useFetchProducttypeQuery('');

  const [dataEdit] = useUpdateProductMutation();
  const [showimg, setShowimg] = useState<string>();
  const postData = new FormData();
  const idUrl=res?.id  
  const navigate=useNavigate()
  const { desc_, title_, price_, discountedPrice, img } = res;

  if (isSuccess) {
    (content = data?.data?.map((item: data, index: number) => {
      return (
        <option
          key={index}
          value={item.id}
          selected={item.id == Number(res?.categoryId)}
        >
          {item.name}
        </option>
      );
    }))
   
  } else if (isError) {
    console.error('Error fetching data', 'Product Types');
  }
  const handleFullname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRes({ ...res, title_: e.target.value });
  };
  const handleDesc = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRes({ ...res, desc_: e.target.value });
  };
  const handlePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numPrice = Number(e.target.value);
    
    setRes({ ...res, price_: numPrice });
  };
  const handleDiscountPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numDiscountrice = Number(e.target.value);
    setRes({ ...res, discountedPrice: numDiscountrice });
  };
  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const categoryId = parseInt(e.target.value, 10);
    
    setRes((prev) => ({
      ...prev,
      categoryId:categoryId ,
    }));
  };
  const handleImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    let files = e.target.files;

    if (files) {
      setRes({ ...res, img: files[0] });
      setShowimg(URL.createObjectURL(files[0]));
    }
  };
  const handleUpdate = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    

    postData.append('image', img);
    postData.append('category_id', res.categoryId);
    postData.append('title', title_);
    postData.append('description', desc_);
    postData.append('price', price_);
    postData.append('discounted_price', discountedPrice.toString());

    try {
      if (postData) {
        console.log(postData, 'postdata');
        
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
                src={showimg || res.img}
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
                  value={desc_}
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
                  autoComplete="partner-name"
                  className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset  sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option disabled>Product Seçin</option>
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
