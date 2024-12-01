import Image from "next/image";

const CardUser = () => {
    return (
        <div className="flex flex-col items-center w-[250px] h-[30vh] m-2 p-2 rounded-md bg-[#141717] ">
            <div className="w-[125px] h-[125px] relative rounded-full overflow-hidden">
                <Image
                    src="/portada.png"
                    alt="Descripción de la imagen"
                    layout="fill"  
                    objectFit="cover" 
                />
            </div>
            <div className="flex flex-col mt-1 text-center w-full"> 
                <h2 className="text-xl">@Nombre</h2>
                <p className="text-lg">Ultimo boliche...</p>
                <button className="w-full bg-blue-500 mt-4 p-2 text-base rounded-md">Seguir</button> 
            </div>
        </div>
    )
}

export default CardUser;
