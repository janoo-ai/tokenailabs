import React from "react";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";

function Contact2() {
  return (
    <div className=" w-screen h-fit p-10 bg-[rgba(0,0,0,0.9)] ">
      <div className="p-10 rounded-xl flex bg-black gap-20">
        <div className="text-slate-50 flex flex-col justify-center">
          <h3 className="text-4xl poppins-semibold">Subscribe</h3>
          <h6 className="text-xl poppins-medium">TO OUR NEWSLETTER</h6>
        </div>
        <div className=" flex-1 px-10 py-3 rounded-xl bg-[rgba(255,255,255,0.1)]">
          <div className="text-slate-50 flex gap-5">
            <div className="w-1/2 flex flex-col">
              <span className="poppins-extrabold tracking-wider	">Name</span>
              <div className="flex relative text-teal-950 mt-2 ">
                <FaRegUser className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6" />
                <input
                  name="name"
                  placeholder="Enter Your Name"
                  className="w-full rounded-xl p-5 pl-10"
                />
              </div>
            </div>
            <div className="w-1/2 flex flex-col">
              <span className="poppins-extrabold tracking-wider	">Email</span>
              <div className="flex relative text-teal-950 mt-2  ">
                <HiOutlineMailOpen className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6" />
                <input
                  name="email"
                  placeholder="Enter Your Email"
                  className="w-full rounded-xl p-5 pl-10"
                />
              </div>
            </div>
          </div>
          <div className="w-fit px-10 py-3 rounded-full border border-2 border-teal-500 mt-5 bg-[rgba(255,255,255,0.1)] text-white hover:invert hover:bg-black poppins-semibold ">
            SUBSCRIBE NEWSLETTER
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact2;
