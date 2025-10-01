import React from 'react'
import Slider from "react-slick";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";
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
          className={"bg-white  absolute  top-[40%]  z-5  left-2  py-7 px-1.5 rounded-lg"}
          onClick={onClick}
        >
        <MdOutlineArrowBackIos  className='text-black'/>  
      
        </div>
      ); 

export default function Category() {

  const navigate=useNavigate()
   var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 5,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };

    const data = [
      {
        id:1,
        imag:"https://img-prd-pim.poorvika.com/pageimg/group-125-65dae67371963.webp",
        title:"Mobiles & Accessories",
        path:"/home"
      },
      {
        id:2,
        imag:"https://img-prd-pim.poorvika.com/pageimg/group-126-65dae67439a18.webp",
        title:"Laptops & Tablets",
      },
      {
        id:3,
        imag:"	https://img-prd-pim.poorvika.com/pageimg/group-127-65dae674a53d3.webp",
        title:"Tv & Audio",
      },
      {
        id:4,
        imag:"https://img-prd-pim.poorvika.com/pageimg/group-128-65dae674ee607.webp",
        title:"Kitchen Appliances",
      },
      {
        id:5,
        imag:"	https://img-prd-pim.poorvika.com/pageimg/group-129-1-65dae6756bc34.webp",
        title:"Home Appliances",
      },
      {
        id:6,
        imag:"https://img-prd-pim.poorvika.com/pageimg/group-130-65dae675cc510.webp",
        title:"Smart Technology",
      },
      {
        id:7,
        imag:"https://img-prd-pim.poorvika.com/pageimg/Personal-care-category-icon.webp",
        title:"Personal Care",
      },


    ]
  return (
    
    <div className='w-[100%] h-full bg-white'>
      <Slider {...settings}>
      {data.map((i)=>(
         <div  onClick={()=>navigate(i?.path)} className='flex flex-col items-center justify-center my-8'>
          <img src={i.imag} className='size-32'/>
          <h1>{i.title}</h1>
        </div>
      ))}
     
    </Slider>
    </div>
  )
}


