import PhoneButton from "@/components/phone-button";
import WhatsappButton from "@/components/whatsapp-button";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const Hero = () => {
  const containerVariants: Variants = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const itemVariants: Variants = {
    visible: {
      opacity: 1,
      filter: "blur(0)",
      y: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
    hidden: {
      opacity: 0,
      filter: "blur(20px)",
      y: 10,
      scale: 1.2,
    },
  };

  return (
    <div className="bg-black/70 relative overflow-hidden h-screen md:h-auto">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.5, y: 100, rotate: 10 }}
        whileInView={{ scale: 1, y: 0, rotate: 0 }}
        transition={{ duration: 5 }}
        viewport={{ margin: "-400px" }}
        className="absolute top-0 bottom-0 left-0 right-0 -z-10 blur-sm"
      >
        <Image
          src="/HeroBg.jpg"
          fill
          quality={50}
          alt="Electrical and plumbing works"
          className="h-full w-full object-cover"
        />
      </motion.div>
      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container space-y-8 flex flex-col py-40 sm:pl-20"
      >
        <motion.h1
          variants={itemVariants}
          className="text-lime-200 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="font-normal text-lg text-neutral-300">
            WE EXCEL IN
          </span>
          <br />
          <span>ELECTRICAL</span> &<br />
          <span>PLUMBING</span>
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-xs text-neutral-300 max-w-96"
        >
          At ShanBro, we’ve been serving customers with high quality repairs,
          installations, and emergency services. With transparent pricing and a
          commitment to safety, we’re your trusted partner for all your
          electrical and plumbing needs. Contact us today for a free quote!
        </motion.p>
        <motion.div variants={itemVariants} className="flex gap-1 w-max">
          <WhatsappButton />
          <PhoneButton />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
