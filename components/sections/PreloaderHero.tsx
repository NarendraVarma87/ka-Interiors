'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { BRAND_DATA } from '@/data/brand';

export function PreloaderHero() {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    // 1.2s preloader timing
    const timer = setTimeout(() => {
      setShowPreloader(false);
      // Ensure GSAP ScrollTrigger updates all layout positions once curtain finishes
      setTimeout(() => {
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new Event('resize'));
        }
      }, 900);
    }, 1300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* 1.2s Branded Curtain Lift Preloader */}
      <AnimatePresence>
        {showPreloader && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ y: '-100%', transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] } }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-espresso text-ivory bg-grain"
            aria-hidden="true"
          >
            <div className="relative flex flex-col items-center">
              {/* Gold Phoenix Monogram Draw Effect */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-24 h-24 mb-6"
              >
                <div className="absolute inset-0 rounded-full border border-gold/40 glow-gold-lg animate-pulse" />
                <Image
                  src="/images/brand/ka-phoenix-monogram.png"
                  alt="KA Interiors Monogram"
                  fill
                  priority
                  className="object-contain p-2"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-center space-y-1.5"
              >
                <h1 className="font-serif text-2xl tracking-[0.2em] font-medium text-white uppercase">
                  KA <span className="text-gold-gradient italic font-normal">Interiors</span>
                </h1>
                <p className="font-sans text-[11px] uppercase tracking-[0.35em] text-champagne/70">
                  Vijayawada · Est. 30+ Yrs
                </p>
              </motion.div>

              {/* Gold Progress Line */}
              <div className="w-40 h-[1.5px] bg-walnut mt-6 rounded-full overflow-hidden">
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 1.1, ease: 'easeInOut' }}
                  className="w-full h-full bg-gradient-to-r from-transparent via-gold to-transparent"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-espresso text-ivory pt-20 pb-12">
        {/* Full Bleed Cinematic Background with Ken Burns Zoom */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            initial={{ scale: 1.08 }}
            animate={{ scale: 1.0 }}
            transition={{ duration: 18, ease: 'easeOut' }}
            className="relative w-full h-full"
          >
            <Image
              src="/images/projects/sanctuary-living-main-1600.webp"
              alt="KA Interiors Sanctuary Luxury Living Room"
              fill
              priority
              placeholder="blur"
              blurDataURL="data:image/webp;base64,UklGRrQAAABXRUJQVlA4IKgAAACQBACdASoYABAAPtFUo0uoJKMhsAgBABoJQBOmUBDABJXG2vgGbL371S+lLKAA/mhBkf++7lKkEmwCR149yVvXF542g9aUcvx/neEdRzTkhqhMp4o7cH1bV5r4vT4YHBWcTNq66yTfSkbpocTjLhsvFOGHU/Yp80JlrApk5AdnylmlmF3Xfqz39gndU3jV95Cl1fP2xiIyc1RhbVFZ4+X8xZz4atuVOAA="
              className="object-cover object-center brightness-[0.72]"
            />
          </motion.div>
          {/* Subtle Grain Overlay + Radial Glow */}
          <div className="absolute inset-0 bg-grain pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/60 to-espresso/35" />
          <div className="absolute inset-0 bg-radial from-transparent via-espresso/40 to-espresso/80" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-between min-h-[82svh] pt-12 sm:pt-16">
          {/* Top Eyebrow & 30+ Years Heritage Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-espresso/80 backdrop-blur-md border border-gold/30 text-champagne text-xs font-sans tracking-[0.2em] uppercase"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>Bespoke Residential & Commercial Architecture</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-walnut/70 backdrop-blur-md border border-gold/40 text-gold text-xs font-sans tracking-wider"
            >
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="font-semibold">{BRAND_DATA.stats.experience}</span>
              <span className="text-champagne/80 font-light">Heritage</span>
            </motion.div>
          </div>

          {/* Main Giant Headline & Subline */}
          <div className="my-auto py-12 max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-light tracking-tight text-white leading-[1.02]"
            >
              Interiors{' '}
              <span className="font-normal italic text-gold-gradient block sm:inline">
                that Inspire
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-6 sm:mt-8 font-sans text-base sm:text-lg lg:text-xl text-champagne/90 font-light max-w-2xl leading-relaxed"
            >
              Luxury residential & commercial interior design studio delivering bespoke spaces
              with three decades of master craftsmanship, from concept to turnkey handover.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6"
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center px-7 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-medium uppercase tracking-[0.22em] text-espresso bg-gold border border-gold hover:bg-espresso hover:text-champagne transition-all duration-300 shadow-lg glow-gold-sm"
              >
                <span>Book a Consultation</span>
                <ArrowUpRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-sans tracking-[0.2em] uppercase text-champagne/90 hover:text-white transition-colors duration-200"
              >
                <span className="border-b border-gold/40 group-hover:border-gold pb-0.5 transition-colors">
                  Explore Our Work
                </span>
                <span className="text-gold transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </motion.div>
          </div>

          {/* Bottom Bar: Location & Scroll Cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex items-end justify-between border-t border-gold/20 pt-6 font-sans text-xs text-champagne/75"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
              <span className="uppercase tracking-[0.25em] text-gold font-medium">Head Office</span>
              <span className="hidden sm:inline text-gold/40">·</span>
              <span>Vijayawada, Andhra Pradesh</span>
            </div>

            <a
              href="#philosophy"
              className="group flex items-center gap-2.5 uppercase tracking-[0.25em] text-champagne/80 hover:text-gold transition-colors"
              aria-label="Scroll to philosophy section"
            >
              <span className="hidden sm:inline">Scroll to Explore</span>
              <div className="w-7 h-7 rounded-full border border-gold/30 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-colors">
                <ArrowDown className="w-3.5 h-3.5 text-gold animate-bounce" />
              </div>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
