"use client";

import { motion } from "framer-motion";
import Script from "next/script";

export const Video = () => {
  return (
    <section id="video" className="py-28 md:py-36 bg-[#2D1216] scroll-mt-20">
      <Script src="https://player.vimeo.com/api/player.js" strategy="lazyOnload" />
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
          className="relative aspect-video rounded-lg overflow-hidden shadow-2xl"
        >
          <iframe
            src="https://player.vimeo.com/video/1156294352?badge=0&autopause=0&player_id=0&app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Duckhorn Horizontal Reel"
            className="absolute top-0 left-0 w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  );
};
