"use client";

import { motion } from "framer-motion";
import { milestones } from "@/lib/data";

export const Milestones = () => {
  return (
    <section
      id="milestones"
      className="py-24 bg-[#2D1216] scroll-mt-20"
    >
      <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-white"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            MILESTONES THAT BUILT A COLLECTION
          </h2>
        </motion.div>
      </div>

      <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {milestones.slice(0, 3).map((milestone, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className={`${
              milestone.highlight ? "md:scale-105" : ""
            }`}
          >
            <div
              className={`
                h-full p-6 rounded-2xl min-h-[280px]
                ${
                  milestone.highlight
                    ? "bg-[#B8956A]/20 border border-[#B8956A]/40"
                    : "bg-white/5 border border-white/10"
                }
                backdrop-blur-sm
              `}
            >
              <span
                className={`text-4xl block ${
                  milestone.highlight ? "text-[#C5A572]" : "text-white/60"
                }`}
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {milestone.year}
              </span>
              <h3
                className="text-lg md:text-xl text-white mt-4 mb-3"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {milestone.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {milestone.description}
              </p>
              <span className="inline-block mt-4 text-xs text-[#B8956A] uppercase tracking-wider">
                {milestone.winery}
              </span>
            </div>
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  );
};
