"use client";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Reviews from "@/components/sections/reviews";
import Gallery from "@/components/sections/gallery";
import Footer from "@/components/sections/footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Reviews />
      <Gallery />
      <div className="p-4">
        <Footer />
      </div>
    </main>
  );
}
