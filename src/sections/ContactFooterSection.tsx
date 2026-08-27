import { useState } from 'react';
import { Mail, Github, Linkedin, ArrowUpRight, Copy, Check, Sparkles } from 'lucide-react';
import FadeIn from '../components/FadeIn';

export default function ContactFooterSection() {
  const [copied, setCopied] = useState(false);
  const emailAddress = 'tsabhijith2005@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-[#0C0C0C] text-[#D7E2EA] px-6 sm:px-10 lg:px-16 pt-24 sm:pt-32 pb-12 border-t border-white/[0.08] overflow-hidden flex flex-col justify-between"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-purple-900/15 blur-[180px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto w-full text-center my-auto">
        {/* Subtitle tag */}
        <FadeIn delay={0} y={20} className="mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            LET&apos;S COLLABORATE
          </div>
        </FadeIn>

        {/* Big Bold Headline */}
        <FadeIn delay={0.1} y={35}>
          <h2
            className="hero-heading font-black uppercase tracking-tight leading-none text-[10vw] sm:text-[9vw] md:text-[8vw] lg:text-[7.5vw]"
          >
            HAVE AN IDEA?
          </h2>
          <h2
            className="text-white font-black uppercase tracking-tight leading-none text-[10vw] sm:text-[9vw] md:text-[8vw] lg:text-[7.5vw] mt-1"
          >
            LET&apos;S BUILD IT.
          </h2>
        </FadeIn>

        <FadeIn delay={0.2} y={20}>
          <p className="mt-6 text-sm sm:text-base md:text-lg text-[#D7E2EA]/75 max-w-xl mx-auto font-light leading-relaxed">
            Whether you want to explore intelligent systems, discuss data architectures, or build next-generation web platforms, my inbox is always open.
          </p>
        </FadeIn>

        {/* Social and Action Links */}
        <FadeIn delay={0.3} y={25} className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {/* Email button with mailto + copy */}
          <a
            href="mailto:tsabhijith2005@gmail.com"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-widest text-white transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
              boxShadow: '0px 4px 16px rgba(181, 1, 167, 0.35), 4px 4px 12px #7721B1 inset',
              outline: '2px solid rgba(255,255,255,0.85)',
              outlineOffset: '-2px',
            }}
          >
            <Mail className="w-4 h-4" />
            <span>tsabhijith2005@gmail.com</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Copy Email Button */}
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex items-center gap-2 px-6 py-4 rounded-full text-xs sm:text-sm font-mono text-[#D7E2EA] bg-white/[0.05] border border-white/20 hover:bg-white/[0.12] hover:text-white transition-all duration-200 hover:scale-105"
            title="Copy email to clipboard"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4 text-purple-300" />}
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>

          {/* GitHub */}
          <a
            href="https://github.com/AbhijithTS2005"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm font-medium uppercase tracking-widest text-[#D7E2EA] bg-white/[0.05] border border-white/20 hover:bg-white/[0.12] hover:text-white transition-all duration-200 hover:scale-105"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
            <ArrowUpRight className="w-4 h-4 opacity-60" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/abhijith-ts2005"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm font-medium uppercase tracking-widest text-[#D7E2EA] bg-white/[0.05] border border-white/20 hover:bg-white/[0.12] hover:text-white transition-all duration-200 hover:scale-105"
          >
            <Linkedin className="w-4 h-4 text-cyan-400" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-4 h-4 opacity-60" />
          </a>
        </FadeIn>
      </div>

      {/* Tiny clean footer */}
      <FadeIn delay={0.4} y={10} className="w-full max-w-6xl mx-auto pt-16 mt-auto">
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#D7E2EA]/50">
          <div>© 2026 Abhijith T S • All Rights Reserved</div>
          <div className="flex items-center gap-2 text-[#D7E2EA]/70">
            <span>DATA</span>
            <span>×</span>
            <span>CODE</span>
            <span>×</span>
            <span>INTELLIGENCE</span>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
