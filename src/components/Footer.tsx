"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="py-16 md:py-20 bg-[#425a4d] text-white">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-5xl mx-auto text-center"
        >
          {/* Gold separator line */}
          <div className="w-full max-w-3xl h-px bg-[#B8956A] mx-auto mb-12 md:mb-14" aria-hidden />

          {/* Two logos side by side */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-6">
            <Image
              src="/images/WSlogoWhite-stroke (2) (4) (5).png"
              alt="Wine Spectator"
              width={180}
              height={60}
              className="h-8 md:h-10 w-auto object-contain"
            />
            <Image
              src="/images/DuckhornWordmark_logo_white.png"
              alt="Duckhorn Vineyards"
              width={200}
              height={56}
              className="h-8 md:h-10 w-auto object-contain"
            />
          </div>

          {/* Tagline */}
          <p
            className="text-white/90 text-sm md:text-base italic"
            style={{ fontFamily: "var(--font-script)" }}
          >
            Defining American Fine Wine — Sponsored Special Feature
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
