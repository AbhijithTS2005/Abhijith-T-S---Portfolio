import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from 'framer-motion';
import { useRef, type CSSProperties } from 'react';

interface ScrollTextProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

interface AnimatedCharacterProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function AnimatedCharacter({ char, progress, range }: AnimatedCharacterProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const display = char === ' ' ? '\u00A0' : char;

  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      {/* Invisible placeholder preserves natural text layout/wrapping */}
      <span style={{ opacity: 0 }}>{display}</span>
      {/* Animated copy on top */}
      <motion.span style={{ opacity, position: 'absolute', left: 0, top: 0 }}>
        {display}
      </motion.span>
    </span>
  );
}

export default function ScrollText({ text, className = '', style }: ScrollTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const characters = text.split('');

  if (shouldReduceMotion) {
    return (
      <p ref={ref} className={className} style={style}>
        {text}
      </p>
    );
  }

  return (
    <p ref={ref} className={className} style={style}>
      {characters.map((char, i) => {
        const charProgress = i / characters.length;
        const start = Math.max(0, charProgress - 0.1);
        const end = Math.min(1, charProgress + 0.05);
        return <AnimatedCharacter key={i} char={char} progress={scrollYProgress} range={[start, end]} />;
      })}
    </p>
  );
}
