"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Wine {
  name: string;
  description: string;
}

interface Winemaker {
  name: string;
  title: string;
  winery: string;
  image: string;
  quote: string;
  qAndA: { question: string; answer: string }[];
}

interface WineryChapter {
  id: string;
  name: string;
  tagline: string;
  image: string;
  heroDescription: string;
  bottleImage: string;
  wines: Wine[];
  winemaker: Winemaker;
}

export function WineryPageContent({ chapter }: { chapter: WineryChapter }) {
  const { name, tagline, image, heroDescription, bottleImage, wines, winemaker } = chapter;
  const [showQaModal, setShowQaModal] = useState(false);

  return (
    <section className="scroll-mt-20 min-h-screen bg-white">
      {/* Hero - immersive, full bleed */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full min-h-[70vh] md:min-h-[75vh] overflow-hidden"
      >
        {/* Back link - overlays hero */}
        <div className="absolute top-0 left-0 right-0 z-20 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-28">
          <Link
            href="/#featured-wines"
            className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-white transition-colors py-2 px-3 -ml-3 rounded-lg hover:bg-white/10"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Featured Wines
          </Link>
        </div>
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-center scale-105"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-14 pb-28 md:pb-36">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-sm uppercase tracking-[0.3em] text-white/80 mb-3"
            >
              The Duckhorn Collection
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-4 text-xl md:text-2xl text-white/90 italic max-w-2xl"
              style={{ fontFamily: "var(--font-script)" }}
            >
              {tagline}
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Intro - editorial flow */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 -mt-10 md:-mt-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl shadow-black/5 p-6 md:p-10 lg:p-12 max-w-3xl"
        >
          <p className="text-lg md:text-xl text-[#3D3D3D] leading-[1.8]">
            {heroDescription}
          </p>
        </motion.div>
      </div>

      {/* Bottle + Tasting Notes - flowing layout */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Bottle - prominent, clear of text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-[320px] h-[420px] sm:w-[400px] sm:h-[520px] md:w-[480px] md:h-[620px]">
              <Image
                src={bottleImage}
                alt={name}
                fill
                className="object-contain object-center drop-shadow-[0_30px_60px_rgba(0,0,0,0.15)]"
                sizes="(max-width: 768px) 320px, (max-width: 1024px) 400px, 480px"
              />
            </div>
          </motion.div>

          {/* Tasting Notes */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <h3
              className="text-xs uppercase tracking-[0.35em] text-[#B8956A] mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Tasting Notes
            </h3>
            <ul className="space-y-6">
              {wines.map((wine, i) => (
                <li key={i} className="group">
                  <h4 className="font-medium text-[#2A2A2A] text-base md:text-lg group-hover:text-[#425a4d] transition-colors">
                    {wine.name}
                  </h4>
                  <p className="text-[#3D3D3D]/85 text-sm md:text-base mt-2 leading-relaxed max-w-xl">
                    {wine.description}
                  </p>
                  {i < wines.length - 1 && (
                    <div className="mt-5 h-px bg-gradient-to-r from-[#E8E4DC] to-transparent" />
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Winemaker - full-width card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-20 md:mt-24 rounded-2xl overflow-hidden bg-[#FAFAF8] border border-[#E8E4DC]/60"
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
            <div className="md:col-span-2 flex flex-col items-center justify-center p-10 md:p-12">
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden ring-2 ring-white shadow-lg">
                <Image
                  src={winemaker.image}
                  alt={winemaker.name}
                  fill
                  className="object-cover object-center"
                  sizes="192px"
                />
              </div>
            </div>
            <div className="md:col-span-3 flex flex-col justify-center p-8 md:p-12 md:pl-10">
              <p className="text-xs uppercase tracking-widest text-[#B8956A] mb-2">
                Winemaker
              </p>
              <h3
                className="text-2xl md:text-3xl text-[#2A2A2A] font-medium"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {winemaker.name}
              </h3>
              <p className="text-[#425a4d] text-sm mt-1">{winemaker.winery}</p>
              <p className="text-[#A07D4E] text-xs mt-0.5 uppercase tracking-wider">{winemaker.title}</p>
              <blockquote
                className="mt-6 text-base md:text-lg text-[#3D3D3D] italic leading-relaxed max-w-xl"
                style={{ fontFamily: "var(--font-script)" }}
              >
                &ldquo;{winemaker.quote}&rdquo;
              </blockquote>
              <button
                type="button"
                onClick={() => setShowQaModal(true)}
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-[#425a4d] text-white text-sm font-medium uppercase tracking-wider hover:bg-[#2D4636] transition-colors rounded-sm w-fit"
              >
                Read Full Q&A
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Q&A Modal - same style as Meet the Makers */}
      <AnimatePresence>
        {showQaModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={() => setShowQaModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl sm:rounded-2xl overflow-hidden w-full max-w-2xl sm:max-w-4xl lg:max-w-5xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="relative w-full aspect-[16/10] md:aspect-[2/1] min-h-[220px] sm:min-h-[280px] md:min-h-[360px]">
                <button
                  onClick={() => setShowQaModal(false)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center text-white transition-colors"
                  aria-label="Close"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <Image
                  src={winemaker.image}
                  alt={winemaker.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3
                    className="text-2xl md:text-3xl"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {winemaker.name}
                  </h3>
                  <p className="text-[#C5A572] font-medium">{winemaker.winery}</p>
                  <p className="text-white/80 text-sm">{winemaker.title}</p>
                </div>
              </div>

              <div className="p-6 sm:p-8 md:p-10">
                <p className="text-[#3D3D3D] italic text-base sm:text-lg mb-6">
                  &ldquo;{winemaker.quote}&rdquo;
                </p>
                <div className="space-y-5 sm:space-y-6 border-t border-[#E8E4DC] pt-6">
                  {winemaker.qAndA.map((qa, i) => (
                    <div key={i} className="border-b border-[#E8E4DC]/50 last:border-0 last:pb-0 pb-5 sm:pb-6">
                      <p className="text-sm font-medium text-[#425a4d] mb-2 leading-snug">
                        {qa.question}
                      </p>
                      <p className="text-[#3D3D3D] text-sm leading-relaxed">
                        {qa.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
