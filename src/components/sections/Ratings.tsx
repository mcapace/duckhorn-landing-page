"use client";

import { motion } from "framer-motion";
import { wineRatings } from "@/lib/data";

const wineryLabels: Record<string, string> = {
  duckhornVineyards: "Duckhorn Vineyards",
  kostaBrowne: "Kosta Browne",
  caleraVineyards: "Calera Vineyards",
  goldeneye: "Goldeneye",
  sonomaCutrer: "Sonoma-Cutrer",
};

export const Ratings = () => {
  const entries = Object.entries(wineRatings);

  return (
    <section
      id="ratings"
      className="py-24 bg-[#F8F6F1] scroll-mt-20"
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
            WINE SPECTATOR RECOMMENDED RELEASES
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#B8956A] to-transparent mx-auto mt-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {entries.map(([key, ratings], wineryIndex) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: wineryIndex * 0.1 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#E8E4DC]"
            >
              <h3
                className="text-xl md:text-2xl text-[#2A2A2A] mb-6 pb-4 border-b border-[#E8E4DC]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {wineryLabels[key]}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[400px]">
                  <thead>
                    <tr className="text-left text-xs uppercase tracking-wider text-[#425a4d]">
                      <th className="pb-3">Wine</th>
                      <th className="pb-3 text-right w-20">Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ratings.map(({ wine, score }, i) => (
                      <tr
                        key={i}
                        className="border-b border-[#E8E4DC]/50 last:border-0"
                      >
                        <td className="py-4 text-[#3D3D3D]">{wine}</td>
                        <td className="py-4 text-right font-medium text-[#B8956A]">
                          {score}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
