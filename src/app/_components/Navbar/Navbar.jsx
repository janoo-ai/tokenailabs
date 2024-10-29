"use client";
import React, { useState, useEffect } from "react";
import { cn } from "../_lib/utils";
import jaano from "../../../assets/jaano.jpg";
import { Menu, ActiveMenu, MenuItem, HoveredLink, ProductItem } from "./Menu";
import { motion } from "framer-motion";
import coming from "../../../assets/coming.jpg";

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

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, y: 50 }}
      animate={{ opacity: 1, scale: 0.9, y: 0 }}
      exit={{ opacity: 0, scale: 0.85, y: 50 }}
      transition={transition}
      className={cn(
        "fixed top-2 w-full md:w-9/12 shadow-md  mb-2 font-mono backdrop-blur-sm rounded-xl rounded-full shadow-[0_0_10px_rgba(0,0,0,0.8)]",
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
  );
}

export default Navbar;
