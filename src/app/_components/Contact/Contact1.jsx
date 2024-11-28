import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { HiOutlineMailOpen } from "react-icons/hi";

function Contact1() {
  return (
    <div className="w-full h-full text-slate-400">
      <div className="flex  h-full  flex-col p-2 md:p-10 bg-[rgba(255,255,255,0.1)] rounded-xl gap-1">
        {/* <h3 className="text-3xl">Quick.</h3> */}
        <h3 className="text-3xl">Support </h3>
        {/* <h6 className="text-sm mt-3">
          YOU CAN GET ALL THE CONTACT INFORMATION
        </h6> */}
        <div className="w-full grid grid-cols-12 gap-4 mt-10">
          <div className="col-span-12 md:col-span-12 flex p-5 rounded-xl bg-black text-slate-50 flex-col gap-2 hover:invert">
            <h5 className="font-bold ">Visit us</h5>
            <div className="flex gap-2 items-center">
              <FaLocationDot className="w-5 h-5" />
              <p className="w-full flex flex-col  text-sm justify-center">
                409 Krushal Comm. Complex, Above Westside, G M Road, Chembur,
                Mumbai 400089. India
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-12  flex  p-5 rounded-xl bg-black flex-col text-slate-50 gap-1 hover:invert">
            <h5 className="font-bold ">Contact us</h5>
            <ul className=" flex flex-col justify-center">
              <li className="flex gap-2 hover:underline">
                <IoCallSharp className="w-5 h-5 items-center" />
                +91 22 67978289
              </li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-12 flex  p-5 rounded-xl bg-black text-slate-50 flex-col gap-2 hover:invert">
            <h5 className="font-bold ">Email us</h5>
            <div className="flex gap-2">
              <HiOutlineMailOpen className="w-6 h-6 items-center" />
              <a
                href="mailto:support@tokenailabs.com"
                className="w-full flex flex-col  justify-center hover:underline">
                support@tokenailabs.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact1;
