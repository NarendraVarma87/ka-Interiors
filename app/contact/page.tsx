import type { Metadata } from 'next';
import Image from 'next/image';
import { Phone, MessageCircle, MapPin, Mail, Clock, Sparkles } from 'lucide-react';
import { BRAND_DATA } from '@/data/brand';
import { FinalCTA } from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'Contact Studio | Vijayawada Head Office | KA Interiors',
  description:
    'Connect with KA Interiors luxury design studio. Head Office in Vijayawada. Call or WhatsApp +91 87900 43355 for bespoke residential & commercial consultations.',
  openGraph: {
    title: 'Contact KA Interiors Studio | Vijayawada',
    description:
      'Book a private design consultation. Head office: Vijayawada, Andhra Pradesh. Phone: +91 87900 43355.',
  },
};

export default function ContactPage() {
  return (
    <div className="pt-28 sm:pt-36 bg-ivory text-ink">
      {/* Contact Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-gold font-sans font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect with the Studio</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-ink leading-tight">
            Consult With Our{' '}
            <span className="font-normal italic text-gold-gradient block sm:inline">
              Principal Designers
            </span>
          </h1>
          <p className="font-sans text-xs sm:text-sm lg:text-base text-walnut/80 leading-relaxed max-w-2xl">
            Whether you are commissioning a new private residence, a tranquil mandir sanctuary,
            or an iconic commercial dining destination, we welcome your inquiry.
          </p>
        </div>
      </div>

      {/* Head Office & Channels Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Head Office */}
          <div className="p-7 rounded-3xl bg-white border border-gold/20 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-full bg-espresso flex items-center justify-center text-gold">
              <MapPin className="w-4 h-4" />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-gold font-sans font-semibold block">
              Head Office
            </span>
            <h3 className="font-serif text-xl text-ink font-medium">
              Vijayawada
            </h3>
            <p className="font-sans text-xs text-walnut/80 leading-relaxed">
              {BRAND_DATA.contact.address}
            </p>
            <span className="text-[11px] text-walnut/60 font-sans block pt-1">
              Andhra Pradesh, India
            </span>
          </div>

          {/* Card 2: Phone */}
          <div className="p-7 rounded-3xl bg-white border border-gold/20 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-full bg-espresso flex items-center justify-center text-gold">
              <Phone className="w-4 h-4" />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-gold font-sans font-semibold block">
              Telephone
            </span>
            <h3 className="font-serif text-xl text-ink font-medium">
              Direct Studio Line
            </h3>
            <a
              href={`tel:${BRAND_DATA.contact.phone.replace(/[^0-9+]/g, '')}`}
              className="font-sans text-xs text-espresso font-semibold hover:text-gold transition-colors block"
            >
              {BRAND_DATA.contact.phone}
            </a>
            <span className="text-[11px] text-walnut/60 font-sans block pt-1">
              Direct call to studio reception
            </span>
          </div>

          {/* Card 3: WhatsApp */}
          <div className="p-7 rounded-3xl bg-white border border-gold/20 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-full bg-espresso flex items-center justify-center text-gold">
              <MessageCircle className="w-4 h-4" />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-gold font-sans font-semibold block">
              Instant Messaging
            </span>
            <h3 className="font-serif text-xl text-ink font-medium">
              WhatsApp Concierge
            </h3>
            <a
              href={BRAND_DATA.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs text-gold font-semibold hover:underline block"
            >
              Chat With Principal →
            </a>
            <span className="text-[11px] text-walnut/60 font-sans block pt-1">
              Typically replies within 2 hours
            </span>
          </div>

          {/* Card 4: Hours */}
          <div className="p-7 rounded-3xl bg-white border border-gold/20 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-full bg-espresso flex items-center justify-center text-gold">
              <Clock className="w-4 h-4" />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-gold font-sans font-semibold block">
              Studio Timings
            </span>
            <h3 className="font-serif text-xl text-ink font-medium">
              Working Hours
            </h3>
            <p className="font-sans text-xs text-walnut/80 leading-relaxed">
              {BRAND_DATA.contact.operatingHours}
            </p>
            <span className="text-[11px] text-walnut/60 font-sans block pt-1">
              Sunday: By Appointment Only
            </span>
          </div>
        </div>
      </div>

      {/* Embedded Consultation Section */}
      <FinalCTA />
    </div>
  );
}
