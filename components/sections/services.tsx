import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div className="container py-8 space-y-8">
      <h2 className="text-[#888] font-light font-display text-xl sm:text-4xl md:text-5xl lg:text-6xl">
        DELIVERING <br />
        <i>
          <strong className="text-neutral-950 font-bold">
            TOP-NOTCH SERVICES
          </strong>{" "}
          <br />
          AT{" "}
          <strong className="text-neutral-950 font-bold">
            UNBEATABLE PRICES.
          </strong>
        </i>
      </h2>
      <div className="flex gap-2 ml-auto h-48 max-w-96 sm:max-w-none sm:w-2/3 md:h-60 md:gap-4 lg:gap-6 lg:h-[28rem]">
        <div className="relative w-full mt-4 mb-8 md:mb-16 md:mt-12">
          <Image
            src="/services1.jpg"
            alt="man working"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-full mt-2 mb-4 md:mb-8 md:mt-6">
          <Image
            src="/services2.jpg"
            alt="man working"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-full">
          <Image
            src="/services3.jpg"
            alt="man working"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
