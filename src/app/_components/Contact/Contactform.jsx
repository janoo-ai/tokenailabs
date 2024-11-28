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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch("/api/sendEmail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            to: formValue.email,
            subject: "Thank you for connecting with us",
            text: formValue.E,
            name: formValue.name,
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

      setFormValue({ name: "", email: "", message: "" });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-[rgba(255,255,255,0.1)] p-5 rounded-lg text-slate-50">
      <h1 className="text-4xl poppins-extrabold mt-5">Contact</h1>

      <h6 className="mt-1 tracking-widest poppins-extralight text-base">
        LEAVE US A MESSAGE
      </h6>
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col ease-linear duration-900">
        <div className="flex flex-col md:flex-row gap-2 mt-3">
          <div className="flex flex-col w-full md:w-1/2 ">
            <span className="poppins-bold">Name</span>
            <div className="w-full flex  relative mt-2 text-teal-950">
              <FaRegUser className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6 " />
              <input
                type="text"
                name="name"
                value={formValue.name}
                onChange={handleChange}
                placeholder="Name"
                className="p-2 border border-1 rounded border-solid border-slate-950 w-full pl-10"
              />
            </div>
            {errors.name && <p className="text-red-500 mt-1">{errors.name}</p>}
          </div>
          <div className="flex flex-col w-full md:w-1/2">
            <span className="poppins-bold">Email</span>
            <div className="w-full flex relative mt-2 text-teal-950">
              <HiOutlineMailOpen className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6 " />
              <input
                type="email"
                name="email"
                value={formValue.email}
                onChange={handleChange}
                placeholder="Email"
                className="p-2 border border-1 rounded border-solid border-slate-950 w-full px-10"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 w-full mt-1">{errors.email}</p>
            )}
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
              placeholder="Message"
              className="p-2 border border-1 rounded border-solid border-slate-950 w-full px-10"
            />
          </div>
          {errors.message && (
            <p className="text-red-500 mt-1">{errors.message}</p>
          )}
        </div>
        <div className="my-2 mt-5 md:my-5 rounded-full bg-gradient-to-r from-amber-300 to-yellow-800 w-full md:w-fit border border-2 border-slate-50 border-solid hover:scale-105 flex items-end justify-end">
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
