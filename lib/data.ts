import {
  BadgeCheck,
  BookOpen,
  CalendarDays,
  Clapperboard,
  Clock,
  Compass,
  Cpu,
  Film,
  Flame,
  Gauge,
  Headphones,
  LayoutGrid,
  LifeBuoy,
  Lock,
  MessageCircle,
  Monitor,
  MonitorSmartphone,
  Music,
  Newspaper,
  PlayCircle,
  RadioTower,
  ShieldCheck,
  Sparkles,
  Star,
  TabletSmartphone,
  Trophy,
  Tv,
  Wifi,
  Wrench,
  Zap
} from "lucide-react";

const visualSources = (...basePaths: string[]) =>
  basePaths.flatMap((basePath) => [
    `${basePath}.webp`,
    `${basePath}.jpg`,
    `${basePath}.jpeg`,
    `${basePath}.png`,
    `${basePath}.svg`
  ]);

const logoSources = (...basePaths: string[]) =>
  basePaths.flatMap((basePath) => [
    `${basePath}.svg`,
    `${basePath}.png`,
    `${basePath}.jpg`,
    `${basePath}.jpeg`,
    `${basePath}.webp`
  ]);

const remoteImages = {
  heroStadium:
    "https://images.unsplash.com/photo-1546643122-72107a618ac2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  heroDashboard:
    "https://images.unsplash.com/photo-1649731929606-cb8a84d7006e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  sportsBg:
    "https://images.unsplash.com/photo-1608154119029-53f3c6ad12e4?auto=format&fit=crop&w=1800&q=80",
  devices:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
  support:
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
  channelsSports:
    "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1200&q=80",
  channelsMovies:
    "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80",
  channelsSeries:
    "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=1200&q=80",
  channelsNews:
    "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80",
  channelsKids:
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80",
  channelsEntertainment:
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
  channelsInternational:
    "https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=1200&q=80",
  channelsDocumentaries:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  channelsMusic:
    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80",
  blogSmartTv:
    "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=1200&q=80",
  blogFirestick:
    "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
  blogAndroidTv:
    "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=1200&q=80",
  blogBuffering:
    "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
  blogSpeed:
    "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
  blogEpg:
    "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1200&q=80",
  blogIos:
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80",
  blogDesktop:
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  blogPlans:
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
  blogSports:
    "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1200&q=80",
  homeMovieNight:
    "https://images.unsplash.com/photo-1756729924301-4e55f111e986?auto=format&fit=crop&w=1800&q=80",
  homeFinalMovieNight:
    "https://images.unsplash.com/photo-1756729924301-4e55f111e986?auto=format&fit=crop&w=1600&q=78",
  homeCinemaSeats:
    "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1800&q=80",
  homeTvRoom:
    "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=1800&q=80",
  homeSportsNight:
    "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1800&q=80",
  premiumLivingRoom:
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=80",
  streamingSetup:
    "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1800&q=80",
  worldCupStadium:
    "https://images.unsplash.com/photo-1560272564-c83b4b6f90a0?auto=format&fit=crop&w=1800&q=80",
  footballMatch:
    "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1800&q=80"
};

