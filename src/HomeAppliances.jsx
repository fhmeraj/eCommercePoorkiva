import React from 'react'

function HomeAppliances() {
  return (
    <div className="w-full h-full py-2 ">
      <div className="w-full h-[13vh] bg-white flex items-center justify-between px-10 ">
        <h1 className="text-[#F26522] font-bold text-2xl">
          Home Appliances


        </h1>
        <div className="flex">
          <div className="border-r-1 "><h1 className="hover:text-[#F26522] font-semibold mr-5">All Categories</h1></div>
          <div className="border-r-1 "><h1 className="hover:text-[#F26522] font-semibold mr-5 ml-5">Ac</h1></div>
          <div className="border-r-1 "><h1 className="hover:text-[#F26522] font-semibold mr-5 ml-5">Home Cleaners</h1></div>
          <div className=""><h1 className="hover:text-[#F26522] font-semibold mr-5 ml-5">Small Appliances</h1></div>
        </div>
      </div>
      <div className="w-full h-full bg-white flex gap-x-2">
        <div className="w-[25%] h-full flex flex-col ">
          <div className="w-full h-[50%] flex items-center justify-center">
            <img src="https://img-prd-pim.poorvika.com/pageimg/Fans-Web-view.webp" />
          </div>
          <div className="w-full h-[50%]">
            <img src="https://img-prd-pim.poorvika.com/pageimg/Washing-machine-Home-app-w.webp" />
          </div>
        </div>
        <div className="w-[50%] h-full ">
          <img src="https://img-prd-pim.poorvika.com/pageimg/Home-Appliances-banner.webp" />
        </div>
        <div className="w-[25%] h-full flex flex-col ">
          <div className="w-full h-[50%]">
            <img src="https://img-prd-pim.poorvika.com/pageimg/Refrigerator-Home-app-web.webp"/>
          </div>
          <div className="w-full h-[50%]">
            <img src="https://img-prd-pim.poorvika.com/pageimg/Water-Heater-Home-app-w.webp"/>
          </div>
        </div>
      </div>
    </div>
  );
}


export default HomeAppliances
