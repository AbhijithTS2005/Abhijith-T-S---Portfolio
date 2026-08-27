import { motion, useReducedMotion } from 'framer-motion';
import { Eye, Building, ShieldCheck, ExternalLink } from 'lucide-react';

export interface Certificate {
  id: string;
  number: string;
  title: string;
  issuer: string;
  category: 'data' | 'cloud' | 'cyber' | 'corporate';
  file: string;
  skills: string[];
}

interface CertificateCardProps {
  cert: Certificate;
  index: number;
  onPreview: (cert: Certificate) => void;
}

export default function CertificateCard({
  cert,
  index,
  onPreview,
}: CertificateCardProps) {
  const shouldReduceMotion = useReducedMotion();

  // We construct MotionValues if not reduced motion
  return (
    <motion.div
      style={
        shouldReduceMotion
          ? { zIndex: index + 1 }
          : {
              zIndex: index + 1,
            }
      }
      className="w-full"
    >
      <div
        className="rounded-[28px] sm:rounded-[36px] md:rounded-[40px] border border-white/20 bg-[#121212]/95 backdrop-blur-2xl p-5 sm:p-7 md:p-9 shadow-2xl shadow-black/80 flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-between overflow-hidden"
      >
        {/* Left Side: Number, Title, Issuer & Skills */}
        <div className="flex-1 flex flex-col justify-between w-full">
          <div>
            <div className="flex items-center justify-between gap-4 mb-3">
              <motion.span
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-white/20 font-black font-mono leading-none"
                style={{ fontSize: 'clamp(2.2rem, 5vw, 64px)' }}
              >
                {cert.number}
              </motion.span>
              <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30">
                {cert.category}
              </span>
            </div>

            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-lg sm:text-2xl md:text-3xl font-black uppercase text-white tracking-wide mb-2 leading-tight"
            >
              {cert.title}
            </motion.h3>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xs sm:text-sm md:text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-5 flex items-center gap-2 font-mono"
            >
              <Building className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <span>Issued by {cert.issuer}</span>
            </motion.div>
          </div>

          <div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5">
              {cert.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-[11px] sm:text-xs font-mono px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-cyan-200"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => onPreview(cert)}
                className="inline-flex items-center gap-2 px-6 py-2.5 sm:px-7 sm:py-3 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg shadow-purple-900/30 transition-shadow"
              >
                <Eye className="w-4 h-4" />
                <span>View Certificate</span>
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-mono text-[#D7E2EA]/80 hover:text-white bg-white/[0.05] border border-white/15 hover:bg-white/[0.1] transition-colors"
              >
                <span>Full Res</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Right Side: Visual Certificate Image */}
        <motion.div
          whileHover={{ scale: 1.015 }}
          transition={{ duration: 0.25 }}
          onClick={() => onPreview(cert)}
          className="cursor-pointer group relative w-full md:w-[380px] lg:w-[440px] h-[190px] sm:h-[220px] md:h-[250px] rounded-2xl overflow-hidden border border-white/15 bg-black/60 shadow-xl flex-shrink-0"
        >
          <img
            src={cert.file}
            alt={cert.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono text-cyan-300">
            <span className="flex items-center gap-1.5 text-[11px] sm:text-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Verified Credential
            </span>
            <span className="inline-flex items-center gap-1 text-white bg-white/15 px-2.5 py-1 rounded-full text-[11px]">
              <Eye className="w-3.5 h-3.5" /> Expand
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
