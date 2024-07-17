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
  children,
  attemptedSubmit,
  categoryId,
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
            style={style}
            className="block h-10 w-full rounded-lg border-inputColor pl-4 shadow-md outline-none sm:text-sm sm:leading-6"
          >
            <option value="" disabled selected>
              {option}
            </option>
            {children}
          </select>
          {attemptedSubmit && !categoryId && (
            <span className="text-xs text-errorMessage">
              *Please fill out the form
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default Select;
