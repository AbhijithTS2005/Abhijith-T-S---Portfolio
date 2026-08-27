import { motion } from 'framer-motion';
import { useMemo, type CSSProperties, type ElementType, type ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  style?: CSSProperties;
  /** Element/tag this FadeIn should render as (nav, h1, p, etc). Defaults to div. */
  as?: ElementType;
}

/**
 * Scroll-reveal wrapper used throughout the page.
 * Animates opacity/x/y from `initial` to `whileInView`, once, with a shared easing curve.
 */
export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className = '',
  style,
  as = 'div',
}: FadeInProps) {
  // motion.create() lets the underlying tag be chosen dynamically (nav / h1 / p / div...)
  const MotionTag = useMemo(() => motion.create(as as any), [as]);

  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </MotionTag>
  );
}
