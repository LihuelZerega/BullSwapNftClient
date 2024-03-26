"use client";
import React from "react";
import HeroSection from "@/components/LandingPageComponents/HeroSection";
import Stats from "@/components/LandingPageComponents/Stats";
import NavBarLandingpage from "@/components/LandingPageComponents/NavBarLandingpage";
import HeroSectionLandingPage from "@/components/LandingPageComponents/HeroSectionLandingPage";
import { HeroScrollDemo } from "@/components/LandingPageComponents/ContainerScrollAnimation";
import CtaSection from "@/components/LandingPageComponents/CtaSection";
import Bullswapcollection from "@/components/LandingPageComponents/Bullswapcollection";
import WhyChooseUs from "@/components/LandingPageComponents/WhyChooseUs";
import HowItWorks from "@/components/LandingPageComponents/HowItWorks";
import BullswapRoadMap from "@/components/LandingPageComponents/BullswapRoadMap";
import Faq from "@/components/LandingPageComponents/Faq";
import Footer from "@/components/LandingPageComponents/Footer";
import { BentoGridDemo } from "@/components/LandingPageComponents/BentoGrid";
import LogoClouds from "@/components/LandingPageComponents/LogoClouds";

export default function Home() {
  return (
    <main>
      <div className="py-5 border-b bg-[#1a1a1a]">
        <NavBarLandingpage />
      </div>
      <div className="min-h-screen bg-neutral-950 px-6 sm:px-24">
        <div>
          <HeroSectionLandingPage />
          <Stats />
          <LogoClouds />
        </div>
        {/* <HeroScrollDemo /> */}
        <WhyChooseUs />
        <BentoGridDemo />
        <CtaSection />
        {/* <Bullswapcollection /> */}
        {/* <HowItWorks /> */}
        <BullswapRoadMap />
        <Faq />
      </div>
      <Footer />
    </main>
  );
}