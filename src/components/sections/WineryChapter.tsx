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

        {/* Wine + Winemaker - symmetrical alternating layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-24 md:mb-32">
          {/* Wine bottle + tasting notes */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -24 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col items-center ${isEven ? "lg:items-start lg:order-1" : "lg:items-end lg:order-2"}`}
          >
            <div className="relative w-full max-w-[280px] aspect-[3/4] mx-auto lg:mx-0">
              <Image
                src={bottleImage}
                alt={name}
                fill
                className="object-contain drop-shadow-2xl"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
            <div className="mt-10 w-full max-w-md">
              <h3
                className="text-xs uppercase tracking-[0.25em] text-[#B8956A] mb-5"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Tasting Notes
              </h3>
              <ul className="space-y-5">
                {wines.map((wine, i) => (
                  <li key={i} className="border-l-2 border-[#E8E4DC] pl-5">
                    <span className="font-medium text-[#2A2A2A] text-sm">{wine.name}</span>
                    <p className="text-[#3D3D3D] text-sm mt-1.5 leading-relaxed">{wine.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Winemaker portrait + quote */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 24 : -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col items-center lg:items-start ${isEven ? "lg:order-2" : "lg:order-1"}`}
          >
            <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-white shadow-xl flex-shrink-0">
              <Image
                src={winemaker.image}
                alt={winemaker.name}
                fill
                className="object-cover"
                sizes="256px"
              />
            </div>
            <div className={`mt-8 w-full max-w-md text-center ${isEven ? "lg:text-left lg:ml-0" : "lg:text-right lg:ml-auto"}`}>
              <h3
                className="text-xl md:text-2xl text-[#2A2A2A]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {winemaker.name}
              </h3>
              <p className="text-[#A07D4E] font-medium mt-1 text-sm">{winemaker.title}</p>
              <p className="text-[#3D5636] text-sm mt-0.5">{winemaker.winery}</p>
              <blockquote
                className="mt-5 text-base md:text-lg text-[#3D3D3D] italic leading-relaxed"
                style={{ fontFamily: "var(--font-script)" }}
              >
                &ldquo;{winemaker.quote}&rdquo;
              </blockquote>
            </div>
          </motion.div>
        </div>

        {/* Q&A - inline, expandable */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-[#E8E4DC] pt-16"
        >
          <h3
            className="text-sm uppercase tracking-[0.2em] text-[#B8956A] mb-8"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Q&A with {winemaker.name}
          </h3>
          <div className="space-y-2">
            {winemaker.qAndA.slice(0, 5).map((qa, i) => (
              <motion.div
                key={i}
                initial={false}
                className="border-b border-[#E8E4DC]/50 last:border-0"
              >
                <button
                  onClick={() => setExpandedQa(expandedQa === i ? null : i)}
                  className="w-full py-6 text-left flex items-start justify-between gap-4 group"
                >
                  <span className="font-medium text-[#2A2A2A] group-hover:text-[#B8956A] transition-colors pr-4">
                    {qa.question}
                  </span>
                  <motion.span
                    animate={{ rotate: expandedQa === i ? 180 : 0 }}
                    className="flex-shrink-0 text-[#B8956A]"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <p className="pb-6 pl-0 text-[#3D3D3D] leading-relaxed">
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
