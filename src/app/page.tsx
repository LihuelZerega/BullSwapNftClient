import React from "react";
import { GlobeDemo } from "@/components/LandingPageComponents/GlobeDemo";
import HeroSection from "@/components/LandingPageComponents/HeroSection";
import NavBarLandingpage from "@/components/LandingPageComponents/NavBarLandingpage";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="px-2 sm:px-20 py-4">
        <NavBarLandingpage />
      </div>
      <HeroSection />
      <hr className="mx-96" />
      {/* <GlobeDemo /> */}
    </main>
  );
}
