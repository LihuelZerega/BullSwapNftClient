"use client";
import React from "react";
import { ThreeDCardDemo } from "./ThreeDCardDemo";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row justify-between w-full px-3 sm:px-24">
      <section className="">
          <div className="mt-12 sm:mt-20 text-center sm:text-left">
            <h1 className="text-5xl sm:text-7xl font-bold relative text-gray-100">
              Discover, Collect
            </h1>
            <h1 className="text-5xl sm:text-7xl font-bold relative text-gray-100">
              and Sell NFTs
            </h1>
            <h1 className="text-5xl sm:text-7xl font-bold relative text-gray-100">
              with BullSwap
            </h1>
            <p className="text-sm pt-4 font-semibold">
              A non-fungible token (NFT) is a unique and
            </p>
            <p className="text-sm pb-4 font-semibold">
              non-interchangeable unit of a digital asset.
            </p>
          </div>
        <div className="flex justify-center items-center">
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="rounded-md bg-[#38bdf8] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#35aee3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#38bdf8]"
          >
            Explore NFTS
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="rounded-md border-solid border-[#38bdf8] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#35aee3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#38bdf8]"
          >
            Learn More
          </motion.button>
        </div>
      </section>
      <section className="flex flex-row items-start">
        <ThreeDCardDemo />
      </section>
    </div>
  );
}

export default HeroSection;
