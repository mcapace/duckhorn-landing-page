# Meet the Makers video

The Meet the Makers section uses **JW Player** for video. The video is hosted on JW’s CDN, not in this repo or on Vercel.

**Fix “video player failed to load”:**
- **Error 100011** = license key missing (rare when using the dashboard script URL below).
- **Error 100012** = invalid key. Do **not** set `NEXT_PUBLIC_JW_LICENSE_KEY` with an API key. The script URL from Players → embed already includes the license; the code does not pass a key so the script’s license is used.

Use the **embed script URL** from JW dashboard **Players** → your player → embed (e.g. `https://cdn.jwplayer.com/players/XXXXX-YYYYY.js`). Update `JW_PLAYER_SCRIPT` and `JW_MEDIA_ID` in `MeetTheMakersSection.tsx` to match.

When the video doesn’t load, the section shows a fallback image. Add your hero image at **`public/images/meet-the-makers-hero.jpg`** so the box doesn’t appear black.
