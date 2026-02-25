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
    <section ref={sectionRef} className="relative min-h-screen w-full overflow-hidden bg-[#FAFAF8] pt-20">
      <motion.div className="absolute inset-0" style={{ y: heroY }}>
        <Image
          src="/images/Duckhorn-Digital-Edits-Hero2-Parallax.jpg"
          alt="The Duckhorn Collection"
          fill
          className="object-cover object-top"
          priority
          sizes="100vw"
          unoptimized
        />
      </motion.div>
    </section>
  );
};
