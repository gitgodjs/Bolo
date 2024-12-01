"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import InputText from '@/components/Common/InputText';
import Checkbox from '../Common/Checkbox';
import Logo from '../Common/Logo';

const LoginForm = () => {
  const [correo, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false); 
  const [allComplete, setAllComplete] = useState(false);
  const [isLoadingRegistro, setIsLoadingRegistro] = useState(false); 

  useEffect(() => {
    if (correo && password && isChecked) {
      setAllComplete(true);
    } else {
      setAllComplete(false);
    }
  }, [correo, password, isChecked]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    if (id === 'email_registro') {
      setEmail(value);
    } else if (id === 'password_registro') {
      setPassword(value);
    }
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoadingRegistro(true);
    setTimeout(() => {
      setIsLoadingRegistro(false);
    }, 2000);
  };

  return (
    <div className='h-screen w-screen md:h-[60%] md:w-[60%] flex flex-col md:grid grid-cols-2 gap-8 p-4 bg-[#000000] rounded-[15px]'>
      <div className='hidden md:flex flex-col items-center'>
        <Logo 
        width={300}
        height={300}
        />
        <p className=':block w-[80%] mt-4 text-2xl text-white'>Si todavia no tienes tu cuenta en <span className='text-[#ffd000]'>Bolo</span> puedes crearla para comenzar.</p>
      </div>
      <div className='flex justify-center md:hidden'>
        <Logo 
          width={200}
          height={200}
          />
      </div>
      <div className='flex flex-col p-2 gap-10'>
        <div className='mt-4'>
          <h1 className='text-white text-3xl'>Registrate</h1>
        </div>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <div className="my-3 w-[100%]">
            <InputText 
              type="email" 
              id="email_registro" 
              placeholder="Correo" 
              value={correo} 
              onChange={handleInputChange} 
            />
          </div>
          <div className="mb-3 w-[100%]">
            <InputText 
              type="password" 
              id="password_registro" 
              placeholder="Contraseña" 
              value={password} 
              onChange={handleInputChange} 
            />
          </div>
          <div className="mb-3 w-[100%]">
            <InputText 
              type="repassword" 
              id="repassword_registro" 
              placeholder="Repite la contraseña" 
              value={password} 
              onChange={handleInputChange} 
            />
          </div>
          <div className="w-[80%] flex items-center align-center">
            <Checkbox id="terminos_check" checked={isChecked} onChange={handleCheckboxChange} /> 
            <span className="text-white text-lg">Acepto los <span className="text-[#ffd000]">términos y condiciones</span></span> 
          </div>
          <button 
            type="submit" 
            className={allComplete ? "bg-[#0033ab] mt-4 hover:bg-[#0018ab] transition-all-02s rounded-md py-4 px-20 text-lg font-semibold text-white" 
            : "mt-4 bg-[#E1E1E1] rounded-md py-4 px-20 text-lg font-semibold text-gray-500 mb-6"}
            disabled={!allComplete || isLoadingRegistro} 
          >
            {isLoadingRegistro ? <div className="w-5 h-5 rounded-full animate-spin border-y border-solid border-yellow-500 border-t-transparent"></div> : 'Iniciar sesión'}
          </button>
          <p className='text-white text-xl mb-2'>Si ya tienes una cuenta entonces puedes <Link href={"/signin"} className='text-[#346bea] underline'>iniciar sesion</Link></p>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
