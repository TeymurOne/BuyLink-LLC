import React, { useState } from 'react';

interface InputProps {
  id: string;
  label: string;
  type?: any;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
  className?: string;
  maxLength?: number;
  showPasswordTooltip?: boolean;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  value,
  type = 'text',
  onChange,
  placeholder,
  required = false,
  className = '',
  maxLength,
  showPasswordTooltip = false,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <label
          htmlFor={id}
          className="mb-2 block w-full font-works text-sm font-medium text-tdColor dark:text-white300"
        >
          {label}
          {required && <span className="text-red-600">*</span>}
        </label>
        {type === 'password' && showPasswordTooltip && (
          <div
            className="relative ml-2 inline-block"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <span className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15px"
                height="15px"
                viewBox="0 0 1024 1024"
              >
                <path
                  fill="currentColor"
                  d="M512 64a448 448 0 1 1 0 896a448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768a384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0a48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"
                />
              </svg>
            </span>
            {showTooltip && (
              <div className="absolute -top-8 right-0 z-10 w-80 rounded-xl bg-[#F7F7F7] px-3 py-2 text-xs text-black shadow-lg">
                Password will only change on mobile application.
              </div>
            )}
          </div>
        )}
      </div>

      <div className="relative mt-1 rounded-md shadow-sm">
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          className={`block h-10 w-full rounded-lg border-0 border-inputColor pl-4 shadow-md sm:text-sm sm:leading-6 ${className}`}
          required={required}
          maxLength={maxLength}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Input;
