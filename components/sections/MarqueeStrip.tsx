'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const MARQUEE_ITEMS = [
  'Bespoke Spaces',
  'Residential Architecture',
  'Commercial Flagships',
  '3D Visualization Suite',
  'End-to-End Execution',
  '30+ Years Heritage',
  'Sacred Spaces & Murals',
  'Turnkey Project Delivery',
];

export function MarqueeStrip() {
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setIsReducedMotion(mediaQuery.matches);
    }
  }, []);

  return (
    <div
      className="relative w-full bg-walnut text-ivory py-4 sm:py-5 overflow-hidden border-y border-gold/25 select-none"
      role="region"
      aria-label="Studio Specializations Marquee"
    >
      <div className="flex w-max items-center">
        {/* Repeating track 1 */}
        <div
          className={`flex items-center gap-8 sm:gap-12 shrink-0 ${
            isReducedMotion ? '' : 'animate-[marquee_35s_linear_infinite] hover:[animation-play-state:paused]'
          }`}
        >
          {MARQUEE_ITEMS.map((item, idx) => (
            <div key={`m1-${idx}`} className="flex items-center gap-8 sm:gap-12">
              <span className="font-serif text-lg sm:text-xl tracking-[0.18em] uppercase text-alabaster/95 font-light">
                {item}
              </span>
              <div className="relative w-4 h-4 shrink-0 opacity-80">
                <Image
                  src="/images/brand/ka-phoenix-monogram.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Repeating track 2 for seamless loop */}
        {!isReducedMotion && (
          <div
            className="flex items-center gap-8 sm:gap-12 shrink-0 animate-[marquee_35s_linear_infinite] hover:[animation-play-state:paused]"
            aria-hidden="true"
          >
            {MARQUEE_ITEMS.map((item, idx) => (
              <div key={`m2-${idx}`} className="flex items-center gap-8 sm:gap-12">
                <span className="font-serif text-lg sm:text-xl tracking-[0.18em] uppercase text-alabaster/95 font-light">
                  {item}
                </span>
                <div className="relative w-4 h-4 shrink-0 opacity-80">
                  <Image
                    src="/images/brand/ka-phoenix-monogram.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}
