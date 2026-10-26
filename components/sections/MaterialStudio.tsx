'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Check } from 'lucide-react';
import { BRAND_DATA } from '@/data/brand';

interface MaterialCardProps {
  material: (typeof BRAND_DATA.materials)[number];
}

function MaterialCard({ material }: MaterialCardProps) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
      className="group relative rounded-2xl overflow-hidden bg-walnut/60 border border-gold/30 p-5 shadow-lg flex flex-col justify-between"
    >
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 border border-gold/20 bg-espresso">
        <Image
          src={material.image}
          alt={material.name}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent opacity-60" />
        <span className="absolute bottom-2.5 left-2.5 text-[9px] uppercase tracking-widest font-sans font-semibold text-champagne bg-espresso/80 px-2 py-0.5 rounded border border-gold/30">
          {material.finish}
        </span>
      </div>

      <div className="space-y-1.5">
        <h4 className="font-serif text-xl text-white group-hover:text-gold transition-colors">
          {material.name}
        </h4>
        <p className="font-sans text-xs text-champagne/80 leading-relaxed">
          {material.description}
        </p>
      </div>
    </div>
  );
}

export function MaterialStudio() {
  const [selectedSwatchIndex, setSelectedSwatchIndex] = useState(0);
  const currentSwatch = BRAND_DATA.paletteSwatches[selectedSwatchIndex];

  return (
    <motion.section
      animate={{
        backgroundColor: currentSwatch.bgHex,
        color: currentSwatch.textHex,
      }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative py-24 sm:py-32 border-b border-gold/20 overflow-hidden bg-grain transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-gold/20">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-gold font-sans font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sensory Curation</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light leading-tight">
              Material &amp;{' '}
              <span className="font-normal italic text-gold-gradient">Palette Studio</span>
            </h2>
          </div>

          <p className="font-sans text-xs sm:text-sm max-w-md leading-relaxed opacity-85">
            Every surface tells an authentic story. We pair tactile natural timber with hand-patinated metals,
            heritage Indian stone, and deeply textured bouclé.
          </p>
        </div>

        {/* Interactive Swatch Moodboard Bar */}
        <div className="py-8 my-6 p-6 rounded-2xl bg-black/20 border border-gold/25 backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-sans font-semibold">
                Atmospheric Palette Selector
              </span>
              <p className="text-xs opacity-75 font-sans">
                Click a curated pigment to re-tint the environment mood:
              </p>
            </div>

            {/* Swatch Buttons */}
            <div className="flex flex-wrap items-center gap-3" role="radiogroup" aria-label="Color Palette Swatches">
              {BRAND_DATA.paletteSwatches.map((swatch, idx) => {
                const isSelected = selectedSwatchIndex === idx;

                return (
                  <button
                    key={swatch.name}
                    role="radio"
                    aria-checked={isSelected}
                    onClick={() => setSelectedSwatchIndex(idx)}
                    className={`group relative flex items-center gap-2.5 px-3.5 py-2 rounded-full border transition-all duration-300 outline-none ${
                      isSelected
                        ? 'border-gold bg-black/40 scale-105 shadow-md'
                        : 'border-white/20 bg-black/20 hover:border-gold/50'
                    }`}
                  >
                    <span
                      className="w-4 h-4 rounded-full border border-white/40 shadow-inner flex items-center justify-center shrink-0"
                      style={{ backgroundColor: swatch.hex }}
                    >
                      {isSelected && <Check className="w-2.5 h-2.5 text-white stroke-[3]" />}
                    </span>
                    <span className="font-sans text-xs font-medium tracking-wider text-white">
                      {swatch.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Swatch Description Pill */}
          <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-sans opacity-80">
            <span>
              Selected Tone:{' '}
              <strong className="text-gold uppercase tracking-wider font-semibold">
                {currentSwatch.name}
              </strong>{' '}
              ({currentSwatch.hex})
            </span>
            <span className="italic">{currentSwatch.role}</span>
          </div>
        </div>

        {/* 4 Tilting Material Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {BRAND_DATA.materials.map((mat) => (
            <MaterialCard key={mat.id} material={mat} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
