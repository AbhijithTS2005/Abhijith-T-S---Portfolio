import { Microscope, Sparkles, Terminal, CheckCircle, Brain, Cpu, Database } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const LAB_EXPERIMENTS = [
  {
    tag: 'ACTIVE RESEARCH PROJECT',
    title: 'Context-Aware Recommendation & Environmental Modeling',
    focus: 'SmarTravel Intelligence Engine',
    points: [
      'Multi-Objective Recommendation: Balancing subjective tourist desires against objective environmental safety constraints.',
      'Personalization & Collaborative Filtering: Clustering traveler behavioral vectors against historical destination sentiment.',
      'Real-Time Environmental Telemetry: Streaming live AQI, weather radars, and tourist footfall indices into scoring functions.',
      'Dynamic Constraint Optimization: Minimizing cost and travel strain while maximizing experiential satisfaction.',
    ],
    status: 'Benchmarking & Prototype Deployment',
  },
];

const EXPLORATION_FRONTIERS = [
  { title: 'Machine Learning & Deep Neural Nets', icon: Brain, desc: 'Exploring feature engineering, supervised regression models, and neural embeddings for multidimensional preference mapping.' },
  { title: 'Applied Artificial Intelligence', icon: Cpu, desc: 'Investigating LLM agents, natural language query understanding, and automated contextual summary generation.' },
  { title: 'Data-Driven Intelligent Systems', icon: Database, desc: 'Designing fault-tolerant streaming pipelines that convert unstructured sensor & web streams into decision matrices.' },
  { title: 'Intelligent Recommendation Architectures', icon: Sparkles, desc: 'Researching matrix factorization, hybrid content-collaborative filtering, and graph-based association algorithms.' },
  { title: 'Scalable Microservice Engineering', icon: Terminal, desc: 'Building asynchronous FastAPI & asynchronous message queues capable of sub-50ms inference serving.' },
];

export default function ResearchLabSection() {
  return (
    <section
      id="research"
      className="relative min-h-screen bg-[#0C0C0C] text-[#D7E2EA] px-6 sm:px-10 lg:px-16 py-24 sm:py-32 border-t border-white/[0.08] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <FadeIn delay={0} y={30} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Microscope className="w-3.5 h-3.5" />
            RESEARCH &amp; EXPERIMENTS
          </div>

          <h2
            className="hero-heading font-black uppercase text-center leading-tight"
            style={{ fontSize: 'clamp(2.4rem, 7vw, 90px)' }}
          >
            Research Lab
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#D7E2EA]/70 max-w-xl mx-auto font-light">
            Beyond commercial web development — exploring core research in recommendation algorithms, ML telemetry, and predictive modeling.
          </p>
        </FadeIn>

        {/* Featured Experiment Card */}
        <div className="space-y-12">
          {LAB_EXPERIMENTS.map((exp) => (
            <FadeIn key={exp.title} delay={0.1} y={25}>
              <div className="p-6 sm:p-10 rounded-[32px] sm:rounded-[40px] bg-gradient-to-br from-white/[0.04] to-purple-950/10 border border-white/10 backdrop-blur-md">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30">
                    {exp.tag}
                  </span>
                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    {exp.status}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">{exp.title}</h3>
                <span className="text-xs sm:text-sm font-mono text-cyan-300 block mb-6">
                  Focus: {exp.focus}
                </span>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exp.points.map((pt, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex items-start gap-3"
                    >
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-1" />
                      <p className="text-xs sm:text-sm text-[#D7E2EA]/85 font-light leading-relaxed">
                        {pt}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}

          {/* What I'm Exploring */}
          <div>
            <FadeIn delay={0.2} y={20} className="mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D7E2EA]/60 block mb-1">
                ACTIVE FRONTIERS
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white uppercase">What I&apos;m Exploring</h3>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {EXPLORATION_FRONTIERS.map((front, fIdx) => {
                const FIcon = front.icon;
                return (
                  <FadeIn key={front.title} delay={0.1 + fIdx * 0.08} y={20}>
                    <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all hover:bg-white/[0.04] h-full flex flex-col justify-between">
                      <div>
                        <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-300 w-fit mb-4">
                          <FIcon className="w-5 h-5" />
                        </div>
                        <h4 className="text-base sm:text-lg font-bold text-white mb-2">
                          {front.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#D7E2EA]/75 font-light leading-relaxed">
                          {front.desc}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
