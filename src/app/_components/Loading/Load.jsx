"use client";
import React from "react";
import { GridLoader, HashLoader } from "react-spinners";

function Load() {
  const words = [
    "T",
    "o",
    "k",
    "e",
    "n",
    " ",
    "A",
    "I",
    " ",
    "L",
    "a",
    "b",
    "s",
  ];

  return (
    <div className="h-screen w-screen bg-gradient-to-b from-black via-[#002147] to-gray-950 flex flex-col gap-2 items-center justify-center z-10">
      <HashLoader
        size={80}
        className="animate-[spin_2s_linear_infinite] "
        color={"#00E5FF"}
      />
    </div>
  );
}

export default Load;
