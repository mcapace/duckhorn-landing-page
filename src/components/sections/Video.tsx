"use client";

import { motion } from "framer-motion";

export const Video = () => {
  return (
    <section id="video" className="py-28 md:py-36 bg-[#2D1216] scroll-mt-20">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            VIDEO
          </h2>
          <div className="w-16 h-px bg-white/20 mx-auto mt-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative aspect-video rounded-lg overflow-hidden bg-[#4A1D23] shadow-2xl"
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
