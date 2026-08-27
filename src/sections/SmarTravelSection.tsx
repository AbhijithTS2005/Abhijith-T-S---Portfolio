import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass,
  Server,
  CloudRain,
  Sliders,
  CheckCircle2,
  ShieldAlert,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  Database,
  Smartphone,
  Cpu,
  Wind
} from 'lucide-react';
import FadeIn from '../components/FadeIn';

const TABS = [
  { id: 'problem', number: '01', title: 'THE PROBLEM' },
  { id: 'idea', number: '02', title: 'THE IDEA' },
  { id: 'system', number: '03', title: 'THE SYSTEM' },
  { id: 'intelligence', number: '04', title: 'INTELLIGENCE (100-PT)' },
  { id: 'result', number: '05', title: 'RESULT & LIVE PREVIEW' },
];

const WEIGHTS = [
  { label: 'Climate & Temperature', weight: 25, icon: CloudRain, color: 'from-blue-500 to-cyan-400' },
  { label: 'Budget & Financial Fit', weight: 20, icon: Sliders, color: 'from-emerald-500 to-teal-400' },
  { label: 'Travel Type (Solo/Family/Trek)', weight: 20, icon: Compass, color: 'from-purple-500 to-indigo-400' },
  { label: 'Activities & Attractions', weight: 15, icon: Sparkles, color: 'from-pink-500 to-rose-400' },
  { label: 'Crowd Density Index', weight: 10, icon: ShieldAlert, color: 'from-amber-500 to-yellow-400' },
  { label: 'Air Quality Index (AQI)', weight: 10, icon: Wind, color: 'from-teal-400 to-cyan-300' },
];

const KERALA_DESTINATIONS = [
  {
    name: 'Munnar, Idukki',
    tag: 'Hill Station & Mist',
    score: 96,
    climate: '18°C • Pleasant Fog',
    aqi: '22 (Pure)',
    crowd: 'Moderate',
    matchReason: 'Ideal climate matching + high activity affinity for nature & tea plantations.',
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Varkala Cliff, Trivandrum',
    tag: 'Coastal Geo-Heritage',
    score: 92,
    climate: '27°C • Sunny Breeze',
    aqi: '28 (Good)',
    crowd: 'Low-Mid',
    matchReason: 'High budget optimization & perfect solo/leisure travel classification.',
    image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Wayanad High Peaks',
    tag: 'Adventure & Rainforest',
    score: 89,
    climate: '21°C • Light Rain',
    aqi: '18 (Optimal)',
    crowd: 'Low',
    matchReason: 'Exceptional AQI & crowd avoidance weighting with high trekking affinity.',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Alleppey Backwaters',
    tag: 'Canal & Houseboat Serenity',
    score: 94,
    climate: '29°C • Tropical',
    aqi: '34 (Good)',
    crowd: 'Moderate',
    matchReason: 'High leisure match, pristine water-network rating and tailored group logistics.',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
  },
];

