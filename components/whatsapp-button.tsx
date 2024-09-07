import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const WhatsappButton = ({
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"a">) => {
  return (
    <a
      href="https://wa.me/601128079884"
      target="_blank"
      className={cn(
        "flex gap-2 items-center min-h-10 px-3 rounded-xl bg-zinc-900 text-white uppercase font-semibold text-sm",
        className
      )}
      {...rest}
    >
      <div className="relative w-6 h-6">
        <Image src="WhatsApp.svg" alt="whatsapp logo" fill />
      </div>
      WhatsApp
    </a>
  );
};

export default WhatsappButton;
