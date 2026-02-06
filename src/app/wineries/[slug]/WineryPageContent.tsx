"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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

  return (
    <section className="scroll-mt-20 min-h-screen bg-white">
      {/* Back link */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-28 pb-4">
        <Link
          href="/#featured-wines"
          className="inline-flex items-center gap-2 text-sm text-[#3D5636] hover:text-[#B8956A] transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Featured Wines
        </Link>
      </div>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-[50vh] min-h-[380px] md:min-h-[450px] overflow-hidden"
      >
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-10 md:p-14 pb-12 md:pb-16">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white drop-shadow-lg"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {name}
            </h1>
            <p
              className="mt-3 text-lg md:text-xl text-white/95 italic"
              style={{ fontFamily: "var(--font-script)" }}
            >
              {tagline}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base md:text-lg text-[#3D3D3D] leading-relaxed max-w-3xl mb-20"
        >
          {heroDescription}
        </motion.p>

        {/* Bottle + Winemaker + Tasting Notes */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="overflow-hidden shadow-[0_4px_40px_-8px_rgba(0,0,0,0.08)] rounded-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white">
            {/* Bottle */}
            <div className="flex flex-col items-center justify-center p-14 md:p-20">
              <div className="relative w-[240px] h-[320px] md:w-[300px] md:h-[400px]">
                <Image
                  src={bottleImage}
                  alt={name}
                  fill
                  className="object-contain object-center drop-shadow-2xl"
                  sizes="300px"
                />
              </div>
              {/* Tasting notes */}
              <div className="mt-12 w-full max-w-sm">
                <h3 className="text-[11px] uppercase tracking-[0.3em] text-[#B8956A] mb-5" style={{ fontFamily: "var(--font-serif)" }}>
                  Tasting Notes
                </h3>
                <ul className="space-y-5">
                  {wines.map((wine, i) => (
                    <li key={i} className="border-l-2 border-[#E8E4DC] pl-4">
                      <span className="font-medium text-[#2A2A2A] text-sm">{wine.name}</span>
                      <p className="text-[#3D3D3D]/90 text-sm mt-1 leading-relaxed">{wine.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Winemaker */}
            <div className="flex flex-col items-center justify-center p-14 md:p-20 border-t lg:border-t-0 lg:border-l border-[#E8E4DC]">
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden ring-2 ring-[#E8E4DC]">
                <Image
                  src={winemaker.image}
                  alt={winemaker.name}
                  fill
                  className="object-cover"
                  sizes="224px"
                />
              </div>
              <h3 className="mt-6 text-xl text-[#2A2A2A] font-medium" style={{ fontFamily: "var(--font-serif)" }}>
                {winemaker.name}
              </h3>
              <p className="text-[#3D5636] text-sm mt-1">{winemaker.winery}</p>
              <p className="text-[#A07D4E] text-xs mt-0.5 uppercase tracking-wider">{winemaker.title}</p>
              <blockquote className="mt-6 text-base text-[#3D3D3D] italic leading-relaxed text-center max-w-md" style={{ fontFamily: "var(--font-script)" }}>
                &ldquo;{winemaker.quote}&rdquo;
              </blockquote>
              <Link
                href="/#meet-the-makers"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 border border-[#B8956A] text-[#B8956A] text-sm font-medium uppercase tracking-wider hover:bg-[#B8956A] hover:text-white transition-colors"
              >
                Read Full Q&A
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
