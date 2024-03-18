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
      <section>
        <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
          Why Choose Us?
        </h2>
        <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-md mt-2 mx-auto">
          Explore our NFT collection
        </p>
      </section>
      <section className="grid grid-cols-3 gap-16 my-12">
        <div className="h-56 w-80 rounded-md border border-gray-300 p-6 space-y-3">
          <div>
            <MdOutlineCollectionsBookmark className="text-5xl"/>
          </div>
          <div>
            <h1 className="text-3xl font-semibold mb-2">Huge collection</h1>
            <p className="font-light text-gray-400 text-sm">
              A collection created to go beyond the digital space.
            </p>
          </div>
        </div>
        <div className="h-56 w-80 rounded-md border border-gray-300 p-6 space-y-3">
          <div>
            <MdCheckCircleOutline className="text-5xl"/>
          </div>
          <div>
            <h1 className="text-3xl font-semibold mb-2">High quality</h1>
            <p className="font-light text-gray-400 text-sm">
              The collection includes dozens of rare artist costumes and
              colorways.
            </p>
          </div>
        </div>
        <div className="h-56 w-80 rounded-md border border-gray-300 p-6 space-y-3">
          <div>
            <GrResources className="text-5xl"/>
          </div>
          <div>
            <h1 className="text-3xl font-semibold mb-2">Top resource</h1>
            <p className="font-light text-gray-400 text-sm">
              Tasty design resources made with care for each pixel.
            </p>
          </div>
        </div>
      </section>
      <section>
        <GlobeDemo />
      </section>
    </div>
  );
}

export default WhyChooseUs;
