import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { Separator } from "../ui/separator";
import { useEffect, useRef, useState } from "react";

const Reviews = () => {
  return (
    <div className="bg-lime-300">
      <div className="container py-6 flex flex-col gap-8 items-center md:gap-16 md:flex-row md:justify-around">
        {/* Text content */}
        <motion.div
          className="space-y-4 md:w-[500px] md:space-y-8"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="uppercase flex flex-col-reverse gap-1">
            <h3 className="font-bold text-zinc-900 tracking-tight leading-none text-3xl md:text-4xl">
              What our customers say about us
            </h3>
            <h2 className="font-semibold text-black/50">Reviews</h2>
          </div>
          <p className="text-black/80 text-sm">
            Don’t just take our word for it. Hear it from our customers. With
            over 500 clients, and 16 years of experience, we have been providing
            quality services to loyal customers with 100% satisfaction rate.
          </p>
          <div className="flex justify-between items-center">
            <p className="uppercase text-xs font-bold text-black/50 w-max leading-none">
              <span className="text-3xl text-zinc-900">100+</span>
              <br />
              <span>
                Projects <br /> Completed
              </span>
            </p>
            <Separator orientation="vertical" className="h-8 bg-black/30" />
            <p className="uppercase text-xs font-bold text-black/50 w-max leading-none">
              <span className="text-3xl text-zinc-900">500+</span>
              <br />
              <span>
                Happy <br /> Customers
              </span>
            </p>
            <Separator orientation="vertical" className="h-8 bg-black/30" />
            <p className="uppercase text-xs font-bold text-black/50 w-max leading-none">
              <span className="text-3xl text-zinc-900">16</span>
              <br />
              <span>
                Years of <br /> Experience
              </span>
            </p>
          </div>
        </motion.div>
        {/* Reviews */}
        <div className=" h-[600px] overflow-y-hidden relative md:w-96">
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-lime-300 via-lime-300 to-transparent z-10" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-lime-300 via-lime-300 to-transparent z-10" />
          <InfiniteScroll />
        </div>
      </div>
    </div>
  );
};

const InfiniteScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [totalHeight, setTotalHeight] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      // Calculate the total height of all items
      setTotalHeight(containerRef.current.scrollHeight / 2); // Divide by 2 due to duplication
    }
  }, []);

  return (
    <div
      className="overflow-y-hidden relative"
      style={{
        height: `${totalHeight}px`,
      }}
    >
      <motion.div
        ref={containerRef}
        className="flex flex-col space-y-2"
        animate={{
          y: [0, -totalHeight], // Move up by the total height of the original set
        }}
        transition={{
          duration: 20, // Adjust duration for speed
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* Duplicate the content twice */}
        {[...reviews, ...reviews].map((item, index) => (
          <div key={index}>
            <ReviewCard name={item.name} text={item.text} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

interface ReviewCardProps extends React.ComponentPropsWithoutRef<"div"> {
  name: string;
  text: string;
}

const ReviewCard = ({ name, text, className, ...rest }: ReviewCardProps) => {
  return (
    <div
      className={cn(
        "bg-zinc-100 p-4 space-y-1 rounded-xl shadow-md",
        className
      )}
      {...rest}
    >
      <h3 className="text-sm font-semibold text-zinc-900">{name}</h3>
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star key={i} stroke="0" width={16} className="fill-yellow-500" />
        ))}
      </div>
      <p className="text-xs text-muted-foreground leading-normal">{text}</p>
    </div>
  );
};

const reviews = [
  {
    name: "Ashley Foo",
    text: "ShanBro Electrical Service is the best electrician I've searched for. Everyone give 5 star for a reason! He came to my company for electric trip issue, and he found the cause of electric trip very fast too. Price is reasonable, and he can also give estimation cost after telling the issue we are facing before we book the service with him. Thank you ShanBro for your service!",
  },
  {
    name: "Nathan Lee",
    text: "Installed our outdoor lighting, and it looks amazing. He listened to what we wanted and delivered exactly that. His work has truly transformed our garden!",
  },
  {
    name: "Richelle",
    text: "Recommended!! Happy with their works!! Always responsible, craftsmanship is neat and tidy, price is reasonable also. Have been approaching them for the 3rd times already for different scopes, water plumbing, tiles works and electrical wiring.👍🏻👍🏻",
  },
  {
    name: "Sara Roy",
    text: "Found their ads on facebook. happy and satisfied with their services. urgently need wireman and he came immediately when other wiremen ignored me and didn't reply my text. he did the job very well and quickly.affordable charges. kerja bguss! my husband and i sukaa sangat",
  },
  {
    name: "Natarajan",
    text: "Did an outstanding job rewiring our entire house. He was punctual, professional, and made sure everything was up to code. I highly recommend him for any electrical work!",
  },
  {
    name: "Priya",
    text: "He is nothing short of a plumbing wizard! We had water gushing out of a broken pipe in the middle of the night, and he arrived in record time. Not only did he fix the issue, but he also explained everything in a way we could understand.",
  },
];

export default Reviews;
