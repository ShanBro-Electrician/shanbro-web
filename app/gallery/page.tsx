"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Page = () => {
  const [filenames, setFilenames] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFilenames = async () => {
      try {
        const response = await fetch("/api/files");
        if (!response.ok) {
          throw new Error("Failed to fetch filenames");
        }
        const data = await response.json();
        setFilenames(data);
      } catch (error: any) {
        setError(error.message);
      }
    };

    fetchFilenames();
  }, []);

  return (
    <div className="bg-zinc-950 min-h-screen py-24">
      {error}
      <div className="container">
        <ul className="grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
          {filenames.map((file) => (
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative w-full h-40 odd:col-span-2"
            >
              <Image
                key={file}
                src={`/gallery/${file}`}
                alt={file}
                fill
                quality={35}
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 30vw, 20vw"
              />
            </motion.div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page;
