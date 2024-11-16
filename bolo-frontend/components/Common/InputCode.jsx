import { useState, useRef } from 'react';

const InputCode = ({ length, id, onChange, value }) => {
  const [code, setCode] = useState(new Array(length).fill(''));
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const newCode = [...code];
    newCode[index] = e.target.value;
    setCode(newCode);
    onChange({ target: { id: id, value: newCode.join('') } });

    // Focus next input if not the last one and value is not empty
    if (e.target.value && index < length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  return (
    <div className="flex justify-center">
      {code.map((digit, index) => (
        <input
          key={index}
          ref={(el) => inputsRef.current[index] = el}
          type="number"
          maxLength="1"
          className="w-10 h-10 mx-2 text-center border-2 border-gray-200 rounded-md focus:ring-2 focus:ring-gray-300"
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
        />
      ))}
    </div>
  );
};

export default InputCode;