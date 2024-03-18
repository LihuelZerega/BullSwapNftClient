"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function Faq() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="flex flex-col my-12 items-center">
      <div className="flex flex-col md:flex-row items-center justify-center space-x-2 md:space-x-4 mb-16">
        <h2 className="text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400 text-center font-sans font-bold">
          Your questions,
        </h2>
        <h2 className="text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-[#38bdf8] to-[#007db3] text-center font-sans font-bold">
          answered!
        </h2>
      </div>
      <div className="w-full max-w-5xl">
        <div className="border border-gray-300 rounded-md p-6">
          <Accordion>
            <AccordionItem key="1" aria-label="What is BullSwap's NFT Collection?" title="What is BullSwap's NFT Collection?">
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="2" aria-label="How we can buy and invest NFT?" title="How we can buy and invest NFT?">
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="3" aria-label="Why we should choose BullSwap's NFT?" title="Why we should choose BullSwap's NFT?">
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="4" aria-label="Where we can buy and sell NFts?" title="Where we can buy and sell NFts?">
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="5" aria-label="How secure is this token?" title="How secure is this token?">
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="6" aria-label="What is your contract address?" title="What is your contract address?">
              {defaultContent}
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
