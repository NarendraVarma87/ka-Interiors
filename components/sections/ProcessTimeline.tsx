'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { BRAND_DATA } from '@/data/brand';

export function ProcessTimeline() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = BRAND_DATA.processSteps[activeStepIndex];

  return (
    <section className="relative bg-espresso text-ivory py-24 sm:py-36 border-b border-gold/15 bg-grain overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-gold/15">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-gold font-sans font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Concept to Handover</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight">
              Our 6-Step{' '}
              <span className="font-normal italic text-gold-gradient">
                Execution Method
              </span>
            </h2>
          </div>

          <p className="font-sans text-xs sm:text-sm text-champagne/80 max-w-md leading-relaxed">
            A seamless turnkey journey where architectural vision translates into reality with
            singular accountability, transparent timelines, and zero contractor friction.
          </p>
        </div>

        {/* Stepper Navigation Bar */}
        <div data-lenis-prevent="true" className="py-8 border-b border-gold/15 overflow-x-auto scrollbar-none">
          <div className="flex items-center min-w-max gap-3 sm:gap-4">
            {BRAND_DATA.processSteps.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              const isPassed = activeStepIndex > idx;

              return (
                <div key={step.step} className="flex items-center">
                  <button
                    onClick={() => setActiveStepIndex(idx)}
                    className={`group relative flex items-center gap-3 px-4 py-2.5 rounded-full border transition-all duration-300 outline-none ${
                      isActive
                        ? 'border-gold bg-walnut/90 shadow-md text-white'
                        : isPassed
                        ? 'border-gold/30 bg-espresso/50 text-gold hover:border-gold/60'
                        : 'border-white/10 bg-espresso/30 text-champagne/60 hover:text-white hover:border-gold/30'
                    }`}
                  >
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-sans font-semibold transition-colors ${
                        isActive
                          ? 'bg-gold text-espresso'
                          : isPassed
                          ? 'bg-gold/20 text-gold'
                          : 'bg-white/10 text-champagne/60'
                      }`}
                    >
                      {step.step}
                    </span>
                    <span className="font-serif text-base tracking-wide whitespace-nowrap">
                      {step.title}
                    </span>
                  </button>

                  {idx < BRAND_DATA.processSteps.length - 1 && (
                    <div className="w-6 sm:w-8 h-[1px] bg-gold/20 mx-1 sm:mx-2 shrink-0" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Active Step Detailed Showcase */}
        <div className="pt-12 sm:pt-16 max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep.step}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="p-8 sm:p-12 rounded-3xl bg-walnut/70 border border-gold/30 shadow-2xl relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-8 border-b border-gold/15">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.25em] text-gold font-sans font-semibold">
                    Phase {activeStep.step} of 06
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-white font-light">
                    {activeStep.title}
                  </h3>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-espresso/80 border border-gold/20 text-xs text-champagne font-sans">
                  <Clock className="w-3.5 h-3.5 text-gold" />
                  <span>Timeline: {activeStep.duration}</span>
                </div>
              </div>

              <div className="py-8">
                <p className="font-sans text-base sm:text-lg text-champagne/95 leading-relaxed font-light">
                  {activeStep.description}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="pt-6 border-t border-gold/15 space-y-3">
                <h4 className="text-xs uppercase tracking-[0.25em] text-gold font-sans font-semibold">
                  Key Milestones &amp; Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {activeStep.deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-champagne/85 font-sans">
                      <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="mt-8 pt-6 border-t border-gold/15 flex items-center justify-between">
                <button
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  className="text-xs uppercase tracking-widest text-champagne/60 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
                >
                  ← Previous Phase
                </button>

                <button
                  disabled={activeStepIndex === BRAND_DATA.processSteps.length - 1}
                  onClick={() =>
                    setActiveStepIndex((prev) =>
                      Math.min(BRAND_DATA.processSteps.length - 1, prev + 1)
                    )
                  }
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-gold hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
                >
                  <span>Next Phase</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
