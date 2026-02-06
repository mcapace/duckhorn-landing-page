"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { winemakers } from "@/lib/data";

export const MeetTheMakers = () => {
  const [selectedMaker, setSelectedMaker] = useState<number | null>(null);

  return (
    <section id="meet-the-makers" className="py-28 md:py-36 bg-white scroll-mt-20">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-[#2A2A2A] tracking-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            MEET THE MAKERS
          </h2>
          <div className="w-16 h-px bg-[#E8E4DC] mx-auto mt-6" />
          <p className="text-[#3D3D3D] mt-6 max-w-xl mx-auto text-base md:text-lg">
            A Q&A with the winemakers who shape the wines.
          </p>
        </motion.div>

        <div className="flex flex-nowrap justify-center gap-8 md:gap-12 lg:gap-16 overflow-x-auto overflow-y-visible pb-4 scrollbar-hide">
          {winemakers.map((maker, index) => (
            <motion.div
              key={maker.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.5 }}
              onClick={() => setSelectedMaker(selectedMaker === index ? null : index)}
              className="cursor-pointer group flex flex-col items-center flex-shrink-0"
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative"
              >
                <div className="relative w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 xl:w-52 xl:h-52 rounded-full overflow-hidden ring-2 ring-[#E8E4DC] group-hover:ring-[#B8956A] transition-all duration-300 group-hover:shadow-xl flex-shrink-0">
                  <Image
                    src={maker.image}
                    alt={maker.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 176px, (max-width: 1024px) 192px, 224px"
                  />
                </div>

                <h3
                  className="mt-6 text-lg md:text-xl font-medium text-[#2A2A2A] tracking-tight"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {maker.name}
                </h3>
                <p className="text-sm text-[#3D5636] mt-2 font-medium">{maker.winery}</p>
                <p className="text-xs text-[#3D3D3D]/70 mt-1 uppercase tracking-widest">{maker.title}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedMaker !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 sm:p-6"
              onClick={() => setSelectedMaker(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-xl sm:rounded-2xl overflow-hidden w-full max-w-2xl sm:max-w-4xl lg:max-w-5xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl"
              >
                {selectedMaker !== null && (
                  <>
                    {/* Prominent winemaker image */}
                    <div className="relative w-full aspect-[16/10] md:aspect-[2/1] min-h-[220px] sm:min-h-[280px] md:min-h-[360px]">
                      <button
                        onClick={() => setSelectedMaker(null)}
                        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center text-white transition-colors"
                        aria-label="Close"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                      <Image
                        src={winemakers[selectedMaker].image}
                        alt={winemakers[selectedMaker].name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 768px"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3
                          className="text-2xl md:text-3xl"
                          style={{ fontFamily: "var(--font-serif)" }}
                        >
                          {winemakers[selectedMaker].name}
                        </h3>
                        <p className="text-[#C5A572] font-medium">
                          {winemakers[selectedMaker].winery}
                        </p>
                        <p className="text-white/80 text-sm">
                          {winemakers[selectedMaker].title}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 sm:p-8 md:p-10">
                      <p className="text-[#3D3D3D] italic text-base sm:text-lg mb-6">
                        &ldquo;{winemakers[selectedMaker].quote}&rdquo;
                      </p>
                      <div className="space-y-5 sm:space-y-6 border-t border-[#E8E4DC] pt-6">
                      {winemakers[selectedMaker].qAndA.map((qa, i) => (
                        <div key={i} className="border-b border-[#E8E4DC]/50 last:border-0 last:pb-0 pb-5 sm:pb-6">
                          <p className="text-sm font-medium text-[#3D5636] mb-2 leading-snug">
                            {qa.question}
                          </p>
                          <p className="text-[#3D3D3D] text-sm leading-relaxed">
                            {qa.answer}
                          </p>
                        </div>
                      ))}
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
