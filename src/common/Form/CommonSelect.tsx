import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilterData } from '../../features/category/categorySlice';
import { useFetchBranchAllQuery } from '../../features/branch/apiSlice';
import down from '../../images/icon/icon-arrow-down.svg';

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
  branchId?: string;
}

const CommonSelect: React.FC<InputProps> = ({
  id,
  label,
  value,
  option,
  onChange,
  className,
}) => {
  const dispatch = useDispatch();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isSuccess, data } = useFetchBranchAllQuery(''); // Fetch branch data

  // This will update the state when branch data is fetched successfully
  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setFilterData(data?.data));
    }
  }, [isSuccess, data, dispatch]);

  // Assuming data.data contains the array of branches
  const filteredItems = data?.data || [];

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
  };

  const selectedItem = filteredItems.find((item) => item.id === value);

  return (
    <>
      <div className="w-full">
        <label
          htmlFor={id}
          className="mb-2 block w-full font-works text-sm font-medium text-tdColor dark:text-white300"
        >
          {label}
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
              <span
                className={`flex-1 text-left sm:text-sm sm:leading-6 ${
                  selectedItem ? 'text-black' : 'text-darkgray'
                }`}
              >
                {selectedItem
                  ? selectedItem.name
                  : option || 'Baku, Azerbaijan'}
              </span>
              <span className="ml-2 flex-shrink-0">
                <img src={down} alt="icon" />
              </span>
            </div>

            {isDropdownOpen && (
              <div className="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg">
                <div className="max-h-60 overflow-y-auto">
                  {filteredItems.length > 0 ? (
                    filteredItems.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => handleOptionClick(item.id)}
                        className="hover:bg-gray-100 cursor-pointer p-2"
                      >
                        {item.name}
                      </div>
                    ))
                  ) : (
                    <div className="text-gray-500 p-2">No options found</div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonSelect;
