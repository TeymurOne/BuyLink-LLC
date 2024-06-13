import React, { useEffect, useState } from 'react';
import {
  useFetchProducttypeQuery,
  usePostProductTypeMutation,
} from '../../features/product/apiSlice';
import { useNavigate, useParams } from 'react-router-dom';
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
import InputImg from '../../common/Form/InputImg';
import { Title } from '../ui/Title';
import Select from '../../common/Form/Select';
import Input from '../../common/Form/Input';
import CancelSaveButton from '../../data/helpers/Button';

const Form = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { active, load, categoryId, name, desc, price, discount } = useSelector(
    (store: any) => store.productSlice,
  );
  const { isSuccess, data, isError } = useFetchProducttypeQuery('');
  const language = ['az', 'en', 'ru'];
  const [showimg, setShowimg] = useState<string>();
  const [images, setImages] = useState('');
  const postData = new FormData();
  const navigate = useNavigate();
  const [postProduct] = usePostProductTypeMutation();
  const { t } = useTranslation();
  const local = t('default.0');

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
    let files: any = e.target.files;

    if (files) {
      setImages(files[0]);
      setShowimg(URL.createObjectURL(files[0]));
    }
  };

  useEffect(() => {
    const id = params?.id;

    id && dispatch(setcategoryId(id));
  }, [params]);

  useEffect(() => {
    if (isSuccess) {
      const selectedId = Number(params.id);
      const options = data.data?.map((item: any) => {
        const isSelected = item.id === selectedId;
        if (isSelected) dispatch(setcategoryId(selectedId));
        return (
          <option key={item.id} value={item.id} selected={isSelected}>
            {item.name[local]}
          </option>
        );
      });
      setContent(options);
    } else if (isError) {
      console.error('Error fetching data', 'Products Types');
    }
  }, [params.id, isSuccess, local, data]);

  const onSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    if (btnDisabled) alert('Form melumatlari tam doldurlmalidr');
    dispatch(setLoad(true));
    e.preventDefault();

    postData.append('image', images);
    postData.append('category_id', categoryId!.toString());
    postData.append('price', price!.toString());

    language.forEach((key: any) =>  {
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
              navigate('/admin/products');
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

  const btnDisabled = (categoryId === ':id' && categoryId) || !price || !images;
  const [content, setContent] = useState<JSX.Element[]>([]);

  return (
    <>
      <form className="h-auto">
        <Title>   {t('product.1')}</Title>
        <InputImg showimg={showimg} onChange={handleImg} />

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
        {language.map((lang, index) => (
          <div className="py-3" key={index}>
            <div
              className={`grid gap-4 place-content-between lg:grid-cols-2 grid-cols-1 w-full items-start ${
                active !== lang ? 'hidden' : ''
              }`}
            >
              <div className="w-full">
                <label
                  htmlFor={`title-${lang}`}
                  className="block text-sm dark:text-white300 text-tdColor font-medium font-works mb-2"
                >
                   {t('product.0')} {t('product.14') }
                   {lang.toUpperCase()}
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
                  className="block text-sm dark:text-white300 text-tdColor font-medium font-works mb-2 "
                >
                  {t('product.4') }{lang.toUpperCase()}
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

        <div className="grid lg:grid-cols-3 gap-4 grid-cols-1 ">
          <Select
            id="category"
            onChange={(e: any) =>
              dispatch(setcategoryId(Number(e.target.value)))
            }
            label={t('product.7') }
            option=" Category seçin"
          >
            {content}
          </Select>
          <Input
            id="Price"
            label={t('product.5') }
            onChange={(e) => dispatch(setPrice(e.target.value))}
            value={price}
            placeholder="Price"
            required
          />
          <Input
            id="Discount Price"
            label={t('product.6') }
            onChange={(e) => dispatch(setDiscount(e.target.value))}
            value={discount}
            placeholder="Discount Price"
            required
          />
        </div>

        <div className="mt-10">
          <CancelSaveButton
            loading={load}
            btnDisabled={btnDisabled}
            onSave={onSubmit}
            onCancel={() => history.back()}
          />
        </div>
      </form>
    </>
  );
};

export default Form;
