# Meet the Makers video

The Meet the Makers section uses a **self-hosted HTML5 video** so it works without any external player or license key.

**Current video:** `public/images/bottles/WS TDC-Winemaker Video.mp4`  
The section references it at `/images/bottles/WS%20TDC-Winemaker%20Video.mp4`. To use a different file, update `MEET_THE_MAKERS_VIDEO_SRC` in `src/components/sections/MeetTheMakersSection.tsx`.

**Optional fallback:** If the video fails to load, you can add a static image at `public/images/meet-the-makers-hero.jpg`; the component will hide it when the video plays.
