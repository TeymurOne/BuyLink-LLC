import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/api/store';
import { setFilterData } from '../../features/category/categorySlice.tsx';
import { useFetchProducttypeQuery } from '../../features/product/apiSlice.ts';
import down from '../../images/icon/icon-arrow-down.svg';
import { useTranslation } from 'react-i18next';

interface InputProps {
  id?: string;
  label?: string;
  value?: string;
  defaultValue?: string;
  children?: any;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
  option?: string;
  className?: string;
  style?: React.CSSProperties;
  attemptedSubmit?: boolean;
  categoryId?: string;
}

const Select: React.FC<InputProps> = ({
  id,
  label,
  value,
  style,
  option,
  onChange,
  className,
  required,
  attemptedSubmit,
  categoryId,
}) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { language, filteredData } = useSelector(
    (store: RootState) => store.categorySlice,
  );
  const { isSuccess, data } = useFetchProducttypeQuery('');
  const { t } = useTranslation();

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setFilterData(data?.data));
    }
  }, [isSuccess, data]);

  const filteredItems = filteredData
    .filter((item) =>
      item.name[language]
        ?.toLocaleLowerCase()
        .includes(search.trim().toLocaleLowerCase()),
    )
    .sort((a, b) =>
      a.name[language].localeCompare(b.name[language], language, {
        sensitivity: 'base',
      }),
    );

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (itemId: string) => {
    if (onChange) {
      onChange({
        target: { value: itemId },
      } as React.ChangeEvent<HTMLSelectElement>);
    }
    setIsDropdownOpen(false);
    setSearch('');
  };

  const selectedItem = filteredData.find((item) => item.id === value);

  return (
    <>
      <div className="w-full">
        <label
          htmlFor={id}
          className="mb-2 block w-full font-works text-sm font-medium text-tdColor dark:text-white300"
        >
          {label}
          {required && <span className="text-red-600">*</span>}
        </label>
        <div>
          <div className="relative">
            <div
              className={
                'border-1 flex h-10 w-full items-center justify-between rounded-lg border-0 border-inputColor bg-white px-4 shadow-md sm:text-sm sm:leading-6 ' +
                className
              }
              onClick={handleDropdownToggle}
            >
              <span className="flex-1 text-left">
                {selectedItem ? selectedItem.name[language] : option}
              </span>
              <span className="ml-2 flex-shrink-0">
                <img src={down} alt="icon" />
              </span>
            </div>

            {isDropdownOpen && (
              <div className="absolute z-10 mt-1 w-full rounded-md  bg-white shadow-lg">
                <input
                  type="text"
                  placeholder={t('header.7')}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="mb-2 w-full  border-b border-inputColor p-2 text-sm"
                />
                <div className="max-h-60 overflow-y-auto">
                  {filteredItems.length > 0 ? (
                    filteredItems.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => handleOptionClick(item.id)}
                        className="hover:bg-gray-100 cursor-pointer p-2"
                      >
                        {item.name[language]}
                      </div>
                    ))
                  ) : (
                    <div className="text-gray-500 p-2">{t('toast.12')}</div>
                  )}
                </div>
              </div>
            )}
            {attemptedSubmit && !categoryId && (
              <span className="text-xs text-errorMessage">
                *{t('toast.12')}
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Select;
