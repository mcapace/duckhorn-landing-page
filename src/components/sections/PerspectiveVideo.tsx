"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";

const JW_SCRIPT = "https://cdn.jwplayer.com/players/mokhLqg0-9SK0pNl2.js";
const JW_PLAYER_ID = "botr_mokhLqg0_9SK0pNl2_div";

type JWPlayerInstance = {
  play: () => void;
  on: (event: string, callback: () => void) => void;
};

declare global {
  interface Window {
    jwplayer?: (id?: string) => JWPlayerInstance;
  }
}

export function PerspectiveVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasPlayedRef = useRef(false);
  const playerReadyRef = useRef(false);
  const inViewRef = useRef(false);

  const tryPlay = () => {
    if (hasPlayedRef.current || !playerReadyRef.current || !inViewRef.current) return;
    const player = window.jwplayer?.(JW_PLAYER_ID);
    if (!player) return;
    hasPlayedRef.current = true;
    player.play();
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            inViewRef.current = true;
            tryPlay();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const handleScriptLoad = () => {
    const player = window.jwplayer?.(JW_PLAYER_ID);
    if (!player) return;
    player.on("ready", () => {
      playerReadyRef.current = true;
      tryPlay();
    });
  };

  return (
    <>
      <div
        ref={containerRef}
        className="w-full max-w-5xl relative aspect-video overflow-hidden rounded-sm"
      >
        <div id={JW_PLAYER_ID} className="absolute inset-0" />
      </div>
      <Script src={JW_SCRIPT} strategy="lazyOnload" onLoad={handleScriptLoad} />
    </>
  );
}
