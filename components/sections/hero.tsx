import PhoneButton from "@/components/phone-button";
import WhatsappButton from "@/components/whatsapp-button";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Separator } from "../ui/separator";
import { useRef } from "react";

const Hero = () => {
  const bgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: bgRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <div className="relative bg-stone-900/40">
      {/* Background image */}
      <div
        ref={bgRef}
        className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden"
      >
        <motion.div style={{ y: bgY }} className="absolute w-full h-full -z-20">
          <Image
            src="/HeroBg.jpg"
            fill
            quality={50}
            alt="Electrical and plumbing works"
            className="h-full w-full object-cover"
          />
        </motion.div>
        <Image
          src="/noiseTexture.png"
          fill
          quality={50}
          alt="Electrical and plumbing works"
          className="h-full w-full object-cover opacity-40 -z-10"
        />
      </div>

      <div className="container pb-24 pt-40 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 z-10">
        <h1 className="uppercase leading-none text-yellow-100 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl sm:col-span-2 lg:col-span-3">
          We excel in{" "}
          <span className="text-lime-300">Electrical & Plumbing</span>
        </h1>
        <Separator className="sm:col-span-2 lg:col-span-3 bg-stone-100/30" />
        <div className="space-y-4">
          <h2 className="leading-none uppercase font-semibold text-yellow-100 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            We&apos;re only <br /> one call away
          </h2>
          <div className="flex gap-2">
            <WhatsappButton />
            <PhoneButton />
          </div>
        </div>
        <p className="text-sm text-stone-200">
          At ShanBro, we&apos;ve been serving customers with high quality
          repairs, installations, and emergency services. With transparent
          pricing and a commitment to safety, we&apos;re your trusted partner
          for all your electrical and plumbing needs. Contact us today for a
          free quote!
        </p>
      </div>
    </div>
  );
};

export default Hero;
