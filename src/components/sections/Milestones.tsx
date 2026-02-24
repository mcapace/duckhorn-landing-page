"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { milestones, milestonesIntro, portraitOfPlace } from "@/lib/data";

export const Milestones = () => {
  return (
    <section id="milestones" className="py-20 md:py-28 bg-[#425a4d] scroll-mt-20">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        {/* 50 Years header + intro */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-6 mb-6">
            <div className="flex items-end gap-2 md:gap-3">
              <span
                className="text-6xl md:text-8xl lg:text-9xl text-[#B8956A] font-bold tabular-nums leading-none"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                50
              </span>
              <span className="text-2xl md:text-3xl lg:text-4xl text-[#B8956A] font-bold uppercase tracking-wider leading-tight pb-1 md:pb-2">
                Years
              </span>
            </div>
          </div>
          <h2
            className="text-2xl md:text-3xl lg:text-4xl text-white tracking-tight mb-2"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {milestonesIntro.title}
          </h2>
          <p className="text-white/70 text-base md:text-lg mb-6">
            {milestonesIntro.subtitle}
          </p>
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

        {/* Vertical timeline - line segments only between bubbles */}
        <div className="relative">
          <div className="space-y-0">
            {milestones.map((milestone, index) => (
              <Fragment key={index}>
              <motion.div
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
                        : "bg-[#364d42] text-white/90 ring-2 ring-white/20"
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
                    {milestone.image && (
                      <div className="relative w-full md:w-64 lg:w-72 flex-shrink-0 aspect-[4/3] md:aspect-square overflow-hidden">
                        <Image
                          src={milestone.image}
                          alt={milestone.title}
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 768px) 100vw, 288px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#425a4d] md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-[#425a4d]/90" aria-hidden />
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
                      {milestone.awardLabel && (
                        <div className="mt-4 text-[#C5A572] text-sm font-medium uppercase tracking-wider">
                          {milestone.awardLabel}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
              {index < milestones.length - 1 && (
                <div className="flex gap-6 md:gap-10 -my-6 md:-my-8">
                  <div className="w-[120px] md:w-[140px] flex justify-center flex-shrink-0">
                    <div className="w-px h-12 md:h-16 bg-[#B8956A]/50" />
                  </div>
                  <div className="flex-1 min-w-0" />
                </div>
              )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
