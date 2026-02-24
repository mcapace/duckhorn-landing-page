// Content data from CURSOR_IMPLEMENTATION_GUIDE.md

// Bottle images from /images/bottles (BG for Featured Wines cards + winery pages, Full for fallback)
export const featuredWines = [
  { id: "duckhorn", name: "Duckhorn", brand: "DUCKHORN VINEYARDS", tagline: "Five Decades In. Still Defining What's Next.", image: "/images/bottles/Duckhorn-NoBG.png", imageFull: "/images/bottles/Duckhorn-Full.jpg", imageBG: "/images/bottles/Duckhorn-BG.png" },
  { id: "kosta-browne", name: "Kosta Browne", brand: "KOSTA BROWNE", tagline: "The Art of Site", image: "/images/bottles/Kostabrowne-NoBG.png", imageFull: "/images/bottles/KostaBrowne-Full.jpg", imageBG: "/images/bottles/KostaBrowne-BG.png" },
  { id: "calera", name: "Calera", brand: "CALERA", tagline: "Mountain Purity & Limestone Precision", image: "/images/bottles/Calera-NoBG.png", imageFull: "/images/bottles/Calera-Full.jpg", imageBG: "/images/bottles/Calera-BG.png" },
  { id: "goldeneye", name: "Goldeneye", brand: "GOLDENEYE", tagline: "The Voice of Anderson Valley", image: "/images/bottles/Goldeneye-NoBG.png", imageFull: "/images/bottles/Goldeneye-Full.jpg", imageBG: "/images/bottles/Goldeneye-BG.png" },
  { id: "sonoma-cutrer", name: "Sonoma-Cutrer", brand: "SONOMA-CUTRER", tagline: "Crisp by Design", image: "/images/bottles/Sonoma-NoBG.png", imageFull: "/images/bottles/SonomaCutrer-Full.jpg", imageBG: "/images/bottles/Sonoma-BG.png" },
];

