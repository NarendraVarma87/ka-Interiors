export interface VisualizationService {
  id: string;
  number: string;
  title: string;
  description: string;
  highlight: string;
  image: string;
  blurDataURL?: string;
}

export interface PromiseItem {
  id: string;
  number: string;
  title: string;
  descriptor: string;
  iconName: string;
}

export interface MaterialItem {
  id: string;
  name: string;
  description: string;
  finish: string;
  image: string;
}

export interface PaletteItem {
  name: string;
  hex: string;
  textHex: string;
  bgHex: string;
  description: string;
  role: string;
}

export const BRAND_DATA = {
  name: "KA Interiors",
  tagline: "Interiors That Inspire",
  signOff: "Designing Spaces. Inspiring Lives.",
  positioning: "Luxury Interior Design Studio delivering bespoke residential and commercial spaces.",
  experienceYears: "30+",
  experienceDescriptor: "30+ years of experience in designing, real estate, construction, interiors.",
  stats: {
    experience: "30+ Years",
    projects: "150+",
    satisfaction: "100%",
  },
  philosophies: {
    hero: "We design before we build.",
    editorial: "Great design lives in the details: every curve, material, and finish is chosen with intent and built to last. From concept to handover, we handle it all.",
    statement: "Design is where it starts. Execution is where we deliver.",
    quote: "Whether residential or commercial, we approach every project with the same discipline: understand the space's purpose, design around it, and execute without compromise. We don't just build interiors – we build spaces that reflect who you are and support how you grow."
  },
  designLanguage: "A refined contemporary aesthetic where clean lines, warm wood tones, and soft neutrals create a home that feels calm, elegant, and timeless.",
  contact: {
    headOffice: "Vijayawada",
    city: "Vijayawada",
    state: "Andhra Pradesh",
    country: "India",
    address: "Vijayawada, Andhra Pradesh, India",
    addressFull: "Vijayawada, Andhra Pradesh, India", // TODO: Full street address to be provided
    phone: "+91 87900 43355",
    phoneDisplay: "+91 87900 43355",
    whatsapp: "https://wa.me/918790043355",
    whatsappUrl: "https://wa.me/918790043355",
    email: "enquiry@kainteriors.in", // TODO: Official contact email
    operatingHours: "Monday – Saturday: 10:00 AM – 7:30 PM",
  },
  socials: [
    { label: "Instagram", href: "https://instagram.com/kainteriors" }, // TODO: Official Instagram link
    { label: "WhatsApp", href: "https://wa.me/918790043355" },
    { label: "LinkedIn", href: "https://linkedin.com/company/ka-interiors" }, // TODO: Official LinkedIn link
    { label: "Pinterest", href: "https://pinterest.com/kainteriors" }, // TODO: Official Pinterest link
  ],
  visualizationSuite: [
    {
      id: "product-design",
      number: "01",
      title: "Product Design",
      highlight: "Custom Furniture & Millwork",
      description: "Custom-crafted bespoke furniture, lighting artifacts, and architectural joinery modeled with millimeter precision before manufacture.",
      image: "/images/projects/grand-foyer-staircase-1600.webp"
    },
    {
      id: "floor-layout",
      number: "02",
      title: "3D Floor Layout",
      highlight: "Zoning & Spatial Circulation",
      description: "Orthographic spatial choreography that maps movement paths, functional ergonomics, and natural ventilation lines across every square foot.",
      image: "/images/projects/sanctuary-living-main-1600.webp"
    },
    {
      id: "interior-design",
      number: "03",
      title: "3D Interior Design",
      highlight: "Photorealistic Materiality",
      description: "Fully styled cinematic vistas capturing true-to-life lighting, fabric textures, fluted walnut panels, and stone veining.",
      image: "/images/projects/the-dining-salone-main-1600.webp"
    },
    {
      id: "exterior-design",
      number: "04",
      title: "3D Exterior Design",
      highlight: "Façade Articulation & Terraces",
      description: "Architectural envelope articulation, glass facades, perimeter landscaping, and cantilevered terrace treatments.",
      image: "/images/projects/commercial-kafe-exterior-dusk-1600.webp"
    },
    {
      id: "walkthrough",
      number: "05",
      title: "3D Walkthrough (Interior & Exterior)",
      highlight: "Cinematic Motion Tour",
      description: "Smooth, director-grade camera paths taking you through portals, foyers, and sunlit double-height atriums as if you are already inside.",
      image: "/images/projects/commercial-kafe-atrium-1600.webp"
    },
    {
      id: "architectural-rendering",
      number: "06",
      title: "3D Architectural Rendering",
      highlight: "Atmospheric Day & Night Lighting",
      description: "Hyper-realistic ray-traced illumination modeling the passage of sun, twilight dusk, and integrated architectural cove lighting.",
      image: "/images/projects/commercial-kafe-night-render-1600.webp"
    },
    {
      id: "plotting-rendering",
      number: "07",
      title: "3D Plotting Rendering & Walkthrough",
      highlight: "Masterplanning & Landscape Context",
      description: "Comprehensive site plotting, exterior access contours, boundary walls, water bodies, and neighborhood architectural context.",
      image: "/images/projects/commercial-kafe-rooftop-pool-1600.webp"
    }
  ] as VisualizationService[],
  promises: [
    {
      id: "tailor-made",
      number: "01",
      title: "Tailor-Made Interior Solutions",
      descriptor: "Every space designed around how you live and work.",
      iconName: "PenTool"
    },
    {
      id: "innovative-functional",
      number: "02",
      title: "Innovative & Functional Designs",
      descriptor: "Aesthetics that serve purpose, not just looks.",
      iconName: "Lightbulb"
    },
    {
      id: "premium-materials",
      number: "03",
      title: "Premium Quality Materials",
      descriptor: "No compromise on craftsmanship.",
      iconName: "Gem"
    },
    {
      id: "transparent-pricing",
      number: "04",
      title: "Transparent Pricing",
      descriptor: "No hidden costs, no surprises.",
      iconName: "FileCheck"
    },
    {
      id: "on-time-delivery",
      number: "05",
      title: "On-Time Project Delivery",
      descriptor: "Deadlines are commitments, not estimates.",
      iconName: "Clock"
    },
    {
      id: "end-to-end",
      number: "06",
      title: "End-to-End Project Management",
      descriptor: "One team, zero coordination hassle.",
      iconName: "Users"
    },
    {
      id: "after-sales",
      number: "07",
      title: "Dedicated After-Sales Support",
      descriptor: "We stay long after handover.",
      iconName: "HeartHandshake"
    },
    {
      id: "customer-satisfaction",
      number: "08",
      title: "Customer Satisfaction Guaranteed",
      descriptor: "Your vision, executed to perfection.",
      iconName: "Award"
    }
  ] as PromiseItem[],
  materials: [
    {
      id: "fluted-walnut",
      name: "Fluted Walnut",
      description: "Architectural vertical reeding with rich natural grain, adding rhythmic acoustic depth and tactile warmth to statement partitions and consoles.",
      finish: "Matte Organic Oil Finish",
      image: "/images/materials/fluted-walnut-1600.webp"
    },
    {
      id: "antique-brass",
      name: "Antique Brass",
      description: "Hand-brushed warm metallic luster applied to hairline trim profiles, pendant stems, handles, and custom fluted jaali screens.",
      finish: "Hand-Brushed Satin Patina",
      image: "/images/materials/antique-brass-1600.webp"
    },
    {
      id: "indian-quartzite",
      name: "Indian Quartzite",
      description: "Veined natural crystalline stone with golden and caramel ribbons, impervious to heat and crafted for seamless waterfall islands and vanity tops.",
      finish: "Honed Velvet Polish",
      image: "/images/materials/indian-quartzite-1600.webp"
    },
    {
      id: "premium-fabric",
      name: "Premium Fabric",
      description: "Textured linen-wool blends and bouclé weaves woven for enduring residential durability and understated tactile quiet luxury.",
      finish: "Stain-Treated Natural Weave",
      image: "/images/materials/premium-fabric-1600.webp"
    }
  ] as MaterialItem[],
  palette: [
    {
      name: "Espresso",
      hex: "#2B1408",
      textHex: "#FAF6EE",
      bgHex: "#2B1408",
      role: "Primary Dark Anchor",
      description: "Deep, roasted timber shade anchoring architectural thresholds, media niches, and nighttime intimate spaces."
    },
    {
      name: "Sienna",
      hex: "#B5602F",
      textHex: "#FFFFFF",
      bgHex: "#B5602F",
      role: "Warm Earth Accent",
      description: "Terracotta and oxidized clay tone invoking handcrafted Indian brick, kiln-fired pottery, and sunset warmth."
    },
    {
      name: "Bronze",
      hex: "#7A725D",
      textHex: "#FAF6EE",
      bgHex: "#7A725D",
      role: "Earthy Metallic Neutral",
      description: "Muted antique bronze providing an organic bridge between dark walnut joinery and polished brass hardware."
    },
    {
      name: "Champagne",
      hex: "#D9BE8C",
      textHex: "#2B1408",
      bgHex: "#D9BE8C",
      role: "Luminous Warm Highlight",
      description: "Soft reflective golden tone catching indirect cove lighting and highlighting fluted woodwork edges."
    },
    {
      name: "Alabaster",
      hex: "#F2EBDD",
      textHex: "#2B1408",
      bgHex: "#F2EBDD",
      role: "Calm Gallery Ground",
      description: "Creamy, lime-plaster neutral that gently diffuses natural daylight without harsh clinical glare."
    }
  ] as PaletteItem[],
  get paletteSwatches() {
    return this.palette;
  },
  get processSteps() {
    return this.process;
  },
  process: [
    {
      step: "01",
      title: "Discover",
      subline: "Lifestyle & Space Analysis",
      description: "We begin by immersing ourselves in how you live, your daily rituals, aesthetic affinities, and spatial aspirations.",
      duration: "Weeks 1 – 2",
      deliverables: ["Initial Brief & Space Inventory", "Lifestyle & Circulation Analysis", "Budget & Timeline Framework", "Site Orientation Assessment"]
    },
    {
      step: "02",
      title: "Design",
      subline: "Concept & Spatial Layouts",
      description: "Translating conversations into scaled floor layouts, bespoke joinery concepts, material boards, and lighting diagrams.",
      duration: "Weeks 3 – 4",
      deliverables: ["Comprehensive 2D Floor Plans", "Material Mood Boards & Swatches", "Electrical & Lighting Concepts", "Architectural Joinery Sketches"]
    },
    {
      step: "03",
      title: "3D Visualize",
      subline: "Hyper-Real Ray-Traced Previews",
      description: "Experience your finished home before demolition starts through 3D walkthroughs, custom furniture models, and light studies.",
      duration: "Weeks 5 – 6",
      deliverables: ["Photorealistic 3D Renders", "Day & Twilight Lighting Studies", "VR Cinematic Walkthrough", "Bespoke Furniture Prototyping"]
    },
    {
      step: "04",
      title: "Build",
      subline: "Artisanal Execution & Millwork",
      description: "In-house craftsmen and project managers oversee carpentry, electricals, masonry, and custom metalwork without coordination headaches.",
      duration: "Weeks 7 – 16",
      deliverables: ["Dedicated On-Site Project Engineer", "Weekly Photographic Progress Reports", "Precision Joinery & Millwork Fabrication", "Quality Assurance Milestones"]
    },
    {
      step: "05",
      title: "Handover",
      subline: "Deep Cleaning & White-Glove Reveal",
      description: "Turnkey delivery where every soft furnishing is placed, light balanced, and door tuned to silent perfection.",
      duration: "Week 17",
      deliverables: ["Deep Professional Clean", "White-Glove Furniture Placement", "Comprehensive Defect-Free Sign-Off", "Care & Maintenance Manuals"]
    },
    {
      step: "06",
      title: "Support",
      subline: "Dedicated After-Sales Care",
      description: "Our relationship continues long after moving in, with warranty coverage and ongoing maintenance support.",
      duration: "Ongoing",
      deliverables: ["1-Year Comprehensive Warranty", "Periodic Polish & Joinery Checkups", "Emergency Maintenance Hotline", "Dedicated Relationship Manager"]
    }
  ]
};
