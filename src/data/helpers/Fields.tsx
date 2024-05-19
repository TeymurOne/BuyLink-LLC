import React, { useState } from 'react';

type InputProps = {
  id: string;
  label: any;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
  classname?: string;
};

export const Input: React.FC<InputProps> = ({
  id,
  label,
  value,
  onChange,
  type = 'text',
  required = false,
  classname = ''
}) => {
  const [error, setError] = useState('');

  const handleBlur = () => {
    if (required && !value) {
      setError('This field is required');
    } else {
      setError('');
    }
  };

  return (
    <div className="sm:col-span-3">
      <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-2">
        <input
          value={value}
          onChange={onChange}
          onBlur={handleBlur}
          type={type}
          id={id}
          name={id}
          autoComplete={id}
          required={required}
          className={`block ${classname} w-full px-2 rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset sm:text-sm sm:leading-6 ${error ? 'ring-red-500' : ''}`}
        />
        {error && <p className="mt-1 text-danger  text-sm ">{error}</p>}
      </div>
    </div>
  );
};

export default Input;
 

// RenderSelect.tsx


type RenderSelectProps = {
  id: string;
  label: string;
  defaultValue?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode;
};

 export const RenderSelect: React.FC<RenderSelectProps> = ({
  id,
  label,
  defaultValue = "default",
  onChange,
  children,
}) => {
  return (
    <div className="sm:col-span-3">
      <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-2">
        <select
          id={id}
          name={id}
          defaultValue={defaultValue}
          onChange={onChange}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          {children}
        </select>
      </div>
    </div>
  );
};


