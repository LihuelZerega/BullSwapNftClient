"use client";
import Image from "next/image";
import React from "react";
import EthereumIcon from "@/images/ethereum-eth.svg";
import { CardBody, CardContainer, CardItem } from "@/utils/components/3d-card";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="https://res.cloudinary.com/dszjgdktf/image/upload/v1710515746/BullSwapNftApi/24_b7dafw.png"
            height="1000"
            width="1000"
            className="h-90 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-4">
          <div className="flex flex-row items-center">
            <Image src={EthereumIcon} height={20} width={20} alt="" />
            <CardItem
              translateZ={20}
              target="__blank"
              className="px-2 py-2 rounded-xl text-md font-normal dark:text-white"
            >
              $0.12 ETH
            </CardItem>
          </div>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-md bg-black dark:bg-[#38bdf8] dark:text-white text-white text-sm font-bold"
          >
            Buy Now
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
