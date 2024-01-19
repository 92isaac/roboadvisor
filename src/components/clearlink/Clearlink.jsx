import { phonevideo } from "../../assets/video";
import { VideoPlayer } from "./VideoPlayer";

export const Clearlink = () => {
  return (
    
    <div className="wcl-container w-full md:pt-[100px] md:pb-[50px] md:px-[97px] px-5 h-max relative">
      <div className="whyCLHeader-container pb-[50px]">
        <div className="whyCLSubheading text-blue-700 text-sm font-bold">
          The ClearLink Advantage
        </div>
        <div className="whyCLHeader text-gray-800 text-[40px] my-4 mx-0 -tracking-[0.96px] ">
          Why choose ClearLink?
        </div>
        <div className="whyCLHeaderSub text-[17px] font-normal leading-8 ">
          In a world where connection is everything, ClearLink takes the lead.
          Our
          <br /> cutting-edge video conferencing app offers:
        </div>
      </div>
      <div className="whyCLBody h-[400px] w-full justify-between lg:flex items-center ">
        <div className="whyCLConten-container lg:w-[58%] h-full gap-[10px] flex flex-col ">
          <div className="whyCLContent-top flex w-full h-1/2 gap-[10px] ">
            <div className="whyCLcontent w-[48%] h-1/2 px-0 py-[10px] ">
              <div className="whyCLcontent-icon w-[40px] h-[40px] rounded-full border border-gray-200 bg-gray-50 flex justify-center items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="22"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M22 9.43137C22 8.82555 22 8.52265 21.8802 8.38238C21.7763 8.26068 21.6203 8.19609 21.4608 8.20865C21.2769 8.22312 21.0627 8.43731 20.6343 8.86569L17 12.5L20.6343 16.1343C21.0627 16.5627 21.2769 16.7769 21.4608 16.7914C21.6203 16.8039 21.7763 16.7393 21.8802 16.6176C22 16.4774 22 16.1744 22 15.5686V9.43137Z"
                    stroke="#175CD3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 10.3C2 8.61984 2 7.77976 2.32698 7.13803C2.6146 6.57354 3.07354 6.1146 3.63803 5.82698C4.27976 5.5 5.11984 5.5 6.8 5.5H12.2C13.8802 5.5 14.7202 5.5 15.362 5.82698C15.9265 6.1146 16.3854 6.57354 16.673 7.13803C17 7.77976 17 8.61984 17 10.3V14.7C17 16.3802 17 17.2202 16.673 17.862C16.3854 18.4265 15.9265 18.8854 15.362 19.173C14.7202 19.5 13.8802 19.5 12.2 19.5H6.8C5.11984 19.5 4.27976 19.5 3.63803 19.173C3.07354 18.8854 2.6146 18.4265 2.32698 17.862C2 17.2202 2 16.3802 2 14.7V10.3Z"
                    stroke="#175CD3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="whyCLcontent-title mt-[10px] text-gray-900 text-[1rem] font-[500] leading-8 ">
                Crystal-clear HD video
              </div>
              <div className="whyCLcontent-subtitle mt-[10px] text-gray-600 text-[0.8rem] font-normal leading-5">
                No more pixelation or blurriness – just stunning, lifelike
                clarity that brings your team closer in meetings.
              </div>
            </div>
            <div className="whyCLcontent w-[48%] h-1/2 px-0 py-[10px]">
              <div className="whyCLcontent-icon w-[40px] h-[40px] rounded-full border border-gray-200 bg-gray-50 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="22"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M3 10.5L3 14.5M7.5 6.5L7.5 18.5M12 3.5V21.5M16.5 6.5V18.5M21 10.5V14.5"
                    stroke="#175CD3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="whyCLcontent-title mt-[10px] text-gray-900 text-[1rem] font-[500] leading-8">
                Noise-canceling audio
              </div>
              <div className="whyCLcontent-subtitle mt-[10px] text-gray-600 text-[0.8rem] font-normal leading-5">
                Say goodbye to distractions with our advanced audio tech for
                crisp, interruption-free conversations.
              </div>
            </div>
          </div>
          <div className="whyCLContent-bottom flex w-full h-1/2 gap-[10px] ">
            <div className="whyCLcontent w-[48%] h-1/2 px-0 py-[10px]">
              <div className="whyCLcontent-icon w-[40px] h-[40px] rounded-full border border-gray-200 bg-gray-50 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="22"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M21 10.5H3M16 2.5V6.5M8 2.5V6.5M7.8 22.5H16.2C17.8802 22.5 18.7202 22.5 19.362 22.173C19.9265 21.8854 20.3854 21.4265 20.673 20.862C21 20.2202 21 19.3802 21 17.7V9.3C21 7.61984 21 6.77976 20.673 6.13803C20.3854 5.57354 19.9265 5.1146 19.362 4.82698C18.7202 4.5 17.8802 4.5 16.2 4.5H7.8C6.11984 4.5 5.27976 4.5 4.63803 4.82698C4.07354 5.1146 3.6146 5.57354 3.32698 6.13803C3 6.77976 3 7.61984 3 9.3V17.7C3 19.3802 3 20.2202 3.32698 20.862C3.6146 21.4265 4.07354 21.8854 4.63803 22.173C5.27976 22.5 6.11984 22.5 7.8 22.5Z"
                    stroke="#175CD3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="whyCLcontent-title mt-[10px] text-gray-900 text-[1rem] font-[500] leading-8">
                Scheduling made easy
              </div>
              <div className="whyCLcontent-subtitle mt-[10px] text-gray-600 text-[0.8rem] font-normal leading-5">
                Streamline your agenda with ClearLink&apos;s intuitive
                scheduling. Set up meetings, send invitations, and receive
                reminders in one place.
              </div>
            </div>
            <div className="whyCLcontent w-[48%] h-1/2 px-0 py-[10px]">
              <div className="whyCLcontent-icon w-[40px] h-[40px] rounded-full border border-gray-200 bg-gray-50 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="22"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M7 10.5V8.5C7 5.73858 9.23858 3.5 12 3.5C13.6358 3.5 15.0882 4.28555 16.0004 5.5M12 14.5V16.5M19 15.5C19 19.366 15.866 22.5 12 22.5C8.13401 22.5 5 19.366 5 15.5C5 11.634 8.13401 8.5 12 8.5C15.866 8.5 19 11.634 19 15.5Z"
                    stroke="#175CD3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="whyCLcontent-title mt-[10px] text-gray-900 text-[1rem] font-[500] leading-8">
                Bank-grade security
              </div>
              <div className="whyCLcontent-subtitle mt-[10px] text-gray-600 text-[0.8rem] font-normal leading-5">
                Your privacy is our priority with bank-grade security protocols
                safeguarding your meetings and data from unwanted intruders.
              </div>
            </div>
          </div>
        </div>
        <div className="whyCLImage md:w-[40%] h-full md:mt-0 mt-5">
          <VideoPlayer src={phonevideo} autoPlay={true} muted loop />
        </div>
      </div>
    </div>
  );
};
