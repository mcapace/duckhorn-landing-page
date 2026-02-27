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
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#1a1a1a] pt-16 sm:pt-20 min-h-[75svh] min-h-[75dvh] sm:min-h-[100svh] sm:min-h-[100dvh] sm:min-h-screen"
    >
      <div className="relative min-h-full w-full">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <Image
            src="/images/Duckhorn-Digital-Edits-Hero2-Parallax.jpg"
            alt=""
            fill
            className="object-cover object-center sm:object-[center_38%]"
            priority
            sizes="100vw"
            unoptimized
          />
        </motion.div>

        {/* Overlay for readability: light at top, darker at bottom */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.7) 100%)",
          }}
        />

        {/* Bottom fade on mobile only */}
        <div
          className="absolute inset-x-0 bottom-0 h-24 sm:hidden pointer-events-none bg-gradient-to-t from-black/60 to-transparent"
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
      </div>
    </section>
  );
};
