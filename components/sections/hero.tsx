import PhoneButton from "@/components/phone-button";
import WhatsappButton from "@/components/whatsapp-button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-black/70 relative rounded-b-[80px] overflow-hidden h-screen">
      {/* Background Image */}
      <div className="absolute top-0 bottom-0 left-0 right-0 -z-10 blur-sm">
        <Image
          src="/HeroBg.jpg"
          fill
          quality={50}
          alt="Electrical and plumbing works"
          className="h-full w-full object-cover"
        />
      </div>
      {/* Content */}
      <div className="container space-y-8 flex flex-col py-40 sm:pl-20">
        <h1 className="text-lime-200 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="font-normal text-lg text-neutral-300">
            WE EXCEL IN
          </span>
          <br />
          <span>ELECTRICAL</span> &<br />
          <span>PLUMBING</span>
        </h1>
        <p className="text-xs text-neutral-300 max-w-96">
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
