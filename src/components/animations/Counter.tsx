import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

interface CounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export default function Counter({
  value,
  duration = 1.2,
  suffix = '',
  className = '',
}: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setCount(value);
      return;
    }

    if (!isInView) return;

    let start = 0;
    const end = value;
    const totalFrames = Math.round((duration * 1000) / 16);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + (end - start) * easeOut);

      setCount(current);

      if (frame >= totalFrames) {
        clearInterval(counter);
        setCount(end);
      }
    }, 16);

    return () => clearInterval(counter);
  }, [isInView, value, duration, shouldReduceMotion]);

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  );
}
