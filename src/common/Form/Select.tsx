import React from "react";

interface InputProps {
    id: string;
    label?: string;
    value?: string;
    defaultValue?:string;
    children?:any
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    required?: boolean;
  }
  
const Select:React.FC<InputProps> = ({id, label, defaultValue, onChange, children}) => {
  return (
    <>
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
      
    </>
  )
}

export default Select
