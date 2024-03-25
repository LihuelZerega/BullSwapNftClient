import React from "react";
import Spotlight from "@/utils/components/Spotlight";
import { motion } from "framer-motion";

function HeroSectionLandingPage() {
  return (
    <motion.div
      className="relative h-[30rem] sm:h-[25rem] 2xl:h-[37rem] w-full max-w-screen-2xl xl:max-w-screen-xl mx-auto flex items-center justify-center text-center px-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Spotlight>
        <p className="text-6xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          Discover, Collect and Sell NFTs with BullSwap
        </p>
      </Spotlight>
    </motion.div>
  );
}

export default HeroSectionLandingPage;