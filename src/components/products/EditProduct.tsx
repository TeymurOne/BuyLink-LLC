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
import TableSkeleton from '../../skeleton/TableSkeleton';
import { Title } from '../ui/Title';
import Input from '../../common/Form/Input';
import Select from '../../common/Form/Select';
import CancelSaveButton from '../../data/helpers/Button';

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
  const { name, active, desc, categoryId, price, discount, imgurl } =
    useSelector((store: RootState) => store.productSlice);

  const handleTitle = (
    e: React.ChangeEvent<HTMLInputElement>,
    language: string,
  ) => {
    const value = e.target.value;
    dispatch(setName({ language, value }));
  };

  const handleDesc = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    language: string,
  ) => {
    const value = e.target.value;
    dispatch(setDesc({ language, value }));
  };

  const handleImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file: File | any = e.target.files[0];

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
      postData.append(`description[${key}]`, value || ' ');
    });

    language.forEach((key: any) => {
      const value = name[key];
      postData.append(`title[${key}]`, value || '');
    });

    try {
      if (postData) {
        await dataEdit({ postData, idUrl });
        navigate('/admin/products');
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
        <option key={index} value={item.id} selected={item?.id == categoryId}>
          {item.name[local]}
        </option>
      );
    });
  } else if (isError) {
    console.error('Error fetching data', 'Product Types');
  }

  return (
    <>
      {!idUrl ? (
        <TableSkeleton count="10" />
      ) : (
        <form className="h-auto">
          <Title>Product Edit {idUrl}</Title>

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
          <div className="py-4">
            {language.map((lang) => (
              <div className="" key={lang}>
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
          <div className="grid lg:grid-cols-3 gap-4 grid-cols-1 ">
            <Select
              id="category"
              onChange={(e: any) =>
                dispatch(setcategoryId(Number(e.target.value)))
              }
              value={categoryId}
              label="Category"
              option=" Category seçin"
            >
              {content}
            </Select>
            <Input
              id="Price"
              label="Price"
              onChange={(e) => dispatch(setPrice(e.target.value))}
              value={price}
              option=""
              placeholder="Price"
              required
            />
            <Input
              id="Discount Price"
              label="Discount Price"
              onChange={(e) => dispatch(setDiscount(e.target.value))}
              value={discount}
              placeholder="Discount Price"
              required
            />
          </div>

          <div className='mt-10'>
            <CancelSaveButton
              onSave={handleUpdate}
              onCancel={() => navigate(-1)}
              
            >
              Update
            </CancelSaveButton>
          </div>
        </form>
      )}
    </>
  );
};

export default EditProduct;
