import React from "react";
import Contactform from "../_components/Contact/Contactform";
import Contact1 from "../_components/Contact/Contact1";
// import ContactMAps from "../_components/Contact/ContactMAps";
import Contact2 from "../_components/Contact/Contact2";
import Footer from "../_components/Footer/Footer";
import { motion } from "framer-motion";

function page() {
  return (
    <div className="w-screen flex flex-col ">
      <div className="w-full pt-20 md:pt-24 flex flex-col-reverse md:flex-row p-2 md:p-10 gap-2 md:gap-10 bg-gradient-to-b from-black  via-black to-[#002147]">
        <Contact1 />
        <div className=" w-full h-fit h-full">
          <Contactform />
        </div>
      </div>
      <Contact2 />
      <div className="w-full h-1 bg-cyan-400"></div>
      <Footer />
    </div>
  );
}

export default page;
