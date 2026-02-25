"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const visitImage = "/images/NatandCody_Paraduxx_250610_0532.jpg";

export const VisitTheVineyards = () => {
  return (
    <section id="visit" className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden scroll-mt-20">
      <div className="absolute inset-0">
        <Image
          src={visitImage}
          alt="Visit the Vineyards"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 text-center px-6 py-16 md:py-24"
      >
        <h2
          className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tight font-light uppercase"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          VISIT THE VINEYARDS
        </h2>
        <div className="mt-8 md:mt-10">
          <Link
            href="/wineries"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#2A2A2A] text-sm font-medium uppercase tracking-wider hover:bg-[#F5F3EF] transition-colors rounded-sm"
          >
            Plan Your Visit
            <span aria-hidden>→</span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};