// Winemaker headshots per reference: Renée=Duckhorn28217; Julien=47; Kristen=74; Mike=94; Cara=13 (Dawn Heumann series)
export const winemakers = [
  {
    slug: "renee-ary",
    name: "Renée Ary",
    title: "Vice President of Winemaking",
    winery: "Duckhorn Vineyards",
    image: "/images/Renee.jpg",
    quote:
      "Duckhorn's commitment to detail and hospitality is unmistakable. Every wine, every visit, reflects a deep respect for place—and a belief that great wines create meaningful moments.",
    qAndA: [
      {
        question: "Duckhorn helped define American Merlot. What is the north star of Duckhorn Merlot today?",
        answer:
          "Merlot is where Duckhorn started—supple, friendly texture, but built at a luxury level. The goal is a serious wine that is also immediately appealing: silky, layered, with bright acidity, and a perception of sweetness that comes only from fruit.",
      },
      {
        question: "Duckhorn is celebrating its 50th anniversary. How has the estate evolved over that time?",
        answer:
          "The property tells that story. What is now the Estate House was built in 1999; before that, this was Glass Mountain Nursery, with three tanks, a swimming pool, and a simple vineyard house where Dan and Margaret hosted people for dinner. Over time, buildings, tank pads, and barrel rooms were added as the winery grew. It was never a single grand design—it was an evolution. Even with that growth, it still feels like home, and that sense of welcome remains central to who we are.",
      },
      {
        question: "Hospitality has always been part of Duckhorn's identity. How intentional was that from the beginning?",
        answer:
          "It was fundamental. For the first 25 years there was essentially no marketing in the modern sense—just word of mouth. Great wine, shared generously. Three Palms and early Napa Valley Cabernet were sold out of the back of Dan's car as he drove the coast, making personal connections. The estate tasting room was anticipated long before it existed, because the brand already had a following built on trust and experience.",
      },
      {
        question: "You often describe managing lots like a \"spice rack.\" What does that mean in practice?",
        answer:
          "Everything is hand-picked, hand-sorted, and kept separate through fermentation and aging. Reds go whole berry to tank; whites are whole cluster to press. Every block, every pick, is its own lot. Later, as we approach bottling, I have a full rack of components to work from. It's more labor-intensive and more complex to manage, but it gives us nuance, flexibility, and precision in the final blend.",
      },
      {
        question: "Three Palms Vineyard holds near-mythic status. Why does it remain so singular?",
        answer:
          "I work with sites all over Napa and haven't found another vineyard that behaves like Three Palms. The soils are intensely rocky from an ancient creek bed, which gives the wine concentration, stamina, and a distinctive earthy edge. When Duckhorn acquired full access to the vineyard, we were able to fully realize its personality. It helped define what New World Merlot could be, and it still sets the benchmark.",
      },
      {
        question: "When visitors leave Duckhorn today, what do you hope they carry with them?",
        answer:
          "Constancy with evolution. You can taste the times—shifts in farming, shifts in style—but there's also a throughline of dependability, authenticity, and care. The wines are deeply rooted, and very much alive in the present.",
      },
    ],
  },
  {
    slug: "julien-howsepian",
    name: "Julien Howsepian",
    title: "Winemaker",
    winery: "Kosta Browne",
    image: "/images/Julien.jpg",
    quote:
      "Great Pinot Noir doesn't shout—it reveals. Its beauty lies in precision, in purity, and in the way it captures landscape with effortless clarity. Few varietals connect place and emotion so completely.",
    qAndA: [
      {
        question: "Kosta Browne is known for precision Pinot Noir. What defines your approach in the cellar today?",
        answer:
          "Pinot demands attention without interference. Our job is to preserve nuance, not impose control. Every vineyard, block, and clone is fermented separately, often in very small lots. That scale lets the fruit speak clearly. Precision is not about polish—it's about listening.",
      },
      {
        question: "You work with an unusually high number of small fermenters. Why is that important?",
        answer:
          "We run close to 100 open-top fermenters, ranging from three to eight tons. It's a logistical challenge, but it's the only way to preserve site identity. Each vineyard behaves differently, and within each vineyard, each block has its own voice. Keeping those distinctions intact gives us real flexibility later.",
      },
      {
        question: "You've described your Pinot Noir philosophy as \"controlled freedom.\" What does that mean in practice?",
        answer:
          "Pinot is at its best when you resist the urge to over-correct, allowing the wine to become what it wants to be. Sometimes the right decision is to do nothing. Consistency isn't sameness—it's signature. Our job is to guide, not dominate.",
      },
      {
        question: "Kosta Browne has expanded well beyond its early coastal roots. How has that shaped the wines?",
        answer:
          "The expansion across California—from Santa Lucia Highlands to Anderson Valley to Sta. Rita Hills—gave us a deeper understanding of Pinot's range. Each region brings its own structure, energy, and expression. The challenge is honoring those differences while maintaining a clear through-line of balance and precision.",
      },
      {
        question: "Direct-to-consumer has always been central to Kosta Browne. Why does that matter?",
        answer:
          "Most of our wine is sold directly to members, which creates a real relationship. Bottles get opened at dinners, shared among friends, and talked about. That word-of-mouth connection is still the most powerful driver of who we are.",
      },
      {
        question: "After everything Kosta Browne has built, what remains the core idea?",
        answer:
          "Relentless improvement. Pinot teaches humility. Every vintage brings new questions, and every vineyard reveals itself differently over time. We never assume we've arrived.",
      },
    ],
  },
  {
    slug: "kristen-mcmahan",
    name: "Kristen McMahan",
    title: "Winemaker",
    winery: "Goldeneye",
    image: "/images/Kristen.jpg",
    quote:
      "Goldeneye Pinot Noir carries the imprint of Anderson Valley—wild, aromatic, and resonant. It's a region defined by patience, precision, and coastal character.",
    qAndA: [
      {
        question: "Goldeneye was Duckhorn's first move beyond Napa. Why was Anderson Valley the right home for Pinot Noir?",
        answer:
          "Dan and Margaret were drawn to sites that felt undiscovered, cool, and capable of elegance. Anderson Valley offered all of that. It was also a courageous choice—a tight-knit community with its own rhythm. Over time, we became part of the fabric of the valley.",
      },
      {
        question: "How would you describe Anderson Valley to someone who has never visited?",
        answer:
          "It's intimate and slightly wild. The valley is narrow, framed by redwoods, with coastal air rolling in daily. You can smell salinity and Pennyroyal on certain afternoons. There's a sense of calm and intention here that shapes the wines.",
      },
      {
        question: "You oversee several estate vineyards. How do they differ?",
        answer:
          "Each site has a distinct personality. Confluence is warmer, red fruit driven, and exudes classic coastal elegance. Gowan Creek delivers color, bold energy, and natural acidity. The Narrows is rugged and dramatic, with intense aromatics. Cerise brings tension and structure. For a Pinot winemaker, that diversity is a gift.",
      },
      {
        question: "Goldeneye's pinnacle wine is Ten Degrees. What defines it?",
        answer:
          "It's crafted from the most evocative lots that capture both the essence of the site and the vintage, blended through many iterations until the wine feels inevitable. The name is a nod to the daily temperature spread between Confluence and The Narrows. It captures the full breadth of the estate.",
      },
      {
        question: "Oak use has evolved at Goldeneye. Why the shift?",
        answer:
          "Early on, Goldeneye leaned heavily into new oak. Over time, we've pulled back to let place come through more clearly. Oak should frame, support, and complement the wine, not overshadow it.",
      },
      {
        question: "What should Goldeneye Pinot Noir communicate the moment it hits the glass?",
        answer:
          "Sense of place. If you've been here, the wine should take you back. If you haven't, it should encourage you to visit and explore.",
      },
    ],
  },
  {
    slug: "mike-waller",
    name: "Mike Waller",
    title: "Winemaker",
    winery: "Calera",
    image: "/images/Mike.jpg",
    quote:
      "Calera Pinot Noir reflects a landscape as much as a grape. Limestone, altitude, and discipline converge to create wines of rare clarity and soul.",
    qAndA: [
      {
        question: "Calera is often described as a California Pinot Noir pioneer. What set it apart from the beginning?",
        answer:
          "Josh Jensen believed Pinot belonged in California long before that was accepted. He went straight to the Burgundian model—limestone soils, single-vineyard wines, whole-cluster fermentation. That conviction defined Calera from the start.",
      },
      {
        question: "Why was limestone so essential to Josh's vision?",
        answer:
          "Burgundy's great vineyards sit on limestone, and Josh spent years searching for it in California. Mt. Harlan offered thin soils, little water, and dramatic temperature swings. Vines struggle there, and that struggle translates into intensity and structure.",
      },
      {
        question: "Calera has long embraced whole-cluster fermentation. Why keep that approach?",
        answer:
          "Whole cluster allows the vineyard to speak. We use the same restrained winemaking for every Pinot—native fermentation, gravity flow, minimal intervention. The cellar stays quiet so the site can express itself.",
      },
      {
        question: "You work with some very old vines. How does that shape decision-making?",
        answer:
          "Old vines give extraordinary character, but yields are tiny. Sometimes hard choices have to be made—replanting for the next fifty years instead of holding on sentimentally. The long view always comes first.",
      },
      {
        question: "What do you see as Calera's role in the broader Pinot story today?",
        answer:
          "Being early—and being right. My job isn't to rewrite Josh's vision, but to carry it forward with integrity so the next generation inherits both a philosophy and a place worth defending.",
      },
    ],
  },
  {
    slug: "cara-morrison",
    name: "Cara Morrison",
    title: "Winemaker",
    winery: "Sonoma-Cutrer",
    image: "/images/Cara.jpg",
    quote:
      "Sonoma-Cutrer has spent forty years refining one philosophy—Chardonnay shaped by balance, place, and precision. The result is elegance in every glass.",
    qAndA: [
      {
        question: "Sonoma-Cutrer is synonymous with Chardonnay. Was that always the intent?",
        answer:
          "Yes. From the beginning, the focus was singular: do one thing exceptionally well. In the Russian River Valley, Chardonnay clearly thrived, so the winery was built around barrel-fermented Chardonnay long before it was common.",
      },
      {
        question: "How would you define the Sonoma-Cutrer Chardonnay style? How do you extend this style to the single vineyard Les Pierres or The Cutrer?",
        answer:
          "Our Chardonnay style is consistent, crisp, and balanced. Our core wines, Sonoma Coast and Russian River Ranches, highlight bright acidity and a fruit-forward, refreshing profile that's never over-oaked or buttery. In our reserve, single-vineyard Chardonnays, Les Pierres and The Cutrer, that same foundation gains more depth and texture while preserving pure vineyard expression. That cohesive style of bright acidity and balanced oak is what makes Sonoma-Cutrer such a trusted home for Chardonnay.",
      },
      {
        question: "You use malolactic fermentation, yet the wines remain vibrant. Why?",
        answer:
          "Malolactic is there for structure and mouthfeel, not for butter. Combined with restrained new oak, it keeps the wines energetic and food-friendly.",
      },
      {
        question: "Oak plays a central role in the program. How do you manage it so precisely?",
        answer:
          "About three-quarters of the wine is barrel-fermented, but new oak averages under 10 percent. We've worked with the same coopers and the same French stave mill for decades. That continuity stabilizes the style.",
      },
      {
        question: "Consistency is a hallmark of Sonoma-Cutrer. How do you maintain it across vintages?",
        answer:
          "Through vineyards, barrels, and people. We farm extensive estate fruit, maintain long-term cooper relationships, and have had only four winemakers in over forty years. Evolution happens quietly.",
      },
    ],
  },
];

