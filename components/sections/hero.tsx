import PhoneButton from "@/components/phone-button";
import WhatsappButton from "@/components/whatsapp-button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-black/80 relative">
      {/* Background Image */}
      <div className="absolute top-0 bottom-0 left-0 right-0 -z-10">
        <Image
          src="/HeroBg.jpg"
          fill
          quality={50}
          alt="Electrical and plumbing works"
          className="h-full w-full object-cover"
        />
      </div>
      {/* Content */}
      <div className="container space-y-8 flex flex-col pt-20 pb-40 sm:pl-20">
        <h1 className="text-white font-black font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="font-normal text-2xl">WE EXCEL IN</span>
          <br />
          <span className="text-[#FF6CC4]">ELECTRICAL</span> <br /> &
          <span className="text-[#00C2FF]">PLUMBING</span>
        </h1>
        <p className="text-xs text-muted/70 max-w-96">
          At ShanBro, we’ve been serving customers with high quality repairs,
          installations, and emergency services. With transparent pricing and a
          commitment to safety, we’re your trusted partner for all your
          electrical and plumbing needs. Contact us today for a free quote!
        </p>
        <div className="flex gap-1">
          <WhatsappButton />
          <PhoneButton />
        </div>
      </div>
    </div>
  );
};

export default Hero;
