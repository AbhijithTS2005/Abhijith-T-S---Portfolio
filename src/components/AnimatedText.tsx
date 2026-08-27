import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { useRef, type CSSProperties } from 'react';

interface AnimatedTextProps {
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
      {/* Animated copy sits on top and fades in as the paragraph scrolls through view */}
      <motion.span style={{ opacity, position: 'absolute', left: 0, top: 0 }}>
        {display}
      </motion.span>
    </span>
  );
}

/**
 * Reveals `text` one character at a time as the paragraph scrolls through the viewport.
 */
export default function AnimatedText({ text, className = '', style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const characters = text.split('');

  return (
    <p ref={ref} className={className} style={style}>
      {characters.map((char, i) => {
        const start = i / characters.length;
        const end = start + 1 / characters.length;
        return <AnimatedCharacter key={i} char={char} progress={scrollYProgress} range={[start, end]} />;
      })}
    </p>
  );
}
