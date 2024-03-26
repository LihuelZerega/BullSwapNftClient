import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import BullSwapLogo from "@/images/bullswap_icon-skyblue.png";

export default function App() {
  return (
    <Navbar position="static">
      <NavbarBrand>
        <Image src={BullSwapLogo} alt="Bull Swap Logo" width={40} height={40} />
        <div className="flex flex-col ml-2">
          <p className="font-semibold text-inherit text-sm">Bull Swap</p>
          <p className="font-semibold text-inherit text-sm">NFT's</p>
        </div>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Markets
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <motion.a
            href="/login"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="rounded-md bg-[#38bdf8] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#35aee3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#38bdf8]"
          >
            Connect Wallet
          </motion.a>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
