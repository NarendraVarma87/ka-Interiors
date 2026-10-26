'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  Sparkles,
  Compass,
  Lightbulb,
  Gem,
  Receipt,
  Clock,
  Layers,
  ShieldCheck,
  Award,
} from 'lucide-react';
import { BRAND_DATA } from '@/data/brand';

const ICON_MAP = [
  Compass,
  Lightbulb,
  Gem,
  Receipt,
  Clock,
  Layers,
  ShieldCheck,
  Award,
];

export function OurPromise() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.8'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      ref={containerRef}
      className="relative bg-ivory text-ink py-24 sm:py-36 border-b border-gold/15 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-24 space-y-3">
          <div className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.28em] text-gold font-sans font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Uncompromising Commitment</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-ink leading-tight">
            The KA <span className="font-normal italic text-gold-gradient">Promise</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-walnut/80 leading-relaxed">
            Eight foundational principles that govern every blueprint, contract, and handover.
            Our reputation is built upon complete transparency and architectural integrity.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Background Track Line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-alabaster/80" />

          {/* Animated Gold Fill Line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-6 sm:left-1/2 top-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-gold-light via-gold to-gold-dark shadow-[0_0_8px_rgba(201,149,60,0.5)] origin-top"
          />

          {/* 8 Promise Items */}
          <div className="space-y-12 sm:space-y-16">
            {BRAND_DATA.promises.map((promise, idx) => {
              const Icon = ICON_MAP[idx] || Sparkles;
              const isEven = idx % 2 === 1;

              return (
                <div
                  key={promise.id}
                  className={`relative flex items-start gap-8 sm:gap-12 ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Circular Icon Badge */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 z-10 w-12 h-12 rounded-full bg-espresso border-2 border-gold flex items-center justify-center shadow-lg group">
                    <Icon className="w-5 h-5 text-gold group-hover:scale-110 transition-transform duration-200" />
                  </div>

                  {/* Content Card */}
                  <div
                    className={`ml-16 sm:ml-0 sm:w-1/2 ${
                      isEven ? 'sm:pr-16 sm:text-right' : 'sm:pl-16 sm:text-left'
                    }`}
                  >
                    <div className="p-6 sm:p-7 rounded-2xl bg-alabaster/70 border border-gold/20 shadow-sm hover:shadow-md transition-shadow">
                      <div
                        className={`flex items-baseline gap-2 mb-2 ${
                          isEven ? 'sm:justify-end' : ''
                        }`}
                      >
                        <span className="font-sans text-xs font-semibold tracking-widest text-gold uppercase">
                          Promise {promise.number}
                        </span>
                      </div>
                      <h3 className="font-serif text-xl sm:text-2xl text-ink font-medium leading-snug">
                        {promise.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-walnut/80 mt-2 leading-relaxed">
                        {promise.descriptor}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
