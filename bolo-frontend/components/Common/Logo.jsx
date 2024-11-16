import Image from "next/image";
import Link from "next/link";

const Logo = ({ width = 100, height = 100 }) => {
  return (
    <Link href={"/"}>
      <Image
        src="/logoCompleto.png" 
        alt="Bolo Logo"
        width={width}           
        height={height}         
      />
    </Link>
    
  );
};

export default Logo;
