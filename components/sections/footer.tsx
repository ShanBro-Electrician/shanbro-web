import PhoneButton from "../phone-button";
import WhatsappButton from "../whatsapp-button";
import Logo from "../logo";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-[#c2ed77]">
      <div className="container py-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
          <h2 className="uppercase font-black text-zinc-900 tracking-tight leading-none text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Get in touch
          </h2>
          <div className="flex flex-col gap-1 sm:flex-row">
            <WhatsappButton />
            <PhoneButton />
          </div>
        </div>
        <Separator className="bg-black/25 hidden sm:block my-4" />
        <div className="sm:flex sm:justify-between mt-4">
          <p className="text-black/50 font-semibold text-xs">
            8A, Sentul Park,
            <br /> Jalan Sentul Pasar, Sentul,
            <br /> 51100 WP Kuala Lumpur.
          </p>

          <Separator
            className="hidden sm:block sm:h-10 bg-black/25"
            orientation="vertical"
          />
          <Separator className="my-4 bg-black/25 sm:hidden" />
          <ul>
            {[
              {
                site: "TikTok",
                href: "https://www.tiktok.com/@shanbro.electrici",
              },
            ].map((s) => (
              <li key={s.site} className="text-zinc-900">
                <Link
                  // className="text-zinc-300 uppercase text-3xl flex items-center lg:justify-end transition-transform group hover:-translate-x-2 hover:underline hover:text-white hover:font-semibold"
                  className="flex items-center justify-end uppercase text-3xl font-semibold"
                  href={s.href}
                  target="_blank"
                >
                  {s.site}{" "}
                  <ArrowUpRight
                    className=""
                    // className="relative transition-transform group-hover:translate-x-4 group-hover:-translate-y-2 group-hover:scale-125 group-hover:stroke-[3]"
                    width={40}
                    height={40}
                    strokeLinecap="round"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