const wikimediaFile = (fileName: string, width = 520) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fileName)}?width=${width}`;

export const brand = {
  name: "Flash 4K IPTV",
  shortName: "Flash 4K",
  tagline: "Premium IP Television. Elevated.",
  description:
    "Premium IPTV delivering 26,000+ live channels, 100,000+ movies & series in crystal-clear 4K. Trusted by thousands for reliable sports, entertainment, and 24/7 support across every device.",
  primaryCta: "Get Started",
  secondaryCta: "View Plans",
  disclaimer:
    "Flash 4K IPTV is an independent streaming service platform. Channel availability and events may vary by region and package. We are not affiliated with FIFA, sports leagues, broadcasters, or third-party channel owners."
};

export const assets = {
  logo: logoSources("/imgs/logo", "/imgs/logos/logo"),
  logoMark: logoSources("/imgs/logo-mark", "/imgs/mark", "/imgs/logos/logo-mark"),
  heroStadium: [
    remoteImages.heroStadium,
    ...visualSources("/imgs/world-cup-sports-bg", "/imgs/hero-stadium", "/imgs/hero-bg", "/imgs/stadium-bg")
  ],
  heroDashboard: [remoteImages.heroDashboard, ...visualSources("/imgs/hero-tv-dashboard", "/imgs/hero-dashboard", "/imgs/dashboard")],
  worldCupSportsBg: [remoteImages.sportsBg, ...visualSources("/imgs/world-cup-sports-bg", "/imgs/sports-bg", "/imgs/match-bg")],
  devicesLineup: [remoteImages.devices, ...visualSources("/imgs/devices-lineup", "/imgs/devices")],
  supportSetup: [remoteImages.support, ...visualSources("/imgs/support-setup", "/imgs/support", "/imgs/setup")]
};

export const homeImages = {
  heroBackground: ["/imgs/hero-family-movie-night-optimized.webp", "/imgs/hero-family-movie-night.jpg", remoteImages.homeMovieNight],
  heroSlides: [
    ["/imgs/hero-family-movie-night-optimized.webp", "/imgs/hero-family-movie-night.jpg", remoteImages.homeMovieNight],
    [remoteImages.homeCinemaSeats],
    [remoteImages.homeTvRoom],
    [remoteImages.homeSportsNight]
  ],
  moviesSeries: [remoteImages.channelsMovies],
  liveSports: [remoteImages.channelsSports],
  devicesLineup: [remoteImages.devices],
  finalCtaBackground: [remoteImages.homeFinalMovieNight],
  premiumLiving: [remoteImages.premiumLivingRoom],
  streamingSetup: [remoteImages.streamingSetup],
  worldCup: [remoteImages.worldCupStadium],
  footballMatch: [remoteImages.footballMatch]
};

export const navLinks = [
  { label: "Channels", href: "/channels" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Support", href: "/support" }
];

export const contact = {
  email: "support@flash4kiptv.com",
  whatsappNumber: "+447828714977",
  whatsappBaseUrl: "https://wa.me",
  defaultWhatsAppMessage:
    "Hello Flash 4K IPTV, I want help choosing an IPTV package. Please send me the available plans.",
  trialWhatsAppMessage:
    "Hello Flash 4K IPTV, I want to ask about the free trial.\n\nPlease help me test the service.",
  liveChat: "/support#contact",
  checkout: "/pricing#plans",
  responseTime: "Average WhatsApp response within 2 minutes",
  supportHours: "24/7 Flash 4K IPTV Support"
};

export const announcement = {
  label:
    "World Cup 2026 Ready - Stream live sports, movies, series, and 26,000+ channels in HD / FHD / 4K.",
  cta: "View Plans",
  href: "/pricing#plans"
};

export const heroStats = [
  { label: "26,000+ Live Channels", icon: Tv },
  { label: "100,000+ VOD Titles", icon: Film },
  { label: "4K / FHD / HD Quality", icon: Sparkles },
  { label: "7-Day Money-Back Guarantee", icon: ShieldCheck }
];

export const trustItems = [
  { label: "24/7 WhatsApp Support", icon: MessageCircle },
  { label: "HD / FHD / 4K", icon: Sparkles },
  { label: "Fast Activation", icon: Zap },
  { label: "All Major Devices", icon: MonitorSmartphone }
];

export const featureHighlights = [
  "26,000+ Live Channels",
  "100,000+ VOD Titles",
  "4K / FHD / HD Quality",
  "EPG TV Guide Included",
  "All Devices Supported",
  "24/7 Flash 4K IPTV Support",
  "7-Day Money-Back Guarantee"
];

export const features = [
  {
    title: "World Cup 2026 ready streaming",
    description:
      "Built for big sports moments, international football nights, live events, and everyday entertainment across every screen.",
    icon: Trophy
  },
  {
    title: "Anti-freeze stable servers",
    description:
      "Premium infrastructure designed for stable streaming during live football, major events, and peak viewing hours.",
    icon: RadioTower
  },
  {
    title: "4K / FHD / HD quality",
    description:
      "Watch live TV, sports, movies, and series in HD, FHD, and 4K quality where available and supported by your device.",
    icon: Sparkles
  },
  {
    title: "Fast WhatsApp activation",
    description:
      "Message support, choose your package, receive payment instructions, and get activation details without complicated checkout pages.",
    icon: MessageCircle
  },
  {
    title: "EPG TV guide included",
    description:
      "Browse live channels with electronic program guide support on compatible IPTV player apps.",
    icon: LayoutGrid
  },
  {
    title: "Huge VOD library",
    description:
      "Access a large VOD-style library for movies, series, family content, documentaries, and premium entertainment categories.",
    icon: Clapperboard
  },
  {
    title: "Multi-device support",
    description:
      "Use plans for 1, 2, or 3 devices across Smart TV, Fire Stick, Android TV, iPhone, iPad, MAG, Windows, and Mac.",
    icon: MonitorSmartphone
  },
  {
    title: "Before-match support",
    description:
      "Get help with setup, playlist loading, buffering checks, and EPG refresh before important live sports events.",
    icon: Headphones
  },
  {
    title: "Secure setup guidance",
    description:
      "Receive clear account details, player recommendations, and practical steps for a smooth first-device setup.",
    icon: Lock
  }
];

export const channelCategories = [
  { title: "Live Sports", type: "Sports", count: "1,500+", icon: Trophy, gradient: "from-field/45 via-electric/20 to-champagne/25", image: [remoteImages.channelsSports, ...visualSources("/imgs/channels-sports")], description: "Match-day categories for live football, international sports, and major events." },
  { title: "Football", type: "Sports", count: "650+", icon: Flame, gradient: "from-field/55 via-champagne/25 to-electric/20", image: [remoteImages.channelsSports, ...visualSources("/imgs/channels-sports")], description: "Football-focused viewing for big fixtures, previews, and sports nights." },
  { title: "Movies", type: "Movies", count: "18,000+", icon: Clapperboard, gradient: "from-aura/35 via-electric/20 to-champagne/25", image: [remoteImages.channelsMovies, ...visualSources("/imgs/channels-movies")], description: "Premium cinema-style categories with safe VOD organization." },
  { title: "Series", type: "Series", count: "42,000+", icon: PlayCircle, gradient: "from-electric/35 via-aura/20 to-platinum/20", image: [remoteImages.channelsSeries, ...visualSources("/imgs/channels-series")], description: "Series and box-set style categories for everyday entertainment." },
  { title: "News", type: "News", count: "400+", icon: Newspaper, gradient: "from-platinum/25 via-electric/20 to-field/25", image: [remoteImages.channelsNews, ...visualSources("/imgs/channels-news")], description: "Regional and international news categories with guide support." },
  { title: "Kids", type: "Kids", count: "350+", icon: Star, gradient: "from-electric/25 via-champagne/20 to-field/20", image: [remoteImages.channelsKids, ...visualSources("/imgs/channels-kids")], description: "Family-friendly categories for cartoons, learning, and kids entertainment." },
  { title: "Entertainment", type: "Entertainment", count: "3,800+", icon: Tv, gradient: "from-champagne/35 via-electric/20 to-aura/25", image: [remoteImages.channelsEntertainment, ...visualSources("/imgs/channels-entertainment")], description: "Live entertainment, lifestyle, variety, and general TV categories." },
  { title: "International", type: "International", count: "4,000+", icon: Compass, gradient: "from-field/35 via-aura/20 to-champagne/25", image: [remoteImages.channelsInternational, ...visualSources("/imgs/channels-international")], description: "International TV categories for global homes and travelers." },
  { title: "24/7 Channels", type: "Entertainment", count: "900+", icon: Clock, gradient: "from-electric/30 via-field/20 to-champagne/20", image: [remoteImages.channelsEntertainment, ...visualSources("/imgs/channels-24-7", "/imgs/channels-247")], description: "Always-on entertainment categories organized for easy browsing." },
  { title: "Premium Cinema", type: "Movies", count: "12,000+", icon: Film, gradient: "from-aura/40 via-champagne/20 to-electric/20", image: [remoteImages.channelsMovies, ...visualSources("/imgs/channels-movies")], description: "Movie-night categories with abstract premium cinema presentation." },
  { title: "Documentaries", type: "Entertainment", count: "700+", icon: BookOpen, gradient: "from-platinum/25 via-field/20 to-aura/20", image: [remoteImages.channelsDocumentaries, ...visualSources("/imgs/channels-documentaries")], description: "Documentary and factual entertainment categories." },
  { title: "Music", type: "Entertainment", count: "300+", icon: Music, gradient: "from-champagne/30 via-aura/25 to-electric/20", image: [remoteImages.channelsMusic, ...visualSources("/imgs/channels-music")], description: "Music, radio-style, and performance categories." },
  { title: "Lifestyle", type: "Entertainment", count: "500+", icon: Sparkles, gradient: "from-field/30 via-electric/20 to-platinum/20", image: [remoteImages.channelsDocumentaries, ...visualSources("/imgs/channels-lifestyle")], description: "Lifestyle, travel, food, and home entertainment categories." }
];

export const popularLineup = [
  { name: "beIN SPORTS", image: logoSources("/imgs/logos/bein-sports"), category: "Sports", disclaimer: "Owner-provided logo slot" },
  { name: "Netflix", image: logoSources("/imgs/logos/netflix"), category: "Movies & Series", disclaimer: "Owner-provided logo slot" },
  { name: "HBO", image: logoSources("/imgs/logos/hbo"), category: "Movies & Series", disclaimer: "Owner-provided logo slot" },
  { name: "ESPN", image: logoSources("/imgs/logos/espn"), category: "Sports", disclaimer: "Owner-provided logo slot" },
  { name: "Sky Sports", image: logoSources("/imgs/logos/sky-sports"), category: "Sports", disclaimer: "Owner-provided logo slot" },
  { name: "DAZN", image: logoSources("/imgs/logos/dazn"), category: "Sports", disclaimer: "Owner-provided logo slot" },
  { name: "Disney+", image: logoSources("/imgs/logos/disney-plus"), category: "Family & Series", disclaimer: "Owner-provided logo slot" },
  { name: "Prime Video", image: logoSources("/imgs/logos/prime-video"), category: "Movies & Series", disclaimer: "Owner-provided logo slot" },
  { name: "TNT Sports", image: logoSources("/imgs/logos/tnt-sports"), category: "Sports", disclaimer: "Owner-provided logo slot" },
  { name: "Canal+", image: logoSources("/imgs/logos/canal-plus"), category: "International", disclaimer: "Owner-provided logo slot" },
];

export const carouselCategories = [
  "Live Sports",
  "Football",
  "Movies",
  "Series",
  "News",
  "Kids",
  "International",
  "Entertainment",
  "Documentaries",
  "24/7 Channels",
  "Premium Cinema",
  "Match Day"
];

export const vodTiles = [
  "Action Night",
  "Family Cinema",
  "Match Preview",
  "Global News",
  "Weekend Series",
  "Premium Sports",
  "Documentary Plus",
  "Kids Zone"
];

export const streamingPosterCards = [
  { title: "Metropolis", category: "Public domain", gradient: "from-live/70 via-aura/36 to-electric/24", image: [...visualSources("/imgs/posters/metropolis"), wikimediaFile("Boris Bilinski - Filmplakat für Metropolis.jpg")] },
  { title: "The General", category: "Public domain", gradient: "from-champagne/62 via-field/30 to-electric/24", image: [...visualSources("/imgs/posters/the-general"), wikimediaFile("The General (1926) - Movie Poster.png")] },
  { title: "Plan 9", category: "Public domain", gradient: "from-field/64 via-electric/28 to-champagne/24", image: [...visualSources("/imgs/posters/plan-9"), wikimediaFile("Plan 9 from Outer Space, poster, gtfy.07034.jpg")] },
  { title: "The Kid", category: "Public domain", gradient: "from-electric/58 via-aura/34 to-live/22", image: [...visualSources("/imgs/posters/the-kid"), wikimediaFile("The Kid (1921) poster.jpg")] },
  { title: "Count Dracula", category: "Public domain", gradient: "from-champagne/66 via-live/24 to-electric/24", image: [...visualSources("/imgs/posters/count-dracula"), wikimediaFile("Count Dracula (1970) US poster.jpg")] },
  { title: "Charade", category: "Public domain", gradient: "from-platinum/38 via-field/30 to-aura/24", image: [...visualSources("/imgs/posters/charade"), wikimediaFile("Charade (1963 poster).jpg")] },
  { title: "Caligari", category: "Public domain", gradient: "from-electric/54 via-platinum/28 to-field/22", image: [...visualSources("/imgs/posters/caligari"), wikimediaFile("CABINETOFDRCALIGARI-poster.jpg")] },
  { title: "Phantom", category: "Public domain", gradient: "from-aura/62 via-champagne/28 to-live/22", image: [...visualSources("/imgs/posters/phantom"), wikimediaFile("The Phantom of the Opera (1925).jpg")] },
  { title: "His Girl Friday", category: "Public domain", gradient: "from-field/68 via-live/26 to-champagne/24", image: [...visualSources("/imgs/posters/his-girl-friday"), wikimediaFile("His Girl Friday (1940 poster) crop.jpg")] },
  { title: "Action Night", category: "Movies", gradient: "from-live/46 via-aura/36 to-platinum/22", image: [...visualSources("/imgs/posters/action-night"), remoteImages.channelsMovies] },
  { title: "Sports Live", category: "Live TV", gradient: "from-electric/60 via-champagne/28 to-aura/26", image: [...visualSources("/imgs/posters/sports-live"), remoteImages.channelsSports] },
  { title: "Family Cinema", category: "Family", gradient: "from-aura/50 via-field/28 to-electric/24", image: [...visualSources("/imgs/posters/family-cinema"), remoteImages.homeMovieNight] }
];

export const devices = [
  { name: "Android", icon: "android" },
  { name: "Android TV", icon: "androidtv" },
  { name: "Google TV", icon: "googletv" },
  { name: "Fire TV / Stick", icon: "firetv" },
  { name: "Apple TV", icon: "appletv" },
  { name: "Samsung TV", icon: "samsung" },
  { name: "LG TV", icon: "lg" },
  { name: "Nvidia Shield", icon: "nvidia" },
  { name: "Chromecast", icon: "chromecast" },
  { name: "Roku", icon: "roku" },
  { name: "MAG Box", icon: "mag" },
  { name: "Smart TVs", icon: "smarttv" },
  { name: "iPhone & iPad", icon: "ios" },
  { name: "Windows / Mac", icon: "desktop" }
];

export const pricingConfig = {
  currency: "USD",
  deviceOptions: [1, 2, 3],
  promoLabel: "World Cup 2026 ready packages",
  checkoutLabel: "Activate via WhatsApp",
  includedFeatures: featureHighlights,
  plansByDevices: {
    1: [
      { months: 3, label: "3 Months", price: 35, savingsLabel: "Save 14%", cta: "Get Started - 3 Months" },
      { months: 6, label: "6 Months", price: 49, savingsLabel: "Save 33%", cta: "Get Started - 6 Months" },
      {
        months: 12,
        label: "12 Months",
        planLabel: "Subscription",
        price: 69,
        regularPrice: 82.8,
        savingsLabel: "BEST VALUE",
        badge: "BEST VALUE",
        bonus: "2 Months Free",
        description: "Pay for 10 months, get 12",
        monthlyEquivalent: "Just $5.75/mo",
        cta: "Get Started - 12 Months"
      }
    ],
    2: [
      { months: 3, label: "3 Months", price: 55, savingsLabel: "Save 20%", cta: "Get Started - 3 Months" },
      { months: 6, label: "6 Months", price: 75, savingsLabel: "Save 46%", cta: "Get Started - 6 Months" },
      {
        months: 12,
        label: "12 Months",
        planLabel: "Subscription",
        price: 115,
        regularPrice: 138,
        savingsLabel: "BEST VALUE",
        badge: "BEST VALUE",
        bonus: "2 Months Free",
        description: "Pay for 10 months, get 12",
        monthlyEquivalent: "Just $9.58/mo",
        cta: "Get Started - 12 Months"
      }
    ],
    3: [
      { months: 3, label: "3 Months", price: 75, savingsLabel: "Save 17%", cta: "Get Started - 3 Months" },
      { months: 6, label: "6 Months", price: 99, savingsLabel: "Save 45%", cta: "Get Started - 6 Months" },
      {
        months: 12,
        label: "12 Months",
        planLabel: "Subscription",
        price: 149,
        regularPrice: 178.8,
        savingsLabel: "BEST VALUE",
        badge: "BEST VALUE",
        bonus: "2 Months Free",
        description: "Pay for 10 months, get 12",
        monthlyEquivalent: "Just $12.42/mo",
        cta: "Get Started - 12 Months"
      }
    ]
  }
} as const;

export const comparison = [
  { feature: "Live sports and match-day setup", basic: false, flash: true },
  { feature: "26,000+ live channel access", basic: false, flash: true },
  { feature: "100,000+ VOD title library", basic: false, flash: true },
  { feature: "EPG TV guide support", basic: true, flash: true },
  { feature: "WhatsApp activation and setup help", basic: false, flash: true },
  { feature: "7-day money-back guarantee", basic: false, flash: true }
];

export const testimonials = [
  {
    quote: "Activation through WhatsApp was quick, and support helped me get my Smart TV ready before the match started.",
    name: "Omar B.",
    role: "Smart TV football viewer"
  },
  {
    quote: "The sports categories are easy to find, and the quality was strong on my Fire Stick during a busy live event.",
    name: "Maya R.",
    role: "Live sports customer"
  },
  {
    quote: "I use one package across multiple devices at home. The setup instructions were clear and beginner-friendly.",
    name: "Daniel K.",
    role: "Multi-device household"
  },
  {
    quote: "Good WhatsApp support, simple activation, and a clean channel guide experience on Android TV.",
    name: "Amelia S.",
    role: "Android TV viewer"
  },
  {
    quote: "The World Cup setup guide helped me get everything ready before the tournament. Smooth streaming throughout.",
    name: "Carlos M.",
    role: "World Cup 2026 viewer"
  },
  {
    quote: "I compared several IPTV providers and Flash 4K had the clearest pricing and fastest support response.",
    name: "Sarah L.",
    role: "First-time IPTV user"
  }
];

export const faqs = [
  {
    question: "How do I activate Flash 4K IPTV?",
    answer:
      "Choose a package, message us on WhatsApp, receive payment instructions, and support will send your activation details with setup guidance."
  },
  {
    question: "Is Flash 4K IPTV ready for World Cup 2026 demand?",
    answer:
      "The service is positioned for major sports demand with match-day setup help, stable streaming focus, and HD/FHD/4K quality where available. Event and channel availability may vary by package and region."
  },
  {
    question: "Which devices are supported?",
    answer:
      "Smart TV (Samsung, LG, Sony), Fire TV Stick, Android TV, Google TV, Apple TV, Nvidia Shield, Chromecast, Roku, MAG Box, iPhone, iPad, Android phones, tablets, Windows PC, and Mac are all supported."
  },
  {
    question: "Does every plan include VOD and EPG?",
    answer:
      "Yes. Every plan includes 26,000+ live channels, 100,000+ VOD titles, EPG guide support on compatible apps, and setup guidance."
  },
  {
    question: "Can I use multiple devices?",
    answer:
      "Yes. Pricing supports 1, 2, or 3 device connections. Select the correct device count before messaging support on WhatsApp."
  },
  {
    question: "Is there a guarantee?",
    answer:
      "Plans include a 7-day money-back guarantee policy. Support will help resolve setup, access, and playback issues quickly during that period."
  },
  {
    question: "What internet speed do I need for 4K streaming?",
    answer:
      "For 4K streaming, we recommend a stable 25 Mbps or higher connection. HD and FHD streams perform well on 10-15 Mbps stable connections."
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes. Message us on WhatsApp to inquire about our free trial options and test the service on your device before committing."
  }
];

export const supportFaqs = [
  ...faqs.slice(0, 5),
  {
    question: "What should I do before a big match?",
    answer:
      "Activate early, test your player app, refresh EPG data, use a stable connection, and contact WhatsApp support before match time if you need help."
  },
  {
    question: "How can I reduce buffering?",
    answer:
      "Use Ethernet when possible, restart your player app, close background apps, refresh the playlist, and test another compatible player if your device is old."
  }
];

type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  coverImage?: string | string[];
  sections: { heading: string; body: string }[];
};

const blogCoverBySlug: Record<string, string[]> = {
  "world-cup-2026-iptv-trends": [
    "https://images.unsplash.com/photo-1772724317390-f433f409825a?auto=format&fit=crop&w=1200&q=80",
    remoteImages.blogSports
  ],
  "prepare-iptv-for-104-world-cup-matches": [
    "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1200&q=80",
    remoteImages.blogSports
  ],
  "best-devices-world-cup-2026-iptv": [
    "https://images.unsplash.com/photo-1721333088960-9ac5d202e010?auto=format&fit=crop&w=1200&q=80",
    remoteImages.devices
  ],
  "4k-hdr-world-cup-streaming-iptv-setup": [
    "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?auto=format&fit=crop&w=1200&q=80",
    remoteImages.blogSpeed
  ],
  "low-latency-iptv-live-football": [
    "https://images.unsplash.com/photo-1645725677294-ed0843b97d5c?auto=format&fit=crop&w=1200&q=80",
    remoteImages.blogBuffering
  ],
  "world-cup-2026-time-zones-iptv-guide": [
    "https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?auto=format&fit=crop&w=1200&q=80",
    remoteImages.channelsInternational
  ],
  "epg-favorites-world-cup-2026-iptv": [
    "https://images.unsplash.com/photo-1767355424333-452a7c1fc4c6?auto=format&fit=crop&w=1200&q=80",
    remoteImages.blogEpg
  ],
  "multi-screen-iptv-world-cup-households": [
    "https://images.unsplash.com/photo-1551612084-0fdf19cb8f72?auto=format&fit=crop&w=1200&q=80",
    remoteImages.blogPlans
  ],
  "avoid-buffering-world-cup-2026": [
    "https://images.unsplash.com/photo-1645725677294-ed0843b97d5c?auto=format&fit=crop&w=1200&q=80",
    remoteImages.blogBuffering
  ],
  "smart-tv-fire-stick-world-cup-iptv": [
    "https://images.unsplash.com/photo-1526775310031-fc50d81ce518?auto=format&fit=crop&w=1200&q=80",
    remoteImages.devices
  ],
  "travel-viewing-world-cup-2026-iptv": [
    "https://images.unsplash.com/photo-1558990222-9ad30a9bdbcb?auto=format&fit=crop&w=1200&q=80",
    remoteImages.blogIos
  ],
  "legal-reliable-world-cup-iptv-checklist": [
    "https://images.unsplash.com/photo-1772724317390-f433f409825a?auto=format&fit=crop&w=1200&q=80",
    remoteImages.blogSports
  ],
  "setup-iptv-on-smart-tv": [
    "https://images.unsplash.com/photo-1721333088960-9ac5d202e010?auto=format&fit=crop&w=1200&q=80",
    remoteImages.blogSmartTv
  ],
  "install-iptv-on-fire-stick": [
    "https://images.unsplash.com/photo-1526775310031-fc50d81ce518?auto=format&fit=crop&w=1200&q=80",
    remoteImages.blogFirestick
  ],
  "setup-iptv-on-android-tv": [
    "https://images.unsplash.com/photo-1626581806767-af029591b2a7?auto=format&fit=crop&w=1200&q=80",
    remoteImages.blogAndroidTv
  ],
  "why-iptv-buffers-and-how-to-fix-it": [
    "https://images.unsplash.com/photo-1645725677294-ed0843b97d5c?auto=format&fit=crop&w=1200&q=80",
    remoteImages.blogBuffering
  ],
  "best-internet-speed-for-4k-iptv-streaming": [
    "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?auto=format&fit=crop&w=1200&q=80",
    remoteImages.blogSpeed
  ],
  "use-epg-tv-guide-with-iptv": [
    "https://images.unsplash.com/photo-1767355424333-452a7c1fc4c6?auto=format&fit=crop&w=1200&q=80",
    remoteImages.blogEpg
  ],
  "iptv-not-working-common-problems-fixes": [
    "https://images.unsplash.com/photo-1645725677294-ed0843b97d5c?auto=format&fit=crop&w=1200&q=80",
    remoteImages.blogBuffering
  ],
  "watch-iptv-on-iphone-and-ipad": [
    "https://images.unsplash.com/photo-1551612084-0fdf19cb8f72?auto=format&fit=crop&w=1200&q=80",
    remoteImages.blogIos
  ],
  "watch-iptv-on-windows-or-mac": [
    "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=1200&q=80",
    remoteImages.blogDesktop
  ],
  "choose-best-iptv-plan-for-devices": [
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    remoteImages.blogPlans
  ],
  "prepare-iptv-before-big-sports-match": [
    "https://images.unsplash.com/photo-1772724317390-f433f409825a?auto=format&fit=crop&w=1200&q=80",
    remoteImages.blogSports
  ],
  "smart-tv-vs-fire-stick-vs-android-box-iptv": [
    "https://images.unsplash.com/photo-1721333088960-9ac5d202e010?auto=format&fit=crop&w=1200&q=80",
    remoteImages.devices
  ]
};

function article(
  slug: string,
  title: string,
  excerpt: string,
  category: string,
  date: string,
  sections: { heading: string; body: string }[],
  readTime = "6 min read"
): BlogPost {
  return {
    slug,
    title,
    excerpt,
    date,
    readTime,
    category,
    author: "Flash 4K IPTV Support",
    coverImage: blogCoverBySlug[slug],
    sections: [
      ...sections,
      {
        heading: "Need help?",
        body:
          "If you get stuck, message Flash 4K IPTV support on WhatsApp with your device name, app name, and the issue you see. Support can guide setup, activation, EPG refresh, and troubleshooting."
      }
    ]
  };
}

export const blogPosts: BlogPost[] = [
  article("world-cup-2026-iptv-trends", "World Cup 2026 IPTV Trends Fans Should Watch", "The biggest football month is pushing fans toward 4K screens, stronger home networks, cleaner EPG guides, and multi-device IPTV planning.", "World Cup 2026", "2026-06-09", [
    { heading: "Why World Cup 2026 changes viewing habits", body: "The FIFA World Cup 2026 runs from June 11 to July 19 with 48 teams, 104 matches, and 16 host cities across Canada, Mexico, and the United States. That larger schedule means more kickoff windows, more household viewing conflicts, and more demand for stable match-day streaming setups." },
    { heading: "4K and premium audio are becoming expected", body: "A major 2026 trend is that football fans are asking for sharper big-screen playback, HDR-ready devices, and cleaner sound. Even when a channel is not available in 4K, a good IPTV setup still benefits from a capable TV, updated player app, and stable bandwidth." },
    { heading: "Low latency matters more for live football", body: "Goal alerts, group chats, and social media can spoil a match if your stream is far behind. Choose a reliable device, use Ethernet where possible, and avoid overloaded Wi-Fi so the stream stays closer to live action." },
    { heading: "EPG and favorites become match-day tools", body: "With a bigger tournament and more live categories to browse, EPG guide data and favorites are not just convenience features. They help you find matches quickly, switch channels calmly, and avoid scrolling through huge lists after kickoff." },
    { heading: "Support before kickoff is part of the trend", body: "Fans are no longer waiting until the first whistle to test access. The smarter habit is to activate early, confirm the player app works, organize sports favorites, and message Flash 4K IPTV support before tournament traffic peaks." }
  ]),
  article("prepare-iptv-for-104-world-cup-matches", "How to Prepare IPTV for All 104 World Cup 2026 Matches", "Use this World Cup 2026 IPTV checklist to get your devices, network, player app, and favorites ready before the tournament starts.", "World Cup 2026", "2026-06-08", [
    { heading: "Start with the tournament scale", body: "World Cup 2026 is larger than previous editions, with 104 matches across more than a month of football. A casual setup might work for one match, but a tournament this big rewards early testing, organized categories, and a stable home network." },
    { heading: "Activate before opening week", body: "Do not wait until June 11 to test your IPTV package. Install your player app, add your Flash 4K IPTV details, load the categories, and make sure live sports, VOD, and EPG sections open correctly." },
    { heading: "Test every main screen", body: "If you plan to watch in the living room, bedroom, phone, or laptop, test each screen before the first match. Device-specific problems are easier to fix when support has time, especially with Smart TVs and older streaming sticks." },
    { heading: "Build a match-day favorites list", body: "Save the sports channels and categories you expect to use most. Favorites reduce stress when matches overlap, when guests ask to switch games, or when you want to move quickly between pre-match coverage and live action." },
    { heading: "Do one final check on match morning", body: "Restart your router and streaming device, refresh playlist and EPG data, and open a live channel at least 30 minutes before kickoff. This gives you a calm buffer if the app needs a refresh or support needs a screenshot." }
  ]),
  article("best-devices-world-cup-2026-iptv", "Best Devices for World Cup 2026 IPTV Viewing", "Compare Smart TV, Fire Stick, Android TV, mobile, and desktop setups for smooth World Cup 2026 streaming at home.", "Devices", "2026-06-07", [
    { heading: "Choose the most stable screen first", body: "The best World Cup IPTV device is the one that stays stable under pressure. A modern Smart TV, Fire Stick, Android TV box, or desktop can all work well if the app is compatible and the network connection is strong." },
    { heading: "Smart TV is simple but can be limited", body: "Smart TVs are convenient because no extra box is needed, but older TV processors can struggle with large IPTV libraries. If your TV app is slow, use a dedicated streaming device for better performance." },
    { heading: "Fire Stick is easy for many households", body: "Fire Stick devices are popular for IPTV because they are portable, affordable, and app-friendly. Keep storage clean, update the device, and consider an Ethernet adapter if Wi-Fi is weak near the TV." },
    { heading: "Android TV boxes offer flexibility", body: "A good Android TV box can handle big playlists, multiple player apps, and external Ethernet more comfortably than many older TVs. Quality varies, so choose hardware with enough memory and reliable updates." },
    { heading: "Mobile and desktop are useful backups", body: "Keep a phone, tablet, Windows laptop, or Mac ready as a backup screen. If the living-room device needs troubleshooting, a second screen can keep you watching while support helps." }
  ]),
  article("4k-hdr-world-cup-streaming-iptv-setup", "4K HDR World Cup Streaming: IPTV Setup Tips", "Prepare your TV, player app, internet connection, and HDMI path for sharper World Cup 2026 football where 4K or HDR streams are available.", "4K Sports", "2026-06-06", [
    { heading: "Start with realistic 4K expectations", body: "Not every channel, app, device, or package will provide 4K for every event. The best approach is to prepare your setup for high-quality playback and then use the best available stream for your channel, region, and device." },
    { heading: "Use a 4K-capable screen and device", body: "A 4K TV alone is not enough. Your streaming stick, Android box, app, HDMI cable, and TV input settings all need to support the quality you want. Update firmware before the tournament instead of during kickoff." },
    { heading: "Give 4K enough bandwidth", body: "For 4K viewing, aim for a stable connection of at least 25 Mbps on the streaming device, with extra room if other people are gaming, downloading, or watching other streams on the same network." },
    { heading: "Ethernet beats weak Wi-Fi", body: "A wired connection can make HD, FHD, and 4K playback feel more reliable because it reduces signal drops and packet loss. If Ethernet is not possible, use strong 5 GHz Wi-Fi close to the router." },
    { heading: "Choose smoothness over labels", body: "If a 4K stream stutters on your device, switch to a stable FHD option rather than forcing a higher label. For live football, smooth motion and reliable audio matter more than chasing a quality badge." }
  ]),
  article("low-latency-iptv-live-football", "Low-Latency IPTV for Live Football: What to Know", "Reduce stream delay, buffering, and goal spoilers with practical low-latency habits for World Cup 2026 match days.", "Low Latency", "2026-06-05", [
    { heading: "Latency is the delay from stadium to screen", body: "Every live stream has some delay, but football fans notice it when phones buzz before the goal appears on TV. Device performance, app buffering, Wi-Fi quality, and stream delivery all affect how close you stay to live." },
    { heading: "Use the fastest stable connection", body: "Ethernet is the easiest latency upgrade for TVs, Android boxes, and desktop setups. If you must use Wi-Fi, keep the device near the router, use 5 GHz when possible, and reduce competing traffic." },
    { heading: "Do not over-buffer your player", body: "Some IPTV apps let you increase buffer size to reduce pauses. That can help unstable connections, but it may add delay. For live football, start with default settings and only adjust if playback is choppy." },
    { heading: "Close background apps", body: "Streaming devices with low memory can fall behind when too many apps are running. Restart the device before important matches and keep only the IPTV player open during the game." },
    { heading: "Manage spoiler sources", body: "If you are watching with friends in group chats, mute alerts or place the phone away from the screen. Technical tuning helps, but social notifications are often the fastest spoiler in the room." }
  ]),
  article("world-cup-2026-time-zones-iptv-guide", "World Cup 2026 Time Zones and IPTV Planning", "Plan your World Cup 2026 viewing around North American kickoff times, household schedules, and IPTV device readiness.", "Match Planning", "2026-06-04", [
    { heading: "The tournament crosses three host countries", body: "World Cup 2026 is hosted across Canada, Mexico, and the United States, so kickoff times will move across multiple North American time zones. Fans outside North America should plan around early, late, and workday matches." },
    { heading: "Check kickoff times in your local time", body: "Before each match week, save the fixtures in your own time zone and compare them with your household routine. This helps you decide which screen, room, and device should be ready first." },
    { heading: "Prepare for overlapping demand at home", body: "A bigger tournament can mean one person wants live football while another wants movies, series, or kids content. If your household watches on multiple screens, choose a package that matches simultaneous viewing needs." },
    { heading: "Refresh EPG around schedule changes", body: "EPG data helps when match times, preview shows, and sports categories shift. Refresh the guide regularly so your app has the latest available channel organization." },
    { heading: "Make a weekly match routine", body: "At the start of each week, test the main sports category, confirm favorites, and restart your streaming device. Small weekly habits prevent a lot of last-minute pressure." }
  ]),
  article("epg-favorites-world-cup-2026-iptv", "EPG and Favorites Setup for World Cup 2026 IPTV", "Use EPG guide data and favorites to find World Cup 2026 coverage quickly across large IPTV channel lists.", "EPG Guide", "2026-06-03", [
    { heading: "Large tournaments need organization", body: "With 104 matches and many related programs, the full channel list can feel huge. EPG and favorites turn IPTV from endless scrolling into a quick match-day workflow." },
    { heading: "Refresh the guide after setup", body: "After adding your Flash 4K IPTV details, let the app sync fully, then refresh EPG data if your player supports it. Some apps need several minutes to load large guide files." },
    { heading: "Create a football favorites group", body: "Save your main sports channels, international sports categories, and backup options. This makes it easier to switch if a stream has heavy traffic or if you want different commentary." },
    { heading: "Keep favorites clean", body: "Before the tournament starts, remove old channels you no longer watch. A shorter favorites list is faster to browse when kickoff is close." },
    { heading: "Ask support about app behavior", body: "Different IPTV players handle EPG and favorites differently. If your app does not show guide data well, Flash 4K IPTV support can suggest a compatible player for your device." }
  ]),
  article("multi-screen-iptv-world-cup-households", "Multi-Screen IPTV Plans for World Cup 2026 Households", "Choose the right number of IPTV connections when your home has multiple football fans, rooms, and devices.", "Pricing", "2026-06-02", [
    { heading: "Count simultaneous viewing, not total devices", body: "A household may own five screens but only need two or three active streams at the same time. Choose your plan based on how many people will watch live content simultaneously during the tournament." },
    { heading: "Plan for match overlap", body: "World Cup weeks can create conflicts: one room watches a live match, another catches highlights, and someone else wants movies or kids content. Multi-screen planning keeps the experience calmer." },
    { heading: "Assign the strongest devices", body: "Use your best-connected device for the biggest match. Put the living-room TV on Ethernet if possible, and use mobile or desktop screens for secondary viewing." },
    { heading: "Avoid sharing one connection too widely", body: "Trying to stretch a single-device plan across multiple active screens can cause confusion or interruptions. Match the package to real household behavior before tournament traffic rises." },
    { heading: "Ask before upgrading", body: "If you are unsure whether to choose one, two, or three devices, send support your screen list and viewing plan. Flash 4K IPTV can help you pick a package that fits without overbuying." }
  ]),
  article("avoid-buffering-world-cup-2026", "Avoid Buffering During World Cup 2026: IPTV Checklist", "Reduce buffering risk before big World Cup matches with a practical network, device, and app checklist.", "Troubleshooting", "2026-06-01", [
    { heading: "Test before the match window", body: "The best buffering fix is preparation. Open live sports early, test a few channels, and confirm the player app loads categories before the match window gets busy." },
    { heading: "Restart the network path", body: "Restart your router, modem, and streaming device before important matches. This clears temporary connection issues and gives the app a fresh start." },
    { heading: "Reduce household traffic", body: "Pause cloud backups, large downloads, game updates, and extra 4K streams on the same network. Live football needs consistent bandwidth more than a flashy speed-test result." },
    { heading: "Use Ethernet or stronger Wi-Fi", body: "If the stream pauses, move from weak Wi-Fi to Ethernet where possible. If you cannot wire the device, move closer to the router and avoid walls or crowded Wi-Fi channels." },
    { heading: "Know when to switch quality", body: "If your device cannot keep up with a high-quality stream, choose a smoother HD or FHD option. A stable picture is better than a 4K stream that stops during attacks." }
  ]),
  article("smart-tv-fire-stick-world-cup-iptv", "Smart TV or Fire Stick for World Cup 2026 IPTV?", "Decide whether your Smart TV app or a Fire Stick-style device is the better match-day option for World Cup streaming.", "Devices", "2026-05-29", [
    { heading: "Smart TV wins on simplicity", body: "A Smart TV keeps everything on one remote and avoids extra hardware. It is a good choice if your TV has a compatible IPTV player, enough memory, and smooth menu performance." },
    { heading: "Fire Stick wins on flexibility", body: "A Fire Stick-style device can be easier to update, replace, and move between rooms. It also supports many popular IPTV player apps, which helps when a TV app store is limited." },
    { heading: "Older TVs may need help", body: "If your Smart TV is slow, freezes, or cannot install the recommended player, use a streaming stick or Android TV box. Newer external devices often handle large IPTV lists better." },
    { heading: "Network options matter", body: "Some Fire Stick setups can use Ethernet adapters, while many TVs already have Ethernet ports. For live sports, the device with the best network connection often wins." },
    { heading: "Test both before choosing", body: "If you own both devices, set up the same account on the device you plan to use and compare channel loading, EPG, audio, and remote control comfort before the tournament." }
  ]),
  article("travel-viewing-world-cup-2026-iptv", "Travel Viewing Tips for World Cup 2026 IPTV Users", "Keep your IPTV setup ready when watching World Cup 2026 away from your main living-room TV.", "Travel", "2026-05-26", [
    { heading: "Prepare your mobile device before leaving", body: "Install a compatible IPTV player on your phone, tablet, or laptop while you are still at home. Log in, load categories, and confirm live playback before you travel." },
    { heading: "Expect connection quality to vary", body: "Hotel Wi-Fi, airport Wi-Fi, mobile data, and shared networks can be inconsistent. For important matches, test the connection early and keep a backup network option ready." },
    { heading: "Use headphones and battery planning", body: "For mobile viewing, charge your device, carry a power bank, and keep headphones nearby. Long match days can drain batteries quickly, especially with higher brightness and live video." },
    { heading: "Respect regional availability", body: "Channel availability, apps, and performance can vary by region, package, and local network rules. If something behaves differently while traveling, message support with your location, device, and app name." },
    { heading: "Keep account details secure", body: "Do not share login details in public chats or save them on shared devices. If you use a hotel TV or borrowed device, remove the account before leaving." }
  ]),
  article("legal-reliable-world-cup-iptv-checklist", "Reliable World Cup IPTV: What to Check Before Kickoff", "A practical checklist for choosing stable, transparent IPTV support before major World Cup 2026 match nights.", "Match Planning", "2026-05-23", [
    { heading: "Look for clear support", body: "Major tournaments create urgent questions, so support access matters. Choose a service that can answer setup, device, EPG, and troubleshooting questions before the match starts." },
    { heading: "Check device compatibility", body: "Before buying, confirm your main device: Smart TV, Fire Stick, Android TV, MAG box, iPhone, iPad, Windows, or Mac. Compatibility avoids setup delays on the first big match day." },
    { heading: "Ask about quality honestly", body: "Be careful with any promise that every stream is always 4K, always delay-free, or always available everywhere. Real quality depends on channel source, device, internet, app, and region." },
    { heading: "Understand independence and availability", body: "Flash 4K IPTV is independent and not affiliated with FIFA, teams, leagues, or broadcasters. Channel and event availability can vary by region and package, so ask support what fits your needs." },
    { heading: "Test early and keep records", body: "Save your activation details, support contact, device name, and app name. If you need help, a clear screenshot and accurate device information speed up troubleshooting." }
  ]),
  article("setup-iptv-on-smart-tv", "How to Set Up IPTV on a Smart TV", "Install a compatible IPTV player, add your account details, and prepare your Smart TV for live channels and VOD.", "Smart TV", "2026-01-18", [
    { heading: "Before you start", body: "Make sure your Smart TV is connected to stable internet, the app store is available, and you have your Flash 4K IPTV activation details ready. Most setup problems come from weak Wi-Fi, old TV software, or a typing mistake in the login details." },
    { heading: "Install a compatible IPTV player", body: "Open your TV app store and install a trusted IPTV player that supports playlist links or Xtream-style login. If you are not sure which app fits your TV brand, message support with your TV model so you can receive the easiest recommendation." },
    { heading: "Enter your activation details", body: "Add the server URL, username, and password exactly as provided. Avoid extra spaces before or after copied text. If the app asks for a playlist name, use something simple like Flash 4K IPTV so you can recognize it later." },
    { heading: "Load channels, VOD, and EPG", body: "After login, give the app time to sync live channels, movie sections, series categories, and EPG guide data. Large IPTV lineups can take a few minutes on the first load, especially on older Smart TVs." },
    { heading: "Test before match time", body: "Open a sports category, a movie category, and the TV guide before an important live event. If playback is slow, restart the app, refresh the playlist, and use Ethernet or stronger Wi-Fi whenever possible." }
  ]),
  article("install-iptv-on-fire-stick", "How to Install IPTV on Fire Stick", "Set up IPTV on Fire Stick with a smooth player app, stable Wi-Fi, and simple activation steps.", "Fire Stick", "2026-01-25", [
    { heading: "Prepare your Fire Stick", body: "Update your Fire Stick, connect it to strong Wi-Fi, and remove unused apps if storage is low. IPTV players work better when the device has enough free space and is not overloaded with background apps." },
    { heading: "Install the recommended player", body: "Use the IPTV player recommended by support for your account format. Some players use playlist links, while others use server, username, and password fields. Choosing the right player makes setup faster and avoids login confusion." },
    { heading: "Add your Flash 4K IPTV details", body: "Enter your activation details carefully. If the app gives you separate fields for server, username, and password, keep each value in the correct field. If it asks for a playlist URL, paste the full link exactly as provided." },
    { heading: "Improve Fire Stick performance", body: "Restart your Fire Stick after setup, keep the player app updated, and close unused apps before live sports. For busy match nights, a strong 5 GHz Wi-Fi signal or Ethernet adapter can help reduce drops." },
    { heading: "Check categories and guide data", body: "Once the playlist loads, test Live Sports, Movies, Series, and EPG. If some sections are missing, refresh the playlist or contact support with a screenshot of the app screen." }
  ]),
  article("setup-iptv-on-android-tv", "How to Set Up IPTV on Android TV", "A beginner-friendly Android TV setup guide for live sports, movies, series, and EPG guide support.", "Android TV", "2026-02-02", [
    { heading: "Choose the right Android TV app", body: "Android TV supports many IPTV players, but not every app handles large channel lists and EPG data equally well. Use the player recommended by Flash 4K IPTV support for your device and login format." },
    { heading: "Add account details correctly", body: "Open the player app and enter your server, username, and password or playlist link. Double-check capitalization, symbols, and spacing. If the app fails to connect, most cases are caused by incorrect copied details." },
    { heading: "Sync channels and VOD", body: "After login, wait for the app to import channels, VOD titles, series sections, and the EPG guide. Do not close the app during the first sync. A full IPTV library can take a little time to organize." },
    { heading: "Tune playback settings", body: "If your player has decoder or buffer settings, start with the default option. If a channel shows black screen or no sound, try switching decoder mode or testing another compatible player." },
    { heading: "Use Android TV for match nights", body: "For live football and major events, restart your Android TV box before kickoff, use Ethernet where possible, and test the sports category early. This gives support time to help if anything needs adjustment." }
  ]),
  article("why-iptv-buffers-and-how-to-fix-it", "Why IPTV Buffers and How to Fix It", "Understand the most common buffering causes and practical fixes for smoother IPTV streaming.", "Troubleshooting", "2026-02-10", [
    { heading: "Connection stability matters more than speed", body: "A speed test can look good while your stream still buffers if the connection is unstable. Live sports and 4K streams need consistent delivery, so Ethernet or a strong 5 GHz Wi-Fi signal is better than weak Wi-Fi from another room." },
    { heading: "Restart and refresh your player", body: "Close the IPTV app completely, restart the device, then open the app again. Refresh playlist and EPG data if your player supports it. This clears temporary loading issues and reloads the channel list." },
    { heading: "Check if the issue is one channel or all channels", body: "If only one channel buffers, test a different category such as movies, news, or another sports channel. If every category buffers, the issue is more likely your connection, device, player app, or local network." },
    { heading: "Reduce device pressure", body: "Older Smart TVs, Fire Sticks, and low-memory Android boxes may struggle with huge IPTV libraries. Close background apps, clear cache, remove unused apps, and avoid 4K streams if the device cannot handle them smoothly." },
    { heading: "Prepare before live events", body: "Before a major match, test the sports category early. Restart your router and device, pause downloads, and avoid running heavy apps on the same network. If problems continue, send support your device name and app name." }
  ]),
  article("best-internet-speed-for-4k-iptv-streaming", "Best Internet Speed for 4K IPTV Streaming", "Learn what connection speed and network setup works best for HD, FHD, and 4K IPTV viewing.", "Performance", "2026-02-18", [
    { heading: "Recommended speed ranges", body: "For HD viewing, a stable connection is usually more important than a very high number. For FHD and 4K, give your device more bandwidth and avoid crowded Wi-Fi. As a practical target, use a stable 25 Mbps or higher connection for 4K where available." },
    { heading: "Latency and packet loss matter", body: "IPTV can buffer even on fast internet if your connection has packet loss or unstable latency. If streams stop and start often, test Ethernet or move the router closer to the streaming device." },
    { heading: "Use Ethernet when possible", body: "Ethernet is the best option for Smart TVs, Android boxes, MAG devices, and desktop setups. It avoids many Wi-Fi drops and is especially useful during live sports or major events." },
    { heading: "Avoid network congestion", body: "Large downloads, cloud backups, gaming, and multiple 4K streams can affect IPTV performance. Before a big match, pause heavy activity on the same network and test playback early." },
    { heading: "Choose the right quality", body: "If your internet is unstable, HD or FHD may feel smoother than forcing 4K. Quality availability also depends on the channel, app, device, and package, so use the stream quality that performs best on your setup." }
  ]),
  article("use-epg-tv-guide-with-iptv", "How to Use an EPG TV Guide with IPTV", "Set up and refresh your IPTV TV guide so live channel browsing feels easier.", "EPG Guide", "2026-02-26", [
    { heading: "What EPG means", body: "EPG stands for Electronic Program Guide. It shows program names, time slots, and channel schedules inside compatible IPTV players, making live TV easier to browse." },
    { heading: "How EPG is loaded", body: "Some apps load EPG automatically after you add your account. Others require a manual refresh. After first setup, allow the app time to sync guide data before assuming it is missing." },
    { heading: "What to do if EPG is empty", body: "Refresh the guide inside your IPTV player, restart the app, and wait for the sync to finish. If the guide still does not show, test another compatible player because EPG support differs between apps." },
    { heading: "Keep channel lists organized", body: "Large IPTV packages include many categories, so EPG helps you avoid endless scrolling. Use favorites where possible and save the channels you watch most often." },
    { heading: "EPG before sports events", body: "Before match day, refresh EPG and test the sports category. Guide data can make it easier to find live football, international sports, and related event channels quickly." }
  ]),
  article("iptv-not-working-common-problems-fixes", "IPTV Not Working? Common Problems and Fixes", "A quick diagnostic guide for login errors, missing channels, no sound, black screen, and app issues.", "Troubleshooting", "2026-03-04", [
    { heading: "Login errors", body: "If your app says login failed, check the server URL, username, and password. Copy each value exactly as provided and remove accidental spaces. If you changed device or app, message support before retrying too many times." },
    { heading: "Channels or VOD missing", body: "Missing categories often mean the playlist has not fully synced. Reload the playlist, wait for the import to complete, and restart the player. Older devices may need more time to load large channel lists." },
    { heading: "Black screen or no sound", body: "A black screen can be caused by decoder settings, app compatibility, or a temporary channel issue. Try another channel, switch decoder mode if available, restart the app, or test on another device." },
    { heading: "App freezes or crashes", body: "Clear cache, remove unused apps, update the player, and restart the device. If your device has low storage or memory, it may struggle with large IPTV playlists and VOD libraries." },
    { heading: "When to contact support", body: "If you tried the basic fixes and the issue remains, send support your device type, app name, screenshot, and whether the issue affects one channel or all categories. That helps support find the fastest solution." }
  ]),
  article("watch-iptv-on-iphone-and-ipad", "How to Watch IPTV on iPhone and iPad", "Set up IPTV on iOS devices with a compatible player, account details, and mobile-friendly playback settings.", "iOS", "2026-03-12", [
    { heading: "Install a compatible iOS player", body: "Open the App Store and install an IPTV player that supports your activation format. Some players use a playlist link, while others support server, username, and password login." },
    { heading: "Add your account details", body: "Enter the details from Flash 4K IPTV support carefully. After login, let the playlist load fully before opening categories. Large VOD and live TV lists can take a moment on mobile devices." },
    { heading: "Use Wi-Fi for best results", body: "Mobile data can work, but stable Wi-Fi is usually better for sports and HD/FHD/4K streams. If playback pauses often, switch networks or move closer to your router." },
    { heading: "Create favorites", body: "Use your app's favorites feature to save live sports, movies, and channels you watch often. This makes mobile viewing much easier than browsing the full lineup every time." },
    { heading: "Travel and mobile viewing tips", body: "If you travel, test your app before leaving home and keep your login details saved securely. Availability and performance can vary by region, device, and connection quality." }
  ]),
  article("watch-iptv-on-windows-or-mac", "How to Watch IPTV on Windows or Mac", "Use your desktop or laptop as an IPTV screen with compatible players and simple setup practices.", "Desktop", "2026-03-20", [
    { heading: "Choose a desktop IPTV player", body: "Windows and Mac users can watch IPTV through compatible media players or dedicated IPTV apps. Choose a player that supports your login type and has stable playlist handling." },
    { heading: "Add the playlist or login details", body: "Enter the playlist URL or server login exactly as support provides it. If the player supports categories, wait for live TV, movies, series, and EPG to sync before browsing." },
    { heading: "Keep your computer ready", body: "Update your system, browser, and media player. Close heavy apps before streaming, especially if you want to watch live sports or higher-quality streams." },
    { heading: "Connect to a bigger screen", body: "For a living-room experience, connect your laptop to a TV with HDMI or use a supported casting method. HDMI is usually more stable and avoids casting delay." },
    { heading: "Troubleshooting desktop playback", body: "If video plays without sound, check audio output and codec settings. If playback stutters, test Ethernet, lower quality, or another compatible player." }
  ]),
  article("choose-best-iptv-plan-for-devices", "How to Choose the Best IPTV Plan for Your Devices", "Pick between 1, 2, and 3 device IPTV packages based on your household and viewing habits.", "Pricing", "2026-03-28", [
    { heading: "Start with active screens", body: "Choose your plan based on how many devices need to watch at the same time. One device is best for personal viewing, two devices suit couples or two rooms, and three devices fit larger households." },
    { heading: "Think about your main devices", body: "List the devices you plan to use: Smart TV, Fire Stick, Android TV, iPhone, iPad, MAG Box, Windows, or Mac. This helps support recommend the best player app for each screen." },
    { heading: "Compare 3, 6, and 12 months", body: "Shorter plans are flexible, while longer plans usually offer better value. The 12-month package is the best-value option because it includes 2 months free." },
    { heading: "Choose before match season", body: "If you are buying for live football or major sports events, activate early. This gives you time to test devices, organize favorites, and ask support for help before kickoff." },
    { heading: "Ask support if you are unsure", body: "If you do not know which package fits your home, message WhatsApp support with your device list and viewing needs. Support can help you avoid choosing too few or too many connections." }
  ]),
  article("prepare-iptv-before-big-sports-match", "How to Prepare Your IPTV Setup Before a Big Sports Match", "Avoid last-minute setup stress with this pre-match IPTV checklist for live football and major events.", "Sports", "2026-04-06", [
    { heading: "Activate before match day", body: "Do not wait until kickoff to set up IPTV. Activate your package early, install the player app, and confirm your login works while support has time to help." },
    { heading: "Test your sports category", body: "Open live sports, football, and international sports categories before the event. Test more than one stream and make sure your device can play smoothly." },
    { heading: "Refresh playlist and EPG", body: "Before a big match, refresh your playlist and EPG guide. This helps your app show updated categories and makes it easier to find the event quickly." },
    { heading: "Prepare your network", body: "Restart your router, use Ethernet if possible, pause downloads, and avoid heavy gaming or cloud backups during the match. Stable internet is one of the biggest factors in smooth live streaming." },
    { heading: "Have support details ready", body: "Keep your device name, app name, and account details handy. If something goes wrong, send support a clear message with the issue, screenshot, and whether it affects one channel or all channels." }
  ]),
  article("smart-tv-vs-fire-stick-vs-android-box-iptv", "Smart TV vs Fire Stick vs Android Box for IPTV", "Compare popular IPTV devices and choose the best setup for your home, sports nights, and 4K viewing.", "Devices", "2026-04-14", [
    { heading: "Smart TV: simple but brand-dependent", body: "Smart TVs are convenient because everything runs on the TV itself. The downside is that app availability, memory, and performance depend heavily on the brand and age of the TV." },
    { heading: "Fire Stick: compact and affordable", body: "Fire Stick devices are popular because they are easy to move, simple to update, and work well with many IPTV apps. For best results, keep storage clean and use strong Wi-Fi or an Ethernet adapter." },
    { heading: "Android TV box: flexible and powerful", body: "A good Android TV box can be one of the strongest IPTV options because it supports many players and usually handles large playlists better than older TVs. Quality depends on the box hardware." },
    { heading: "Which device is best for sports?", body: "For live sports, choose the device with the most stable network connection and smoothest player app. Ethernet support, strong processor, and app compatibility matter more than the device name." },
    { heading: "Recommended choice", body: "If your Smart TV app support is weak, use a Fire Stick or Android TV box. If you want maximum flexibility and performance, a quality Android TV box or Ethernet-connected streaming device is usually the strongest option." }
  ])
];

export const footerLinks = {
  product: navLinks,
  support: [
    { label: "WhatsApp Support", href: "/support#contact" },
    { label: "Setup Guides", href: "/support#guides" },
    { label: "FAQ", href: "/#faq" }
  ],
  legal: [
    { label: "Terms of Service", href: "/support#legal" },
    { label: "Privacy Policy", href: "/support#legal" },
    { label: "Disclaimer", href: "/#disclaimer" }
  ],
  social: [
    { label: "Instagram", href: "#" },
    { label: "X (Twitter)", href: "#" },
    { label: "YouTube", href: "#" }
  ]
};

export const setupGuides = [
  { title: "Smart TV Setup", icon: Tv, description: "Install a compatible player and connect your Flash 4K IPTV account." },
  { title: "Fire Stick Setup", icon: Zap, description: "Prepare your streaming stick for live sports, movies, and EPG guide support." },
  { title: "Android TV Setup", icon: Cpu, description: "Configure a recommended player app for stable living-room playback." },
  { title: "iPhone / iPad Setup", icon: TabletSmartphone, description: "Watch on iOS with a compatible player and clean login details." },
  { title: "MAG Box Setup", icon: Monitor, description: "Use portal-style setup guidance for MAG-compatible devices." },
  { title: "Windows / Mac Setup", icon: MonitorSmartphone, description: "Stream from your computer or connect it to a larger screen." }
];

export const whyChoose = [
  {
    title: "Match-day ready IPTV",
    description:
      "Sports-first navigation, WhatsApp setup, and stable streaming focus for football nights and major event demand.",
    icon: Trophy
  },
  {
    title: "Full entertainment lineup",
    description:
      "Live TV, sports, movies, series, kids, news, international channels, VOD, and EPG in one premium package.",
    icon: Tv
  },
  {
    title: "Simple WhatsApp activation",
    description:
      "No confusing checkout flow. Select a plan, message support with package details, and receive guided activation.",
    icon: MessageCircle
  }
];

export const sportsCards = [
  { title: "Live Football", description: "Generic live match access categories for football nights and major tournaments.", icon: Trophy },
  { title: "International Sports", description: "Sports categories for global events, live matches, and match-day viewing.", icon: Compass },
  { title: "4K Quality", description: "HD, FHD, and 4K quality where available across compatible devices and apps.", icon: Sparkles },
  { title: "Fast Support", description: "WhatsApp support before match time for setup, activation, and troubleshooting.", icon: LifeBuoy },
  { title: "Stable Streaming", description: "Built for stable streaming without making unrealistic uptime claims.", icon: Gauge },
  { title: "EPG Included", description: "Guide support helps you browse live TV and sports categories more easily.", icon: CalendarDays }
];

export const supportTopics = [
  { title: "WhatsApp activation", icon: MessageCircle, description: "Choose a plan, confirm details, and receive activation guidance." },
  { title: "Setup help", icon: Wrench, description: "Get help installing a player app and entering your account details." },
  { title: "Buffering fixes", icon: Wifi, description: "Improve connection, refresh playlist data, and optimize player settings." },
  { title: "Before big match support", icon: Trophy, description: "Test your device and sports category before kickoff." },
  { title: "EPG setup", icon: LayoutGrid, description: "Refresh guide data and troubleshoot missing program listings." },
  { title: "Activation status", icon: BadgeCheck, description: "Confirm your package, device count, and subscription duration." }
];
