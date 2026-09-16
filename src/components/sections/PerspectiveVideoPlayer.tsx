"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const JW_IFRAME_SRC = "https://cdn.jwplayer.com/players/mokhLqg0-9SK0pNl2.html";
const VIDEO_POSTER = "/images/Duckhorn-Video-Key.jpg";

export function PerspectiveVideoPlayer() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [started, setStarted] = useState(false);

  const handlePlay = () => {
    setStarted(true);
    // JW hosted iframe listens for a "play" postMessage
    iframeRef.current?.contentWindow?.postMessage("play", "*");
  };

  return (
    <div className="w-full max-w-5xl relative aspect-video overflow-hidden rounded-sm bg-black">
      <iframe
        ref={iframeRef}
        src={JW_IFRAME_SRC}
        title="The Pinnacle of American Fine Wine"
        className="absolute top-0 left-0 w-full h-full"
        frameBorder="0"
        scrolling="auto"
        allowFullScreen
        allow="autoplay; fullscreen; picture-in-picture"
      />

      {!started && (
        <button
          type="button"
          onClick={handlePlay}
          className="absolute inset-0 z-10 group cursor-pointer"
          aria-label="Play video: The Pinnacle of American Fine Wine"
        >
          <Image
            src={VIDEO_POSTER}
            alt="50 Years of the Duckhorn Collection — Wine Spectator"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1024px"
          />
          <span className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition-colors duration-300" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full border border-white/70 bg-black/35 backdrop-blur-sm shadow-lg transition-transform duration-300 group-hover:scale-105">
              <svg
                viewBox="0 0 24 24"
                className="h-7 w-7 md:h-8 md:w-8 text-white ml-1"
                fill="currentColor"
                aria-hidden
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
