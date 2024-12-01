"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { UserCircleIcon, MagnifyingGlassIcon, TicketIcon, BanknotesIcon, MoonIcon } from '@heroicons/react/24/solid';
import { useAuth } from '@/components/Auth/AuthContext';
import { useEffect, useState } from "react";

const MobileNav = () => {
  const { user } = useAuth();
  const [isLogin, setIsLogin] = useState(false);

  const pathname = usePathname();
  useEffect(() => {
    if(pathname == "/signin" || pathname == "/signup") {
      setIsLogin(true)
    }
  }, []);

  const buildHref = (ruta) => user?.nombre ? `/${ruta}` : "/signup/complete";

  if(isLogin){
    return(<div></div>);
  }

  // Entradas solo tiene boliches a los que les compramos entradas justamente
  // Reventa... bueno eso
  // Perfil es el propio
  // PAGE PRINCIPAL == Noches == tiene que ser una recopilacion de las fotos con mas likes de diversos boliches (asi establecemos "famosos" de cada bolo)
  // Buscar = motor de busqueda que indexa primero a la gente que fue al mismo boliche que vos

  return (
    <div className="fixed rounded-md border-t-2 border-[#304264] bottom-0 left-0 right-0 bg-[#141717] shadow-lg flex justify-around items-center px-4 sm:hidden">
      <NavItem href={buildHref("entradas")} icon={<TicketIcon className="h-10 w-10" />} text="Entradas" />
      <NavItem href={buildHref("reventa")} icon={<BanknotesIcon className="h-10 w-10" />} text="Reventa" />
      <NavItem href={buildHref("buscar")} icon={<MagnifyingGlassIcon className="h-10 w-10" />} text="Buscar" />
      <NavItem href={"/"} icon={<MoonIcon className="h-10 w-10" />} text="Noches" />
      {!user && (
        <>
          <NavItem href={"/perfil/juanmroman20@gmail.com"} icon={<UserCircleIcon className="h-10 w-10" />} text="Mi Perfil" />
        </>
      )}
    </div>
  );
};

const NavItem = ({ href, icon, text }) => (
  <Link 
    className="flex flex-col py-2 justify-center items-center text-center text-[#979891] hover:text-[#61635c] transition-colors duration-200" 
    href={href}
  >
    {icon}
    <span className="font-semibold text-sm">{text}</span>
  </Link>
);

export default MobileNav;