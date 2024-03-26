import React from "react";
import {
  MdOutlineCollectionsBookmark,
  MdCheckCircleOutline,
} from "react-icons/md";
import { GrResources } from "react-icons/gr";
import Image from "next/image";
import IphoneMockUp from "@/images/IphoneMockUp.png";

function WhyChooseUs() {
  return (
    <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="flex flex-col items-center my-12">
        <div className="flex flex-col md:flex-row items-center space-x-2 md:space-x-4 md:mb-6">
          <h2 className="text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400 text-center font-sans font-bold">
            Why
          </h2>
          <h2 className="text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-[#38bdf8] to-[#007db3] text-center font-sans font-bold">
            Choose Us?
          </h2>
        </div>
        <section className="flex flex-col space-y-12 sm:space-y-0">
          <div className="flex flex-row items-start justify-between mt-12 sm:mt-0 space-x-3">
            <div className="flex flex-col sm:pt-32 sm:pl-12 w-full md:w-1/2">
              <div className="flex flex-row items-center pb-4 sm:space-x-3">
                <MdOutlineCollectionsBookmark className="hidden sm:block text-5xl" />
                <h1 className="text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-[#38bdf8] to-[#007db3]">
                  Huge collection
                </h1>
              </div>
              <p className="font-light text-gray-400 text-md pb-3">
                Dive into our expansive assortment, where every piece tells a
                unique story, crafted with passion and innovation.
              </p>
              <p className="font-light text-gray-400 text-md pb-3">
                Immerse yourself in a world of endless possibilities, where
                creativity knows no bounds and inspiration awaits at every turn.
              </p>
              <p className="font-light text-gray-400 text-md pb-3">
                Join our vibrant community and discover a treasure trove of
                artistry that will ignite your imagination and captivate your
                senses.
              </p>
              <p className="font-light text-gray-400 text-md pb-3">
                Embark on a journey through creativity and expression, where
                every creation is a masterpiece waiting to be uncovered.
              </p>
            </div>
            <div className="hidden sm:block w-1/2">
              <Image src={IphoneMockUp} alt="IphoneMockUp" />
            </div>
          </div>

          <div className="flex flex-row-reverse items-start justify-between space-x-3">
            <div className="flex flex-col sm:pt-32 sm:pr-12 w-full md:w-1/2">
              <div className="flex flex-row items-center pb-4 sm:space-x-3">
                <MdCheckCircleOutline className="hidden sm:block text-5xl" />
                <h1 className="text-5xl font-semibold sm:mb-2 bg-clip-text text-transparent bg-gradient-to-b from-[#38bdf8] to-[#007db3]">
                  High quality
                </h1>
              </div>
              <p className="font-light text-gray-400 text-md pb-3">
                Our collection features an extensive array of rare
                artist-designed costumes and color palettes, each meticulously
                crafted to captivate and inspire.
              </p>
              <p className="font-light text-gray-400 text-md pb-3">
                Discover exclusive pieces that celebrate the beauty of artistic
                expression and elevate your digital experience to new heights.
              </p>
            </div>
            <div className="hidden sm:block w-1/2">
              <Image src={IphoneMockUp} alt="IphoneMockUp" />
            </div>
          </div>

          <div className="flex flex-row items-start justify-between space-x-3">
            <div className="flex flex-col sm:pt-32 sm:pl-12 sm:w-1/2">
              <div className="flex flex-row items-center pb-4 sm:space-x-3">
                <GrResources className="hidden sm:block text-5xl" />
                <h1 className="text-5xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-b from-[#38bdf8] to-[#007db3]">
                  Top resource
                </h1>
              </div>
              <p className="font-light text-gray-400 text-md pb-3">
                Indulge in our delectable design resources, meticulously crafted
                with attention to detail for every pixel.
              </p>
              <p className="font-light text-gray-400 text-md pb-3">
                From stunning visuals to seamless user interfaces, our creations
                are a feast for the eyes and a testament to our dedication to
                excellence.
              </p>
            </div>
            <div className="hidden sm:block w-1/2">
              <Image src={IphoneMockUp} alt="IphoneMockUp" />
            </div>
          </div>

          <div className="flex flex-row-reverse items-start justify-between space-x-3">
            <div className="flex flex-col sm:pt-32 sm:pr-12 w-full md:w-1/2">
              <div className="flex flex-row items-center pb-4 sm:space-x-3">
                <GrResources className="hidden sm:block text-5xl" />
                <h1 className="text-5xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-b from-[#38bdf8] to-[#007db3]">
                  Big community
                </h1>
              </div>
              <p className="font-light text-gray-400 text-md pb-3">
                Join our vibrant community of owners and unleash your creativity
                by contributing to our collection of user-generated elements.
              </p>
              <p className="font-light text-gray-400 text-md pb-3">
                Connect with fellow enthusiasts, share your unique creations,
                and become an integral part of a dynamic community that
                celebrates collaboration and innovation.
              </p>
            </div>
            <div className="hidden sm:block w-1/2">
              <Image src={IphoneMockUp} alt="IphoneMockUp" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default WhyChooseUs;