export const milestonesIntro = {
  headline: "50 YEARS OF THE DUCKHORN COLLECTION",
  title: "A MILESTONE THAT BUILT A COLLECTION",
  subtitle: "Napa Valley, Columbia Valley & Anderson Valley",
  paragraph:
    "Dan and Margaret Duckhorn founded Duckhorn Vineyards in 1976 with a conviction that restraint, balance, and long-term thinking could define American fine wine. Fifty years later, that vision has grown into a collection of world-class estates—each with its own story, each united by a shared commitment to excellence.",
};

export const portraitOfPlace = {
  title: "A Portrait of Place",
  description:
    "California's great wine regions form the foundation of the Collection. From the valley floor to coastal ridgelines and mountain slopes, each estate reflects a different facet of California terroir—Napa warmth, Sonoma precision, Anderson Valley intensity, and the singular character of Mt. Harlan.",
  regions: ["Duckhorn Vineyards", "Kosta Browne", "Calera", "Goldeneye", "Sonoma-Cutrer"],
};

export const milestones = [
  {
    year: "1976",
    title: "A Vineyard-First Vision Takes Root",
    description:
      "Duckhorn Vineyards is established in Napa Valley with an early, defining commitment to Merlot—setting a house style centered on balance and elegance at a time when Cabernet Sauvignon dominated much of the valley.",
    winery: "Duckhorn",
    image: "/images/Dan-Duckhorn-during-harvest.jpg",
  },
  {
    year: "Early 1980s",
    title: "Defining Cool-Climate California Chardonnay",
    description:
      "Sonoma-Cutrer emerges as an early leader in Russian River Valley Chardonnay, establishing a Burgundian-influenced model built on site specificity, crisp acidity and balance—helping shape America's modern love affair with fine Chardonnay.",
    winery: "Sonoma-Cutrer",
    image: "/images/DUCKHORN-US-1200-e1550307961298-removebg-preview.png",
  },
  {
    year: "Mid-1980s–Today",
    title: "Three Palms Vineyard",
    description:
      "THREE PALMS VINEYARD reveals itself early as a singular Merlot site—delivering grapes with exceptional structure and depth. Decades of dedication culminate in Duckhorn's acquisition of the vineyard in 2015, securing long-term stewardship of America's most important Merlot site.",
    winery: "Duckhorn",
    image: "/images/Three-Palms-Vineyard.jpg",
  },
  {
    year: "1996",
    title: "Goldeneye Founded in Anderson Valley",
    description:
      "Duckhorn expands beyond Napa, establishing Goldeneye and signaling an early, deliberate commitment to cool-climate Pinot Noir.",
    winery: "Goldeneye",
    image: "/images/Screenshot-2025-11-24-at-5.29.03 PM.jpg",
  },
  {
    year: "1997",
    title: "A Portrait of Place",
    description:
      "California's great wine regions form the foundation of the Collection. From the valley floor to coastal ridgelines and mountain slopes, each estate reflects a different facet of California terroir—Napa warmth, Sonoma precision, Anderson Valley intensity, and the singular character of Mt. Harlan.",
    winery: "Collection",
    image: "/images/Screenshot 2026-01-22 at 10.53.30 AM.png",
  },
  {
    year: "2011",
    title: "Wine Spectator Wine of the Year",
    description:
      "THE 2009 KOSTA BROWNE Sonoma Coast Pinot Noir is named Wine Spectator Wine of the Year, recognizing Pinot Noir of rare precision and cementing Kosta Browne's place among America's most influential fine-wine estates.",
    winery: "Kosta Browne",
    highlight: true,
    awardLabel: "WS Wine of the Year 2011",
    image: "/images/TOP1_123111.jpg",
  },
  {
    year: "2014",
    title: "Wine Spectator Wine of the Year",
    description:
      "THE 2014 THREE PALMS VINEYARD earns Wine Spectator Wine of the Year, marking Renée Ary's first vintage and affirming the wine's enduring excellence and the lasting distinction of its vineyard.",
    winery: "Duckhorn",
    highlight: true,
    awardLabel: "WS Wine of the Year 2017",
    image: "/images/TopLede1_123117.jpg",
  },
  {
    year: "2015",
    title: "Three Palms & Kosta Browne Join the Collection",
    description:
      "Duckhorn acquires full ownership of Three Palms Vineyard, securing America's most iconic Merlot site. Kosta Browne joins The Duckhorn Portfolio, uniting exceptional Pinot Noir estates.",
    winery: "Collection",
    highlight: true,
    image: "/images/NatandCody_Paraduxx_250610_0532.jpg",
  },
  {
    year: "2017",
    title: "Wine Spectator Wine of the Year",
    description:
      "THE 2014 THREE PALMS VINEYARD earns Wine Spectator Wine of the Year, marking Renée Ary's first vintage and affirming the wine's enduring excellence and the lasting distinction of its vineyard.",
    winery: "Duckhorn",
    highlight: true,
    awardLabel: "WS Wine of the Year 2017",
    image: "/images/TopLede1_123117.jpg",
  },
  {
    year: "2025",
    title: "The Duckhorn Collection Opens",
    description:
      "A new Napa Valley destination opens on Silverado Trail, where expanded tastings and culinary experiences allow guests to experience the full Duckhorn Collection within a beautiful vineyard setting.",
    winery: "Collection",
    image: "/images/NatandCody_Paraduxx_250610_0532.jpg",
  },
];

