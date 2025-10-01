import React from "react";



function KitchenAppliances() {

  const images=[
    "https://img-prd-pim.poorvika.com/pageimg/Chimney-KA-web.webp",
    "https://img-prd-pim.poorvika.com/pageimg/Coffee-Makers-web.webp",
    "https://img-prd-pim.poorvika.com/pageimg/Electic-Kettle-web.webp",
    "https://img-prd-pim.poorvika.com/pageimg/Induction-cook-top-web.webp"

  ]


  return (
    <div className="w-full h-full py-2 ">
      <div className="w-full h-[13vh] bg-white flex items-center justify-between px-10 ">
        <h1 className="text-[#F26522] font-bold text-2xl">
          Kitchen Appliances
        </h1>
        <div className="flex">
          <div className="border-r-1 "><h1 className="hover:text-[#F26522] font-semibold mr-5">All categories</h1></div>
          <div className="border-r-1 "><h1 className="hover:text-[#F26522] font-semibold mr-5 ml-5">Kitchen Grinders</h1></div>
          <div className="border-r-1 "><h1 className="hover:text-[#F26522] font-semibold mr-5 ml-5">Cookwares</h1></div>
          <div className="border-r-1 "><h1 className="hover:text-[#F26522] font-semibold mr-5 ml-5">Steam cookers</h1></div>
          <div className=""><h1 className="hover:text-[#F26522] font-semibold mr-5 ml-5"> Oven & Cooktops</h1></div>
        </div>
      </div>
      <div className='className="w-full h-full bg-white flex '>
        <div className="w-[50%] grid grid-cols-2 gap-3 px-2">
        {images.map((i)=>(
          <div class=""><img src={i}/></div>
        ))}
          
          
        </div>
        <div className="w-[50%]">
          <img src="https://img-prd-pim.poorvika.com/pageimg/Kitchen-appliances-new-60-off-web.webp" />
        </div>
      </div>
    </div>
  );
}

export default KitchenAppliances
