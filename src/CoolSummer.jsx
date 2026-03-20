import React from "react";

function CoolSummer() {
  return (
    <section className="w-full bg-white py-4 px-4">
      <div className="mx-auto w-full max-w-full px-0 md:px-0">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <h1 className="text-[#F26522] font-bold text-2xl">Hot deals for a cool summer</h1>
          <span className="text-[#F26522] font-semibold">Summer essentials</span>
        </div>

        <div className="mt-3 grid grid-cols-1 gap-3 lg:grid-cols-[1fr_2fr_1fr]">
          <div className="grid grid-rows-2 gap-3">
            <div className="h-44 overflow-hidden rounded-xl bg-slate-100">
              <img
                className="h-full w-full object-cover"
                src="https://img-prd-pim.poorvika.com/pageimg/Macbooks-2608801.webp"
                alt="MacBook"
              />
            </div>
            <div className="h-44 overflow-hidden rounded-xl bg-slate-100">
              <img
                className="h-full w-full object-cover"
                src="https://img-prd-pim.poorvika.com/pageimg/Gaming-Laptop-2608815.webp"
                alt="Gaming Laptop"
              />
            </div>
          </div>

          <div className="h-96 overflow-hidden rounded-xl bg-slate-100">
            <img
              className="h-full w-full object-cover"
              src="https://img-prd-pim.poorvika.com/pageimg/Macbook-Air-M4-Best-Laptop.webp"
              alt="Macbook Air M4"
            />
          </div>

          <div className="grid grid-rows-2 gap-3">
            <div className="h-44 overflow-hidden rounded-xl bg-slate-100">
              <img
                className="h-full w-full object-cover"
                src="https://img-prd-pim.poorvika.com/cdn-cgi/image/width=300,height=170,quality=75/pageimg/2-in-1-laptop-w.png"
                alt="2 in 1 Laptop"
              />
            </div>
            <div className="h-44 overflow-hidden rounded-xl bg-slate-100">
              <img
                className="h-full w-full object-cover"
                src="https://img-prd-pim.poorvika.com/pageimg/Windows-Laptop-2608843.webp"
                alt="Windows Laptop"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoolSummer;
