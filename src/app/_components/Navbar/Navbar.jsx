"use client";
import React, { useState, useEffect } from "react";
import { cn } from "../_lib/utils";
import jaano from "../../../assets/jaano.jpg";
import { Menu, ActiveMenu, MenuItem, HoveredLink, ProductItem } from "./Menu";
import { motion } from "framer-motion";
import coming from "../../../assets/coming.jpg";
import { BsMenuButtonFill } from "react-icons/bs";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { FaUsers } from "react-icons/fa6";
import { MdContacts } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

function Navbar({ className, bgColor }) {
  const [active, setActive] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const [Openav, setOpenav] = useState(false);
  const navigate = [
    { key: "Home", href: "/" },
    { key: "About", href: "/about" },
    { key: "Contact", href: "/contactus" },
    {
      key: "Product",
      submenu: [
        {
          key: "Jaano.ai",
          href: "https://jaano.ai/",
        },
      ],
    },
  ];

  const handleClick = (itemKey) => {
    // Toggle the active menu item
    setActiveItem((prev) => (prev === itemKey ? null : itemKey));
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: 50 }}
        animate={{ opacity: 1, scale: 0.9, y: 0 }}
        exit={{ opacity: 0, scale: 0.85, y: 50 }}
        transition={transition}
        className={cn(
          "fixed hidden md:block top-2 w-full md:w-9/12 shadow-md  mb-2 font-mono backdrop-blur-sm rounded-xl rounded-full shadow-[0_0_10px_rgba(0,0,0,0.8)]",
          className
        )}>
        <Menu setActive={setActive}>
          {active !== "Contact Us" && (
            <ActiveMenu active={active} setActive={setActive}>
              {active === "Services" && (
                <div className="text-sm flex flex-col sm:flex-row gap-3 md:gap-5 w-full justify-center items-center">
                  <HoveredLink href="/">Ai based Products</HoveredLink>
                  <HoveredLink href="/">Web Apps devlopment</HoveredLink>
                  <HoveredLink href="/">coming soon...</HoveredLink>
                  <HoveredLink href="/">coming soon...</HoveredLink>
                </div>
              )}
              {active === "Products" && (
                <div className="text-sm grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-5 p-2 ">
                  <ProductItem
                    title="Jaano.ai"
                    href="https://jaano.ai"
                    src={jaano}
                    description="Build your personalized AI-powered chatbot."
                  />
                  <ProductItem
                    title="coming soon..."
                    href="/"
                    src={coming}
                    description=""
                  />
                </div>
              )}
            </ActiveMenu>
          )}
          <MenuItem setActive={setActive} active={active} item="Home" />
          {/* <MenuItem setActive={setActive} active={active} item="Services" /> */}
          <MenuItem setActive={setActive} active={active} item="Products" />
          <MenuItem setActive={setActive} active={active} item="About Us" />
          <MenuItem setActive={setActive} active={active} item="Contact Us" />
        </Menu>
      </motion.div>
      <nav className="md:hidden w-screen h-fit p-2  bg-black fixed top-0 z-30">
        <div className="w-full rounded bg-[rgba(255,255,255,0.1)] flex justify-between p-2  items-center ">
          <div className="text-slate-50 poppins-medium text-lg font-bold pl-3">
            Token AI Labs
          </div>

          <div
            onClick={() => setOpenav(!Openav)}
            className="text-slate-50 p-2 rounded bg-black  w-fit ">
            <BsMenuButtonFill className="min-w-6 min-h-6" />
          </div>
        </div>
        {Openav && (
          <div
            onClick={(e) => {
              e.stopPropagation();
              setOpenav(!Openav);
            }}
            className="w-screen absolute top-0 left-0 h-[100vh] bg-[rgba(0,0,0,0.9)] flex justify-end ">
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-[350px] h-full bg-[rgba(0,0,0,0.7)] p-2 shadow-[0_5px_10px_rgba(225,225,225,0.5)] flex flex-col p-5 text-slate-400 flex flex-col justify-between z-30">
              <div className="text-center poppins-medium text-lg font-bold w-full">
                Token AI Labs{" "}
                <div className="w-full px-10 h-0.5 bg-slate-600 mt-1 rounded shadow-[0_2px_10px_rgba(225,225,225,0.5)] "></div>
                <div className="text-white mt-5 gap-2 flex flex-col text-left poppins-medium">
                  {navigate.map((item) => {
                    return (
                      <div
                        key={item.key}
                        className="hover:bg-[rgba(225,225,225,0.2)] flex rounded p-2">
                        {item.submenu ? (
                          <div className="flex gap-4 items-center flex-col w-full">
                            <div className="flex gap-4 w-full">
                              <AiFillProduct className="w-6 h-6" />
                              <button
                                className="text-white"
                                onClick={() => handleClick(item.key)} // Toggle submenu visibility on click
                              >
                                {item.key}
                              </button>
                            </div>

                            {activeItem === item.key && (
                              <div className="p-2 bg-[rgba(0,0,0,0.5)] w-full rounded-lg hover:bg-[rgba(0,0,0)] flex ">
                                {item.submenu.map((ele) => (
                                  <Link
                                    href={ele.href}
                                    key={ele.key}
                                    className="w-fit flex gap-4">
                                    <TbWorldWww className="w-6 h-6" />

                                    <span>{ele.key}</span>
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <div className="flex gap-4 items-center  w-full">
                            {item.key === "Home" && (
                              <FaHome className="w-6 h-6" />
                            )}
                            {item.key === "About" && (
                              <FaUsers className="w-6 h-6" />
                            )}
                            {item.key === "Contact" && (
                              <MdContacts className="w-6 h-6" />
                            )}
                            <Link
                              href={item.href}
                              key={item.key}
                              onClick={() => setOpenav(!Openav)}>
                              {item.key}
                            </Link>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className=" text-center text-gray-500 text-sm hover:text-gray-300 duration-200	 ease-in">
                &copy; {new Date().getFullYear()}{" "}
                <a href="/" className="hover:underline">
                  Token AI Labs Private Limited
                </a>
                <br />
                All rights reserved.
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
