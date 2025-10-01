import React from 'react'

function LaptopBan() {
  return (
    <div className="w-full h-full py-2 ">
      <div className="w-full h-[13vh] bg-white flex items-center justify-between px-10 ">
        <h1 className="text-[#F26522] font-bold text-2xl">
          Laptop & Tablets


        </h1>
        <div className="flex">
          <div className="border-r-1 "><h1 className="hover:text-[#F26522] font-semibold mr-5">Best Laptops</h1></div>
          <div className="border-r-1 "><h1 className="hover:text-[#F26522] font-semibold mr-5 ml-5">Desktop Pc</h1></div>
          <div className="border-r-1 "><h1 className="hover:text-[#F26522] font-semibold mr-5 ml-5">iPad & Tablets</h1></div>
          <div className=""><h1 className="hover:text-[#F26522] font-semibold mr-5 ml-5">Accessories</h1></div>
        </div>
      </div>
      <div className="w-full h-full bg-white flex gap-x-2">
        <div className="w-[25%] h-full flex flex-col ">
          <div className="w-full h-[50%] flex items-center justify-center">
            <img src="https://img-prd-pim.poorvika.com/pageimg/Macbooks-2608801.webp" />
          </div>
          <div className="w-full h-[50%]">
            <img src="https://img-prd-pim.poorvika.com/pageimg/Gaming-Laptop-2608815.webp" />
          </div>
        </div>
        <div className="w-[50%] h-full ">
          <img src="https://img-prd-pim.poorvika.com/pageimg/Macbook-Air-M4-Best-Laptop.webp" />
        </div>
        <div className="w-[25%] h-full flex flex-col ">
          <div className="w-full h-[50%]">
            <img src="https://img-prd-pim.poorvika.com/cdn-cgi/image/width=300,height=170,quality=75/pageimg/2-in-1-laptop-w.png"/>
          </div>
          <div className="w-full h-[50%]">
            <img src="https://img-prd-pim.poorvika.com/pageimg/Windows-Laptop-2608843.webp"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LaptopBan
