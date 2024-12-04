import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/images/restaurant_logo_new.jpg"




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
      <div className="h-[92vh] flex justify-center items-center ">
        <div className="w-6/12 p-10 flex flex-col justify-center items-center gap-3">
          <div className="text-8xl">กินกันยับ</div>
          <div className="text-center text-xl ">
            ทุกจานของเราไม่ใช่แค่เพียงอาหาร
            แต่คือการบอกเล่าเรื่องราวแห่งความรักและความใส่ใจ
            ที่ปรุงด้วยวัตถุดิบสดใหม่ เพื่อให้ทุกมื้อของคุณเต็มไปด้วยความสุข
            ความอบอุ่น และรสชาติที่ยากจะลืมเลือน
          </div>
          <div className="flex space-x-20 mt-5  w-full justify-center items-center ">
            <Link href="/Menu"><div className="border-solid border-2 border-white-500 w-[200px] h-[70px] cursor-pointer flex justify-center items-center rounded-xl bg-sky-500 hover:bg-sky-700 hover:text-gray-300 text-lg">ดูเมนู</div></Link>
            <Link href="/Contact"><div className="border-solid border-2 border-white-500 w-[200px] h-[70px] cursor-pointer flex justify-center items-center rounded-xl bg-sky-500 hover:bg-sky-700 hover:text-gray-300 text-lg">ติดต่อเรา</div></Link>
          </div>
          {/* <div></div> */}
        </div>
      </div>
      
    </div>
  );
}
