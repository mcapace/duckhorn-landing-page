"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { winemakers } from "@/lib/data";

const bgImage = "/images/BarrelRoomWithGalleryView_DSC4738_25pct-(1).jpg";

export const ExploreTheBrands = () => {
  return (
    <section id="explore-the-brands" className="relative py-20 md:py-28 overflow-hidden scroll-mt-20">
      <div className="absolute inset-0">
        <Image
          src={bgImage}
          alt=""
          fill
          className="object-cover object-center opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#2A2A2A]/85" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl text-white text-center tracking-tight font-bold mb-12 md:mb-16"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          EXPLORE THE BRANDS
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-8 md:gap-10 lg:gap-12">
          {winemakers.map((maker, index) => (
            <motion.div
              key={maker.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="flex flex-col items-center text-center"
            >
              <Link
                href={`/wineries#${maker.slug}`}
                className="group flex flex-col items-center"
              >
                <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden ring-2 ring-white/30 group-hover:ring-[#B8956A] transition-all duration-300 flex-shrink-0">
                  <Image
                    src={maker.image}
                    alt={maker.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="128px"
                  />
                </div>
                <h3
                  className="mt-4 text-white font-medium text-base md:text-lg"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {maker.name}
                </h3>
                <p className="text-[#B8956A] text-sm mt-0.5">{maker.winery}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/wineries"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white text-sm font-medium uppercase tracking-wider hover:bg-white hover:text-[#2A2A2A] transition-colors rounded-sm"
          >
            View All Wineries
            <span aria-hidden>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
