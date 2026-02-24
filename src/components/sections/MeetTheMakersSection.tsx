"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { winemakers } from "@/lib/data";

// JW Player: video hosted on JW, not on Vercel. Replace with your player script + media ID from dashboard.
const JW_PLAYER_SCRIPT = "https://cdn.jwplayer.com/players/DMQTriWg-O0V5rBgo.js";
const JW_MEDIA_ID = "DMQTriWg";
const PLAYER_DIV_ID = "meet-the-makers-jw-player";

declare global {
  interface Window {
    jwplayer?: (id: string) => { setup: (config: Record<string, unknown>) => void };
  }
}

export const MeetTheMakersSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scriptReady, setScriptReady] = useState(false);

  useEffect(() => {
    if (!scriptReady || typeof window === "undefined" || !window.jwplayer) return;
    const el = document.getElementById(PLAYER_DIV_ID);
    if (!el) return;
    // Defer setup so the container is in the DOM and laid out
    const t = setTimeout(() => {
      try {
        window.jwplayer?.(PLAYER_DIV_ID).setup({
          playlist: `https://cdn.jwplayer.com/v2/media/${JW_MEDIA_ID}`,
          autostart: true,
          mute: true,
          repeat: true,
          controls: false,
          displaytitle: false,
          displaydescription: false,
        });
      } catch (_) {
        // Player may already be setup or container missing
      }
    }, 100);
    return () => clearTimeout(t);
  }, [scriptReady]);

  return (
    <section id="meet-the-makers" className="py-20 md:py-28 bg-white scroll-mt-20">
      <Script src={JW_PLAYER_SCRIPT} strategy="afterInteractive" onLoad={() => setScriptReady(true)} />
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
            <div className="absolute inset-0 bg-black">
              <Image
                src="/images/meet-the-makers-hero.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority={false}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
            <div
              id={PLAYER_DIV_ID}
              className="absolute inset-0 w-full h-full [&_iframe]:!w-full [&_iframe]:!h-full"
            />
            <div className="absolute inset-0 bg-black/30 pointer-events-none" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none">
              <h2
                className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tight"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                MEET THE MAKERS
              </h2>
              <div className="w-24 h-px bg-[#B8956A] mt-4" aria-hidden />
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
