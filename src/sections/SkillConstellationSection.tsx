import { useState } from 'react';
import { Network, Sparkles } from 'lucide-react';
import FadeIn from '../components/FadeIn';

interface TechNode {
  id: string;
  name: string;
  category: 'data' | 'dev' | 'backend' | 'tools';
  connections: string[]; // IDs of connected skills
  description: string;
}

const TECH_NODES: TechNode[] = [
  // DATA
  { id: 'python', name: 'Python', category: 'data', connections: ['pandas', 'numpy', 'statistics', 'fastapi', 'mysql'], description: 'Primary computing & ML modeling language' },
  { id: 'pandas', name: 'Pandas', category: 'data', connections: ['python', 'numpy', 'statistics', 'fastapi'], description: 'Tabular data analysis & feature transformation' },
  { id: 'numpy', name: 'NumPy', category: 'data', connections: ['python', 'pandas', 'statistics'], description: 'Vectorized linear algebra & matrix operations' },
  { id: 'statistics', name: 'Statistics & Math', category: 'data', connections: ['python', 'pandas', 'r'], description: 'Probabilistic modeling, hypothesis testing & distributions' },
  { id: 'r', name: 'R', category: 'data', connections: ['statistics', 'pandas'], description: 'Exploratory data analysis & statistical visualization' },

  // DEVELOPMENT
  { id: 'react', name: 'React', category: 'dev', connections: ['nextjs', 'reactnative', 'vite', 'restapi'], description: 'Component-driven interactive web interfaces' },
  { id: 'nextjs', name: 'Next.js', category: 'dev', connections: ['react', 'restapi', 'fastapi'], description: 'Full-stack server rendered web applications' },
  { id: 'reactnative', name: 'React Native', category: 'dev', connections: ['react', 'restapi', 'laravel'], description: 'Cross-platform mobile apps (SmarTravel client)' },
  { id: 'laravel', name: 'Laravel', category: 'dev', connections: ['php', 'mysql', 'restapi', 'reactnative'], description: 'Robust MVC backend framework for enterprise web' },
  { id: 'php', name: 'PHP', category: 'dev', connections: ['laravel', 'mysql'], description: 'Server-side application logic & database integration' },

  // BACKEND
  { id: 'fastapi', name: 'FastAPI', category: 'backend', connections: ['python', 'pandas', 'mysql', 'restapi'], description: 'High-speed Python asynchronous API for AI models' },
  { id: 'restapi', name: 'REST APIs', category: 'backend', connections: ['fastapi', 'laravel', 'react', 'postman'], description: 'Stateless endpoints & decoupled client-server protocols' },
  { id: 'mysql', name: 'MySQL', category: 'backend', connections: ['laravel', 'fastapi', 'python', 'sqlite'], description: 'Relational data modeling, ACID transactions & schemas' },
  { id: 'sqlite', name: 'SQLite', category: 'backend', connections: ['python', 'mysql'], description: 'Lightweight embedded storage for rapid experimentation' },

  // TOOLS
  { id: 'git', name: 'Git', category: 'tools', connections: ['github'], description: 'Distributed version control & branching workflows' },
  { id: 'github', name: 'GitHub', category: 'tools', connections: ['git', 'vite'], description: 'Code hosting, collaboration & CI/CD pipelines' },
  { id: 'firebase', name: 'Firebase', category: 'tools', connections: ['react', 'reactnative'], description: 'Realtime database, authentication & cloud hosting' },
  { id: 'vite', name: 'Vite', category: 'tools', connections: ['react', 'github'], description: 'Next-generation frontend tooling & build pipeline' },
  { id: 'postman', name: 'Postman', category: 'tools', connections: ['restapi', 'fastapi', 'laravel'], description: 'API contract testing, mocking & automation' },
];

const CATEGORIES = [
  { id: 'all', label: 'All Technologies' },
  { id: 'data', label: 'Data & AI', color: 'border-cyan-400/40 text-cyan-300' },
  { id: 'dev', label: 'Development', color: 'border-purple-400/40 text-purple-300' },
  { id: 'backend', label: 'Backend & APIs', color: 'border-pink-400/40 text-pink-300' },
  { id: 'tools', label: 'Tools & DevOps', color: 'border-amber-400/40 text-amber-300' },
];

