import React from "react";
import Navbar from "./Navbar";
import SimpleSlider from "./Slider1";
import Slider2 from "./Slider2";
import Category from "./Category";
import CoolSummer from "./CoolSummer";
import MobilesAcc from "./MobilesAcc";
import Mobile from "./Mobile";
import TvAudio from "./TvAudio";
import Laptop from "./LaptopBan";
import LaptopBan from "./LaptopBan";
import PcLaptop from "./PcLaptop";
import Tv from "./Tv";
import KitchenAppliances from "./KitchenAppliances";
import Kitchen from "./Kitchen";
import HomeAppliances from "./HomeAppliances";
import Trending from "./Trending";







function Home() {
  return (
    <>
    <SimpleSlider/>
    <Slider2/>
    <Category/>
    <CoolSummer/>
    <MobilesAcc/>
    <Mobile/>
    <LaptopBan/>
    <PcLaptop/>
    <TvAudio/>
    <Tv/>
    <KitchenAppliances/>
    <Kitchen/>
    <HomeAppliances/>
    <Trending/>
    </>
  );
}

export default Home;
