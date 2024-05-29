interface InputProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?:string
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  value,
  onChange,
  placeholder,
  required = false,
}) => {
  return (
    <>
      <label htmlFor={id} className="block text-sm font-medium leading-5">
        {label}
        {required && <span className="text-red-600">*</span>}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          id={id}
          type="text"
          value={value}
          onChange={onChange}
          className={`  block w-full pl-4 rounded-lg outline-none h-8 shadow-md border-inputColor sm:text-sm sm:leading-6 }`}
          required={required}
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default Input;
