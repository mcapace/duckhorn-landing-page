"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { robSorensonData } from "@/lib/data";

export const RobSorenson = () => {
  const [expandedQa, setExpandedQa] = useState<number | null>(null);

  return (
    <section
      id="vineyard-stewardship"
      className="scroll-mt-20 min-h-screen bg-white"
    >
      {/* Hero image - matches winery chapters */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative w-full h-[55vh] min-h-[380px] overflow-hidden"
      >
        <Image
          src={robSorensonData.image}
          alt="Vineyard stewardship"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-10 md:p-14 pb-12 md:pb-16">
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white drop-shadow-lg"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              ROB SORENSON
            </h2>
            <p
              className="mt-3 text-lg md:text-xl text-white/95 italic"
              style={{ fontFamily: "var(--font-script)" }}
            >
              Director of North Coast Estate Vineyards
            </p>
          </div>
        </div>
      </motion.div>

      {/* Content - same layout as winemaker chapters */}
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-base md:text-lg text-[#3D3D3D] leading-relaxed max-w-3xl mb-16 md:mb-24"
        >
          {robSorensonData.intro}
        </motion.p>

        {/* Portrait + intro - same as winemaker block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center lg:items-start"
          >
            <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-white shadow-xl flex-shrink-0">
              <Image
                src={robSorensonData.image}
                alt={robSorensonData.name}
                fill
                className="object-cover"
                sizes="224px"
              />
            </div>
            <div className="mt-8 w-full max-w-md text-center lg:text-left">
              <h3
                className="text-xl md:text-2xl text-[#2A2A2A]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {robSorensonData.name}
              </h3>
              <p className="text-[#A07D4E] font-medium mt-1 text-sm">
                {robSorensonData.title}
              </p>
              <p
                className="mt-5 text-base md:text-lg text-[#3D3D3D] italic leading-relaxed"
                style={{ fontFamily: "var(--font-script)" }}
              >
                {robSorensonData.context}
              </p>
            </div>
          </motion.div>
        </div>

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
