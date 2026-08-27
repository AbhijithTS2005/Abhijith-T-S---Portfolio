import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import CertificateCard, { type Certificate } from './CertificateCard';

interface CertificateStackProps {
  certificates: Certificate[];
  onPreview: (cert: Certificate) => void;
}

interface AnimatedStackItemProps {
  cert: Certificate;
  index: number;
  total: number;
  scrollYProgress: any;
  onPreview: (cert: Certificate) => void;
}

function AnimatedStackItem({
  cert,
  index,
  total,
  scrollYProgress,
  onPreview,
}: AnimatedStackItemProps) {
  const shouldReduceMotion = useReducedMotion();

  // Progress slice for this specific certificate
  const step = 1 / total;
  // Start earlier so the slide-in feels natural and progressive
  const enterStart = index === 0 ? 0 : Math.max(0, (index - 0.85) * step);
  const enterEnd = index === 0 ? 0 : index * step;

  // Vertical transform: moves from 100% (below) to 0% (in place)
  const y = useTransform(
    scrollYProgress,
    [enterStart, enterEnd],
    [index === 0 ? '0%' : '100%', '0%'],
    { clamp: true }
  );

  // Subtle scaling: stays at 1 while active, then as later cards come, scales down to ~0.93
  const scale = useTransform(
    scrollYProgress,
    [enterEnd, 1],
    [1, Math.max(0.92, 1 - (total - 1 - index) * 0.012)],
    { clamp: true }
  );

  // Opacity: stays between 1 (active) and ~0.90 (when under newer cards)
  const opacity = useTransform(
    scrollYProgress,
    [enterStart, enterEnd, 1],
    [index === 0 ? 1 : 0, 1, Math.max(0.88, 1 - (total - 1 - index) * 0.015)],
    { clamp: true }
  );

  // Staggered top offset so cards in the stack have visible layered headers
  const stackTopOffset = Math.min(index * 16, 120);

  if (shouldReduceMotion) {
    return (
      <div className="mb-8 w-full max-w-[1100px] mx-auto">
        <CertificateCard
          cert={cert}
          index={index}
          onPreview={onPreview}
        />
      </div>
    );
  }

  return (
    <motion.div
      style={{
        y,
        scale,
        opacity,
        zIndex: index + 1,
        top: `calc(1rem + ${stackTopOffset}px)`,
      }}
      className="absolute inset-x-0 mx-auto w-full max-w-[1100px] px-2 sm:px-4"
    >
      <CertificateCard
        cert={cert}
        index={index}
        onPreview={onPreview}
      />
    </motion.div>
  );
}

export default function CertificateStack({ certificates, onPreview }: CertificateStackProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const total = certificates.length;

  if (shouldReduceMotion) {
    return (
      <div className="w-full flex flex-col gap-6">
        {certificates.map((cert, idx) => (
          <CertificateCard
            key={cert.id}
            cert={cert}
            index={idx}
            onPreview={onPreview}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      style={{
        // 80vh of vertical scroll track per certificate for comfortable pacing
        minHeight: `${Math.max(2, total) * 75}vh`,
      }}
      className="relative w-full"
    >
      {/* Sticky Viewport containing the absolute stacking cards */}
      <div className="sticky top-20 md:top-24 h-[80vh] sm:h-[84vh] flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-[520px] sm:h-[480px] md:h-[420px] flex items-center justify-center">
          {certificates.map((cert, index) => (
            <AnimatedStackItem
              key={cert.id}
              cert={cert}
              index={index}
              total={total}
              scrollYProgress={scrollYProgress}
              onPreview={onPreview}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
