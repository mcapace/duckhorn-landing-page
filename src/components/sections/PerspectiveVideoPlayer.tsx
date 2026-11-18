"use client";

/*
 * Plain HTML5 video from JW Player's CDN. The JW Player embed sent analytics
 * pings to JW Player on page load, before any consent and even with GPC on;
 * the CDN file and poster carry no tracking.
 */
const JW_MEDIA_ID = "6wVhL6YO";
const VIDEO_SRC = `https://cdn.jwplayer.com/videos/${JW_MEDIA_ID}.mp4`;
const POSTER_SRC = `https://cdn.jwplayer.com/v2/media/${JW_MEDIA_ID}/poster.jpg?width=1280`;

export function PerspectiveVideoPlayer() {
  return (
    <div className="w-full max-w-5xl relative aspect-video overflow-hidden rounded-sm bg-black">
      <video
        src={VIDEO_SRC}
        poster={POSTER_SRC}
        title="The Pinnacle of American Fine Wine"
        className="absolute top-0 left-0 w-full h-full object-contain"
        controls
        playsInline
        preload="none"
      />
    </div>
  );
}
