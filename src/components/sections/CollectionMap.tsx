"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const wineryLocations = [
  { name: "DUCKHORN VINEYARDS", region: "Napa Valley" },
  { name: "KOSTA BROWNE", region: "Sonoma Coast" },
  { name: "CALERA", region: "Mt. Harlan" },
  { name: "GOLDENEYE", region: "Anderson Valley" },
  { name: "SONOMA-CUTRER", region: "Russian River Valley" },
];

export const CollectionMap = () => {
  return (
    <section
      id="the-collection-map"
      className="py-24 bg-white scroll-mt-20"
    >
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-[#2A2A2A] font-light uppercase"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            FIVE WINERIES, ONE COLLECTION
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#B8956A] to-transparent mx-auto mt-4" />
          <p className="text-[#3D3D3D] mt-6 max-w-2xl mx-auto">
            From Napa Valley to Anderson Valley, our estate portfolio spans
            California&apos;s most compelling wine-growing regions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden bg-[#F8F6F1] border border-[#E8E4DC]"
        >
          <div className="relative aspect-[4/3] md:aspect-[16/10] min-h-[300px]">
            <Image
              src="/images/Screenshot 2026-01-22 at 10.53.30 AM.png"
              alt="California wine region map showing Duckhorn Collection winery locations"
              fill
              className="object-contain p-4 md:p-8"
              sizes="(max-width: 768px) 100vw, 1024px"
              priority={false}
            />
          </div>
          <div className="p-6 md:p-8 bg-white/80 border-t border-[#E8E4DC]">
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {wineryLocations.map((winery, i) => (
                <div
                  key={winery.name}
                  className="flex flex-col items-center text-center"
                >
                  <span
                    className="text-sm font-medium text-[#2A2A2A]"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {winery.name}
                  </span>
                  <span className="text-xs text-[#A07D4E]">{winery.region}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
