import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[85vh] bg-espresso text-ivory flex items-center justify-center px-4 py-24 bg-grain relative">
      <div className="max-w-xl mx-auto text-center space-y-6 relative z-10">
        {/* Prominent Highlighted Gold Monogram Seal */}
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto">
          {/* Luminous Gold Halo */}
          <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-gold/70 via-gold/30 to-gold-light/60 blur-xl opacity-85 pointer-events-none" />
          
          {/* Metallic Gold Ring */}
          <div className="relative w-full h-full rounded-full p-[2.5px] bg-gradient-to-tr from-gold-dark via-gold-light to-gold shadow-[0_8px_30px_rgba(201,149,60,0.5)]">
            <div className="w-full h-full rounded-full bg-espresso flex items-center justify-center p-3">
              <div className="relative w-full h-full">
                <Image
                  src="/images/brand/ka-phoenix-monogram.png"
                  alt="KA Interiors Monogram Seal"
                  fill
                  className="object-contain drop-shadow-[0_2px_10px_rgba(201,149,60,0.8)]"
                />
              </div>
            </div>
          </div>
        </div>

        <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold block">
          Error 404
        </span>

        <h1 className="font-serif text-4xl sm:text-5xl font-light text-white">
          A Space Yet To Be{' '}
          <span className="font-normal italic text-gold-gradient">Designed</span>
        </h1>

        <p className="font-sans text-sm text-champagne/80 leading-relaxed max-w-md mx-auto">
          The page or architectural chapter you are seeking does not exist or has been relocated.
          Please return to our home entrance or explore our portfolio.
        </p>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-espresso font-sans text-xs uppercase tracking-[0.2em] font-semibold hover:bg-gold-light transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Studio Home</span>
          </Link>

          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gold/40 text-champagne font-sans text-xs uppercase tracking-[0.2em] hover:text-white hover:border-gold transition-colors"
          >
            <span>Explore Portfolio</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
