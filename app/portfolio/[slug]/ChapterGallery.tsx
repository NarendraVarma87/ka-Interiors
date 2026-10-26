'use client';

import { useState } from 'react';
import Image from 'next/image';
import * as Dialog from '@radix-ui/react-dialog';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import type { ProjectImage } from '@/data/projects';

export function ChapterGallery({ gallery, title }: { gallery: ProjectImage[]; title: string }) {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const handleNext = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((activeImageIndex + 1) % gallery.length);
  };

  const handlePrev = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((activeImageIndex - 1 + gallery.length) % gallery.length);
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {gallery.map((img, idx) => (
          <div
            key={idx}
            onClick={() => setActiveImageIndex(idx)}
            className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-espresso border border-gold/20 shadow-lg cursor-pointer ${
              img.ratio === '16:9' ? 'md:col-span-2 aspect-[16/10] sm:aspect-[16/9]' : 'aspect-[4/3] sm:aspect-[4/5]'
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

            {/* Hover expand icon */}
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 sm:p-2.5 rounded-full bg-espresso/80 backdrop-blur-md border border-gold/30 text-champagne group-hover:text-white group-hover:border-gold transition-all opacity-0 group-hover:opacity-100">
              <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>

            {/* Caption */}
            {img.caption && (
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-4 rounded-xl bg-espresso/80 backdrop-blur-md border border-gold/20">
                <p className="font-sans text-xs text-champagne/90 leading-relaxed">
                  {img.caption}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Dialog */}
      <Dialog.Root
        open={activeImageIndex !== null}
        onOpenChange={(open) => !open && setActiveImageIndex(null)}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-espresso/95 backdrop-blur-md" />
          <Dialog.Content className="fixed inset-0 z-50 flex flex-col justify-between p-4 sm:p-8 outline-none text-ivory">
            {/* Top Bar */}
            <div className="flex items-center justify-between z-10">
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-xl sm:text-2xl text-white">{title}</span>
                {activeImageIndex !== null && (
                  <span className="font-sans text-xs tracking-widest text-gold">
                    {activeImageIndex + 1} / {gallery.length}
                  </span>
                )}
              </div>
              <Dialog.Close className="p-2.5 rounded-full border border-gold/40 text-champagne hover:text-white hover:border-gold transition-colors">
                <X className="w-5 h-5" />
              </Dialog.Close>
            </div>

            {/* Main Image with Navigation Arrows */}
            {activeImageIndex !== null && (
              <div className="relative my-auto w-full h-[75vh] flex items-center justify-center">
                <div className="relative w-full h-full max-w-6xl max-h-full">
                  <Image
                    src={gallery[activeImageIndex].src}
                    alt={gallery[activeImageIndex].alt}
                    fill
                    sizes="100vw"
                    className="object-contain"
                  />
                </div>

                {/* Left / Right Nav Arrows */}
                {gallery.length > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-espresso/80 border border-gold/40 text-champagne hover:text-white hover:border-gold transition-all"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-espresso/80 border border-gold/40 text-champagne hover:text-white hover:border-gold transition-all"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>
            )}

            {/* Bottom Caption in Lightbox */}
            {activeImageIndex !== null && gallery[activeImageIndex].caption && (
              <div className="text-center max-w-2xl mx-auto z-10 py-2">
                <p className="font-sans text-xs sm:text-sm text-champagne/85">
                  {gallery[activeImageIndex].caption}
                </p>
              </div>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
