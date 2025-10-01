import React from "react";

function TvAudio() {
  const images = [
    "https://img-prd-pim.poorvika.com/pageimg/Smart-tvs-web.webp",
    "https://img-prd-pim.poorvika.com/pageimg/Entertainment-web.webp",
    "https://img-prd-pim.poorvika.com/pageimg/Audio-Device-Web.webp",
    "https://img-prd-pim.poorvika.com/pageimg/Tv-accessories-Web.webp",
  ];

  return (
    <div className="w-full h-full py-2 ">
      <div className="w-full h-[13vh] bg-white flex items-center justify-between px-10 ">
        <h1 className="text-[#F26522] font-bold text-2xl">Tv & Audio</h1>
        <div className="flex">
          <div className="border-r-1 ">
            <h1 className="hover:text-[#F26522] font-semibold mr-5">
              All categories
            </h1>
          </div>
          <div className="border-r-1 ">
            <h1 className="hover:text-[#F26522] font-semibold mr-5 ml-5">
              Tv
            </h1>
          </div>
          <div className="border-r-1 ">
            <h1 className="hover:text-[#F26522] font-semibold mr-5 ml-5">
              Audio
            </h1>
          </div>
          <div className=" ">
            <h1 className="hover:text-[#F26522] font-semibold mr-5 ml-5">
             Entertainment
            </h1>
          </div>
        </div>
      </div>
      <div className='className="w-full h-full bg-white flex '>
        <div className="w-[50%]">
          <img src="https://img-prd-pim.poorvika.com/pageimg/Experience-the-latest-in-sound-innovation.webp" />
        </div>
        <div className="w-[50%] grid grid-cols-2 gap-3 px-2">
          {images.map((i) => (
            <div class="">
              <img src={i} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TvAudio;
