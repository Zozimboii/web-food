import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/assets/images/restaurant_logo_new.jpg"


export default function Home() {
  return (
    <div>
      <title>GinGunYub</title>
      <div className="flex w-full bg-[#000033] h-[8vh]">
        <div className="flex justify-start items-center w-1/2 pl-10">
        <Link href="/"><div className="cursor-pointer"><Image src={logo} alt="#" className="w-[50px] h-[50px] rounded"/></div></Link>
        </div>
        <div className="flex justify-end pr-10 items-center space-x-10 w-1/2">
          <Link href="/"><div className="flex items-center justify-center w-[130px]"><div className="w-fit h-[3vh] hover:border-b-slate-500 hover:border-b-2">Home</div></div></Link>
          <Link href="/Category"><div className=" w-[130px] flex items-center justify-center "><div className="w-fit h-[3vh] hover:border-b-slate-500 hover:border-b-2">Catagory</div></div></Link>
          <Link href="/Menu"><div className="w-[130px] flex items-center justify-center"><div className="w-fit h-[3vh] hover:border-b-slate-500 hover:border-b-2">Menu</div></div></Link>
          <Link href="/Contact"><div className="w-[130px] flex items-center justify-center "><div className="w-fit h-[3vh] hover:border-b-slate-500 hover:border-b-2">Contact</div></div></Link>
        </div>
      </div>
      <div className="flex justify-center items-center w-full h-[92vh] ">
      <div>FB : Pruksakorn Boss Saiweal</div>
      </div>
    </div>
  );
}