export const perspectiveContent = {
  title: "THE DUCKHORN PERSPECTIVE",
  subtitle:
    "A family of world-class wineries united by a singular pursuit of excellence",
  tagline: "A Legacy of Excellence and Innovation",
  letter: `FOR FIFTY YEARS, The Duckhorn Collection has stood at the center of American fine wine— rooted in vineyard integrity, generational stewardship, and the belief that exceptional wines begin with exceptional sites. Ours is a distinctly American story, shaped by landscape, craftsmanship, and a hospitality that is both timeless and modern.

This philosophy comes fully to life in our new Napa Valley home on the Silverado Trail. Here, guests experience our portfolio through thoughtful tastings, seasonal pairings from our world-class culinary team, and an atmosphere defined by warmth, ease, and a remarkable sense of place. It is a setting that reflects the spirit of our founders— welcoming, refined, and deeply connected to the vineyards that shape our wines.

The wineries featured in the Collection each carry forward our shared vision: winemaking excellence, respect for land, and a deep understanding of how place defines character. Together, they represent Napa warmth and structure, coastal intensity, limestone purity, cool-climate precision, and the breadth of California's most compelling sites.

This feature highlights five of our wineries and the people and philosophies behind the wines—the growers, winemakers, and stewards whose craft and commitment elevate every bottle. Their work reflects what American fine wine can be today—and where we are headed next.`,
  signature: "Robert Hanson",
  title_line: "CEO, The Duckhorn Collection",
  founderQuote:
    "We believed from the start that great wine begins with great vineyards—and that hospitality and quality could define American fine wine.",
  founderName: "Dan Duckhorn",
  founderTitle: "Founder",
  founderImage: "/images/Dan-Duckhorn-during-harvest.jpg",
};

