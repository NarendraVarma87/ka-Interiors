'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUp, Phone, MessageCircle, MapPin, Mail } from 'lucide-react';
import { BRAND_DATA } from '@/data/brand';

export function Footer() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined' && (window as any).__lenis) {
      (window as any).__lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-espresso text-ivory border-t border-gold/20 overflow-hidden bg-grain">
      {/* Subtle ambient warm glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-radial from-gold/10 to-transparent pointer-events-none blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative z-10">
        {/* Top Editorial Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-gold/15">
          {/* Brand Col */}
          <div className="md:col-span-5 lg:col-span-5 space-y-6">
            <Link href="/" className="inline-flex items-center gap-4 sm:gap-5 group">
              <div className="relative shrink-0">
                {/* Luminous Gold Halo */}
                <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-gold/60 via-gold/30 to-gold-light/50 blur-xl opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Multi-Stop Metallic Gold Ring */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-22 lg:h-22 rounded-full p-[2.5px] bg-gradient-to-tr from-gold-dark via-gold-light to-gold shadow-[0_8px_30px_rgba(201,149,60,0.45)] group-hover:shadow-[0_8px_40px_rgba(201,149,60,0.7)] group-hover:scale-105 transition-all duration-500">
                  <div className="w-full h-full rounded-full bg-espresso flex items-center justify-center p-2.5 sm:p-3 overflow-hidden">
                    <div className="relative w-full h-full">
                      <Image
                        src="/images/brand/ka-phoenix-monogram.png"
                        alt="KA Interiors Monogram Seal"
                        fill
                        className="object-contain drop-shadow-[0_4px_12px_rgba(201,149,60,0.75)] transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <span className="font-serif text-3xl sm:text-4xl lg:text-[40px] tracking-wide font-medium text-white leading-none block">
                  KA <span className="text-gold-gradient font-normal italic">Interiors</span>
                </span>
                <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold mt-2">
                  {BRAND_DATA.tagline}
                </p>
                <p className="text-[10px] uppercase tracking-[0.22em] text-champagne/70 font-sans mt-0.5">
                  Head Office · Vijayawada, Andhra Pradesh
                </p>
              </div>
            </Link>

            <p className="font-sans text-sm text-champagne/80 leading-relaxed max-w-sm">
              {BRAND_DATA.positioning}
            </p>

            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-walnut/60 border border-gold/20 text-xs text-champagne">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span>{BRAND_DATA.stats.experience} of design & architectural execution</span>
            </div>
          </div>

          {/* Quick Navigation Col */}
          <div className="md:col-span-3 lg:col-span-3 space-y-4">
            <h4 className="font-sans text-xs uppercase tracking-[0.25em] text-gold font-semibold">
              Studio & Work
            </h4>
            <ul className="space-y-2.5 font-sans text-sm text-champagne/80">
              <li>
                <Link href="/portfolio" className="hover:text-gold transition-colors">
                  Residential Portfolio
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-gold transition-colors">
                  Commercial Architecture
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold transition-colors">
                  3D Visualization Suite (7)
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold transition-colors">
                  Philosophy & Heritage
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold transition-colors">
                  Enquiry & Consultations
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Studio Office Col */}
          <div className="md:col-span-4 lg:col-span-4 space-y-4">
            <h4 className="font-sans text-xs uppercase tracking-[0.25em] text-gold font-semibold">
              Head Office
            </h4>
            <div className="space-y-3 font-sans text-sm text-champagne/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-1" />
                <span>
                  {BRAND_DATA.contact.address}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a
                  href={`tel:${BRAND_DATA.contact.phone.replace(/[^0-9+]/g, '')}`}
                  className="hover:text-white transition-colors"
                >
                  {BRAND_DATA.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-gold shrink-0" />
                <a
                  href={BRAND_DATA.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors underline decoration-gold/40 hover:decoration-gold"
                >
                  Chat with Principal Designer on WhatsApp
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a
                  href={`mailto:${BRAND_DATA.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {BRAND_DATA.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-champagne/60">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-center sm:text-left">
            <span>© {currentYear} KA Interiors. All rights reserved.</span>
            <span className="hidden sm:inline text-gold/30">|</span>
            <span className="italic text-champagne/80 font-serif text-sm">
              &ldquo;{BRAND_DATA.signOff}&rdquo;
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 hover:border-gold hover:text-white text-champagne transition-colors"
              aria-label="Scroll back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-gold" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