export default function SkillConstellationSection() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const currentHovered = TECH_NODES.find((n) => n.id === hoveredNode);
  const connectedIds = currentHovered ? [currentHovered.id, ...currentHovered.connections] : [];

  const filteredNodes = TECH_NODES.filter((node) => {
    if (activeCategory === 'all') return true;
    return node.category === activeCategory;
  });

  return (
    <section
      id="skills"
      className="relative min-h-screen bg-[#0A0A0A] text-[#D7E2EA] px-6 sm:px-10 lg:px-16 py-24 sm:py-32 border-t border-white/[0.08] overflow-hidden"
    >
      {/* Ambient background blur */}
      <div className="absolute top-1/3 left-1/3 w-[450px] h-[450px] bg-cyan-900/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <FadeIn delay={0} y={30} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Network className="w-3.5 h-3.5" />
            INTERCONNECTED ARCHITECTURE
          </div>

          <h2
            className="hero-heading font-black uppercase text-center leading-tight"
            style={{ fontSize: 'clamp(2.4rem, 7vw, 90px)' }}
          >
            Technology Constellation
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#D7E2EA]/70 max-w-xl mx-auto font-light">
            Technologies don&apos;t live in isolated percentage bars. Hover over any node to see how tools interconnect across my stack.
          </p>
        </FadeIn>

        {/* Category Filters */}
        <FadeIn delay={0.1} y={15} className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-mono uppercase tracking-wider transition-all duration-200 ${
                  isSelected
                    ? 'bg-white text-black font-bold shadow-md shadow-white/10'
                    : 'bg-white/[0.03] border border-white/10 text-[#D7E2EA]/70 hover:text-white hover:border-white/20'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </FadeIn>

        {/* Constellation Grid of Interactive Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {filteredNodes.map((node) => {
            const isHovered = hoveredNode === node.id;
            const isConnected = connectedIds.includes(node.id);
            const isDimmed = hoveredNode !== null && !isConnected;

            return (
              <div
                key={node.id}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                className={`cursor-pointer relative p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between min-h-[120px] ${
                  isHovered
                    ? 'bg-gradient-to-br from-purple-600/30 via-cyan-600/20 to-transparent border-cyan-400 shadow-lg shadow-cyan-900/30 scale-105 z-20'
                    : isConnected
                    ? 'bg-white/[0.08] border-purple-400/80 shadow-md shadow-purple-900/20 scale-[1.02] z-10'
                    : isDimmed
                    ? 'opacity-30 bg-white/[0.01] border-white/5'
                    : 'bg-white/[0.02] border-white/10 hover:border-white/25 hover:bg-white/[0.05]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      node.category === 'data'
                        ? 'bg-cyan-400'
                        : node.category === 'dev'
                        ? 'bg-purple-400'
                        : node.category === 'backend'
                        ? 'bg-pink-400'
                        : 'bg-amber-400'
                    }`}
                  />
                  <span className="text-[10px] font-mono uppercase text-[#D7E2EA]/40">
                    {node.category}
                  </span>
                </div>

                <div className="my-2">
                  <h4 className="text-sm sm:text-base font-bold text-white tracking-wide">
                    {node.name}
                  </h4>
                </div>

                <div className="text-[10px] font-mono text-cyan-300/80">
                  {node.connections.length} Links
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Inspector Bar */}
        <FadeIn delay={0.2} y={15} className="mt-8">
          <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-4">
            {currentHovered ? (
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-center md:text-left">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 block">
                    INSPECTING NODE
                  </span>
                  <span className="text-xl font-bold text-white">{currentHovered.name}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#D7E2EA]/80 font-light max-w-lg">
                  {currentHovered.description}
                </p>
              </div>
            ) : (
              <div className="text-xs font-mono text-[#D7E2EA]/50 text-center w-full">
                ✦ Hover any technology above to explore interdependencies &amp; data flow connections ✦
              </div>
            )}

            {currentHovered && (
              <div className="flex items-center gap-1.5 flex-shrink-0 text-xs font-mono text-purple-300">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{currentHovered.connections.length} Connected Technologies</span>
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
