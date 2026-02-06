"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { milestones, milestonesIntro, portraitOfPlace } from "@/lib/data";

export const Milestones = () => {
  return (
    <section id="milestones" className="py-20 md:py-28 bg-[#2D1216] scroll-mt-20">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        {/* 50 Years header + intro */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-8 mb-6">
            <span
              className="text-6xl md:text-8xl lg:text-9xl text-[#B8956A]/90 font-bold tabular-nums leading-none"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              50
            </span>
            <span className="text-xl md:text-2xl text-white/80 uppercase tracking-widest md:pb-3">
              Years of the Duckhorn Collection
            </span>
          </div>
          <div className="border border-[#3D5636] rounded-sm px-6 py-5 md:px-10 md:py-6 inline-block mb-6">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl text-[#3D5636] tracking-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {milestonesIntro.title}
            </h2>
            <p className="text-[#3D5636]/80 mt-2 text-lg">
              {milestonesIntro.subtitle}
            </p>
          </div>
          <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-3xl">
            {milestonesIntro.paragraph}
          </p>
        </motion.div>

        {/* Portrait of Place */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 rounded-xl overflow-hidden bg-white/5 border border-white/10 p-6 md:p-10"
        >
          <h3
            className="text-xl md:text-2xl text-white mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {portraitOfPlace.title}
          </h3>
          <p className="text-white/70 text-base leading-relaxed mb-6 max-w-3xl">
            {portraitOfPlace.description}
          </p>
          <div className="flex flex-wrap gap-4">
            {portraitOfPlace.regions.map((region) => (
              <span
                key={region}
                className="text-sm text-[#B8956A] uppercase tracking-wider"
              >
                {region}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Vertical timeline */}
        <div className="relative">
          {/* Vertical line - centered in year column, runs through middle of bubbles */}
          <div className="absolute left-[60px] md:left-[70px] top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#B8956A]/50 to-transparent" />

          <div className="space-y-0">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                className="relative flex gap-6 md:gap-10 py-6 md:py-8 first:pt-0 last:pb-0"
              >
                {/* Year node - bubble centered on line */}
                <div className="flex-shrink-0 flex flex-col items-center justify-center w-[120px] md:w-[140px]">
                  <div
                    className={`relative z-10 w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center text-sm md:text-base font-semibold tabular-nums ${
                      milestone.highlight
                        ? "bg-[#B8956A] text-[#2D1216] ring-4 ring-[#B8956A]/40"
                        : "bg-white/10 text-white/90 ring-2 ring-white/20"
                    }`}
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {milestone.year.length <= 4 ? milestone.year : (
                      <span className="text-xs md:text-sm leading-tight text-center px-1">
                        {milestone.year}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content - fixed min-height for uniform card size */}
                <div
                  className={`flex-1 min-w-0 min-h-[200px] md:min-h-[240px] rounded-xl overflow-hidden transition-all duration-300 hover:bg-white/[0.08] flex flex-col ${
                    milestone.highlight
                      ? "bg-[#B8956A]/10 border border-[#B8956A]/30"
                      : "bg-white/5 border border-white/10"
                  }`}
                >
                  <div className="flex flex-col md:flex-row flex-1 min-h-0">
                    {(milestone.image || milestone.awardImage) && (
                      <div className="relative w-full md:w-64 lg:w-72 flex-shrink-0 aspect-[4/3] md:aspect-square">
                        {milestone.awardImage ? (
                          <div className="absolute inset-0 flex items-center justify-center p-6 bg-[#1a0a0e]">
                            <div className="relative w-16 h-24 md:w-20 md:h-28">
                              <Image
                                src={milestone.awardImage}
                                alt={milestone.title}
                                fill
                                className="object-contain"
                                sizes="80px"
                              />
                            </div>
                          </div>
                        ) : milestone.image ? (
                          <Image
                            src={milestone.image}
                            alt={milestone.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 288px"
                          />
                        ) : null}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#2D1216] md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-[#2D1216]/80" />
                      </div>
                    )}
                    <div className="p-5 md:p-6 flex-1">
                      <span className="text-xs text-[#B8956A] uppercase tracking-wider">
                        {milestone.winery}
                      </span>
                      <h3
                        className="text-lg md:text-xl text-white font-medium mt-2"
                        style={{ fontFamily: "var(--font-serif)" }}
                      >
                        {milestone.title}
                      </h3>
                      <p className="text-white/70 text-sm md:text-base leading-relaxed mt-3">
                        {milestone.description}
                      </p>
                      {milestone.awardLabel && !milestone.awardImage && (
                        <div className="mt-4 text-[#C5A572] text-sm font-medium uppercase tracking-wider">
                          {milestone.awardLabel}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
