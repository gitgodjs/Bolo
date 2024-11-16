import { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'; // Cambia las importaciones según Heroicons v2

const InputText = ({ placeholder = "", id = null, type = "text", value, onChange }) => {
  const [inputType, setInputType] = useState(type);
  
  const togglePasswordVisibility = () => {
    setInputType(inputType === 'password' ? 'text' : 'password');
  };

  return (
    <div className="relative w-full">
      <input
        type={inputType}
        className="w-full rounded-md border-2 border-gray-200 h-10 p-5 pr-10 active:outline-none focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all-02s"
        placeholder={placeholder}
        id={id}
        value={value}
        autoComplete="off"
        onChange={onChange}
      />
      {type === 'password' && (
        <button
          type="button"
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
          onClick={togglePasswordVisibility}
        >
          {inputType === 'password' ? (
            <EyeIcon className="h-5 w-5 text-gray-500" />
          ) : (
            <EyeSlashIcon className="h-5 w-5 text-gray-500" />
          )}
        </button>
      )}
    </div>
  );
};

export default InputText;