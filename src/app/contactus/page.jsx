import React from "react";
import Contactform from "../_components/Contact/Contactform";
import Contact1 from "../_components/Contact/Contact1";
import ContactMAps from "../_components/Contact/ContactMAps";
import Contact2 from "../_components/Contact/Contact2";
import Footer from "../_components/Footer/Footer";

function page() {
  return (
    <div className="w-screen flex flex-col ">
      <div className="w-full pt-24 flex p-10 gap-10  bg-gradient-to-b from-black  via-black to-teal-950">
        <div className="w-1/2 bg-[rgba(0,0,0,0.5)] rounded-lg overflow-hidden ">
          <ContactMAps />
        </div>
        <div className="w-1/2 h-fit">
          <Contactform />
        </div>
      </div>
      <Contact1 />
      <Contact2 />
      <div className="w-full h-2 bg-black"></div>

      <Footer />
    </div>
  );
}

export default page;
