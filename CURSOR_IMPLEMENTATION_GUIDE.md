# Duckhorn Collection x Wine Spectator - Cursor Implementation Guide

## Project Overview
A premium digital landing page for **The Duckhorn Collection** in partnership with **Wine Spectator**, celebrating 50 years of Napa Valley heritage. This is a sponsored special feature showcasing five world-class wineries.

---

## Quick Start for Cursor

```bash
# 1. Create Next.js project
npx create-next-app@latest duckhorn-ws --typescript --tailwind --app --src-dir

# 2. Install dependencies
cd duckhorn-ws
npm install framer-motion react-intersection-observer

# 3. Copy assets
cp -r ../wetransfer_duckhorn_layout-0121-pdf_2026-01-22_1618/Digital\ Images ./public/images
```

---

## Page Structure (From Wireframe)

```
┌─────────────────────────────────────────────┐
│  NAVIGATION                                 │
│  The Duckhorn Perspective • Video •         │
│  Featured Wines • Meet the Makers •         │
│  Milestones                                 │
├─────────────────────────────────────────────┤
│  HERO SECTION                               │
│  Wine Spectator logo                        │
│  "THE DUCKHORN COLLECTION"                  │
│  "Defining American Fine Wine"              │
│  [5 Wine Bottles Image]                     │
│  Taglines at bottom                         │
├─────────────────────────────────────────────┤
│  THE DUCKHORN PERSPECTIVE                   │
│  Image grid + CEO letter + brand logos      │
├─────────────────────────────────────────────┤
│  FEATURED WINES                             │
│  5 clickable wine bottles in a row          │
├─────────────────────────────────────────────┤
│  MEET THE MAKERS                            │
│  5 winemaker circular portraits             │
├─────────────────────────────────────────────┤
│  VIDEO SECTION                              │
│  Full-width video player                    │
├─────────────────────────────────────────────┤
│  MILESTONES TIMELINE                        │
│  Historical achievements cards              │
├─────────────────────────────────────────────┤
│  WINERY DETAIL SECTIONS (expandable/pages)  │
│  - Duckhorn Vineyards                       │
│  - Kosta Browne                             │
│  - Calera                                   │
│  - Goldeneye                                │
│  - Sonoma-Cutrer                            │
├─────────────────────────────────────────────┤
│  WINE SPECTATOR RECOMMENDED RELEASES        │
│  Ratings table                              │
└─────────────────────────────────────────────┘
```

---

## Brand Colors & Typography

### Color Palette
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Primary - Duckhorn Gold (from Wine Spectator masthead)
        'ws-gold': {
          400: '#C5A572',
          500: '#B8956A',
          600: '#A07D4E',
        },
        // Secondary - Deep Wine/Burgundy
        'wine': {
          700: '#722F37',
          800: '#5C252C',
          900: '#4A1D23',
          950: '#2D1216',
        },
        // Accent - Forest Green (from layout accents)
        'forest': {
          600: '#4A6741',
          700: '#3D5636',
          800: '#2F432A',
        },
        // Neutrals
        'cream': '#F8F6F1',
        'warm-gray': {
          100: '#F5F3EF',
          200: '#E8E4DC',
          300: '#D4CFC4',
          800: '#3D3D3D',
          900: '#2A2A2A',
        }
      },
      fontFamily: {
        // Serif for headlines (similar to layout)
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        // Script/italic for taglines
        'script': ['Cormorant Garamond', 'Georgia', 'serif'],
        // Sans for body
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      }
    }
  }
}
```

### Typography Scale
```css
/* Headlines */
.headline-hero { @apply font-serif text-6xl md:text-8xl tracking-tight; }
.headline-section { @apply font-serif text-4xl md:text-5xl; }
.headline-winery { @apply font-serif text-3xl md:text-4xl; }

/* Taglines (italic script style) */
.tagline { @apply font-script italic text-xl md:text-2xl; }

/* Body */
.body-large { @apply font-sans text-lg leading-relaxed; }
.body { @apply font-sans text-base leading-relaxed; }

