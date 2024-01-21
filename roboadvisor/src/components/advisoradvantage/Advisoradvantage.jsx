import { phonevideo } from "../../assets/video";
import { VideoPlayer } from "./VideoPlayer";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { GiModernCity } from "react-icons/gi";
import { GrUserExpert } from "react-icons/gr";
import { MdSmartButton } from "react-icons/md";

export const Advisoradvantage = () => {
  return (
    
    <div className="w-full md:pt-[100px] md:pb-[50px] md:px-[97px] px-5 h-max relative">
      <div className="pb-[10px] md:pb-[50px] pt-5 md:pt-0">
        <div className="text-blue-700 text-sm font-bold">
          The RoboAdvisor Advantage
        </div>
        <div className="text-gray-800 font-[500] text-2xl md:text-[2.5rem] my-2 md:my-4 mx-0 -tracking-[0.96px] ">
          Why choose RoboAdvisor?
        </div>
        <div className="text-[14px] md:text-[17px] font-normal md:leading-8 ">
          In a world where connection is everything, RoboAdvisor takes the lead.
          Our
          <br className="hidden md:block"/> cutting-edge video trading app offers:
        </div>
      </div>
      <div className=" h-[400px] w-full justify-between lg:flex items-center ">
        <div className="lg:w-[58%] h-full gap-[10px] flex flex-col ">
          <div className="flex w-full h-1/2 gap-[10px] ">
            <div className="w-[48%] h-1/2 px-0 py-[10px] ">
              <div className="w-[40px] h-[40px] rounded-full border border-gray-200 bg-gray-50 flex justify-center items-center ">
              <VscWorkspaceTrusted className="text-[#175CD3]" />
              </div>
              <div className="mt-[10px] text-gray-900 text-[1rem] font-[500] leading-8 ">
              Reliable and diversified
              </div>
              <div className="mt-[10px] text-gray-600 text-[0.8rem] font-normal leading-5">
              Your money is invested in a wide range of asset classes across the market. It&apos;s a time-tested way to help maximize returns while minimizing risk.
              </div>
            </div>
            <div className="w-[48%] h-1/2 px-0 py-[10px]">
              <div className="w-[40px] h-[40px] rounded-full border border-gray-200 bg-gray-50 flex justify-center items-center">
              <GiModernCity className="text-[#175CD3]"/>
              </div>
              <div className="mt-[10px] text-gray-900 text-[1rem] font-[500] leading-8">
              Made for modern investors
              </div>
              <div className="mt-[10px] text-gray-600 text-[0.8rem] font-normal leading-5">
              Get access to rare, innovative investing opportunities without high fees. Enjoy intuitive tech and get human help along the way.
              </div>
            </div>
          </div>
          <div className="flex w-full h-1/2 gap-[10px] mt-7 md:mt-0">
            <div className=" w-[48%] h-1/2 px-0 pb-20 md:pb-[10px] pt-[10px]">
              <div className=" w-[40px] h-[40px] rounded-full border border-gray-200 bg-gray-50 flex justify-center items-center">
              <GrUserExpert className="text-[#175CD3]"/>
              </div>
              <div className=" mt-[10px] text-gray-900 text-[1rem] font-[500] leading-8">
              Supported by experts
              </div>
              <div className=" mt-[10px] text-gray-600 text-[0.8rem] font-normal leading-5">
              Our in-house investment team will customize a portfolio to suit your risk tolerance and goals. They keep a close eye on market trends and opportunities, so you don’t have to.
              </div>
            </div>
            <div className=" w-[48%] h-1/2 px-0 pb-20 md:pb-[10px] pt-[10px]">
              <div className=" w-[40px] h-[40px] rounded-full border border-gray-200 bg-gray-50 flex justify-center items-center">
               <MdSmartButton className="text-[#175CD3]"/>
              </div>
              <div className=" mt-[10px] text-gray-900 text-[1rem] font-[500] leading-8">
              Smart and personalized investment.

              </div>
              <p className=" mt-[10px] text-gray-600 text-[0.8rem] font-normal leading-5">
              A few questions, and we’ll build you a personalized portfolio of low-cost index funds from up to 17 global asset classes. Software automated all the trading, and long term wealth growth.
              </p>
            </div>
          </div>
        </div>
        <div className=" md:w-[40%] h-full md:mt-0 mt-[130px]">
          <VideoPlayer src={phonevideo} autoPlay={true} muted loop />
        </div>
      </div>
    </div>
  );
};
