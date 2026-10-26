'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { BRAND_DATA } from '@/data/brand';

const NAV_LINKS = [
  { label: 'Work', href: '/portfolio', subtitle: 'Residential & Commercial' },
  { label: '3D Suite & Services', href: '/services', subtitle: '7-Part Visualization' },
  { label: 'About', href: '/about', subtitle: 'Heritage & Craftsmanship' },
  { label: 'Contact', href: '/contact', subtitle: 'Studio Vijayawada' },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Scroll detection: hide on scroll down, show on scroll up, become ivory glass
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      const diff = currentScrollY - lastScrollY.current;

      if (currentScrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (diff > 12 && currentScrollY > 240) {
        // Scrolling down -> hide header
        setIsVisible(false);
      } else if (diff < -12 || currentScrollY <= 80) {
        // Scrolling up or at top -> show header
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = pathname === '/';
  // If not scrolled and on home hero, links are light/champagne; otherwise dark ink
  const isTransparentHero = isHome && !isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isTransparentHero
            ? 'bg-transparent py-5 lg:py-6 text-alabaster'
            : 'bg-ivory/90 backdrop-blur-md py-3.5 lg:py-4 text-ink shadow-[0_4px_30px_rgba(43,20,8,0.04)] border-b border-gold/15'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand Link */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 sm:gap-3.5 transition-transform duration-300 hover:scale-[1.01]"
            aria-label="KA Interiors Homepage"
          >
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full p-1 bg-espresso/80 border border-gold/40 flex items-center justify-center shadow-sm shrink-0">
              <Image
                src="/images/brand/ka-phoenix-monogram.png"
                alt="KA Interiors Phoenix Monogram"
                width={34}
                height={34}
                className="object-contain transition-transform duration-500 group-hover:rotate-6"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-serif text-lg sm:text-2xl tracking-wider font-medium leading-none ${
                isTransparentHero ? 'text-white' : 'text-ink'
              }`}>
                KA <span className="text-gold-gradient font-normal italic">Interiors</span>
              </span>
              <span className={`text-[8px] sm:text-[9px] uppercase tracking-[0.2em] sm:tracking-[0.25em] font-sans mt-0.5 ${
                isTransparentHero ? 'text-champagne/80' : 'text-walnut/70'
              }`}>
                Vijayawada · Est. 30+ Yrs
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-8 xl:gap-10" aria-label="Main Navigation">
            {NAV_LINKS.map((item) => {
              const active = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-xs uppercase tracking-[0.22em] font-medium transition-colors duration-200 py-1 ${
                    isTransparentHero
                      ? active
                        ? 'text-gold'
                        : 'text-alabaster/90 hover:text-gold'
                      : active
                      ? 'text-walnut font-semibold'
                      : 'text-ink/80 hover:text-gold-dark'
                  }`}
                >
                  {item.label}
                  {active && (
                    <motion.div
                      layoutId="navUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-gold via-champagne to-gold"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions: Phone + Book Consultation CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href={`tel:${BRAND_DATA.contact.phone.replace(/[^0-9+]/g, '')}`}
              className={`flex items-center gap-2 text-xs font-sans tracking-wider transition-colors duration-200 ${
                isTransparentHero ? 'text-champagne/90 hover:text-white' : 'text-walnut hover:text-ink'
              }`}
              aria-label={`Call KA Interiors at ${BRAND_DATA.contact.phone}`}
            >
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span>{BRAND_DATA.contact.phone}</span>
            </a>

            <Link
              href="/contact"
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-medium uppercase tracking-[0.2em] rounded-full overflow-hidden transition-all duration-300 border border-gold group text-espresso bg-gold hover:bg-espresso hover:text-champagne hover:border-gold shadow-sm"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isTransparentHero ? 'text-alabaster hover:text-white' : 'text-ink hover:text-gold'
            }`}
            aria-label="Open mobile navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Full-screen Espresso Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-espresso text-ivory flex flex-col justify-between p-6 sm:p-10 bg-grain"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            {/* Top Bar inside Menu */}
            <div className="flex items-center justify-between border-b border-gold/15 pb-6">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full bg-walnut border border-gold/40 flex items-center justify-center">
                  <Image
                    src="/images/brand/ka-phoenix-monogram.png"
                    alt="KA Interiors Monogram"
                    width={34}
                    height={34}
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="font-serif text-xl tracking-wider text-white">
                    KA <span className="text-gold-gradient italic">Interiors</span>
                  </div>
                  <div className="text-[10px] tracking-[0.25em] text-champagne/70 uppercase">
                    Vijayawada
                  </div>
                </div>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-full border border-gold/30 text-champagne hover:text-white hover:border-gold transition-colors"
                aria-label="Close mobile navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav Links with Staggered Motion */}
            <div className="py-8 space-y-4">
              <p className="text-[11px] uppercase tracking-[0.28em] text-gold/70 mb-4 font-sans">
                Navigation
              </p>
              {NAV_LINKS.map((link, idx) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * idx, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="group block py-2"
                  >
                    <div className="flex items-baseline justify-between">
                      <span className="font-serif text-3xl sm:text-4xl text-ivory group-hover:text-gold transition-colors duration-200">
                        {link.label}
                      </span>
                      <span className="text-xs uppercase tracking-widest text-champagne/50 font-sans group-hover:text-gold">
                        0{idx + 1}
                      </span>
                    </div>
                    <p className="text-xs text-champagne/60 font-sans mt-0.5 tracking-wider">
                      {link.subtitle}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Bottom Actions & Contact Information */}
            <div className="border-t border-gold/15 pt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`tel:${BRAND_DATA.contact.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-gold/30 text-champagne hover:border-gold hover:text-white text-xs uppercase tracking-wider font-sans transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold" />
                  <span>{BRAND_DATA.contact.phone}</span>
                </a>
                <a
                  href={BRAND_DATA.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gold text-espresso font-sans text-xs uppercase tracking-wider font-semibold hover:bg-gold-light transition-colors"
                >
                  <span>WhatsApp Studio</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              <div className="flex items-center justify-between text-[11px] text-champagne/60 font-sans pt-2">
                <span>Head Office: {BRAND_DATA.contact.city}</span>
                <span>{BRAND_DATA.stats.experience} Heritage</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
