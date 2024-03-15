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
import BullSwapNftLogo from "@/images/BullSwapNftApi.png";

export default function NavBarLandingpage() {
  return (
    <Navbar isBordered isBlurred={false}>
      <NavbarBrand className="flex gap-2">
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
          <Link href="#">Connect Wallet</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
