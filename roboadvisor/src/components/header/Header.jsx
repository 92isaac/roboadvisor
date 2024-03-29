// import React from 'react'
import { TfiMenu } from "react-icons/tfi";
import { Logo } from "../utilies/Logo";
import { useEffect, useState } from "react";
import { MobileNavbar } from "./MobileNavbar";
import { FaTimes } from "react-icons/fa";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleChange = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const handleScroll = (event) => {
      if (toggle) {
        event.preventDefault();
      }
    };
    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('touchmove', handleScroll, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
    };
  }, [toggle]);

  return (
    <div>
      <div className="hidden h-full w-full absolute top-5 md:block justify-center items-center px-[85px] py-0">
        <div className="w-full rounded-full border border-gray-300 bg-gray-100 py-[0.5rem] px-[25px] flex items-center justify-between">
          <Logo />
          <div className="nav-list flex justify-between gap-10">
            <div className="nav-item flex items-center gap-10 cursor-pointer">
              <div className="nav-item-title text-gray-500 text-[15px] font-normal">
                Cash
              </div>
            </div>
            <div className="nav-item flex items-center gap-[5px] cursor-pointer">
              <div className="nav-item-title text-gray-500 text-[15px] font-normal">
                Bond
              </div>
            </div>
            <div className="nav-item flex items-center gap-2 cursor-pointer">
              <div className="nav-item-title text-gray-500 text-[15px] font-normal">
                Automated Investing
              </div>
            </div>
            <div className="nav-item flex items-center gap-2 cursor-pointer">
              <div className="nav-item-title text-gray-500 text-[15px] font-normal">
                Stocks
              </div>
            </div>
            <div className="nav-item flex items-center gap-2 cursor-pointer">
              <div className="nav-item-title text-gray-500 text-[15px] font-normal">
                Learn
              </div>
            </div>
            <div className="nav-item-title text-gray-500 text-[15px] font-normal"></div>
          </div>
          <div className="nav-button w-max flex justify-between gap-[5px]">
            <button className="talkToSales px-[20px] py-[5px] border rounded-full border-gray-400 bg-white shadow-xs cursor-pointer">
              Pricing
            </button>
            <button className="flex items-center justify-center gap-[4px] px-[20px] py-[5px] rounded-full bg-blue-700 shadow-xs text-white text-[15px] font-normal">
              Sign up for Free
            </button>
          </div>
        </div>
      </div>
      {toggle && <MobileNavbar handleChange={handleChange} />}
    <div className="flex justify-between px-5 mb-7 md:hidden ">
    <div className="pt-7">
    <Logo /> 
    </div>
     <div className="pt-7">
     {!toggle ? ( <TfiMenu
        className=" top-4 text-2xl"
        onClick={() => {
          handleChange();
        }}
      />) : (<FaTimes onClick={handleChange} className="text-2xl"/>)}
     </div>
    </div>
    </div>
  );
};

export default Header;
