"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const meetTheMakersImage = "/images/260115_WS_Duckhorn28217.jpg";

export const MeetTheMakersSection = () => {
  return (
    <section id="meet-the-makers" className="py-20 md:py-28 bg-white scroll-mt-20">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col items-center"
        >
          {/* Rounded image container with gold border */}
          <div className="relative w-full max-w-5xl rounded-3xl overflow-hidden border border-[#B8956A] shadow-lg">
            <div className="relative aspect-[21/9] sm:aspect-[3/1] min-h-[220px]">
              <Image
                src={meetTheMakersImage}
                alt="Meet the Makers"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <h2
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  MEET THE MAKERS
                </h2>
                <div className="w-24 h-px bg-[#B8956A] mt-4" aria-hidden />
              </div>
            </div>
          </div>

          <p
            className="mt-6 text-[#2A2A2A] italic text-base md:text-lg text-center max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-script)" }}
          >
            A conversation with the winemakers who shape the wines
          </p>
        </motion.div>
      </div>
    </section>
  );
};
