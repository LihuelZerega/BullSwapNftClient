import React from "react";
import Image from "next/image";
import { GoVerified } from "react-icons/go";
import BullSwapLogoImage from "@/images/BullSwapNftApiLogo.png";
import { BsTwitterX, BsInstagram } from "react-icons/bs";
import { RxDiscordLogo } from "react-icons/rx";
import { CiShare2 } from "react-icons/ci";

function BullSwapBanner() {
  return (
    <div className="mx-24 border-b border-neutral-700">
      <section className="flex flex-row items-center justify-between py-6">
        <div className="flex flex-row">
          <div className="h-16 w-16 rounded-md bg-white">
            <Image src={BullSwapLogoImage} alt="bullswap logo" className="rounded-md"/>
          </div>
          <div className="flex flex-col items-start justify-between ml-3">
            <div className="flex flex-row items-center space-x-2">
              <h1 className="text-3xl font-semibold font-sans">
                Bull Swap NFT
              </h1>
              <GoVerified className="text-3xl text-[#38bdf8]" />
            </div>
            <div className="flex flex-row items-center space-x-3">
              <div>
                <BsTwitterX />
              </div>
              <div>
                <BsInstagram />
              </div>
              <div>
                <RxDiscordLogo />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row space-x-3">
          <div className="flex flex-row-reverse items-center">
            <CiShare2 className="text-2xl" />
            <h1 className="text-sm font-light mr-2">Share</h1>
          </div>
        </div>
      </section>
      <section className="flex flex-row items-center justify-between pb-4">
        <div>
          <h1 className="text-sm font-light text-neutral-400">Minimal Price</h1>
          <p className="text-lg font-medium">0.01 ETH</p>
        </div>
        <div>
          <h1 className="text-sm font-light text-neutral-400">Volume 24h</h1>
          <p className="text-lg font-medium">10 ETH</p>
        </div>
        <div>
          <h1 className="text-sm font-light text-neutral-400">Total Volume</h1>
          <p className="text-lg font-medium">220 ETH</p>
        </div>
        <div>
          <h1 className="text-sm font-light text-neutral-400">Items listed/total</h1>
          <p className="text-lg font-medium">25/25</p>
        </div>
        <div>
          <h1 className="text-sm font-light text-neutral-400">Owners</h1>
          <p className="text-lg font-medium">25</p>
        </div>
        <div>
          <h1 className="text-sm font-light text-neutral-400">Royalty commission</h1>
          <p className="text-lg font-medium">0.5%</p>
        </div>
      </section>
    </div>
  );
}

export default BullSwapBanner;
