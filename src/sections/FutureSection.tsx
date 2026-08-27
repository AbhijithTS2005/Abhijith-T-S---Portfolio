import { Compass, Sparkles } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const ROADMAP = [
  { year: '2026', action: 'LEARN', description: 'Deep mathematical foundations in Data Science, Machine Learning models & system design.' },
  { year: '2027', action: 'INTERN', description: 'High-impact industry roles applying ML pipelines to real-world datasets and products.' },
  { year: '2027+', action: 'BUILD', description: 'Architecting scalable, intelligent platforms and autonomous decision systems.' },
  { year: 'FUTURE', action: 'RESEARCH', description: 'Advancing applied AI, recommendation theory, and intelligent computing paradigms.' },
];

export default function FutureSection() {
  return (
    <section
      id="future"
      className="relative min-h-[75vh] bg-[#0A0A0A] text-[#D7E2EA] px-6 sm:px-10 lg:px-16 py-24 sm:py-32 border-t border-white/[0.08] overflow-hidden flex flex-col justify-center"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-cyan-900/10 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto w-full text-center">
        {/* Section Header */}
        <FadeIn delay={0} y={30} className="mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Compass className="w-3.5 h-3.5" />
            HORIZON &amp; TRAJECTORY
          </div>

          <h2
            className="hero-heading font-black uppercase text-center leading-tight"
            style={{ fontSize: 'clamp(2.4rem, 7vw, 90px)' }}
          >
            What&apos;s Next?
          </h2>

          {/* Career Direction Banner */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-6 py-3 rounded-full bg-white/[0.04] border border-white/10 text-xs sm:text-sm md:text-base font-mono uppercase tracking-wider">
            <span className="text-cyan-300 font-bold">Data Science</span>
            <span className="text-white/40">→</span>
            <span className="text-purple-300 font-bold">Artificial Intelligence</span>
            <span className="text-white/40">→</span>
            <span className="text-pink-300 font-bold">Intelligent Systems</span>
          </div>
        </FadeIn>

        {/* Minimal Timeline Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-left">
          {ROADMAP.map((item, idx) => (
            <FadeIn key={item.year} delay={0.1 + idx * 0.1} y={20}>
              <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/[0.04] flex flex-col justify-between h-full">
                <div>
                  <span className="text-xs font-mono text-cyan-400 font-bold tracking-widest block mb-2">
                    {item.year}
                  </span>
                  <h3 className="text-2xl font-black uppercase text-white tracking-wide mb-3 flex items-center gap-1.5">
                    {item.action}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D7E2EA]/75 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#D7E2EA]/40">
                  <span>PHASE 0{idx + 1}</span>
                  <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