export const perspectiveImages = [
  { src: "/images/DV-Harvest---9.25.25-27.jpg", alt: "Harvest at Duckhorn" },
  { src: "/images/BarrelRoomWithGalleryView_DSC4738_25pct-(1).jpg", alt: "Barrel room" },
  { src: "/images/Three-Palms-Vineyard.jpg", alt: "Three Palms Vineyard" },
  { src: "/images/pd-courtyard-new.jpg", alt: "Courtyard" },
  { src: "/images/CeriseNov18_Drone_9.jpg", alt: "Vineyard drone shot" },
  { src: "/images/DV-Harvest---9.25.25-29.jpg", alt: "Vineyard harvest" },
];

export const robSorensonData = {
  name: "Rob Sorenson",
  title: "Director of North Coast Estate Vineyards",
  image: "/images/Rob.jpg",
  intro:
    "Rob Sorenson oversees a far-reaching estate portfolio—mountain Cabernet, benchmark Merlot, and cool-climate Pinot Noir and Chardonnay—built on one conviction: the character of the wine is decided long before the cellar.",
  context: "This conversation takes place at Stout Vineyard on Howell Mountain, one of the estate's highest-elevation sites.",
  qAndA: [
    {
      question:
        "You manage vineyards across an enormous stretch of Northern California. What does your role truly cover?",
      answer:
        "I oversee our North Coast estate vineyards, nineteen sites totaling roughly 650 acres, stretching from Carneros in the south up through Mendocino and Anderson Valley. It's about a 100-mile span, so no two days ever look the same. During peak periods, especially harvest, we can have close to 200 people working across that footprint at once. My role is making sure all of those vineyards, teams, and timelines stay aligned, while still farming each site for its individual character.",
    },
    {
      question:
        "Why does a high-elevation site like Stout Vineyard on Howell Mountain matter within the broader portfolio?",
      answer:
        "A high-elevation site like Stout really expands what the portfolio can express. This is true mountain fruit. We're standing close to 2,000 feet above the valley floor, and you can feel right away that it's a different environment up here. At times the vineyard sits above the fog line, with that inversion layer changing how the vines experience heat and light. Ripening happens on a different clock. It's usually the last place we harvest across the portfolio, and that extended hang time shows up in the fruit. What it gives us is a classic mountain profile, smaller berries, concentrated flavors, natural structure, and real depth. Sites like this bring tension and character. You can't manufacture that. It comes from elevation, exposure, and the patience of farming in a tougher place.",
    },
    {
      question:
        'What do you mean by "inversion layer," and how does it change the farming?',
      answer:
        "You can have fog in the valley and sun up here. Temperatures behave differently, so ripening can be surprisingly consistent without the same frost concerns you might expect at elevation. It's long, extended maturation as the season cools, and the vines respond in a way that shows up in the wine's intensity and shape.",
    },
    {
      question: "When you walk a vineyard, what are you actually reading?",
      answer:
        "When I walk a vineyard, I'm really just trying to understand how the site wants to behave. It always starts with the soil. I'm a geography nerd at heart, so I'm looking at soil type, depth and texture first, then slope, row orientation, and sun exposure. Those basics tell you almost everything—how vigorous the vines want to be, where the heat loads up, how water moves through the profile, and how ripening is going to unfold. As we walk, you can feel the changes. A slight shift in slope or aspect suddenly means different canopy growth, different stress levels, different timing. That variability shows up in shoot growth, cluster development, and ultimately harvest decisions. My job is to read those patterns and manage them accordingly.",
    },
    {
      question:
        "Stout includes older blocks alongside redeveloped plantings. How do you decide when to pull vines versus preserve them?",
      answer:
        "We're often too quick to pull vineyards in this industry. If a block is still producing the tonnage we need, and it's healthy enough to farm well, there's a strong argument to keep it. Vines can go far longer than the depreciation logic we tend to default to. Stewardship means salvaging what can be saved and replanting only when the evidence is real.",
    },
    {
      question:
        "You mention sustainability in a very practical way. What does that look like on the ground?",
      answer:
        "Sustainability gets talked about a lot, but for us it's very hands-on and very real. Sometimes it starts with something as basic as erosion control. We'll plant cover crops to build roots and soil structure, then layer organic material on top so heavy rains don't cut channels through the rows. If you don't protect your soil, you're not protecting the future of the vineyard. Ten years down the road, that neglect shows up in compaction, lost topsoil, and blocks that are very different from when they were planted. Stewardship isn't theoretical, it's the daily decisions that keep these vineyards viable for the long haul.",
    },
    {
      question:
        "Labor is a defining issue in modern viticulture. What is changing, and how are you managing it?",
      answer:
        "Labor is probably one of the biggest realities in modern viticulture. Everything comes back to people. Internally, we've also shifted how we think about our crews. Our full-time farm team isn't treated like seasonal labor anymore. They have benefits, stability, and a real sense of belonging. We also rely on programs like H-2A to help secure consistent, skilled labor, which is essential in an industry where timing and execution make all the difference. And that matters, because vineyard quality is directly tied to the people doing the work. When folks feel valued and supported, it shows up in the rows every day.",
    },
    {
      question:
        "Technology keeps advancing in vineyards. Where do you see AI genuinely helping?",
      answer:
        "Technology is advancing quickly in vineyards, but where I really see AI helping is in capturing the detail we just can't see or process on our own. Vineyards generate massive amounts of information—missing vines, canopy health, variability row by row—and humans aren't built to track all of that efficiently. Now we've got cameras on tractors collecting images while we're already doing the work, and over time that starts to build a real dataset of what's actually happening in the field. That's where the promise is: better decisions, faster. But the tools are only part of it. The real value is in the database behind them. AI is only as good as what you feed it, and we're still early in building that foundation.",
    },
    {
      question: "With all the tech talk, what stays stubbornly human?",
      answer:
        "At the end of the day, it's still the people. You can talk about technology all you want, but what stays stubbornly human is the energy of the crew. How people show up in the morning, how they work together, and how they leave at the end of the day—that's part of vineyard quality. You can't automate care, pride, or consistency. Those are human inputs. And they absolutely show up in the finished wines!",
    },
  ],
};

