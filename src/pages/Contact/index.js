import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/assets/images/restaurant_logo_new.jpg"


export default function Home() {
  return (
    <div>
      <title>GinGunYub</title>
      <div className="flex w-full border-solid border-2 border-sky-500 h-[8vh]">
        <div className="flex justify-start items-center w-1/2 pl-10">
        <Link href="/"> <div className="cursor-pointer"><Image src={logo} alt="#" className="w-[50px] h-[50px] rounded"/></div></Link>
        </div>
        <div className="flex justify-end pr-10 items-center space-x-10 w-1/2">
        <Link href="/"><div>Home</div></Link>
          <Link href="/Category"><div>Catagory</div></Link>
          <Link href="/Menu"><div>Menu</div></Link>
          <Link href="/Contact"><div>Contact</div></Link>
        </div>
      </div>
      <div className="flex justify-center items-center w-full h-[92vh] border-solid border-2 border-red-500">
      <div>FB : Pruksakorn Boss Saiweal</div>
      </div>
    </div>
  );
}

