import { useState } from 'react';
import { Database, Lightbulb, GitFork, Rocket, GraduationCap, Code2, Sparkles } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const THINKING_STEPS = [
  {
    step: '01',
    label: 'DATA',
    subtitle: 'Raw Signal',
    icon: Database,
    color: 'from-cyan-500/20 to-blue-600/10',
    border: 'border-cyan-500/30',
    description: 'Gathering, cleaning, and structuring unstructured signals into coherent information matrices.',
  },
  {
    step: '02',
    label: 'INSIGHT',
    subtitle: 'Pattern & Context',
    icon: Lightbulb,
    color: 'from-purple-500/20 to-pink-600/10',
    border: 'border-purple-500/30',
    description: 'Discovering latent patterns, correlation vs causation, and mathematical principles governing the problem.',
  },
  {
    step: '03',
    label: 'DECISION',
    subtitle: 'Algorithmic Logic',
    icon: GitFork,
    color: 'from-amber-500/20 to-orange-600/10',
    border: 'border-amber-500/30',
    description: 'Translating mathematical insights into optimized algorithms, scoring weights, and backend architectures.',
  },
  {
    step: '04',
    label: 'IMPACT',
    subtitle: 'Live Intelligence',
    icon: Rocket,
    color: 'from-emerald-500/20 to-teal-600/10',
    border: 'border-emerald-500/30',
    description: 'Shipping robust, production-grade applications that solve genuine human problems seamlessly.',
  },
];

const JOURNEY_MILESTONES = [
  {
    year: '2023 - 2024',
    title: 'Foundations in Data & Computation',
    tag: 'Academic Core',
    icon: GraduationCap,
    details: 'Mastering statistics, Python computing, linear algebra, and data structures to understand computation from first principles.',
  },
  {
    year: '2024 - 2025',
    title: 'Full-Stack & Systems Engineering',
    tag: 'Production Building',
    icon: Code2,
    details: 'Building production client portals at NextWave, mastering React, Laravel, REST architectures, and scalable web engines.',
  },
  {
    year: '2025 - Present',
    title: 'Intelligent Systems & AI Research',
    tag: 'Applied Intelligence',
    icon: Sparkles,
    details: 'Designing recommendation algorithms (SmarTravel), integrating live environmental data pipelines, and exploring ML.',
  },
];

export default function HowIThinkSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="how-i-think"
      className="relative min-h-screen bg-[#0C0C0C] text-[#D7E2EA] px-6 sm:px-10 lg:px-16 py-24 sm:py-32 border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background ambient accents */}
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-purple-900/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <FadeIn delay={0} y={30} className="text-center mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            02 • PHILOSOPHY &amp; APPROACH
          </span>
          <h2
            className="hero-heading font-black uppercase text-center mt-2 leading-tight"
            style={{ fontSize: 'clamp(2.4rem, 7vw, 90px)' }}
          >
            How I Think
          </h2>
          <p
            className="mt-6 text-[#D7E2EA] font-light max-w-3xl leading-relaxed text-center mx-auto"
            style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.75rem)' }}
          >
            &ldquo;I don&apos;t just build software. <br className="hidden sm:inline" />
            <span className="text-white font-medium">I try to understand the problem behind it.</span>&rdquo;
          </p>
        </FadeIn>

        {/* The 4-Step Animated Pipeline */}
        <div className="w-full mb-20 sm:mb-28">
          <FadeIn delay={0.15} y={20} className="text-center mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D7E2EA]/60">
              The Cognitive Loop • Click to inspect phase
            </span>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {THINKING_STEPS.map((item, index) => {
              const Icon = item.icon;
              const isSelected = activeStep === index;
              return (
                <FadeIn key={item.label} delay={0.1 + index * 0.1} y={25}>
                  <div
                    onClick={() => setActiveStep(index)}
                    className={`cursor-pointer group relative p-6 sm:p-7 rounded-3xl border transition-all duration-300 backdrop-blur-sm flex flex-col justify-between h-full min-h-[220px] ${
                      isSelected
                        ? `bg-white/[0.08] ${item.border} shadow-lg shadow-purple-900/20 scale-[1.02]`
                        : 'bg-white/[0.02] border-white/10 hover:border-white/25 hover:bg-white/[0.04]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono font-bold tracking-widest text-[#D7E2EA]/40">
                          PHASE {item.step}
                        </span>
                        <div
                          className={`p-2.5 rounded-2xl bg-gradient-to-br ${item.color} border border-white/10 text-white`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold tracking-wide text-white uppercase flex items-center gap-2">
                        {item.label}
                      </h3>
                      <span className="text-xs font-mono uppercase tracking-wider text-purple-300/80">
                        {item.subtitle}
                      </span>
                    </div>

                    <p className="mt-4 text-xs sm:text-sm text-[#D7E2EA]/80 font-light leading-relaxed">
                      {item.description}
                    </p>

                    {/* Active indicator pip */}
                    {isSelected && (
                      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-cyan-300">
                        <span>ACTIVE FOCUS</span>
                        <span>→</span>
                      </div>
                    )}
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>

        {/* Interactive Journey Timeline */}
        <div className="w-full">
          <FadeIn delay={0.2} y={20} className="text-center mb-10">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-[#D7E2EA]/60">
              Journey &amp; Evolution
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-white mt-1">
              Building From Curiosity
            </h3>
          </FadeIn>

          <div className="relative border-l-2 border-white/10 pl-6 sm:pl-10 ml-4 sm:ml-8 space-y-10">
            {JOURNEY_MILESTONES.map((milestone, idx) => {
              const MIcon = milestone.icon;
              return (
                <FadeIn key={milestone.title} delay={0.15 + idx * 0.15} x={20}>
                  <div className="relative group">
                    {/* Glowing timeline node */}
                    <div className="absolute -left-[31px] sm:-left-[47px] top-1 p-2 rounded-full bg-[#0C0C0C] border-2 border-purple-400 text-purple-300 group-hover:scale-110 group-hover:border-cyan-400 transition-transform">
                      <MIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>

                    <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all hover:bg-white/[0.04]">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs sm:text-sm font-mono font-bold text-cyan-400">
                          {milestone.year}
                        </span>
                        <span className="text-[11px] font-medium uppercase tracking-widest px-3 py-1 rounded-full bg-purple-500/20 text-purple-200 border border-purple-400/30">
                          {milestone.tag}
                        </span>
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wide">
                        {milestone.title}
                      </h4>
                      <p className="mt-2 text-xs sm:text-sm text-[#D7E2EA]/75 font-light leading-relaxed">
                        {milestone.details}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
