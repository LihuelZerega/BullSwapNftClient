"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";
import EthereumIcon from "@/images/ethereum-eth.svg";

interface CollectionItem {
  id: number;
  name: string;
  imageUrl: string;
  price2023Eth: number;
}

function BullSwapNfts() {
  const [collectionItems, setCollectionItems] = useState<CollectionItem[]>([]);

  useEffect(() => {
    const fetchCollectionItems = async () => {
      try {
        const response = await axios.get<CollectionItem[]>(
          "http://localhost:8080/api/bullnft/"
        );
        setCollectionItems(response.data.slice(0, 25));
      } catch (error) {
        console.error("Error fetching collection items:", error);
      }
    };

    fetchCollectionItems();
  }, []);

  return (
    <div className="mx-24">
      <section className="grid grid-cols-1 md:grid-cols-5 gap-4 my-12">
        {collectionItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col rounded-md border border-neutral-700 p-3"
          >
            <img
              src={item.imageUrl}
              alt={`Bull Art ${index + 1}`}
              className="rounded-md md:h-64 md:w-64 object-cover"
            />
            <div>
              <p className="text-left font-semibold mt-2">{item.name}</p>
            </div>
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center space-x-1">
                <div>
                  <Image
                    src={EthereumIcon}
                    height={22}
                    width={22}
                    alt="EthereumIcon"
                  />
                </div>
                <p className="text-left font-medium">{item.price2023Eth} ETH</p>
              </div>
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-md bg-black dark:bg-[#38bdf8] dark:text-white text-white text-sm font-bold"
              >
                Buy
              </motion.button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default BullSwapNfts;
