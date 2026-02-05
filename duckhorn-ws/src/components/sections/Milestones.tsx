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
          className="text-center"
        >
          <p className="label text-[#C5A572] mb-2 tracking-[0.2em] uppercase text-xs">
            50 Years of The
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-white mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            THE MILESTONES THAT BUILT A COLLECTION
          </h2>
          <p
            className="italic text-[#B8956A]"
            style={{ fontFamily: "var(--font-script)" }}
          >
            And Helped Define American Fine Wine
          </p>
        </motion.div>
      </div>

      <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-6 px-6 md:px-12 lg:px-16 pb-8">
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className={`flex-shrink-0 w-72 md:w-80 snap-center ${
              milestone.highlight ? "scale-105" : ""
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
    </section>
  );
};
