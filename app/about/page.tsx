import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Sparkles, Check, MapPin } from 'lucide-react';
import { BRAND_DATA } from '@/data/brand';

export const metadata: Metadata = {
  title: 'About the Studio | 30+ Years Heritage | KA Interiors',
  description:
    'Discover the philosophy, craftsmanship, and 30+ years of architectural heritage behind KA Interiors. Luxury studio headquartered in Vijayawada.',
  openGraph: {
    title: 'About KA Interiors | Designing Spaces. Inspiring Lives.',
    description:
      'Thirty years of master craftsmanship across real estate, construction, and bespoke turnkey interiors.',
  },
};

export default function AboutPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-24 sm:pb-36 bg-ivory text-ink">
      {/* Studio Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-gold font-sans font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Thirty Years of Architectural Heritage</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-ink leading-tight">
            Quiet Luxury,{' '}
            <span className="font-normal italic text-gold-gradient block sm:inline">
              Honest Craft.
            </span>
          </h1>
          <p className="font-sans text-sm sm:text-base text-walnut/80 leading-relaxed max-w-2xl">
            KA Interiors was founded upon a singular architectural premise: that a home or commercial
            space should not merely be decorated, but deeply understood, sculpted with intention,
            and built to endure for generations.
          </p>
        </div>
      </div>

      {/* Hero Studio Collage */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 sm:mb-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 relative aspect-[16/10] rounded-3xl overflow-hidden border border-gold/30 shadow-2xl bg-espresso">
            <Image
              src="/images/projects/the-dining-salone-main-1600.webp"
              alt="KA Interiors Dining Salone"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent" />
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-espresso text-ivory bg-grain border border-gold/25 shadow-xl space-y-6">
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-sans font-semibold block">
                The Heritage Metric
              </span>
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-6xl text-white font-medium">30+</span>
                <span className="font-serif text-2xl text-gold-gradient italic">Years</span>
              </div>
              <p className="font-sans text-sm text-champagne/90 leading-relaxed">
                Over three decades of integrated mastery across land development, structural engineering,
                real estate construction, and bespoke interior architecture throughout Andhra Pradesh and South India.
              </p>
              <div className="pt-4 border-t border-gold/15 flex items-center gap-2 text-xs text-champagne/70 font-sans">
                <MapPin className="w-4 h-4 text-gold shrink-0" />
                <span>Anchored in Vijayawada · Serving Discerning Clients Nationwide</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Editorial Manifesto */}
      <section className="bg-espresso text-ivory py-24 sm:py-36 border-y border-gold/20 bg-grain mb-24 sm:mb-36">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="space-y-4 text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold">
              The Studio Manifesto
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-white leading-tight">
              &ldquo;We design before we build.&rdquo;
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 font-sans text-sm sm:text-base text-champagne/90 leading-relaxed font-light">
            <p>
              Great design lives in the details: every curve, material, and finish is chosen with intent and
              built to last. From concept to handover, we handle it all. We believe spaces should not be
              transient trends that fatigue after a season; they should age with grace, dignity, and warmth.
            </p>
            <p>
              Whether residential or commercial, we approach every project with the same discipline:
              understand the space&apos;s purpose, design around it, and execute without compromise.
              We don&apos;t just build interiors—we build spaces that reflect who you are and support how you grow.
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-walnut/70 border border-gold/30 text-center">
            <p className="font-serif text-2xl sm:text-3xl text-gold-gradient italic font-normal">
              &ldquo;{BRAND_DATA.signOff}&rdquo;
            </p>
            <span className="text-xs uppercase tracking-[0.25em] text-champagne/60 font-sans mt-3 block">
              The KA Interiors Signature
            </span>
          </div>
        </div>
      </section>

      {/* Material & Craftsmanship Ethics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 sm:mb-36">
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-sans font-semibold">
            Material Sincerity
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-ink font-light">
            The Ethics of Craftsmanship
          </h2>
          <p className="font-sans text-xs sm:text-sm text-walnut/80 leading-relaxed">
            We partner directly with sustainable timber mills, stone quarries in Rajasthan and Andhra Pradesh,
            and master weavers to source honest, natural materials.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRAND_DATA.materials.map((mat) => (
            <div key={mat.id} className="p-6 rounded-2xl bg-alabaster/60 border border-gold/20 space-y-3">
              <span className="text-[10px] uppercase tracking-wider text-gold font-sans font-semibold block">
                {mat.finish}
              </span>
              <h3 className="font-serif text-xl text-ink font-medium">
                {mat.name}
              </h3>
              <p className="font-sans text-xs text-walnut/80 leading-relaxed">
                {mat.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Consultation Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-14 rounded-3xl bg-espresso text-ivory bg-grain border border-gold/30 text-center max-w-3xl mx-auto space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-white">
            Experience the studio in person
          </h2>
          <p className="font-sans text-xs sm:text-sm text-champagne/85 max-w-lg mx-auto leading-relaxed">
            Visit our Vijayawada head office for an immersive material review and 3D walkthrough demonstration.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gold text-espresso font-sans text-xs uppercase tracking-widest font-semibold hover:bg-gold-light transition-colors"
            >
              <span>Schedule a Studio Visit</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
