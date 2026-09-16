"use client";

const JW_IFRAME_SRC = "https://cdn.jwplayer.com/players/6wVhL6YO-9SK0pNl2.html";

export function PerspectiveVideoPlayer() {
  return (
    <div className="w-full max-w-5xl relative aspect-video overflow-hidden rounded-sm bg-black">
      <iframe
        src={JW_IFRAME_SRC}
        title="The Pinnacle of American Fine Wine"
        className="absolute top-0 left-0 w-full h-full"
        frameBorder="0"
        scrolling="auto"
        allowFullScreen
        allow="autoplay; fullscreen; picture-in-picture"
      />
    </div>
  );
}
