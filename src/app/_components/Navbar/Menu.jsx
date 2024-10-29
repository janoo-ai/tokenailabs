"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const Menu = ({ setActive, children, classname }) => {
  return (
    <nav
      // resets the state

      className={`relative rounded-full border border-transparent bg-black dark:border-white/[0.2]  shadow-input flex justify-center space-x-4 px-8 py-4  ${classname} invert`}>
      {children}
    </nav>
  );
};

export function MenuItem({ active, setActive, item }) {
  return (
    <div onMouseEnter={() => setActive(item)}>
      <motion.p
        transition={{ duration: 0.3 }}
        className={`cursor-pointer text-slate-50  font-mono text-lg font-bold hover:scale-110 w-fit m-2 
         `}>
        {item === "Contact Us" ? (
          <Link href="/contactus">{item}</Link>
        ) : item === "About Us" ? (
          <Link href="/about">{item}</Link>
        ) : item === "Home" ? (
          <Link href="/" className="flex justify-center items-center">
            <FaHome className="h-6 w-6" />
          </Link>
        ) : (
          <span>{item}</span>
        )}
      </motion.p>
    </div>
  );
}

export function ActiveMenu({ active, setActive, children }) {
  if (active === null) return null;

  return (
    <motion.div
      onMouseLeave={() => setActive(null)}
      initial={{ opacity: 0, scale: 0.85, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.85, y: 10 }}
      transition={transition}
      className="absolute w-full top-[calc(100%_+_0.5rem)] flex justify-center items-center	">
      <motion.div
        layoutId="active"
        className=" overflow-hidden w-full  "
        transition={transition}>
        <motion.div
          layout
          className="w-full h-full p-3 flex justify-center items-center">
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export const ProductItem = ({ title, description, href, src }) => {
  return (
    <Link
      href={href}
      className="flex space-x-2 gap-2 md:gap-5 shadow-xl bg-black backdrop-blur-sm rounded-xl rounded border  p-4  hover:scale-105">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl "
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }) => {
  return (
    <Link
      {...rest}
      className="w-fit hover:scale-105 text-slate-500 hover:text-slate-50 font-semibold px-5 py-3 bg-black rounded-lg text-lg border-1 border-white  border-solid ">
      {children}
    </Link>
  );
};
