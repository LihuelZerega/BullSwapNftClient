import React from "react";
import { GlobeDemo } from "@/components/LandingPageComponents/GlobeDemo";
import {
  MdOutlineCollectionsBookmark,
  MdCheckCircleOutline,
} from "react-icons/md";
import { GrResources } from "react-icons/gr";

function WhyChooseUs() {
  return (
    <div className="flex flex-col items-center my-12">
      <div className="flex flex-col md:flex-row items-center space-x-2 md:space-x-4 md:mb-6">
        <h2 className="text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400 text-center font-sans font-bold">
          Why
        </h2>
        <h2 className="text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-[#38bdf8] to-[#007db3] text-center font-sans font-bold">
          Choose Us?
        </h2>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-16 my-12">
        <div className="h-56 w-80 rounded-md border border-gray-300 p-6 space-y-3">
          <div>
            <MdOutlineCollectionsBookmark className="text-5xl" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-b from-[#38bdf8] to-[#007db3]">Huge collection</h1>
            <p className="font-light text-gray-400 text-sm">
              A collection created to go beyond the digital space.
            </p>
          </div>
        </div>
        <div className="h-56 w-80 rounded-md border border-gray-300 p-6 space-y-3">
          <div>
            <MdCheckCircleOutline className="text-5xl" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-b from-[#38bdf8] to-[#007db3]">High quality</h1>
            <p className="font-light text-gray-400 text-sm">
              The collection includes dozens of rare artist costumes and
              colorways.
            </p>
          </div>
        </div>
        <div className="h-56 w-80 rounded-md border border-gray-300 p-6 space-y-3">
          <div>
            <GrResources className="text-5xl" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-b from-[#38bdf8] to-[#007db3]">Top resource</h1>
            <p className="font-light text-gray-400 text-sm">
              Tasty design resources made with care for each pixel.
            </p>
          </div>
        </div>
        <div className="block md:hidden h-56 w-80 rounded-md border border-gray-300 p-6 space-y-3">
          <div>
            <GrResources className="text-5xl" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-b from-[#38bdf8] to-[#007db3]">Big community</h1>
            <p className="font-light text-gray-400 text-sm">
            Be part of a community of owners and create User generated elements.
            </p>
          </div>
        </div>
      </section>
      <section className="hidden md:block">
        <GlobeDemo />
      </section>
    </div>
  );
}

export default WhyChooseUs;
