import React from "react";
import { RiRobot3Line } from "react-icons/ri";

function Hero4() {
  return (
    <div className="w-full  bg-[rgba(0,0,0,0.9)] p-3 md:p-10 md:px-20 md:pt-0 poppins-normal">
      <div className="w-full flex flex-col p-3 sm:p-5 md:p-8 pb-5 bg-[rgba(255,255,255,0.9)]  rounded ">
        <h3 className="text-center poppins-semibold text-2xl">
          AI Services We Offer
        </h3>
        <div className="w-full grid grid-cols-12 mt-5 md:mt-10 ">
          <div className="col-span-12 flex flex-col bg-black group text-slate-100 p-5 rounded-xl">
            <div className="flex flex-col gap-2">
              <RiRobot3Line className="w-12 h-12 group-hover:fill-pink-500" />
              <span className="poppins-semibold">CHAT BOTS</span>
            </div>
            <div className="w-full  poppins-light text-sm mt-3 flex flex-col justify-center items-end">
              <div className="w-full h-0.5 bg-white mb-3 rounded-full"></div>
              <p className="group-hover:text-pink-400 text-left w-full">
                Understand user attitude, requirements, and emotions using AI
                techniques such as computational linguistics and natural
                language processing.
              </p>
              <a
                href="https://jaano.ai"
                target="_blank"
                rel="noopener noreferrer"
                className=" mt-2 p-2 px-5 border border-1 border-solid
                border-pink-400 rounded-full hover:invert hover:bg-black">
                {" "}
                Know more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero4;
