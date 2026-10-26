'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, ArrowUpRight, Sparkles } from 'lucide-react';

export function CommercialShowcase() {
  const [isDusk, setIsDusk] = useState(true);

  return (
    <section className="relative bg-ivory text-ink py-24 sm:py-36 border-b border-gold/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-gold/15">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-gold font-sans font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Commercial Flagship Case Study</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-ink leading-tight">
              Kafe:{' '}
              <span className="font-normal italic text-gold-gradient">
                Two-Level Architectural Pavilion
              </span>
            </h2>
          </div>

          <div className="space-y-2 max-w-md">
            <p className="font-sans text-xs sm:text-sm text-walnut/80 leading-relaxed">
              A bespoke two-story commercial café featuring a sculptural spiral staircase,
              panoramic glass walls, atmospheric night illumination, and a rooftop plunge pool terrace.
            </p>
            <div className="flex items-center gap-4 text-xs font-sans text-gold">
              <span>Vijayawada</span>
              <span>·</span>
              <span>2 Levels + Rooftop</span>
              <span>·</span>
              <span>Turnkey Execution</span>
            </div>
          </div>
        </div>

        {/* Bento Grid with Day/Dusk Toggle */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-12">
          {/* Main Large Bento Item (Day/Dusk Toggle) - 7 cols */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden border border-gold/30 shadow-xl aspect-[16/11] lg:aspect-auto lg:h-[560px] bg-espresso group">
            <AnimatePresence mode="wait">
              <motion.div
                key={isDusk ? 'dusk' : 'day'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="relative w-full h-full"
              >
                <Image
                  src={
                    isDusk
                      ? '/images/projects/commercial-kafe-exterior-dusk-1600.webp'
                      : '/images/projects/commercial-kafe-exterior-day-1600.webp'
                  }
                  alt={isDusk ? 'Kafe Exterior at Twilight Dusk' : 'Kafe Exterior in Bright Daylight'}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Day / Dusk Toggle Control */}
            <div className="absolute top-3 right-3 sm:top-6 sm:right-6 z-20 flex items-center p-1 rounded-full bg-espresso/85 backdrop-blur-md border border-gold/40 shadow-lg">
              <button
                onClick={() => setIsDusk(false)}
                className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-sans font-medium transition-all ${
                  !isDusk
                    ? 'bg-gold text-espresso shadow'
                    : 'text-champagne/70 hover:text-white'
                }`}
                aria-pressed={!isDusk}
              >
                <Sun className="w-3.5 h-3.5" />
                <span>Day</span>
              </button>
              <button
                onClick={() => setIsDusk(true)}
                className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-sans font-medium transition-all ${
                  isDusk
                    ? 'bg-gold text-espresso shadow'
                    : 'text-champagne/70 hover:text-white'
                }`}
                aria-pressed={isDusk}
              >
                <Moon className="w-3.5 h-3.5" />
                <span>Dusk</span>
              </button>
            </div>

            {/* Bottom Caption on Main Image */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 z-20 space-y-1">
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-sans font-semibold">
                Façade Architecture
              </span>
              <h3 className="font-serif text-lg sm:text-2xl md:text-3xl text-white">
                Exterior Envelope &amp; Cantilevered Volumes
              </h3>
              <p className="font-sans text-[11px] sm:text-xs text-champagne/85 line-clamp-2 sm:line-clamp-none">
                {isDusk
                  ? 'Warm architectural sconces cast gentle luminescence across the vertical timbers at twilight.'
                  : 'Sunlight streams through the high-performance glass facade, illuminating internal greenery.'}
              </p>
            </div>
          </div>

          {/* Right Column Bento Stack - 5 cols */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Top Sub-Card: Spiral Staircase & Atrium */}
            <div className="relative rounded-3xl overflow-hidden border border-gold/25 shadow-lg h-[265px] bg-espresso group">
              <Image
                src="/images/projects/commercial-kafe-atrium-1600.webp"
                alt="Kafe Sculptural Spiral Staircase and Double-Height Atrium"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-gold font-sans font-semibold">
                  Interior Circulation
                </span>
                <h4 className="font-serif text-xl text-white">
                  Sculptural Spiral Stair &amp; Atrium
                </h4>
              </div>
            </div>

            {/* Bottom Sub-Card: Rooftop Plunge Pool Terrace */}
            <div className="relative rounded-3xl overflow-hidden border border-gold/25 shadow-lg h-[265px] bg-espresso group">
              <Image
                src="/images/projects/commercial-kafe-rooftop-pool-1600.webp"
                alt="Kafe Rooftop Plunge Pool and Alfresco Lounge"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-gold font-sans font-semibold">
                  Alfresco Amenities
                </span>
                <h4 className="font-serif text-xl text-white">
                  Rooftop Terrace &amp; Plunge Pool
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* View Full Commercial Case Study CTA */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/portfolio/commercial-kafe"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-gold bg-espresso text-champagne hover:bg-gold hover:text-espresso transition-all duration-300 text-xs uppercase tracking-[0.22em] font-sans font-medium shadow-md"
          >
            <span>Explore Kafe Flagship Case Study</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
