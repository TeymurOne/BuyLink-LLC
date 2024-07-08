import React, { useEffect, useState } from 'react';
import {
  useFetchProducttypeQuery,
  usePostProductTypeMutation,
} from '../../features/product/apiSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
  setActive,
  setcategoryId,
  setDesc,
  setDiscount,
  setLoad,
  setName,
  setPrice,
  setReset,
} from '../../features/product/productSlice';
import InputImg from '../../common/Form/InputImg';
import { TitleArrow } from '../ui/Title';
import Select from '../../common/Form/Select';
import Input from '../../common/Form/Input';
import CancelSaveButton from '../../data/helpers/Button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    if (btnDisabled) {
      alert('Form melumatlari tam doldurlmalidr');
      return;
    }
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
              navigate('/admin/product/all');
              dispatch(setReset());
              toast.success('Added successfully!');
            }
          });
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred. Please try again.');
    } finally {
      dispatch(setLoad(false));
    }
  };

  const btnDisabled = (categoryId === ':id' && categoryId) || !price || !images;
  const [content, setContent] = useState<JSX.Element[]>([]);

  return (
    <>
      <form className="h-auto">
        <TitleArrow> {t('product.1')}</TitleArrow>
        <InputImg showimg={showimg} onChange={handleImg} />

        <select
          onChange={(e: any) => dispatch(setActive(e.target.value))}
          className="h-10 w-21 rounded-md border border-black border-opacity-20 pl-4 shadow-1"
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
              className={`grid w-full grid-cols-1 place-content-between items-start gap-4 lg:grid-cols-2 ${
                active !== lang ? 'hidden' : ''
              }`}
            >
              <div className="w-full">
                <label
                  htmlFor={`title-${lang}`}
                  className="mb-2 block font-works text-sm font-medium text-tdColor dark:text-white300"
                >
                  {t('product.0')} {t('product.14')}
                  {lang.toUpperCase()}
                </label>
                <input
                  name={`title-${lang}`}
                  id={`title-${lang}`}
                  className="border-1 block  w-full rounded-lg px-2 py-1.5 shadow-md"
                  value={name[lang]}
                  onChange={(e) => handleTitle(e, lang)}
                ></input>
              </div>

              <div className="w-full">
                <label
                  htmlFor="description"
                  className="mb-2 block font-works text-sm font-medium text-tdColor dark:text-white300"
                >
                  {t('product.4')}
                  {lang.toUpperCase()}
                </label>
                <textarea
                  name={`description-${lang}`}
                  id={`description-${lang}`}
                  rows={3}
                  className="border-1  block w-full rounded-lg px-4 py-1.5 shadow-md"
                  value={desc[lang]}
                  onChange={(e) => handleDesc(e, lang)}
                ></textarea>
              </div>
            </div>
          </div>
        ))}

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 ">
          <Select
            id="category"
            onChange={(e: any) =>
              dispatch(setcategoryId(Number(e.target.value)))
            }
            label={t('product.7')}
            option=" Category seçin"
          >
            {content}
          </Select>
          <Input
            id="Price"
            label={t('product.5')}
            onChange={(e) => dispatch(setPrice(e.target.value))}
            value={price}
            placeholder="Price"
            required
          />
          <Input
            id="Discount Price"
            label={t('product.6')}
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
