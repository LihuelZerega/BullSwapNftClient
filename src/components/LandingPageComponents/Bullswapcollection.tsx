"use client";
import React from "react";
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";

function Bullswapcollection() {
  return (
    <div className="flex flex-col my-12">
      <section className="flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row items-center space-x-2 md:space-x-4">
          <h2 className="text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400 text-center font-sans font-bold">
            BullSwap
          </h2>
          <h2 className="text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-[#38bdf8] to-[#007db3] text-center font-sans font-bold">
            Collection
          </h2>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-4 md:gap-16 my-12 md:max-w-5xl">
        <div className="my-2 md:my-0 h-80 rounded-md bg-white">s</div>
        <div className="my-2 md:my-0 h-80 rounded-md bg-white">s</div>
        <div className="my-2 md:my-0 h-80 rounded-md bg-white">s</div>
        <div className="my-2 md:my-0 h-80 rounded-md bg-white">s</div>
      </section>
      <section className="flex flex-col items-center justify-center">
        <motion.button
          className="flex flex-row items-center space-x-1 rounded-md bg-[#38bdf8] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#35aee3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#38bdf8]"
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
        >
          <p>View collection</p>
          <MdArrowOutward />
        </motion.button>
      </section>
    </div>
  );
}

export default Bullswapcollection;
