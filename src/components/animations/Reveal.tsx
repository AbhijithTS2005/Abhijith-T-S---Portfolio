import { motion, useReducedMotion } from 'framer-motion';
import { type CSSProperties, type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
  style?: CSSProperties;
}

export default function Reveal({
  children,
  delay = 0,
  duration = 0.8,
  y = 50,
  className = '',
  style,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
