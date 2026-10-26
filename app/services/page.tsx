import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, Sparkles, Layers, Box, Cpu, FileCheck } from 'lucide-react';
import { BRAND_DATA } from '@/data/brand';

export const metadata: Metadata = {
  title: 'Services & 3D Visualization Suite | KA Interiors',
  description:
    'Comprehensive 7-part photorealistic 3D visualization suite and 6-step turnkey architectural execution methodology by KA Interiors.',
  openGraph: {
    title: '3D Visualization Suite & Turnkey Services | KA Interiors',
    description:
      'Explore our Product Design, 3D Floor Layouts, Interior & Exterior Renders, Walkthroughs, and Plotting Suite.',
  },
};

const FAQ_ITEMS = [
  {
    q: 'How does the 3D Visualization Suite prevent on-site execution errors?',
    a: 'By modeling spatial dimensions, millwork tolerances, and lighting vectors with millimeter precision before civil work starts, all spatial conflicts and material mismatches are solved virtually—saving time, budget, and rework.',
  },
  {
    q: 'Can clients bring existing architectural CAD plans or developer layouts?',
    a: 'Absolutely. We regularly collaborate with independent architects and structural engineers. We import your 2D drawings into our photorealistic rendering pipeline and execute the interior joinery seamlessly.',
  },
  {
    q: 'Do you manage turnkey execution outside Vijayawada?',
    a: 'Our primary design studio and fabrication operations are anchored in Vijayawada, Andhra Pradesh. We execute bespoke residential and commercial flagships across Andhra Pradesh and Telangana.',
  },
  {
    q: 'Are bespoke furniture and sacred mandir woodwork crafted in-house?',
    a: 'Yes. Every custom wardrobe, fluted walnut panel, and hand-carved mandir screen is fabricated by our specialized in-house master carpenters to maintain millimeter quality control.',
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-24 sm:pb-36 bg-ivory text-ink">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-gold font-sans font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Architectural Services</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-ink leading-tight">
            The 3D Visualization{' '}
            <span className="font-normal italic text-gold-gradient block sm:inline">
              Suite &amp; Process
            </span>
          </h1>
          <p className="font-sans text-sm sm:text-base text-walnut/80 leading-relaxed max-w-2xl">
            Experience your space with total photorealistic clarity before ground is broken.
            Our comprehensive 7-stage 3D suite and 6-phase turnkey methodology eliminate guesswork
            and guarantee absolute architectural perfection.
          </p>
        </div>
      </div>

      {/* 7-Part 3D Visualization Deep Dive */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 sm:mb-36">
        <div className="border-b border-gold/20 pb-6 mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-sans font-semibold">
              The Digital Twin
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-ink font-light mt-1">
              7-Part 3D Visualization Suite
            </h2>
          </div>
          <p className="font-sans text-xs text-walnut/70 max-w-xs">
            Ray-traced lighting, physically accurate materials, and immersive cinematic walkthroughs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BRAND_DATA.visualizationSuite.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-3xl overflow-hidden bg-white border border-gold/20 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-espresso">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent opacity-60" />

                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-espresso/80 backdrop-blur-md border border-gold/40 text-[10px] font-sans font-semibold text-champagne uppercase tracking-widest">
                  Service {service.number}
                </div>
              </div>

              <div className="p-6 sm:p-7 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-wider text-gold font-sans font-semibold block">
                    {service.highlight}
                  </span>
                  <h3 className="font-serif text-2xl text-ink group-hover:text-gold-dark transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-walnut/80 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gold/10 flex items-center justify-between text-xs font-sans text-gold">
                  <span>Ray-Traced Precision</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}

          {/* CAD Ready Card */}
          <div className="rounded-3xl p-8 bg-espresso text-ivory bg-grain border border-gold/30 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-walnut border border-gold/40 flex items-center justify-center text-gold">
                <Cpu className="w-6 h-6" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-champagne/70 font-sans block">
                Direct CAD Intake
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white">
                Already have structural plans?
              </h3>
              <p className="font-sans text-xs sm:text-sm text-champagne/85 leading-relaxed">
                Submit your AutoCAD, Revit, or SketchUp drawings. Our 3D studio will transform your blueprints
                into ultra-realistic ray-traced visuals within 7 business days.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-gold text-espresso font-sans text-xs uppercase tracking-widest font-semibold hover:bg-gold-light transition-colors"
            >
              <span>Submit Plans For Review</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6-Phase Concept to Handover Execution */}
      <section className="bg-espresso text-ivory py-24 sm:py-32 border-y border-gold/20 bg-grain mb-24 sm:mb-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.28em] text-gold font-sans font-semibold">
              Single-Point Accountability
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-white leading-tight">
              The 6-Phase{' '}
              <span className="font-normal italic text-gold-gradient">
                Execution Methodology
              </span>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-champagne/80 leading-relaxed">
              From our first studio brief to turnkey key handover, we eliminate the friction between design
              and construction through an integrated in-house team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BRAND_DATA.processSteps.map((step) => (
              <div
                key={step.step}
                className="p-8 rounded-3xl bg-walnut/70 border border-gold/25 shadow-lg flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-gold/15 pb-4">
                    <span className="font-serif text-3xl text-gold font-light">
                      Phase {step.step}
                    </span>
                    <span className="text-[11px] font-sans text-champagne/70 px-3 py-1 rounded-full bg-espresso border border-gold/20">
                      {step.duration}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-white">
                    {step.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-champagne/85 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gold/15 space-y-2">
                  <span className="text-[10px] uppercase tracking-wider text-gold font-sans font-semibold block">
                    Deliverables:
                  </span>
                  <div className="space-y-1.5">
                    {step.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-champagne/80 font-sans">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-12 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-sans font-semibold">
            Clarity &amp; Transparency
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-ink font-light">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="divide-y divide-gold/15">
          {FAQ_ITEMS.map((faq, i) => (
            <div key={i} className="py-6 space-y-2">
              <h3 className="font-serif text-xl sm:text-2xl text-ink font-medium">
                {faq.q}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-walnut/80 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-14 rounded-3xl bg-espresso text-ivory bg-grain border border-gold/30 text-center max-w-3xl mx-auto space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-white">
            Ready to visualize your space?
          </h2>
          <p className="font-sans text-xs sm:text-sm text-champagne/85 max-w-lg mx-auto leading-relaxed">
            Schedule a private design consultation at our Vijayawada head office or connect with our principal
            designer online.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gold text-espresso font-sans text-xs uppercase tracking-widest font-semibold hover:bg-gold-light transition-colors"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href={BRAND_DATA.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gold/40 text-champagne font-sans text-xs uppercase tracking-widest hover:text-white hover:border-gold transition-colors"
            >
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
