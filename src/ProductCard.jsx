import React from "react";
import { useLocation } from "react-router-dom";
import { LuCirclePercent } from "react-icons/lu";

function ProductCard() {
  const { state } = useLocation();
  return (
    <div className="w-full h-full flex bg-white py-6">
      <div className="w-[35%] h-full flex flex-col items-center justify-center space-y-7">
        <div className="w-[80%] h-[390px] flex items-center justify-center border border-gray-300">
          <img src={state?.image} className="" />
        </div>
        <div className="w-[25vw] grid grid-cols-3 gap-3 h-[16vh] ">
          <img src={state?.image} className="h-[14vh] w-auto" />
          <img src={state?.image} className="h-[14vh] w-auto" />
          <img src={state?.image} className="h-[14vh] w-auto" />
        </div>
      </div>
      <div className="w-[35%] h-full p-5 space-y-3">
        <h1 className="font-semibold text-lg">{state?.variant_name}</h1>
        <div>
          <p className="text-green-500 ">{state?.stock_sataus}</p>
          <p>Hurry few only left!</p>
        </div>
        <div className=" ">
          <div className="flex items-center gap-x-4">
            <h1 className="text-orange-600 text-lg font-bold">
              ₹ {state.price}
            </h1>
            <p className="text-xs">M.R.P:₹ 1,49,900</p>
          </div>
          <p className="text-gray-500 text-[10px]">Inclusive of all taxes</p>
        </div>
        <div>
          <button className="bg-green-600 text-white rounded px-4 ">
            pre-book: ₹ 5,000
          </button>
          <p className="text-xs">
            Standard EMI starts from ₹ 4,248/month for HDFC Bank Debit CardView
            Plans
          </p>
        </div>
        <div className="">
          <p className="text-xs flex items-center gap-x-1">
            <LuCirclePercent />
            Available Offers
          </p>
        </div>
        <h1 className="font-semibold">Color</h1>
        <h1 className="text-orange-600 font-bold">
          {state.color_variant_name}
        </h1>
        <div className="text-xs flex gap-x-3">
          <p>Glam White</p>
          <p>Olive Green</p>
        </div>
        <div>
          <h1 className="font-semibold">Storage</h1>
          <p className="text-orange-600 font-bold">{state.storage_variant_name}</p>
        </div>
      </div>

      <div className="w-[20%] h-full ">
        <div className='flex flex-col items-center justify-center space-y-3'>
          <button className='bg-orange-600 px-28 py-2 rounded text-white shadow-3xl flex'><h1>Buy Now</h1></button>
      <p>Or</p>
      <button className=' px-24 py-2 rounded border border-gray-200 shadow-2xl'><h1>Add To Cart</h1></button>

      </div>
      </div>
    </div>
  );
}

export default ProductCard;                                                               