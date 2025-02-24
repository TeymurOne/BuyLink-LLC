import React, { useEffect, useState, useRef } from 'react';
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
  setcategoryId,
  setDesc,
  setDiscount,
  setimgUrl,
  setName,
  setPrice,
  setReset,
} from '../../features/product/productSlice';
import { RootState } from '../../app/api/store';
import TableSkeleton from '../../skeleton/TableSkeleton';
import { TitleArrow } from '../ui/Title';
import Input from '../../common/Form/Input';
import Select from '../../common/Form/Select';
import CancelSaveButton from '../../data/helpers/Button';
import { toast } from 'react-toastify';

type Data = {
  id: number;
  name: string;
};

const EditProduct = () => {
  const { id } = useParams();
  const idUrl = id;
  const [showimg, setShowimg] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
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


  const handleRemoveImage = () => {
    dispatch(setimgUrl(''));
    setShowimg('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDesc = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    language: string,
  ) => {
    const value = e.target.value;
    dispatch(setDesc({ language, value }));
  };

  const handleImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file: File | any = e.target.files?.[0];
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
        dispatch(setName(data?.title || ''));
        dispatch(setDesc(data?.description || {}));
        dispatch(setPrice(data?.price || ''));
        dispatch(setcategoryId(data?.category.id || ''));
        dispatch(setDiscount(data?.discount_price || ''));
        dispatch(setimgUrl(data?.image || ''));
      }
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  }

  const handleUpdate = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const toastId = 'error-toast';
    const successToastId = 'success-toast';

    if (!price) {
      if (!toast.isActive(toastId)) {
        toast.error(t('toast.9'), { toastId });
      }
      return;
    }

    for (const lang of language) {
      if (!name[lang]) {
        if (!toast.isActive(toastId)) {
          toast.error(t('toast.10'), { toastId });
        }
        return;
      }
    }

    const postData = new FormData();
    postData.append('image', imgurl || '');
    postData.append('category_id', categoryId?.toString() || '');
    postData.append('price', price?.toString() || '');
    postData.append('discount_price', discount?.toString() || '');

    language.forEach((key: any) => {
      const value = desc[key] || ' ';
      postData.append(`description[${key}]`, value);
    });
    language.forEach((key: any) => {
      const value = name[key] || '';
      postData.append(`title[${key}]`, value);
    });

    try {
      if (postData) {
        await dataEdit({ postData, idUrl });
        if (!toast.isActive(successToastId)) {
          toast.success(t('toast.5'), { toastId: successToastId });
        }
        navigate('/admin/product/all');
        dispatch(setReset());
      }
    } catch (error) {
      if (!toast.isActive(toastId)) {
        toast.error(t('toast.6'), { toastId });
      }
    }
  };

  useEffect(() => {
    if (id) handleEdit(id);
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
          <TitleArrow>
            {' '}
            {t('product.0')} {t('product.11')}
          </TitleArrow>

          <div>
            <label
              htmlFor="photo"
              className="block pt-10 text-base font-normal text-tdColor dark:text-white300"
            >
              Photo
            </label>

            <div className="flex flex-wrap items-center gap-x-3 py-2">
              <div className="relative inline-block">
                {(showimg || imgurl) && (
                  <>
                    <img
                      className="mb-4 h-30 w-26 rounded-2xl object-cover py-4"
                      src={showimg || imgurl || ''}
                      alt="Edit Product Image"
                    />
                    <button
                      type="button"
                      onClick={handleRemoveImage}
                      className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                    >
                      X
                    </button>
                  </>
                )}
              </div>
              <input
                ref={fileInputRef}
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only py-2"
                onChange={handleImg}
              />
              <label
                htmlFor="file-upload"
                className="h-10 rounded-md border border-black border-opacity-20 bg-white px-13 py-2.5 text-sm font-semibold shadow-sm"
              >
                {t('product.15')}
              </label>
            </div>
          </div>

          <select
            onChange={(e: any) => dispatch(setActive(e.target.value))}
            className="h-10 w-21 rounded-md border border-black border-opacity-20 pl-4 shadow-1"
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
                  className={`grid w-full grid-cols-1 place-content-between items-start gap-4 lg:grid-cols-2 ${
                    active !== lang ? 'hidden' : ''
                  }`}
                >
                  <div className="w-full">
                    <label
                      htmlFor={`title-${lang}`}
                      className="mb-2 block font-works text-sm font-medium text-tdColor dark:text-white300"
                    >
                      {t('product.0')} {lang.toUpperCase()}
                    </label>
                    <input
                      name={`title-${lang}`}
                      id={`title-${lang}`}
                      className="border-1 block w-full rounded-lg px-2 py-1.5 shadow-md"
                      value={name[lang] || ''}
                      onChange={(e) => handleTitle(e, lang)}
                    />
                    <div className="grid-cols-1 gap-4 lg:grid-cols-3">
                      <div className="my-3 w-full">
                        <Select
                          id="category"
                          onChange={(e: any) =>
                            dispatch(setcategoryId(Number(e.target.value)))
                          }
                          value={categoryId?.toString() || ''}
                          label={t('product.7')}
                          option="Category seçin"
                        >
                          {content}
                        </Select>
                      </div>
                      <Input
                        id="Price"
                        label={t('product.5')}
                        onChange={(e) => dispatch(setPrice(e.target.value))}
                        value={price || ''}
                        option=""
                        placeholder="Price"
                      />
                    </div>
                  </div>

                  <div className="w-full">
                    <label
                      htmlFor={`description-${lang}`}
                      className="mb-2 block font-works text-sm font-medium text-tdColor dark:text-white300"
                    >
                      {t('product.4')} {lang.toUpperCase()}
                    </label>
                    <textarea
                      name={`description-${lang}`}
                      id={`description-${lang}`}
                      rows={3}
                      className="border-1 block w-full rounded-lg px-4 py-6 shadow-md"
                      value={desc[lang] || ''}
                      onChange={(e) => handleDesc(e, lang)}
                    />
                    <div className="mt-10">
                      <CancelSaveButton
                        onSave={handleUpdate}
                        onCancel={() => navigate(-1)}
                      >
                        {t('product.11')}
                      </CancelSaveButton>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </form>
      )}
    </>
  );
};

export default EditProduct;
