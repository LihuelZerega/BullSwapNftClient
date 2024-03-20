import React from "react";
import Image from "next/image";
import Link from "next/link";
import EthereumLogo from "@/images/ethereum-eth.svg";
import BullSwapNftLogo from "@/images/BullSwapNftApi.png";
import { FaUserLarge, FaGoogle, FaApple } from "react-icons/fa6";

function page() {
  return (
    <main className="min-h-screen bg-neutral-950 select-none">
      <div className="flex flex-row py-4 px-6 border-b border-white">
        <Link href="/" className="cursor-pointer">
          <Image src={BullSwapNftLogo} width={32} height={32} alt="Logo" />
          <div>
            <p className="font-bold text-inherit">BullSwap</p>
            <p className="font-bold text-xs text-inherit">NFT</p>
          </div>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row items-center mt-12 lg:mt-24 2xl:mt-36 justify-center">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between md:max-w-7xl md:w-4/6">
          <section className="md:w-1/2 flex flex-col items-center justify-center">
            <div className="md:max-w-xs">
              <div className="hidden md:flex flex-col items-start justify-start mb-4 font-sans w-full">
                <div>
                  <h1 className="text-4xl font-bold text-white">Welcome to</h1>
                  <h1 className="text-4xl font-bold text-white">
                    Bull Swap NFT!
                  </h1>
                </div>
              </div>
              <div className="w-full flex flex-col items-center justify-center">
                <button className="flex flex-row items-center justify-start w-80 rounded-md gap-2 bg-[#38bdf8] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#35aee3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#38bdf8]">
                  <FaUserLarge className="text-base mr-14" />
                  <h1 className="text-base font-sans">Register with Email</h1>
                </button>
              </div>
              <div className="flex flex-row relative items-center my-4">
                <div className="flex-1 h-0.5 bg-gray-300"></div>
                <h1 className="mx-4 text-xs text-gray-400">Or</h1>
                <div className="flex-1 h-0.5 bg-gray-300"></div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="w-full flex flex-col items-center justify-center">
                  <button className="flex flex-row items-center justify-start w-80 rounded-md gap-2 bg-transparent border-2 border-gray-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-transbg-transparent">
                    <FaGoogle className="text-base mr-14" />
                    <h1 className="text-base font-sans">
                      Register with Google
                    </h1>
                  </button>
                </div>
                <div className="w-full flex flex-col items-center justify-center">
                  <button className="flex flex-row items-center justify-start w-80 rounded-md gap-2 bg-transparent border-2 border-gray-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-transbg-transparent">
                    <FaApple className="text-lg mr-14" />
                    <h1 className="text-base font-sans">Register with Apple</h1>
                  </button>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start space-x-2 mt-2">
                <h1 className="text-white font-sans font-semibold">
                  Do you already have an account?
                </h1>
                <Link href="/login">
                  <h1 className="text-[#38bdf8] hover:text-[#35aee3] font-sans font-semibold">
                    Log in
                  </h1>
                </Link>
              </div>
            </div>
          </section>

          <section className="md:w-1/2 md:flex flex-col items-center justify-center mb-6 md:mt-0">
            <div className="flex flex-col items-center justify-center space-y-4 border-b border-white pb-4 md:border-b-0 md:pb-0">
              <div className="hidden md:block">
                <Image
                  src={EthereumLogo}
                  alt="Ethereum Logo"
                  width={250}
                  height={250}
                />
              </div>
              <div className="block md:hidden">
                <Image
                  src={EthereumLogo}
                  alt="Ethereum Logo"
                  width={200}
                  height={200}
                />
              </div>
              <div className="flex flex-col text-center space-y-3">
                <h1 className="text-3xl font-bold text-white font-sans">
                  Sign up and get 1 ETH!
                </h1>
                <div className="hidden md:block">
                  <p className="text-white font-extralight font-sans">
                    Follow the registration steps to redeem your rewards
                  </p>
                  <p className="text-white font-extralight font-sans">
                    and start your NFT experience with us!
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default page;
