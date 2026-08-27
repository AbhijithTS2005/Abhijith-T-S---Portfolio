import { useState } from 'react';
import { Award, Users, Terminal, Globe, ChevronRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const LEADERSHIP_MILESTONES = [
  {
    role: 'Treasurer',
    org: 'CODEHUB',
    category: 'Student Tech Community',
    icon: Terminal,
    color: 'from-cyan-500/20 to-blue-500/10',
    border: 'border-cyan-400/30',
    summary: 'Overseeing chapter budget, funding allocation, hackathon event sponsorship, and resource distribution for tech workshops.',
  },
  {
    role: 'Team Lead',
    org: 'JOSEPHITES NEXTWAVE',
    category: 'Development Foundation',
    icon: Users,
    color: 'from-purple-500/20 to-pink-500/10',
    border: 'border-purple-400/30',
    summary: 'Leading student engineering squads, directing sprint workflows, mentoring junior developers, and enforcing code quality standards.',
  },
  {
    role: 'Coordinator & Lead',
    org: 'TECHNICAL EVENTS',
    category: 'Competitions & Fests',
    icon: Award,
    color: 'from-pink-500/20 to-rose-500/10',
    border: 'border-pink-400/30',
    summary: 'Organizing inter-collegiate coding competitions, hackathons, and technical symposiums with 500+ student delegates.',
  },
  {
    role: 'Project Architect',
    org: 'PRODUCTION PLATFORMS',
    category: 'Enterprise Delivery',
    icon: Globe,
    color: 'from-emerald-500/20 to-teal-500/10',
    border: 'border-emerald-400/30',
    summary: 'Delivering live institutional web platforms with mission-critical uptime for colleges, schools, and provincial foundations.',
  },
];

export default function AchievementsSection() {
  const [selectedIdx, setSelectedIdx] = useState(1);

  return (
    <section
      id="achievements"
      className="relative min-h-screen bg-[#0A0A0A] text-[#D7E2EA] px-6 sm:px-10 lg:px-16 py-24 sm:py-32 border-t border-white/[0.08] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-10 w-[400px] h-[400px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <FadeIn delay={0} y={30} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Award className="w-3.5 h-3.5" />
            LEADERSHIP &amp; IMPACT
          </div>

          <h2
            className="hero-heading font-black uppercase text-center leading-tight"
            style={{ fontSize: 'clamp(2.4rem, 7vw, 90px)' }}
          >
            Leadership Journey
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#D7E2EA]/70 max-w-xl mx-auto font-light">
            Proven track record of taking ownership, steering development squads, and driving real-world community initiatives.
          </p>
        </FadeIn>

        {/* Horizontal Interactive Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {LEADERSHIP_MILESTONES.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = selectedIdx === idx;

            return (
              <FadeIn key={item.org} delay={0.1 + idx * 0.1} y={25}>
                <div
                  onClick={() => setSelectedIdx(idx)}
                  className={`cursor-pointer h-full p-6 sm:p-7 rounded-3xl border transition-all duration-300 backdrop-blur-sm flex flex-col justify-between min-h-[260px] ${
                    isSelected
                      ? `bg-white/[0.08] ${item.border} shadow-xl shadow-purple-950/20 scale-[1.02]`
                      : 'bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-2xl bg-gradient-to-br ${item.color} border border-white/10 text-white`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono text-purple-300 uppercase tracking-wider">
                        {item.category}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-tight">
                      {item.org}
                    </h3>
                    <span className="text-xs sm:text-sm font-mono font-semibold text-cyan-300 block mb-3">
                      {item.role}
                    </span>

                    <p className="text-xs sm:text-sm text-[#D7E2EA]/75 font-light leading-relaxed">
                      {item.summary}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#D7E2EA]/50">
                    <span>STAGE 0{idx + 1}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-cyan-400" />
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
