"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { featuredWines } from "@/lib/data";

export const FeaturedWines = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="featured-wines"
      ref={containerRef}
      className="relative py-20 md:py-28 overflow-hidden bg-[#FAFAF8]"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 mb-12"
      >
        <h2
          className="text-4xl md:text-5xl lg:text-6xl text-[#2A2A2A] tracking-tight font-light uppercase"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          FEATURED WINES
        </h2>
        <p className="mt-4 text-[#3D3D3D] text-lg max-w-xl">
          Five estates. One pursuit of excellence.
        </p>
        <div className="w-16 h-px bg-[#E8E4DC] mt-6" />
      </motion.div>

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-2 gap-4 sm:gap-5 md:flex md:flex-nowrap md:justify-center md:gap-6 [&>*:last-child]:col-span-2 [&>*:last-child]:w-[calc((100%-1rem)/2)] [&>*:last-child]:sm:w-[calc((100%-1.25rem)/2)] [&>*:last-child]:justify-self-center md:[&>*:last-child]:w-auto md:[&>*:last-child]:max-w-[280px] md:[&>*:last-child]:col-span-auto">
          {featuredWines.map((wine, index) => (
            <motion.div
              key={wine.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="flex-1 min-w-0 max-w-full md:max-w-[280px] lg:max-w-[300px]"
            >
              <Link href={`/wineries/${wine.id}`} className="block group">
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="relative rounded-2xl overflow-hidden bg-[#F5F3EF] min-h-[380px] sm:min-h-[420px] md:min-h-[560px] flex flex-col shadow-lg"
                >
                  {/* Bottle area: full bottle visible (object-contain), no crop; generous bottom gap so CTA never overlaps */}
                  <div className="flex-1 min-h-0 flex items-end justify-center px-4 pt-6 pb-6 md:pt-8 md:pb-8">
                    <div className="relative w-full h-full min-h-[200px] sm:min-h-[240px] md:min-h-[300px]">
                      <Image
                        src={wine.imageBG}
                        alt={wine.name}
                        fill
                        className="object-contain object-bottom group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 176px, (max-width: 1024px) 208px, 240px"
                      />
                    </div>
                  </div>

                  {/* CTA strip - always below bottle with clear separation */}
                  <div className="flex-shrink-0 py-4 md:py-5 pl-5 pr-4 text-left border-t border-[#E8E4DC]">
                    <span className="inline-flex items-center gap-2 text-[#8B7355] text-xs sm:text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                      EXPLORE
                      <span aria-hidden>→</span>
                    </span>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
