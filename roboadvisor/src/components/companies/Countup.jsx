// import React from 'react'
import CountUp from "react-countup";

export const Countup = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-[90%] md:w-[60%] flex justify-evenly md:justify-between">
        {countData.map((item, index) => (
            <CountUp start={0} end={item.end} delay={0} duration={8} className="flex" key={index}>
              {({ countUpRef }) => (
                <div className="text-center">
                  <span ref={countUpRef} className="text-lg md:text-4xl font-bold" />{" "}
                  <span className="text-sm md:text-2xl text-gray-500">{item.sign}</span>
                  <h2 className="text-xs md:text-sm">{item.name}</h2>
                </div>
              )}
            </CountUp>
        ))}
      </div>
    </div>
  );
};

const countData = [
  {
    end: 542,
    name:"trusted client",
    sign:"k",
  },
  {
    end: 500,
    name:"in asset managed",
    sign:"M",
  },
  {
    end: 12,
    name:"active users",
    sign:"M",
  },
  {
    end: 700,
    name:"fund raised",
    sign:"B",
  },
];
