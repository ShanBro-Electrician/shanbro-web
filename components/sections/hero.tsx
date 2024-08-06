import PhoneButton from "@/components/phone-button";
import WhatsappButton from "@/components/whatsapp-button";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Separator } from "../ui/separator";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  const bgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: bgRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

  return (
    <div className="relative bg-zinc-950/60">
      {/* Background images */}
      <div
        ref={bgRef}
        className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden pointer-events-none"
      >
        <motion.div
          className="bg-zinc-950 inset-0 absolute z-20"
          style={{ opacity: scrollYProgress }}
        />
        <motion.div
          style={{ y: bgY, scale: bgScale, transformOrigin: "bottom" }}
          className="absolute w-full h-full -z-20"
        >
          <Image
            src="/HeroBg.jpg"
            fill
            quality={50}
            alt="Electrical and plumbing works"
            className="h-full w-full scale-125 object-cover"
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

      <motion.div
        style={{ y: contentY }}
        className="container pb-24 pt-40 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 z-10"
      >
        <h1 className="uppercase leading-none text-yellow-100 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl sm:col-span-2 lg:col-span-3">
          <span>We excel in </span>
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
        <p className="text-base text-stone-300">
          At ShanBro, we&apos;ve been serving customers with high quality
          repairs, installations, and emergency services. With transparent
          pricing and a commitment to safety, we&apos;re your trusted partner
          for all your electrical and plumbing needs. Contact us today for a
          free quote!
        </p>
        <ul className="self-end">
          {[
            {
              site: "TikTok",
              href: "https://www.tiktok.com/@shanbro.electrici",
            },
          ].map((s) => (
            <li key={s.site}>
              <Link
                className="text-white text-3xl font-semibold gap-2 flex items-center justify-end"
                href={s.href}
                target="_blank"
              >
                {s.site} <ArrowUpRight width={40} height={40} />
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Hero;
