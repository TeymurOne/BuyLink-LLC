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
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const [content, setContent] = useState<JSX.Element[]>([]);

  useEffect(() => {
    dispatch(setReset());
  }, [dispatch]);

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
      toast.error('Error fetching data');
    }
  }, [params.id, isSuccess, local, data]);

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

  const inputClassName = (isInvalid: boolean): string =>
    isInvalid ? 'error-input' : '';

  const handleNumberInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: Function,
  ) => {
    const regex = /^[0-9\b.]+$/;
    if (e.target.value === '' || regex.test(e.target.value)) {
      setter(e.target.value);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setAttemptedSubmit(true);

    if (!categoryId || !price || !images || !name[active]) {
      toast.error('Please fill out the form completely.');
      return;
    }

    dispatch(setLoad(true));

    postData.append('image', images);
    postData.append('category_id', categoryId!.toString());
    postData.append('price', price!.toString());
    postData.append('discount_price', discount!.toString());
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
      toast.error('An error occurred. Please try again.');
    } finally {
      dispatch(setLoad(false));
    }
  };

  return (
    <>
      <form className="h-auto" onSubmit={onSubmit}>
        <TitleArrow> {t('product.1')}</TitleArrow>
        <div className="flex items-center ">
          <InputImg required showimg={showimg} onChange={handleImg} />
          {attemptedSubmit && !images && (
            <span className="-ml-32 mb-8 text-xs text-errorMessage md:-ml-40">
              *Please add the image
            </span>
          )}
        </div>
        <select
          onChange={(e: any) => dispatch(setActive(e.target.value))}
          className="h-10 w-21 rounded-md  border-0 border-opacity-20 bg-white pl-4 shadow-1"
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
          <div className="pb-2 pt-3" key={index}>
            <div
              className={`grid w-full grid-cols-1 place-content-between  items-start gap-4 lg:grid-cols-2 ${
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
                  <span className="pl-1 text-red-600">*</span>
                </label>
                <input
                  name={`title-${lang}`}
                  id={`title-${lang}`}
                  className={`${inputClassName(
                    attemptedSubmit && !name[lang],
                  )} border-1 block w-full rounded-lg  border-0 bg-white px-2 py-1.5 shadow-md`}
                  value={name[lang]}
                  onChange={(e) => handleTitle(e, lang)}
                ></input>
                {attemptedSubmit && !name[lang] && (
                  <span className="text-xs text-errorMessage">
                    *Please fill out the form
                  </span>
                )}
                <div className="grid-cols-1 gap-4 lg:grid-cols-3">
                  <div className="my-3 w-full">
                    <Select
                      id="category"
                      onChange={(e: any) =>
                        dispatch(setcategoryId(Number(e.target.value)))
                      }
                      required
                      className={inputClassName(attemptedSubmit && !categoryId)}
                      label={t('product.7')}
                      option="Category seçin"
                    >
                      {content}
                    </Select>
                    {attemptedSubmit && !categoryId && (
                      <span className="text-xs text-errorMessage">
                        *Please fill out the form
                      </span>
                    )}
                  </div>
                  <div>
                    <Input
                      id="Price"
                      label={t('product.5')}
                      onChange={(e) =>
                        handleNumberInput(e, (value: string) =>
                          dispatch(setPrice(value)),
                        )
                      }
                      value={price}
                      placeholder="Price"
                      type="text"
                      required
                      className={inputClassName(attemptedSubmit && !price)}
                    />
                    {attemptedSubmit && !price && (
                      <span className="text-xs text-errorMessage">
                        *Please fill out the form
                      </span>
                    )}
                  </div>
                </div>
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
                  className="border-1 block w-full rounded-lg border-0 bg-white px-4 py-5 shadow-md"
                  value={desc[lang]}
                  onChange={(e) => handleDesc(e, lang)}
                ></textarea>
                <div className="mt-12">
                  <CancelSaveButton
                    loading={load}
                    onSave={onSubmit}
                    onCancel={() => history.back()}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </form>
    </>
  );
};

export default Form;
