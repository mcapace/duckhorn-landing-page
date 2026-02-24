"use client";

import { motion } from "framer-motion";

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
          <div className="flex flex-wrap items-baseline justify-center gap-6 md:gap-10 mb-6">
            <span
              className="text-xl md:text-2xl text-white whitespace-nowrap"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Wine Spectator
            </span>
            <span className="flex flex-col items-center text-left">
              <span className="text-xl md:text-2xl font-medium tracking-tight uppercase text-white">
                DUCKHORN
              </span>
              <span className="text-sm md:text-base uppercase tracking-[0.2em] text-white">
                VINEYARDS
              </span>
            </span>
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
