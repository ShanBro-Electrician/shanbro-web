"use client";
import Image from "next/image";
import React, { ReactNode, useRef } from "react";
import { Separator } from "../ui/separator";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const Services = () => {
  const klCityContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: klCityContainer,
    offset: ["start end", "end start"],
  });
  const klCityImageY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <div className="container py-20 space-y-16 overflow-hidden">
      <ScrollAnimatedParagraph
        paragraph={[
          { text: "Delivering", primary: false },
          { text: "Top-notch", primary: true },
          { text: "Services", primary: true },
          { text: "at", primary: false },
          { text: "Unbeatable", primary: true },
          { text: "Prices.", primary: true },
        ]}
        className="leading-none antialiased uppercase font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
      />
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

      {/* <div className="">
        <ScrollAnimatedCog />
      </div> */}
      <div
        ref={klCityContainer}
        className="flex flex-col gap-12 md:flex-row-reverse"
      >
        <div className="flex flex-col gap-12 w-full md:py-40">
          <h2 className="text-3xl font-semibold text-zinc-900">
            We are KL City&apos;s go-to{" "}
            <span className="bg-lime-100">Plumber and Electrician</span>!
          </h2>
          <p className="font-semibold text-base leading-relaxed antialiased">
            Upgrade your house, shop, or office with our complete renovation,
            electrical, and plumbing services covering water heaters, ceiling
            fans, air conditioners, lighting, CCTV, power sockets, main db fuse
            boxes, and a lot more!
          </p>
        </div>
        <motion.div
          style={{ y: klCityImageY }}
          className="relative h-96 md:h-auto md:w-full"
        >
          <Image
            src="/servicesKl.jpeg"
            alt="Our services"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
      {/* Upgrade your house, shop, or office with our complete renovation, electrical, and plumbing services covering water heaters, ceiling fans, air conditioners, lighting, CCTV, power sockets, main db fuse boxes, and a lot more! */}
      {/* <ScrollAnimatedParagraph
        className="my-0 font-medium text-2xl leading-none antialiased max-w-[700px] mx-auto"
        paragraph={[
          { text: "Upgrade", primary: false },
          { text: "your", primary: false },
          { text: "House,", primary: true },
          { text: "Shop,", primary: true },
          { text: "or", primary: true },
          { text: "Office", primary: true },
          { text: "with", primary: false },
          { text: "our", primary: false },
          { text: "complete", primary: false },
          { text: "Renovation,", primary: true },
          { text: "Electrical,", primary: true },
          { text: "and", primary: true },
          { text: "Plumbing", primary: true },
          { text: "Services", primary: true },
          { text: "covering", primary: false },
          { text: "Water", primary: true },
          { text: "heaters,", primary: true },
          { text: "Ceiling", primary: true },
          { text: "fans,", primary: true },
          { text: "Air", primary: true },
          { text: "conditioners,", primary: true },
          { text: "Lighting,", primary: true },
          { text: "CCTV,", primary: true },
          { text: "Power", primary: true },
          { text: "Sockets,", primary: true },
          { text: "Main", primary: true },
          { text: "DB", primary: true },
          { text: "Fuse", primary: true },
          { text: "Boxes,", primary: true },
          { text: "and a lot more!", primary: true },
        ]}
      /> */}
      {/* <div className="float-right">
        <ScrollAnimatedCog />
      </div> */}
    </div>
  );
};

// const ScrollAnimatedCog = () => {
//   const { scrollY } = useScroll();
//   const rotate = useSpring(
//     useTransform(scrollY, [0, 1000], [0, 360], { clamp: false }),
//     { bounce: 0, duration: 1 }
//   );
//   const rotateAnti = useSpring(
//     useTransform(scrollY, [0, 1000], [360, 0], {
//       clamp: false,
//     }),
//     { bounce: 0, duration: 1 }
//   );
//   return (
//     <div className="relative h-72 w-72">
//       <motion.div
//         style={{ rotate }}
//         className="absolute w-24 h-auto top-0 right-14"
//       >
//         <Cog className="w-full h-full text-stone-200" />
//       </motion.div>
//       <motion.div
//         style={{ rotate }}
//         className="absolute w-36 h-auto bottom-0 right-0"
//       >
//         <Cog className="w-full h-full text-stone-200" />
//       </motion.div>
//       <motion.div
//         style={{ rotate: rotateAnti }}
//         className="absolute w-48 h-auto top-10 left-0"
//       >
//         <Cog className="w-full h-full text-stone-200" />
//       </motion.div>
//     </div>
//   );
// };

const ScrollAnimatedParagraph = ({
  paragraph,
  className,
}: {
  paragraph: { text: string | null; primary?: boolean }[];
  className?: string;
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start 0.5"],
  });

  return (
    <p ref={container} className={className}>
      {paragraph.map((word, i) => {
        const start = i / paragraph.length;
        const end = start + 1 / paragraph.length;
        return word.text ? (
          <Word
            key={i}
            primary={word.primary}
            progress={scrollYProgress}
            range={[start, end]}
          >
            {word.text}
          </Word>
        ) : (
          <br key={i} />
        );
      })}
    </p>
  );
};

const Word = ({
  children,
  progress,
  range,
  primary,
}: {
  children: string;
  progress: MotionValue<number>;
  range: number[];
  primary?: boolean;
}) => {
  const opacity = useTransform(progress, range, [0.15, 1]);

  return (
    <span className={cn(primary ? "text-lime-500" : "text-zinc-950")}>
      <motion.span
        style={{
          opacity: opacity,
        }}
        className="inline-block"
      >
        {children}
      </motion.span>{" "}
    </span>
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
