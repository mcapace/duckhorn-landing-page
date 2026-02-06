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

        {/* Wine + Winemaker - refined alternating layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28 items-center mb-28 md:mb-36">
          {/* Wine bottle + tasting notes */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`flex flex-col items-center ${isEven ? "lg:order-1" : "lg:order-2"}`}
          >
            <div className="relative w-full max-w-[220px] md:max-w-[260px] aspect-[3/4]">
              <Image
                src={bottleImage}
                alt={name}
                fill
                className="object-contain drop-shadow-xl"
                sizes="(max-width: 768px) 220px, 260px"
              />
            </div>
            <div className="mt-12 w-full max-w-sm">
              <h3
                className="text-[11px] uppercase tracking-[0.3em] text-[#B8956A] mb-6"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Tasting Notes
              </h3>
              <ul className="space-y-6">
                {wines.map((wine, i) => (
                  <li key={i} className="border-l border-[#E8E4DC] pl-5">
                    <span className="font-medium text-[#2A2A2A] text-sm">{wine.name}</span>
                    <p className="text-[#3D3D3D]/90 text-sm mt-1.5 leading-relaxed">{wine.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Winemaker portrait + quote */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`flex flex-col items-center ${isEven ? "lg:order-2" : "lg:order-1"}`}
          >
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden ring-2 ring-white shadow-lg flex-shrink-0">
              <Image
                src={winemaker.image}
                alt={winemaker.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 192px, 224px"
              />
            </div>
            <div className={`mt-8 w-full max-w-md text-center ${isEven ? "lg:text-left" : "lg:text-right"}`}>
              <h3
                className="text-lg md:text-xl text-[#2A2A2A] font-medium"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {winemaker.name}
              </h3>
              <p className="text-[#3D5636] text-sm mt-1">{winemaker.winery}</p>
              <p className="text-[#A07D4E] text-xs mt-0.5 uppercase tracking-wider">{winemaker.title}</p>
              <blockquote
                className="mt-6 text-[15px] md:text-base text-[#3D3D3D] italic leading-relaxed"
                style={{ fontFamily: "var(--font-script)" }}
              >
                &ldquo;{winemaker.quote}&rdquo;
              </blockquote>
            </div>
          </motion.div>
        </div>

        {/* Q&A - refined accordion */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-[#E8E4DC] pt-14"
        >
          <h3
            className="text-[11px] uppercase tracking-[0.25em] text-[#B8956A] mb-6"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Q&A with {winemaker.name}
          </h3>
          <div className="space-y-0">
            {winemaker.qAndA.slice(0, 5).map((qa, i) => (
              <motion.div
                key={i}
                initial={false}
                className="border-b border-[#E8E4DC]/60 last:border-0"
              >
                <button
                  onClick={() => setExpandedQa(expandedQa === i ? null : i)}
                  className="w-full py-5 md:py-6 text-left flex items-start justify-between gap-6 group"
                >
                  <span className="text-sm md:text-base font-medium text-[#2A2A2A] group-hover:text-[#B8956A] transition-colors pr-4 leading-snug">
                    {qa.question}
                  </span>
                  <motion.span
                    animate={{ rotate: expandedQa === i ? 180 : 0 }}
                    className="flex-shrink-0 text-[#B8956A]/80 group-hover:text-[#B8956A] transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <p className="pb-5 md:pb-6 text-[#3D3D3D]/90 text-sm md:text-base leading-relaxed">
                    {qa.answer}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
