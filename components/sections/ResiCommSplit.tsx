'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function ResiCommSplit() {
  const [hoveredPanel, setHoveredPanel] = useState<'residential' | 'commercial' | null>(null);

  return (
    <section className="relative bg-espresso text-ivory py-16 sm:py-24 border-b border-gold/15 bg-grain overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.28em] text-gold font-sans font-semibold">
            Two Spheres of Architectural Mastery
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight">
            Residential <span className="font-normal italic text-gold-gradient">&amp; Commercial</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-champagne/80 leading-relaxed">
            From deeply personal multi-generational homes to iconic hospitality destinations,
            our studio delivers both with identical architectural rigor.
          </p>
        </div>

        {/* Tall Expandable Split Panels */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 h-auto lg:h-[620px]">
          {/* Residential Panel */}
          <div
            onMouseEnter={() => setHoveredPanel('residential')}
            onMouseLeave={() => setHoveredPanel(null)}
            className={`group relative rounded-3xl overflow-hidden border border-gold/25 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-xl ${
              hoveredPanel === 'residential'
                ? 'lg:flex-[1.4]'
                : hoveredPanel === 'commercial'
                ? 'lg:flex-[0.7]'
                : 'lg:flex-1'
            } min-h-[360px] sm:min-h-[420px] lg:min-h-0 flex flex-col justify-end p-6 sm:p-8 md:p-10 lg:p-12`}
          >
            <Image
              src="/images/projects/the-dining-salone-main-1600.webp"
              alt="KA Interiors Bespoke Residential Projects"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/50 to-espresso/20 group-hover:opacity-90 transition-opacity" />

            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-walnut/80 border border-gold/30 text-champagne text-[11px] font-sans tracking-widest uppercase">
                <span>Residential Sanctuaries</span>
                <span className="text-gold">· 15 Chapters</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-light leading-tight">
                Living Spaces Built For{' '}
                <span className="font-normal italic text-gold-gradient block">Generations</span>
              </h3>

              <p className="font-sans text-xs sm:text-sm text-champagne/85 max-w-lg leading-relaxed">
                Bespoke foyers, tranquil mandirs with mythological murals, sculpted relief feature walls,
                and custom walnut millwork designed around your family&apos;s daily cadence.
              </p>

              <div className="pt-2">
                <Link
                  href="/portfolio?category=residential"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-espresso font-sans text-xs uppercase tracking-[0.2em] font-semibold hover:bg-gold-light transition-colors min-h-[44px]"
                >
                  <span>Explore Residential</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Commercial Panel */}
          <div
            onMouseEnter={() => setHoveredPanel('commercial')}
            onMouseLeave={() => setHoveredPanel(null)}
            className={`group relative rounded-3xl overflow-hidden border border-gold/25 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-xl ${
              hoveredPanel === 'commercial'
                ? 'lg:flex-[1.4]'
                : hoveredPanel === 'residential'
                ? 'lg:flex-[0.7]'
                : 'lg:flex-1'
            } min-h-[360px] sm:min-h-[420px] lg:min-h-0 flex flex-col justify-end p-6 sm:p-8 md:p-10 lg:p-12`}
          >
            <Image
              src="/images/projects/commercial-kafe-exterior-dusk-1600.webp"
              alt="KA Interiors Commercial Architecture"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/50 to-espresso/20 group-hover:opacity-90 transition-opacity" />

            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-walnut/80 border border-gold/30 text-champagne text-[11px] font-sans tracking-widest uppercase">
                <span>Commercial Architecture</span>
                <span className="text-gold">· Turnkey Destinations</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-light leading-tight">
                Hospitality &amp; Retail That{' '}
                <span className="font-normal italic text-gold-gradient block">Captivates</span>
              </h3>

              <p className="font-sans text-xs sm:text-sm text-champagne/85 max-w-lg leading-relaxed">
                Dramatic 2-level atriums, architectural spiral stairs, plunge pools, and atmospheric lighting
                that elevate commercial brand value into an unforgettable guest experience.
              </p>

              <div className="pt-2">
                <Link
                  href="/portfolio?category=commercial"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-espresso font-sans text-xs uppercase tracking-[0.2em] font-semibold hover:bg-gold-light transition-colors min-h-[44px]"
                >
                  <span>Explore Commercial</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
