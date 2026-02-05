"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row items-center lg:items-stretch w-full pt-24 lg:pt-24">
        {/* LEFT: Wine bottles image - wireframe */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative min-h-[50vh] lg:min-h-[calc(100vh-6rem)] flex items-center justify-center p-6 lg:p-12 bg-[#F8F6F1]"
        >
          <div className="relative w-full max-w-2xl lg:max-w-4xl h-[500px] lg:h-[80vh]">
            <Image
              src="/images/FRONT_COVER_0428-flat-edit1.jpg"
              alt="The Duckhorn Collection Wines"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>
        </motion.div>

        {/* RIGHT: Branding - wireframe */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex flex-col items-center justify-center px-6 md:px-12 lg:px-16 py-16 lg:py-24"
        >
          <Image
            src="/images/WS logo (5).png"
            alt="Wine Spectator"
            width={180}
            height={72}
            className="h-12 md:h-14 w-auto mb-8 object-contain"
          />
          <h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[#2A2A2A] text-center lg:text-left mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            THE DUCKHORN COLLECTION
          </h1>
          <p
            className="text-xl md:text-2xl italic text-[#A07D4E]"
            style={{ fontFamily: "var(--font-script)" }}
          >
            Defining American Fine Wine
          </p>
        </motion.div>
      </div>

      {/* Taglines at bottom - wireframe */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-8 left-0 right-0 flex flex-col md:flex-row justify-center items-center gap-2 md:gap-8 text-sm text-[#3D3D3D] px-4 z-20"
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
