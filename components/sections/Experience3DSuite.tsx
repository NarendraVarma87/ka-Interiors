'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, ChevronDown, Sparkles } from 'lucide-react';
import { BRAND_DATA } from '@/data/brand';

export function Experience3DSuite() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openMobileAccordion, setOpenMobileAccordion] = useState<number | null>(0);

  const activeService = BRAND_DATA.visualizationSuite[activeIndex];

  return (
    <section className="relative bg-espresso text-ivory py-16 sm:py-24 lg:py-32 border-b border-gold/15 bg-grain overflow-hidden">
      {/* Warm ambient backlight */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-radial from-gold/15 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 sm:pb-12 lg:pb-16 border-b border-gold/15">
          <div className="space-y-2 sm:space-y-3">
            <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs uppercase tracking-[0.28em] text-gold font-sans font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Photorealistic Pre-Construction</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-tight">
              The KA{' '}
              <span className="font-normal italic text-gold-gradient">
                Visualization Suite
              </span>
            </h2>
          </div>

          <p className="font-sans text-xs sm:text-sm lg:text-base text-champagne/80 max-w-md leading-relaxed">
            Experience your home or commercial flagship before ground is broken.
            Our comprehensive 7-stage 3D visualization ensures total aesthetic alignment and zero surprises.
          </p>
        </div>

        {/* Desktop Interactive Layout (hidden on mobile) */}
        <div className="hidden lg:grid grid-cols-12 gap-12 pt-12 items-center">
          {/* Left Column: Interactive 7-item List */}
          <div className="col-span-5 space-y-2" role="tablist" aria-label="3D Visualization Services">
            {BRAND_DATA.visualizationSuite.map((service, idx) => {
              const isActive = activeIndex === idx;

              return (
                <div
                  key={service.id}
                  role="tab"
                  tabIndex={0}
                  aria-selected={isActive}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onFocus={() => setActiveIndex(idx)}
                  className={`group relative p-4 rounded-xl cursor-pointer transition-all duration-300 outline-none ${
                    isActive ? 'bg-walnut/70 border border-gold/40' : 'hover:bg-walnut/30 border border-transparent'
                  }`}
                >
                  {/* Active Gold Line Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeGoldBar"
                      className="absolute left-0 top-2 bottom-2 w-1 bg-gradient-to-b from-gold-light via-gold to-gold-dark rounded-r"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}

                  <div className="flex items-baseline justify-between pl-2">
                    <div className="space-y-1">
                      <div className="flex items-baseline gap-3">
                        <span
                          className={`font-sans text-xs tracking-widest font-semibold transition-colors duration-200 ${
                            isActive ? 'text-gold' : 'text-champagne/50 group-hover:text-gold'
                          }`}
                        >
                          {service.number}
                        </span>
                        <h3
                          className={`font-serif text-2xl transition-colors duration-200 ${
                            isActive ? 'text-white' : 'text-alabaster/70 group-hover:text-white'
                          }`}
                        >
                          {service.title}
                        </h3>
                      </div>
                      <p
                        className={`font-sans text-xs transition-colors duration-200 pl-7 ${
                          isActive ? 'text-champagne/90' : 'text-champagne/50'
                        }`}
                      >
                        {service.highlight}
                      </p>
                    </div>

                    <ArrowUpRight
                      className={`w-4 h-4 transition-all duration-300 ${
                        isActive
                          ? 'text-gold opacity-100 translate-x-0'
                          : 'opacity-0 -translate-x-2 text-champagne/40 group-hover:opacity-100 group-hover:translate-x-0'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Cross-Fading Preview Card */}
          <div className="col-span-7">
            <div className="relative rounded-3xl overflow-hidden aspect-[16/10] border border-gold/30 shadow-2xl bg-walnut">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={activeService.image}
                    alt={activeService.title}
                    fill
                    sizes="(max-width: 1200px) 100vw, 55vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/30 to-transparent" />

                  {/* Caption Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 space-y-2">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-sans font-semibold">
                      Service {activeService.number} / 07
                    </span>
                    <h4 className="font-serif text-2xl text-white">
                      {activeService.title}
                    </h4>
                    <p className="font-sans text-sm text-champagne/90 max-w-lg leading-relaxed">
                      {activeService.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile Accordion Layout (shown on < lg) */}
        <div className="lg:hidden divide-y divide-gold/15 pt-8">
          {BRAND_DATA.visualizationSuite.map((service, idx) => {
            const isOpen = openMobileAccordion === idx;

            return (
              <div key={service.id} className="py-4">
                <button
                  onClick={() => setOpenMobileAccordion(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left py-2 outline-none group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-sans text-xs tracking-widest text-gold font-semibold">
                      {service.number}
                    </span>
                    <div>
                      <span className="font-serif text-xl text-white group-hover:text-gold transition-colors">
                        {service.title}
                      </span>
                      <p className="font-sans text-xs text-champagne/70 mt-0.5">
                        {service.highlight}
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gold shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden pt-3 space-y-4"
                    >
                      <p className="font-sans text-xs sm:text-sm text-champagne/85 leading-relaxed pl-7">
                        {service.description}
                      </p>
                      <div className="relative rounded-2xl overflow-hidden aspect-[16/10] border border-gold/30">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="100vw"
                          className="object-cover"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA banner */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-gold/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs sm:text-sm text-champagne/80 text-center sm:text-left">
            Have architectural plans or architectural CAD drawings ready?
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-gold/40 text-champagne hover:border-gold hover:text-white hover:bg-walnut/50 transition-all duration-300 text-xs uppercase tracking-[0.2em] font-sans font-medium"
          >
            <span>Explore Entire 3D Suite</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-gold" />
          </Link>
        </div>
      </div>
    </section>
  );
}
