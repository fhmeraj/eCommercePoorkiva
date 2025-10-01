import React, { useState } from "react";
import {
  IoSearchSharp,
  IoLocationSharp,
  IoPersonCircleOutline,
} from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";
import Login from "./LOGIN";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="w-full h-full sticky top-0 z-20">
      {/* Top Navigation */}
      <nav className="w-full h-[8vh] bg-[#FF5B28] flex">
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="w-[20%] h-full flex items-center justify-center p-5"
        >
          <img
            src="https://img.poorvika.com/common/Poorvika-english-logo.svg"
            alt="Poorvika Logo"
          />
        </div>

        {/* Search Bar */}
        <div className="w-[32%] relative flex items-center justify-center">
          <input
            className="w-full bg-white text-sm border rounded-2xl pl-3 pr-28 py-1"
            placeholder="Search for Products, Brands, Offers"
          />
          <button
            className="absolute right-2 flex items-center justify-center rounded-full bg-slate-800 p-1 text-white hover:bg-slate-700"
            type="button"
          >
            <IoSearchSharp />
          </button>
        </div>

        {/* Icons Section */}
        <div className="w-[48%] flex items-center justify-center">
          <div className="w-[20%] flex flex-col items-center justify-center text-xs text-white">
            <p>Delivery to</p>
            <h1 className="flex items-center font-bold">
              CENTRAL del <IoLocationSharp />
            </h1>
          </div>
          <div className="w-[20%] flex flex-col items-center justify-center text-xs text-white">
            <p>Locate</p>
            <h1 className="flex items-center font-bold">
              Stores <MdKeyboardArrowDown />
            </h1>
          </div>
          <div className="w-[20%] flex flex-col items-center justify-center text-xs text-white">
            <p>0 Items</p>
            <h1 className="flex items-center font-bold">
              ₹ 0 <TiShoppingCart />
            </h1>
          </div>
          <div className="w-[20%] flex flex-col items-center justify-center text-xs text-white">
            <p>My Account</p>

            <div class="relative inline-block group">
              <button class="text-black  px-4 py-2 rounded">
                <h1 className="flex items-center font-bold cursor-pointer">
                  Sign In <IoPersonCircleOutline />
                </h1>
              </button>
              <div
                class="absolute left-0 mt-0 w-38 bg-white border rounded shadow z-10
           invisible opacity-0 translate-y-2 scale-95
           group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100
           transition-all duration-300 ease-out
           flex flex-col"
              >
                <button
                  onClick={() => setOpen(true)}
                  class="text-left px-4 py-2 font-semibold text-black hover:bg-gray-100"
                >
                  Sign In
                </button>
                <button class="text-left px-4 py-2 font-semibold text-black hover:bg-gray-100">
                  Sign Up
                </button>
                <button 
                 onClick={()=>navigate('/Setting')}
                 class="text-left px-4 py-2 font-semibold text-black hover:bg-gray-100">
                  Account Setting
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Category Header */}
      <header className="w-full h-[9vh] bg-white rounded-b-xl shadow-2xl flex items-center justify-center text-xs space-x-8 font-bold">
        <div class="relative inline-block group">
          <button class="text-black  px-4 py-2 rounded">
            Mobiles & Accessories
          </button>
          <div
            class="absolute left-0 mt-0 w-48 bg-white border rounded shadow z-10
           invisible opacity-0 translate-y-2 scale-95
           group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100
           transition-all duration-300 ease-out
           flex flex-col"
          >
            <button class="text-left px-4 py-2 hover:bg-gray-100">
              Mobiles Computers & Tablets
            </button>
            <button class="text-left px-4 py-2 hover:bg-gray-100">
              Laptops
            </button>
            <button class="text-left px-4 py-2 hover:bg-gray-100">
              Accessories
            </button>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">nokia</h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">Samsung</h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">Lava</h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">Apple</h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">Iphone</h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">Moto</h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">lenovo</h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">Realme</h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">Xiomi</h1>
          </div>
        </div>

        <div class="relative inline-block group">
          <button class="text-black  px-4 py-2 rounded">
            Computers & Tablets
          </button>
          <div
            class="absolute left-0 mt-0 w-48 bg-white border rounded shadow z-10
           invisible opacity-0 translate-y-2 scale-95
           group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100
           transition-all duration-300 ease-out
           flex flex-col"
          >
            <button class="text-left px-4 py-2 hover:bg-gray-100">
              Mobiles
            </button>
            <button class="text-left px-4 py-2 hover:bg-gray-100">
              Laptops
            </button>
            <button class="text-left px-4 py-2 hover:bg-gray-100">
              Accessories
            </button>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">Dell</h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">HP</h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">Lenovo</h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">Apple</h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">Asus</h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">Acer</h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">MSI</h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">Samsung</h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">Microsoft</h1>
          </div>
        </div>

        <div class="relative inline-block group">
          <button class="text-black  px-4 py-2 rounded">TV & Audio</button>
          <div
            class="absolute left-0 mt-0 w-48 bg-white border rounded shadow z-10
           invisible opacity-0 translate-y-2 scale-95
           group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100
           transition-all duration-300 ease-out
           flex flex-col"
          >
            <button class="text-left px-4 py-2 hover:bg-gray-100">
              Mobiles
            </button>
            <button class="text-left px-4 py-2 hover:bg-gray-100">
              Laptops
            </button>
            <button class="text-left px-4 py-2 hover:bg-gray-100">
              Accessories
            </button>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">Sony</h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">LG</h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">Samsung</h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">Panasonic</h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">Philips</h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">Bose</h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">JBL</h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">
              Sony Bravia
            </h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">
              Harman Kardon
            </h1>
          </div>
        </div>

        <div class="relative inline-block group">
          <button class="text-black  px-4 py-2 rounded">
            Kitchen Appliances
          </button>
          <div
            class="absolute left-0 mt-0 w-48 bg-white border rounded shadow z-10
           invisible opacity-0 translate-y-2 scale-95
           group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100
           transition-all duration-300 ease-out
           flex flex-col"
          >
            <button class="text-left px-4 py-2 hover:bg-gray-100">
              Mobiles
            </button>
            <button class="text-left px-4 py-2 hover:bg-gray-100">
              Laptops
            </button>
            <button class="text-left px-4 py-2 hover:bg-gray-100">
              Accessories
            </button>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">Philips</h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">Prestige</h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">Butterfly</h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">Bosch</h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">LG</h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">Samsung</h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">Havells</h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">
              Morphy Richards
            </h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">Whirlpool</h1>
          </div>
        </div>

        <div class="relative inline-block group">
          <button class="text-black  px-4 py-2 rounded">Home Appliances</button>
          <div
            class="absolute left-0 mt-0 w-48 bg-white border rounded shadow z-10
           invisible opacity-0 translate-y-2 scale-95
           group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100
           transition-all duration-300 ease-out
           flex flex-col"
          >
            <button class="text-left px-4 py-2 hover:bg-gray-100">
              Mobiles
            </button>
            <button class="text-left px-4 py-2 hover:bg-gray-100">
              Laptops
            </button>
            <button class="text-left px-4 py-2 hover:bg-gray-100">
              Accessories
            </button>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">Whirlpool</h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">LG</h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">Samsung</h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">Bosch</h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">IFB</h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">Haier</h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">Voltas</h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">Panasonic</h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">Godrej</h1>
          </div>
        </div>

        <div class="relative inline-block group">
          <button class="text-black  px-4 py-2 rounded">
            Smart Technology
          </button>
          <div
            class="absolute left-0 mt-0 w-48 bg-white border rounded shadow z-10
           invisible opacity-0 translate-y-2 scale-95
           group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100
           transition-all duration-300 ease-out
           flex flex-col"
          >
            <button class="text-left px-4 py-2 hover:bg-gray-100">
              Mobiles
            </button>
            <button class="text-left px-4 py-2 hover:bg-gray-100">
              Laptops
            </button>
            <button class="text-left px-4 py-2 hover:bg-gray-100">
              Accessories
            </button>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">
              Google Nest
            </h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">
              Amazon Echo
            </h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">
              Apple HomeKit
            </h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">
              Samsung SmartThings
            </h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">
              TP-Link Kasa
            </h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">
              Philips Hue
            </h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">Ring</h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">Arlo</h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">Wyze</h1>
          </div>
        </div>

        <div class="relative inline-block group">
          <button class="text-black  px-4 py-2 rounded">
            Personal & Health Care
          </button>
          <div
            class="absolute left-0 mt-0 w-48 bg-white border rounded shadow z-10
           invisible opacity-0 translate-y-2 scale-95
           group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100
           transition-all duration-300 ease-out
           flex flex-col"
          >
            <button class="text-left px-4 py-2 hover:bg-gray-100">
              Mobiles
            </button>
            <button class="text-left px-4 py-2 hover:bg-gray-100">
              Laptops
            </button>
            <button class="text-left px-4 py-2 hover:bg-gray-100">
              Accessories
            </button>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">Philips</h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">Panasonic</h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">Braun</h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">Oral-B</h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">Gillette</h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">Havells</h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">Beurer</h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">Omron</h1>
            <h1 className="text-left px-4 py-2 hover:bg-gray-100">Dr. Trust</h1>
          </div>
        </div>
      </header>

      {/* Login Modal */}
      <Login open={open} setOpen={setOpen} />
    </div>
  );
}

export default Navbar;
