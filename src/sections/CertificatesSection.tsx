import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  Briefcase,
  ExternalLink,
  Eye,
  X,
  Calendar,
  Building,
  ShieldCheck,
  Layers,
  LayoutGrid,
  Sparkles
} from 'lucide-react';
import FadeIn from '../components/FadeIn';
import CertificateStack from '../components/CertificateStack';
import { type Certificate } from '../components/CertificateCard';

const CERTIFICATES: Certificate[] = [
  {
    id: 'internship-cert',
    number: '01',
    title: 'Data Analyst Internship Certificate',
    issuer: 'SkillCraft Technology',
    category: 'data',
    file: '/Certificates/Internship.jpg',
    skills: ['Data Analytics', 'Python', 'EDA', 'Dashboard Visualization'],
  },
  {
    id: 'google',
    number: '02',
    title: 'Data & Analytics Foundations',
    issuer: 'Google',
    category: 'data',
    file: '/Certificates/Google.jpeg',
    skills: ['Data Analysis', 'Data Cleaning', 'Spreadsheets', 'SQL'],
  },
  {
    id: 'ibm',
    number: '03',
    title: 'Data Science & Applied AI',
    issuer: 'IBM',
    category: 'data',
    file: '/Certificates/IBM.jpeg',
    skills: ['Python', 'Data Science Methodology', 'Jupyter', 'Algorithms'],
  },
  {
    id: 'deloitte',
    number: '04',
    title: 'Technology & Analytics Simulation',
    issuer: 'Deloitte',
    category: 'corporate',
    file: '/Certificates/Deloitte.png',
    skills: ['Business Analytics', 'Forensic Tech', 'Client Delivery'],
  },
  {
    id: 'tata',
    number: '05',
    title: 'Data Visualisation: Empowering Business',
    issuer: 'Tata Group',
    category: 'data',
    file: '/Certificates/TATA.jpg',
    skills: ['Data Visualization', 'Executive Dashboards', 'Business Insights'],
  },
  {
    id: 'aws',
    number: '06',
    title: 'AWS Cloud Foundations',
    issuer: 'Amazon Web Services (AWS)',
    category: 'cloud',
    file: '/Certificates/AWS.jpg',
    skills: ['Cloud Architecture', 'AWS S3', 'EC2', 'Security & IAM'],
  },
  {
    id: 'gcloud',
    number: '07',
    title: 'Google Cloud Computing Foundations',
    issuer: 'Google Cloud',
    category: 'cloud',
    file: '/Certificates/GCloud.jpg',
    skills: ['GCP Infrastructure', 'BigQuery', 'Cloud Storage'],
  },
  {
    id: 'british-airways',
    number: '08',
    title: 'Data Science Virtual Experience',
    issuer: 'British Airways',
    category: 'corporate',
    file: '/Certificates/British Airways.jpg',
    skills: ['Customer Analytics', 'Web Scraping', 'Predictive Modeling'],
  },
  {
    id: 'tata-cyber',
    number: '09',
    title: 'Cybersecurity Analyst Simulation',
    issuer: 'Tata Group',
    category: 'cyber',
    file: '/Certificates/Tata Cybersecurity.jpg',
    skills: ['IAM', 'Threat Modeling', 'Security Governance'],
  },
  {
    id: 'mastercard',
    number: '10',
    title: 'Cybersecurity Virtual Experience',
    issuer: 'Mastercard',
    category: 'cyber',
    file: '/Certificates/Mastercard.jpg',
    skills: ['Security Analysis', 'Risk Assessment', 'Security Design'],
  },
  {
    id: 'learntube',
    number: '11',
    title: 'Applied Analytics & Programming',
    issuer: 'LearnTube',
    category: 'data',
    file: '/Certificates/LearnTube.jpg',
    skills: ['Data Structures', 'Analytics', 'Python'],
  },
  {
    id: 'kgisl',
    number: '12',
    title: 'Technical Competency & Systems',
    issuer: 'KGISL',
    category: 'corporate',
    file: '/Certificates/KGISL.jpg',
    skills: ['Software Engineering', 'Applied Tech'],
  },
  {
    id: 'hacking',
    number: '13',
    title: 'Ethical Hacking & Information Security',
    issuer: 'Security Foundations',
    category: 'cyber',
    file: '/Certificates/Hacking.jpg',
    skills: ['Network Security', 'Vulnerability Assessment'],
  },
  {
    id: 'ncc',
    number: '14',
    title: "National Cadet Corps 'B' Certificate",
    issuer: 'Ministry of Defence, Govt of India',
    category: 'corporate',
    file: '/Certificates/NCC B.jpg',
    skills: ['Leadership', 'Discipline', 'Team Coordination'],
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Credentials' },
  { id: 'data', label: 'Data & Analytics' },
  { id: 'cloud', label: 'Cloud Systems' },
  { id: 'corporate', label: 'Industry & Leadership' },
  { id: 'cyber', label: 'Cybersecurity' },
];

export default function CertificatesSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'stack' | 'grid'>('stack');
  const [previewCert, setPreviewCert] = useState<Certificate | null>(null);

  const filteredCerts = CERTIFICATES.filter((c) => {
    if (activeCategory === 'all') return true;
    return c.category === activeCategory;
  });

  return (
    <section
      id="experience"
      className="relative min-h-screen bg-[#0C0C0C] text-[#D7E2EA] px-6 sm:px-10 lg:px-16 py-24 sm:py-32 border-t border-white/[0.08] overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-purple-900/10 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Heading with subtle entrance animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Award className="w-3.5 h-3.5" />
            EXPERIENCE &amp; CREDENTIALS
          </div>

          <h2
            className="hero-heading font-black uppercase text-center leading-tight"
            style={{ fontSize: 'clamp(2.4rem, 7vw, 90px)' }}
          >
            Experience &amp; Certifications
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#D7E2EA]/70 max-w-xl mx-auto font-light">
            Verified internship experience and industry credentials in Data Science, Analytics, Cloud, and Machine Learning.
          </p>
        </motion.div>

        {/* Featured Internship Spotlight Card */}
        <FadeIn delay={0.1} y={25} className="mb-16">
          <div className="p-8 sm:p-10 rounded-[32px] sm:rounded-[40px] bg-gradient-to-br from-white/[0.05] via-purple-950/20 to-transparent border border-white/15 backdrop-blur-xl relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-mono uppercase tracking-wider">
                <Briefcase className="w-3.5 h-3.5" />
                VERIFIED INTERNSHIP EXPERIENCE
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-[#D7E2EA]/60">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                <span>1 Month Duration • Remote</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-2">
                  Data Analyst Intern
                </h3>
                <div className="text-base sm:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4 flex items-center gap-2">
                  <Building className="w-4 h-4 text-purple-400" />
                  SkillCraft Technology
                </div>

                <p className="text-xs sm:text-sm md:text-base text-[#D7E2EA]/85 font-light leading-relaxed mb-6">
                  Executed data analytics pipelines, automated exploratory data analysis (EDA), applied statistical transformations with Python &amp; Pandas, and synthesized actionable business insights into interactive reporting visualizations.
                </p>

                <div className="flex flex-wrap gap-2">
                  {['Exploratory Data Analysis', 'Python & Pandas', 'Data Cleaning', 'Statistical Modeling', 'Business Visualizations'].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-cyan-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certificate preview trigger */}
              <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
                <button
                  onClick={() =>
                    setPreviewCert(CERTIFICATES[0])
                  }
                  className="group relative rounded-2xl overflow-hidden border-2 border-purple-400/40 p-1 bg-white/[0.05] hover:scale-105 transition-all duration-300 shadow-xl shadow-purple-950/30"
                >
                  <img
                    src="/Certificates/Internship.jpg"
                    alt="SkillCraft Technology Internship Certificate"
                    className="w-[220px] h-[150px] object-cover rounded-xl group-hover:opacity-80 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white bg-purple-600 px-3 py-1.5 rounded-full">
                      <Eye className="w-3.5 h-3.5" /> View Certificate
                    </span>
                  </div>
                </button>
                <span className="text-[11px] font-mono text-[#D7E2EA]/50 mt-2">
                  Click to inspect credential
                </span>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* View Mode & Category Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          {/* Category Filters */}
          <div className="flex flex-wrap items-center gap-2">
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
          </div>

          {/* View Mode Switcher */}
          <div className="inline-flex items-center p-1 rounded-full bg-white/[0.04] border border-white/10">
            <button
              onClick={() => setViewMode('stack')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                viewMode === 'stack'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-[#D7E2EA]/60 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Sticky Stack</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                viewMode === 'grid'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-[#D7E2EA]/60 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Grid</span>
            </button>
          </div>
        </div>

        {/* 1. PREMIUM STICKY STACKING SCROLL ANIMATION */}
        {viewMode === 'stack' ? (
          <div className="relative">
            <div className="text-center text-xs font-mono text-cyan-300/80 mb-6 flex items-center justify-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>Scroll to smoothly stack certificates</span>
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            </div>

            <CertificateStack
              key={activeCategory}
              certificates={filteredCerts}
              onPreview={(c) => setPreviewCert(c)}
            />
          </div>
        ) : (
          /* 2. COMPACT GRID VIEW */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredCerts.map((cert, idx) => (
              <FadeIn key={cert.id} delay={0.05 + (idx % 6) * 0.05} y={20}>
                <div
                  onClick={() => setPreviewCert(cert)}
                  className="cursor-pointer group p-5 sm:p-6 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/25 hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="relative w-full h-[140px] rounded-2xl overflow-hidden mb-4 bg-black/40 border border-white/5">
                      <img
                        src={cert.file}
                        alt={cert.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-cyan-300">
                        <span>{cert.issuer}</span>
                        <Eye className="w-3.5 h-3.5 text-white/80 group-hover:text-cyan-300 transition-colors" />
                      </div>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-white mb-1.5 leading-snug">
                      {cert.title}
                    </h4>
                    <span className="text-xs font-mono text-purple-300 block mb-3">
                      Issued by {cert.issuer}
                    </span>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-[#D7E2EA]/70"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        )}
      </div>

      {/* Full Certificate Preview Modal */}
      <AnimatePresence>
        {previewCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[90vh] bg-[#111] border border-white/20 rounded-[28px] overflow-hidden flex flex-col shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-white/10 bg-white/[0.02]">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">{previewCert.title}</h3>
                  <span className="text-xs font-mono text-cyan-300">Issued by {previewCert.issuer}</span>
                </div>
                <button
                  onClick={() => setPreviewCert(null)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Certificate Image View */}
              <div className="p-4 sm:p-6 overflow-auto flex items-center justify-center bg-black/60">
                <img
                  src={previewCert.file}
                  alt={previewCert.title}
                  className="max-h-[65vh] w-auto object-contain rounded-xl shadow-2xl border border-white/10"
                />
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-white/10 bg-white/[0.02] flex items-center justify-between text-xs font-mono">
                <span className="text-[#D7E2EA]/60 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" /> Verified Credential
                </span>
                <a
                  href={previewCert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-purple-300 hover:text-white transition-colors"
                >
                  <span>Open Full Resolution</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
