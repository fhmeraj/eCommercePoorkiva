import React from "react";
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
      className={"bg-white  absolute  top-[40%]  z-50  left-2  py-7 px-1.5 rounded-lg"}
      onClick={onClick}
    >
    <MdOutlineArrowBackIos  className='text-black'/>  
  
    </div>
  );
  
  export default function Slider2() {
    var settings = {
      dots: false,
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
      "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=1900,height=400,quality=75/pageimg/Apple-watch-ultra-3-personal-best-pre-order-now-available-from-19-september-web-v.jpg",
      "https://img-prd-pim.poorvika.com/pageimg/Apple-watch-Series-11-pre-order-now-available-from-19-september-web-view.webp",
      "https://img-prd-pim.poorvika.com/pageimg/Apple-watch-SE-3-pre-order-now-available-from-19-september-web.webp",
      "https://img-prd-pim.poorvika.com/pageimg/Apple-Airpods-Pro-3-pre-order-now-available-from-19-september.webp",
      "https://img-prd-pim.poorvika.com/pageimg/OPPO-F31-Pro-and-F13-Pro-Plus-5G-phones-pre-book-now-web.webp",
      "https://img-prd-pim.poorvika.com/pageimg/Realme-15T-Web-banner2-New.webp",
      "https://img-prd-pim.poorvika.com/pageimg/Samsung-Galaxy-A17-5G-FInd-anything-instantly-W.webp",
      "https://img-prd-pim.poorvika.com/pageimg/Samsung-Galaxy-Z-Fold-7-Galaxy-AI-own-now-at-4862-month-W.webp",
      "https://img-prd-pim.poorvika.com/pageimg/Samsung-Galaxy-Z-Flip-7-FE-Galaxy-AI-own-now-at-2500-month-W.webp",
      "https://img-prd-pim.poorvika.com/pageimg/Trusted-By-Millions-Powered-By-Lenovo.webp",
      "https://img-prd-pim.poorvika.com/pageimg/Samsung-tab-web-banner-2025.webp",
      "https://img-prd-pim.poorvika.com/pageimg/Sony-PlayStation-5-Slim-1900x400.webp",
       
    ];

  return (
    <div className="w-full h-full">
      <div className="w-full h-[30vh]  flex items-center justify-center my-4 gap-x-1.5">
        <div className="w-[33%] bg-yellow-300">
          <img src="https://img-prd-pim.poorvika.com/pageimg/samsung-galaxy-z-fold-series-web-1.webp" />
        </div>
        <div className="w-[33%] bg-green-400">
          <img src="https://img-prd-pim.poorvika.com/pageimg/google-pixel-10-web1.webp" />
        </div>
        <div className="w-[33%] bg-blue-700">
          <img src="https://img-prd-pim.poorvika.com/pageimg/samsung-galaxy-z-flip-web1.webp" />
        </div>
      </div>
      <div className="w-full h-full mt-5">
        <Slider {...settings}>
          {images.map((i) => (
            <div>
              <img src={i} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

