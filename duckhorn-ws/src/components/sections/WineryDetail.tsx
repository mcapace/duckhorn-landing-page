"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { wineries } from "@/lib/data";

export const WineryDetail = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section
      id="wineries"
      className="py-24 bg-white scroll-mt-20"
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-[#2A2A2A]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            THE COLLECTION
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#B8956A] to-transparent mx-auto mt-4" />
          <p className="text-[#3D3D3D] mt-6 max-w-2xl mx-auto">
            Five world-class wineries united by a singular pursuit of excellence
          </p>
        </motion.div>

        <div className="space-y-4">
          {wineries.map((winery, index) => (
            <motion.div
              key={winery.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border border-[#E8E4DC] rounded-2xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setExpandedId(expandedId === winery.id ? null : winery.id)
                }
                className="w-full text-left p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 hover:bg-[#F8F6F1]/50 transition-colors"
              >
                <div className="relative w-full md:w-48 h-32 md:h-28 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src={winery.image}
                    alt={winery.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 192px"
                  />
                </div>
                <div className="flex-1">
                  <h3
                    className="text-xl md:text-2xl text-[#2A2A2A]"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {winery.name}
                  </h3>
                  <p
                    className="italic text-[#A07D4E] mt-1"
                    style={{ fontFamily: "var(--font-script)" }}
                  >
                    {winery.tagline}
                  </p>
                </div>
                <motion.span
                  animate={{ rotate: expandedId === winery.id ? 180 : 0 }}
                  className="text-[#B8956A] self-start md:self-center"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.span>
              </button>

              <AnimatePresence>
                {expandedId === winery.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-8 pt-2 border-t border-[#E8E4DC]">
                      <p className="text-[#3D3D3D] leading-relaxed mb-8">
                        {winery.heroDescription}
                      </p>
                      <div>
                        <h4
                          className="text-lg text-[#3D5636] mb-4"
                          style={{ fontFamily: "var(--font-serif)" }}
                        >
                          Featured Wines
                        </h4>
                        <div className="space-y-3">
                          {winery.wines.map((wine, i) => (
                            <div
                              key={i}
                              className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 py-3 border-b border-[#E8E4DC]/50 last:border-0"
                            >
                              <span className="font-medium text-[#2A2A2A]">
                                {wine.name}
                              </span>
                              <span className="text-sm text-[#3D3D3D]">
                                {wine.description}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
