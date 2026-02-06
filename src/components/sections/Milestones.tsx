"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { milestones, milestonesIntro, portraitOfPlace } from "@/lib/data";

export const Milestones = () => {
  return (
    <section id="milestones" className="py-28 md:py-36 bg-[#2D1216] scroll-mt-20">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        {/* 50 Years header + intro */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
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

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-12 md:space-y-16"
        >
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05 }}
              className={`grid grid-cols-1 gap-8 ${
                milestone.image || milestone.awardImage || milestone.awardLabel
                  ? "md:grid-cols-2 md:gap-12 md:items-center"
                  : ""
              }`}
            >
              {/* Text content */}
              <div
                className={`flex flex-col justify-center ${
                  index % 2 === 1 && (milestone.image || milestone.awardImage || milestone.awardLabel)
                    ? "md:order-2"
                    : "md:order-1"
                }`}
              >
                <span
                  className={`text-2xl md:text-3xl block ${
                    milestone.highlight ? "text-[#C5A572]" : "text-white/70"
                  }`}
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {milestone.year}
                </span>
                <h3
                  className="text-lg md:text-xl lg:text-2xl text-white mt-2 mb-4"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {milestone.title}
                </h3>
                <p className="text-white/70 text-sm md:text-base leading-relaxed">
                  {milestone.description}
                </p>
                <span className="inline-block mt-4 text-xs text-[#B8956A] uppercase tracking-wider">
                  {milestone.winery}
                </span>
              </div>

              {/* Image or award box */}
              {(milestone.image || milestone.awardImage || milestone.awardLabel) && (
                <div
                  className={`relative ${
                    index % 2 === 1 && (milestone.image || milestone.awardImage || milestone.awardLabel)
                      ? "md:order-1"
                      : "md:order-2"
                  }`}
                >
                  {milestone.awardImage ? (
                    <div className="rounded-xl overflow-hidden bg-[#B8956A]/10 border border-[#B8956A]/30 p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
                      <div className="relative w-24 h-32 md:w-28 md:h-36 flex-shrink-0">
                        <Image
                          src={milestone.awardImage}
                          alt={milestone.title}
                          fill
                          className="object-contain"
                          sizes="112px"
                        />
                      </div>
                      {milestone.awardLabel && (
                        <span className="text-[#C5A572] font-medium text-sm uppercase tracking-wider">
                          {milestone.awardLabel}
                        </span>
                      )}
                    </div>
                  ) : milestone.image ? (
                    <div className="relative aspect-[4/3] md:aspect-[3/2] rounded-xl overflow-hidden">
                      <Image
                        src={milestone.image}
                        alt={milestone.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  ) : milestone.awardLabel ? (
                    <div className="rounded-xl bg-[#B8956A]/10 border border-[#B8956A]/30 p-6 md:p-8">
                      <span className="text-[#C5A572] font-medium text-sm uppercase tracking-wider">
                        {milestone.awardLabel}
                      </span>
                    </div>
                  ) : null}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
