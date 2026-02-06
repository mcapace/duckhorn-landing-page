"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { milestones, milestonesIntro, portraitOfPlace } from "@/lib/data";

export const Milestones = () => {
  return (
    <section id="milestones" className="py-28 md:py-36 bg-[#2D1216] scroll-mt-20 overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        {/* 50 Years header + intro */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-10 mb-8">
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
          <div className="border border-[#3D5636] rounded-sm px-6 py-5 md:px-10 md:py-6 inline-block mb-8">
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
          className="mb-20 rounded-xl overflow-hidden bg-white/5 border border-white/10 p-8 md:p-12"
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

        {/* Horizontal scroll timeline - river of time */}
        <div className="relative -mx-6 md:-mx-12 lg:-mx-20">
          {/* Top timeline track */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8956A]/30 to-transparent opacity-60" />

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 px-6 md:px-12 lg:px-20 scrollbar-hide">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.05 }}
                className="flex-shrink-0 w-[90vw] sm:w-[420px] md:w-[480px] snap-center"
              >
                <div className="relative">
                  {/* Year node - connects to timeline */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-3 h-3 rounded-full flex-shrink-0 ${
                        milestone.highlight ? "bg-[#B8956A]" : "bg-white/50"
                      }`}
                    />
                    <span
                      className={`text-2xl md:text-3xl tabular-nums ${
                        milestone.highlight ? "text-[#C5A572]" : "text-white/80"
                      }`}
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {milestone.year}
                    </span>
                  </div>

                  {/* Card */}
                  <div
                    className={`rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] ${
                      milestone.highlight
                        ? "bg-[#B8956A]/10 border-2 border-[#B8956A]/40 shadow-lg shadow-[#B8956A]/10"
                        : "bg-white/5 border border-white/10 hover:bg-white/[0.07]"
                    }`}
                  >
                    {(milestone.image || milestone.awardImage) && (
                      <div className="relative h-48 md:h-56 overflow-hidden">
                        {milestone.awardImage ? (
                          <div className="absolute inset-0 flex items-center justify-center p-8 bg-[#1a0a0e]">
                            <div className="relative w-20 h-28 md:w-24 md:h-32">
                              <Image
                                src={milestone.awardImage}
                                alt={milestone.title}
                                fill
                                className="object-contain"
                                sizes="96px"
                              />
                            </div>
                          </div>
                        ) : milestone.image ? (
                          <Image
                            src={milestone.image}
                            alt={milestone.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 90vw, 480px"
                          />
                        ) : null}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#2D1216] via-transparent to-transparent" />
                      </div>
                    )}
                    <div className="p-6 md:p-8">
                      <h3
                        className="text-lg md:text-xl text-white font-medium"
                        style={{ fontFamily: "var(--font-serif)" }}
                      >
                        {milestone.title}
                      </h3>
                      <p className="text-white/70 text-sm md:text-base leading-relaxed mt-3">
                        {milestone.description}
                      </p>
                      <span className="inline-block mt-4 text-xs text-[#B8956A] uppercase tracking-wider">
                        {milestone.winery}
                      </span>
                      {milestone.awardLabel && !milestone.awardImage && (
                        <div className="mt-3 text-[#C5A572] text-sm font-medium uppercase tracking-wider">
                          {milestone.awardLabel}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#2D1216] to-transparent pointer-events-none" />
        </div>

        {/* Scroll hint */}
        <p className="text-center text-white/40 text-xs uppercase tracking-widest mt-8">
          Scroll to explore
        </p>
      </div>
    </section>
  );
};
