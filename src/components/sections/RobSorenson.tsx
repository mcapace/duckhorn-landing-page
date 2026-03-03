"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { robSorensonData } from "@/lib/data";

export const RobSorenson = () => {
  const [expandedQa, setExpandedQa] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section
      id="vineyard-stewardship"
      className="scroll-mt-20 min-h-screen bg-white"
    >
      {/* Hero - vineyard image with parallax */}
      <motion.div
        ref={heroRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative w-full h-[60vh] min-h-[400px] overflow-hidden"
      >
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <Image
            src={robSorensonData.image}
            alt="Vineyard stewardship"
            fill
            className="object-cover object-center scale-105"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </motion.div>

      {/* Copy below hero: headshot, name, title, context, intro */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28">
        {/* 1. Headshot 2. Name 3. Title 4. Context 5. Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <div className="flex flex-col items-center lg:items-start max-w-2xl">
            <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-white shadow-xl flex-shrink-0">
              <Image
                src={robSorensonData.portraitImage}
                alt={robSorensonData.name}
                fill
                className="object-cover"
                sizes="224px"
              />
            </div>
            <h2
              className="mt-8 text-3xl md:text-4xl text-[#2A2A2A] tracking-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {robSorensonData.name}
            </h2>
            <p className="mt-2 text-[#A07D4E] font-medium text-lg italic" style={{ fontFamily: "var(--font-script)" }}>
              {robSorensonData.title}
            </p>
            <p
              className="mt-5 text-base md:text-lg text-[#3D3D3D] italic leading-relaxed"
              style={{ fontFamily: "var(--font-script)" }}
            >
              {robSorensonData.context}
            </p>
            <p className="mt-6 text-base md:text-lg text-[#3D3D3D] leading-relaxed">
              {robSorensonData.intro}
            </p>
          </div>
        </motion.div>

        {/* Q&A - same accordion style as winemaker chapters */}
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
            Q&A with {robSorensonData.name}
          </h3>
          <div className="space-y-2">
            {robSorensonData.qAndA.map((qa, i) => (
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
