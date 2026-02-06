"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white pt-24 lg:pt-24">
      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row items-stretch w-full">
        {/* LEFT: Bottles image - fills space */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 min-h-[45vh] lg:min-h-[calc(100vh-6rem)] relative overflow-hidden bg-[#FAFAF8]"
        >
          <Image
            src="/images/hero-cover.png"
            alt="The Duckhorn Collection Wines"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>

        {/* RIGHT: Branding */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="flex-1 min-h-[45vh] lg:min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center px-8 md:px-12 lg:px-16 xl:px-24 py-16 lg:py-24 bg-white"
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
