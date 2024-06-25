import React from 'react';

interface InputProps {
  id?: string;
  label?: string;
  value?: string;
  defaultValue?: string;
  children?: any;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
  option?: string;
}

const Select: React.FC<InputProps> = ({
  id,
  label,
  value,
  option,
  onChange,
  children,
}) => {
  return (
    <>
      <div className="w-full">
        <label
          htmlFor={id}
          className="block text-sm font-medium leading-6 dark:text-white300"
        >
          {label}
        </label>
        <div>
          <select
            id={id}
            name={id}
            value={value}
            defaultValue={value}
            onChange={onChange}
            className="block h-8 w-full rounded-lg border-inputColor pl-4 shadow-md outline-none sm:text-sm sm:leading-6"
          >
            <option value="" disabled selected>
              {option}
            </option>

            {children}
          </select>
        </div>
      </div>
    </>
  );
};

export default Select;