export default function SmarTravelSection() {
  const [activeTab, setActiveTab] = useState('problem');
  const [selectedDestination, setSelectedDestination] = useState(0);

  return (
    <section
      id="smartravel"
      className="relative min-h-screen bg-[#0A0A0A] text-[#D7E2EA] px-6 sm:px-10 lg:px-16 py-24 sm:py-32 border-t border-white/[0.08] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-cyan-900/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Pill Badge & Header */}
        <FadeIn delay={0} y={30} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-400/30 text-purple-300 text-xs uppercase tracking-widest font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            HERO CASE STUDY • INTELLIGENT SYSTEM
          </div>
          <h2
            className="hero-heading font-black uppercase text-center leading-none"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
          >
            SMARTRAVEL
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#D7E2EA]/70 uppercase tracking-[0.2em] font-mono">
            Next-Gen Context-Aware Travel Intelligence Platform
          </p>

          <div className="mt-5 flex items-center justify-center">
            <a
              href="https://smartravel.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-white transition-all duration-200 hover:scale-105"
              style={{
                background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                boxShadow: '0px 4px 14px rgba(181, 1, 167, 0.35), 4px 4px 12px #7721B1 inset',
                outline: '1.5px solid rgba(255,255,255,0.7)',
                outlineOffset: '-2px',
              }}
            >
              <span>Launch Live App</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </FadeIn>

        {/* Phase Navigation Tabs */}
        <FadeIn delay={0.1} y={20} className="mb-12">
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-white/[0.03] border border-white/10 rounded-full backdrop-blur-md max-w-4xl mx-auto">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-900/30 scale-[1.02]'
                      : 'text-[#D7E2EA]/60 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <span className="font-mono text-[11px] opacity-70">{tab.number}</span>
                  <span>{tab.title}</span>
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Phase Content Area */}
        <div className="relative min-h-[460px] p-6 sm:p-10 md:p-12 rounded-[32px] sm:rounded-[40px] bg-white/[0.02] border border-white/10 backdrop-blur-sm">
          <AnimatePresence mode="wait">
            {activeTab === 'problem' && (
              <motion.div
                key="problem"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-6"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-red-500/20 text-red-300 border border-red-500/30">
                    STAGE 01
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold uppercase text-white">The Problem</h3>
                </div>

                <blockquote className="text-xl sm:text-2xl md:text-3xl font-light text-white leading-relaxed border-l-4 border-purple-500 pl-6 my-2">
                  &ldquo;Travelling isn&apos;t simply about finding a destination. It&apos;s about dynamic conditions that standard search ignores.&rdquo;
                </blockquote>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-4">
                  <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                    <h4 className="text-base font-bold text-white mb-2">Static Information</h4>
                    <p className="text-xs sm:text-sm text-[#D7E2EA]/70 leading-relaxed font-light">
                      Travel portals treat destinations like static catalogs, ignoring current weather anomalies, monsoon shifts, and crowd bottlenecks.
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                    <h4 className="text-base font-bold text-white mb-2">Generic Recommendations</h4>
                    <p className="text-xs sm:text-sm text-[#D7E2EA]/70 leading-relaxed font-light">
                      One-size-fits-all algorithms push commercial tourist traps rather than tailoring to individual budget limits and travel styles.
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                    <h4 className="text-base font-bold text-white mb-2">Environmental Ignorance</h4>
                    <p className="text-xs sm:text-sm text-[#D7E2EA]/70 leading-relaxed font-light">
                      Air quality, sudden rain probabilities, and seasonal suitability are isolated in external weather apps rather than synthesized.
                    </p>
                  </div>
                </div>

                <div className="flex justify-end mt-4">
                  <button
                    onClick={() => setActiveTab('idea')}
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-300 hover:text-white transition-colors"
                  >
                    Proceed to 02 — THE IDEA <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {activeTab === 'idea' && (
              <motion.div
                key="idea"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-6"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    STAGE 02
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold uppercase text-white">The Idea</h3>
                </div>

                <p className="text-lg sm:text-xl md:text-2xl font-light text-[#D7E2EA] leading-relaxed">
                  <span className="text-white font-semibold">What if destinations could understand the traveller?</span>
                  <br />
                  A real-time intelligence engine that models multidimensional traveler vectors against live environmental and geospatial data.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-2">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/30">
                    <h4 className="text-base font-bold text-white flex items-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-purple-400" />
                      Multivariate Alignment
                    </h4>
                    <p className="text-xs sm:text-sm text-[#D7E2EA]/80 font-light leading-relaxed">
                      Synthesizing user preferences, budget constraints, travel styles (solo/family/trek), and activity affinities into unified vectors.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-900/20 to-transparent border border-cyan-500/30">
                    <h4 className="text-base font-bold text-white flex items-center gap-2 mb-2">
                      <Wind className="w-4 h-4 text-cyan-400" />
                      Live Environmental Feed
                    </h4>
                    <p className="text-xs sm:text-sm text-[#D7E2EA]/80 font-light leading-relaxed">
                      Continuous ingestion of real-time temperature, precipitation forecasts, Air Quality Index (AQI), and crowd density scores.
                    </p>
                  </div>
                </div>

                <div className="flex justify-end mt-4">
                  <button
                    onClick={() => setActiveTab('system')}
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-300 hover:text-white transition-colors"
                  >
                    Proceed to 03 — THE SYSTEM <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {activeTab === 'system' && (
              <motion.div
                key="system"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-6"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    STAGE 03
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold uppercase text-white">System Architecture</h3>
                </div>

                <p className="text-sm sm:text-base text-[#D7E2EA]/80 font-light">
                  A high-performance pipeline decoupling the client mobile interface, relational database, core API orchestrator, and dedicated Python AI microservice.
                </p>

                {/* Interactive Flow Architecture */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-3 sm:gap-4 my-2">
                  <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col items-center text-center">
                    <Smartphone className="w-8 h-8 text-cyan-400 mb-2" />
                    <span className="font-bold text-white text-sm">React Native</span>
                    <span className="text-[11px] text-[#D7E2EA]/60 uppercase tracking-wider font-mono">Mobile App</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col items-center text-center">
                    <Server className="w-8 h-8 text-purple-400 mb-2" />
                    <span className="font-bold text-white text-sm">Laravel Engine</span>
                    <span className="text-[11px] text-[#D7E2EA]/60 uppercase tracking-wider font-mono">API &amp; Auth</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col items-center text-center">
                    <Database className="w-8 h-8 text-pink-400 mb-2" />
                    <span className="font-bold text-white text-sm">MySQL</span>
                    <span className="text-[11px] text-[#D7E2EA]/60 uppercase tracking-wider font-mono">Relational Store</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col items-center text-center">
                    <Cpu className="w-8 h-8 text-emerald-400 mb-2" />
                    <span className="font-bold text-white text-sm">FastAPI / Python</span>
                    <span className="text-[11px] text-[#D7E2EA]/60 uppercase tracking-wider font-mono">ML &amp; Scoring</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col items-center text-center">
                    <CloudRain className="w-8 h-8 text-amber-400 mb-2" />
                    <span className="font-bold text-white text-sm">Weather / AQI</span>
                    <span className="text-[11px] text-[#D7E2EA]/60 uppercase tracking-wider font-mono">Live Ingestion</span>
                  </div>
                </div>

                <div className="flex justify-end mt-4">
                  <button
                    onClick={() => setActiveTab('intelligence')}
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-300 hover:text-white transition-colors"
                  >
                    Proceed to 04 — INTELLIGENCE (100-PT) <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {activeTab === 'intelligence' && (
              <motion.div
                key="intelligence"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-6"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    STAGE 04
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold uppercase text-white">
                    100-Point Recommendation Scoring Formula
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-[#D7E2EA]/80 font-light">
                  Each destination candidate is dynamically scored using a normalized multi-criteria weighting equation:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-2">
                  {WEIGHTS.map((item) => {
                    const WIcon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <WIcon className="w-5 h-5 text-purple-300" />
                          <span className="text-xl font-black font-mono text-white">{item.weight}%</span>
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-[#D7E2EA]">{item.label}</span>
                          <div className="w-full bg-white/10 h-1.5 rounded-full mt-2 overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                              style={{ width: `${item.weight * 3.5}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex justify-end mt-4">
                  <button
                    onClick={() => setActiveTab('result')}
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-300 hover:text-white transition-colors"
                  >
                    Proceed to 05 — RESULT &amp; PREVIEW <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {activeTab === 'result' && (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-6"
              >
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30">
                      STAGE 05
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold uppercase text-white">
                      Interactive Kerala Recommendation Matrix
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-cyan-300">Live Simulator Active</span>
                </div>

                {/* Destinations selector & detail */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Selector List */}
                  <div className="lg:col-span-5 flex flex-col gap-3">
                    {KERALA_DESTINATIONS.map((dest, i) => {
                      const isSel = selectedDestination === i;
                      return (
                        <div
                          key={dest.name}
                          onClick={() => setSelectedDestination(i)}
                          className={`cursor-pointer p-4 rounded-2xl border transition-all flex items-center justify-between ${
                            isSel
                              ? 'bg-white/[0.08] border-cyan-400/50 shadow-md'
                              : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                          }`}
                        >
                          <div>
                            <h4 className="font-bold text-white text-base">{dest.name}</h4>
                            <p className="text-xs text-[#D7E2EA]/60">{dest.tag}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-mono font-black text-cyan-300">{dest.score}</span>
                            <span className="text-[10px] text-white/40 font-mono">/100</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Highlight card */}
                  <div className="lg:col-span-7 p-6 rounded-3xl bg-white/[0.04] border border-white/10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <div>
                          <span className="text-xs uppercase tracking-widest font-mono text-purple-300">
                            OPTIMAL MATCH RESULT
                          </span>
                          <h4 className="text-2xl font-bold text-white">
                            {KERALA_DESTINATIONS[selectedDestination].name}
                          </h4>
                        </div>
                        <div className="p-3 rounded-2xl bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 flex flex-col items-center">
                          <span className="text-2xl font-black font-mono leading-none">
                            {KERALA_DESTINATIONS[selectedDestination].score}
                          </span>
                          <span className="text-[9px] uppercase font-mono tracking-wider">Score</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-3 py-3 my-2 border-y border-white/10 text-xs font-mono">
                        <div>
                          <span className="text-[#D7E2EA]/50 block">Climate</span>
                          <span className="text-white font-semibold">{KERALA_DESTINATIONS[selectedDestination].climate}</span>
                        </div>
                        <div>
                          <span className="text-[#D7E2EA]/50 block">AQI Index</span>
                          <span className="text-emerald-300 font-semibold">{KERALA_DESTINATIONS[selectedDestination].aqi}</span>
                        </div>
                        <div>
                          <span className="text-[#D7E2EA]/50 block">Crowd</span>
                          <span className="text-purple-300 font-semibold">{KERALA_DESTINATIONS[selectedDestination].crowd}</span>
                        </div>
                      </div>

                      <p className="mt-3 text-xs sm:text-sm text-[#D7E2EA]/80 font-light leading-relaxed">
                        <span className="font-semibold text-white">Decision Reasoning:</span>{' '}
                        {KERALA_DESTINATIONS[selectedDestination].matchReason}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                      <span className="flex items-center gap-1.5 text-emerald-400">
                        <CheckCircle2 className="w-4 h-4" /> Recommendation Verified
                      </span>
                      <a
                        href="https://smartravel.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-cyan-300 hover:text-white transition-colors bg-cyan-500/15 border border-cyan-400/30 px-3 py-1.5 rounded-full hover:bg-cyan-500/30"
                      >
                        <span>Open Live Web App</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
