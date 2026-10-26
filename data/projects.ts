export type ProjectCategory = "all" | "residential" | "commercial";

export interface ProjectImage {
  src: string;
  src800: string;
  caption: string;
  alt: string;
  ratio?: "16:9" | "4:5" | "1:1" | "4:3";
}

export interface ProjectSpec {
  label: string;
  value: string;
}

export interface ProjectChapter {
  slug: string;
  category: "residential" | "commercial";
  chapterNumber: string;
  title: string;
  headlineWord: string;
  headlineRest: string;
  tagline: string;
  summary: string;
  editorialCopy: string[];
  materials: string[];
  palette: string[];
  featuredOnHome: boolean;
  coverImage: string;
  coverImage800: string;
  coverAlt: string;
  gallery: ProjectImage[];
  specs: ProjectSpec[];
  quote?: string;
}

export const PROJECTS: ProjectChapter[] = [
  {
    slug: "grand-foyer",
    category: "residential",
    chapterNumber: "01",
    title: "The Grand Foyer",
    headlineWord: "Sublime",
    headlineRest: "First Impressions",
    tagline: "A Prelude of Warm Wood and Bespoke Joinery",
    summary: "Designed to orchestrate a sublime first impression with custom bespoke shelving and warm ambient light.",
    editorialCopy: [
      "Designed to orchestrate a sublime first impression, the entrance features minimalist clean lines, custom bespoke shelving, and a rich, warm palette that serves as an elegant prelude to the residence.",
      "Every touchpoint celebrates fine craftsmanship, from the solid walnut architectural portals and ethereal wall murals to the meticulously balanced, warm brass lighting sculptures."
    ],
    materials: ["Solid Walnut", "Brushed Brass", "Warm Textured Plaster", "Italian Crema Marble"],
    palette: ["Espresso", "Alabaster", "Champagne"],
    featuredOnHome: true,
    coverImage: "/images/projects/grand-foyer-main-1600.webp",
    coverImage800: "/images/projects/grand-foyer-main-800.webp",
    coverAlt: "The Grand Foyer entrance featuring minimalist clean lines, bespoke open shelving, and warm ambient lighting.",
    gallery: [
      {
        src: "/images/projects/grand-foyer-main-1600.webp",
        src800: "/images/projects/grand-foyer-main-800.webp",
        caption: "Minimalist entrance portal with bespoke geometric open shelving and bird sculpture wall installation.",
        alt: "Grand Foyer entryway with bespoke wooden shelving and warm ambient light.",
        ratio: "16:9"
      },
      {
        src: "/images/projects/grand-foyer-staircase-1600.webp",
        src800: "/images/projects/grand-foyer-staircase-800.webp",
        caption: "Backlit jaali screen stairwell ascending past traditional suspended Moroccan brass lanterns.",
        alt: "Illuminated staircase foyer with intricate backlit cutouts and brass lanterns.",
        ratio: "4:5"
      }
    ],
    specs: [
      { label: "Typology", value: "Private Residence Entry Foyer" },
      { label: "Key Elements", value: "Bespoke Display Millwork & Backlit Jaali" },
      { label: "Location", value: "Vijayawada" },
      { label: "Execution", value: "Turnkey Architecture & Millwork" }
    ],
    quote: "The foyer is never just an entryway; it is where the outside world recedes and peace begins."
  },
  {
    slug: "salone-lounge",
    category: "residential",
    chapterNumber: "02",
    title: "The Salone & Lounge",
    headlineWord: "Effortless",
    headlineRest: "Leisure & Entertaining",
    tagline: "Plush Seating Meets Vertical Fluted Timber",
    summary: "A harmonious sanctuary engineered for the modern connoisseur, bridging advanced media integration with bespoke architectural joinery.",
    editorialCopy: [
      "Plush, muted seating coordinates seamlessly with vertical fluted timber panels and cascading drapery, crafting an intimate sanctuary dedicated to sophisticated leisure and effortless entertaining.",
      "A harmonious sanctuary engineered for the modern connoisseur. The salon bridges advanced media integration with bespoke architectural joinery. Fluted walnut paneling and soft champagne accents organize a highly refined visual rhythm, curating an environment of unparalleled quiet luxury and sophisticated leisure.",
      "Natural textures, indoor greenery, ambient lighting, and carefully curated décor complete the home with effortless elegance."
    ],
    materials: ["Fluted Walnut", "Antique Brass", "Indian Quartzite", "Linen Bouclé"],
    palette: ["Espresso", "Sienna", "Bronze", "Champagne", "Alabaster"],
    featuredOnHome: true,
    coverImage: "/images/projects/salone-main-1600.webp",
    coverImage800: "/images/projects/salone-main-800.webp",
    coverAlt: "The Salone featuring fluted walnut paneling, minimalist round wall clock, plush ivory sofa, and potted ficus.",
    gallery: [
      {
        src: "/images/projects/salone-main-1600.webp",
        src800: "/images/projects/salone-main-800.webp",
        caption: "The Salone with custom fluted timber accents and full-height sheer curtains.",
        alt: "Salone lounge with vertical timber slats and cozy loveseat.",
        ratio: "16:9"
      },
      {
        src: "/images/projects/salone-daybed-1600.webp",
        src800: "/images/projects/salone-daybed-800.webp",
        caption: "Cane-backed daybed with brass capped legs, potted bird of paradise, and textured fabric wall hanging.",
        alt: "Woven cane daybed in airy modern living room with warm wood tones.",
        ratio: "4:5"
      },
      {
        src: "/images/projects/the-lounge-main-1600.webp",
        src800: "/images/projects/the-lounge-main-800.webp",
        caption: "Architectural media console flanked by illuminated glass shelving and stone slab highlights.",
        alt: "The Lounge media wall with warm backlight and display niches.",
        ratio: "16:9"
      }
    ],
    specs: [
      { label: "Typology", value: "Formal Living & Media Lounge" },
      { label: "Materials", value: "Fluted Walnut & Indian Quartzite" },
      { label: "Lighting", value: "Multi-Circuit Warm Cove 2700K" },
      { label: "Execution", value: "Custom Cabinetry & Joinery" }
    ],
    quote: "A refined contemporary aesthetic where clean lines, warm wood tones, and soft neutrals create a home that feels calm, elegant, and timeless."
  },
  {
    slug: "sanctuary-living",
    category: "residential",
    chapterNumber: "03",
    title: "Sanctuary",
    headlineWord: "Quiet",
    headlineRest: "Elegance & Flow",
    tagline: "Intelligent Space Planning for Contemporary Living",
    summary: "Every room is thoughtfully crafted to maximize comfort, natural flow, and everyday functionality.",
    editorialCopy: [
      "Every project begins with understanding how you live. From intelligent space planning to flawless execution, every detail is crafted to create a home that feels effortless, timeless, and uniquely yours.",
      "Every room is thoughtfully crafted to maximize comfort, natural flow, and everyday functionality while maintaining a refined contemporary aesthetic.",
      "Gloss finishes, natural wood textures, stone surfaces, and premium hardware come together to deliver lasting quality and understated luxury."
    ],
    materials: ["Backlit Carved Plaster", "Honed White Marble", "Warm Oak", "Curved Bouclé"],
    palette: ["Espresso", "Champagne", "Alabaster"],
    featuredOnHome: true,
    coverImage: "/images/projects/sanctuary-living-main-1600.webp",
    coverImage800: "/images/projects/sanctuary-living-main-800.webp",
    coverAlt: "Sanctuary living room with floating media console, backlit plaster relief accent panel, and tall illuminated display cabinet.",
    gallery: [
      {
        src: "/images/projects/sanctuary-living-main-1600.webp",
        src800: "/images/projects/sanctuary-living-main-800.webp",
        caption: "Sanctuary living room with floating media console, sculpted floral relief column, and round coffee tables.",
        alt: "Sanctuary living room with floating low media console and ambient cove lighting.",
        ratio: "16:9"
      },
      {
        src: "/images/projects/sanctuary-relief-wall-1600.webp",
        src800: "/images/projects/sanctuary-relief-wall-800.webp",
        caption: "Sectional sofa lounge backed by full-height organic plaster wave relief sculpture and cove uplighting.",
        alt: "Sectional sofa with sculpted textured wall relief.",
        ratio: "4:3"
      },
      {
        src: "/images/projects/sanctuary-hallway-1600.webp",
        src800: "/images/projects/sanctuary-hallway-800.webp",
        caption: "Refined transitional foyer portal with illuminated walnut jamb and low storage console.",
        alt: "Transitional hallway with walnut door frame and marble flooring.",
        ratio: "4:3"
      }
    ],
    specs: [
      { label: "Typology", value: "Primary Living Hall" },
      { label: "Highlights", value: "Bas-Relief Wall Art & Floating Console" },
      { label: "Acoustics", value: "Engineered Concealed Wall Damping" },
      { label: "Finish", value: "Zero-VOC Matte Plaster & Fluted Oak" }
    ]
  },
  {
    slug: "sacred-spaces",
    category: "residential",
    chapterNumber: "04",
    title: "Sacred Spaces",
    headlineWord: "Devotion",
    headlineRest: "Preserved in Light",
    tagline: "Centuries of Spiritual Heritage in Modern Living Spaces",
    summary: "A peaceful sanctuary for daily reflection and prayer, adorned with intricate carvings and warm brass.",
    editorialCopy: [
      "A Mandir or puja room serves as a peaceful sanctuary for daily reflection and prayer. Traditionally adorned with intricate carvings, sacred icons, and warm brass accents, these personal altars preserve centuries of spiritual heritage within modern living spaces.",
      "The scalloped backlit sanctum radiates a meditative golden glow, complementing hand-drawn lotus line art murals and finely reeded wood-fluted storage counters that house sacred offerings with reverence."
    ],
    materials: ["Reeded Brass & Walnut", "Carved Marble Counter", "Backlit Onyx / Acrylic", "Cast Temple Bells"],
    palette: ["Gold", "Espresso", "Alabaster"],
    featuredOnHome: true,
    coverImage: "/images/projects/sacred-spaces-mandir-1600.webp",
    coverImage800: "/images/projects/sacred-spaces-mandir-800.webp",
    coverAlt: "Sacred Spaces Mandir with scalloped backlit arch, golden line-art lotus motifs, and reeded altar drawers.",
    gallery: [
      {
        src: "/images/projects/sacred-spaces-mandir-1600.webp",
        src800: "/images/projects/sacred-spaces-mandir-800.webp",
        caption: "The private Mandir shrine with multi-tiered deity icons, halo backlight, and reeded base cabinetry.",
        alt: "Modern luxury Mandir shrine with warm scalloped cove illumination.",
        ratio: "4:5"
      },
      {
        src: "/images/projects/sacred-spaces-detail-1600.webp",
        src800: "/images/projects/sacred-spaces-detail-800.webp",
        caption: "Macro detail of fluted walnut drawers, white marble top, and handcrafted traditional brass kalash vessels.",
        alt: "Detail of fluted wooden altar cabinetry and polished brass vessels.",
        ratio: "4:3"
      }
    ],
    specs: [
      { label: "Typology", value: "Bespoke Home Mandir / Puja Room" },
      { label: "Orientation", value: "Vastu Shastra Compliant East-Facing" },
      { label: "Specialty", value: "Custom Scalloped Backlit Archway" },
      { label: "Hardware", value: "Concealed Soft-Close Runners & Brass Accents" }
    ],
    quote: "A peaceful sanctuary for daily reflection and prayer, preserving centuries of spiritual heritage."
  },
  {
    slug: "art-of-devotion",
    category: "residential",
    chapterNumber: "05",
    title: "The Art of Devotion",
    headlineWord: "Sacred",
    headlineRest: "Epic Narratives",
    tagline: "Epic Narratives in Hand-Rendered Indian Murals",
    summary: "Hand-painted sacred stories rendered using natural earth pigments, bringing temple and palace majesty home.",
    editorialCopy: [
      "These traditional wall paintings capture sacred stories with remarkable detail. Hand-painted using natural earth pigments, they bring to life moments of divinity, royal court assemblies, and mythological epics on temple and palace walls.",
      "Framed by classic European-style wainscoting and warm spotlighting, traditional Indian mural art is elevated into an exquisite gallery experience at the heart of contemporary residential architecture."
    ],
    materials: ["Natural Earth Pigments", "Classical Moulded Paneling", "Brass Planters", "Polished Marble Floor"],
    palette: ["Gold", "Sienna", "Alabaster", "Espresso"],
    featuredOnHome: true,
    coverImage: "/images/projects/art-of-devotion-ram-1600.webp",
    coverImage800: "/images/projects/art-of-devotion-ram-800.webp",
    coverAlt: "The Art of Devotion Sita Rama Pattabhishekam sacred mural wall with ambient warm ceiling spotlights.",
    gallery: [
      {
        src: "/images/projects/art-of-devotion-ram-1600.webp",
        src800: "/images/projects/art-of-devotion-ram-800.webp",
        caption: "Full Sita Rama Pattabhishekam sacred court assembly mural hand-rendered with authentic earth pigments.",
        alt: "Sita Rama coronation mural painting on residential accent wall.",
        ratio: "16:9"
      },
      {
        src: "/images/projects/art-of-devotion-pichwai-1600.webp",
        src800: "/images/projects/art-of-devotion-pichwai-800.webp",
        caption: "Pichwai lotus and holy cow motifs set inside architectural wall paneling with ceiling track lights.",
        alt: "Pichwai style lotus mural with gold wall frieze.",
        ratio: "16:9"
      },
      {
        src: "/images/projects/art-of-devotion-detail-1600.webp",
        src800: "/images/projects/art-of-devotion-detail-800.webp",
        caption: "Perspective angle showcasing the three-dimensional depth and rhythmic wall panel framing.",
        alt: "Side perspective of mural wall panel with brass planter in foreground.",
        ratio: "4:3"
      }
    ],
    specs: [
      { label: "Art Form", value: "Indian Temple & Pichwai Hand Painted Murals" },
      { label: "Pigments", value: "Natural Mineral & Earth Pigments" },
      { label: "Lighting", value: "95+ CRI Warm Museum Track Lights" },
      { label: "Preservation", value: "UV Matte Sealant Coating" }
    ]
  },
  {
    slug: "aesthetic-designs",
    category: "residential",
    chapterNumber: "06",
    title: "Aesthetic Designs",
    headlineWord: "Curvature",
    headlineRest: "Sculpted in Relief",
    tagline: "Every Curvature — We Design & Execute",
    summary: "We don't just imagine beautiful spaces — we bring them to life down to the last sculptured curve.",
    editorialCopy: [
      "We don't just imagine beautiful spaces – we bring them to life, down to the last detail.",
      "Three-dimensional plaster relief walls turn living room backdrops into tactile tactile fine art. From organic blooming lotuses to graceful Calla lilies, each sculptural curve is molded and lit with hidden cove strips to cast soft, rhythmic shadows."
    ],
    materials: ["Hand-Carved Plaster Bas-Relief", "Fluted Wall Paneling", "Warm Linear Cove LEDs", "Velvet Upholstery"],
    palette: ["Alabaster", "Champagne", "Espresso"],
    featuredOnHome: false,
    coverImage: "/images/projects/aesthetic-designs-lotus-1600.webp",
    coverImage800: "/images/projects/aesthetic-designs-lotus-800.webp",
    coverAlt: "Sculpted lotus relief wall behind beige sofa with warm wall sconces and side tables.",
    gallery: [
      {
        src: "/images/projects/aesthetic-designs-lotus-1600.webp",
        src800: "/images/projects/aesthetic-designs-lotus-800.webp",
        caption: "Intricately carved lotus bas-relief wall panel with downlighting creating soft layered shadows.",
        alt: "Sculpted 3D lotus relief wall in formal living lounge.",
        ratio: "4:5"
      },
      {
        src: "/images/projects/aesthetic-designs-lily-1600.webp",
        src800: "/images/projects/aesthetic-designs-lily-800.webp",
        caption: "Calla Lily relief headboard wall with vertically panelled backdrop and warm golden perimeter glow.",
        alt: "Calla Lily sculptural wall art behind sectional sofa.",
        ratio: "4:5"
      }
    ],
    specs: [
      { label: "Technique", value: "Custom Bas-Relief Plaster Sculpting" },
      { label: "Finish", value: "Eggshell Lime Wash & Mineral Glaze" },
      { label: "Lighting", value: "Concealed Perimeter Uplighting" }
    ]
  },
  {
    slug: "art-of-tradition",
    category: "residential",
    chapterNumber: "07",
    title: "The Art of Tradition",
    headlineWord: "Heritage",
    headlineRest: "Enduring Elegance",
    tagline: "Timeless Details. Enduring Elegance.",
    summary: "Inspired by India's rich design heritage, bringing together handcrafted elements and natural materials.",
    editorialCopy: [
      "Inspired by India's rich design heritage, our spaces bring together handcrafted elements, natural materials, and sophisticated detailing – creating interiors that age beautifully.",
      "Solid turned teakwood pillars, coffered wooden ceilings, and woven cane headboards celebrate regional architectural memory while providing effortless modern comfort."
    ],
    materials: ["Turned Teakwood", "Natural Cane Weave", "Coffered Timber Ceiling", "Hand-Tufted Wool Rug"],
    palette: ["Walnut", "Sienna", "Alabaster"],
    featuredOnHome: false,
    coverImage: "/images/projects/art-of-tradition-living-1600.webp",
    coverImage800: "/images/projects/art-of-tradition-living-800.webp",
    coverAlt: "Traditional living room with turned teakwood pillars, coffered ceiling, and Indian wall reliefs.",
    gallery: [
      {
        src: "/images/projects/art-of-tradition-living-1600.webp",
        src800: "/images/projects/art-of-tradition-living-800.webp",
        caption: "Heritage living room anchored by turned solid teak architectural columns and coffered wood ceiling.",
        alt: "Living room with traditional wooden pillars and warm terracotta accents.",
        ratio: "4:5"
      },
      {
        src: "/images/projects/art-of-tradition-bed-1600.webp",
        src800: "/images/projects/art-of-tradition-bed-800.webp",
        caption: "Heritage master bed framed by a handcrafted woven cane headboard with turned corner finials.",
        alt: "Bedroom with woven cane headboard and coffered timber ceiling.",
        ratio: "4:5"
      }
    ],
    specs: [
      { label: "Typology", value: "Heritage Revival Suite" },
      { label: "Wood", value: "Seasoned Grade-A Burma Teak" },
      { label: "Weaving", value: "Natural Hand-Knotted Cane Mesh" }
    ]
  },
  {
    slug: "crafted-with-character",
    category: "residential",
    chapterNumber: "08",
    title: "Crafted With Character",
    headlineWord: "Artful",
    headlineRest: "Gatherings & Craft",
    tagline: "Carved Timber, Sacred Elements, Refined Details",
    summary: "Drawing from the richness of Indian craftsmanship, each feature adds warmth and heritage.",
    editorialCopy: [
      "Drawing from the richness of Indian craftsmanship, the space brings together carved timber, sacred elements, and refined architectural details. Each feature adds a sense of warmth and heritage while maintaining a calm, contemporary character.",
      "A hand-carved Krishna shrine with a glowing circular halo is juxtaposed against a fluted glass and brushed brass partition wall, balancing spiritual tranquility with open contemporary vistas."
    ],
    materials: ["Hand-Carved Timber", "Fluted Glass Panels", "Brass Archway", "Polished Marble Floor"],
    palette: ["Espresso", "Gold", "Champagne"],
    featuredOnHome: false,
    coverImage: "/images/projects/crafted-with-character-main-1600.webp",
    coverImage800: "/images/projects/crafted-with-character-main-800.webp",
    coverAlt: "Carved timber Krishna shrine with glowing halo aura and fluted glass partition into study.",
    gallery: [
      {
        src: "/images/projects/crafted-with-character-main-1600.webp",
        src800: "/images/projects/crafted-with-character-main-800.webp",
        caption: "Carved wood altar featuring brass Krishna idol, concentric engraved mandala backdrop, and glowing halo ring.",
        alt: "Carved timber altar with illuminated halo and brass partition.",
        ratio: "16:9"
      }
    ],
    specs: [
      { label: "Highlight", value: "Integrated Carved Mandir Altar" },
      { label: "Partition", value: "Acoustic Reeded Glass in Brass Frame" },
      { label: "Flooring", value: "Bookmatched Italian Marble" }
    ]
  },
  {
    slug: "dining-salone",
    category: "residential",
    chapterNumber: "09",
    title: "The Dining Salone",
    headlineWord: "Artful",
    headlineRest: "Gatherings",
    tagline: "A Masterclass in Modern Indian Dining",
    summary: "Coordinates minimalist custom lighting sculptures with plush seating and hand-painted tropical murals.",
    editorialCopy: [
      "A masterclass in modern Indian design, the dining space coordinates minimalist custom-engineered lighting sculptures with plush velvet seating. The backdrop features a breathtaking, hand-painted tropical mural illustrating sacred heritage motifs, transforming every gathering into a curated cultural experience.",
      "Above the polished natural stone dining table, interlocking circular brass chandeliers float gracefully below recessed cove lighting, balancing warmth, scale, and intimacy."
    ],
    materials: ["Indian Quartzite Table", "Upholstered Dining Chairs", "Brushed Brass Chandeliers", "Hand-Painted Mural"],
    palette: ["Champagne", "Sage", "Espresso", "Alabaster"],
    featuredOnHome: true,
    coverImage: "/images/projects/the-dining-salone-main-1600.webp",
    coverImage800: "/images/projects/the-dining-salone-main-800.webp",
    coverAlt: "The Dining Salone with oval table, upholstered chairs, tropical palm mural, and illuminated display cabinet.",
    gallery: [
      {
        src: "/images/projects/the-dining-salone-main-1600.webp",
        src800: "/images/projects/the-dining-salone-main-800.webp",
        caption: "The Dining Salone with 8-seater oval table, interlocking gold ring chandeliers, and custom palm mural.",
        alt: "Dining room with circular lighting and tropical mural wall.",
        ratio: "16:9"
      }
    ],
    specs: [
      { label: "Typology", value: "Formal Dining Salone" },
      { label: "Capacity", value: "8–10 Seater Entertaining" },
      { label: "Chandelier", value: "Custom Interlocking Brass Halo Rings" },
      { label: "Mural", value: "Handmade Botanical Pichwai on Canvas" }
    ]
  },
  {
    slug: "culinary-studio",
    category: "residential",
    chapterNumber: "10",
    title: "The Culinary Studio",
    headlineWord: "Gastronomic",
    headlineRest: "Artistry & Utility",
    tagline: "Bridging Professional Utility with Domestic Warmth",
    summary: "Utilizing minimalist fluted panels and premium natural stone for culinary excellence.",
    editorialCopy: [
      "A sophisticated stage for gastronomic artistry. The culinary space bridges professional utility with domestic warmth, utilizing minimalist fluted panels and premium natural stone.",
      "The breakfast bar features reeded walnut joinery crowned with illuminated veined stone, paired with bespoke brass-ringed counter stools and matte black pendant cones."
    ],
    materials: ["Fluted Wood Veneer", "Quartzite Backsplash", "Matte Acrylic Cabinetry", "Brass Footrests"],
    palette: ["Espresso", "Champagne", "Alabaster"],
    featuredOnHome: true,
    coverImage: "/images/projects/culinary-studio-bar-1600.webp",
    coverImage800: "/images/projects/culinary-studio-bar-800.webp",
    coverAlt: "Culinary Studio breakfast bar with fluted wood paneling, backlit marble counter, and luxury high stools.",
    gallery: [
      {
        src: "/images/projects/culinary-studio-bar-1600.webp",
        src800: "/images/projects/culinary-studio-bar-800.webp",
        caption: "Breakfast bar counter with under-counter cove illumination, fluted panels, and custom bar stools.",
        alt: "Breakfast counter with fluted walnut and bar stools.",
        ratio: "4:5"
      },
      {
        src: "/images/projects/culinary-studio-arched-1600.webp",
        src800: "/images/projects/culinary-studio-arched-800.webp",
        caption: "Arched glass display cabinetry with internal warm shelf lighting for glassware and barware.",
        alt: "Arched glass crockery cabinet with backlit shelving.",
        ratio: "4:3"
      },
      {
        src: "/images/projects/culinary-studio-modular-1600.webp",
        src800: "/images/projects/culinary-studio-modular-800.webp",
        caption: "Concealed functional kitchen layout with seamless push-to-open flat front cabinetry.",
        alt: "Modular kitchen prep space with stone countertop.",
        ratio: "4:3"
      }
    ],
    specs: [
      { label: "Hardware", value: "Blum Concealed Servo-Drive Hinges" },
      { label: "Countertops", value: "Seamless 20mm Indian Quartzite" },
      { label: "Appliances", value: "Fully Integrated Induction & Extraction" }
    ]
  },
  {
    slug: "heart-of-the-home",
    category: "residential",
    chapterNumber: "11",
    title: "The Heart of the Home",
    headlineWord: "Togetherness",
    headlineRest: "& Daily Rituals",
    tagline: "An Unbroken Rhythm Between Cooking and Dining",
    summary: "Unified by the tactile warmth of fluted walnut, brushed brass, and cold marble.",
    editorialCopy: [
      "A home is not merely designed; it is deeply felt. This threshold choreographs an unbroken rhythm between the Culinary Studio and the dining sanctuary. Unified by the tactile warmth of fluted walnut, brushed brass, and cold marble, the spaces breathe together. It is an intimate canvas where daily rituals unfold, transforming every shared meal into a quiet celebration of togetherness and heritage.",
      "High-gloss taupe cabinetry bounces soft sunlight throughout the day, while warm under-cabinet strip lighting sets an intimate mood for evening dinners."
    ],
    materials: ["High-Gloss Acrylic", "Gold Veined Marble", "Brushed Brass", "Solid Walnut Doors"],
    palette: ["Champagne", "Alabaster", "Espresso"],
    featuredOnHome: false,
    coverImage: "/images/projects/heart-of-home-dining-1600.webp",
    coverImage800: "/images/projects/heart-of-home-dining-800.webp",
    coverAlt: "Open kitchen and dining area threshold with marble floors, 8-seater table, and sheer window drapery.",
    gallery: [
      {
        src: "/images/projects/heart-of-home-dining-1600.webp",
        src800: "/images/projects/heart-of-home-dining-800.webp",
        caption: "The threshold connecting the open culinary area to the expansive family dining table.",
        alt: "Open-concept kitchen and dining threshold.",
        ratio: "16:9"
      },
      {
        src: "/images/projects/heart-of-home-kitchen-1600.webp",
        src800: "/images/projects/heart-of-home-kitchen-800.webp",
        caption: "Main kitchen run featuring integrated induction hob, black glass chimney, and warm splashback lighting.",
        alt: "Modular kitchen cabinets with glossy cream finish.",
        ratio: "4:3"
      }
    ],
    specs: [
      { label: "Layout", value: "Open-Plan Culinary Threshold" },
      { label: "Cabinet Finish", value: "High-Gloss Anti-Fingerprint Acrylic" },
      { label: "Backsplash", value: "Continuous Grain-Matched Quartzite Slab" }
    ]
  },
  {
    slug: "balcony-terrace",
    category: "residential",
    chapterNumber: "12",
    title: "Balcony & Terrace",
    headlineWord: "Open-Air",
    headlineRest: "Sanctuary",
    tagline: "Traditional Teak Jhula Meets Alfresco Hospitality",
    summary: "Outdoor living with traditional teak swing, wet bar, and seamless sliding connection to the master suite.",
    editorialCopy: [
      "Extending the sanctuary outdoors, the balcony terrace unites open-air leisure with traditional Indian hospitality. A carved teakwood jhula (swing) suspended from brass chains offers a tranquil vantage for morning tea and evening contemplation.",
      "Equipped with an outdoor wet bar and stone-look tile flooring that reflects golden sunset glow, this veranda transitions effortlessly into the master bedroom through wide acoustic sliding glass portals."
    ],
    materials: ["Solid Teakwood Swing", "Antique Brass Link Chains", "Weatherproof Wet Bar", "Veined Outdoor Porcelain"],
    palette: ["Espresso", "Sienna", "Alabaster"],
    featuredOnHome: true,
    coverImage: "/images/projects/balcony-terrace-main-1600.webp",
    coverImage800: "/images/projects/balcony-terrace-main-800.webp",
    coverAlt: "Balcony terrace featuring a traditional teakwood swing with brass chains, lounge chair, and wet bar.",
    gallery: [
      {
        src: "/images/projects/balcony-terrace-main-1600.webp",
        src800: "/images/projects/balcony-terrace-main-800.webp",
        caption: "Evening ambiance on the terrace with warm wall sconces, teak swing, and sliding doors to the master bedroom.",
        alt: "Balcony terrace at dusk with illuminated bedroom view.",
        ratio: "16:9"
      }
    ],
    specs: [
      { label: "Typology", value: "Private Master Suite Terrace" },
      { label: "Swing", value: "Hand-Carved Burma Teak with High-Tensile Brass Chain" },
      { label: "Glazing", value: "Double-Glazed Soundproof Sliding System" }
    ]
  },
  {
    slug: "little-atelier",
    category: "residential",
    chapterNumber: "13",
    title: "The Little Atelier",
    headlineWord: "Playful",
    headlineRest: "A World of Their Own",
    tagline: "Playful · Curious · Personal",
    summary: "Designed around the imagination and everyday routines of a child, bringing joyful storage and comfort.",
    editorialCopy: [
      "Designed around the imagination and everyday routines of a child, this bedroom brings together playful details, comfortable furnishings, and thoughtful storage. Soft colours, open spaces, and dedicated areas for play and learning create an environment that feels joyful while remaining practical and easy to grow with.",
      "An architectural reading wave wall nook with built-in perimeter cove lighting provides a cozy alcove for reading, daydreaming, and resting after active afternoons."
    ],
    materials: ["Soft-Touch Laminates", "Macramé Rope Weave", "Rounded Edge Joinery", "Oak Herringbone Flooring"],
    palette: ["Sage", "Alabaster", "Champagne"],
    featuredOnHome: true,
    coverImage: "/images/projects/little-atelier-playroom-1600.webp",
    coverImage800: "/images/projects/little-atelier-playroom-800.webp",
    coverAlt: "The Little Atelier kids room with sculptural green wave reading nook, cloud lights, and macramé swing chair.",
    gallery: [
      {
        src: "/images/projects/little-atelier-playroom-1600.webp",
        src800: "/images/projects/little-atelier-playroom-800.webp",
        caption: "Playroom corner featuring continuous curved reading wave nook, macramé swing, and warm cloud lights.",
        alt: "Kids playroom with unique curved wave alcove.",
        ratio: "4:5"
      },
      {
        src: "/images/projects/little-atelier-study-1600.webp",
        src800: "/images/projects/little-atelier-study-800.webp",
        caption: "Teddy bear silhouette wardrobe with integrated arched desk alcove and herringbone timber flooring.",
        alt: "Child study area with custom teddy bear millwork.",
        ratio: "4:5"
      }
    ],
    specs: [
      { label: "Age Group", value: "Growing Child (Adaptable Millwork)" },
      { label: "Safety", value: "Zero Sharp Edges, Low-VOC Waterborne Finishes" },
      { label: "Storage", value: "Full-Height Integrated Modular Wardrobes" }
    ]
  },
  {
    slug: "sanctuaries-of-rest",
    category: "residential",
    chapterNumber: "14",
    title: "Sanctuaries of Rest",
    headlineWord: "Soft",
    headlineRest: "Landing & Gentle Refuge",
    tagline: "Your Soft Landing in Organic Comfort",
    summary: "Crafted to cradle your quietest moments with organic curved headboards and golden morning light.",
    editorialCopy: [
      "More than just beautiful spaces, these rooms are crafted to cradle your quietest moments. Picture waking up to soft, golden morning light filtering through organic linens, or ending your day sinking into a bed that feels like a reassuring, warm embrace. It is a slow, gentle refuge where the busy world fades away, letting you rest in comfort and simply breathe.",
      "Fluid organic arches sculpted with warm backlighting create an architectural headboard that anchors the master suite with serene grace."
    ],
    materials: ["Textured Velvet Plaster", "Upholstered Bedframe", "Concealed Cove Lighting", "Sheer Organic Linen"],
    palette: ["Alabaster", "Champagne", "Espresso"],
    featuredOnHome: true,
    coverImage: "/images/projects/sanctuary-rest-master-1600.webp",
    coverImage800: "/images/projects/sanctuary-rest-master-800.webp",
    coverAlt: "Master bedroom suite with organic sculpted curved headboard, golden cove illumination, and minimalist desk.",
    gallery: [
      {
        src: "/images/projects/sanctuary-rest-master-1600.webp",
        src800: "/images/projects/sanctuary-rest-master-800.webp",
        caption: "Master suite with organic curvilinear headboard cut into backlit stone texture plaster.",
        alt: "Master bedroom with illuminated wave headboard wall.",
        ratio: "16:9"
      },
      {
        src: "/images/projects/sanctuary-rest-sub1-1600.webp",
        src800: "/images/projects/sanctuary-rest-sub1-800.webp",
        caption: "Guest suite with fluted accent wall, vertical brass trim, and cozy floating nightstands.",
        alt: "Guest bedroom with fluted headboard accent.",
        ratio: "1:1"
      },
      {
        src: "/images/projects/sanctuary-rest-sub2-1600.webp",
        src800: "/images/projects/sanctuary-rest-sub2-800.webp",
        caption: "Botanical bedroom suite featuring framed hand-painted floral panels and subtle cove lighting.",
        alt: "Bedroom with botanical wall panel.",
        ratio: "1:1"
      },
      {
        src: "/images/projects/sanctuary-rest-sub3-1600.webp",
        src800: "/images/projects/sanctuary-rest-sub3-800.webp",
        caption: "Contemporary suite with floor-to-ceiling tinted glass wardrobe and plush upholstered headboard.",
        alt: "Bedroom with glass wardrobe and neutral linen bed.",
        ratio: "1:1"
      }
    ],
    specs: [
      { label: "Typology", value: "Primary & Guest Bedroom Suites" },
      { label: "Comfort", value: "Custom Acoustic Paneling & Hotel-Grade Linen" },
      { label: "Lighting", value: "3-Scene Smart Mood Switching" }
    ]
  },
  {
    slug: "teenage-edit",
    category: "residential",
    chapterNumber: "15",
    title: "The Teenage Edit",
    headlineWord: "Designed",
    headlineRest: "to Grow with Individuality",
    tagline: "Comfort · Character · Style",
    summary: "Embraces individuality through curated colours, flexible furniture, and purposeful corners.",
    editorialCopy: [
      "Every teenager has their own rhythm, interests, and aesthetic. This space embraces that individuality through curated colours, flexible furniture, display areas, and purposeful corners — creating an interior that feels personal without compromising on design.",
      "Deep navy blue fluting frames an illuminated arched sports mural, complemented by modern geometric sconce lights, plush bedding, and streamlined study nooks."
    ],
    materials: ["Deep Navy Fluted Paneling", "Backlit Arched Mural", "Brass Geometric Sconces", "Modern Bouclé Accents"],
    palette: ["Bronze", "Alabaster", "Espresso"],
    featuredOnHome: false,
    coverImage: "/images/projects/teenage-edit-main-1600.webp",
    coverImage800: "/images/projects/teenage-edit-main-800.webp",
    coverAlt: "The Teenage Edit bedroom featuring blue fluted headboard wall, illuminated acrobatic soccer mural arch, and modern sconces.",
    gallery: [
      {
        src: "/images/projects/teenage-edit-main-1600.webp",
        src800: "/images/projects/teenage-edit-main-800.webp",
        caption: "Teenage sanctuary with illuminated acrobatic football mural, midnight navy fluted wall, and pill pendant sconces.",
        alt: "Teenage bedroom with sports mural and navy blue fluting.",
        ratio: "4:5"
      }
    ],
    specs: [
      { label: "Typology", value: "Teenage Bedroom & Study" },
      { label: "Theme", value: "Athletic Dynamism & Modern Quiet Luxury" },
      { label: "Lighting", value: "Perimeter Halo LED & Geometric Pendant Lamps" }
    ]
  },
  {
    slug: "kafe-commercial",
    category: "commercial",
    chapterNumber: "16",
    title: "Kafe: Commercial Flagship",
    headlineWord: "Atmosphere",
    headlineRest: "& Flagship Experience",
    tagline: "Two Levels, Spiral Staircase, Rooftop Plunge Pool",
    summary: "Thoughtfully designed commercial spaces blending functionality, aesthetics, and memorable brand identity.",
    editorialCopy: [
      "Thoughtfully designed commercial spaces that blend functionality, aesthetics, and brand identity. From modern cafés to retail outlets and workspaces, we create environments that inspire, engage, and leave a lasting impression.",
      "Spread over two expansive levels, 'Kafe' centers around a breathtaking double-height atrium with a sculptural spiral stair, illuminated floor tracks, and indoor palm trees. The open-air rooftop terrace features alfresco dining beside a neon-lit plunge pool, making it Vijayawada's premier hospitality destination."
    ],
    materials: ["Curved Architectural Concrete", "Warm Fluted Wood", "Integrated Recessed Floor LEDs", "Glass Balustrades"],
    palette: ["Espresso", "Champagne", "Alabaster", "Sienna"],
    featuredOnHome: true,
    coverImage: "/images/projects/commercial-kafe-exterior-dusk-1600.webp",
    coverImage800: "/images/projects/commercial-kafe-exterior-dusk-800.webp",
    coverAlt: "Kafe two-level exterior architecture at dusk with warm illuminated glass facade, outdoor stairs, and rooftop terrace.",
    gallery: [
      {
        src: "/images/projects/commercial-kafe-exterior-dusk-1600.webp",
        src800: "/images/projects/commercial-kafe-exterior-dusk-800.webp",
        caption: "Two-level flagship café architecture at dusk with illuminated glass envelope and outdoor terrace access.",
        alt: "Kafe commercial building at twilight.",
        ratio: "16:9"
      },
      {
        src: "/images/projects/commercial-kafe-atrium-1600.webp",
        src800: "/images/projects/commercial-kafe-atrium-800.webp",
        caption: "Soaring double-height atrium with sweeping spiral staircase, glowing floor track, and indoor tropical palms.",
        alt: "Grand atrium inside Kafe with spiral stair and indoor palms.",
        ratio: "4:5"
      },
      {
        src: "/images/projects/commercial-kafe-rooftop-pool-1600.webp",
        src800: "/images/projects/commercial-kafe-rooftop-pool-800.webp",
        caption: "Aerial view of the rooftop terrace lounge with dining tables, lush perimeter planters, and luxury plunge pool.",
        alt: "Rooftop dining terrace with plunge pool.",
        ratio: "16:9"
      },
      {
        src: "/images/projects/commercial-kafe-interior-bar-1600.webp",
        src800: "/images/projects/commercial-kafe-interior-bar-800.webp",
        caption: "Ground floor coffee bar with fluted service counter, halo chandeliers, and illuminated wall ribbon.",
        alt: "Ground floor coffee bar and seating area.",
        ratio: "16:9"
      },
      {
        src: "/images/projects/commercial-kafe-illuminated-stairs-1600.webp",
        src800: "/images/projects/commercial-kafe-illuminated-stairs-800.webp",
        caption: "Staircase featuring integrated step-lighting LEDs and tropical understory planter bed.",
        alt: "Illuminated floating staircase in café.",
        ratio: "4:3"
      },
      {
        src: "/images/projects/commercial-kafe-night-render-1600.webp",
        src800: "/images/projects/commercial-kafe-night-render-800.webp",
        caption: "Full nighttime architectural rendering highlighting the exterior illumination scheme and rooftop plunge pool.",
        alt: "Night render of Kafe building exterior.",
        ratio: "4:3"
      }
    ],
    specs: [
      { label: "Typology", value: "Flagship Café & Rooftop Hospitality" },
      { label: "Scale", value: "2 Levels + Rooftop Plunge Pool Terrace" },
      { label: "Special Features", value: "Sculptural Spiral Stair, Atrium Palms & Floor Track LEDs" },
      { label: "Location", value: "Commercial Hub, Vijayawada" }
    ],
    quote: "Commercial environments that inspire, engage, and leave a lasting impression."
  }
];

export function getProjectBySlug(slug: string): ProjectChapter | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: ProjectCategory): ProjectChapter[] {
  if (category === "all") return PROJECTS;
  return PROJECTS.filter((p) => p.category === category);
}

export function getFeaturedProjects(): ProjectChapter[] {
  return PROJECTS.filter((p) => p.featuredOnHome);
}
