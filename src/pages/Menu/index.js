
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/assets/images/restaurant_logo_new.jpg"


export default function Contact() {
  return (
    <div>
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
      <div className="h-full bg-[#000] flex justify-center items-center ">
        <div className="bg-stone-500 flex justify-start items-center flex-col gap-5 w-4/6 h-full py-10">
          <div className="text-4xl font-bold">FOOD MENU</div>
          <div>อาหารดีๆ ต้องที่เมนูนี้เลย</div>
          <div className="w-full h-full">
            <div className="w-full h-60 flex justify-between items-center">
              <div className=" w-1/2 h-5/6 mt-10 flex flex-col pl-20 ">
                <div className="bg-yellow-500 text-center rounded p-2 w-1/3 mb-5 font-bold text-black">
                  Main course
                </div>
                <div className="flex justify-between w-5/6">
                  <div>CheeseBurger</div>
                  <div>20B</div>
                </div>
                <div className="flex justify-between w-5/6">
                  <div>Hotdog</div>
                  <div>20B</div>
                </div>
                <div className="flex justify-between w-5/6">
                  <div>CheeseBurger</div>
                  <div>20B</div>
                </div>
                <div className="flex justify-between w-5/6">
                  <div>Hotdog</div>
                  <div>20B</div>
                </div>
              </div>
              <div className="bg-amber-500  w-1/3 flex justify-start pl-3 items-center h-full rounded-l-full">
                <div>
                  <img
                    className="rounded-full bg-cover bg-center w-[220px] h-[220px] "
                    src="https://cdn-imgix.headout.com/media/images/10368ae725854dd7cbf3333980906b9a-IMG%20Worlds%20of%20Adventure%20Dining%20burgers.jpg?auto=format&w=510.8727272727273&h=401.4&q=90&fit=crop&ar=14%3A11&crop=faces"
                    alt="#"
                  ></img>
                </div>
              </div>
            </div>
            <div className=" w-full h-60 flex justify-between items-center">
            <div className="bg-amber-500  w-1/3 flex justify-end pr-3 items-center h-full rounded-r-full">
                <div>
                  <img
                    className="rounded-full bg-cover bg-center w-[220px] h-[220px] "
                    src="https://cdn-imgix.headout.com/media/images/10368ae725854dd7cbf3333980906b9a-IMG%20Worlds%20of%20Adventure%20Dining%20burgers.jpg?auto=format&w=510.8727272727273&h=401.4&q=90&fit=crop&ar=14%3A11&crop=faces"
                    alt="#"
                  ></img>
                </div>
              </div>
              <div className=" w-1/2 h-5/6 mt-10 flex flex-col pl-20 ">
                <div className="bg-yellow-500 text-center rounded p-2 w-1/3 mb-5 font-bold text-black">
                  Appetizers
                </div>
                <div className="flex justify-between w-5/6">
                  <div>CheeseBurger</div>
                  <div>20B</div>
                </div>
                <div className="flex justify-between w-5/6">
                  <div>Hotdog</div>
                  <div>20B</div>
                </div>
                <div className="flex justify-between w-5/6">
                  <div>CheeseBurger</div>
                  <div>20B</div>
                </div>
                <div className="flex justify-between w-5/6">
                  <div>Hotdog</div>
                  <div>20B</div>
                </div>
              </div>
            </div>
            <div className=" w-full h-60 flex justify-between items-center">
              <div className=" w-1/2 h-5/6 mt-10 flex flex-col pl-20 ">
                <div className="bg-yellow-500 text-center rounded p-2 w-1/3 mb-5 font-bold text-black">
                  Baverages
                </div>
                <div className="flex justify-between w-5/6">
                  <div>CheeseBurger</div>
                  <div>20B</div>
                </div>
                <div className="flex justify-between w-5/6">
                  <div>Hotdog</div>
                  <div>20B</div>
                </div>
                <div className="flex justify-between w-5/6">
                  <div>CheeseBurger</div>
                  <div>20B</div>
                </div>
                <div className="flex justify-between w-5/6">
                  <div>Hotdog</div>
                  <div>20B</div>
                </div>
              </div>
              <div className="bg-amber-500 w-1/3 flex justify-start pl-3 items-center h-full rounded-l-full">
                <div>
                  <img
                    className="rounded-full bg-cover bg-center w-[220px] h-[220px] "
                    src="https://cdn-imgix.headout.com/media/images/10368ae725854dd7cbf3333980906b9a-IMG%20Worlds%20of%20Adventure%20Dining%20burgers.jpg?auto=format&w=510.8727272727273&h=401.4&q=90&fit=crop&ar=14%3A11&crop=faces"
                    alt="#"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
