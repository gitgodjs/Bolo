"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import InputText from '@/components/Common/InputText';
import Logo from '../Common/Logo';

const LoginForm = () => {
  const [correo, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [allComplete, setAllComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Detecta si los campos están completos
  useEffect(() => {
    if (correo && password) {
      setAllComplete(true);
    } else {
      setAllComplete(false);
    }
  }, [correo, password]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    if (id === 'email_registro') {
      setEmail(value);
    } else if (id === 'password_registro') {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de envío de formulario omitida para solo mostrar la parte estética
  };

  return (
    <form
      className="w-[90vw] h-[80vh] md:w-40 bg-[#1725537b] md:h-[27rem] md:w-[40rem] md:shadow-lg rounded-md flex flex-col justify-center items-center"
      onSubmit={handleSubmit}
    >
      <Logo 
      width={150}
      height={150}
      />

      {/* Email Input */}
      <div className="mt-8 w-[80%]">
        <InputText
          type="text"
          placeholder="Correo"
          id="email_registro"
          onChange={handleInputChange}
          value={correo}
        />
      </div>

      {/* Password Input */}
      <div className="my-3 w-[80%]">
        <InputText
          type="password"
          placeholder="Contraseña"
          id="password_registro"
          onChange={handleInputChange}
          value={password}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className={allComplete ? "bg-[#F06C15] hover:bg-[#eb7b31] transition-all-02s rounded-md py-4 px-20 text-lg font-semibold text-white mb-6" : "bg-[#E1E1E1] mb-2 rounded-md py-4 px-20 text-lg font-semibold text-gray-500 mb-6"}
      >
        {isLoading ? (
          <div className="w-5 h-5 rounded-full animate-spin border-y border-solid border-yellow-500 border-t-transparent"></div>
        ) : (
          'Inicia sesión'
        )}
      </button>

      {/* Links */}
      <div className="flex mb-4 items-center">
        <span>
          ¿Aún no preregistrado?{" "}
          <Link href="/signup" className="text-[#F06C15] cursor-pointer underline">
            Pre-registrate ahora
          </Link>
        </span>
      </div>
      <div className="flex mb-4 items-center">
        <span>
          ¿Olvidaste tu contraseña?{" "}
          <Link href="/signin/recuperar" className="text-[#F06C15] cursor-pointer underline">
            Recuperar
          </Link>
        </span>
      </div>
    </form>
  );
}

export default LoginForm;
