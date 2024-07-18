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
  required,
  attemptedSubmit,
  categoryId,
}) => {
  const isInvalid = attemptedSubmit && !categoryId;
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
          <select
            id={id}
            name={id}
            value={value}
            defaultValue={value}
            onChange={onChange}
            style={style}
            className={`border-1 block h-10 w-full rounded-lg border-0 pl-4 shadow-md sm:text-sm sm:leading-6 ${
              isInvalid ? 'border-errorMessage' : 'border-inputColor'
            }`}
          >
            <option value="" disabled selected>
              {option}
            </option>
            {children}
          </select>
          {isInvalid && (
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
