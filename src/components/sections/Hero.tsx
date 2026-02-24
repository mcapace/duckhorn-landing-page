"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white pt-20">
      {/* Full-bleed hero image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bottles/Duckhorn-Digital-Edits-Hero.jpg"
          alt="The Duckhorn Collection Wines"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent" />
      </div>

      {/* Text overlay - left aligned */}
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-16 xl:px-24 max-w-2xl"
      >
        <div className="mb-6 md:mb-8 max-w-[280px] md:max-w-[340px]">
          <Image
            src="/images/bottles/Duckhorn-Digital-Edits-Hero Copy.png"
            alt="The Duckhorn Portfolio"
            width={340}
            height={120}
            className="w-full h-auto object-contain object-left"
            priority
          />
        </div>
        <p
          className="text-[#B8956A] text-xl md:text-2xl mb-4"
          style={{ fontFamily: "var(--font-script)" }}
        >
          Wine Spectator
        </p>
        <p className="mt-2 text-base md:text-lg text-[#3D3D3D] max-w-md">
          Pioneering quality in world-class wine
        </p>
        <div className="mt-10 md:mt-14">
          <Link
            href="/#featured-wines"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#3D5636] text-white text-sm font-medium uppercase tracking-wider hover:bg-[#2F432A] transition-colors rounded-sm"
          >
            Explore the Wines
            <span aria-hidden>→</span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};
