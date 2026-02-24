"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { perspectiveContent, perspectiveImages } from "@/lib/data";

export const Perspective = () => {
  return (
    <section id="perspective" className="py-20 md:py-28 bg-white scroll-mt-20">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-10"
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-[#596F33] tracking-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {perspectiveContent.title}
          </h2>
          <div className="flex justify-center mt-4 mb-5" aria-hidden>
            <Image
              src="/images/bottles/Duckhorn-Digital-Edits-Duck-Outline.png"
              alt=""
              width={80}
              height={48}
              className="w-20 h-12 object-contain"
            />
          </div>
          <p className="text-[#2A2A2A] italic text-base md:text-lg max-w-2xl mx-auto">
            {perspectiveContent.subtitle}
          </p>
        </motion.div>

        {/* 3 images - spacing between, landscape crop; third image framed to show more barrels */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.1 }}
          className="flex justify-center mb-16"
        >
          <div className="w-full max-w-5xl grid grid-cols-3 gap-3 md:gap-4 overflow-hidden rounded-sm">
            {perspectiveImages.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i }}
                className="relative aspect-[4/3] overflow-hidden rounded-sm"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className={`object-cover transition-transform duration-700 hover:scale-105 ${
                    i === 2 ? "object-[center_75%]" : "object-center"
                  }`}
                  sizes="(max-width: 768px) 33vw, 280px"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CEO letter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-5 text-[#3D3D3D] text-base md:text-lg leading-relaxed">
            {perspectiveContent.letter.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="pt-10 mt-10 flex flex-col sm:flex-row items-start gap-6"
          >
            <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0 bg-[#E8E4DC]">
              <Image
                src={perspectiveContent.founderImage}
                alt={perspectiveContent.founderName}
                fill
                className="object-cover"
                sizes="96px"
              />
            </div>
            <div>
              <p className="text-[#3D3D3D] text-base md:text-lg leading-relaxed italic">
                {perspectiveContent.founderQuote}
              </p>
              <p
                className="text-lg font-medium text-[#2A2A2A] mt-3"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {perspectiveContent.founderName}
              </p>
              <p className="text-sm text-[#A07D4E] uppercase tracking-wider">
                {perspectiveContent.founderTitle}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
