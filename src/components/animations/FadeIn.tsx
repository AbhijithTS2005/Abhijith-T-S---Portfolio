import { motion, useReducedMotion } from 'framer-motion';
import { useMemo, type CSSProperties, type ElementType, type ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  scale?: number;
  ease?: number[] | string;
  className?: string;
  style?: CSSProperties;
  as?: ElementType;
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  scale = 1,
  ease = [0.25, 0.1, 0.25, 1],
  className = '',
  style,
  as = 'div',
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = useMemo(() => motion.create(as as any), [as]);

  if (shouldReduceMotion) {
    const Tag = as as any;
    return (
      <Tag className={className} style={style}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, x, y, scale }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ duration, delay, ease }}
    >
      {children}
    </MotionTag>
  );
}
