import React from "react";



function MobilesAcc() {

  const images=[
    "https://img-prd-pim.poorvika.com/pageimg/iPhones-shop-now-w.webp",
    "https://img-prd-pim.poorvika.com/pageimg/Galaxy-AI-Phones-shop-now-W.webp",
    "https://img-prd-pim.poorvika.com/pageimg/Smart-Phones-shop-now-w.webp",
    "https://img-prd-pim.poorvika.com/pageimg/Mobiles-Accessories-shop-now-w.webp"

  ]


  return (
    <div className="w-full h-full py-2 ">
      <div className="w-full h-[13vh] bg-white flex items-center justify-between px-10 ">
        <h1 className="text-[#F26522] font-bold text-2xl">
          Mobiles & Accessories
        </h1>
        <div className="flex">
          <div className="border-r-1 "><h1 className="hover:text-[#F26522] font-semibold mr-5">Best Seller</h1></div>
          <div className="border-r-1 "><h1 className="hover:text-[#F26522] font-semibold mr-5 ml-5">5G Mobiles</h1></div>
          <div className="border-r-1 "><h1 className="hover:text-[#F26522] font-semibold mr-5 ml-5">Top Brands</h1></div>
          <div className=""><h1 className="hover:text-[#F26522] font-semibold mr-5 ml-5">Accessories</h1></div>
        </div>
      </div>
      <div className='className="w-full h-full bg-white flex '>
        <div className="w-[50%] grid grid-cols-2 gap-3 px-2">
        {images.map((i)=>(
          <div class=""><img src={i}/></div>
        ))}
          
          
        </div>
        <div className="w-[50%]">
          <img src="https://img-prd-pim.poorvika.com/pageimg/apple-iPhone-17-series-pre-order-now-W.webp" />
        </div>
      </div>
    </div>
  );
}

export default MobilesAcc;
