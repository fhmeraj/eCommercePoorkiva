import React from 'react'
import Slider from 'react-slick'
import { laptop_list } from './Mock/laptop'
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';


const NextArrow = ({ className, style, onClick }) => (
      <div
        className={"bg-white  absolute  top-[40%]  right-2  py-7 px-1.5 rounded-lg "}
        onClick={onClick}
      >
        <MdOutlineArrowForwardIos   className='text-black'/>
      </div>
    
    );
    
    const PrevArrow = ({ className, style, onClick }) => (
      <div
        className={"bg-white  absolute  top-[40%]  z-50  left-2  py-7 px-1.5 rounded-lg"}
        onClick={onClick}
      >
      <MdOutlineArrowBackIos  className='text-black'/>  
    
      </div>
    );
    
    export default function PcLaptop() {
      const navigate=useNavigate()
      var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 7,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      };
  return (
    <div className='w-full h-full'>
    <Slider {...settings}>
      {laptop_list.map((i,index)=>(
        <div onClick={()=>navigate(`/product-detail/${i?.slug}`,{state:i})} id={index} className=" w-full mx-3 space-y-2 py-3 relative bg-white">
          <img src={i?.image}  className="h-32 w-auto px-2" />
          <div className={`size-12 ${index%2===0?"bg-rose-400":"bg-green-400"}  rounded-full absolute top-[38%] right-[10%]  flex items-center justify-center`}>
            <p className=" flex flex-col items-center  justify-center text-white text-xs font-semibold"><span>Save</span>₹ {i?.actual_price-i?.price}  </p>
          </div>
          <h1 className="text-xs px-2 line-clamp-1 font-semibold">{i?.variant_name}</h1>
          <p className="text-xs text-gray-400 px-2">({i?.color_variant_name} {i.storage_variant_name})</p>
          <p className="text-xs text-orange-600 font-semibold px-2">₹ {i?.price}</p>
          </div>
      ))}
    </Slider>
      
    </div>
  )
}


