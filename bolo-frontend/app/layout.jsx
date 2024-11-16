"use client";
import "@/styles/globals.css";
import Script from "next/script";
import { Toaster } from 'sonner';
import Nav from '@/components/Navbar/Desktop';
import MobileNav from '@/components/Navbar/Mobile';
import { useState } from 'react';
import { AuthProvider } from '@/components/Auth/AuthContext'; // Ajusta la ruta según sea necesario

const RootLayout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <AuthProvider>
      <html lang="en">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
          <link rel="icon" type="image/x-icon" href="logo.png"></link>

          <link
          href="https://fonts.googleapis.com/css2?family=Gluten:wght@100..900&family=Vina+Sans&family=Passion+One:wght@400;700;900&display=swap" rel="stylesheet"
          />
          <Script
            src="https://kit.fontawesome.com/38eaca6879.js"
            crossOrigin="anonymous"
          />
          <title>Bolo</title>
        </head>
        <body className={isMenuOpen ? "" : ""} onClick={(e) => {
          if (isMenuOpen && !e.target.closest(".nav-container")) {
            setIsMenuOpen(false);
          }
        }}>
          <div className="nav-container">
            <Nav setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
          </div>
          <main>{children}</main>
          <MobileNav />
          <Toaster 
            position='bottom-center'
            duration={1500}
            toastOptions={{
              classNames: {
                error: '!bg-red-400 !text-lg !text-white',
                success: '!bg-green-500 !text-white !text-lg',
                warning: '!bg-yellow-400 !text-lg',
                info: '!bg-blue-400 !text-lg !text-white',
              },
            }}
          />
        </body>
      </html>
    </AuthProvider>
  );
};

export default RootLayout;
