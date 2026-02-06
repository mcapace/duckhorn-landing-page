"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row items-center lg:items-stretch w-full pt-24 lg:pt-24">
        {/* LEFT: Wine bottles - clean white surface per design */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative min-h-[50vh] lg:min-h-[calc(100vh-6rem)] flex items-center justify-center p-8 lg:p-16 bg-white"
        >
          <div className="relative w-full max-w-2xl lg:max-w-4xl h-[480px] lg:h-[75vh]">
            <Image
              src="/images/FRONT_COVER_0428-flat-edit1.jpg"
              alt="The Duckhorn Collection Wines"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </motion.div>

        {/* RIGHT: Branding - Wine Spectator gold, THE DUCKHORN COLLECTION dark green, divider */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex flex-col items-center justify-center px-8 md:px-12 lg:px-20 py-20 lg:py-28 bg-white"
        >
          <Image
            src="/images/WS logo (5).png"
            alt="Wine Spectator"
            width={200}
            height={80}
            className="h-14 md:h-16 w-auto mb-6 object-contain"
          />
          <div className="w-full max-w-md border-t border-[#3D5636]/30 pt-6 mb-4" />
          <h1
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-[#3D5636] text-center lg:text-left leading-tight"
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
        </motion.div>
      </div>

      {/* Taglines at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-8 left-0 right-0 flex flex-col md:flex-row justify-center items-center gap-3 md:gap-10 text-sm text-[#3D3D3D] px-6 z-20"
      >
        <span
          className="italic text-center"
          style={{ fontFamily: "var(--font-script)" }}
        >
          Crafting Timeless Wines From Iconic Terroirs
        </span>
        <span className="text-[#B8956A] hidden md:inline">|</span>
        <span
          className="italic text-center"
          style={{ fontFamily: "var(--font-script)" }}
        >
          Celebrating <strong>50 YEARS</strong> Of Napa Valley Heritage
        </span>
      </motion.div>
    </section>
  );
};
