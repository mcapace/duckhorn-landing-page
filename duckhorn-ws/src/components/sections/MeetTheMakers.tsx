"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { winemakers } from "@/lib/data";

export const MeetTheMakers = () => {
  const [selectedMaker, setSelectedMaker] = useState<number | null>(null);

  return (
    <section
      id="meet-the-makers"
      className="py-24 bg-white scroll-mt-20"
    >
      <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16">
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
            MEET THE MAKERS
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#B8956A] to-transparent mx-auto mt-4" />
          <p className="text-[#3D3D3D] mt-6 max-w-2xl mx-auto">
            The growers, winemakers, and stewards whose craft and commitment
            elevate every bottle
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {winemakers.map((maker, index) => (
            <motion.div
              key={maker.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedMaker(selectedMaker === index ? null : index)}
              className="cursor-pointer group text-center"
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="relative w-28 h-28 md:w-32 md:h-32 mx-auto mb-4 rounded-full overflow-hidden ring-2 ring-transparent group-hover:ring-[#B8956A] transition-all duration-300">
                  <Image
                    src={maker.image}
                    alt={maker.name}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>

                <h3
                  className="text-lg text-[#2A2A2A]"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {maker.name}
                </h3>
                <p className="text-sm text-[#A07D4E]">{maker.winery}</p>
                <p className="text-xs text-[#3D3D3D] mt-1">{maker.title}</p>
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
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-6"
              onClick={() => setSelectedMaker(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl p-8 max-w-2xl max-h-[85vh] overflow-y-auto shadow-2xl"
              >
                {selectedMaker !== null && (
                  <>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={winemakers[selectedMaker].image}
                          alt={winemakers[selectedMaker].name}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>
                      <div>
                        <h3
                          className="text-xl text-[#2A2A2A]"
                          style={{ fontFamily: "var(--font-serif)" }}
                        >
                          {winemakers[selectedMaker].name}
                        </h3>
                        <p className="text-sm text-[#A07D4E]">
                          {winemakers[selectedMaker].winery}
                        </p>
                      </div>
                    </div>
                    <p className="text-[#3D3D3D] italic mb-6">
                      &ldquo;{winemakers[selectedMaker].quote}&rdquo;
                    </p>
                    <div className="space-y-6 border-t border-[#E8E4DC] pt-6">
                      {winemakers[selectedMaker].qAndA.map((qa, i) => (
                        <div key={i} className="border-b border-[#E8E4DC]/50 last:border-0 last:pb-0 pb-6">
                          <p className="text-sm font-medium text-[#3D5636] mb-2">
                            {qa.question}
                          </p>
                          <p className="text-[#3D3D3D] text-sm leading-relaxed">
                            {qa.answer}
                          </p>
                        </div>
                      ))}
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
