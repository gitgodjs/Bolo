"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { UserCircleIcon, MagnifyingGlassIcon, TicketIcon, BanknotesIcon, MoonIcon } from '@heroicons/react/24/solid';
import { useAuth } from '@/components/Auth/AuthContext';
import { useState, useEffect } from "react";
import Logo from "../Common/Logo";

const Nav = ({ setIsMenuOpen = null, isMenuOpen = false }) => {
  const { user, logout } = useAuth();
  const [isLogin, setIsLogin] = useState(false);

  const pathname = usePathname();
  useEffect(() => {
    if(pathname == "/signin" || pathname == "/signup") {
      setIsLogin(true)
    }
  }, []);

  const buildHref = (ruta) => user?.nombre ? `/${ruta}` : "/signup/complete";
  
  if(isLogin){
    return(
      <div className="w-full h-full sm:flex hidden justify-between items-center px-8 py-4 bg-[#1725537b] shadow-lg">
      <Logo
          width = {200} 
          height = {200}
      />
      </div>
    );
  };

  return (
    <>
      {/* Desktop Nav */}
      <div className="w-full h-full sm:flex hidden justify-between items-center px-8 py-4 bg-[#000000] shadow-lg">
        <Logo
            width = {120} 
            height = {120}
        />
        <div className="flex space-x-8 items-center">
        <NavItem href={"/"} icon={<MoonIcon className="h-8 w-8" />} text="Noches" />
        <NavItem href={buildHref("entradas")} icon={<TicketIcon className="h-8 w-8" />} text="Entradas" />
        <NavItem href={buildHref("reventa")} icon={<BanknotesIcon className="h-8 w-8" />} text="Reventa" />
        <NavItem href={buildHref("buscar")} icon={<MagnifyingGlassIcon className="h-8 w-8" />} text="Buscar" />
        {user ? (
            <>
              <NavItem href={"/perfil"} icon={<UserCircleIcon className="h-8 w-8" />} text="Mi Perfil" />
              <div>
                <button onClick={logout} className="text-[#C9CEE0] hover:text-[#fa2012] font-semibold text-md transition-colors duration-200">
                  Cerrar Sesión
                </button>
              </div>
            </>
          ) : (
            <>
              <div>
                <Link className="text-[#C9CEE0] hover:text-[#61635c] font-semibold text-lg transition-colors duration-200" href="/signin">
                  Iniciar Sesión
                </Link>
              </div>
              <div>
                <Link className="px-4 py-2 bg-[#ffd000] text-[#141717] rounded-full text-lg font-semibold hover:bg-[#ffd000b6] transition-colors duration-200" href="/signup">
                  Registrarse
                </Link>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="w-full h-full sm:hidden flex justify-between items-center px-4 py-4 bg-[#000000] shadow-lg">
          <Logo 
          width={100}
          height={100}
          />
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`focus:outline-none ${isMenuOpen ? "rotate-90" : ""} transform transition duration-300`}
        >
          <svg className="w-10 h-10 text-[#979891]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden absolute z-10 w-full bg-[#1d1f1f] shadow-lg p-4 flex flex-col space-y-4">
          {user ? (
            <button onClick={logout} className="text-[#C9CEE0] hover:text-[#607597] font-semibold text-xl transition-colors duration-200">
              Cerrar Sesión
            </button>
          ) : (
            <>
              <Link href="/signin">
                <span className="text-white hover:text-[#979891] font-semibold text-xl transition-colors duration-200">Iniciar Sesión</span>
              </Link>
              <Link href="/signup">
                <span className="text-[#ffd000] hover:text-white font-semibold text-xl transition-colors duration-200">Registrarse</span>
              </Link>
            </>
          )}
        </div>
      )}
    </>
  );
};

const NavItem = ({ href, icon, text }) => (
  <Link 
    className="flex flex-col py-2 justify-center items-center text-center text-[#C9CEE0] hover:text-[#61635c] transition-colors duration-200" 
    href={href}
  >
    {icon}
    <span className="font-semibold text-sm">{text}</span>
  </Link>
);

export default Nav;