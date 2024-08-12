"use client";
import Image from "next/image";
import React, { ReactNode, useRef } from "react";
import { Separator } from "../ui/separator";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const Services = () => {
  const klCityContainer = useRef(null);
  const servicesImagesContainer = useRef(null);

  const { scrollYProgress: scrollYProgressKlService } = useScroll({
    target: klCityContainer,
    offset: ["start end", "end start"],
  });
  const klCityImageY = useTransform(
    scrollYProgressKlService,
    [0, 1],
    [150, -150]
  );

  const { scrollYProgress: scrollYProgressServicesImages } = useScroll({
    target: servicesImagesContainer,
    offset: ["start end", "end start"],
  });
  const servicesImageX = useTransform(
    scrollYProgressServicesImages,
    [0, 1],
    [100, -100]
  );

  return (
    <div className="py-20 space-y-16">
      <ScrollAnimatedParagraph
        paragraph={[
          { text: "Delivering", primary: false },
          { text: "Top-notch", primary: true },
          { text: "Services", primary: true },
          { text: "at", primary: false },
          { text: "Unbeatable", primary: true },
          { text: "Prices.", primary: true },
        ]}
        className="container leading-none antialiased uppercase font-medium text-4xl md:text-5xl lg:text-6xl"
      />
      <div
        className="relative h-48 md:h-60 overflow-hidden md:container"
        ref={servicesImagesContainer}
      >
        <motion.div
          style={{ x: servicesImageX }}
          className="absolute inset-y-0 -inset-x-64 flex justify-between gap-1 md:gap-2"
        >
          {[
            { src: "/services1.jpg", alt: "Man doing plumbing works" },
            { src: "/services2.jpg", alt: "Toolsets" },
            {
              src: "/services3.jpg",
              alt: "Man doing plumbing works with toolset bag",
            },
            { src: "/services4.jpg", alt: "Hands doing electrical works" },
          ].map((s) => (
            <div key={s.src} className="relative w-full h-full">
              <Image
                src={s.src}
                alt={s.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="container flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
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
      <div
        ref={klCityContainer}
        className="container flex flex-col gap-12 md:flex-row-reverse lg:px-32"
      >
        <div className="flex flex-col gap-12 w-full md:py-40">
          <h2 className="text-3xl font-semibold text-zinc-900">
            We are KL City&apos;s go-to{" "}
            <span className="bg-lime-100">Plumber and Electrician</span>!
          </h2>
          <p className="text-zinc-500 text-sm leading-relaxed antialiased">
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
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </div>
  );
};

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
    offset: ["start end", "start 0.25"],
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
  const opacity = useTransform(progress, range, [0.1, 1]);

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
