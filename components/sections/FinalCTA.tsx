'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import confetti from 'canvas-confetti';
import { Phone, MessageCircle, MapPin, Send, CheckCircle2, Sparkles, Loader2 } from 'lucide-react';
import { enquirySchema, type EnquiryFormData } from '@/lib/validations/enquiry';
import { BRAND_DATA } from '@/data/brand';

export function FinalCTA() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      projectType: 'residential',
      city: 'Vijayawada',
      budgetRange: '50L - 1Cr',
    },
  });

  const onSubmit = async (data: EnquiryFormData) => {
    setIsSubmitting(true);
    setServerError(null);

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (res.ok && json.success) {
        setSubmitSuccess(json.message);
        reset();
        // Luxury gold & champagne confetti
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#C9953C', '#E8C06A', '#FAF6EE', '#8A5A1E'],
        });
      } else {
        setServerError(json.message || 'Something went wrong. Please call us directly.');
      }
    } catch {
      setServerError('Network error. Please call +91 87900 43355 or message us on WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="enquiry"
      className="relative bg-espresso text-ivory py-16 sm:py-24 lg:py-36 border-b border-gold/15 bg-grain overflow-hidden"
    >
      {/* Background ambient warm backlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-radial from-gold/15 via-espresso/50 to-espresso pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Call to Action */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="space-y-2 sm:space-y-3">
              <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs uppercase tracking-[0.28em] text-gold font-sans font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Begin Your Journey</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-tight">
                Let&apos;s Build Your{' '}
                <span className="font-normal italic text-gold-gradient block">
                  Dream Space Together.
                </span>
              </h2>
            </div>

            <p className="font-sans text-sm sm:text-base text-champagne/85 leading-relaxed">
              Every iconic residence or commercial pavilion begins with a relaxed conversation.
              Share your initial brief, layout, or timeline, and our principal designer will curate
              a tailored proposal for your review.
            </p>

            <blockquote className="border-l-2 border-gold pl-6 py-1 italic font-serif text-lg text-champagne/90">
              &ldquo;{BRAND_DATA.signOff}&rdquo;
            </blockquote>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-4 border-t border-gold/20">
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-sans font-semibold block">
                Direct Communication Channels
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`tel:${BRAND_DATA.contact.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-walnut/70 border border-gold/30 hover:border-gold text-champagne hover:text-white transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-espresso flex items-center justify-center border border-gold/40 group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-champagne/60 font-sans block">
                      Direct Studio Line
                    </span>
                    <span className="font-sans text-xs font-semibold text-white">
                      {BRAND_DATA.contact.phone}
                    </span>
                  </div>
                </a>

                <a
                  href={BRAND_DATA.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-2xl bg-walnut/70 border border-gold/30 hover:border-gold text-champagne hover:text-white transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-espresso flex items-center justify-center border border-gold/40 group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-champagne/60 font-sans block">
                      Instant WhatsApp
                    </span>
                    <span className="font-sans text-xs font-semibold text-white">
                      Chat with Principal
                    </span>
                  </div>
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-champagne/70 font-sans pt-2">
                <MapPin className="w-4 h-4 text-gold shrink-0" />
                <span>Head Office: {BRAND_DATA.contact.address}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-8 md:p-10 lg:p-12 rounded-3xl bg-walnut/80 border border-gold/30 shadow-2xl relative">
              {submitSuccess ? (
                <div className="py-12 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-gold/20 border border-gold flex items-center justify-center mx-auto text-gold">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-3xl text-white">
                    Consultation Request Confirmed
                  </h3>
                  <p className="font-sans text-sm text-champagne/90 max-w-md mx-auto leading-relaxed">
                    {submitSuccess}
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(null)}
                    className="mt-4 px-6 py-2.5 rounded-full border border-gold/40 text-champagne text-xs uppercase tracking-widest hover:border-gold hover:text-white transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="border-b border-gold/20 pb-4">
                    <h3 className="font-serif text-2xl text-white">
                      Book a Private Consultation
                    </h3>
                    <p className="font-sans text-xs text-champagne/70 mt-1">
                      Fill out the form below. We will reach out within 24 hours.
                    </p>
                  </div>

                  {serverError && (
                    <div className="p-3.5 rounded-xl bg-red-950/60 border border-red-500/40 text-red-200 text-xs font-sans">
                      {serverError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="block text-xs uppercase tracking-widest text-champagne/90 font-sans font-medium">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Narendra Varma"
                        {...register('name')}
                        className="w-full px-4 py-3 rounded-xl bg-espresso/90 border border-gold/30 focus:border-gold text-sm text-white placeholder-champagne/40 outline-none transition-colors"
                      />
                      {errors.name && (
                        <p className="text-red-400 text-[11px] font-sans">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label className="block text-xs uppercase tracking-widest text-champagne/90 font-sans font-medium">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +91 98765 43210"
                        {...register('phone')}
                        className="w-full px-4 py-3 rounded-xl bg-espresso/90 border border-gold/30 focus:border-gold text-sm text-white placeholder-champagne/40 outline-none transition-colors"
                      />
                      {errors.phone && (
                        <p className="text-red-400 text-[11px] font-sans">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="block text-xs uppercase tracking-widest text-champagne/90 font-sans font-medium">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. name@example.com"
                        {...register('email')}
                        className="w-full px-4 py-3 rounded-xl bg-espresso/90 border border-gold/30 focus:border-gold text-sm text-white placeholder-champagne/40 outline-none transition-colors"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-[11px] font-sans">{errors.email.message}</p>
                      )}
                    </div>

                    {/* City */}
                    <div className="space-y-1.5">
                      <label className="block text-xs uppercase tracking-widest text-champagne/90 font-sans font-medium">
                        Project City *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Vijayawada, Guntur, Hyderabad"
                        {...register('city')}
                        className="w-full px-4 py-3 rounded-xl bg-espresso/90 border border-gold/30 focus:border-gold text-sm text-white placeholder-champagne/40 outline-none transition-colors"
                      />
                      {errors.city && (
                        <p className="text-red-400 text-[11px] font-sans">{errors.city.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Project Type */}
                    <div className="space-y-1.5">
                      <label className="block text-xs uppercase tracking-widest text-champagne/90 font-sans font-medium">
                        Project Typology *
                      </label>
                      <select
                        {...register('projectType')}
                        className="w-full px-4 py-3 rounded-xl bg-espresso/90 border border-gold/30 focus:border-gold text-sm text-white outline-none transition-colors"
                      >
                        <option value="residential">Residential (Villa / Duplex / Apartment)</option>
                        <option value="commercial">Commercial (Café / Retail / Office)</option>
                        <option value="both">Both / Multi-use Architecture</option>
                      </select>
                    </div>

                    {/* Budget Range */}
                    <div className="space-y-1.5">
                      <label className="block text-xs uppercase tracking-widest text-champagne/90 font-sans font-medium">
                        Estimated Budget *
                      </label>
                      <select
                        {...register('budgetRange')}
                        className="w-full px-4 py-3 rounded-xl bg-espresso/90 border border-gold/30 focus:border-gold text-sm text-white outline-none transition-colors"
                      >
                        <option value="25L - 50L">₹25 Lakhs – ₹50 Lakhs</option>
                        <option value="50L - 1Cr">₹50 Lakhs – ₹1 Crore</option>
                        <option value="1Cr - 2.5Cr">₹1 Crore – ₹2.5 Crores</option>
                        <option value="2.5Cr+">₹2.5 Crores + (Ultra Luxury)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-widest text-champagne/90 font-sans font-medium">
                      Project Vision / Notes *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Share space dimensions, preferred aesthetics (e.g. Sacred mandir, fluted walnut, modern minimalist), or tentative possession date..."
                      {...register('message')}
                      className="w-full px-4 py-3 rounded-xl bg-espresso/90 border border-gold/30 focus:border-gold text-sm text-white placeholder-champagne/40 outline-none transition-colors resize-none"
                    />
                    {errors.message && (
                      <p className="text-red-400 text-[11px] font-sans">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gold text-espresso font-sans text-xs uppercase tracking-[0.25em] font-semibold hover:bg-gold-light transition-all duration-300 shadow-lg glow-gold-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Transmitting Brief...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Consultation Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-center text-champagne/50 font-sans">
                    We respect your privacy. No spam or third-party sharing.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
