"use client"

import InputText from '@/components/Common/InputText'
import Checkbox from '@/components/Common/Checkbox'
import InputCode from '@/components/Common/InputCode'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Logo from '../Common/Logo'

const RegistroForm = () => {
  const [correo, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [termsChecked, setTermsChecked] = useState(false)
  const [prestadorChecked, setPrestadorChecked] = useState(false)
  const [allComplete, setAllComplete] = useState(false)
  const [isLoadingRegistro, setIsLoadingRegistro] = useState(false)
  const [codigo, setCodigo] = useState('')
  const [isCodeSent, setIsCodeSent] = useState(false)

  // Detecta si los campos están completos
  useEffect(() => {
    setAllComplete(correo && password && confirmPassword && termsChecked)
  }, [correo, password, confirmPassword, termsChecked])

  const handleInputChange = (e) => {
    const { id, value } = e.target
    switch (id) {
      case 'email_registro':
        setEmail(value)
        break
      case 'password_registro':
        setPassword(value)
        break
      case 'password_confirm_registro':
        setConfirmPassword(value)
        break
      case 'terminos_check':
        setTermsChecked(!termsChecked)
        break
      case 'prestador_check':
        setPrestadorChecked(!prestadorChecked)
        break
      case 'codigo_verificacion':
        setCodigo(value)
        break
      default:
        break
    }
  }

  return (
    <>
      {!isCodeSent ? (
        <form className="w-[90vw] h-[80vh] md:w-40 bg-[#1725537b] md:h-[33rem] md:w-[40rem] md:shadow-lg rounded-md flex flex-col justify-center items-center">
          <Logo 
          width={150}
          height={150}
          />
          <div className="mt-4 py-3 w-[80%]">
            <InputText
              type="text"
              placeholder="Correo"
              id="email_registro"
              onChange={handleInputChange}
              value={correo}
            />
          </div>
          <div className="my-3 py-3 w-[80%]">
            <InputText
              type="password"
              placeholder="Contraseña"
              id="password_registro"
              onChange={handleInputChange}
              value={password}
            />
          </div>
          <div className="mb-3 py-3 w-[80%]">
            <InputText
              type="password"
              placeholder="Confirmar contraseña"
              id="password_confirm_registro"
              onChange={handleInputChange}
              value={confirmPassword}
            />
          </div>
          <div className="w-[80%] flex items-center">
            <Checkbox
              id="terminos_check"
              onChange={handleInputChange}
              checked={termsChecked}
            />
            <span className="text-white text-xl">
              Acepto los{' '}
              <span className="text-[#0619da]">términos y condiciones</span>
            </span>
          </div>
          <button
            type="submit"
            className={
              allComplete
                ? 'bg-[#1725537b] hover:bg-[#304264] duration-300 transition-all-02s rounded-md py-4 px-20 text-lg font-semibold text-white mb-6 m-4'
                : 'bg-[#E1E1E1] mb-2 rounded-md py-4 px-20 text-lg font-semibold text-gray-500 mb-6 m-4'
            }
          >
            {isLoadingRegistro ? (
              <div className="w-5 h-5 rounded-full animate-spin border-y border-solid border-yellow-500 border-t-transparent"></div>
            ) : (
              'Registrate'
            )}
          </button>
          <div className="flex mb-4 items-center">
            <span className='text-white text-xl'>
              ¿Ya preregistrado?{' '}
              <Link href="/signin" className="text-[#0619da] text-xl cursor-pointer underline">
                Inicia sesión
              </Link>
            </span>
          </div>
        </form>
      ) : (
        <form className="w-[90vw] h-[80vh] md:w-40 bg-white md:h-[30rem] md:w-[40rem] md:shadow-lg rounded-md flex flex-col justify-center items-center">
          <div className="font-bold text-[#45576C] text-4xl md:text-3xl text-center w-full mb-4 mt-6">
            Verificación de correo
          </div>
          <div className="text-[#45576C] text-2xl md:text-lg text-center w-full mb-8 mt-6">
            Ingresa el código enviado a tu correo.
          </div>
          <div className="w-[80%] mb-4">
            <InputCode
              length={6}
              id="codigo_verificacion"
              onChange={handleInputChange}
              value={codigo}
            />
          </div>
          <button
            type="submit"
            className="bg-[#F06C15] hover:bg-[#eb7b31] transition-all-02s rounded-md py-4 px-20 text-lg font-semibold text-white mb-6"
          >
            {isLoadingRegistro ? (
              <div className="w-5 h-5 rounded-full animate-spin border-y border-solid border-yellow-500 border-t-transparent"></div>
            ) : (
              'Verificar'
            )}
          </button>
          <Link className="text-[#F06C15] underline" href="/">
            Volver
          </Link>
        </form>
      )}
    </>
  )
}

export default RegistroForm
