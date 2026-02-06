"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface Wine {
  name: string;
  description: string;
}

interface QAndA {
  question: string;
  answer: string;
}

interface Winemaker {
  name: string;
  title: string;
  winery: string;
  image: string;
  quote: string;
  qAndA: QAndA[];
}

interface WineryChapterProps {
  id: string;
  name: string;
  tagline: string;
  image: string;
  heroDescription: string;
  bottleImage: string;
  wines: Wine[];
  winemaker: Winemaker;
  index: number;
}

export const WineryChapter = ({
  id,
  name,
  tagline,
  image,
  heroDescription,
  bottleImage,
  wines,
  winemaker,
  index,
}: WineryChapterProps) => {
  const [expandedQa, setExpandedQa] = useState<number | null>(null);
  const isEven = index % 2 === 0;

  return (
    <section
      id={id}
      className={`scroll-mt-20 min-h-screen ${index % 2 === 1 ? "bg-[#F8F6F1]" : "bg-white"}`}
    >
      {/* Hero image - full bleed */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative w-full h-[55vh] min-h-[380px] overflow-hidden"
      >
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority={index === 0}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-10 md:p-14 pb-12 md:pb-16">
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white drop-shadow-lg"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {name}
            </h2>
            <p
              className="mt-3 text-lg md:text-xl text-white/95 italic"
              style={{ fontFamily: "var(--font-script)" }}
            >
              {tagline}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Content block - wine + winemaker + Q&A */}
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28">
        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-base md:text-lg text-[#3D3D3D] leading-relaxed max-w-3xl mb-16 md:mb-24"
        >
          {heroDescription}
        </motion.p>

        {/* Unified block: bottle + portrait + tasting notes + Q&A */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-[#E8E4DC] rounded-sm overflow-hidden bg-white/50"
        >
          {/* Top row: bottle + winemaker portrait */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className={`flex flex-col items-center justify-end p-10 md:p-14 ${isEven ? "lg:order-1 lg:items-end" : "lg:order-2 lg:items-start"}`}>
              <div className="relative w-[140px] h-[200px] md:w-[180px] md:h-[260px] lg:w-[200px] lg:h-[280px]">
                <Image
                  src={bottleImage}
                  alt={name}
                  fill
                  className="object-contain object-bottom drop-shadow-xl"
                  sizes="(max-width: 768px) 180px, 200px"
                />
              </div>
            </div>
            <div className={`flex flex-col items-center justify-center p-10 md:p-14 ${isEven ? "lg:order-2 lg:items-start lg:pl-0" : "lg:order-1 lg:items-end lg:pr-0"}`}>
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-2 ring-[#E8E4DC] flex-shrink-0">
                <Image
                  src={winemaker.image}
                  alt={winemaker.name}
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>
              <div className={`mt-6 text-center ${isEven ? "lg:text-left" : "lg:text-right"}`}>
                <h3 className="text-lg text-[#2A2A2A] font-medium" style={{ fontFamily: "var(--font-serif)" }}>
                  {winemaker.name}
                </h3>
                <p className="text-[#3D5636] text-sm mt-1">{winemaker.winery}</p>
                <blockquote className="mt-4 text-sm text-[#3D3D3D] italic leading-relaxed" style={{ fontFamily: "var(--font-script)" }}>
                  &ldquo;{winemaker.quote}&rdquo;
                </blockquote>
              </div>
            </div>
          </div>

          {/* Bottom row: tasting notes + Q&A side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-[#E8E4DC]">
            {/* Tasting notes */}
            <div className="p-8 md:p-10 lg:border-r border-[#E8E4DC]">
              <h3 className="text-[11px] uppercase tracking-[0.3em] text-[#B8956A] mb-5" style={{ fontFamily: "var(--font-serif)" }}>
                Tasting Notes
              </h3>
              <ul className="space-y-5">
                {wines.map((wine, i) => (
                  <li key={i} className="border-l-2 border-[#E8E4DC] pl-4">
                    <span className="font-medium text-[#2A2A2A] text-sm">{wine.name}</span>
                    <p className="text-[#3D3D3D]/90 text-sm mt-1 leading-relaxed">{wine.description}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Q&A accordion */}
            <div className="p-8 md:p-10">
              <h3 className="text-[11px] uppercase tracking-[0.25em] text-[#B8956A] mb-5" style={{ fontFamily: "var(--font-serif)" }}>
                Q&A with {winemaker.name}
              </h3>
              <div className="space-y-0">
                {winemaker.qAndA.slice(0, 5).map((qa, i) => (
                  <div key={i} className="border-b border-[#E8E4DC]/50 last:border-0">
                    <button
                      onClick={() => setExpandedQa(expandedQa === i ? null : i)}
                      className="w-full py-4 text-left flex items-start justify-between gap-4 group"
                    >
                      <span className="text-sm font-medium text-[#2A2A2A] group-hover:text-[#B8956A] transition-colors leading-snug">
                        {qa.question}
                      </span>
                      <motion.span
                        animate={{ rotate: expandedQa === i ? 180 : 0 }}
                        className="flex-shrink-0 text-[#B8956A]/80"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.span>
                    </button>
                    <motion.div
                      initial={false}
                      animate={{ height: expandedQa === i ? "auto" : 0, opacity: expandedQa === i ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-4 text-[#3D3D3D]/90 text-sm leading-relaxed">{qa.answer}</p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
