"use client";

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

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#1a1a1a] pt-16 sm:pt-20 h-[75svh] min-h-[400px] sm:h-screen"
    >
      {/* Background image with parallax */}
      <div className="absolute inset-0 w-full h-full">
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ y: heroY }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_IMAGE}
            alt="The Duckhorn Collection"
            className="absolute inset-0 w-full h-full object-cover object-center sm:object-[center_38%]"
          />
        </motion.div>
      </div>

      {/* Subtle bottom fade on mobile only */}
      <div
        className="absolute inset-x-0 bottom-0 h-24 sm:hidden pointer-events-none bg-gradient-to-t from-black/30 to-transparent"
        aria-hidden
      />
    </section>
  );
};
