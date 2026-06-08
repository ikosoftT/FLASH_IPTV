# Image Slots

Place future brand and website images in this folder.

Note: the website now uses remote free-source style images by default for main visuals. This folder is still useful when you want to override those remote images with your own local assets.

Current included files:

- `logo.svg` - default editable Flash 4K IPTV wordmark
- `logo-mark.svg` - default editable flash/4K mark

Homepage cinematic image slots:

- `hero-family-movie-night.webp|jpg|jpeg|png|svg` - main hero background. Use a family or friends watching a large TV from behind in a dark living room or home cinema setting.
- `movies-series.webp|jpg|jpeg|png|svg` - movies and series story visual.
- `live-sports-tv.webp|jpg|jpeg|png|svg` - generic live sports or match-day TV visual.
- `devices-lineup.webp|jpg|jpeg|png|svg` - device lineup visual for Smart TV, Fire Stick, Android TV, phone, tablet, MAG, and PC.
- `final-movie-night.webp|jpg|jpeg|png|svg` - final CTA background, ideally another safe movie-night or living-room TV image.

The site tries local files first, in this order:

```txt
.webp -> .jpg -> .jpeg -> .png -> .svg
```

If none of those local files exist, the homepage falls back to free-source remote imagery from allowed providers such as Unsplash.

Recommended search terms for the hero and CTA images:

- family watching tv dark living room
- people watching movie on TV
- home cinema family couch
- movie night living room TV glow
- friends watching football on TV from behind
- family watching streaming service living room

Recommended sources:

- Unsplash
- Pexels
- Pixabay
- Licensed AI-generated image

Do not use images showing Netflix UI, Disney UI, football broadcast logos, copyrighted modern movie posters, player faces, celebrity faces, official channel logos, or protected brand interfaces.

Poster carousel slots:

- `posters/metropolis.webp|jpg|jpeg|png|svg`
- `posters/the-general.webp|jpg|jpeg|png|svg`
- `posters/plan-9.webp|jpg|jpeg|png|svg`
- `posters/the-kid.webp|jpg|jpeg|png|svg`
- `posters/count-dracula.webp|jpg|jpeg|png|svg`
- `posters/action-night.webp|jpg|jpeg|png|svg`
- `posters/family-cinema.webp|jpg|jpeg|png|svg`
- `posters/sports-live.webp|jpg|jpeg|png|svg`
- `posters/weekend-series.webp|jpg|jpeg|png|svg`
- `posters/documentary-plus.webp|jpg|jpeg|png|svg`
- `posters/4k-movies.webp|jpg|jpeg|png|svg`
- `posters/international-tv.webp|jpg|jpeg|png|svg`

The first carousel items use public-domain Wikimedia Commons artwork as remote fallbacks. Owner-provided local files in `public/imgs/posters/` will override those.

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
- `hero-family-movie-night.webp/jpg/jpeg/png/svg` - cinematic homepage hero image
- `movies-series.webp/jpg/jpeg/png/svg` - movies and series homepage section
- `live-sports-tv.webp/jpg/jpeg/png/svg` - live sports homepage section
- `devices-lineup.webp/jpg/jpeg/png/svg` - device lineup visual used by the site
- `final-movie-night.webp/jpg/jpeg/png/svg` - cinematic final CTA image
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
