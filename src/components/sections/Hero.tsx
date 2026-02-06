"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Bottle order: Sonoma-Cutrer, Kosta Browne, Duckhorn, Goldeneye, Calera (per design reference)
const heroBottles = [
  { src: "/images/INSERTS_0494.jpg", alt: "Sonoma-Cutrer" },
  { src: "/images/INSERTS_0482.jpg", alt: "Kosta Browne" },
  { src: "/images/INSERTS_0478.jpg", alt: "Duckhorn" },
  { src: "/images/INSERTS_0489.jpg", alt: "Goldeneye" },
  { src: "/images/INSERTS_0486.jpg", alt: "Calera" },
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row items-center w-full pt-24 lg:pt-24">
        {/* LEFT: Wine bottles - mockup-style, prominent and large */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 min-h-[45vh] lg:min-h-[calc(100vh-6rem)] flex items-end justify-center p-8 lg:p-12 xl:p-16 bg-white w-full"
        >
          <div className="flex items-end justify-center gap-4 md:gap-6 lg:gap-8 xl:gap-10 w-full max-w-5xl xl:max-w-6xl">
            {heroBottles.map((bottle, i) => (
              <motion.div
                key={bottle.alt}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08 * i }}
                className="relative flex-1 max-w-[100px] sm:max-w-[120px] md:max-w-[150px] lg:max-w-[180px] xl:max-w-[200px] aspect-[3/10] min-h-[320px] sm:min-h-[380px] md:min-h-[450px] lg:min-h-[520px] xl:min-h-[580px]"
              >
                <Image
                  src={bottle.src}
                  alt={bottle.alt}
                  fill
                  className="object-contain object-bottom drop-shadow-xl"
                  priority
                  sizes="(max-width: 640px) 100px, (max-width: 768px) 120px, (max-width: 1024px) 150px, (max-width: 1280px) 180px, 200px"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT: Branding - centered vertically and horizontally */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 min-h-[45vh] lg:min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center px-8 md:px-12 lg:px-16 xl:px-20 py-16 lg:py-24 bg-white"
        >
          <div className="flex flex-col items-center text-center w-full max-w-md">
            <Image
              src="/images/WS logo (5).png"
              alt="Wine Spectator"
              width={200}
              height={80}
              className="h-14 md:h-16 w-auto mb-6 object-contain"
            />
            <div className="w-24 border-t border-[#3D5636]/40 pt-6 mb-4" />
            <h1
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-[#3D5636] leading-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              THE DUCKHORN COLLECTION
            </h1>
            <p
              className="mt-4 text-lg md:text-xl italic text-[#3D3D3D]"
              style={{ fontFamily: "var(--font-script)" }}
            >
              Defining American Fine Wine
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
