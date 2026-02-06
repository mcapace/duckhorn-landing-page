"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { featuredWines } from "@/lib/data";

export const FeaturedWines = () => {
  const [activeWine, setActiveWine] = useState<string | null>(null);

  return (
    <section id="featured-wines" className="py-28 md:py-36 bg-[#FAFAF8] scroll-mt-20">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-[#2A2A2A] tracking-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            FEATURED WINES
          </h2>
          <div className="w-16 h-px bg-[#E8E4DC] mx-auto mt-6" />
        </motion.div>

        <div className="flex flex-wrap justify-center items-end gap-14 md:gap-20 lg:gap-28">
          {featuredWines.map((wine, index) => (
            <motion.div
              key={wine.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              onMouseEnter={() => setActiveWine(wine.id)}
              onMouseLeave={() => setActiveWine(null)}
              className="flex flex-col items-center group"
            >
              <Link href={`/wineries/${wine.id}`} className="flex flex-col items-center">
              <motion.div
                animate={{
                  scale: activeWine === wine.id ? 1.03 : 1,
                  y: activeWine === wine.id ? -16 : 0,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative w-40 md:w-52 lg:w-64 xl:w-72 h-56 md:h-72 lg:h-96 xl:h-[420px]"
              >
                <Image
                  src={wine.image}
                  alt={wine.name}
                  fill
                  className="object-contain object-bottom drop-shadow-2xl transition-shadow duration-300 group-hover:drop-shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]"
                  sizes="(max-width: 768px) 208px, (max-width: 1024px) 256px, (max-width: 1280px) 288px, 320px"
                />
              </motion.div>
              <h3
                className="mt-6 text-lg md:text-xl font-medium text-[#2A2A2A] tracking-tight"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {wine.name}
              </h3>
              <AnimatePresence>
                {activeWine === wine.id && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="text-sm italic text-[#A07D4E] mt-2 text-center max-w-[180px]"
                    style={{ fontFamily: "var(--font-script)" }}
                  >
                    {wine.tagline}
                  </motion.p>
                )}
              </AnimatePresence>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
