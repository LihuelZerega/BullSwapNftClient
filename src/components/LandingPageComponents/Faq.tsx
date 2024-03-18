"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function Faq() {
  const defaultContent1 =
    "BullSwap's NFT Collection is a curated selection of digital assets available for purchase, sale, and creation on our platform. Our collection includes artwork, digital collectibles, and other unique items represented as non-fungible tokens (NFTs). Each NFT is one-of-a-kind and secured on the blockchain.";

    const defaultContent2 =
    "To buy and invest in NFTs on BullSwap, simply browse our marketplace, select the NFT you're interested in, and follow the prompts to complete the purchase. You can use cryptocurrency to invest in NFTs, and once acquired, your NFTs will be stored securely in your digital wallet.";

    const defaultContent3 =
    "There are several reasons to choose BullSwap's NFT platform. We prioritize quality, security, and user experience. Our curated collection features unique and valuable digital assets, and our platform provides a seamless buying, selling, and creation experience for both novice and experienced users.";

    const defaultContent4 =
    "BullSwap's marketplace is the go-to destination for buying and selling NFTs. Our platform connects buyers and sellers from around the world, providing a secure and transparent environment for transactions. Whether you're looking to buy, sell, or trade NFTs, BullSwap has you covered.";

    const defaultContent5 =
    "Security is paramount at BullSwap. We implement industry-leading security measures to safeguard your assets and data. Our platform utilizes blockchain technology to ensure the integrity and immutability of transactions, providing peace of mind to our users.";

    const defaultContent6 =
    "Our contract address is [insert contract address here]. This address serves as a unique identifier for our smart contract on the blockchain. You can use this address to verify the authenticity and integrity of transactions involving BullSwap's NFTs.";

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
              {defaultContent1}
            </AccordionItem>
            <AccordionItem key="2" aria-label="How we can buy and invest NFT?" title="How we can buy and invest NFT?">
              {defaultContent2}
            </AccordionItem>
            <AccordionItem key="3" aria-label="Why we should choose BullSwap's NFT?" title="Why we should choose BullSwap's NFT?">
              {defaultContent3}
            </AccordionItem>
            <AccordionItem key="4" aria-label="Where we can buy and sell NFts?" title="Where we can buy and sell NFts?">
              {defaultContent4}
            </AccordionItem>
            <AccordionItem key="5" aria-label="How secure is this token?" title="How secure is this token?">
              {defaultContent5}
            </AccordionItem>
            <AccordionItem key="6" aria-label="What is your contract address?" title="What is your contract address?">
              {defaultContent6}
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