export const wineries = [
  {
    id: "duckhorn",
    name: "DUCKHORN VINEYARDS",
    tagline: "Five Decades In. Still Defining What's Next.",
    image: "/images/Three-Palms-Vineyard.jpg",
    heroDescription:
      "DUCKHORN VINEYARDS has shaped Napa Valley's modern identity for nearly half a century. Its approach unites estate rigor, an unbroken winemaking lineage, and a hospitality culture defined by genuine warmth—shaped early on by Dan and Margaret Duckhorn's admiration for Bordeaux and their conviction that Merlot could thrive in Napa. From Merlot to Sauvignon Blanc and Cabernet, the wines reflect intention, balance, and a respect for detail that begins in the vineyard and carries through every touchpoint of the guest experience.",
    wines: [
      { name: "Three Palms Merlot", description: "Layered and powerful, revealing Bing cherry, cocoa, slate, dusty tannins, and an earthy, mineral-driven finish." },
      { name: "Merlot", description: "Velvety and expressive, with plum, black cherry, baking spice, lively acidity, and a polished, lingering finish." },
      { name: "Cabernet Sauvignon", description: "Elegant yet structured, offering dark red berries, fig, boysenberry, firm tannins, and a long finish." },
      { name: "Chardonnay", description: "Rich yet balanced, showcasing pear, citrus, crème brûlée, subtle salinity, and a long, juicy finish." },
      { name: "Sauvignon Blanc", description: "Crisp and vibrant, with pineapple, guava, melon, lively acidity, silky texture, and a refined mineral finish." },
    ],
  },
  {
    id: "kosta-browne",
    name: "KOSTA BROWNE",
    tagline: "The Art of Site",
    image: "/images/Kosta-Browne-Winery2.jpg",
    heroDescription:
      "Kosta Browne approaches Pinot Noir as a mosaic of singular sites—each block, clone, and exposure vinified independently to preserve nuance. Native ferments and temperature-disciplined cellar work reveal the subtleties of soil, fog patterns, and coastal influence. The result is a portfolio defined by precision and depth: powerful yet balanced Pinots with luminous fruit, fine structure, and unmistakable site signatures.",
    wines: [
      { name: "4-Barrel California Pinot Noir", description: "Created as a thank you to our earliest collectors, produced from just four barrels each vintage." },
      { name: "Gap's Crown Vineyard Sonoma Coast Pinot Noir", description: "Reflective of an extraordinary 20-year partnership that began shortly after the vineyard was planted, and a cherished favorite." },
      { name: "Beaune Premier Cru Burgundy Pinot Noir", description: "An elegant and exceptional expression of the Cote d'Or region and its revered hillsides." },
    ],
  },
  {
    id: "calera",
    name: "CALERA",
    tagline: "Mountain Purity & Limestone Precision",
    image: "/images/CeriseNov18_Drone_9.jpg",
    heroDescription:
      "Calera remains one of California's most distinctive expressions of Pinot Noir. Perched high on Mt. Harlan, the vineyards rise from rare limestone soils, fierce diurnal shifts, and conditions that challenge the vines at every turn. The wines are shaped by altitude and austerity—native fermentations, whole-cluster structure, gravity-fed handling, and long, patient aging that preserves purity and lift.",
    wines: [
      { name: "Calera Jensen Vineyard Pinot Noir", description: "Vibrant and expressive, with red cherry, plum, spice, supple tannins, energetic acidity, and a beautifully balanced finish." },
    ],
  },
  {
    id: "goldeneye",
    name: "GOLDENEYE",
    tagline: "The Voice of Anderson Valley",
    image: "/images/pd-courtyard-new.jpg",
    heroDescription:
      "Goldeneye channels the coastal intensity of Anderson Valley into Pinot Noirs defined by depth, tone, and a vivid sense of place. Its estate vineyards, ranging from warm mid-valley slopes to wind-swept deep-end ridges, offer a dramatic palette of textures. Sustainable farming, measured extraction, and a modernized oak program allow the valley's natural signatures—redwoods, ocean breezes, Pennyroyal herbs—to find clear expression in the wines.",
    wines: [
      { name: "Goldeneye Anderson Valley Pinot Noir", description: "Elegant and nuanced, offering cherry, herbal lift, subtle earth, silky tannins, fresh acidity, and a long finish." },
    ],
  },
  {
    id: "sonoma-cutrer",
    name: "SONOMA-CUTRER",
    tagline: "Crisp by Design",
    image: "/images/Three-Palms-9.jpg",
    heroDescription:
      "Sonoma-Cutrer was founded on one idea: perfecting Chardonnay. Four decades later, the winery remains synonymous with crisp, balanced, terroir-driven Chardonnay shaped by the Russian River Valley's cool climate. Vineyard-specific harvesting, barrel fermentation, selected French oak, and modest malolactic preserve brightness and precision.",
    wines: [
      { name: "Sonoma-Cutrer Les Pierres", description: "Crisp and fruit-forward, with citrus, green apple, mineral notes, bright acidity, and a smooth, lingering texture." },
    ],
  },
];

