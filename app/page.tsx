import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Reviews from "@/components/sections/reviews";
import Gallery from "@/components/sections/gallery";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <div className="bg-gradient-to-br from-stone-900 to-black rounded-t-3xl sm:rounded-t-[80px]">
        <Reviews />
        <Gallery />
        <div className="p-4">
          <Footer />
        </div>
      </div>
    </main>
  );
}
