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
      className={`scroll-mt-20 min-h-screen ${index % 2 === 1 ? "bg-[#FAFAF8]" : "bg-white"}`}
    >
      {/* Hero image - cinematic, full bleed */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative w-full h-[60vh] min-h-[420px] md:min-h-[500px] overflow-hidden"
      >
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority={index === 0}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-10 md:p-14 pb-12 md:pb-16">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
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

      {/* Content block - premium layout */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-base md:text-lg text-[#3D3D3D] leading-relaxed max-w-3xl mb-20 md:mb-28"
        >
          {heroDescription}
        </motion.p>

        {/* Premium content card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden shadow-[0_4px_40px_-8px_rgba(0,0,0,0.08)] rounded-sm"
        >
          {/* Top row: bottle + winemaker - equal visual weight */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white">
            <div className={`flex flex-col items-center justify-center p-14 md:p-20 lg:p-24 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
              <div className="relative w-[240px] h-[320px] md:w-[300px] md:h-[400px] lg:w-[360px] lg:h-[460px]">
                <Image
                  src={bottleImage}
                  alt={name}
                  fill
                  className="object-contain object-center drop-shadow-2xl"
                  sizes="(max-width: 768px) 300px, 360px"
                />
              </div>
            </div>
            <div className={`flex flex-col items-center justify-center p-14 md:p-20 lg:p-24 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
              <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden ring-2 ring-[#E8E4DC] flex-shrink-0">
                <Image
                  src={winemaker.image}
                  alt={winemaker.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 224px, (max-width: 1024px) 256px, 320px"
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

          {/* Bottom row: tasting notes + Q&A */}
          <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-[#E8E4DC] bg-white">
            <div className="p-12 md:p-16 lg:p-20 lg:border-r border-[#E8E4DC]">
              <h3 className="text-[11px] uppercase tracking-[0.3em] text-[#B8956A] mb-6" style={{ fontFamily: "var(--font-serif)" }}>
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

            <div className="p-12 md:p-16 lg:p-20">
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
