interface InputProps {
  id: string;
  label: string;
  type?: any;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
  className?: string;
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
}) => {
  return (
    <div className="w-full">
      <label
        htmlFor={id}
        className="mb-2 block w-full font-works text-sm font-medium text-tdColor dark:text-white300"
      >
        {label}
        {required && <span className="text-red-600">*</span>}
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          className={`block h-10 w-full rounded-lg border-0 border-inputColor pl-4 shadow-md  sm:text-sm sm:leading-6 ${className}`}
          required={required}
          placeholder={placeholder}
          disabled={type === 'discount'}
        />
      </div>
    </div>
  );
};

export default Input;
