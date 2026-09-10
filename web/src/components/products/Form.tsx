import React, { useEffect, useState } from 'react';
import {
  useFetchProducttypeQuery,
  usePostProductTypeMutation,
} from '../../features/product/apiSlice';
import { useNavigate, useSearchParams } from 'react-router-dom';
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
  const [searchParams] = useSearchParams();
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
    const id = searchParams.get('categoryid');
    if (id) {
      dispatch(setcategoryId(id));
    }
  }, [searchParams, dispatch]);

  useEffect(() => {
    if (isSuccess) {
      const selectedId = Number(searchParams.get('categoryid'));
      const options = data.data?.map((item: any) => {
        const isSelected = item.id === selectedId;
        if (isSelected) dispatch(setcategoryId(selectedId));
        return (
          <option key={item.id} value={item.id}>
            {item.name[local]}
          </option>
        );
      });
      setContent(options);
    } else if (isError) {
      toast.dismiss();
      toast.error(t('toast.1'), { toastId: 'fetch-error' });
    }
  }, [isSuccess, data, local, dispatch, searchParams]);

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
    setter: (value: string) => void,
  ) => {
    const regex = /^[0-9\b.]+$/;
    if (e.target.value === '' || regex.test(e.target.value)) {
      setter(e.target.value);
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAttemptedSubmit(true);

    if (!categoryId || !price  || !name[active]) {
      toast.dismiss();
      toast.error(t('toast.3'), { toastId: 'form-error' });
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
              toast.dismiss();
              toast.success(t('toast.4'), { toastId: 'success' });
              navigate('/admin/product/all');
              dispatch(setReset());
            }
          });
      }
    } catch (error) {
      toast.dismiss();
      toast.error(t('toast.6'), { toastId: 'post-error' });
    } finally {
      dispatch(setLoad(false));
    }
  };

  return (
    <>
      <form className="h-auto" onSubmit={onSubmit}>
        <TitleArrow> {t('product.1')}</TitleArrow>
        <div className="flex items-center ">
          <InputImg  showimg={showimg} onChange={handleImg} />
          {/*{attemptedSubmit && !images && (*/}
          {/*  <span className="-ml-32 mb-8 text-xs text-errorMessage md:-ml-40">*/}
          {/*    * {t('operator.14')}*/}
          {/*  </span>*/}
          {/*)}*/}
        </div>
        <select
          onChange={(e: any) => dispatch(setActive(e.target.value))}
          className="h-10 w-21 rounded-md  border-0 border-opacity-20 bg-white pl-4 shadow-1"
        >
          {language.map((item, index) => (
            <option className="me-2" key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        <div className="relative">
          {language.map((lang, index) => (
            <div
              key={index}
              className={`absolute w-full transition-opacity duration-500 ${
                active === lang ? 'block opacity-100' : 'hidden opacity-0'
              }`}
            >
              <div className="pb-2 pt-3">
                <div className="grid w-full grid-cols-1 place-content-between items-start gap-4 lg:grid-cols-2">
                  <div className="w-full">
                    <label
                      htmlFor={`title-${lang}`}
                      className="mb-2 block font-works text-sm font-medium text-tdColor dark:text-white300"
                    >
                      {t('product.14')}
                      <span className="pl-1">({lang.toUpperCase()})</span>
                      <span className="pl-1 text-red-600">*</span>
                    </label>
                    <input
                      name={`title-${lang}`}
                      id={`title-${lang}`}
                      className={`${inputClassName(
                        attemptedSubmit && !name[lang],
                      )} border-1 block w-full rounded-lg border-0 bg-white px-2 py-1.5 text-base shadow-md`}
                      value={name[lang]}
                      placeholder={t('product.20')}
                      onChange={(e) => handleTitle(e, lang)}
                    ></input>
                    {attemptedSubmit && !name[lang] && (
                      <span className="text-xs text-errorMessage">
                        *{t('toast.12')}
                      </span>
                    )}
                    <div className="grid-cols-1 gap-4 lg:grid-cols-3">
                      <div className="my-3 w-full">
                        <Select
                          id="category"
                          value={categoryId}
                          onChange={(e) =>
                            dispatch(setcategoryId(Number(e.target.value)))
                          }
                          required
                          className={inputClassName(
                            attemptedSubmit && !categoryId,
                          )}
                          label={t('product.7')}
                          option={t('product.17')}
                        >
                          {content}
                        </Select>
                        {attemptedSubmit && !categoryId && (
                          <span className="text-xs text-errorMessage">
                            *{t('toast.12')}
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
                          placeholder="34"
                          type="text"
                          required
                          className={inputClassName(attemptedSubmit && !price)}
                        />
                        {attemptedSubmit && !price && (
                          <span className="text-xs text-errorMessage">
                            *{t('toast.12')}
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
                      <span className="pl-1">({lang.toUpperCase()})</span>
                    </label>
                    <textarea
                      name={`description-${lang}`}
                      id={`description-${lang}`}
                      rows={3}
                      className="border-1 block w-full rounded-lg border-0 bg-white px-4 py-5 shadow-md"
                      value={desc[lang]}
                      placeholder={t('product.16')}
                      onChange={(e) => handleDesc(e, lang)}
                    ></textarea>
                    <div className="mt-12">
                      <CancelSaveButton
                        loading={load}
                        onSave={onSubmit}
                        onCancel={() => navigate(-1)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </form>
    </>
  );
};

export default Form;
