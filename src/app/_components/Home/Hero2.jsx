"use client";
import Link from "next/link";
import { Suspense } from "react";

function Hero2() {
  return (
    <div className="w-full ">
      <div className="flex relative  justify-end  h-fit p-2 sm:p-4 md:p-10  bg-black">
        <div className="absolute w-full h-full  top-0 left-0 z-10 ">
          <Suspense fallback={<div>loading ...</div>}>
            <video
              id="herovideo"
              onPlay={() =>
                (document.getElementById("herovideo").playbackRate = 0.7)
              }
              loop
              autoPlay
              preload="true"
              muted
              className="w-full h-full object-cover ">
              <source src="/Hero.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Suspense>
        </div>
        <div className="flex flex-col z-20 text-white ease-out duration-900 bg-[rgba(0,0,0,0.6)]  p-4 rounded ">
          <h3 className="text-3xl poppins-bold">PUT AI TO WORK</h3>
          <h3 className="text-3xl poppins-bold text-indigo-500">FOR PEOPLE</h3>
          <p className="">
            Explore how our single, intelligent platform puts AI to work across
            <br />
            your business, freeing people for work that matters
          </p>
          <Link
            className="px-10 py-4  rounded-full border-2 border-solid border-indigo-500 w-fit mt-5 bg-black hover:scale-110"
            href={"/about"}>
            <span className="poppins-bold ">Learn More</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero2;
