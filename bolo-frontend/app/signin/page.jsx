"use client"

import LoginForm from '@/components/Signin/LoginForm';
import { useState, useEffect } from 'react';
import { useAuth } from '@/components/Auth/AuthContext';
import { useRouter } from "next/navigation";

const SigninPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  return (
    <div style={{ height: '100vh' }} className="bg-[#FBFBFB] flex flex-col">
      <div className="h-[90vh] bg-[#050614] flex justify-center items-center"><LoginForm/></div>
      
      {/*<Footer/>*/}
    </div>
  )
}

export default SigninPage