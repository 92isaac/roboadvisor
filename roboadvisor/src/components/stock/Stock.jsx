import { avatar, content } from "../../assets/image";
import { IoStarOutline } from "react-icons/io5";

export const Stock = () => {
  return (
    <div className="shopify-container mt-[30rem] md:mt-5 w-full h-full md:flex items-center justify-between px-5 py-16 md:px-24 bg-gray-50">
      <div className="shopify-content md:w-1/2">
      <h3 className="text-blue-700 text-sm font-bold">
          Risk score sample
        </h3>
        <div className="star-row flex items-center gap-1.5 shopify-star mt-3">
        <IoStarOutline className="text-[#FDB022] "/>
        <IoStarOutline className="text-[#FDB022] "/>
        <IoStarOutline className="text-[#FDB022] "/>
        <IoStarOutline className="text-[#FDB022] "/>
        <IoStarOutline className="text-[#FDB022] "/>
        </div>

        <div className="shopify-header text-gray-900 md:text-3xl font-[600] md:w-[80%] tracking-[-0.2px] mt-[25px] md:mt-[40px] md:font-bold">
        Smarter investing, brilliantly personalized.
        </div>
        <p className="text-sm pt-2"> Just answer a few questions, and we’ll build you a personalized portfolio of low-cost index funds from up to 17 global asset classes. Our software handles all the trading, rebalancing, and other busywork to help grow your wealth for the long term.</p>
        <div className="shopify-review items-center justify-between pr-7 mt-16 flex">
          <div className="shopify-person-review items-center gap-2.5 flex">
            <img src={avatar} alt="" />
            <div className="shopify-text flex-col justify-evenly flex">
              <div className="shopify-text-name text-gray-900 text-sm md:text-lg font-bold">
                Sarah Thompson
              </div>
              <div className="shopify-text-title text-gray-600 text-xs md:text-sm font-normal ">
                Project Manager, Shopify
              </div>
            </div>
          </div>
          <div className="arrow gap-6 flex">
            <div className="whyCLcontent-icon rounded-full p-2 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19 12H5M5 12L12 19M5 12L12 5"
                  stroke="#175CD3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="whyCLcontent-icon rounded-full p-2 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="#175CD3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="shopify-image mt-10 md:mt-0 md:w-1/2 h-[400px] bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${content})` }}></div>
    </div>
  );
};
