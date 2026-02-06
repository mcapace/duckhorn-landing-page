"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#FAFAF8] pt-24 lg:pt-24">
      {/* Hero Cover - fills viewport */}
      <div className="absolute inset-0 top-24 lg:top-24">
        <Image
          src="/images/hero-cover.png"
          alt="The Duckhorn Collection Wines"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white/10" aria-hidden />
      </div>

      {/* Branding overlay - centered */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center px-6 md:px-12"
      >
        <div className="flex flex-col items-center text-center w-full max-w-lg">
          <Image
            src="/images/WS logo (5).png"
            alt="Wine Spectator"
            width={200}
            height={80}
            className="h-14 md:h-16 w-auto mb-6 object-contain drop-shadow-sm"
          />
          <div className="w-24 border-t border-[#3D5636]/60 pt-6 mb-4" />
          <h1
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-[#3D5636] leading-tight drop-shadow-sm"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            THE DUCKHORN COLLECTION
          </h1>
          <p
            className="mt-4 text-lg md:text-xl italic text-[#3D3D3D] drop-shadow-sm"
            style={{ fontFamily: "var(--font-script)" }}
          >
            Defining American Fine Wine
          </p>
        </div>
      </motion.div>
    </section>
  );
};
