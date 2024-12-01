"use client"

import RegistroForm from '@/components/Signup/RegistroForm';
import { useEffect, useState } from 'react';
import { useAuth } from '@/components/Auth/AuthContext';
import { useRouter } from "next/navigation";

const SignupPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  return (
    <div style={isMenuOpen ? { height: '100vh' } : { height: '100vh' }} className="bg-[#FBFBFB] flex flex-col">
      <div className="h-full bg-[#232624] flex justify-center items-center"><RegistroForm/></div>
    </div>
  )
}

export default SignupPage