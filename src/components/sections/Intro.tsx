"use client";

import { motion } from "framer-motion";

export const Intro = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16 text-center"
      >
        <p
          className="text-2xl md:text-3xl text-[#2A2A2A] leading-relaxed italic"
          style={{ fontFamily: "var(--font-script)" }}
        >
          Crafted by Place. Defined by Hospitality.
        </p>
        <p className="mt-8 text-[#3D3D3D] leading-relaxed">
          For fifty years, The Duckhorn Collection has stood at the center of American fine wine—
          rooted in vineyard integrity, generational stewardship, and the belief that exceptional
          wines begin with exceptional sites. This feature highlights five of our wineries and the
          people behind the wines.
        </p>
        <p className="mt-4 text-sm text-[#A07D4E]">
          Robert Hanson · CEO, The Duckhorn Collection
        </p>
      </motion.div>
    </section>
  );
};
