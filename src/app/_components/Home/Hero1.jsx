"use client";
import { CardContainer, CardItem } from "@/app/_uiComponad/3d-card";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Image from "next/image";
import ai from "@/assets/AI.png";
import React from "react";
import Link from "next/link";

function Hero1() {
  return (
    <div className="  bg-gradient-to-b from-black via-teal-950 to-gray-950">
      <div className="bg-[rgba(0,0,0,0.2)] w-full h-fit flex flex-1 flex-col md:flex-row justify-center items-center p-2 sm:p-4 md:p-10 md:px-20">
        <div className="flex flex-1 flex-col gap-1  ">
          <span className="break-word  poppins-medium  text-base text-cyan-300">
            Welcome to ...
          </span>
          <h1 className="break-word font-bol text-5xl  poppins-medium text-slate-50  mt-2 leading-tight		 ">
            Empowering Innovation with Token Ai Labs
          </h1>
          <p className="break-word  poppins-light text-slate-300 mt-5 ">
            Bringing the Future of AI to Businesses Everywhere. At TokenaiLabs,
            we harness cutting-edge artificial intelligence to drive innovation,
            optimize operations, and unlock new growth opportunities. Our
            AI-powered solutions help businesses automate processes, gain
            actionable insights from data, and stay ahead of the competition.
            Whether it&apos;s predictive analytics, real-time model deployment,
            or personalized AI-driven strategies, TokenaiLabs empowers companies
            to evolve and thrive in an AI-first world
          </p>

          <Link
            href={"/about"}
            className={`text-white text-lg hover:drop-shadow-[1px_3px_1px_#0891b2]  mt-5 hover:underline font-mono hover:font-bold flex items-center gap-1 group duration-400  ease-out	`}>
            Learn More{" "}
            <MdKeyboardDoubleArrowRight className="group-hover:translate-x-2	" />
          </Link>
        </div>
        <CardContainer containerClassName="flex flex-1   ">
          <CardItem
            translateZ="100"
            rotateX={15}
            rotateZ={-5}
            className={
              "w-full h-full hover:drop-shadow-[1px_1px_1px_#0891b2]  "
            }>
            <Image
              src={ai}
              width={"100%"}
              height={"100%"}
              crossOrigin="anonymous"
              alt="heroimahge"
            />
          </CardItem>
        </CardContainer>
      </div>
    </div>
  );
}

export default Hero1;
