import Image from "next/image";
import Link from "next/link";

const Logo = ({ width = 100, height = 100 }) => {
  return (
    <Link href={"/"} className="flex items-center">
      <Image
        src="/logoCompleto.gif" 
        alt="Bolo Logo"
        width={width}           
        height={height}         
      />
      <h1 className="text-center text-white text-4xl">Bolo</h1>
    </Link>
  );
};

export default Logo;
