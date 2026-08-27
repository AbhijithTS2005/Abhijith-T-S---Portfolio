import { useState } from 'react';
import { motion } from 'framer-motion';
import { Dna, Sparkles, Brain, Cpu, Globe, Microscope, Server, Palette, CheckCircle } from 'lucide-react';
import FadeIn from '../components/FadeIn';

interface DnaNode {
  id: string;
  name: string;
  subtitle: string;
  philosophy: string;
  icon: any;
  color: string;
  border: string;
  bgGlow: string;
}

const DNA_NODES: DnaNode[] = [
  {
    id: 'data-science',
    name: 'DATA SCIENCE',
    subtitle: 'Extracting Truth from Noise',
    philosophy: 'Transforming chaotic raw datasets into actionable mathematical structures, probability models, and validated metrics.',
    icon: Brain,
    color: 'text-cyan-300',
    border: 'border-cyan-400/40',
    bgGlow: 'from-cyan-500/20 to-blue-500/10',
  },
  {
    id: 'ai',
    name: 'ARTIFICIAL INTELLIGENCE',
    subtitle: 'Adaptive Decision Systems',
    philosophy: 'Designing algorithms that don’t just execute static rules, but learn contextual nuance, user intent, and emergent patterns.',
    icon: Cpu,
    color: 'text-purple-300',
    border: 'border-purple-400/40',
    bgGlow: 'from-purple-500/20 to-indigo-500/10',
  },
  {
    id: 'web',
    name: 'WEB & INTERFACES',
    subtitle: 'Fluid Human Experience',
    philosophy: 'Crafting responsive, high-framerate interfaces where complex algorithms are presented through intuitive, human-first design.',
    icon: Globe,
    color: 'text-pink-300',
    border: 'border-pink-400/40',
    bgGlow: 'from-pink-500/20 to-rose-500/10',
  },
  {
    id: 'research',
    name: 'RESEARCH',
    subtitle: 'Curiosity-Driven Rigor',
    philosophy: 'Questioning foundational assumptions, comparing algorithmic trade-offs, and publishing reproducible experiments.',
    icon: Microscope,
    color: 'text-emerald-300',
    border: 'border-emerald-400/40',
    bgGlow: 'from-emerald-500/20 to-teal-500/10',
  },
  {
    id: 'systems',
    name: 'SYSTEMS ARCHITECTURE',
    subtitle: 'Scalable Reliability',
    philosophy: 'Building decoupled, resilient backends with FastAPI and Laravel capable of high throughput and fault tolerance.',
    icon: Server,
    color: 'text-blue-300',
    border: 'border-blue-400/40',
    bgGlow: 'from-blue-500/20 to-cyan-500/10',
  },
  {
    id: 'creativity',
    name: 'CREATIVITY',
    subtitle: 'Unconventional Synthesis',
    philosophy: 'Blending analytical data science with aesthetic digital art, 3D interaction, and expressive typography.',
    icon: Palette,
    color: 'text-amber-300',
    border: 'border-amber-400/40',
    bgGlow: 'from-amber-500/20 to-yellow-500/10',
  },
  {
    id: 'problem-solving',
    name: 'PROBLEM SOLVER',
    subtitle: 'First-Principles Execution',
    philosophy: 'I enjoy turning complex, open-ended real-world challenges into practical, highly impactful, and elegant software systems.',
    icon: Sparkles,
    color: 'text-violet-300',
    border: 'border-violet-400/40',
    bgGlow: 'from-violet-500/20 to-purple-500/10',
  },
];

export default function DigitalDNASection() {
  const [selectedNode, setSelectedNode] = useState<DnaNode>(DNA_NODES[6]); // Default: Problem Solver

  return (
    <section
      id="digital-dna"
      className="relative min-h-screen bg-[#0C0C0C] text-[#D7E2EA] px-6 sm:px-10 lg:px-16 py-24 sm:py-32 border-t border-white/[0.08] overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/15 blur-[180px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <FadeIn delay={0} y={30} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Dna className="w-3.5 h-3.5" />
            CORE IDENTITY
          </div>

          <h2
            className="hero-heading font-black uppercase text-center leading-tight"
            style={{ fontSize: 'clamp(2.4rem, 7vw, 90px)' }}
          >
            Digital DNA
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#D7E2EA]/70 max-w-xl mx-auto font-light">
            The interconnected matrix of competencies, mental models, and creative impulses that define my engineering ethos.
          </p>
        </FadeIn>

        {/* Dynamic Interactive DNA Orbit & Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Node Grid Selector */}
          <div className="lg:col-span-7 flex flex-wrap gap-3 sm:gap-4 justify-center">
            {DNA_NODES.map((node) => {
              const Icon = node.icon;
              const isSelected = selectedNode.id === node.id;

              return (
                <motion.button
                  key={node.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedNode(node)}
                  className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl border transition-all duration-300 backdrop-blur-md ${
                    isSelected
                      ? `bg-white/[0.12] ${node.border} shadow-lg shadow-purple-900/30 scale-105`
                      : 'bg-white/[0.03] border-white/10 hover:border-white/20 hover:bg-white/[0.05]'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${node.color}`} />
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                    {node.name}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Active DNA Detail Card */}
          <div className="lg:col-span-5">
            <FadeIn delay={0.1} y={20}>
              <div className="p-8 sm:p-10 rounded-[32px] sm:rounded-[40px] bg-gradient-to-br from-white/[0.06] to-purple-950/20 border border-white/15 backdrop-blur-xl relative overflow-hidden">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="p-3.5 rounded-2xl bg-white/[0.05] border border-white/10 text-white">
                    {selectedNode && <selectedNode.icon className={`w-6 h-6 ${selectedNode.color}`} />}
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-cyan-300">
                    DNA STRAND ACTIVE
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-wide mb-1">
                  {selectedNode.name}
                </h3>
                <span className="text-xs sm:text-sm font-mono text-purple-300 block mb-6">
                  {selectedNode.subtitle}
                </span>

                <blockquote className="text-sm sm:text-base text-[#D7E2EA]/90 font-light leading-relaxed border-l-2 border-cyan-400 pl-4 my-4">
                  &ldquo;{selectedNode.philosophy}&rdquo;
                </blockquote>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#D7E2EA]/50">
                  <span>First-Principles Architecture</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> Synced
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
