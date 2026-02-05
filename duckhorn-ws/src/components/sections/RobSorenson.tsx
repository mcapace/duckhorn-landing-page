"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { robSorensonData } from "@/lib/data";
import { GlassCard } from "@/components/ui/GlassCard";

export const RobSorenson = () => {
  return (
    <section
      id="vineyard-stewardship"
      className="py-24 bg-[#F8F6F1] scroll-mt-20"
    >
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="label text-[#3D5636] mb-2 tracking-[0.2em] uppercase text-xs">
            Extended Digital Article
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-[#2A2A2A] mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Q&A: Rob Sorenson on Vineyard Stewardship
          </h2>
          <p className="text-[#3D3D3D] max-w-2xl mx-auto">
            at The Duckhorn Collection
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-8 mb-12"
        >
          <div className="relative w-full md:w-64 h-64 md:h-80 rounded-2xl overflow-hidden flex-shrink-0">
            <Image
              src={robSorensonData.image}
              alt={robSorensonData.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 256px"
            />
          </div>
          <div className="flex-1">
            <h3
              className="text-2xl text-[#2A2A2A] mb-2"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {robSorensonData.name}
            </h3>
            <p className="text-[#A07D4E] font-medium mb-4">
              {robSorensonData.title}
            </p>
            <p className="text-[#3D3D3D] leading-relaxed mb-4">
              {robSorensonData.intro}
            </p>
            <p
              className="text-sm italic text-[#3D5636]"
              style={{ fontFamily: "var(--font-script)" }}
            >
              {robSorensonData.context}
            </p>
          </div>
        </motion.div>

        <GlassCard className="p-8 md:p-10" variant="light">
          <div className="space-y-8">
            {robSorensonData.qAndA.map((qa, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="border-b border-[#E8E4DC] last:border-0 last:pb-0 pb-8 last:pb-0"
              >
                <p className="text-sm font-medium text-[#3D5636] mb-3">
                  {qa.question}
                </p>
                <p className="text-[#3D3D3D] leading-relaxed">{qa.answer}</p>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
};
