import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Reviews from "@/components/sections/reviews";
import Gallery from "@/components/sections/gallery";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <div className="bg-stone-950">
        <Reviews />
        <Gallery />
      </div>
    </main>
  );
}
