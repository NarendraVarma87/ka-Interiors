import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft, ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { PROJECTS } from '@/data/projects';
import { ChapterGallery } from './ChapterGallery';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return { title: 'Chapter Not Found | KA Interiors' };
  }

  return {
    title: `${project.title} | KA Interiors Portfolio`,
    description: `${project.tagline}. ${project.summary}`,
    openGraph: {
      title: `${project.title} — Chapter ${project.chapterNumber} | KA Interiors`,
      description: project.summary,
      images: [
        {
          url: project.coverImage,
          width: 1600,
          height: 1067,
          alt: project.coverAlt,
        },
      ],
    },
  };
}

export default async function ChapterPage({ params }: PageProps) {
  const { slug } = await params;
  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = PROJECTS[projectIndex];
  const prevProject = PROJECTS[(projectIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];

  return (
    <article className="pt-28 sm:pt-36 pb-24 sm:pb-36 bg-ivory text-ink">
      {/* Top Breadcrumb & Chapter Label */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <div className="flex items-center justify-between">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-sans font-semibold text-walnut/70 hover:text-ink transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-gold" />
            <span>Back to All Chapters</span>
          </Link>

          <div className="flex items-center gap-1.5">
            <span className="text-xs uppercase tracking-widest font-sans font-semibold text-gold">
              Chapter {project.chapterNumber}
            </span>
            <span className="text-walnut/40">/</span>
            <span className="text-xs uppercase tracking-widest font-sans text-walnut/60">
              16
            </span>
          </div>
        </div>
      </div>

      {/* Chapter Title & Headline */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-alabaster border border-gold/20 text-walnut text-[11px] font-sans uppercase tracking-widest">
            <Sparkles className="w-3 h-3 text-gold" />
            <span>{project.category} Architecture</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-ink leading-tight">
            {project.title.split(' ')[0]}{' '}
            <span className="font-normal italic text-gold-gradient">
              {project.title.split(' ').slice(1).join(' ')}
            </span>
          </h1>

          <p className="font-serif text-lg sm:text-xl lg:text-2xl text-walnut/90 italic font-normal leading-relaxed">
            &ldquo;{project.tagline}&rdquo;
          </p>
        </div>
      </div>

      {/* Hero Cover Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-20">
        <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9] rounded-3xl overflow-hidden border border-gold/30 shadow-2xl bg-espresso">
          <Image
            src={project.coverImage}
            alt={project.coverAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent" />
        </div>
      </div>

      {/* Chapter Body & Specs Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Specs & Materials Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            {/* Specs Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-alabaster/70 border border-gold/20 space-y-6">
              <h3 className="font-sans text-xs uppercase tracking-[0.25em] text-gold font-semibold">
                Architectural Specifications
              </h3>

              <div className="space-y-4">
                {project.specs.map((spec, i) => (
                  <div key={i} className="border-b border-gold/15 pb-3 space-y-1">
                    <span className="text-[10px] uppercase tracking-wider text-walnut/60 font-sans block">
                      {spec.label}
                    </span>
                    <span className="font-sans text-xs sm:text-sm text-ink font-medium">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Material Palette */}
              <div className="pt-2 space-y-2">
                <span className="text-[10px] uppercase tracking-wider text-walnut/60 font-sans block">
                  Material Palette
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.materials.map((mat, i) => (
                    <span
                      key={i}
                      className="text-[10px] uppercase tracking-wider font-sans px-2.5 py-1 rounded bg-white text-walnut border border-gold/20"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tonal Range */}
              <div className="pt-2 space-y-2">
                <span className="text-[10px] uppercase tracking-wider text-walnut/60 font-sans block">
                  Atmospheric Tones
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.palette.map((pal, i) => (
                    <span
                      key={i}
                      className="text-[10px] uppercase tracking-wider font-sans px-2.5 py-1 rounded bg-espresso text-champagne border border-gold/30"
                    >
                      {pal}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Contact Box */}
            <div className="p-6 rounded-2xl bg-espresso text-ivory bg-grain border border-gold/20 space-y-4">
              <h4 className="font-serif text-xl text-white">
                Envision this for your home?
              </h4>
              <p className="font-sans text-xs text-champagne/80 leading-relaxed">
                Consult with our studio about adapting this design language to your spatial dimensions.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center w-full py-2.5 rounded-full bg-gold text-espresso font-sans text-xs uppercase tracking-widest font-semibold hover:bg-gold-light transition-colors"
              >
                <span>Book Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: Editorial Copy (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-6 font-sans text-base sm:text-lg text-walnut/90 leading-relaxed font-light">
              {project.editorialCopy.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* Pull Quote */}
            {project.quote && (
              <blockquote className="my-10 p-8 rounded-2xl bg-alabaster/60 border-l-4 border-gold italic font-serif text-2xl text-ink leading-relaxed">
                &ldquo;{project.quote}&rdquo;
              </blockquote>
            )}

            {/* Photo Gallery */}
            <div className="pt-8 border-t border-gold/20 space-y-6">
              <div className="flex items-baseline justify-between">
                <h3 className="font-serif text-2xl sm:text-3xl text-ink">
                  Detailed Photo Gallery
                </h3>
                <span className="text-xs uppercase tracking-widest text-gold font-sans font-semibold">
                  {project.gallery.length} Perspectives
                </span>
              </div>

              <ChapterGallery gallery={project.gallery} title={project.title} />
            </div>
          </div>
        </div>
      </div>

      {/* Prev / Next Chapter Magazine Pagination */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gold/20 pt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Previous Chapter */}
          <Link
            href={`/portfolio/${prevProject.slug}`}
            className="group flex items-center gap-4 p-5 rounded-2xl bg-alabaster/60 border border-gold/20 hover:border-gold hover:bg-white transition-all"
          >
            <div className="w-10 h-10 rounded-full bg-espresso flex items-center justify-center text-champagne shrink-0 group-hover:scale-105 transition-transform">
              <ArrowLeft className="w-4 h-4 text-gold" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-gold font-sans font-semibold block">
                Previous Chapter {prevProject.chapterNumber}
              </span>
              <span className="font-serif text-lg sm:text-xl text-ink group-hover:text-gold-dark transition-colors">
                {prevProject.title}
              </span>
            </div>
          </Link>

          {/* Next Chapter */}
          <Link
            href={`/portfolio/${nextProject.slug}`}
            className="group flex items-center justify-between p-5 rounded-2xl bg-alabaster/60 border border-gold/20 hover:border-gold hover:bg-white transition-all text-right"
          >
            <div>
              <span className="text-[10px] uppercase tracking-widest text-gold font-sans font-semibold block">
                Next Chapter {nextProject.chapterNumber}
              </span>
              <span className="font-serif text-lg sm:text-xl text-ink group-hover:text-gold-dark transition-colors">
                {nextProject.title}
              </span>
            </div>
            <div className="w-10 h-10 rounded-full bg-espresso flex items-center justify-center text-champagne shrink-0 group-hover:scale-105 transition-transform">
              <ArrowRight className="w-4 h-4 text-gold" />
            </div>
          </Link>
        </div>
      </div>
    </article>
  );
}
