"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { milestones } from "@/lib/data";

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
                  className="text-3xl md:text-4xl lg:text-5xl text-white tracking-tight uppercase font-light leading-tight"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  <span className="block">THE MILESTONES THAT</span>
                  <span className="block mt-1">BUILT A COLLECTION</span>
                </h2>
                <p
                  className="text-[#D4B896] italic text-2xl md:text-3xl mt-3"
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
                <span className="block mt-1">BUILT A COLLECTION</span>
              </h2>
              <p
                className="text-[#D4B896] italic text-2xl mt-3"
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

        {/* Vertical timeline — stacked on mobile (year on top, then card), row on desktop */}
        <div className="relative w-full">
          <div className="space-y-0 w-full">
            {milestones.map((milestone, index) => (
              <Fragment key={index}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                className="relative flex flex-col md:flex-row w-full gap-4 md:gap-10 py-6 md:py-8 first:pt-0 last:pb-0"
              >
                {/* Year node or map icon — centered on mobile, left column on desktop */}
                <div className="flex flex-shrink-0 flex-col items-center justify-center w-full md:w-[180px]">
                  <div
                    className={`relative z-10 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center text-base sm:text-lg md:text-xl font-semibold tabular-nums ${
                      milestone.highlight
                        ? "bg-[#B8956A] text-white ring-4 ring-[#B8956A]/40"
                        : "bg-[#B8956A] text-white ring-2 ring-white/20"
                    }`}
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {"bubbleIcon" in milestone && milestone.bubbleIcon === "map" ? (
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                      </svg>
                    ) : milestone.year.length <= 4 ? (
                      milestone.year
                    ) : (
                      <span className="text-sm sm:text-base md:text-lg leading-tight text-center px-1">
                        {milestone.year}
                      </span>
                    )}
                  </div>
                </div>

                {/* Vertical line from bubble to content — mobile: short segment below bubble */}
                <div className="flex md:hidden justify-center flex-shrink-0">
                  <div className="w-px h-6 bg-[#B8956A]/50" aria-hidden />
                </div>

                {/* Vertical line from bubble to content — desktop only */}
                <div className="hidden md:flex flex-shrink-0 w-2 justify-center self-stretch min-h-[200px]">
                  <div className="w-px bg-[#B8956A]/50 self-stretch min-h-[120px]" aria-hidden />
                </div>

                {/* Content box — full width on mobile */}
                <div
                  className={`flex-1 min-w-0 min-h-[220px] md:min-h-[300px] rounded-xl overflow-hidden transition-all duration-300 flex flex-col touch-manipulation ${
                    milestone.highlight
                      ? "bg-[#4d6a55] border border-[#B8956A]/30"
                      : "bg-[#4d6a55] border border-white/10"
                  }`}
                >
                  <div className="flex flex-col md:flex-row flex-1 min-h-0">
                    {milestone.image && (
                      <div className="relative w-full md:w-64 lg:w-80 flex-shrink-0 min-w-0 aspect-[4/3] md:aspect-[3/4] overflow-hidden rounded-l-xl">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={milestone.image}
                          alt={milestone.title}
                          className="absolute inset-0 w-full h-full block m-0 object-cover"
                          style={
                            "imageObjectPosition" in milestone && typeof (milestone as { imageObjectPosition?: string }).imageObjectPosition === "string"
                              ? { objectPosition: (milestone as { imageObjectPosition: string }).imageObjectPosition }
                              : "imageFit" in milestone && milestone.imageFit === "contain"
                                ? { objectFit: "contain", objectPosition: "top" }
                                : "imagePosition" in milestone && milestone.imagePosition === "top"
                                  ? { objectPosition: "center top" }
                                  : "imagePosition" in milestone && milestone.imagePosition === "left"
                                    ? { objectPosition: "left center" }
                                    : { objectPosition: "center center" }
                          }
                        />
                      </div>
                    )}
                    <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col justify-center">
                      <h3
                        className="text-lg sm:text-xl md:text-2xl text-white/95 italic"
                        style={{ fontFamily: "var(--font-serif)" }}
                      >
                        {milestone.title}
                      </h3>
                      <p className="text-white/90 text-sm md:text-base leading-relaxed mt-2 sm:mt-3">
                        {milestone.description}
                      </p>
                      {milestone.awardLabel && (
                        <div className="mt-3 sm:mt-4 text-[#D4B896] text-sm font-medium uppercase tracking-wider">
                          {milestone.awardLabel}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
              {index < milestones.length - 1 && (
                <div className="flex flex-col md:flex-row w-full gap-2 md:gap-10 -my-4 md:-my-8">
                  <div className="w-full md:w-[180px] flex justify-center flex-shrink-0">
                    <div className="w-px h-8 md:h-16 bg-[#B8956A]/50 mx-auto md:mx-0" />
                  </div>
                  <div className="hidden md:block flex-1 min-w-0" />
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
