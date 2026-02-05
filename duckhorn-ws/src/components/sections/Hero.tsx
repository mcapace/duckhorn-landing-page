"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F8F6F1]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5F3EF] to-[#F8F6F1]" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-16 pt-24 pb-32 w-full"
      >
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="label text-[#3D3D3D] mb-4 tracking-[0.2em] uppercase text-xs"
        >
          Sponsored Special Feature
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <Image
            src="/images/WS logo (5).png"
            alt="Wine Spectator"
            width={200}
            height={80}
            className="h-12 md:h-16 w-auto mx-auto object-contain"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-8"
        >
          <p className="label text-[#3D5636] mb-2 tracking-[0.25em] uppercase">THE</p>
          <h2
            className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-[#2A2A2A]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            DUCKHOR<span className="text-[#3D5636]">N</span>
          </h2>
          <p
            className="text-2xl md:text-4xl text-[#3D3D3D] -mt-2"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            COLLECTION
          </p>
          <p
            className="text-lg md:text-xl italic text-[#A07D4E] mt-4"
            style={{ fontFamily: "var(--font-script)" }}
          >
            Defining American Fine Wine
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          style={{ y }}
          className="relative w-full max-w-[1200px] h-[320px] md:h-[550px]"
        >
          <Image
            src="/images/FRONT_COVER_0428-flat-edit1.jpg"
            alt="The Duckhorn Collection Wines"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 768px) 100vw, 1024px"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-0 right-0 flex flex-col md:flex-row justify-center items-center gap-2 md:gap-8 text-sm text-[#3D3D3D] px-4"
        >
          <span
            className="italic text-center"
            style={{ fontFamily: "var(--font-script)" }}
          >
            Crafting Timeless Wines From Iconic Terroirs
          </span>
          <span className="text-[#B8956A] hidden md:inline">|</span>
          <span
            className="italic text-center"
            style={{ fontFamily: "var(--font-script)" }}
          >
            Celebrating <strong>50 YEARS</strong> Of Napa Valley Heritage
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
};
