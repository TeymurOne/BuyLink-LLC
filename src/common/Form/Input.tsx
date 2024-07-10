interface InputProps {
  id: string;
  label: string;
  type?: any;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  value,
  type = 'text',
  onChange,
  placeholder,
  required = false,
}) => {
  return (
    <div className="w-full">
      <label
        htmlFor={id}
        className="block w-full text-sm font-medium leading-5 text-tdColor dark:text-white300"
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
          className={`block h-8 w-full rounded-lg border-inputColor pl-4 shadow-md outline-none sm:text-sm sm:leading-6`}
          required={required}
          placeholder={placeholder}
          disabled={type === 'discount'}
        />
      </div>
    </div>
  );
};

export default Input;
