"use client";
import React, { useState } from "react";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";

function Contact2() {
  const [userdetails, setuserdetails] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!userdetails.name) newErrors.name = "Name is required";
    if (!userdetails.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(userdetails.email)) {
      newErrors.email = "Invalid email address";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setuserdetails({ ...userdetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch("/api/sendNewsletter", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            to: userdetails.email,
            name: userdetails.name,
          }),
        });

        if (response.ok) {
          setStatus("Email sent successfully!");
        } else {
          setStatus("Failed to send email.");
        }
      } catch (error) {
        console.error("Error:", error);
      }

      setuserdetails({ name: "", email: "" });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };
  return (
    <div className=" w-screen h-fit p-2 md:p-10 bg-[rgba(0,0,0,0.9)] ">
      <div className="p-3 md:p-10 rounded-xl flex flex-col md:flex-row bg-black gap-5 md:gap-20">
        <div className="text-slate-50 flex flex-col justify-center">
          <h3 className="text-4xl poppins-semibold">Subscribe</h3>
          <h6 className="text-xl poppins-medium">TO OUR NEWSLETTER</h6>
        </div>
        <div className="flex-1 p-3 md:px-10 py-3 rounded-xl bg-[rgba(255,255,255,0.1)]">
          <div className="text-slate-50 flex gap-5 flex-col md:flex-row ">
            <div className="w-full md:w-1/2 flex flex-col">
              <span className="poppins-extrabold tracking-wider	">Name</span>
              <div className="flex relative text-teal-950 mt-2 ">
                <FaRegUser className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6" />
                <input
                  name="name"
                  placeholder=" Name"
                  className="w-full rounded-xl p-5 pl-10"
                  value={userdetails.name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col">
              <span className="poppins-extrabold tracking-wider	">Email</span>
              <div className="flex relative text-teal-950 mt-2  ">
                <HiOutlineMailOpen className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6" />
                <input
                  name="email"
                  placeholder=" Email"
                  className="w-full rounded-xl p-5 pl-10"
                  value={userdetails.email}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="w-full md:w-fit px-10 py-3 rounded-full border border-2 border-teal-500 mt-5 bg-[rgba(255,255,255,0.1)] text-white hover:invert hover:bg-black poppins-semibold ">
            SUBSCRIBE NEWSLETTER
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact2;
