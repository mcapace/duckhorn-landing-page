"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { perspectiveContent, perspectiveImages } from "@/lib/data";
import { GlassCard } from "@/components/ui/GlassCard";

export const Perspective = () => {
  return (
    <section
      id="perspective"
      className="py-24 bg-[#F8F6F1] scroll-mt-20"
    >
      <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-[#2A2A2A] mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {perspectiveContent.title}
          </h2>
          <p className="text-lg text-[#3D3D3D] max-w-2xl mx-auto mb-4">
            {perspectiveContent.subtitle}
          </p>
          <p
            className="italic text-xl text-[#B8956A]"
            style={{ fontFamily: "var(--font-script)" }}
          >
            {perspectiveContent.tagline}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
          {/* Image grid - wireframe layout: masonry-style grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 grid-rows-[auto_auto_auto] gap-3"
          >
            <div className="col-span-2 row-span-2 relative aspect-[3/4] overflow-hidden rounded-xl">
              <Image
                src={perspectiveImages[0].src}
                alt={perspectiveImages[0].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
            {perspectiveImages.slice(1, 5).map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 1) * 0.08 }}
                className="relative aspect-square overflow-hidden rounded-xl"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 33vw, 200px"
                />
              </motion.div>
            ))}
          </motion.div>

          <GlassCard className="p-8 md:p-10" variant="light">
            <div className="space-y-6 text-[#3D3D3D] leading-relaxed">
              {perspectiveContent.letter.split("\n\n").map((para, i) => (
                <p key={i} className="text-base md:text-lg">
                  {para}
                </p>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-[#D4CFC4]">
              <p
                className="font-medium text-[#2A2A2A]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {perspectiveContent.signature}
              </p>
              <p className="text-sm text-[#A07D4E]">
                {perspectiveContent.title_line}
              </p>
            </div>
          </GlassCard>
        </div>

        {/* Brand logos strip - wireframe */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 md:gap-12 py-8 border-t border-[#E8E4DC]"
        >
          {["DUCKHORN VINEYARDS", "KOSTA BROWNE", "CALERA", "GOLDENEYE", "SONOMA-CUTRER"].map((brand) => (
            <span
              key={brand}
              className="text-xs md:text-sm uppercase tracking-[0.2em] text-[#3D5636] font-medium"
            >
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
