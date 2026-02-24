"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { winemakers } from "@/lib/data";

const featuredMaker = winemakers[0]; // Renée Ary, VP Winemaking

export const DedicatedToExcellence = () => {
  return (
    <section id="dedicated-to-excellence" className="py-20 md:py-28 bg-white scroll-mt-20">
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-10 md:gap-14"
        >
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden flex-shrink-0 bg-[#E8E4DC]">
            <Image
              src={featuredMaker.image}
              alt={featuredMaker.name}
              fill
              className="object-cover object-top"
              sizes="192px"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2
              className="text-2xl md:text-3xl text-[#2A2A2A] mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              DEDICATED TO EXCELLENCE
            </h2>
            <blockquote className="text-[#3D3D3D] text-base md:text-lg leading-relaxed italic">
              {featuredMaker.quote}
            </blockquote>
            <p
              className="mt-6 text-lg font-medium text-[#2A2A2A]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {featuredMaker.name}
            </p>
            <p className="text-sm text-[#3D5636] uppercase tracking-wider">
              {featuredMaker.title}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
