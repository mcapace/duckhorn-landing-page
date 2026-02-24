"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { winemakers } from "@/lib/data";

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
            <div className="relative aspect-[3/2] min-h-[280px] sm:min-h-[360px]">
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
                  className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tight"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  MEET THE MAKERS
                </h2>
                <div className="w-24 h-px bg-[#B8956A] mt-4" aria-hidden />
              </div>
            </div>
          </div>

          <p
            className="mt-6 text-[#2A2A2A] italic text-lg md:text-xl text-center max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-script)" }}
          >
            A conversation with the winemakers who shape the wines
          </p>

          {/* 5 winemaker circles */}
          <div className="mt-12 md:mt-16 w-full flex flex-wrap justify-center gap-8 md:gap-10 lg:gap-12">
            {winemakers.map((maker, index) => (
              <motion.div
                key={maker.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="flex flex-col items-center text-center"
              >
                <Link
                  href={`/wineries#${maker.slug}`}
                  className="group flex flex-col items-center"
                >
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden ring-2 ring-[#E8E4DC] group-hover:ring-[#B8956A] transition-all duration-300 flex-shrink-0">
                    <Image
                      src={maker.image}
                      alt={maker.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
                    />
                  </div>
                  <p
                    className="mt-4 text-[#2A2A2A] font-medium text-sm md:text-base"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {maker.name}
                  </p>
                  <p className="text-[#3D5636] text-xs md:text-sm mt-0.5">
                    {maker.winery}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
