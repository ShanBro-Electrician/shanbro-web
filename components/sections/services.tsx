"use client";
import Image from "next/image";
import React from "react";
import { Separator } from "../ui/separator";
import { motion } from "framer-motion";

const Services = () => {
  const containerVariant = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const wordVariant = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const primaryTextStyle = "text-lime-900";
  const mutedTextStyle = "text-lime-800/40";

  return (
    <div className="container py-20 space-y-16 overflow-hidden">
      <motion.h2
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        className="leading-none antialiased uppercase font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
      >
        <motion.span className={mutedTextStyle} variants={wordVariant}>
          Delivering
        </motion.span>
        <br />
        <motion.span className={primaryTextStyle} variants={wordVariant}>
          top-notch
        </motion.span>{" "}
        <motion.span className={primaryTextStyle} variants={wordVariant}>
          services
        </motion.span>
        <br />
        <motion.span className={mutedTextStyle} variants={wordVariant}>
          at
        </motion.span>{" "}
        <motion.span className={primaryTextStyle} variants={wordVariant}>
          unbeatable
        </motion.span>{" "}
        <motion.span className={primaryTextStyle} variants={wordVariant}>
          prices.
        </motion.span>
      </motion.h2>

      {/* <h2 className="font-normal text-lime-800/40 leading-none antialiased uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
        Delivering <br />
        <span className="text-lime-800">
          top-notch services <br />
          <span className="text-lime-800/40">at</span> unbeatable prices.
        </span>
      </h2> */}
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
            src="/services4.jpg"
            alt="Electrical works"
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

      <motion.h3
        className="font-medium text-xl leading-none antialiased uppercase max-w-[900px] mx-auto"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
      >
        <motion.span className={mutedTextStyle} variants={wordVariant}>
          Upgrade
        </motion.span>{" "}
        <motion.span className={mutedTextStyle} variants={wordVariant}>
          your
        </motion.span>{" "}
        <motion.span className={primaryTextStyle} variants={wordVariant}>
          House,
        </motion.span>{" "}
        <motion.span className={primaryTextStyle} variants={wordVariant}>
          Shop,
        </motion.span>{" "}
        <motion.span className={primaryTextStyle} variants={wordVariant}>
          or
        </motion.span>{" "}
        <motion.span className={primaryTextStyle} variants={wordVariant}>
          Office
        </motion.span>{" "}
        <br />
        <motion.span className={mutedTextStyle} variants={wordVariant}>
          with
        </motion.span>{" "}
        <motion.span className={mutedTextStyle} variants={wordVariant}>
          our
        </motion.span>{" "}
        <motion.span className={mutedTextStyle} variants={wordVariant}>
          complete
        </motion.span>{" "}
        <motion.span className={primaryTextStyle} variants={wordVariant}>
          Renovation,
        </motion.span>{" "}
        <motion.span className={primaryTextStyle} variants={wordVariant}>
          Electrical,
        </motion.span>{" "}
        <motion.span className={primaryTextStyle} variants={wordVariant}>
          and
        </motion.span>{" "}
        <motion.span className={primaryTextStyle} variants={wordVariant}>
          Plumbing
        </motion.span>{" "}
        <motion.span className={primaryTextStyle} variants={wordVariant}>
          Services
        </motion.span>{" "}
        <br />
        <motion.span className={mutedTextStyle} variants={wordVariant}>
          covering
        </motion.span>{" "}
        <motion.span className={primaryTextStyle} variants={wordVariant}>
          Water Heaters,
        </motion.span>{" "}
        <motion.span className={primaryTextStyle} variants={wordVariant}>
          Ceiling Fans,
        </motion.span>{" "}
        <motion.span className={primaryTextStyle} variants={wordVariant}>
          Air Conditioners,
        </motion.span>{" "}
        <motion.span className={primaryTextStyle} variants={wordVariant}>
          Lighting,
        </motion.span>{" "}
        <motion.span className={primaryTextStyle} variants={wordVariant}>
          CCTV,
        </motion.span>{" "}
        <motion.span className={primaryTextStyle} variants={wordVariant}>
          Power Sockets,
        </motion.span>{" "}
        <motion.span className={primaryTextStyle} variants={wordVariant}>
          Main DB Fuse Boxes,
        </motion.span>{" "}
        <motion.span className={primaryTextStyle} variants={wordVariant}>
          and a lot more!
        </motion.span>{" "}
      </motion.h3>

      {/* <h3 className="font-medium text-lime-800/40 text-xl leading-none antialiased uppercase max-w-[900px] mx-auto">
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
      </h3> */}
    </div>
  );
};

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

export default Services;
