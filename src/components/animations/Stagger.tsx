import { motion, useReducedMotion } from 'framer-motion';
import { type CSSProperties, type ReactNode } from 'react';

interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  className?: string;
  style?: CSSProperties;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.12,
  delayChildren = 0,
  className = '',
  style,
}: StaggerContainerProps) {
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
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren,
          },
        },
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  y?: number;
  x?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
}

export function StaggerItem({
  children,
  y = 35,
  x = 0,
  duration = 0.7,
  className = '',
  style,
}: StaggerItemProps) {
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
      variants={{
        hidden: { opacity: 0, y, x },
        visible: {
          opacity: 1,
          y: 0,
          x: 0,
          transition: {
            duration,
            ease: [0.25, 0.1, 0.25, 1],
          },
        },
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
