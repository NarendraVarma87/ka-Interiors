'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Sparkles } from 'lucide-react';

function LotusOrnament({ className = 'w-12 h-12 text-gold' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Central lotus petal */}
      <path
        d="M50 15 C45 35, 42 55, 50 85 C58 55, 55 35, 50 15 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Inner left petal */}
      <path
        d="M50 40 C38 48, 25 58, 32 78 C42 82, 48 75, 50 70"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Inner right petal */}
      <path
        d="M50 40 C62 48, 75 58, 68 78 C58 82, 52 75, 50 70"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Outer left wing */}
      <path
        d="M48 58 C32 64, 12 70, 18 85 C30 87, 40 82, 46 76"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Outer right wing */}
      <path
        d="M52 58 C68 64, 88 70, 82 85 C70 87, 60 82, 54 76"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Base water line */}
      <path
        d="M20 90 Q50 95 80 90"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeDasharray="2 3"
      />
    </svg>
  );
}

export function HeritageSpotlight() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  const handleSliderMove = (clientX: number) => {
    if (!sliderContainerRef.current) return;
    const rect = sliderContainerRef.current.getBoundingClientRect();
    const offsetX = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (offsetX / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleSliderMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleSliderMove(e.touches[0].clientX);
    }
  };

  return (
    <section className="relative bg-espresso text-ivory py-24 sm:py-36 border-b border-gold/20 bg-grain overflow-hidden">
      {/* Background radial gold glow & lotus motif */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial from-gold/10 via-espresso/40 to-espresso pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Lotus Motifs */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-4 text-gold/70">
            <LotusOrnament className="w-8 h-8 text-gold" />
            <span className="text-xs uppercase tracking-[0.3em] font-sans font-semibold text-gold">
              Heritage Spotlight
            </span>
            <LotusOrnament className="w-8 h-8 text-gold scale-x-[-1]" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight">
            Sacred Spaces &amp;{' '}
            <span className="font-normal italic text-gold-gradient">The Art of Devotion</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-champagne/85 leading-relaxed">
            Where deep spiritual serenity unites with high architectural discipline.
            Our master craftsmen render custom mandir sanctuaries, illuminated jaali screens,
            and hand-sculpted mythological relief murals rooted in Indian tradition.
          </p>
        </div>

        {/* Interactive Before/After Reveal Slider */}
        <div className="space-y-4 mb-16">
          <div className="flex items-center justify-between text-xs font-sans text-champagne/75 px-2">
            <span className="uppercase tracking-widest text-gold font-medium">
              ← Left: Sculpted Relief Wall
            </span>
            <span className="hidden sm:inline italic text-champagne/50">
              Drag or hover to reveal Indian Epic Mural
            </span>
            <span className="uppercase tracking-widest text-gold font-medium">
              Right: Art of Devotion Mural →
            </span>
          </div>

          <div
            ref={sliderContainerRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative rounded-3xl overflow-hidden aspect-[16/9] sm:aspect-[21/9] border border-gold/40 shadow-2xl cursor-ew-resize select-none bg-walnut"
          >
            {/* Base Image (Devotion Mural) */}
            <div className="absolute inset-0">
              <Image
                src="/images/projects/art-of-devotion-ram-1600.webp"
                alt="Art of Devotion Epic Indian Wall Mural"
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-espresso/80 backdrop-blur-md border border-gold/40 text-[10px] font-sans text-champagne uppercase tracking-widest">
                Art of Devotion · Gilded Mural
              </div>
            </div>

            {/* Revealed Top Image (Sculpted Relief Wall with pure clipPath) */}
            <div
              className="absolute inset-0 pointer-events-none select-none"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <Image
                src="/images/projects/sanctuary-relief-wall-1600.webp"
                alt="Aesthetic Sculpted Relief Feature Wall"
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-espresso/80 backdrop-blur-md border border-gold/40 text-[10px] font-sans text-champagne uppercase tracking-widest">
                Aesthetic Designs · Relief Wall
              </div>
            </div>

            {/* Divider Line & Handle */}
            <div
              className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-gold-light via-gold to-gold-dark shadow-[0_0_12px_rgba(201,149,60,0.8)] pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-espresso border-2 border-gold flex items-center justify-center shadow-lg">
                <div className="flex items-center gap-1 text-gold text-[10px]">
                  <span>◀</span>
                  <span>▶</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Heritage Cards: Sacred Spaces, Art of Devotion, Art of Tradition */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Sacred Spaces */}
          <div className="p-8 rounded-2xl bg-walnut/60 border border-gold/20 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-gold/20">
                <Image
                  src="/images/projects/sacred-spaces-mandir-1600.webp"
                  alt="KA Interiors Sacred Spaces Mandir"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center"
                />
              </div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-sans font-semibold block">
                Chapter 03
              </span>
              <h3 className="font-serif text-2xl text-white">
                Sacred Spaces
              </h3>
              <p className="font-sans text-xs sm:text-sm text-champagne/80 leading-relaxed">
                Dedicated mandir sanctuaries engineered with vastu orientation, custom CNC brass jaali screens,
                and recessed prayer niches that foster daily meditation.
              </p>
            </div>
            <Link
              href="/portfolio/sacred-spaces"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-gold hover:text-white font-sans transition-colors pt-2 border-t border-gold/15"
            >
              <span>Explore Chapter</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 2: Art of Devotion */}
          <div className="p-8 rounded-2xl bg-walnut/60 border border-gold/20 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-gold/20">
                <Image
                  src="/images/projects/art-of-devotion-pichwai-1600.webp"
                  alt="The Art of Devotion Murals"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center"
                />
              </div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-sans font-semibold block">
                Chapter 04
              </span>
              <h3 className="font-serif text-2xl text-white">
                The Art of Devotion
              </h3>
              <p className="font-sans text-xs sm:text-sm text-champagne/80 leading-relaxed">
                Indian mythological narratives translated into contemporary living spaces with
                hand-applied gold leafing, stone inlays, and sacred iconography.
              </p>
            </div>
            <Link
              href="/portfolio/art-of-devotion"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-gold hover:text-white font-sans transition-colors pt-2 border-t border-gold/15"
            >
              <span>Explore Chapter</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 3: The Art of Tradition */}
          <div className="p-8 rounded-2xl bg-walnut/60 border border-gold/20 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-gold/20">
                <Image
                  src="/images/projects/art-of-tradition-living-1600.webp"
                  alt="The Art of Tradition Living Room"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center"
                />
              </div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-sans font-semibold block">
                Chapter 06
              </span>
              <h3 className="font-serif text-2xl text-white">
                The Art of Tradition
              </h3>
              <p className="font-sans text-xs sm:text-sm text-champagne/80 leading-relaxed">
                Harmonizing heritage motifs with minimalist modern proportions.
                Warm teak accents, handwoven silks, and antique brass details.
              </p>
            </div>
            <Link
              href="/portfolio/art-of-tradition"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-gold hover:text-white font-sans transition-colors pt-2 border-t border-gold/15"
            >
              <span>Explore Chapter</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
