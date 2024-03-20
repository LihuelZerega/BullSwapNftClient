import React from "react";
import BullSwapBanner from "@/pages/collection/bullswap/subcomps/BullSwapBanner";
import BullSwapNfts from "@/pages/collection/bullswap/subcomps/BullSwapNfts";
import Footer from "@/components/LandingPageComponents/Footer";
import NavBarLandingpage from "@/components/LandingPageComponents/NavBarLandingpage";

function page() {
  return (
    <main className="h-screen">
      <div className="py-3 px-6 border-b ">
        <NavBarLandingpage />
      </div>
      <div className="px-6 md:px-0 bg-neutral-950">
        <h1>
          Collections
        </h1>
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}

export default page;
