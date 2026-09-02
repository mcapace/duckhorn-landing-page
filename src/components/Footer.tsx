"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SHOP_URL } from "@/components/ui/ShopCollectionButton";

export const Footer = () => {
  return (
    <footer className="py-16 md:py-20 bg-[#425a4d] text-white">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-5xl mx-auto text-center"
        >
          {/* Gold separator line */}
          <div className="w-full max-w-3xl h-px bg-[#B8956A] mx-auto mb-12 md:mb-14" aria-hidden />

          <a
            href={SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 mb-12 md:mb-14 border border-white/80 text-white text-sm font-medium uppercase tracking-wider hover:bg-white hover:text-[#425a4d] transition-colors rounded-md"
          >
            Shop the Collection
            <span aria-hidden>→</span>
          </a>

          {/* Two logos side by side */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <Image
              src="/images/WSlogoWhite-stroke (2) (4) (5).png"
              alt="Wine Spectator"
              width={180}
              height={60}
              className="h-8 md:h-10 w-auto object-contain"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/DuckhornWordmark_logo_white.png"
              alt="Duckhorn Vineyards"
              className="h-8 md:h-10 w-auto object-contain"
            />
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
