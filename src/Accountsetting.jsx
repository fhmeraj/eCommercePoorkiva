import React, { Children, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Accountsetting({children}) {
  const [openAccount, setOpenAccount] = useState(false);
  const [openOrders, setOpenOrders] = useState(false);

  const navigate=useNavigate()

  const location=useLocation()

  console.log(location.pathname,"ssg")

  return (
    <div className="w-full h-screen">
      {/* Top bar */}
      <div className="h-[10vh] 0"></div>

      {/* Main layout */}
      <div className="w-full h-[90vh] flex">
        {/* Sidebar */}
        <div className="w-[25%] h-full  p-4 space-y-8">
          {/* Account Settings Section */}
          <div className="relative pl-16">
            <button
              onClick={() => {
                setOpenAccount(!openAccount);
                setOpenOrders(false); // Close My Orders
              }}
              className="px-10 py-1 bg-white text-black rounded hover:bg-gray-300 transition duration-200"
            >
              <h1>Account Settings</h1>
            </button>

            <div
              className={`absolute mt-2 w-52 bg-white border border-gray-200 rounded shadow-lg z-10 transform transition-all duration-300 ease-out ${
                openAccount
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
              }`}
            >
              <ul className="py-2 text-sm ">

                <li onClick={()=>navigate("/Setting")} className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${location.pathname==="/Setting" ? "text-red-500":""}  `}>Edit Account Info</li>

                <li onClick={()=>navigate("/setting/change-password")} className={`px-4 py-2 hover:bg-gray-100 cursor-pointer   ${location.pathname=="/setting/change-password" ? "text-red-500":""}`}>Change Password</li>
                
                <li onClick={()=>navigate("/setting/address-book")} className={`px-4 py-2 hover:bg-gray-100 cursor-pointer   ${location.pathname=="/setting/address-book" ? "text-red-500":""}`}>Address Book</li>

                <li onClick={()=>navigate("/setting/wish-list")} className={`px-4 py-2 hover:bg-gray-100 cursor-pointer   ${location.pathname=="/setting/wish-list" ? "text-red-500":""}`}>Wishlist</li>

                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer ">Deactivate Account</li>
              </ul>
            </div>
          </div>

          {/* My Orders Section */}
          <div className="relative pl-16">
            <button
              onClick={() => {
                setOpenOrders(!openOrders);
                setOpenAccount(false); // Close Account Settings
              }}
              className="px-16 py-1 bg-white text-black rounded hover:bg-gray-300 transition duration-200"
            >
              <h1>My Orders</h1>
            </button>

            <div
              className={`absolute mt-0 w-52 bg-white border border-gray-200 rounded shadow-lg z-5 transform transition-all duration-300 ease-out ${
                openOrders
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
              }`}
            >
              <ul className="py-2 text-sm text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Current Orders</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Order History</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Track Shipment</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Return Requests</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Invoices</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Content area */}
        <div className="w-[75%] h-full  text-red-600 flex items-center justify-center">
         
         {children}
        </div>
      </div>
    </div>
  );
}