/* Labels */
.label { @apply font-sans text-sm uppercase tracking-widest; }
```

---

## Asset Mapping

### Hero Section
| Element | File |
|---------|------|
| Hero wine bottles | `FRONT_COVER_0428-flat-edit1.jpg` |
| Wine Spectator logo | Create SVG or source from brand |

### The Duckhorn Perspective (Image Grid)
| Position | File |
|----------|------|
| Winemaker portrait | `DV-Harvest---9.25.25-27.jpg` or `DV-Harvest---9.25.25-29.jpg` |
| Barrel room | `BarrelRoomWithGalleryView_DSC4738_25pct-(1).jpg` |
| Vineyard panorama | `Three-Palms-Vineyard.jpg` |
| Courtyard/winery | `pd-courtyard-new.jpg` |
| Drone vineyard shot | `CeriseNov18_Drone_9.jpg` |

### Featured Wines Section
| Wine | File |
|------|------|
| All 5 bottles | `FRONT_COVER_0428-flat-edit1.jpg` (crop individual) |
| Individual inserts | `INSERTS_0478.jpg` through `INSERTS_0494.jpg` |

### Meet the Makers
| Winemaker | File |
|-----------|------|
| Group photo | Use headshots or source individual portraits |
| Dawn Heumann shots | `250115_WS_Headshots_DawnHeumann*.jpg` |

### Winery Sections
| Winery | Files |
|--------|-------|
| Duckhorn | `Three-Palms-Vineyard.jpg`, `Three-Palms-9.jpg`, `Dan-Duckhorn-during-harvest.jpg` |
| Kosta Browne | `Kosta-Browne-Winery2.jpg`, `KB_Harv-2299-2.jpg`, `KB_KitchenVignette_Lifestyle_01_SheaEvans.jpg` |
| Calera | Source from layout or use vineyard shots |
| Goldeneye | Source from layout |
| Sonoma-Cutrer | Source from layout |

### Milestones
| Milestone | Image |
|-----------|-------|
| Wine Spectator covers | `Screenshot 2026-01-22 at 10.53.30 AM.png`, `Screenshot 2026-01-22 at 10.53.38 AM.png` |
| Vineyard history | Various vineyard shots |

---

## Complete Copy Content

### Navigation
```
The Duckhorn Perspective • Video • Featured Wines • Meet the Makers • Milestones
```

### Hero Section
```
SPONSORED SPECIAL FEATURE

Wine Spectator
THE
DUCKHORN
COLLECTION
Defining American Fine Wine

Crafting Timeless Wines From Iconic Terroirs | Celebrating 50 YEARS Of Napa Valley Heritage
```

### The Duckhorn Perspective Section
```
THE DUCKHORN PERSPECTIVE
A family of world-class wineries united by a singular pursuit of excellence

Crafted by Place.
Defined by Hospitality.

FOR FIFTY YEARS, The Duckhorn Collection has stood at the center of American fine wine— rooted in vineyard integrity, generational stewardship, and the belief that exceptional wines begin with exceptional sites. Ours is a distinctly American story, shaped by landscape, craftsmanship, and a hospitality that is both timeless and modern.

This philosophy comes fully to life in our new Napa Valley home on the Silverado Trail. Here, guests experience our portfolio through thoughtful tastings, seasonal pairings from our world-class culinary team, and an atmosphere defined by warmth, ease, and a remarkable sense of place. It is a setting that reflects the spirit of our founders— welcoming, refined, and deeply connected to the vineyards that shape our wines.

The wineries featured in the Collection each carry forward our shared vision: winemaking excellence, respect for land, and a deep understanding of how place defines character. Together, they represent Napa warmth and structure, coastal intensity, limestone purity, cool-climate precision, and the breadth of California's most compelling sites.

This feature highlights five of our wineries and the people and philosophies behind the wines—the growers, winemakers, and stewards whose craft and commitment elevate every bottle. Their work reflects what American fine wine can be today—and where we are headed next.

