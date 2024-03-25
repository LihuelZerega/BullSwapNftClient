import React from "react";
import { motion } from "framer-motion";

function Spotlight({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative">
      {children}
      <motion.div
        className="absolute inset-0 bg-black rounded-lg pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{
          duration: 0.5,
          delay: 0.2,
        }}
      />
    </div>
  );
}

export default Spotlight;