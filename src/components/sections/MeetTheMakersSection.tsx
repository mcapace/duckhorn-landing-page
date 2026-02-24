"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { winemakers, robSorensonData } from "@/lib/data";

// Self-hosted winemaker video (in public folder — no JW license needed)
const MEET_THE_MAKERS_VIDEO_SRC = "/images/bottles/WS%20TDC-Winemaker%20Video.mp4";
const THE_COLLECTION_VIDEO_SRC = "/images/bottles/WS%20Bottle%20Pan.mp4";
const OVERLAY_HIDE_LAST_SECONDS = 7;

// Five estates bottle cards (order matches mock); images in public/images/bottles new
// URL-encode space (%20) and parentheses (%28 %29) so the path resolves correctly
const ESTATE_BOTTLES = [
  { id: "duckhorn", name: "Duckhorn", image: "/images/bottles%20new/Duckhorn-Bottle-Edit%20%281%29.jpg" },
  { id: "kosta-browne", name: "Kosta Browne", image: "/images/bottles%20new/KostaBrowne-Bottle-Edit%20%281%29.jpg" },
  { id: "goldeneye", name: "Goldeneye", image: "/images/bottles%20new/Goldeneye-Bottle-Edit%20%281%29.jpg" },
  { id: "calera", name: "Calera", image: "/images/bottles%20new/Calera-Bottle-Edit%20%281%29.jpg" },
  { id: "sonoma-cutrer", name: "Sonoma-Cutrer", image: "/images/bottles%20new/SonomaCutrer-Bottle-Edit%20%281%29.jpg" },
] as const;

export const MeetTheMakersSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const makersVideoRef = useRef<HTMLVideoElement>(null);
  const collectionVideoRef = useRef<HTMLVideoElement>(null);
  const [showMakersOverlay, setShowMakersOverlay] = useState(true);
  const [showCollectionOverlay, setShowCollectionOverlay] = useState(true);

  useEffect(() => {
    const video = makersVideoRef.current;
    if (!video) return;
    const onTimeUpdate = () => {
      const { currentTime, duration } = video;
      if (!Number.isFinite(duration) || duration <= 0) return;
      setShowMakersOverlay(currentTime < duration - OVERLAY_HIDE_LAST_SECONDS);
    };
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("loadedmetadata", onTimeUpdate);
    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("loadedmetadata", onTimeUpdate);
    };
  }, []);

  useEffect(() => {
    const video = collectionVideoRef.current;
    if (!video) return;
    const onTimeUpdate = () => {
      const { currentTime, duration } = video;
      if (!Number.isFinite(duration) || duration <= 0) return;
      setShowCollectionOverlay(currentTime < duration - OVERLAY_HIDE_LAST_SECONDS);
    };
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("loadedmetadata", onTimeUpdate);
    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("loadedmetadata", onTimeUpdate);
    };
  }, []);

  return (
    <section id="meet-the-makers" className="py-20 md:py-28 bg-white scroll-mt-20">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col items-center"
        >
          {/* Same-size box as original image hero: fixed height, video plays inside. Fallback image when video doesn’t load. */}
          <div ref={containerRef} className="relative w-full max-w-5xl rounded-3xl overflow-hidden border border-[#B8956A] shadow-lg h-[400px] md:h-[500px]">
            {/* Fallback when video doesn’t load — add /images/meet-the-makers-hero.jpg for same look as before */}
            <div className="absolute inset-0 z-0 bg-black">
              <video
                ref={makersVideoRef}
                src={MEET_THE_MAKERS_VIDEO_SRC}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                aria-hidden
              />
            </div>
            {/* Fallback image if video fails to load */}
            <div className="absolute inset-0 z-[5]">
              <Image
                src="/images/meet-the-makers-hero.jpg"
                alt=""
                fill
                className="object-cover opacity-0"
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority={false}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
            <div
              className={`absolute inset-0 z-20 pointer-events-none transition-opacity duration-700 ${
                showMakersOverlay ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-black/40" />
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
                  <p className="text-[#425a4d] text-xs md:text-sm mt-0.5">
                    {maker.winery}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* THE COLLECTION video box — same style as Meet the Makers */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="mt-12 md:mt-20 w-full max-w-5xl"
          >
            <div className="relative w-full rounded-3xl overflow-hidden border border-[#B8956A] shadow-lg h-[400px] md:h-[500px]">
              <div className="absolute inset-0 z-0 bg-black">
                <video
                  ref={collectionVideoRef}
                  src={THE_COLLECTION_VIDEO_SRC}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                  aria-hidden
                />
              </div>
              <div
                className={`absolute inset-0 z-20 pointer-events-none transition-opacity duration-700 ${
                  showCollectionOverlay ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-black/40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                  <h2
                    className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tight"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    THE COLLECTION
                  </h2>
                  <div className="w-24 h-px bg-[#B8956A] mt-4" aria-hidden />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tagline below The Collection — same spacing as text under Meet the Makers (mt-6) */}
          <div className="mt-6 w-full max-w-5xl text-center">
            <p
              className="text-[#2A2A2A] italic text-lg md:text-xl"
              style={{ fontFamily: "var(--font-script)" }}
            >
              Five Estates. One pursuit of excellence.
            </p>
          </div>

          {/* Five estate bottle cards — same width as video box above (max-w-5xl) */}
          <div className="mt-12 md:mt-16 w-full max-w-5xl flex flex-wrap justify-between gap-4 sm:gap-6">
            {ESTATE_BOTTLES.map((estate, index) => (
              <motion.div
                key={estate.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="flex flex-col items-center flex-1 min-w-0"
                style={{ minWidth: "140px", maxWidth: "220px" }}
              >
                <Link
                  href={`/wineries/${estate.id}`}
                  className="group flex flex-col items-center w-full"
                >
                  <div className="relative w-full h-[340px] sm:h-[400px] rounded-2xl overflow-hidden bg-[#E8E4DC] shadow-md group-hover:shadow-lg transition-shadow">
                    <Image
                      src={estate.image}
                      alt={estate.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 140px, 220px"
                    />
                    <span
                      className="absolute bottom-0 left-0 right-0 py-3 text-center text-[#B8956A] font-medium text-sm tracking-wide group-hover:underline bg-black/70 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      EXPLORE →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Line + Rob Sorenson vineyard quality block — centered like example */}
          <div className="mt-16 md:mt-20 w-full max-w-5xl border-t border-[#B8956A] pt-10 md:pt-12 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center gap-8 md:gap-10 max-w-3xl"
            >
              <div className="flex-shrink-0">
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden ring-2 ring-[#E8E4DC]">
                  <Image
                    src={robSorensonData.image}
                    alt={robSorensonData.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 160px, 224px"
                  />
                </div>
              </div>
              <div className="flex-1 min-w-0 text-left max-w-xl mx-auto sm:mx-0">
                <h3
                  className="text-2xl md:text-3xl text-[#2A2A2A] italic"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  The Importance of Vineyard Quality
                </h3>
                <p className="mt-4 text-[#3D3D3D] text-base md:text-lg leading-relaxed">
                  Great wine starts in the vineyard. Slope and sun exposure, soil composition, and even the clones planted shape every decision in the cellar—and define the character in the glass. Guided by Rob Sorenson, The Duckhorn Collection stewards exceptional sites with intention and care.
                </p>
                <Link
                  href="/vineyard-stewardship"
                  className="inline-flex items-center gap-2 mt-6 text-[#B8956A] text-sm font-medium uppercase tracking-wider hover:underline"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  READ THE FULL STORY →
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
