import Image from 'next/image'
import imagen1 from "@/public/imagen1.jpeg"

export default function Home() {
  return (
    <div>
      <div>
        <Image
          src={imagen1}
          alt="Imagen de fondo"
          layout="fill"
          objectFit="cover"
          quality={100}
        />        
        <div className="relative z-10">
          <h1 className="text-white text-4xl tracking-widest p-2 font-texto">BOLO</h1>
        </div>
      </div>
    </div>
  );
}
