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
        className="relative w-full h-[60vh] min-h-[400px] overflow-hidden"
      >
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="100vw"
          priority={index === 0}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {name}
          </h2>
          <p
            className="mt-2 text-xl md:text-2xl text-white/90 italic"
            style={{ fontFamily: "var(--font-script)" }}
          >
            {tagline}
          </p>
        </div>
      </motion.div>

      {/* Content block - wine + winemaker + Q&A */}
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-24">
        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-[#3D3D3D] leading-relaxed max-w-3xl mb-20"
        >
          {heroDescription}
        </motion.p>

        {/* Wine + Winemaker - alternating layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          {/* Wine bottle + tasting notes */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={isEven ? "lg:order-1" : "lg:order-2"}
          >
            <div className="relative w-full aspect-[3/4] max-w-sm mx-auto">
              <Image
                src={bottleImage}
                alt={name}
                fill
                className="object-contain drop-shadow-2xl"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
            <div className="mt-8">
              <h3
                className="text-sm uppercase tracking-[0.2em] text-[#B8956A] mb-4"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Tasting Notes
              </h3>
              <ul className="space-y-4">
                {wines.map((wine, i) => (
                  <li key={i} className="border-l-2 border-[#E8E4DC] pl-4">
                    <span className="font-medium text-[#2A2A2A]">{wine.name}</span>
                    <p className="text-[#3D3D3D] text-sm mt-1">{wine.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Winemaker portrait + quote */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={isEven ? "lg:order-2" : "lg:order-1"}
          >
            <div className={`relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden ring-4 ring-[#F8F6F1] shadow-xl ${isEven ? "lg:ml-0" : "mx-auto lg:mr-0 lg:ml-auto"}`}>
              <Image
                src={winemaker.image}
                alt={winemaker.name}
                fill
                className="object-cover"
                sizes="256px"
              />
            </div>
            <div className={`mt-8 text-center ${isEven ? "lg:text-left" : "lg:text-right"}`}>
              <h3
                className="text-2xl md:text-3xl text-[#2A2A2A]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {winemaker.name}
              </h3>
              <p className="text-[#A07D4E] font-medium mt-1">{winemaker.title}</p>
              <p className="text-[#3D5636] text-sm mt-1">{winemaker.winery}</p>
              <blockquote
                className="mt-6 text-lg text-[#3D3D3D] italic leading-relaxed"
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
