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
          className={`block ${classname} block w-full pl-4 rounded-lg outline-none h-8 shadow-md border-inputColor sm:text-sm sm:leading-6 ${error ? 'ring-red-500' : ''}`}
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
          className="block w-full   pl-4 rounded-lg outline-none h-10 shadow-md border-inputColor sm:text-sm sm:leading-6"
        >
          {children}
        </select>
      </div>
    </div>
  );
};


