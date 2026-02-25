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
  galleryImages?: string[];
  section1?: { heading: string; body: string };
  section2?: { heading: string; body: string };
}

export function WineryPageContent({ chapter }: { chapter: WineryChapter }) {
  const { name, tagline, image, heroDescription, bottleImage, wines, winemaker, galleryImages, section1, section2 } = chapter;
  const [showQaModal, setShowQaModal] = useState(false);
  const isGalleryLayout = galleryImages && galleryImages.length > 0;
  const isDuckhorn = chapter.id === "duckhorn";
  const isKostaBrowne = chapter.id === "kosta-browne";

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
              style={{ fontFamily: "var(--font-serif)" }}
            >
              The Duckhorn Collection
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-white uppercase"
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

      {/* Intro - centered text bubble */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 -mt-10 md:-mt-16 relative z-10 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl shadow-black/5 p-6 md:p-10 lg:p-12 max-w-4xl w-full"
        >
          <p className="text-lg md:text-xl text-[#3D3D3D] leading-[1.8]">
            {heroDescription}
          </p>
        </motion.div>
      </div>

      {isGalleryLayout ? (
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-16 md:mb-20"
          >
            {galleryImages!.map((src, i) => (
              <div key={i} className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </motion.div>
          {section1 && (
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="mb-12 md:mb-16"
            >
              <h2 className={`text-2xl md:text-3xl italic font-semibold mb-6 ${isKostaBrowne ? "text-[#2A2A2A]" : "text-[#A07D4E]"}`} style={{ fontFamily: "var(--font-serif)" }}>
                {section1.heading}
              </h2>
              <p className="text-[#3D3D3D] text-base md:text-lg leading-[1.75] max-w-3xl" style={isKostaBrowne ? { fontFamily: "var(--font-serif)" } : undefined}>{section1.body}</p>
            </motion.section>
          )}
          {section2 && (
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="mb-16 md:mb-24"
            >
              <h2 className="text-2xl md:text-3xl text-[#A07D4E] italic font-semibold mb-6" style={{ fontFamily: "var(--font-serif)" }}>
                {section2.heading}
              </h2>
              <p className="text-[#3D3D3D] text-base md:text-lg leading-[1.75] max-w-3xl">{section2.body}</p>
            </motion.section>
          )}
          {isKostaBrowne ? (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden border border-[#E8E4DC]/50 relative min-h-[320px] md:min-h-[380px] mb-20 md:mb-24"
            >
              <Image
                src={bottleImage}
                alt={name}
                fill
                className="object-contain object-left bg-[#FAFAF8]"
                sizes="(max-width: 1024px) 100vw, 1400px"
              />
              {/* Text overlaid on right side of image */}
              <div className="absolute inset-y-0 right-0 w-full md:w-[45%] min-h-[320px] md:min-h-0 flex flex-col justify-center pl-8 pr-8 py-8 md:py-12 bg-gradient-to-l from-white via-white/95 to-transparent md:from-white/95 md:via-white/80 md:to-transparent">
                <div className="space-y-6 max-w-md ml-auto">
                  {wines.map((wine, i) => (
                    <div key={i}>
                      <h4 className="text-base md:text-lg font-semibold text-[#425a4d]" style={{ fontFamily: "var(--font-serif)" }}>
                        {wine.name}
                      </h4>
                      <p className="text-[#2A2A2A] text-sm md:text-base mt-1.5 leading-relaxed">{wine.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="mb-20 md:mb-24"
          >
            {/* Single image with text overlay on top */}
            <div className="relative w-full max-w-4xl mx-auto">
              <div className="relative w-full">
                <Image
                  src={bottleImage}
                  alt={name}
                  width={1200}
                  height={720}
                  className="w-full h-auto block object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,0.08)]"
                  sizes="(max-width: 1024px) 100vw, 896px"
                />
                {/* Text overlay: five blocks over lower part of image */}
                <div className="absolute inset-x-0 bottom-0 min-h-[38%] pt-[20%] pb-4 px-4 sm:px-6 flex flex-col justify-end bg-gradient-to-t from-white via-white/85 to-transparent">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-2 max-w-4xl mx-auto w-full">
                    {wines.map((wine, i) => (
                      <div key={i} className="text-center">
                        <h4 className="text-sm sm:text-base font-semibold text-[#425a4d]" style={{ fontFamily: "var(--font-serif)" }}>
                          {wine.name}
                        </h4>
                        <p className="text-[#3D3D3D] text-xs sm:text-sm mt-1.5 leading-relaxed">{wine.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          )}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden bg-[#F5F2ED] border border-[#E8E4DC]/50"
          >
            <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
              <div className="md:col-span-2 flex flex-col items-center justify-center p-10 md:p-12">
                <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden ring-2 ring-white shadow-lg">
                  <Image src={winemaker.image} alt={winemaker.name} fill className="object-cover object-center" sizes="192px" />
                </div>
              </div>
              <div className="md:col-span-3 flex flex-col justify-center p-8 md:p-12 md:pl-10">
                <h3 className="text-2xl md:text-3xl text-[#2A2A2A] font-semibold" style={{ fontFamily: "var(--font-serif)" }}>
                  {winemaker.name}
                </h3>
                <p className="text-[#425a4d] text-xs uppercase tracking-wider mt-1">{winemaker.title}</p>
                <blockquote className="mt-6 text-base md:text-lg text-[#3D3D3D] italic leading-relaxed max-w-xl" style={{ fontFamily: "var(--font-script)" }}>
                  &ldquo;{winemaker.quote}&rdquo;
                </blockquote>
                <button
                  type="button"
                  onClick={() => setShowQaModal(true)}
                  className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-[#425a4d] text-white text-sm font-medium uppercase tracking-wider hover:bg-[#2D4636] transition-colors rounded-md w-fit"
                >
                  READ FULL Q&A
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      ) : (
      <>
      {/* Bottle + wine copy - two columns, editorial style */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Bottle - left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-[280px] h-[380px] sm:w-[340px] sm:h-[460px] md:w-[400px] md:h-[520px]">
              <Image
                src={bottleImage}
                alt={name}
                fill
                className="object-contain object-center drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
                sizes="(max-width: 768px) 280px, (max-width: 1024px) 340px, 400px"
              />
            </div>
          </motion.div>

          {/* Wine copy - right: italic title, body, separator lines, wine name + notes */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {wines.length > 0 && (
              <>
                <h3
                  className="text-xl md:text-2xl text-[#A07D4E] italic mb-6"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {tagline}
                </h3>
                <p className="text-[#3D3D3D] text-base md:text-lg leading-[1.75] mb-6">
                  {wines[0].description}
                </p>
                <div className="flex flex-col gap-1 mb-6 w-1/3 min-w-[120px]">
                  <div className="h-px bg-[#425a4d]/60" />
                  <div className="h-px bg-[#425a4d]/40" />
                </div>
                {wines.map((wine, i) => (
                  <div key={i} className={i > 0 ? "mt-6" : ""}>
                    <h4
                      className="text-lg md:text-xl font-semibold text-[#425a4d]"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {wine.name}
                    </h4>
                    <p className="text-[#3D3D3D] text-sm md:text-base mt-2 leading-relaxed">
                      {wine.description}
                    </p>
                  </div>
                ))}
              </>
            )}
          </motion.div>
        </div>

        {/* Winemaker - light beige box, circular image, name + quote + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-20 md:mt-24 rounded-2xl overflow-hidden bg-[#F5F2ED] border border-[#E8E4DC]/50"
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
              <h3
                className="text-2xl md:text-3xl text-[#2A2A2A] font-semibold"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {winemaker.name}
              </h3>
              <blockquote
                className="mt-6 text-base md:text-lg text-[#3D3D3D] italic leading-relaxed max-w-xl"
                style={{ fontFamily: "var(--font-script)" }}
              >
                &ldquo;{winemaker.quote}&rdquo;
              </blockquote>
              <button
                type="button"
                onClick={() => setShowQaModal(true)}
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-[#425a4d] text-white text-sm font-medium uppercase tracking-wider hover:bg-[#2D4636] transition-colors rounded-md w-fit"
              >
                READ FULL Q&A
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      </>
      )}

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
