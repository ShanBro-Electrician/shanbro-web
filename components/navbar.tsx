"use client";
import PhoneButton from "./phone-button";
import WhatsappButton from "./whatsapp-button";
import Logo from "./logo";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSolid, setIsSolid] = useState(false);

  const onScroll = () => {
    if (window.scrollY > 150) {
      setIsSolid(true);
    } else {
      setIsSolid(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  });

  const menuVariants: Variants = {
    open: {
      scaleY: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
    closed: {
      scaleY: 0,
      transition: {
        staggerChildren: 0.2,
        when: "afterChildren",
        staggerDirection: -1,
      },
    },
  };

  const itemVariants: Variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: 10 },
  };

  return (
    <div
      className={cn(
        "fixed z-50 w-full transition-colors duration-500",
        isOpen || isSolid
          ? "text-zinc-900 bg-white"
          : "text-zinc-100 bg-transparent"
      )}
    >
      <div className="border-b-[1px] border-b-stone-100/30 container py-2 flex justify-between items-center">
        <Logo height={48} />
        <Menu className="sm:hidden" onClick={() => setIsOpen(!isOpen)} />
        <div className="hidden sm:flex gap-2">
          <WhatsappButton />
          <PhoneButton />
        </div>
      </div>

      {/* Mobile Nav screen */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="sm:hidden h-96 flex flex-col p-4 justify-center items-center gap-2 bg-white origin-top"
            animate="open"
            initial="closed"
            exit="closed"
            variants={menuVariants}
          >
            <div className="text-zinc-950 font-semibold text-xl">
              Contact Us
            </div>
            <motion.div variants={itemVariants}>
              <WhatsappButton />
            </motion.div>
            <motion.div variants={itemVariants}>
              <PhoneButton />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// {/* <div className="flex flex-col gap-1 sm:flex-row">
//   <WhatsappButton />
//   <PhoneButton />
// </div> */}

export default Navbar;
