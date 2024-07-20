import Image from "next/image";
import React from "react";
import { Separator } from "../ui/separator";

const details = [
  {
    title: "Expert Craftsmanship",
    description:
      "Our team of skilled technicians brings years of experience to every job. Whether it’s electrical repairs or plumbing installations, we deliver top-notch workmanship.",
  },
  {
    title: "Transparent Pricing",
    description:
      "At ShanBro, we believe in honest, upfront pricing. No surprises here! You’ll know exactly what to expect before we start any project.",
  },
  {
    title: "Prompt Response",
    description:
      "Emergencies happen, and when they do, we’re there for you. Our rapid response time ensures your safety and peace of mind.",
  },
  {
    title: "Customer-Centric Approach",
    description:
      "Your satisfaction is our priority. We listen to your needs, provide tailored solutions, and ensure you’re delighted with our services.",
  },
  {
    title: "Reliable and Trustworthy",
    description:
      "Our track record speaks for itself. Customers trust us because we consistently deliver quality work and build lasting relationships.",
  },
];

const Services = () => {
  return (
    <div className="container py-20 space-y-16 overflow-hidden">
      <h2 className="font-normal text-lime-700/40 leading-none antialiased uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
        Delivering <br />
        <span className="text-lime-800">
          top-notch services <br />
          <span className="text-lime-700/40">at</span> unbeatable prices.
        </span>
      </h2>
      <div className="flex justify-between gap-2 -mx-32 h-48">
        <div className="relative w-full h-full">
          <Image
            src="/services1.jpg"
            alt="man working"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-full h-full">
          <Image
            src="/services2.jpg"
            alt="man working"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-full h-full">
          <Image
            src="/services3.jpg"
            alt="man working"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-full h-full">
          <Image
            src="/services1.jpg"
            alt="man working"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
        {details.map((d) => (
          <div className="space-y-1 sm:w-60" key={d.title}>
            <h3 className="text-sm font-semibold text-lime-800">{d.title}</h3>
            <p className="text-xs text-muted-foreground leading-normal">
              {d.description}
            </p>
          </div>
        ))}
      </div>

      <Separator />

      <h3 className="font-medium text-lime-700/40 text-xl leading-none antialiased uppercase max-w-[900px] mx-auto">
        Upgrade your{" "}
        <span className="text-lime-800">House, Shop, or Office</span>
        <br />
        with our complete{" "}
        <span className="text-lime-800">
          Renovation, Electrical, and Plumbing services
        </span>
        <br />
        covering{" "}
        <span className="text-lime-800">
          water heaters, ceiling fans, air conditioners, lighting, CCTV, power
          sockets, main db fuse boxes, and a lot more!
        </span>
      </h3>
    </div>
  );
};

export default Services;
