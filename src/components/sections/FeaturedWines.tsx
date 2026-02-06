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
      className="relative py-28 md:py-36 overflow-hidden bg-[#FAFAF8]"
    >
      {/* Section header - fixed position, fades as you scroll into carousel */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 mb-16"
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

      {/* Horizontal scroll carousel */}
      <div className="relative">
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-10 pb-8 px-6 md:px-12 lg:px-20 scrollbar-hide">
          {featuredWines.map((wine, index) => (
            <motion.div
              key={wine.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[calc(50%-1rem)] lg:w-[calc(40%-1rem)] xl:w-[380px] snap-center"
            >
              <Link href={`/wineries/${wine.id}`} className="block group">
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className={`relative rounded-2xl overflow-hidden bg-gradient-to-b ${gradients[index]} min-h-[420px] md:min-h-[480px] flex flex-col items-center justify-end pb-10 pt-16 shadow-xl`}
                >

                  {/* Bottle - positioned to feel like it's emerging from the card */}
                  <div className="relative w-32 h-44 md:w-40 md:h-56 lg:w-44 lg:h-60 flex-shrink-0 -mb-4">
                    <Image
                      src={wine.image}
                      alt={wine.name}
                      fill
                      className="object-contain object-bottom drop-shadow-[0_30px_60px_rgba(0,0,0,0.4)] group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 128px, 176px"
                    />
                  </div>

                  {/* Text overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 pt-24 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <h3
                      className="text-2xl md:text-3xl text-white font-medium"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {wine.name}
                    </h3>
                    <p
                      className="text-[#C5A572] italic mt-2 text-sm md:text-base"
                      style={{ fontFamily: "var(--font-script)" }}
                    >
                      {wine.tagline}
                    </p>
                    <span className="inline-flex items-center gap-2 mt-4 text-[#B8956A] text-sm uppercase tracking-wider group-hover:gap-4 transition-all">
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

        {/* Scroll hint dots */}
        <div className="flex justify-center gap-2 mt-8">
          {featuredWines.map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-[#E8E4DC]"
              aria-hidden
            />
          ))}
        </div>
      </div>
    </section>
  );
};
