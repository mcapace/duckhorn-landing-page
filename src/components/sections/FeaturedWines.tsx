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
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="relative rounded-2xl overflow-hidden aspect-[3/4] min-h-[320px] sm:min-h-[400px] md:min-h-[480px] shadow-lg bg-[#E8E6E2]"
                >
                  {/* Full -BG image visible (no crop). Extend each -BG at bottom with generative fill; object-contain shows whole bottle + extended area. */}
                  <Image
                    src={wine.imageBG}
                    alt={wine.name}
                    fill
                    className="object-contain object-center group-hover:scale-[1.02] transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 280px"
                  />
                  {/* CTA at bottom of card (on extended area of -BG image) */}
                  <div className="absolute bottom-0 left-0 right-0 py-5 md:py-6 text-center">
                    <span className="text-[#8B7355] text-sm md:text-base uppercase tracking-wider group-hover:text-[#6B5344] transition-colors inline-flex items-center gap-1 drop-shadow-sm">
                      Explore
                      <span className="group-hover:translate-x-0.5 transition-transform">→</span>
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
