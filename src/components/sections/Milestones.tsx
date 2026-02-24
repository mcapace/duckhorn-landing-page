"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { milestones, milestonesIntro, portraitOfPlace } from "@/lib/data";

export const Milestones = () => {
  return (
    <section id="milestones" className="py-20 md:py-28 bg-[#425a4d] scroll-mt-20">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="w-full max-w-5xl mx-auto">
        {/* 50 Years header: logo left, divider, headline right (match lockup design) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-8 md:gap-10 mb-8">
            {/* Logo - 50th Lockup - larger */}
            <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
              <Image
                src="/images/Duckhorn-Digital-Edits-50th-Lockup.png"
                alt="50 Years of the Duckhorn Collection"
                width={380}
                height={190}
                className="max-w-[320px] md:max-w-[380px] w-full h-auto object-contain"
              />
            </div>
            {/* Vertical divider + headline block: line height matches headline height */}
            <div className="hidden md:flex flex-1 max-w-2xl items-stretch gap-8">
              <div className="w-px bg-white flex-shrink-0 self-stretch min-h-[1px]" aria-hidden />
              <div className="flex flex-col justify-center py-1 text-left">
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl text-white tracking-tight uppercase font-medium leading-tight"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  <span className="block">THE MILESTONES THAT</span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl mt-1">BUILT A COLLECTION</span>
                </h2>
                <p
                  className="text-[#B8956A] italic text-lg md:text-xl mt-3"
                  style={{ fontFamily: "var(--font-script)" }}
                >
                  And Helped Define American Fine Wine
                </p>
              </div>
            </div>
            {/* Mobile: headline below logo, centered - larger */}
            <div className="flex flex-col md:hidden text-center">
              <h2
                className="text-3xl text-white tracking-tight uppercase font-medium leading-tight"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                <span className="block">THE MILESTONES THAT</span>
                <span className="block text-2xl mt-1">BUILT A COLLECTION</span>
              </h2>
              <p
                className="text-[#B8956A] italic text-lg mt-3"
                style={{ fontFamily: "var(--font-script)" }}
              >
                And Helped Define American Fine Wine
              </p>
            </div>
          </div>
          {/* Body paragraph - from attachment; DAN AND MARGARET DUCKHORN bold uppercase */}
          <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-full">
            <strong className="font-bold uppercase">DAN AND MARGARET DUCKHORN</strong> set out to make wines of lasting distinction in Napa Valley. Inspired by the great wines of Bordeaux and guided by a belief in restraint, balance, and long-term thinking, they committed themselves to the vineyards and to letting place take the lead. Over time, Duckhorn became a benchmark, and the Collection it inspired reflects a shared pursuit of excellence across California&apos;s great wine-growing regions.
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
      </div>
    </section>
  );
};
