import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/assets/images/restaurant_logo_new.jpg"



export default function Category(){
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
          <div className="grid grid-cols-5 justify-items-center gap-y-20 m-20">

          <div className="w-[250px] h-[250px]">
            <div className="cursor-pointer hover:scale-105">
                <div><img src="https://assistinghands.com/6/wp-content/uploads/sites/29/2019/01/Eat-Vegetables.jpg" alt="#" className="w-full h-[230px] rounded"></img></div>
                <div className="text-center mt-4">vegetable</div>
            </div>
          </div>
          <div className="w-[250px] h-[250px]">
            <div className="cursor-pointer hover:scale-105">
                <div><img src="https://media.istockphoto.com/id/1145276342/vector/pickle-cucumber-vector-cartoon-illustration-isolated-on-white-background-green-vegetables.jpg?s=612x612&w=0&k=20&c=nF1NbDGaHFWHZiVDvGmhLHFxLrqD1ghknJarh5xFMVk=" alt="#" className="w-full h-[230px] rounded"></img></div>
                <div className="text-center mt-4">Pickle</div>
            </div>
          </div>
          <div className="w-[250px] h-[250px]">
            <div className="cursor-pointer hover:scale-105">
                <div><img src="https://t4.ftcdn.net/jpg/00/65/70/65/360_F_65706597_uNm2SwlPIuNUDuMwo6stBd81e25Y8K8s.jpg" alt="#" className="w-full h-[230px] rounded"></img></div>
                <div className="text-center mt-4">Fruit</div>
            </div>
          </div>
          <div className="w-[250px] h-[250px]">
            <div className="cursor-pointer hover:scale-105">
                <div><img src="https://hips.hearstapps.com/hmg-prod/images/drinks-to-avoid-1621959532.jpg" alt="#" className="w-full h-[230px] rounded"></img></div>
                <div className="text-center mt-4">Drink</div>
            </div>
          </div>
          <div className="w-[250px] h-[250px]">
            <div className="cursor-pointer hover:scale-105">
                <div><img src="https://t3.ftcdn.net/jpg/06/32/71/42/360_F_632714266_rdRiINnIMZC1SSroLc8e5Tb0sm3jN8i8.jpg" alt="#" className="w-full h-[230px] rounded bg-cover"></img></div>
                <div className="text-center mt-4">Pig</div>
            </div>
          </div>
          <div className="w-[250px] h-[250px]">
            <div className="cursor-pointer hover:scale-105">
                <div><img src="https://tarateaspoon.com/wp-content/uploads/2021/06/Vanilla-Ice-Cream-cone-glass-sq.jpeg" alt="#" className="w-full h-[230px] rounded"></img></div>
                <div className="text-center mt-4">Ice cream</div>
            </div>
          </div>
          <div className="w-[250px] h-[250px]">
            <div className="cursor-pointer hover:scale-105">
                <div><img src="https://media.istockphoto.com/id/901501348/vector/slice-of-melted-cheese-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=0cIsVfLHiabGD1NGDZEfE1hIBmD5DQuzNuLK8Owvyo8=" alt="#" className="w-full h-[230px] rounded"></img></div>
                <div className="text-center mt-4">Pizza</div>
            </div>
          </div>
          <div className="w-[250px] h-[250px]">
            <div className="cursor-pointer hover:scale-105">
                <div><img src="https://cdn.loveandlemons.com/wp-content/uploads/2021/06/summer-desserts.jpg" alt="#" className="w-full h-[230px] rounded"></img></div>
                <div className="text-center mt-4">Dessert</div>
            </div>
          </div>
          
          
          
          </div>
          
          </div>

    )
}