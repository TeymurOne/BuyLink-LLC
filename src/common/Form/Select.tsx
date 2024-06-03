import React from "react";

interface InputProps {

    id: string;
    label?: string;
    value?: string;
    defaultValue?:string;
    children?:any
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    required?: boolean;
    option:string
  }

  
  
const Select:React.FC<InputProps> = ({id, label, value, option, onChange, children}) => {
  return (
    <>
       <div className="w-full">
      <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div >
        <select
          id={id}
          name={id}
          value={value}
          defaultValue='defaultValue'
      
          onChange={onChange}
          className="block w-full pl-4 rounded-lg outline-none h-8 shadow-md border-inputColor sm:text-sm sm:leading-6"
        >
          <option value="" disabled selected>{option}</option>

          {children}
        </select>
      </div>
    </div>
      
    </>
  )
}






export default Select
 