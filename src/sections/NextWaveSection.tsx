import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, ChevronDown, ChevronUp, ShieldCheck, ArrowUpRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';

interface FoundationProject {
  id: string;
  title: string;
  category: string;
  status: 'Live & Active' | 'Upcoming / In Development';
  shortDesc: string;
  scope: string;
  techStack: string[];
  features: string[];
  metrics: string;
  liveUrl?: string;
}

const FOUNDATION_PROJECTS: FoundationProject[] = [
  {
    id: 'sjc',
    title: "St. Joseph's College Portal",
    category: 'Higher Education Ecosystem',
    status: 'Live & Active',
    shortDesc: 'Comprehensive digital infrastructure for institutional communication, academic programs, and student portals.',
    scope: 'Institutional Architecture & Web Infrastructure',
    techStack: ['React', 'Next.js', 'Laravel', 'MySQL', 'Tailwind CSS'],
    liveUrl: 'https://stjosephscollegemoolamattom.ac.in/',
    features: [
      'Centralized academic department & faculty directories',
      'Dynamic event publishing & examination announcements',
      'Admissions pipeline & student grievance routing system',
      'High-throughput mobile-first responsive design',
    ],
    metrics: 'Serving 5,000+ students & faculty daily with 99.9% uptime',
  },
  {
    id: 'bethania',
    title: 'Bethania Convent School, Punjab',
    category: 'K-12 Educational Institution',
    status: 'Live & Active',
    shortDesc: 'Modern school management & public communications portal with automated admissions and notice boards.',
    scope: 'School Management & Admissions Gateway',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Firebase'],
    liveUrl: 'https://www.bcskik.com/',
    features: [
      'Interactive admissions application workflow',
      'Real-time examination schedules & academic circulars',
      'Faculty spotlight & parent communication matrix',
      'Optimized lightweight asset delivery for regional bandwidths',
    ],
    metrics: '100% digital admission inquiries & parent engagement',
  },
];

export default function NextWaveSection() {
  const [expandedId, setExpandedId] = useState<string | null>('sjc');

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="nextwave"
      className="relative min-h-screen bg-[#0C0C0C] text-[#D7E2EA] px-6 sm:px-10 lg:px-16 py-24 sm:py-32 border-t border-white/[0.08] overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-1/2 right-5 w-[450px] h-[450px] bg-purple-900/10 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <FadeIn delay={0} y={30} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Building2 className="w-3.5 h-3.5" />
            JOSEPHITES NEXTWAVE FOUNDATION
          </div>

          <h2
            className="hero-heading font-black uppercase text-center leading-tight"
            style={{ fontSize: 'clamp(2.2rem, 6.5vw, 85px)' }}
          >
            I don&apos;t just learn technology. <br />
            <span className="text-white">I build with it.</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#D7E2EA]/70 max-w-2xl mx-auto font-light leading-relaxed">
            As a core technical contributor &amp; team lead at Josephites NextWave Foundation, I architect and deploy production web platforms for prominent academic and provincial institutions.
          </p>
        </FadeIn>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FOUNDATION_PROJECTS.map((proj, idx) => {
            const isExpanded = expandedId === proj.id;
            const isUpcoming = proj.status.includes('Upcoming');

            return (
              <FadeIn key={proj.id} delay={0.1 + idx * 0.1} y={25}>
                <div
                  className={`rounded-3xl border transition-all duration-300 backdrop-blur-sm p-6 sm:p-8 flex flex-col justify-between ${
                    isExpanded
                      ? 'bg-white/[0.06] border-purple-400/40 shadow-xl shadow-purple-950/20'
                      : 'bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]'
                  }`}
                >
                  <div>
                    {/* Status & Category */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className="text-xs font-mono uppercase tracking-wider text-[#D7E2EA]/60">
                        {proj.category}
                      </span>
                      <span
                        className={`text-[11px] font-mono px-3 py-1 rounded-full border ${
                          isUpcoming
                            ? 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                            : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                        }`}
                      >
                        {proj.status}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{proj.title}</h3>
                    <p className="text-xs sm:text-sm text-[#D7E2EA]/80 font-light leading-relaxed mb-4">
                      {proj.shortDesc}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {proj.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10 text-cyan-200/90"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Expandable Mini Case Study */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden pt-4 border-t border-white/10 space-y-4"
                        >
                          <div>
                            <span className="text-xs font-mono text-purple-300 block mb-1">
                              CORE DELIVERABLES &amp; CAPABILITIES:
                            </span>
                            <ul className="space-y-1.5">
                              {proj.features.map((feat, fIdx) => (
                                <li
                                  key={fIdx}
                                  className="text-xs text-[#D7E2EA]/75 flex items-start gap-2 font-light"
                                >
                                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                                  <span>{feat}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 text-xs font-mono text-[#D7E2EA]">
                            <span className="text-emerald-400 font-semibold block mb-0.5">IMPACT METRIC:</span>
                            {proj.metrics}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Toggle Button & Live Link */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                    <button
                      onClick={() => toggleExpand(proj.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-300 hover:text-white transition-colors"
                    >
                      {isExpanded ? (
                        <>
                          Hide Case Study <ChevronUp className="w-3.5 h-3.5" />
                        </>
                      ) : (
                        <>
                          Expand Case Study <ChevronDown className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>

                    {proj.liveUrl && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono text-purple-300 hover:text-white transition-colors bg-purple-500/15 border border-purple-400/30 px-3 py-1.5 rounded-full hover:bg-purple-500/30"
                      >
                        <span>Live Site</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