Robert Hanson
CEO, The Duckhorn Collection
```

### Featured Wines Data
```javascript
const featuredWines = [
  {
    id: 'duckhorn',
    name: 'Duckhorn',
    brand: 'DUCKHORN VINEYARDS',
    tagline: 'Five Decades In. Still Defining What\'s Next.',
    image: '/images/wine-duckhorn.png'
  },
  {
    id: 'kosta-browne',
    name: 'Kosta Browne',
    brand: 'KOSTA BROWNE',
    tagline: 'The Art of Site',
    image: '/images/wine-kosta-browne.png'
  },
  {
    id: 'calera',
    name: 'Calera',
    brand: 'CALERA',
    tagline: 'Mountain Purity & Limestone Precision',
    image: '/images/wine-calera.png'
  },
  {
    id: 'goldeneye',
    name: 'Goldeneye',
    brand: 'GOLDENEYE',
    tagline: 'The Voice of Anderson Valley',
    image: '/images/wine-goldeneye.png'
  },
  {
    id: 'sonoma-cutrer',
    name: 'Sonoma-Cutrer',
    brand: 'SONOMA-CUTRER',
    tagline: 'Crisp by Design',
    image: '/images/wine-sonoma-cutrer.png'
  }
];
```

### Meet the Makers Data
```javascript
const winemakers = [
  {
    name: 'Renée Ary',
    title: 'Vice President of Winemaking',
    winery: 'Duckhorn Vineyards',
    image: '/images/winemaker-renee-ary.jpg',
    quote: "Duckhorn's commitment to detail and hospitality is unmistakable. Every wine, every visit, reflects a deep respect for place—and a belief that great wines create meaningful moments.",
    qAndA: {
      question: "Duckhorn helped define American Merlot. What is the north star of Duckhorn Merlot today?",
      answer: "Merlot is where Duckhorn started—supple, friendly texture, but built at a luxury level. The goal is a serious wine that is also immediately appealing: silky, layered, with bright acidity, and a perception of sweetness that comes only from fruit."
    }
  },
  {
    name: 'Julien Howsepian',
    title: 'Winemaker',
    winery: 'Kosta Browne',
    image: '/images/winemaker-julien-howsepian.jpg',
    quote: "Great Pinot Noir doesn't shout—it reveals. Its beauty lies in precision, in purity, and in the way it captures landscape with effortless clarity. Few varietals connect place and emotion so completely.",
    qAndA: {
      question: "You've described your approach to Pinot Noir as 'controlled freedom.' What does that mean in practice?",
      answer: "Great Pinot is at its best when you resist the urge to over correct, allowing the wine to become what it wants to be. Consistency isn't sameness, it's signature. Our job is to guide, not dominate."
    }
  },
  {
    name: 'Mike Waller',
    title: 'Winemaker',
    winery: 'Calera',
    image: '/images/winemaker-mike-waller.jpg',
    quote: "Calera Pinot Noir reflects a landscape as much as a grape. Limestone, altitude, and discipline converge to create wines of rare clarity and soul.",
    qAndA: {
      question: "Calera is one of California's original Pinot Noir pioneers. What is the philosophy that still guides every vintage?",
      answer: "The through-line is simple: change nothing in the cellar so the vineyards can speak. Native fermentation, whole cluster, gravity-fed, 18 months in barrel, then bottled unfiltered—the point is restraint, so Mt. Harlan shows itself clearly."
    }
  },
  {
    name: 'Kristen McMahan',
    title: 'Winemaker',
    winery: 'Goldeneye',
    image: '/images/winemaker-kristen-mcmahan.jpg',
    quote: "Goldeneye Pinot Noir carries the imprint of Anderson Valley—wild, aromatic, and resonant. It's a region defined by patience, precision, and coastal character.",
    qAndA: {
      question: "What should your Pinot Noir communicate about Anderson Valley the moment it hits the glass?",
      answer: "Sense of place. If you've been here, I want the wine to take you back – towering redwoods, shifting coastal air, pennyroyal on the breeze, that golden light in late afternoon. If you haven't been here, I want our wines to encourage you to visit and explore."
    }
  },
  {
    name: 'Cara Morrison',
    title: 'Winemaker',
    winery: 'Sonoma-Cutrer',
    image: '/images/winemaker-cara-morrison.jpg',
    quote: "Sonoma-Cutrer has spent forty years refining one philosophy—Chardonnay shaped by balance, place, and precision. The result is elegance in every glass.",
    qAndA: {
      question: "Sonoma-Cutrer is synonymous with Chardonnay. What defines the house style, year after year?",
      answer: "Consistent, crisp, and balanced. The wines are fruit-forward and refreshing, with real acidity, but never over-oaked or heavily buttery. Evolution happens quietly, through refinement, not reinvention."
    }
  }
];
```

### Milestones Timeline Data
```javascript
const milestones = [
  {
    year: '1976',
    title: 'A Vineyard-First Vision Takes Root',
    description: 'Duckhorn Vineyards is established in Napa Valley with an early, defining commitment to Merlot—setting a house style centered on balance and elegance at a time when Cabernet Sauvignon dominated much of the valley.',
    winery: 'Duckhorn'
  },
  {
    year: 'Early 1980s',
    title: 'Defining Cool-Climate California Chardonnay',
    description: 'Sonoma-Cutrer emerges as an early leader in Russian River Valley Chardonnay, establishing a Burgundian-influenced model built on site specificity, crisp acidity and balance—helping shape America\'s modern love affair with fine Chardonnay.',
    winery: 'Sonoma-Cutrer'
  },
  {
    year: 'Mid-1980s–Today',
    title: 'Three Palms Vineyard',
    description: 'THREE PALMS VINEYARD reveals itself early as a singular Merlot site—delivering grapes with exceptional structure and depth. Decades of dedication culminate in Duckhorn\'s acquisition of the vineyard in 2015, securing long-term stewardship of America\'s most important Merlot site.',
    winery: 'Duckhorn'
  },
  {
    year: '1996',
    title: 'Goldeneye Founded in Anderson Valley',
    description: 'Duckhorn expands beyond Napa, establishing Goldeneye and signaling an early, deliberate commitment to cool-climate Pinot Noir.',
    winery: 'Goldeneye'
  },
  {
    year: '2011',
    title: 'Wine Spectator Wine of the Year',
    description: 'THE 2009 KOSTA BROWNE Sonoma Coast Pinot Noir is named Wine Spectator Wine of the Year, recognizing Pinot Noir of rare precision and cementing Kosta Browne\'s place among America\'s most influential fine-wine estates.',
    winery: 'Kosta Browne',
    highlight: true
  },
  {
    year: '2013',
    title: 'Josh Jensen: Pinot Pioneer',
    description: 'Calera founder Josh Jensen is recognized as a defining voice in American Pinot Noir, reinforcing the Collection\'s role in shaping Pinot\'s evolution.',
    winery: 'Calera'
  },
  {
    year: '2017',
    title: 'Wine Spectator Wine of the Year',
    description: 'THE 2014 THREE PALMS VINEYARD earns Wine Spectator Wine of the Year, marking Renée Ary\'s first vintage and affirming the wine\'s enduring excellence and the lasting distinction of its vineyard.',
    winery: 'Duckhorn',
    highlight: true
  },
  {
    year: '2025',
    title: 'The Duckhorn Collection Opens',
    description: 'A new Napa Valley destination opens on Silverado Trail, where expanded tastings and culinary experiences allow guests to experience the full Duckhorn Collection within a beautiful vineyard setting.',
    winery: 'Collection'
  }
];
```

### Winery Detail Sections

#### DUCKHORN VINEYARDS
```javascript
const duckhornData = {
  name: 'DUCKHORN VINEYARDS',
  tagline: 'Five Decades In. Still Defining What\'s Next.',
  heroDescription: 'DUCKHORN VINEYARDS has shaped Napa Valley\'s modern identity for nearly half a century. Its approach unites estate rigor, an unbroken winemaking lineage, and a hospitality culture defined by genuine warmth—shaped early on by Dan and Margaret Duckhorn\'s admiration for Bordeaux and their conviction that Merlot could thrive in Napa. From Merlot to Sauvignon Blanc and Cabernet, the wines reflect intention, balance, and a respect for detail that begins in the vineyard and carries through every touchpoint of the guest experience.',

  sections: [
    {
      title: 'A House Built on Hospitality',
      content: 'Dan and Margaret Duckhorn believed that great wine should be shared generously—a principle woven into the estate\'s tasting culture from the beginning. Their early commitment to Merlot helped define Napa Valley\'s reputation, and their philosophy continues to guide the estate: inviting, personal, elevated without excess.'
    },
    {
      title: 'The Merlot Benchmark',
      content: 'For decades, Duckhorn has stood at the forefront of American Merlot. Nowhere is that legacy more evident than at Three Palms Vineyard, a site of volcanic stones and warm exposures that yields wines of singular depth and longevity. It remains one of Napa\'s defining expressions—a testament to belief, perseverance, and site.'
    },
    {
      title: 'The Importance of Vineyard Quality',
      content: 'Great wine starts in the vineyard. Slope and sun exposure, soil composition and even the clones planted shape every decision in the cellar—and define the character in the glass. Guided by Rob Sorensen, The Duckhorn Collection stewards exceptional sites with intention and care.',
      person: {
        name: 'Rob Sorenson',
        title: 'Director of North Coast Estate Vineyards'
      }
    },
    {
      title: 'Precision with A Human Touch',
      content: 'Duckhorn\'s approach emphasizes discipline—night harvesting, small-lot fermentations, and one of Napa\'s most meticulous barrel programs. Each lot is handled individually, preserving purity, structure, and the character of diverse estate sites. It is winemaking grounded in restraint and respect, resulting in wines that are both expressive and enduring.'
    }
  ],

  wines: [
    {
      name: 'Three Palms Merlot',
      description: 'Layered and powerful, revealing Bing cherry, cocoa, slate, dusty tannins, and an earthy, mineral-driven finish.'
    },
    {
      name: 'Merlot',
      description: 'Velvety and expressive, with plum, black cherry, baking spice, lively acidity, and a polished, lingering finish.'
    },
    {
      name: 'Cabernet Sauvignon',
      description: 'Elegant yet structured, offering dark red berries, fig, boysenberry, firm tannins, and a long finish.'
    },
    {
      name: 'Chardonnay',
      description: 'Rich yet balanced, showcasing pear, citrus, crème brûlée, subtle salinity, and a long, juicy finish.'
    },
    {
      name: 'Sauvignon Blanc',
      description: 'Crisp and vibrant, with pineapple, guava, melon, lively acidity, silky texture, and a refined mineral finish.'
    }
  ]
};
```

#### KOSTA BROWNE
```javascript
const kostaBrowneData = {
  name: 'KOSTA BROWNE',
  tagline: 'The Art of Site',
  heroDescription: 'Kosta Browne approaches Pinot Noir as a mosaic of singular sites—each block, clone, and exposure vinified independently to preserve nuance. Native ferments and temperature-disciplined cellar work reveal the subtleties of soil, fog patterns, and coastal influence. The result is a portfolio defined by precision and depth: powerful yet balanced Pinots with luminous fruit, fine structure, and unmistakable site signatures. Many of these small-lot wines are made in highly limited quantities and largely allocated to mailing-list members and winery visitors. It is terroir translated through intent—a philosophy of listening closely and intervening sparingly to allow every vineyard to speak with clarity.',

  sections: [
    {
      title: 'Burgundian Obsession, California Soul',
      content: 'PINOT NOIR transforms landscape into emotion—demanding in the vineyard, delicate in the cellar, and transcendent in the glass. Across The Duckhorn Collection, it finds three distinct voices that together define America\'s Burgundian lineage: Kosta Browne, Goldeneye, and Calera.'
    },
    {
      title: 'Craft Without Compromise',
      content: 'Every detail in Kosta Browne\'s cellar is built around honoring delicacy. Micro-fermentations, careful extraction, and thoughtful élevage preserve the grape\'s natural energy while refining texture and depth. The team balances intuition with technical rigor, shaping wines that are expressive without heaviness and structured without austerity. It is a modern, disciplined approach supporting a portfolio of roughly a dozen rare, site-specific Pinot Noir and Chardonnay expressions, widely renowned and sought after by collectors and wine lovers.'
    }
  ],

  wines: [
    {
      name: '4-Barrel California Pinot Noir',
      description: 'Created as a thank you to our earliest collectors, produced from just four barrels each vintage.'
    },
    {
      name: 'Gap\'s Crown Vineyard Sonoma Coast Pinot Noir',
      description: 'Reflective of an extraordinary 20-year partnership that began shortly after the vineyard was planted, and a cherished favorite.'
    },
    {
      name: 'Beaune Premier Cru Burgundy Pinot Noir',
      description: 'An elegant and exceptional expression of the Cote d\'Or region and its revered hillsides.'
    }
  ]
};
```

#### CALERA
```javascript
const caleraData = {
  name: 'CALERA',
  tagline: 'Mountain Purity & Limestone Precision',
  heroDescription: 'Calera remains one of California\'s most distinctive expressions of Pinot Noir. Perched high on Mt. Harlan, the vineyards rise from rare limestone soils, fierce diurnal shifts, and conditions that challenge the vines at every turn. The wines are shaped by altitude and austerity—native fermentations, whole-cluster structure, gravity-fed handling, and long, patient aging that preserves purity and lift.',

  sections: [
    {
      title: 'Mt. Harlan: A Singular American AVA',
      content: 'Calera\'s philosophy has remained unchanged since its founding: honor the vineyard, respect the mountain, and let the site speak with clarity. The result is Pinot Noir that feels sculpted more by geology than technique—precise, mineral, and unmistakably Calera.'
    }
  ],

  wines: [
    {
      name: 'Calera Jensen Vineyard Pinot Noir',
      description: 'Vibrant and expressive, with red cherry, plum, spice, supple tannins, energetic acidity, and a beautifully balanced finish.'
    }
  ]
};
```

#### GOLDENEYE
```javascript
const goldeneyeData = {
  name: 'GOLDENEYE',
  tagline: 'The Voice of Anderson Valley',
  heroDescription: 'Goldeneye channels the coastal intensity of Anderson Valley into Pinot Noirs defined by depth, tone, and a vivid sense of place. Its estate vineyards, ranging from warm mid-valley slopes to wind-swept deep-end ridges, offer a dramatic palette of textures. Sustainable farming, measured extraction, and a modernized oak program allow the valley\'s natural signatures, redwoods, ocean breezes, Pennyroyal herbs, to find clear expression in the wines.',

  sections: [
    {
      title: 'Pinot Noir with Coastal Intensity',
      content: 'Confluence brings generosity and mid-palate weight; Gowan Creek contributes structure, richness, and natural acidity; The Narrows adds spice, tension, and cool-climate definition. Together, they form a uniquely expressive portfolio. At the pinnacle is 10 Degrees, crafted from the vintage\'s most compelling barrels—an elevated snapshot of the valley\'s contrasts in one composition.'
    }
  ],

  wines: [
    {
      name: 'Goldeneye Anderson Valley Pinot Noir',
      description: 'Elegant and nuanced, offering cherry, herbal lift, subtle earth, silky tannins, fresh acidity, and a long finish.'
    }
  ]
};
```

#### SONOMA-CUTRER
```javascript
const sonomaCutrerData = {
  name: 'SONOMA-CUTRER',
  tagline: 'Crisp by Design',
  heroDescription: 'Sonoma-Cutrer was founded on one idea: perfecting Chardonnay. Four decades later, the winery remains synonymous with crisp, balanced, terroir-driven Chardonnay shaped by the Russian River Valley\'s cool climate. Vineyard-specific harvesting, barrel fermentation, selected French oak, and modest malolactic preserve brightness and precision. Les Pierres\' river-rock soils add minerality, while The Cutrer vineyard brings richness and breadth. The style is refined, consistent, and deeply satisfying.',

  sections: [
    {
      title: 'A Chardonnay for the Table',
      content: 'While many wineries chase range, Sonoma-Cutrer has spent decades refining a single expression: Chardonnay defined by balance and flavor—bright, crisp, composed, and inherently food-friendly.'
    }
  ],

  wines: [
    {
      name: 'Sonoma-Cutrer Les Pierres',
      description: 'Crisp and fruit-forward, with citrus, green apple, mineral notes, bright acidity, and a smooth, lingering texture.'
    }
  ]
};
```

### Wine Spectator Recommended Releases
```javascript
const wineRatings = {
  duckhornVineyards: [
    { wine: 'Merlot Napa Valley Three Palms Vineyard 2022', score: 94 },
    { wine: 'Merlot Napa Valley Carneros 2022', score: 93 },
    { wine: 'Merlot Napa Valley Three Palms Vineyard 2021', score: 92 },
    { wine: 'Cabernet Sauvignon Stags Leap District 2021', score: 93 },
    { wine: 'Cabernet Sauvignon Napa Valley Three Palms Vineyard 2021', score: 93 },
    { wine: 'Merlot Napa Valley Rector Creek Vineyard 2020', score: 91 },
    { wine: 'Merlot Napa Valley Three Palms Vineyard 2019', score: 94 },
    { wine: 'Merlot Carneros Hyde Vineyard 2019', score: 93 },
    { wine: 'Cabernet Sauvignon Howell Mountain 2019', score: 93 },
    { wine: 'Merlot Napa Valley Three Palms Vineyard 2018', score: 94 },
    { wine: 'Cabernet Sauvignon Napa Valley Three Palms Vineyard 2018', score: 93 },
    { wine: 'The Discussion Napa Valley 2017', score: 96 }
  ],
  kostaBrowne: [
    { wine: 'Pinot Noir Willamette Valley Eola Springs Vineyard 2022', score: 93 },
    { wine: 'Chardonnay Russian River Valley Bootlegger\'s Hill 2022', score: 94 },
    { wine: 'Pinot Noir Willamette Valley 2021', score: 93 },
    { wine: 'Chardonnay Russian River Valley El Diablo 2021', score: 93 },
    { wine: 'Pinot Noir Sta. Rita Hills 2020', score: 93 }
  ],
  caleraVineyards: [
    { wine: 'Pinot Noir Mt. Harlan Jensen Vineyard 2022', score: 94 },
    { wine: 'Pinot Noir Mt. Harlan Ryan Vineyard 2021', score: 96 },
    { wine: 'Pinot Noir Mt. Harlan de Villiers Vineyard 2021', score: 95 }
  ],
  goldeneye: [
    { wine: 'Pinot Noir Anderson Valley Gowan Creek Vineyard 2022', score: 92 },
    { wine: 'Pinot Noir Anderson Valley 2021', score: 92 },
    { wine: 'Pinot Noir Anderson Valley Gowan Creek Vineyard 2020', score: 93 }
  ],
  sonomaCutrer: [
    { wine: 'Chardonnay Sonoma Coast 2022', score: 90 },
    { wine: 'Chardonnay Sonoma Coast 2021', score: 90 },
    { wine: 'Chardonnay Sonoma Coast Winemaker\'s Release Limited No. 40 Edition 2019', score: 91 }
  ]
};
```

---

## Component Implementation Guide

### 1. Hero Section with Parallax
```tsx
// components/sections/Hero.tsx
'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen overflow-hidden bg-cream">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-warm-gray-100 to-cream" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center px-6"
      >
        {/* Wine Spectator badge */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="label text-warm-gray-800 mb-4"
        >
          Sponsored Special Feature
        </motion.p>

        {/* Wine Spectator Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="font-script text-5xl md:text-7xl text-ws-gold-500 italic">
            Wine Spectator
          </h1>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-12"
        >
          <p className="label text-forest-700 mb-2">THE</p>
          <h2 className="headline-hero text-warm-gray-900">
            DUCKHOR<span className="text-forest-700">N</span>
          </h2>
          <p className="headline-section text-warm-gray-800 -mt-2">COLLECTION</p>
          <p className="tagline text-ws-gold-600 mt-4">
            Defining American Fine Wine
          </p>
        </motion.div>

        {/* Wine Bottles Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          style={{ y }}
          className="relative w-full max-w-5xl h-[400px] md:h-[500px]"
        >
          <Image
            src="/images/FRONT_COVER_0428-flat-edit1.jpg"
            alt="The Duckhorn Collection Wines"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Taglines */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-0 right-0 flex justify-center gap-8 text-sm text-warm-gray-800"
        >
          <span className="tagline">Crafting Timeless Wines From Iconic Terroirs</span>
          <span className="text-ws-gold-500">|</span>
          <span className="tagline">Celebrating <strong>50 YEARS</strong> Of Napa Valley Heritage</span>
        </motion.div>
      </motion.div>
    </section>
  );
};
```

### 2. Glass Card Component
```tsx
// components/ui/GlassCard.tsx
'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'light' | 'dark' | 'wine';
}

