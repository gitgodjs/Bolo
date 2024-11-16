// authContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import apiFunctions from '../apiFunctions';
import { toast } from 'sonner';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
 const [user, setUser] = useState(null);
 const router = useRouter();


 useEffect(() => {
   const token = localStorage.getItem('token');
   if (token) {
     const fetchUser = async () => {
       const res = await apiFunctions.get_from_api_token("get_credentials_from_token", {}, token);
       const data = await res.json();
       setUser(data);
     };
     fetchUser();
   }
 }, []);


 const login = async (token, expires_in) => {
   localStorage.setItem('token', token);


   const expirationDate = Date.now() + expires_in * 1000;
   localStorage.setItem('token_expiration', expirationDate);


   // Mostrar el tiempo legible donde expira el token (opcional)
   //const formattedDate = new Date(expirationDate).toLocaleString();


   const res = await apiFunctions.get_from_api_token("get_credentials_from_token", {}, token);
   const data = await res.json();
   setUser(data);


   toast.success('Sesion Inicada con exito.', { id: 'clipboard' })
   router.push('/');
 };


 const logout = async () => {
   const token = localStorage.getItem('token');
   if (token) {
     await apiFunctions.post_to_api_token("logout", {}, token);
   };

   localStorage.removeItem('token');
   localStorage.removeItem('token_expiration');

   setUser(null);
 };

 const checkToken = async (setUser, setUserRol = null) => {
   const token = localStorage.getItem("token");
   const expirationDate = localStorage.getItem('token_expiration');

   if (token) {
     if(Date.now() >= parseInt(expirationDate, 10)) {
       await logout();
       toast.error('El tiempo de la sesión ha expirado.', { id: 'clipboard' });
       router.push('/');
       return;
     } else {
       const res = await apiFunctions.get_from_api_token("get_credentials_from_token", {}, token);
       const data = await res.json();

       if (!data.nombre) {
         router.push('/signup/complete');
         return;
       } else {
         setUser(data);
         if (typeof setUserRol === 'function') {
           setUserRol(data.rol_id);
         };
         return data;
       };
     };
   } else {
     return;
   };
 };

 return (
   <AuthContext.Provider value={{ user, login, logout, checkToken }}>
     {children}
   </AuthContext.Provider>
 );
};

export const useAuth = () => useContext(AuthContext);