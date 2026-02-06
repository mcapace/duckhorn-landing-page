"use client";

import { motion } from "framer-motion";

export const Video = () => {
  return (
    <section
      id="video"
      className="py-24 bg-[#2D1216] scroll-mt-20"
    >
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
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
            VIDEO
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative aspect-video rounded-2xl overflow-hidden bg-[#4A1D23]"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white/80">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full border-2 border-[#B8956A]/50 flex items-center justify-center">
                <svg
                  className="w-8 h-8 ml-1 text-[#B8956A]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-sm text-[#B8956A]">
                Video placeholder
              </p>
              <p className="text-xs text-white/60 mt-1">
                Add YouTube/Vimeo embed URL
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
