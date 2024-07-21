"use client";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Reviews from "@/components/sections/reviews";
import Gallery from "@/components/sections/gallery";
import Footer from "@/components/sections/footer";
import { motion, useScroll } from "framer-motion";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <motion.div
        // rounded-t-3xl sm:rounded-t-[80px]
        className="bg-gradient-to-br from-stone-900 to-black"
        initial={{ borderTopLeftRadius: 200, borderTopRightRadius: 200 }}
        whileInView={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        viewport={{ margin: "-80px" }}
      >
        <Reviews />
        <Gallery />
        <div className="p-4">
          <Footer />
        </div>
      </motion.div>
    </main>
  );
}
