import React from "react";
import Image from "next/image";
import Explore from "@/assets/Explore.png";
import Evaluate from "@/assets/Execute1.png";
import Execute from "@/assets/Execute.png";
import Extend from "@/assets/Extend.png";
const data = [
  {
    title: "Explore",
    des: "Identify, prioritize, and curate data engineering use cases.",
    src: Explore,
  },
  {
    title: "Evaluate",
    des: "Conduct thorough due diligence to maximize impact.",
    src: Evaluate,
  },
  {
    title: "Execute",
    des: "Develop solutions using Token AI Labs' expertise.",
    src: Execute,
  },
  {
    title: "Extend",
    des: "Provide ongoing support towards achieving success.",
    src: Extend,
  },
];

function Hero3() {
  return (
    <div className="w-full h-fit  text-center p-2 sm:p-4 md:p-10  text-slate-50 bg-[rgba(0,0,0,0.9)] ">
      <div className="flex flex-1 flex-col rounded-xl p-2 sm:p-4 md:p-10 md:pb- bg-gradient-to-r from-zinc-900 via-teal-900 to-zinc-900">
        <div className="w-full flex flex-col justify-center items-center gap-2">
          <h6 class="mt-5 poppins-medium relative">
            <span class="before:content[''] before:h-0.5 before:w-20 before:bg-white before:translate-y-1/2 before:absolute before:top-1/2 before:right-[100%] before:mr-2 "></span>
            <span> How We Do It</span>
            <span class="after:content[''] after:h-0.5 after:w-20 after:bg-white after:-translate-y-1/2 after:absolute after:left-[100%] after:top-1/2 after:ml-2"></span>
          </h6>

          <h5 className="text-2xl poppins-extrabold ">4E Model</h5>
          <p className="poppins-medium mt-5">
            Our distinctive 4E Model forms the cornerstone of our strategy for
            successful AI projects, guiding us in identifying the right
            problems.
            <br />
            It empowers teams to effectively leverage data through exploration,
            execution, and evaluation.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-5 h-fit my-5 poppins-semibold">
          {data.map((item, index) => (
            <div
              key={index}
              className="col-span-3 bg-[rgba(255,255,255,0.1)] p-2 rounded-lg hover:invert hover:bg-black flex flex-col justify-center items-center">
              <Image src={item.src} width={100} height={80} alt={item.title} />
              <h3 className="text-2xl mt-5">{item.title}</h3>
              <p className="poppins-medium text-sm mt-2">{item.des}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero3;
