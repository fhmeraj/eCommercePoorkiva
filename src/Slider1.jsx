import React from 'react'
import Slider from "react-slick";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";



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

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const images = [
    "https://img-prd-pim.poorvika.com/pageimg/iPhone-17-Coming-Soon-Web1.webp",
    "https://img-prd-pim.poorvika.com/pageimg/Apple-iphone-17-pro-coming-soon-web.webp",
    "https://img-prd-pim.poorvika.com/pageimg/iPhone-Air-Coming-Soon-Web.webp",
  ];

  return (

    <div className=' w-full mx-auto  '>
    
    <Slider {...settings}>
    {images.map((i)=>(
      <div>
        <img src={i}/>
      </div>
      ))}
    </Slider>
    </div>
  );
}


