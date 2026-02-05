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
      className="py-24 bg-[#F8F6F1] scroll-mt-20"
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
          <p className="text-[#3D3D3D] mt-6 max-w-2xl mx-auto">
            5 clickable wine bottles—explore each estate&apos;s expression
          </p>
        </motion.div>

        {/* Primary image: 5 bottles from FRONT_COVER (wireframe) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-full max-w-[1200px] mx-auto mb-12"
        >
          <div className="relative aspect-[16/10] md:aspect-[2/1]">
            <Image
              src="/images/FRONT_COVER_0428-flat-edit1.jpg"
              alt="The Duckhorn Collection - Five Estate Wines"
              fill
              className="object-contain drop-shadow-2xl"
              sizes="(max-width: 768px) 100vw, 896px"
              priority
            />
          </div>
        </motion.div>

        {/* Interactive row: brand labels matching wireframe */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {featuredWines.map((wine, index) => (
            <motion.div
              key={wine.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              onMouseEnter={() => setActiveWine(wine.id)}
              onMouseLeave={() => setActiveWine(null)}
              onClick={() => setActiveWine(activeWine === wine.id ? null : wine.id)}
              className="cursor-pointer text-center group"
            >
              <div className="relative w-24 md:w-32 h-24 md:h-32 rounded-lg overflow-hidden border-2 border-transparent group-hover:border-[#B8956A] transition-colors">
                <Image
                  src={wine.image}
                  alt={wine.name}
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </div>
              <h3
                className="mt-3 text-sm md:text-base font-medium text-[#2A2A2A]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {wine.brand}
              </h3>
              <AnimatePresence>
                {activeWine === wine.id && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-xs italic text-[#A07D4E] mt-1"
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
