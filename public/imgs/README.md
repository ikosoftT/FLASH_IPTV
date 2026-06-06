# Image Slots

Place future brand and website images in this folder.

Note: the website now uses remote free-source style images by default for main visuals. This folder is still useful when you want to override those remote images with your own local assets.

Current included files:

- `logo.svg` - default editable Flash 4K IPTV wordmark
- `logo-mark.svg` - default editable flash/4K mark

Format rule for normal website images:

Most visual slots try these extensions automatically:

```txt
.webp -> .jpg -> .jpeg -> .png -> .svg
```

So `hero-stadium.webp`, `hero-stadium.jpg`, `hero-stadium.png`, etc. all work.

Remote image hosts currently allowed in `next.config.ts`:

- `images.unsplash.com`
- `images.pexels.com`
- `cdn.pixabay.com`

Recommended files to add next:

- `logo.svg` or `logo.png` - main Flash 4K IPTV logo
- `logo-mark.svg` or `logo-mark.png` - compact navbar mark
- `hero-stadium.webp` - optional hero background image
- `hero-bg.webp` or `stadium-bg.webp` - aliases for hero background
- `hero-tv-dashboard.webp` - optional hero dashboard image
- `hero-dashboard.webp` or `dashboard.webp` - aliases for hero dashboard
- `world-cup-sports-bg.webp` - optional sports section background
- `sports-bg.webp` or `match-bg.webp` - aliases for sports section background
- `hero-dashboard.webp` - optional streaming dashboard mockup
- `channels.webp` - channel/category visual
- `channels-sports.webp` - sports/football category visual
- `channels-movies.webp` - movie category visual
- `channels-series.webp` - series category visual
- `channels-news.webp` - news category visual
- `channels-kids.webp`
- `channels-entertainment.webp`
- `channels-international.webp`
- `channels-24-7.webp` or `channels-247.webp`
- `channels-documentaries.webp`
- `channels-music.webp`
- `channels-lifestyle.webp`
- `devices.webp` - device lineup visual
- `devices-lineup.webp` - device lineup visual used by the site
- `support-setup.webp` - support/setup visual used by the site
- `support.webp` or `setup.webp` - aliases for support image
- `blog-smart-tv.webp`
- `blog-firestick.webp`
- `blog-android-tv.webp`
- `blog-buffering.webp`
- `blog-4k-speed.webp` or `blog-speed.webp`
- `blog-epg.webp`
- `blog-not-working.webp`
- `blog-ios.webp` or `blog-iphone-ipad.webp`
- `blog-windows-mac.webp` or `blog-desktop.webp`
- `blog-plans.webp`
- `blog-big-match.webp` or `blog-sports.webp`
- `blog-device-comparison.webp` or `blog-devices.webp`

Optional owner-provided logo files:

- `logos/bein-sports.svg/png/jpg/jpeg/webp`
- `logos/netflix.svg/png/jpg/jpeg/webp`
- `logos/hbo.svg/png/jpg/jpeg/webp`
- `logos/espn.svg/png/jpg/jpeg/webp`
- `logos/sky-sports.svg/png/jpg/jpeg/webp`
- `logos/dazn.svg/png/jpg/jpeg/webp`
- `logos/disney-plus.svg/png/jpg/jpeg/webp`
- `logos/prime-video.svg/png/jpg/jpeg/webp`
- `logos/tnt-sports.svg/png/jpg/jpeg/webp`
- `logos/canal-plus.svg/png/jpg/jpeg/webp`

Only add third-party logo files if the site owner has the rights or authorization to display them. The default website uses styled text pills instead of unauthorized official logos.

Most website image slots also accept `.webp`, `.jpg`, `.jpeg`, `.png`, or `.svg`. The site tries common extensions automatically and falls back to CSS visuals if an image is missing.

Keep images optimized. Prefer `.webp` for photos/mockups and `.svg` for logos.
