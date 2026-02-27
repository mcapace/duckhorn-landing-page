"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HERO_IMAGE = "/images/Duckhorn-Digital-Edits-Hero2-Parallax.jpg";

export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#1a1a1a] pt-16 sm:pt-20 h-[75svh] min-h-[400px] sm:h-screen"
    >
      {/* Background image layer — explicit full-size container so image always shows */}
      <div className="absolute inset-0 w-full h-full">
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ y: heroY }}
        >
          {/* Native img so hero image always displays; Next/Image fill can fail in some layouts */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_IMAGE}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center sm:object-[center_38%]"
          />
        </motion.div>
      </div>

      {/* Overlay for text readability — keep image visible */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      {/* Bottom fade on mobile only */}
      <div
        className="absolute inset-x-0 bottom-0 h-24 sm:hidden pointer-events-none bg-gradient-to-t from-black/50 to-transparent"
        aria-hidden
      />

      {/* Centered copy + logo */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col items-center gap-5 sm:gap-6 max-w-2xl"
        >
          <Image
            src="/images/Timeline/DuckhornWordmark_logo_white.png"
            alt="The Duckhorn Collection"
            width={320}
            height={80}
            className="w-full max-w-[280px] sm:max-w-[320px] h-auto object-contain drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]"
            priority
            unoptimized
          />
          <div className="space-y-2 sm:space-y-3">
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white tracking-[0.2em] sm:tracking-[0.25em] uppercase font-light"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              The Duckhorn Collection
            </h1>
            <p
              className="text-[#D4B896] italic text-lg sm:text-xl md:text-2xl"
              style={{ fontFamily: "var(--font-script)" }}
            >
              Defining American Fine Wine
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