// Winery id to winemaker mapping
const wineryToMaker: Record<string, string> = {
  "duckhorn": "Duckhorn Vineyards",
  "kosta-browne": "Kosta Browne",
  "calera": "Calera",
  "goldeneye": "Goldeneye",
  "sonoma-cutrer": "Sonoma-Cutrer",
};

// Unified winery chapters for continuous scroll (wine + winemaker + tasting notes)
export const wineryChapters = wineries.map((winery) => {
  const wine = featuredWines.find((w) => w.id === winery.id);
  const maker = winemakers.find((m) => m.winery === wineryToMaker[winery.id]);
  return {
    ...winery,
    bottleImage: wine?.imageBG ?? wine?.imageFull ?? wine?.image ?? winery.image,
    winemaker: maker!,
  };
});

export const wineRatings = {
  duckhornVineyards: [
    { wine: "Merlot Napa Valley Three Palms Vineyard 2022", score: 94 },
    { wine: "Merlot Napa Valley Carneros 2022", score: 93 },
    { wine: "Merlot Napa Valley Three Palms Vineyard 2021", score: 92 },
    { wine: "Cabernet Sauvignon Stags Leap District 2021", score: 93 },
    { wine: "Cabernet Sauvignon Napa Valley Three Palms Vineyard 2021", score: 93 },
    { wine: "Merlot Napa Valley Rector Creek Vineyard 2020", score: 91 },
    { wine: "Merlot Napa Valley Three Palms Vineyard 2019", score: 94 },
    { wine: "Merlot Carneros Hyde Vineyard 2019", score: 93 },
    { wine: "Cabernet Sauvignon Howell Mountain 2019", score: 93 },
    { wine: "Merlot Napa Valley Three Palms Vineyard 2018", score: 94 },
    { wine: "Cabernet Sauvignon Napa Valley Three Palms Vineyard 2018", score: 93 },
    { wine: "The Discussion Napa Valley 2017", score: 96 },
  ],
  kostaBrowne: [
    { wine: "Pinot Noir Willamette Valley Eola Springs Vineyard 2022", score: 93 },
    { wine: "Chardonnay Russian River Valley Bootlegger's Hill 2022", score: 94 },
    { wine: "Pinot Noir Willamette Valley 2021", score: 93 },
    { wine: "Chardonnay Russian River Valley El Diablo 2021", score: 93 },
    { wine: "Pinot Noir Sta. Rita Hills 2020", score: 93 },
  ],
  caleraVineyards: [
    { wine: "Pinot Noir Mt. Harlan Jensen Vineyard 2022", score: 94 },
    { wine: "Pinot Noir Mt. Harlan Ryan Vineyard 2021", score: 96 },
    { wine: "Pinot Noir Mt. Harlan de Villiers Vineyard 2021", score: 95 },
  ],
  goldeneye: [
    { wine: "Pinot Noir Anderson Valley Gowan Creek Vineyard 2022", score: 92 },
    { wine: "Pinot Noir Anderson Valley 2021", score: 92 },
    { wine: "Pinot Noir Anderson Valley Gowan Creek Vineyard 2020", score: 93 },
  ],
  sonomaCutrer: [
    { wine: "Chardonnay Sonoma Coast 2022", score: 90 },
    { wine: "Chardonnay Sonoma Coast 2021", score: 90 },
    {
      wine: "Chardonnay Sonoma Coast Winemaker's Release Limited No. 40 Edition 2019",
      score: 91,
    },
  ],
};
