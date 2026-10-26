'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { BRAND_DATA } from '@/data/brand';

const KEY_PARAGRAPH =
  'Great design lives in the details: every curve, material, and finish is chosen with intent and built to last. From concept to handover, we handle it all.';

function WordReveal({ word, range, progress }: { word: string; range: [number, number]; progress: any }) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const y = useTransform(progress, range, [4, 0]);

  return (
    <motion.span
      style={{ opacity, y }}
      className="inline-block mr-[0.28em] transition-colors duration-200"
    >
      {word}
    </motion.span>
  );
}

export function PhilosophySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const words = KEY_PARAGRAPH.split(' ');

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.4'],
  });

  return (
    <section
      id="philosophy"
      ref={containerRef}
      className="relative bg-ivory text-ink py-16 sm:py-24 lg:py-36 border-b border-gold/15 overflow-hidden"
    >
      {/* Background delicate decorative watermark */}
      <div className="absolute right-[-10%] top-[20%] text-[24vw] font-serif font-light text-alabaster select-none pointer-events-none -z-0 opacity-40">
        KA
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20">
          {/* Left Column: Sticky Heading + Animated Counter */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start space-y-6 sm:space-y-8">
            <div className="space-y-2 sm:space-y-3">
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-gold font-sans font-semibold">
                Studio Philosophy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-ink leading-[1.1]">
                We design{' '}
                <span className="font-normal italic text-gold-gradient block">
                  before we build.
                </span>
              </h2>
            </div>

            <p className="font-sans text-sm sm:text-base text-walnut/80 leading-relaxed max-w-md">
              True luxury does not begin with demolition or decoration. It begins with architectural clarity,
              uncompromising spatial discipline, and deep reverence for the lives that inhabit the space.
            </p>

            {/* Heritage Counter Card */}
            <div className="p-5 sm:p-7 md:p-8 rounded-2xl bg-alabaster/70 border border-gold/20 shadow-sm relative overflow-hidden group">
              <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-gold/10 blur-xl group-hover:bg-gold/20 transition-all duration-500" />
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-espresso">
                  30+
                </span>
                <span className="font-serif text-xl sm:text-2xl text-gold italic">Years</span>
              </div>
              <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-walnut/90 font-semibold mt-2">
                Architectural & Interior Heritage
              </h3>
              <p className="font-sans text-xs text-walnut/70 mt-2 leading-relaxed">
                Across designing, real estate, construction, and high-end turnkey interiors throughout
                Vijayawada and South India.
              </p>
            </div>
          </div>

          {/* Right Column: Scroll-Linked Word Reveal & Editorial Manifesto */}
          <div className="lg:col-span-7 space-y-8 sm:space-y-12 lg:space-y-16">
            {/* Word by Word Scroll Linked Opacity Reveal */}
            <div className="p-6 sm:p-10 md:p-12 rounded-3xl bg-espresso text-ivory bg-grain shadow-xl border border-gold/20 relative">
              <span className="text-[10px] uppercase tracking-[0.3em] text-champagne/70 font-sans block mb-4 sm:mb-6">
                The Guiding Principle
              </span>
              <p className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-alabaster font-light leading-snug">
                {words.map((word, i) => {
                  const start = i / words.length;
                  const end = start + 1 / words.length;
                  return (
                    <WordReveal
                      key={i}
                      word={word}
                      range={[start, end]}
                      progress={scrollYProgress}
                    />
                  );
                })}
              </p>

              <div className="mt-8 pt-6 border-t border-gold/20 flex items-center justify-between">
                <span className="text-xs font-sans tracking-widest text-gold uppercase">
                  End-to-End Handover
                </span>
                <span className="text-xs font-serif italic text-champagne/80">
                  {BRAND_DATA.signOff}
                </span>
              </div>
            </div>

            {/* Editorial Copy Paragraphs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm sm:text-base text-walnut/90 leading-relaxed font-sans">
              <div className="space-y-4">
                <h4 className="font-serif text-xl text-ink font-medium">
                  Design Is Where It Starts
                </h4>
                <p>
                  Every residence or commercial pavilion we design begins with holistic spatial planning.
                  We dissect natural light vectors, acoustic comfort, circulation paths, and tactile finishes
                  before a single craftsman steps on site.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-serif text-xl text-ink font-medium">
                  Execution Is Where We Deliver
                </h4>
                <p>
                  Ideas without execution are mere sketches. Our integrated in-house construction and procurement
                  teams eliminate contractor conflicts, guaranteeing that what is rendered in photorealistic 3D
                  is identical to what is handed over.
                </p>
              </div>
            </div>

            {/* Pull Quote */}
            <div className="border-l-2 border-gold pl-6 sm:pl-8 py-2">
              <blockquote className="font-serif text-xl sm:text-2xl text-ink italic font-normal leading-relaxed">
                &ldquo;A refined contemporary aesthetic where clean lines, warm wood tones, and soft neutrals
                create a home that feels calm, elegant, and timeless.&rdquo;
              </blockquote>
              <cite className="font-sans text-xs uppercase tracking-[0.25em] text-gold font-semibold mt-3 block not-italic">
                KA Interiors Design Philosophy
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
