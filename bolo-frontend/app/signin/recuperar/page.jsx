"use client"

import LoginRecuperarForm from '@/components/Signin/LoginRecuperarForm';
import { useState, useEffect } from 'react';
import { useAuth } from '@/components/Auth/AuthContext';
import { useRouter } from "next/navigation";

const RecuperarPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  return (
    <div style={{ height: '100vh' }} className="bg-[#FBFBFB] flex flex-col">
      <div className="h-full bg-[#232624] flex justify-center items-center"><LoginRecuperarForm/></div>
      
      {/*<Footer/>*/}
    </div>
  )
}

export default RecuperarPage