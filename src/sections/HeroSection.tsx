import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import Magnet from '../components/Magnet';
import ParticleCanvas from '../components/ParticleCanvas';

const NAV_LINKS = [
  { label: 'How I Think', href: '#how-i-think' },
  { label: 'SmarTravel', href: '#smartravel' },
  { label: 'NextWave', href: '#nextwave' },
  { label: 'Experience & Certs', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Research', href: '#research' },
  { label: 'Contact', href: '#contact' },
];

const ROLES = [
  'ASPIRING DATA SCIENTIST',
  'BUSINESS ANALYST',
  'DATA VISUALIZATION SPECIALIST',
  'DATA ANALYST',
  'MACHINE LEARNING PRACTITIONER',
  'AI ENGINEERING ENTHUSIAST',
  'DEVELOPER & RESEARCHER',
];
const PORTRAIT_URL = '/profile.png';

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#0C0C0C]">
      {/* Particle & Data Network Background */}
      <ParticleCanvas particleCount={50} className="z-0 opacity-70" />

      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-900/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Navbar */}
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="relative z-30 flex flex-wrap justify-between items-center px-6 md:px-12 pt-6 md:pt-8 gap-4"
      >
        <a
          href="#"
          className="text-[#D7E2EA] font-semibold tracking-wider text-base md:text-xl flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>ABHIJITH T S</span>
        </a>

        <div className="flex flex-wrap items-center gap-4 sm:gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#D7E2EA]/80 font-medium uppercase tracking-wider text-xs sm:text-sm transition-all duration-200 hover:text-white hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
        </div>
      </FadeIn>

      {/* Center Hero Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 pt-6 pb-4 sm:pt-10 max-w-7xl mx-auto w-full">
        {/* Status Indicator */}
        <FadeIn delay={0.1} y={15} className="mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="w-2 h-2 rounded-full bg-cyan-400 -ml-4" />
            <span className="text-xs sm:text-sm text-[#D7E2EA]/90 tracking-wide font-light">
              Currently <span className="text-white/40">→</span> <span className="text-[#D7E2EA] font-medium">Exploring Data Science &amp; AI</span>
            </span>
          </div>
        </FadeIn>

        {/* Big Name Typography with "HI, I AM" */}
        <div className="overflow-hidden w-full select-none flex flex-col items-center">
          <FadeIn delay={0.15} y={20}>
            <span className="block text-sm sm:text-lg md:text-xl lg:text-2xl text-[#D7E2EA]/70 font-semibold tracking-[0.3em] uppercase mb-1">
              Hi, I am
            </span>
          </FadeIn>
          <FadeIn
            as="h1"
            delay={0.2}
            y={40}
            className="hero-heading font-black uppercase tracking-tight leading-none text-[12vw] sm:text-[13vw] md:text-[11vw] lg:text-[10.5vw]"
          >
            ABHIJITH T S
          </FadeIn>
        </div>

        {/* Dynamic Tagline & Role Cycler */}
        <FadeIn delay={0.35} y={20} className="mt-2 sm:mt-3 flex flex-col items-center gap-2">
          {/* Dynamic Role Transition */}
          <div className="h-8 sm:h-9 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="text-sm sm:text-base md:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-cyan-400 tracking-widest uppercase"
              >
                ✦ {ROLES[roleIndex]} ✦
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Core Specialization Pillars */}
          <p className="text-[11px] sm:text-xs md:text-sm text-[#D7E2EA]/90 uppercase font-semibold tracking-[0.18em] flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto px-4 leading-relaxed">
            <span>Aspiring Data Scientist</span>
            <span className="text-purple-400">•</span>
            <span>Business Analyst</span>
            <span className="text-purple-400">•</span>
            <span>Data Visualization</span>
            <span className="text-purple-400">•</span>
            <span>Data Analytics</span>
            <span className="text-purple-400">•</span>
            <span>Machine Learning</span>
            <span className="text-purple-400">•</span>
            <span>AI Engineering</span>
          </p>

          <p className="text-xs sm:text-sm md:text-base text-[#D7E2EA]/70 max-w-lg font-light tracking-wide mt-1">
            Building intelligent systems from data, ideas and curiosity.
          </p>
        </FadeIn>

        {/* Magnetic Interactive Portrait */}
        <div className="relative my-4 sm:my-6 w-[200px] sm:w-[240px] md:w-[290px]">
          <FadeIn delay={0.5} y={25}>
            <Magnet
              padding={120}
              strength={4}
              activeTransition="transform 0.25s ease-out"
              inactiveTransition="transform 0.5s ease-in-out"
            >
              <div className="relative group flex items-center justify-center cursor-pointer">
                {/* Radiant halo glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600/40 via-cyan-500/30 to-pink-500/20 blur-2xl -z-10 scale-105 group-hover:scale-125 transition-transform duration-500" />
                <img
                  src={PORTRAIT_URL}
                  alt="Abhijith T S portrait"
                  className="w-full h-auto select-none pointer-events-none rounded-full object-cover shadow-2xl border-2 border-white/20 ring-4 ring-white/5"
                  draggable={false}
                />
              </div>
            </Magnet>
          </FadeIn>
        </div>

        {/* Call to action buttons */}
        <FadeIn delay={0.6} y={20} className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-1">
          <a
            href="#smartravel"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3 sm:px-9 sm:py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-widest text-white transition-transform duration-200 hover:scale-105 active:scale-95"
            style={{
              background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
              boxShadow: '0px 4px 14px rgba(181, 1, 167, 0.35), 4px 4px 12px #7721B1 inset',
              outline: '2px solid rgba(255,255,255,0.8)',
              outlineOffset: '-2px',
            }}
          >
            <Sparkles className="w-4 h-4" />
            Explore My Work
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3 sm:px-9 sm:py-3.5 text-xs sm:text-sm font-medium uppercase tracking-widest text-[#D7E2EA] bg-white/[0.06] border border-white/20 hover:bg-white/[0.12] hover:text-white transition-all duration-200"
          >
            Let&apos;s Connect
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </FadeIn>
      </div>

      {/* Scroll indicator prompt */}
      <FadeIn
        delay={0.7}
        y={10}
        className="relative z-20 flex flex-col items-center justify-center pb-6 text-[#D7E2EA]/50 hover:text-[#D7E2EA] transition-colors"
      >
        <a href="#how-i-think" className="flex flex-col items-center gap-1 group">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-medium group-hover:tracking-[0.4em] transition-all">
            Scroll
          </span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </FadeIn>
    </section>
  );
}
