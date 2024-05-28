import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  useFetchProducttypeQuery,
  useLazyEditProductQuery,
  useUpdateProductMutation,
} from '../../features/product/apiSlice';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
  setActive,
  setDesc,
  setDiscount,
  setName,
  setPrice,
  setReset,
  setcategoryId,
  setimgUrl,
} from '../../features/product/productSlice';
import { RootState } from '../../app/api/store';

type Data = {
  id: number;
  name: string;
};

const EditProduct = () => {
  const { id } = useParams();
  const idUrl = id;

  const [showimg, setShowimg] = useState('');
  const dispatch = useDispatch();
  const language = ['az', 'en', 'ru'];
  const [editProduct] = useLazyEditProductQuery();
  const { t } = useTranslation();
  const local: any = t('default.0');
  const navigate = useNavigate();
  const [dataEdit] = useUpdateProductMutation();
  const { name, active, desc, categoryId, price, discount, imgurl } = useSelector(
    (store: RootState) => store.productSlice
  );

  const handleTitle = (
    e: React.ChangeEvent<HTMLInputElement>,
    language: string
  ) => {
    const value = e.target.value;
    dispatch(setName({ language, value }));
  };

  const handleDesc = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    language: string
  ) => {
    const value = e.target.value;
    dispatch(setDesc({ language, value }));
  };

  const handlePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setPrice(value));
  };

  const handleImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file:File | any = e.target.files[0];
    
    if (file) {
      dispatch(setimgUrl(file));
      setShowimg(URL.createObjectURL(file));
    }
  };

  async function handleEdit(id: any) {
    try {
      const response = await editProduct(id);
      if (response) {
        const data = response.data?.data;


        dispatch(setName(data?.title));
        dispatch(setDesc(data?.description));
        dispatch(setPrice(data?.price));
        dispatch(setcategoryId(data?.category.id));
        dispatch(setDiscount(data?.discount_price));
        dispatch(setimgUrl(data?.image));
      }
    } catch (error) {}
  }

  const handleUpdate = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const postData = new FormData();
    postData.append('image', imgurl);
    postData.append('category_id', categoryId.toString());
    postData.append('price', price.toString());
    postData.append('discounted_price', discount.toString());

    language.forEach((key: any) => {
      const value = desc[key];
      postData.append(`description[${key}]`, value || " ");
    });

    language.forEach((key: any) => {
      const value = name[key];
      postData.append(`title[${key}]`, value || "");
    });

    try {
      if (postData) {
        await dataEdit({ postData, idUrl });
        navigate('/admin/productCreate');
        dispatch(setReset());
      }
    } catch (error) {}
  };

  useEffect(() => {
    handleEdit(id);
  }, [id]);

  let content;
  const { isSuccess, data, isError } = useFetchProducttypeQuery('');

  if (isSuccess) {
    content = data?.data?.map((item: Data, index: number) => {
      return (
        <option key={index} value={item.id}>
          {item.name[local]}
        </option>
      );
    });
  } else if (isError) {
    console.error('Error fetching data', 'Product Types');
  }

  return (
    <>
      <form className="h-auto">
        <h2 className="text-3xl font-semibold">Product Edit {idUrl}</h2>

        <div>
          <label
            htmlFor="photo"
            className="block text-tdColor pt-10 text-base font-normal"
          >
            Photo
          </label>
          <div className="flex flex-wrap py-2 items-center gap-x-3">
            <img
              className="h-30 mb-4 object-cover py-4 rounded-2xl w-26"
              src={showimg || imgurl}
              alt="Edit Product Image"
            />
            <input
              id="file-upload"
              name="file-upload"
              type="file"
              className="py-2 sr-only"
              onChange={handleImg}
            />
            <label
              htmlFor="file-upload"
              className="rounded-md bg-white px-13 border py-2.5 text-sm font-semibold shadow-sm border-black border-opacity-20 h-10"
            >
              Add Image
            </label>
          </div>
        </div>

        <select
          onChange={(e: any) => dispatch(setActive(e.target.value))}
          className="w-21 border-black border-opacity-20 border h-10 pl-4 rounded-md shadow-1"
          value={active}
        >
          {language.map((item, index) => (
            <option className="me-2" key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        <div>
          {language.map((lang) => (
            <div className="py-3" key={lang}>
              <div
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
                    className="block w-full px-2 rounded-lg border-1 py-1.5 shadow-md"
                    value={name[lang] || ''}
                    onChange={(e) => handleTitle(e, lang)}
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor={`description-${lang}`}
                    className="block text-sm text-tdColor font-medium font-works mb-2"
                  >
                    Description {lang.toUpperCase()}
                  </label>
                  <textarea
                    name={`description-${lang}`}
                    id={`description-${lang}`}
                    rows={3}
                    className="block px-4 w-full rounded-lg border-1 py-1.5 shadow-md"
                    value={desc[lang] || ''}
                    onChange={(e) => handleDesc(e, lang)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-6 gap-x-6 gap-y-4 sm:grid-cols-6">
          <div className="sm:col-span-2 col-span-6">
            <label
              htmlFor="category"
              className="block text-sm text-tdColor font-medium font-works mb-2"
            >
              Category*
            </label>
            <div className="mt-2">
              <select
                id="category"
                value={categoryId}
                onChange={(e: any) =>
                  dispatch(setcategoryId(Number(e.target.value)))
                }
                name="category"
                required
                className="w-full h-10 pl-4 rounded-xl shadow-md"
              >
                <option disabled value="">
                  Category seçin
                </option>
                {content}
              </select>
            </div>
          </div>
          <div className="sm:col-span-2 col-span-6">
            <label
              htmlFor="Price"
              className="block text-sm text-tdColor font-medium font-works mb-2"
            >
              Price
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="Price"
                placeholder="Price"
                id="Price"
                onChange={handlePrice}
                value={price}
                autoComplete="given-name"
                className="w-full border border-gray-300 h-10 px-4 rounded-xl shadow-md"
              />
            </div>
          </div>

          <div className="sm:col-span-2 col-span-6">
            <label
              htmlFor="DiscountPrice"
              className="block text-sm text-tdColor font-medium font-works mb-2"
            >
              Discount Price
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="DiscountPrice"
                id="DiscountPrice"
                placeholder="Discount Price"
                autoComplete="given-name"
                className="w-full border border-gray-300 h-10 px-4 rounded-xl shadow-md"
                value={discount}
                onChange={(e) => dispatch(setDiscount(e.target.value))}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-x-6 my-3">
          <button
            onClick={() => navigate(-1)}
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>

          <button
            onClick={handleUpdate}
            type="submit"
            className="bg-[#4f46e5] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-opacity-90 rounded-md"
          >
            Update
          </button>
        </div>
      </form>
    </>
  );
};

export default EditProduct;
