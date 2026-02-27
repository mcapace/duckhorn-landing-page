"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]); // A taller hero image would allow a larger range (e.g. 25–30%) for stronger effect

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#2A2A2A] pt-16 sm:pt-20 min-h-[70svh] min-h-[70dvh] sm:min-h-[100svh] sm:min-h-[100dvh] sm:min-h-screen"
    >
      <div className="relative min-h-full w-full">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <Image
            src="/images/Duckhorn-Digital-Edits-Hero2-Parallax.jpg"
            alt="The Duckhorn Collection"
            fill
            className="object-cover object-[center_35%] sm:object-[center_38%]"
            priority
            sizes="100vw"
            unoptimized
          />
        </motion.div>
        {/* Subtle bottom gradient on mobile so hero doesn't end abruptly */}
        <div className="absolute inset-0 sm:inset-x-0 sm:top-auto sm:bottom-0 sm:h-32 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" aria-hidden />
      </div>
    </section>
  );
};
