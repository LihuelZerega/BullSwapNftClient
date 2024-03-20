"use client";
import React from "react";
import HeroSection from "@/components/LandingPageComponents/HeroSection";
import Stats from "@/components/LandingPageComponents/Stats";
import NavBarLandingpage from "@/components/LandingPageComponents/NavBarLandingpage";
import Bullswapcollection from "@/components/LandingPageComponents/Bullswapcollection";
import WhyChooseUs from "@/components/LandingPageComponents/WhyChooseUs";
import HowItWorks from "@/components/LandingPageComponents/HowItWorks";
import BullswapRoadMap from "@/components/LandingPageComponents/BullswapRoadMap";
import Faq from "@/components/LandingPageComponents/Faq";
import Footer from "@/components/LandingPageComponents/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="py-3 px-6 border-b ">
        <NavBarLandingpage />
      </div>
      <div className="px-6 md:px-0 bg-neutral-950">
        <HeroSection />
        <Stats />
        <hr className="mx-96" />
        <Bullswapcollection />
        <hr className="mx-96" />
        <WhyChooseUs />
        <hr className="mx-96" />
        <HowItWorks />
        <hr className="mx-96" />
        <BullswapRoadMap />
        <hr className="mx-96" />
        <Faq />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}
