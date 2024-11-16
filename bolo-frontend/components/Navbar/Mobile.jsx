"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { UserCircleIcon, MagnifyingGlassIcon, TicketIcon, BanknotesIcon } from '@heroicons/react/24/solid';
import { MoonIcon } from '@heroicons/react/24/outline';
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

  return (
    <div className="fixed rounded-md border-t-2 border-[#304264] bottom-0 left-0 right-0 bg-[#111B3D] shadow-lg flex justify-around items-center px-4 sm:hidden">
      <NavItem href={buildHref("entradas")} icon={<TicketIcon className="h-10 w-10" />} text="Entradas" />
      <NavItem href={buildHref("reventa")} icon={<BanknotesIcon className="h-10 w-10" />} text="Reventa" />
      <NavItem href={"/"} icon={<MoonIcon className="h-10 w-10" />} text="Noches" />
      <NavItem href={buildHref("buscar")} icon={<MagnifyingGlassIcon className="h-10 w-10" />} text="Buscar" />

      {!user && (
        <>
          <NavItem href={"/perfil"} icon={<UserCircleIcon className="h-10 w-10" />} text="Mi Perfil" />
        </>
      )}
    </div>
  );
};

const NavItem = ({ href, icon, text }) => (
  <Link 
    className="flex flex-col py-2 justify-center items-center text-center text-[#C9CEE0] hover:text-[#607597] transition-colors duration-200" 
    href={href}
  >
    {icon}
    <span className="font-semibold text-sm">{text}</span>
  </Link>
);

export default MobileNav;