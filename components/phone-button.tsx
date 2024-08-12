import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";
import React from "react";

const PhoneButton = ({
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"a">) => {
  return (
    <a
      href="tel:+60182709026"
      target="_blank"
      className={cn(
        "flex gap-2 items-center min-h-10 px-3 rounded-xl border-2 border-zinc-900 text-zinc-900 uppercase font-semibold",
        className
      )}
      {...rest}
    >
      {/* <Phone height={20} width={20} /> */}
      +6018-270 9026
    </a>
  );
};

export default PhoneButton;
