"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="py-12 md:py-14 bg-[#2D1216] text-white/80">
      <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-6">
            <Image
              src="/images/WSlogoWhite-stroke (2) (4) (5).png"
              alt="Wine Spectator"
              width={140}
              height={56}
              className="h-10 md:h-12 w-auto object-contain opacity-95"
            />
            <Image
              src="/images/DUCKHORN-US-1200-e1550307961298-removebg-preview.png"
              alt="The Duckhorn Collection"
              width={200}
              height={60}
              className="h-20 md:h-24 w-auto object-contain opacity-95 brightness-0 invert"
            />
          </div>
          <p
            className="italic text-[#B8956A] mb-8"
            style={{ fontFamily: "var(--font-script)" }}
          >
            Defining American Fine Wine — Sponsored Special Feature
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#perspective" className="hover:text-[#B8956A] transition-colors">
              The Duckhorn Perspective
            </a>
            <a href="#featured-wines" className="hover:text-[#B8956A] transition-colors">
              Featured Wines
            </a>
            <a href="#meet-the-makers" className="hover:text-[#B8956A] transition-colors">
              Meet the Makers
            </a>
            <a href="#milestones" className="hover:text-[#B8956A] transition-colors">
              Milestones
            </a>
            <a href="#wineries" className="hover:text-[#B8956A] transition-colors">
              The Collection
            </a>
            <a href="#ratings" className="hover:text-[#B8956A] transition-colors">
              Wine Spectator Ratings
            </a>
          </div>
          <p className="mt-10 text-xs text-white/50">
            Wine Spectator Sponsored Special Feature
          </p>
          <p className="mt-2 text-xs text-white/40">
            Celebrating 50 Years of Napa Valley Heritage
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
