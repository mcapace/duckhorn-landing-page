# Meet the Makers video

The Meet the Makers section uses **JW Player** for video. The video is hosted on JW’s CDN, not in this repo or on Vercel.

To change the video, update the JW player script URL and media ID in `src/components/sections/MeetTheMakersSection.tsx`:

- `JW_PLAYER_SCRIPT` — from your JW Player dashboard (embed code)
- `JW_MEDIA_ID` — your media/video ID in JW

When the video doesn’t load, the section shows a fallback image. Add your hero image at **`public/images/meet-the-makers-hero.jpg`** so the box doesn’t appear black.
