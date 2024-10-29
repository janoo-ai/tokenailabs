"use client";
import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaEnvelopeOpenText } from "react-icons/fa6";

function ContactForm() {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formValue.name) newErrors.name = "Name is required";
    if (!formValue.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValue.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formValue.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log(formValue); // Handle form submission here
      // Optionally reset the form
      setFormValue({ name: "", email: "", message: "" });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="w-full flex flex-col bg-[rgba(255,255,255,0.1)] p-5 rounded-lg text-slate-50">
      <h1 className="text-4xl poppins-extrabold mt-5">Contact</h1>
      <h2 className="text-4xl poppins-semibold">Get in touch</h2>
      <h6 className="mt-1 tracking-widest poppins-extralight text-base">
        LEAVE US A MESSAGE
      </h6>
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col ease-linear duration-900">
        <div className="flex gap-2 mt-3">
          <div className="flex flex-col w-1/2 ">
            <span className="poppins-bold">Name</span>
            <div className="w-full flex relative mt-2 text-teal-950">
              <FaRegUser className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6 " />
              <input
                type="text"
                name="name"
                value={formValue.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
                className="p-2 border border-1 rounded border-solid border-slate-950 w-full px-10"
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>
          </div>
          <div className="flex flex-col w-1/2">
            <span className="poppins-bold">Email</span>
            <div className="w-full flex relative mt-2 text-teal-950">
              <HiOutlineMailOpen className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6 " />
              <input
                type="email"
                name="email"
                value={formValue.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
                className="p-2 border border-1 rounded border-solid border-slate-950 w-full px-10"
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col mt-3">
          <span className="poppins-bold">Message</span>
          <div className="w-full flex relative mt-2 text-teal-950">
            <FaEnvelopeOpenText className="absolute left-2 top-2 w-6 h-6 " />
            <textarea
              name="message"
              value={formValue.message}
              rows={5}
              onChange={handleChange}
              placeholder="Enter Your Message"
              className="p-2 border border-1 rounded border-solid border-slate-950 w-full px-10"
            />
          </div>
          {errors.message && <p className="text-red-500">{errors.message}</p>}
        </div>
        <div className="my-5 rounded-full bg-gradient-to-r from-amber-300 to-yellow-800 w-fit border border-2 border-slate-50 border-solid hover:scale-105">
          <button
            type="submit"
            className="w-full px-10 py-3 font-bold text-slate-950">
            SEND MESSAGE
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
