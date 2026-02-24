"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white pt-20">
      {/* Full-bleed hero image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bottles/Duckhorn-Digital-Edits-Hero.jpg"
          alt="The Duckhorn Collection Wines"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent" />
      </div>

      {/* Logo overlay - left aligned, large like reference */}
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-16 xl:px-24"
      >
        <div className="max-w-[420px] sm:max-w-[520px] md:max-w-[600px] lg:max-w-[680px]">
          <Image
            src="/images/bottles/Duckhorn-Digital-Edits-Hero Copy.png"
            alt="The Duckhorn Portfolio"
            width={680}
            height={240}
            className="w-full h-auto object-contain object-left"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
};
