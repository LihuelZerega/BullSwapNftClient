"use client";
import React from "react";
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";
import WalletImage from "@/images/ConnectWalletPng.png";
import CreateImage from "@/images/CreateDigitalArtwork.png";
import ChooseImage from "@/images/ChooseSellNft.png";


function HowItWorks() {
  return (
    <div className="flex flex-col items-center my-16">
      <section>
      <div className="flex flex-row items-center space-x-2 md:space-x-4">
        <h2 className="text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400 text-center font-sans font-bold">
          How it
        </h2>
        <h2 className="text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-[#38bdf8] to-[#007db3] text-center font-sans font-bold">
          Works!
        </h2>
      </div>
      </section>
      <section className="flex flex-col md:flex-row my-12 md:my-24 w-full md:max-w-5xl">
        <div className="flex flex-col-reverse md:flex-row w-full">
          <div className="h-80 w-full md:w-1/2 rounded-md mt-12 md:mt-6 md:mr-4">
          <Image
            src={WalletImage}
            alt="WalletImage"
            width={400}
            height={400}
          />
          </div>
          <div className="flex flex-col w-full md:w-1/2 justify-between md:ml-4">
            <section className="flex flex-col space-y-4">
              <h3 className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#38bdf8] to-[#007db3]">Step 1</h3>
              <h1 className="text-4xl font-bold max-w-xs">
                Setup and connect your wallet.
              </h1>
              <p className="text-base font-normal text-neutral-700 dark:text-neutral-200 mt-2 mx-auto">
                Use Trust Wallet, Metamask or any wallet to connect to multiple
                chains the app.
              </p>
            </section>
            <section>
              <motion.button
                className="flex flex-row items-center space-x-1 rounded-md bg-[#38bdf8] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#35aee3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#38bdf8] mt-3 md:mt-0"
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
              >
                <p>Learn more</p>
                <MdArrowOutward />
              </motion.button>
            </section>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row my-12 md:my-24 w-full md:max-w-5xl">
        <div className="flex flex-col-reverse md:flex-row-reverse w-full">
          <div className="h-80 w-full items-center justify-end md:w-1/2 rounded-md mt-12 md:mt-6 md:ml-4">
          <Image
            src={CreateImage}
            alt="CreateImage"
            width={450}
            height={450}
          />
          </div>
          <div className="flex flex-col w-full md:w-1/2 justify-between md:mr-4">
            <section className="flex flex-col space-y-4">
              <h3 className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#38bdf8] to-[#007db3]">Step 2</h3>
              <h1 className="text-4xl font-bold max-w-xs">
                Create your own digital artwork
              </h1>
              <p className="text-base font-normal text-neutral-700 dark:text-neutral-200 mt-2 mx-auto">
                Quality comes first. we took our time to plan out everything and
                build our production pipeline for a good quality artwork's &
                digital artwork.
              </p>
              <p className="text-base font-normal text-neutral-700 dark:text-neutral-200 mt-2 mx-auto">
                Starting the production on the procedurally generated planets
                and the smart contract for minting.
              </p>
            </section>
            <section>
              <motion.button
                className="flex flex-row items-center space-x-1 rounded-md bg-[#38bdf8] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#35aee3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#38bdf8] mt-3 md:mt-0"
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
              >
                <p>Learn more</p>
                <MdArrowOutward />
              </motion.button>
            </section>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row my-12 md:my-24 w-full md:max-w-5xl">
        <div className="flex flex-col-reverse md:flex-row w-full">
          <div className="h-80 w-full md:w-1/2 rounded-md mt-12 md:mt-6 md:mr-4">
          <Image
            src={ChooseImage}
            alt="ChooseImage"
            width={450}
            height={450}
          />
          </div>
          <div className="flex flex-col w-full md:w-1/2 justify-between md:ml-4">
            <section className="flex flex-col space-y-4">
              <h3 className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#38bdf8] to-[#007db3]">Step 3</h3>
              <h1 className="text-4xl font-bold max-w-xs">
                Choose a platform to sell your NFT
              </h1>
              <p className="text-base font-normal text-neutral-700 dark:text-neutral-200 mt-2 mx-auto">
                Earn ETH and BIT for all your NFTs that you sell on our
                marketplace.
              </p>
            </section>
            <section>
              <motion.button
                className="flex flex-row items-center space-x-1 rounded-md bg-[#38bdf8] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#35aee3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#38bdf8] mt-3 md:mt-0"
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
              >
                <p>Learn more</p>
                <MdArrowOutward />
              </motion.button>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HowItWorks;