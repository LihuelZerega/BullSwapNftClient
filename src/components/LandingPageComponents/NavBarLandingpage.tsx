"use client";
import React from "react";
import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import BullSwapNftLogo from "@/images/BullSwapNftApi.png";

export default function NavBarLandingpage() {
  return (
    <Navbar isBlurred={false}>
      <NavbarBrand className="flex gap-2 select-none">
        <Image src={BullSwapNftLogo} width={32} height={32} alt="Logo" />
        <div>
          <p className="font-bold text-inherit">BullSwap</p>
          <p className="font-bold text-xs text-inherit">NFT</p>
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
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="">
          <Link href="/login">
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className="rounded-md bg-[#38bdf8] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#35aee3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#38bdf8]"
            >
              Connect Wallet
            </motion.button>
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
