'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { PROJECTS } from '@/data/projects';

export function SignatureSpacesPinned() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  // Filter curated signature chapters for horizontal showcase
  const signatureChapters = PROJECTS.filter((p) => p.featuredOnHome);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkDesktop = () => {
      const isWide = window.innerWidth >= 1024;
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setIsDesktop(isWide && !prefersReduced);
    };

    checkDesktop();
    window.addEventListener('resize', checkDesktop);

    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop || !sectionRef.current || !trackRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const track = trackRef.current;

    // Calculate total horizontal scroll distance
    const getScrollAmount = () => -(track.scrollWidth - window.innerWidth + 120);

    const tween = gsap.to(track, {
      x: getScrollAmount,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${Math.max(window.innerHeight * 1.8, track.scrollWidth - window.innerWidth)}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [isDesktop]);

  return (
    <section
      id="signature-spaces"
      ref={sectionRef}
      className={`relative bg-ivory text-ink overflow-hidden border-b border-gold/15 ${
        isDesktop ? 'h-screen flex flex-col justify-center' : 'py-20 sm:py-28'
      }`}
    >
      {/* Top Header Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-8 lg:mb-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-gold font-sans font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Portfolio</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-ink leading-tight">
              Signature <span className="font-normal italic text-gold-gradient">Spaces</span>
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <p className="hidden md:block font-sans text-xs text-walnut/70 uppercase tracking-widest">
              {isDesktop ? 'Scroll down to travel horizontally' : 'Swipe left to view chapters'}
            </p>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] font-sans font-semibold text-espresso hover:text-gold transition-colors"
            >
              <span>View All Chapters</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-gold" />
            </Link>
          </div>
        </div>
      </div>

      {/* Horizontal Cards Container (GSAP pinned on desktop; native snap-scroll on mobile) */}
      <div
        ref={trackRef}
        className={`${
          isDesktop
            ? 'flex gap-8 px-8 sm:px-16 w-max will-change-transform'
            : 'flex gap-6 px-4 sm:px-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-6'
        }`}
      >
        {signatureChapters.map((chapter) => (
          <div
            key={chapter.slug}
            className={`group relative shrink-0 snap-center rounded-3xl overflow-hidden bg-alabaster/60 border border-gold/20 shadow-lg hover:shadow-2xl transition-all duration-500 ${
              isDesktop ? 'w-[420px] lg:w-[480px]' : 'w-[82vw] sm:w-[380px]'
            }`}
            data-cursor-text="VIEW"
          >
            <Link href={`/portfolio/${chapter.slug}`} className="block h-full">
              {/* Image Container with 4:3 or 16:10 Ratio */}
              <div className="relative aspect-[16/11] overflow-hidden bg-espresso">
                <Image
                  src={chapter.coverImage}
                  alt={chapter.coverAlt}
                  fill
                  sizes="(max-width: 768px) 85vw, 480px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                {/* Chapter Number Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-espresso/80 backdrop-blur-md border border-gold/40 text-[11px] font-sans font-semibold text-champagne tracking-widest uppercase">
                  Chapter {chapter.chapterNumber}
                </div>

                {/* Category Pill */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-walnut/70 backdrop-blur-md border border-gold/30 text-[10px] font-sans text-champagne/90 tracking-widest uppercase">
                  {chapter.category}
                </div>
              </div>

              {/* Editorial Info Content */}
              <div className="p-6 sm:p-7 space-y-3 bg-ivory">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-ink group-hover:text-gold-dark transition-colors duration-200">
                    {chapter.title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-gold shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>

                <p className="font-sans text-xs sm:text-sm text-walnut/80 line-clamp-2 leading-relaxed">
                  {chapter.tagline || chapter.summary}
                </p>

                {/* Material Tags */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {chapter.materials.slice(0, 3).map((mat, i) => (
                    <span
                      key={i}
                      className="text-[10px] uppercase tracking-wider font-sans px-2.5 py-1 rounded-md bg-alabaster text-walnut/80 border border-gold/15"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
