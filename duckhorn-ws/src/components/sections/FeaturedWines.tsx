"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { featuredWines } from "@/lib/data";

export const FeaturedWines = () => {
  const [activeWine, setActiveWine] = useState<string | null>(null);

  return (
    <section
      id="featured-wines"
      className="py-24 bg-white scroll-mt-20"
    >
      <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-[#2A2A2A]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            FEATURED WINES
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#B8956A] to-transparent mx-auto mt-4" />
        </motion.div>

        {/* 5 clickable wine bottles in a row - wireframe */}
        <div className="flex flex-wrap justify-center items-end gap-8 md:gap-12">
          {featuredWines.map((wine, index) => (
            <motion.div
              key={wine.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setActiveWine(wine.id)}
              onMouseLeave={() => setActiveWine(null)}
              onClick={() => setActiveWine(activeWine === wine.id ? null : wine.id)}
              className="cursor-pointer flex flex-col items-center group"
            >
              <motion.div
                animate={{
                  scale: activeWine === wine.id ? 1.05 : 1,
                  y: activeWine === wine.id ? -12 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="relative w-24 md:w-32 h-48 md:h-64"
              >
                <Image
                  src={wine.image}
                  alt={wine.name}
                  fill
                  className="object-contain drop-shadow-xl"
                  sizes="128px"
                />
              </motion.div>
              <h3
                className="mt-4 text-sm md:text-base font-medium text-[#2A2A2A]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {wine.name}
              </h3>
              <AnimatePresence>
                {activeWine === wine.id && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-xs italic text-[#A07D4E] mt-1 text-center max-w-[140px]"
                    style={{ fontFamily: "var(--font-script)" }}
                  >
                    {wine.tagline}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
