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

function Bullswapcollection() {
  const [collectionItems, setCollectionItems] = useState<CollectionItem[]>([]);

  useEffect(() => {
    const fetchCollectionItems = async () => {
      try {
        const response = await axios.get<CollectionItem[]>(
          "http://localhost:8080/api/bullnft/"
        );
        setCollectionItems(response.data.slice(0, 4));
      } catch (error) {
        console.error("Error fetching collection items:", error);
      }
    };

    fetchCollectionItems();
  }, []);

  return (
    <div className="flex flex-col my-12 px-6">
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

      <section className="flex flex-col items-center justify-center">
        <section className="grid grid-cols-1 md:grid-cols-4 gap-4 my-12 md:max-w-5xl">
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
                  <p className="text-left font-medium">
                    {item.price2023Eth} ETH
                  </p>
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