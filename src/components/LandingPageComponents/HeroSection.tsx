"use client";
import React from "react";
import { ThreeDCardDemo } from "./ThreeDCardDemo";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full px-3 sm:px-24 2xl:px-72">
      <section className="flex flex-col items-center sm:items-start">
        <div className="mt-12 sm:mt-20 md:mt-0 text-center sm:text-left">
          <h1 className="text-5xl lg:text-7xl font-bold relative text-gray-100">
            Discover, Collect
          </h1>
          <h1 className="text-5xl lg:text-7xl font-bold relative text-gray-100">
            and Sell NFTs
          </h1>
          <h1 className="text-5xl lg:text-7xl font-bold relative text-gray-100">
            with BullSwap
          </h1>
          <p className="text-base pt-4 font-light text-gray-300">
            A non-fungible token (NFT) is a unique and
          </p>
          <p className="text-base pb-4 font-light text-gray-300">
            non-interchangeable unit of a digital asset.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-4 mb-4">
          <img
            className="w-9 h-9"
            src="https://res.cloudinary.com/dszjgdktf/image/upload/v1710710415/BullSwapNftApi/MetaMask_Fox.svg_nufabu.png"
            alt="Metamask"
            width={50}
            height={20}
          />
          <img
            className="w-9 h-9"
            src="https://res.cloudinary.com/dszjgdktf/image/upload/v1710710414/BullSwapNftApi/coinbase-coin-logo-C86F46D7B8-seeklogo.com_kqop8g.png"
            alt="Coinbase"
            width={50}
            height={20}
          />
          <img
            className="w-9 h-9"
            src="https://res.cloudinary.com/dszjgdktf/image/upload/v1710710414/BullSwapNftApi/Binance_Logo.svg_ekxqh1.png"
            alt="Binance"
            width={50}
            height={20}
          />
          <img
            className="w-9 h-9"
            src="https://res.cloudinary.com/dszjgdktf/image/upload/v1710710414/BullSwapNftApi/Logomark-White_pi3gd8.png"
            alt="OpenSea"
            width={50}
            height={20}
          />
        </div>
        <div className="flex justify-center items-center gap-4">
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
            className="rounded-md border-solid border-2 border-[#38bdf8] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Learn More →
          </motion.button>
        </div>
      </section>
      <section className="flex flex-row items-center sm:items-start">
        <ThreeDCardDemo />
      </section>
    </div>
  );
}

export default HeroSection;
