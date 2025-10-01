import React from "react";
import { LuSquareArrowLeft } from "react-icons/lu";
import { LuSquareArrowRight } from "react-icons/lu";

const video = [
  "https://www.youtube.com/embed/6pKovFgZFHU?si=g2DB5B0P1rQIMC1L",
  "https://www.youtube.com/embed/EvzNDQLwCqw?si=7V9lStNg48vyXKKI",
  "https://www.youtube.com/embed/EWZqulvXnZQ?si=c9Qr4xz8kAqc7wNQ",
  "https://www.youtube.com/embed/YQLZiNaiw54?si=RgYbkB8gnSnGJ4mi"
];

function Trending() {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex items-center justify-between px-5 py-3 bg-[#F5F5F5]">
        <h1 className="text-lg font-bold text-orange-600">What's Trending</h1>
        <div className="flex items-center justify-center gap-x-2 text-[#707070]">
          <h1>See all</h1>
          <div className="flex">
            <LuSquareArrowLeft size={30} className="" />
            <LuSquareArrowRight size={30} className="" />
          </div>
        </div>
      </div>

      <div  className="  grid grid-cols-4  gap-2 w-full bg-white">
      {video.map((i) => (
        <div className="w-full h-full flex py-12 ">
          <iframe
            className="rounded-2xl h-[30vh]"
            src={i}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Trending;
