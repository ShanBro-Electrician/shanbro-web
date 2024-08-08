import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Gallery = () => {
  const motionVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      transformOrigin: "top",
    },
    visible: {
      opacity: 1,
      y: 0,
      transformOrigin: "top",
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="container py-8">
      <motion.h1
        viewport={{ margin: "-80px" }}
        variants={motionVariants}
        initial="hidden"
        whileInView="visible"
        className="text-xl md:text-3xl text-lime-100 font-semibold mb-2"
      >
        GALLERY
      </motion.h1>
      <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((img) => (
          <motion.div
            viewport={{ margin: "-100px", once: true }}
            variants={motionVariants}
            initial="hidden"
            whileInView="visible"
            key={img.src}
            className="relative h-32 sm:h-48 md:h-72 lg:h-96"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>
      <Link
        href="/gallery"
        className="rounded border-2 border-white text-white font-semibold inline-block text-center w-full p-4 mt-4 transition-colors hover:text-black hover:bg-white"
      >
        View more photos
      </Link>
    </div>
  );
};

const images = [
  { src: "/gallery/1.jpg", alt: "Working with electrical plugs." },
  { src: "/gallery/2.jpg", alt: "Man working on plumbing job." },
  { src: "/gallery/3.jpg", alt: "Man analysing pipes." },
  { src: "/gallery/4.jpg", alt: "Electrical and plumbing works." },
  {
    src: "/gallery/5.jpg",
    alt: "Smiling hardworking man posing beside electrical components.",
  },
  {
    src: "/gallery/6.jpg",
    alt: "Man working with electrical components of a cupboard.",
  },
  { src: "/gallery/7.jpg", alt: "Man working on pipes." },
  { src: "/gallery/8.jpg", alt: "Working with more electrical plugs." },
];

export default Gallery;
