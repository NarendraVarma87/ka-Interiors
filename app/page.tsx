import { PreloaderHero } from '@/components/sections/PreloaderHero';
import { MarqueeStrip } from '@/components/sections/MarqueeStrip';
import { PhilosophySection } from '@/components/sections/PhilosophySection';
import { Experience3DSuite } from '@/components/sections/Experience3DSuite';
import { SignatureSpacesPinned } from '@/components/sections/SignatureSpacesPinned';
import { ResiCommSplit } from '@/components/sections/ResiCommSplit';
import { MaterialStudio } from '@/components/sections/MaterialStudio';
import { HeritageSpotlight } from '@/components/sections/HeritageSpotlight';
import { OurPromise } from '@/components/sections/OurPromise';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { CommercialShowcase } from '@/components/sections/CommercialShowcase';
import { FinalCTA } from '@/components/sections/FinalCTA';

export default function HomePage() {
  return (
    <>
      {/* 1. Branded Preloader + Full Bleed Cinematic Hero */}
      <PreloaderHero />

      {/* 2. Slow Infinite Marquee Strip */}
      <MarqueeStrip />

      {/* 3. Two-Column Editorial Philosophy with Sticky Heading & Scroll Reveal */}
      <PhilosophySection />

      {/* 4. The KA Experience: 7-Item 3D Visualization Suite */}
      <Experience3DSuite />

      {/* 5. Signature Spaces: GSAP Pinned Horizontal Storytelling */}
      <SignatureSpacesPinned />

      {/* 6. Residential vs Commercial Expandable Split Panels */}
      <ResiCommSplit />

      {/* 7. Interactive Material & Palette Moodboard Studio */}
      <MaterialStudio />

      {/* 8. Heritage Spotlight: Sacred Spaces, Devotion Murals, Before/After Slider */}
      <HeritageSpotlight />

      {/* 9. Our Promise: 8-Point Timeline with Scroll Fill & Circular Badges */}
      <OurPromise />

      {/* 10. 6-Step Execution Method Stepper */}
      <ProcessTimeline />

      {/* 11. Commercial Flagship: Kafe Bento Grid with Day/Dusk Toggle */}
      <CommercialShowcase />

      {/* 12. Final Consultation CTA with Zod Form & Direct Contact */}
      <FinalCTA />
    </>
  );
}
