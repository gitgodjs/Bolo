"use client";
import { useState } from 'react';
import Link from 'next/link';
import InputText from '@/components/Common/InputText';
import InputCode from '@/components/Common/InputCode';
import Logo from '@/components/Common/Logo';

const LoginRecuperarForm = () => {
  const [correo, setEmail] = useState('');
  const [codigo, setCodigo] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [currentStep, setCurrentStep] = useState(1); 
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case 'email_registro':
        setEmail(value);
        break;
      case 'codigo_verificacion':
        setCodigo(value);
        break;
      case 'new_password':
        setNewPassword(value);
        break;
      case 'confirm_password':
        setConfirmPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSendCode = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Lógica visual de ejemplo (sin backend)
    if (!correo.includes('@') || correo.includes(' ')) {
      alert('Por favor ingrese un correo válido');
      setIsLoading(false);
      return;
    }
    setCurrentStep(2);
    setIsLoading(false);
  };

  const handleVerifyCodeInput = (e) => {
    e.preventDefault();
    if (!codigo.trim()) return alert('Por favor ingrese el código.');
    setCurrentStep(3);
  };

  const handleVerifyCode = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) return alert('Las contraseñas no coinciden');
    if (newPassword.length < 8) return alert('La contraseña debe tener al menos 8 caracteres');
    alert('Contraseña actualizada exitosamente');
  };

  return (
    <div className='h-screen w-screen md:h-[60%] md:w-[60%] flex flex-col md:grid grid-cols-2 gap-8 p-4 bg-[#000000] rounded-[15px]'>
      <div className='hidden md:flex flex-col items-center'>
        <Logo width={300} height={300} />
        <p className='block w-[80%] mt-4 text-2xl text-white'>
          Si olvidaste tu cuenta, puedes recuperar tu contraseña.
        </p>
      </div>
      <div className='flex mt-2 justify-center md:hidden'>
        <Logo width={200} height={200} />
      </div>
      <div className='flex flex-col p-2 gap-10'>
        <div className='mt-4'>
          <h1 className='text-white text-3xl'>Recupera tu contraseña</h1>
        </div>
        {currentStep === 1 && (
          <form onSubmit={handleSendCode} className='flex flex-col gap-4'>
            <div className="my-3 w-[100%]">
              <InputText 
                type="email" 
                id="email_registro" 
                placeholder="Correo" 
                value={correo} 
                onChange={handleInputChange} 
              />
            </div>
            <button 
              type="submit" 
              className={isLoading ? 
                "bg-[#F06C15] mt-5 hover:bg-[#eb7b31] transition-all-02s rounded-md py-4 px-20 text-lg font-semibold text-white mb-6" 
                : "mt-5 bg-[#E1E1E1] mb-6 rounded-md py-4 px-20 text-lg font-semibold text-gray-500"}
              disabled={isLoading}
            >
              {isLoading ? <div className="w-5 h-5 rounded-full animate-spin border-y border-solid border-yellow-500 border-t-transparent"></div> : 'Solicitar código'}
            </button>
            <p className='text-white text-xl'>
              ¿No tienes cuenta? <Link href="/signup" className='text-[#346bea] underline'>Regístrate ahora</Link>
            </p>
          </form>
        )}
        {currentStep === 2 && (
          <form onSubmit={handleVerifyCodeInput} className='flex flex-col gap-4'>
            <div className="my-3 w-[100%]">
              <InputCode 
                length={6} 
                id="codigo_verificacion" 
                placeholder="Código de verificación" 
                value={codigo} 
                onChange={handleInputChange} 
              />
            </div>
            <button 
              type="submit" 
              className="bg-[#F06C15] mt-5 hover:bg-[#eb7b31] transition-all-02s rounded-md py-4 px-20 text-lg font-semibold text-white mb-6"
            >
              Verificar código
            </button>
          </form>
        )}
        {currentStep === 3 && (
          <form onSubmit={handleVerifyCode} className='flex flex-col gap-4'>
            <div className="my-3 w-[100%]">
              <InputText 
                type="password" 
                id="new_password" 
                placeholder="Nueva contraseña" 
                value={newPassword} 
                onChange={handleInputChange} 
              />
            </div>
            <div className="my-3 w-[100%]">
              <InputText 
                type="password" 
                id="confirm_password" 
                placeholder="Confirmar nueva contraseña" 
                value={confirmPassword} 
                onChange={handleInputChange} 
              />
            </div>
            <button 
              type="submit" 
              className="bg-[#F06C15] mt-5 hover:bg-[#eb7b31] transition-all-02s rounded-md py-4 px-20 text-lg font-semibold text-white mb-6"
            >
              Restablecer Contraseña
            </button>
            <p className='text-white text-xl'>
              ¿Volver a la página de inicio? <Link href="/" className='text-[#346bea] underline'>Ir al inicio</Link>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginRecuperarForm;
