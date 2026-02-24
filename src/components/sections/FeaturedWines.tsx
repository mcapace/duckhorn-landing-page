"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { featuredWines } from "@/lib/data";

const gradients = [
  "from-[#2D1216] via-[#3D1A20] to-[#2D1216]",
  "from-[#2A2A2A] via-[#3D3D3D] to-[#2A2A2A]",
  "from-[#1E2E1C] via-[#2A3D28] to-[#1E2E1C]",
  "from-[#2C1F2A] via-[#3D2A38] to-[#2C1F2A]",
  "from-[#2A2E2A] via-[#3A403A] to-[#2A2E2A]",
];

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
          className="text-4xl md:text-5xl lg:text-6xl text-[#2A2A2A] tracking-tight"
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
                  className={`relative rounded-2xl overflow-hidden bg-gradient-to-b ${gradients[index]} min-h-[340px] sm:min-h-[380px] md:min-h-[500px] flex flex-col items-center justify-end pb-5 pt-10 md:pb-6 md:pt-14 shadow-xl`}
                >
                  {/* Bottle - -BG images, fixed sizes, clearance above text so no overlap */}
                  <div className="relative w-28 h-40 sm:w-36 sm:h-52 md:w-52 md:h-76 lg:w-60 lg:h-88 flex-shrink-0 mb-12 md:mb-20">
                    <Image
                      src={wine.imageBG}
                      alt={wine.name}
                      fill
                      className="object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 176px, (max-width: 1024px) 208px, 240px"
                    />
                  </div>

                  {/* Text overlay - centered, clear of bottle */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 pt-20 md:pt-28 bg-gradient-to-t from-black/85 via-black/50 to-transparent text-center">
                    <h3
                      className="text-base sm:text-lg md:text-2xl text-white font-medium"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {wine.name}
                    </h3>
                    <p
                      className="text-[#C5A572] italic mt-1 md:mt-2 text-xs sm:text-sm md:text-base line-clamp-2"
                      style={{ fontFamily: "var(--font-script)" }}
                    >
                      {wine.tagline}
                    </p>
                    <span className="inline-flex items-center justify-center gap-2 mt-2 md:mt-3 text-[#B8956A] text-[10px] sm:text-xs uppercase tracking-wider group-hover:gap-4 transition-all">
                      Explore
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
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
