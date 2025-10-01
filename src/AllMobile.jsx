import React, { useState } from "react";
import { product_list } from "./Mock/MobileData";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Slider from "@mui/material/Slider";
import Collapse from "@mui/material/Collapse";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

function valuetext(value) {
  return `${value}°C`;
}

const minDistance = 10;

function AllMobile() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const [open8, setOpen8] = useState(false);
  const [open9, setOpen9] = useState(false);
  const [open10, setOpen10] = useState(false);
  const [open11, setOpen11] = useState(false);
  const [open12, setOpen12] = useState(false);
  const [open13, setOpen13] = useState(false);

  const [value1, setValue1] = React.useState([200, 300]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  const navigate = useNavigate();
  return (
    <div className="w-full h-full flex py-5">
      <div className="w-[20%] flex flex-col items-center ">
        <div className="w-[90%] text-[15px] font-semibold bg-white border border-gray-400">
          <h1 className="bg-white border border-gray-200 py-1 font-bold pl-2">
            Filter
          </h1>
          <Slider
            getAriaLabel={() => "Minimum distance"}
            value={value1}
            min={1000}
            max={3000}
            onChange={handleChange1}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            disableSwap
          />
          <h1
            onClick={() => setOpen1(!open1)}
            className="bg-white border border-gray-300 py-1 pl-2"
          >
            STOCK SATUS
          </h1>
          <Collapse in={open1}>
            <div>
              <p>In stock</p>
              <p>out of stock</p>
            </div>
          </Collapse>
          <div>
            <h1
              onClick={() => setOpen2(!open2)}
              className="bg-white border border-gray-300 py-1 pl-2"
            >
              RATING
            </h1>
            <Collapse in={open2}>
              <Stack spacing={1}>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                <Rating
                  name="half-rating-read"
                  defaultValue={2.5}
                  precision={0.5}
                  readOnly
                />
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                <Rating
                  name="half-rating-read"
                  defaultValue={2.5}
                  precision={0.5}
                  readOnly
                />
              </Stack>
            </Collapse>
            <h1
              onClick={() => setOpen3(!open3)}
              className="bg-white border border-gray-300 py-1 pl-2"
            >
              PRICE RANGE
            </h1>
            <Collapse in={open3}>
              <p>
                ₹ 5,000 and below
                <br />
                ₹ 5,000 to ₹ 9,999
                <br />
                ₹ 10,000 to ₹ 14,999
                <br />
                ₹ 15,000 to ₹ 29,999
                <br />₹ 30,000 and above
              </p>
            </Collapse>

            <h1
              onClick={() => setOpen4(!open4)}
              className="bg-white border border-gray-300 py-1 pl-2"
            >
              DISCOUNT
            </h1>
            <Collapse in={open4}>
              <p>
                10% and below (134)
                <br />
                10% or more (240)
                <br />
                20% or more (81)
                <br />
                30% or more (5)
              </p>
            </Collapse>
            <h1
              onClick={() => setOpen5(!open5)}
              className="bg-white border border-gray-300 pt-1 pl-2"
            >
              BRAND
            </h1>
            <Collapse in={open5}>
            </Collapse>
            <h1 onClick={() => setOpen6(!open6)} className="bg-white border border-gray-300 pt-1 pl-2">RAM</h1>
            <Collapse in={open6}>
            </Collapse>
            <h1 onClick={() => setOpen7(!open7)} className="bg-white border border-gray-300 pt-1 pl-2">
              INTERNAL STORAGE
            </h1>
            <Collapse in={open7}></Collapse>
            <h1 onClick={() => setOpen8(!open8)} className="bg-white border border-gray-300 pt-1 pl-2">
              DISPLAY TECHNOLOGY
            </h1>
            <Collapse in={open8}></Collapse>
            <h1 onClick={() => setOpen9(!open9)} className="bg-white border border-gray-300 pt-1 pl-2">
              FEATURES
            </h1>
            <Collapse in={open9}></Collapse>
            <h1
              onClick={() => setOpen10(!open10)}
              className="bg-white border border-gray-300 pt-1 pl-2"
            >
              PRIMARY CAMERA
            </h1>
            <Collapse in={open10}>
              <div>Primary camera options</div>
            </Collapse>

            <h1
              onClick={() => setOpen11(!open11)}
              className="bg-white border border-gray-300 pt-1 pl-2"
            >
              SECONDARY CAMERA
            </h1>
            <Collapse in={open11}>
              <div>Secondary camera options</div>
            </Collapse>

            <h1
              onClick={() => setOpen12(!open12)}
              className="bg-white border border-gray-300 pt-1 pl-2"
            >
              PROCESSOR BRAND
            </h1>
            <Collapse in={open12}>
              <div>Processor brand options</div>
            </Collapse>

            <h1
              onClick={() => setOpen13(!open13)}
              className="bg-white border border-gray-300 pt-1 pl-2"
            >
              NUMBER OF CORES
            </h1>
            <Collapse in={open13}>
              <div>Core count options</div>
            </Collapse>
            <div className="flex items-center justify-center py-5">
              <button className="bg-gradient-to-b from-orange-300 to-orange-600 text-white font-semibold py-2 px-6 rounded-md shadow-md hover:brightness-105 transition duration-300">
                Show More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[80%] h-full flex flex-wrap items-center justify-center gap-3">
        {product_list.map((i) => (
          <div className="w-[23%] h-[30%] bg-white border border-gray-300 flex flex-col items-center justify-center py-5 space-y-5 shadow-2xl  hover:scale-110 duration-700 rounded ">
            <img
              onClick={() =>
                navigate(`/product-detail/${i?.slug}`, { state: i })
              }
              src={i.image}
              className="h-[20vh]"
            />
            <h1 className="line-clamp-1 text-xs font-bold px-2">
              {i.variant_name}
            </h1>
            <p className="text-[12px] text-gray-400">
              ({i.color_variant_name},{i.other_variant_name},
              {i.storage_variant_name})
            </p>
            <div className="w-full px-5 flex items-center justify-between">
              <h1 className="text-orange-600">₹ {i?.price}</h1>
              <p>19% off</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllMobile;
