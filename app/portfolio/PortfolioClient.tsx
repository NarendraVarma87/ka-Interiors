'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import * as Dialog from '@radix-ui/react-dialog';
import { Search, X, ArrowUpRight, Eye, Sparkles } from 'lucide-react';
import { PROJECTS, type ProjectChapter, type ProjectCategory } from '@/data/projects';

export function PortfolioClient({ initialCategory = 'all' }: { initialCategory?: string }) {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>(
    (initialCategory as ProjectCategory) || 'all'
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState<ProjectChapter | null>(null);

  // Filter projects by category and search term
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesCategory =
        selectedCategory === 'all' || project.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.tagline.toLowerCase().includes(q) ||
        project.summary.toLowerCase().includes(q) ||
        project.materials.some((m) => m.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="pt-28 sm:pt-36 pb-24 sm:pb-32 bg-ivory text-ink min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-gold font-sans font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Architectural Anthology</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-ink leading-tight">
            Curated{' '}
            <span className="font-normal italic text-gold-gradient">Portfolio</span>
          </h1>
          <p className="font-sans text-xs sm:text-sm lg:text-base text-walnut/80 leading-relaxed max-w-2xl">
            Explore 16 bespoke architectural chapters, from sacred mandir sanctuaries and sculpted relief walls
            to our two-level commercial flagship. Every space is rendered with millimeter fidelity before execution.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 pb-6 sm:pb-8 border-b border-gold/15 mb-8 sm:mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Portfolio Categories">
            {(['all', 'residential', 'commercial'] as ProjectCategory[]).map((cat) => {
              const isActive = selectedCategory === cat;
              const count =
                cat === 'all'
                  ? PROJECTS.length
                  : PROJECTS.filter((p) => p.category === cat).length;

              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-sans uppercase tracking-[0.18em] font-medium transition-all ${
                    isActive
                      ? 'bg-espresso text-champagne shadow-sm'
                      : 'bg-alabaster/80 text-walnut/80 hover:text-ink hover:bg-alabaster'
                  }`}
                >
                  <span>{cat}</span>
                  <span className="ml-1.5 opacity-60 text-[10px]">({count})</span>
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-walnut/50" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by space or material..."
              className="w-full pl-10 pr-10 py-2.5 rounded-full bg-alabaster/80 border border-gold/20 text-xs font-sans text-ink placeholder-walnut/40 focus:border-gold focus:bg-white outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-walnut/50 hover:text-ink"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="mb-8 flex items-center justify-between text-xs font-sans text-walnut/70">
          <span>
            Displaying <strong className="text-espresso font-semibold">{filteredProjects.length}</strong> of{' '}
            {PROJECTS.length} chapters
          </span>
          {searchQuery && (
            <span className="italic">
              Filtered by: &ldquo;{searchQuery}&rdquo;
            </span>
          )}
        </div>

        {/* Project Grid */}
        {filteredProjects.length === 0 ? (
          <div className="py-20 text-center space-y-4 bg-alabaster/50 rounded-3xl border border-gold/15">
            <p className="font-serif text-2xl text-ink">No architectural chapters found</p>
            <p className="font-sans text-xs text-walnut/70">
              Try adjusting your category filter or clearing the search query.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-5 py-2 rounded-full bg-espresso text-champagne text-xs uppercase tracking-widest hover:bg-gold hover:text-espresso transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.4) }}
                className="group relative rounded-3xl overflow-hidden bg-white border border-gold/20 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
              >
                {/* Image Cover */}
                <div className="relative aspect-[16/11] overflow-hidden bg-espresso">
                  <Image
                    src={project.coverImage}
                    alt={project.coverAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Chapter Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-espresso/80 backdrop-blur-md border border-gold/30 text-[10px] font-sans font-semibold text-champagne uppercase tracking-widest">
                    Chapter {project.chapterNumber}
                  </div>

                  {/* Quick View Button */}
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-espresso/80 backdrop-blur-md border border-gold/30 text-champagne hover:text-white hover:border-gold transition-colors opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label={`Quick view ${project.title}`}
                  >
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-between">
                      <span className="text-[10px] uppercase tracking-widest text-gold font-sans font-semibold">
                        {project.category}
                      </span>
                    </div>

                    <h2 className="font-serif text-2xl text-ink group-hover:text-gold-dark transition-colors">
                      <Link href={`/portfolio/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h2>

                    <p className="font-sans text-xs sm:text-sm text-walnut/80 line-clamp-2 leading-relaxed">
                      {project.tagline || project.summary}
                    </p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-gold/10">
                    {/* Materials preview */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.materials.slice(0, 3).map((mat, i) => (
                        <span
                          key={i}
                          className="text-[10px] uppercase tracking-wider font-sans px-2 py-0.5 rounded bg-alabaster text-walnut/80 border border-gold/10"
                        >
                          {mat}
                        </span>
                      ))}
                    </div>

                    {/* View Details Link */}
                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] font-sans font-semibold text-espresso hover:text-gold transition-colors pt-1"
                    >
                      <span>Explore Chapter</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-gold" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>

      {/* Accessible Quick View Dialog */}
      <Dialog.Root
        open={Boolean(activeModalProject)}
        onOpenChange={(open) => !open && setActiveModalProject(null)}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-espresso/80 backdrop-blur-sm transition-opacity" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[95vw] max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-espresso text-ivory border border-gold/30 shadow-2xl p-6 sm:p-10 bg-grain outline-none">
            {activeModalProject && (
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-gold/20">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-sans font-semibold">
                      Chapter {activeModalProject.chapterNumber} · {activeModalProject.category}
                    </span>
                    <Dialog.Title className="font-serif text-3xl sm:text-4xl text-white">
                      {activeModalProject.title}
                    </Dialog.Title>
                  </div>
                  <Dialog.Close className="p-2 rounded-full border border-gold/30 text-champagne hover:text-white hover:border-gold transition-colors">
                    <X className="w-5 h-5" />
                  </Dialog.Close>
                </div>

                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-gold/25">
                  <Image
                    src={activeModalProject.coverImage}
                    alt={activeModalProject.coverAlt}
                    fill
                    sizes="(max-width: 1024px) 95vw, 800px"
                    className="object-cover"
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="font-serif text-xl text-gold-gradient italic">
                    &ldquo;{activeModalProject.tagline}&rdquo;
                  </h3>
                  <p className="font-sans text-sm text-champagne/90 leading-relaxed">
                    {activeModalProject.summary}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-gold/15">
                    {activeModalProject.specs.map((spec, i) => (
                      <div key={i} className="space-y-1">
                        <span className="text-[10px] uppercase tracking-wider text-champagne/60 font-sans block">
                          {spec.label}
                        </span>
                        <span className="font-sans text-xs text-white font-medium">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gold/20 flex items-center justify-between">
                  <Link
                    href={`/portfolio/${activeModalProject.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-espresso font-sans text-xs uppercase tracking-[0.2em] font-semibold hover:bg-gold-light transition-colors"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  <Dialog.Close className="text-xs uppercase tracking-widest text-champagne/60 hover:text-white font-sans">
                    Close
                  </Dialog.Close>
                </div>
              </div>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
