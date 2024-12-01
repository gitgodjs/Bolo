"use client"
import Image from "next/image";
import Link from "next/link";
import CardUser from "@/components/Perfil/CardUser";
import { UsersIcon } from '@heroicons/react/24/outline';

// MEJORAR EL VER MAS Y SEGUIR CON PUBLICACIONES MODELO
const ProfilePage = () => {
  return (
    <div className="text-white">
      <div>
        <div className="w-full h-[15vh] relative"> 
          <Image
            src="/portada.png"
            alt="Descripción de la imagen"
            layout="fill"  
            objectFit="cover" 
          />
        </div>
        <div className="w-[125px] h-[125px] absolute left-[2vh] transform -translate-y-3/4 border-4 border-[#232624] rounded-full overflow-hidden">
          <Image
            src="/portada.png"
            alt="Descripción de la imagen"
            layout="fill"  
            objectFit="cover" 
          />
        </div>
      </div>
      
      <div className="flex flex-col mt-5 p-2">
        <h2 className="text-2xl text-bold">@onePicante</h2>
        <p className="text-xl">Descripcion: soy re picante mal me estoy mandando alta pagina fuck Adam Juseim</p>
      </div>

      <div className="flex flex-col md:flex-row justify-between mt-2 p-2 text-center">
        <div className="flex gap-2 items-center p-2 ">
          <Image src="/Instagram_icon.png" alt="Instagram" width="30" height="30" />
          <Link href={"/instagram"} className="text-lg underline text-white">Instagram</Link>
        </div>
        <div className="flex gap-2 items-center p-2 ">
          <Image src="/tiktok.png" alt="Instagram" width="30" height="30" className="rounded-md "/>
          <Link href={"/instagram"} className="text-lg underline text-white">Tik Tok</Link>
        </div>
        <div className="flex gap-2 items-center p-2 ">
          <Image src="/x.svg" alt="Instagram" width="30" height="30" className="rounded-md "/>
          <Link href={"/instagram"} className="text-lg underline text-white">X (Twitter)</Link>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto p-4"> 
        <CardUser />
        <CardUser />
        <CardUser />
        <CardUser />
        <div className="flex flex-col items-center w-[250px] h-[30vh] m-2 p-2 rounded-md bg-[#141717] ">
            <UsersIcon className="h-12 w-12 text-white" />
            <div className="flex flex-col mt-1 text-center w-full"> 
                <p className="text-lg">Si quieres seguir buscando puedes</p>
                <Link href={"/listadoPerfiles"} className="w-full underline mt-4 p-2 text-base rounded-md">Ver más</Link> 
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage;
