"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { perspectiveContent, perspectiveImages } from "@/lib/data";

export const Perspective = () => {
  const [leftTop, leftBottom, ...rightImages] = perspectiveImages;

  return (
    <section
      id="perspective"
      className="py-24 bg-white scroll-mt-20"
    >
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Title + Subtitle - wireframe */}
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

        {/* 5-image grid: 2 stacked left, 3 horizontal right - wireframe */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 mb-16"
        >
          {/* Left column: 2 stacked */}
          <div className="md:col-span-2 grid grid-rows-2 gap-6 md:gap-8">
            <div className="relative aspect-square min-h-[280px] md:min-h-[360px] overflow-hidden rounded-lg">
              <Image
                src={leftTop.src}
                alt={leftTop.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </div>
            <div className="relative aspect-square min-h-[280px] md:min-h-[360px] overflow-hidden rounded-lg">
              <Image
                src={leftBottom.src}
                alt={leftBottom.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </div>
          </div>
          {/* Right column: 3 horizontal */}
          <div className="md:col-span-3 grid grid-cols-3 gap-6 md:gap-8">
            {rightImages.map((img) => (
              <div
                key={img.src}
                className="relative aspect-[4/3] min-h-[200px] md:min-h-[280px] overflow-hidden rounded-lg"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 33vw, 350px"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* CEO letter text - wireframe */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-6 text-[#3D3D3D] leading-relaxed mb-10"
        >
          {perspectiveContent.letter.split("\n\n").map((para, i) => (
            <p key={i} className="text-base md:text-lg">
              {para}
            </p>
          ))}
        </motion.div>

        {/* Signatures / brand logos - wireframe */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-[#E8E4DC]"
        >
          <div>
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
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {["DUCKHORN VINEYARDS", "KOSTA BROWNE", "CALERA", "GOLDENEYE", "SONOMA-CUTRER"].map((brand) => (
              <span
                key={brand}
                className="text-xs uppercase tracking-[0.15em] text-[#3D5636] font-medium"
              >
                {brand}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