export const GlassCard = ({ children, className = '', variant = 'light' }: GlassCardProps) => {
  const variants = {
    light: 'bg-white/60 border-white/40',
    dark: 'bg-warm-gray-900/60 border-white/10',
    wine: 'bg-wine-900/40 border-ws-gold-500/20'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`
        relative
        backdrop-blur-xl
        ${variants[variant]}
        border
        rounded-2xl
        shadow-[0_8px_32px_rgba(0,0,0,0.08)]
        overflow-hidden
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
```

### 3. Winemaker Card with Hover
```tsx
// components/WinemakerCard.tsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface WinemakerCardProps {
  name: string;
  title: string;
  winery: string;
  image: string;
  quote: string;
  onClick?: () => void;
}

export const WinemakerCard = ({ name, title, winery, image, quote, onClick }: WinemakerCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className="cursor-pointer group text-center"
    >
      {/* Circular Image with Gold Border on Hover */}
      <motion.div
        className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden"
        whileHover={{ scale: 1.05 }}
      >
        <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-ws-gold-500 transition-colors z-10" />
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Name & Info */}
      <h3 className="font-serif text-xl text-warm-gray-900">{name}</h3>
      <p className="text-sm text-ws-gold-600">{winery}</p>

      {/* Quote on Hover */}
      <motion.p
        initial={{ opacity: 0, height: 0 }}
        whileHover={{ opacity: 1, height: 'auto' }}
        className="text-sm text-warm-gray-600 mt-3 italic max-w-xs mx-auto"
      >
        "{quote.substring(0, 100)}..."
      </motion.p>
    </motion.div>
  );
};
```

### 4. Timeline Component
```tsx
// components/sections/Milestones.tsx
'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface Milestone {
  year: string;
  title: string;
  description: string;
  winery: string;
  highlight?: boolean;
}

export const Milestones = ({ milestones }: { milestones: Milestone[] }) => {
  const containerRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: containerRef });

  return (
    <section className="py-24 bg-wine-950">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="label text-ws-gold-400 mb-2">50 Years of The</p>
          <h2 className="headline-section text-white mb-4">
            THE MILESTONES THAT BUILT A COLLECTION
          </h2>
          <p className="tagline text-ws-gold-500">And Helped Define American Fine Wine</p>
        </motion.div>
      </div>

      {/* Horizontal Scrolling Timeline */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-8 px-6 pb-8"
      >
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`
              flex-shrink-0 w-80 snap-center
              ${milestone.highlight ? 'scale-105' : ''}
            `}
          >
            <div className={`
              h-full p-6 rounded-2xl
              ${milestone.highlight
                ? 'bg-ws-gold-500/20 border border-ws-gold-500/40'
                : 'bg-white/5 border border-white/10'
              }
              backdrop-blur-sm
            `}>
              <span className={`
                text-4xl font-serif
                ${milestone.highlight ? 'text-ws-gold-400' : 'text-white/60'}
              `}>
                {milestone.year}
              </span>
              <h3 className="font-serif text-xl text-white mt-4 mb-3">
                {milestone.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {milestone.description}
              </p>
              <span className="inline-block mt-4 text-xs text-ws-gold-500 uppercase tracking-wider">
                {milestone.winery}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
```

### 5. Featured Wines Interactive Section
```tsx
// components/sections/FeaturedWines.tsx
'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const wines = [
  { id: 'duckhorn', name: 'Duckhorn', image: '/images/wine-duckhorn.png' },
  { id: 'kosta-browne', name: 'Kosta Browne', image: '/images/wine-kosta-browne.png' },
  { id: 'calera', name: 'Calera', image: '/images/wine-calera.png' },
  { id: 'goldeneye', name: 'Goldeneye', image: '/images/wine-goldeneye.png' },
  { id: 'sonoma-cutrer', name: 'Sonoma-Cutrer', image: '/images/wine-sonoma-cutrer.png' },
];

export const FeaturedWines = () => {
  const [activeWine, setActiveWine] = useState<string | null>(null);

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="headline-section text-warm-gray-900">FEATURED WINES</h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-ws-gold-500 to-transparent mx-auto mt-4" />
        </motion.div>

        {/* Wine Bottles Row */}
        <div className="flex justify-center items-end gap-4 md:gap-8">
          {wines.map((wine, index) => (
            <motion.div
              key={wine.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setActiveWine(wine.id)}
              onHoverEnd={() => setActiveWine(null)}
              className="relative cursor-pointer"
            >
              <motion.div
                animate={{
                  scale: activeWine === wine.id ? 1.1 : 1,
                  y: activeWine === wine.id ? -20 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="relative w-20 md:w-28 h-48 md:h-64"
              >
                <Image
                  src={wine.image}
                  alt={wine.name}
                  fill
                  className="object-contain drop-shadow-xl"
                />
              </motion.div>

              {/* Label */}
              <AnimatePresence>
                {activeWine === wine.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap"
                  >
                    <span className="text-sm font-medium text-warm-gray-900">
                      {wine.name}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
```

---

## Cursor Prompts to Use

### Initial Setup
```
Create a Next.js 14 project with TypeScript and Tailwind CSS for a premium wine landing page. Set up the folder structure with:
- /src/app for pages
- /src/components/ui for reusable components
- /src/components/sections for page sections
- /src/lib for data and utilities

Install framer-motion and react-intersection-observer.
```

### Building Sections
```
Using the CURSOR_IMPLEMENTATION_GUIDE.md file, build the Hero section with:
- Wine Spectator branding at top
- "THE DUCKHORN COLLECTION" headline with the distinctive "N" styling
- The wine bottles image with parallax scroll effect
- Taglines at the bottom
- Use glassmorphism and Framer Motion animations
```

```
Create the "Meet the Makers" section with 5 winemaker cards arranged horizontally.
Each card should have:
- Circular portrait image with gold border on hover
- Name and winery
- Expand to show quote on click/hover
Use the winemakers data from CURSOR_IMPLEMENTATION_GUIDE.md
```

```
Build the Milestones timeline section with horizontal scrolling cards.
Highlight the Wine Spectator Wine of the Year awards (2011 and 2017).
Use the milestones data from the guide.
Dark wine-colored background with gold accents.
```

### Adding Animations
```
Add scroll-triggered animations to all sections using Framer Motion:
- Fade up reveals for text
- Stagger children for grid items
- Parallax effect on images
- Smooth hover states on interactive elements
```

### Responsive Design
```
Make all components fully responsive:
- Stack wine bottles 2x3 on mobile
- Single column layouts on mobile
- Adjust typography scale
- Touch-friendly tap targets
```

---

## File Structure
```
duckhorn-ws/
├── public/
│   └── images/
│       ├── FRONT_COVER_0428-flat-edit1.jpg
│       ├── Three-Palms-Vineyard.jpg
│       ├── Kosta-Browne-Winery2.jpg
│       ├── [all other images...]
│       └── winemakers/
│           ├── renee-ary.jpg
│           ├── julien-howsepian.jpg
│           └── [...]
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/
│   │   │   ├── GlassCard.tsx
│   │   │   ├── Button.tsx
│   │   │   └── AnimatedText.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Perspective.tsx
│   │   │   ├── FeaturedWines.tsx
│   │   │   ├── MeetTheMakers.tsx
│   │   │   ├── Video.tsx
│   │   │   ├── Milestones.tsx
│   │   │   ├── WineryDetail.tsx
│   │   │   └── Ratings.tsx
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   └── lib/
│       ├── data.ts (all content data)
│       └── animations.ts (reusable variants)
├── tailwind.config.js
└── package.json
```

---

## Notes for Implementation

1. **Image Optimization**: All images should be optimized and served via Next.js Image component
2. **Fonts**: Load Playfair Display and Cormorant Garamond from Google Fonts
3. **Performance**: Use `viewport={{ once: true }}` on scroll animations to prevent re-triggering
4. **Accessibility**: Ensure proper contrast ratios and keyboard navigation
5. **Video**: The video section needs an actual video URL - use a placeholder or embed from YouTube/Vimeo

Good luck building this premium landing page!
