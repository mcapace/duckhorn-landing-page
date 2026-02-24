"use client";

import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="py-16 md:py-20 bg-[#2D1216] text-white">
      <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="w-24 h-px bg-[#B8956A]/50 mx-auto mb-8" />
          <p
            className="text-xl md:text-2xl text-white/90 mb-2"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            THE STORY CONTINUES...
          </p>
          <p className="text-[#B8956A] text-sm md:text-base uppercase tracking-wider mb-10">
            Sign up for our newsletter
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm mb-10">
            <a href="#perspective" className="hover:text-[#B8956A] transition-colors">
              The Duckhorn Perspective
            </a>
            <a href="#featured-wines" className="hover:text-[#B8956A] transition-colors">
              Featured Wines
            </a>
            <a href="#explore-the-brands" className="hover:text-[#B8956A] transition-colors">
              Explore the Brands
            </a>
            <a href="#milestones" className="hover:text-[#B8956A] transition-colors">
              Milestones
            </a>
            <a href="/wineries" className="hover:text-[#B8956A] transition-colors">
              The Collection
            </a>
          </div>
          <p className="text-xs text-white/50">
            Wine Spectator Sponsored Special Feature · Celebrating 50 Years of Napa Valley Heritage
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
