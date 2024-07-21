import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import { motion, Variants } from "framer-motion";

const Reviews = () => {
  const motionVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      scaleY: 1.5,
      transformOrigin: "top",
      filter: "blur(5px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scaleY: 1,
      transformOrigin: "top",
      filter: "blur(0)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="container py-20 space-y-4">
      <div className="flex flex-col-reverse text-center gap-2">
        <motion.h1
          viewport={{ margin: "-80px" }}
          variants={motionVariants}
          initial="hidden"
          whileInView="visible"
          className="text-xl text-lime-100 font-semibold leading-none md:text-3xl md:w-[30rem] md:mx-auto"
        >
          WHAT OUR CUSTOMERS SAY ABOUT US
        </motion.h1>
        <motion.h2
          viewport={{ margin: "-80px" }}
          variants={motionVariants}
          initial="hidden"
          whileInView="visible"
          className="text-muted-foreground"
        >
          REVIEWS
        </motion.h2>
      </div>
      <motion.div
        viewport={{ margin: "-80px" }}
        variants={motionVariants}
        initial="hidden"
        whileInView="visible"
        className="space-y-2 md:space-y-0 md:grid md:grid-cols-4 md:gap-8 md:items-end md:py-8 md:px-10 lg:px-20 2xl:px-48"
      >
        <ReviewCard
          name={reviews[0].name}
          text={reviews[0].text}
          className="col-span-2"
        />
        <ReviewCard
          name={reviews[1].name}
          text={reviews[1].text}
          className="col-span-2 md:h-max"
        />
        <ReviewCard
          name={reviews[2].name}
          text={reviews[2].text}
          className="col-start-2 col-span-2"
        />
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
    <div className={cn("bg-stone-900 p-4 space-y-1", className)} {...rest}>
      <h3 className="text-xs font-semibold text-neutral-200">{name}</h3>
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star key={i} stroke="0" width={16} className="fill-lime-500" />
        ))}
      </div>
      <p className="text-xs text-neutral-400 leading-normal">{text}</p>
    </div>
  );
};

const reviews = [
  {
    name: "Ashley Foo",
    text: "ShanBro Electrical Service is the best electrician I've searched for. Everyone give 5 star for a reason! He came to my company for electric trip issue, and he found the cause of electric trip very fast too. Price is reasonable, and he can also give estimation cost after telling the issue we are facing before we book the service with him. Thank you ShanBro for your service!",
  },
  {
    name: "Richelle",
    text: "Recommended!! Happy with their works!! Always responsible, craftsmanship is neat and tidy, price is reasonable also. Have been approaching them for the 3rd times already for different scopes, water plumbing, tiles works and electrical wiring.👍🏻👍🏻",
  },
  {
    name: "Sara Roy",
    text: "Found their ads on facebook. happy and satisfied with their services. urgently need wireman and he came immediately when other wiremen ignored me and didn't reply my text. he did the job very well and quickly.affordable charges. kerja bguss! my husband and i sukaa sangat",
  },
];

export default Reviews;
