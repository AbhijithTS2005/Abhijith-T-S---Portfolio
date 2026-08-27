import { useEffect, useRef } from 'react';
import { MARQUEE_IMAGES } from '../data/marqueeImages';

const ROW1_SOURCE = MARQUEE_IMAGES.slice(0, 11);
const ROW2_SOURCE = MARQUEE_IMAGES.slice(11);

// Tripled so the row always has enough width to scroll seamlessly in either direction.
const ROW1 = [...ROW1_SOURCE, ...ROW1_SOURCE, ...ROW1_SOURCE];
const ROW2 = [...ROW2_SOURCE, ...ROW2_SOURCE, ...ROW2_SOURCE];

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const applyOffset = () => {
      rafId.current = null;

      const section = sectionRef.current;
      if (!section) return;

      const sectionTop = section.offsetTop;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;

      if (row1Ref.current) {
        row1Ref.current.style.transform = `translateX(${offset - 200}px)`;
      }
      if (row2Ref.current) {
        row2Ref.current.style.transform = `translateX(${-(offset - 200)}px)`;
      }
    };

    const handleScroll = () => {
      if (rafId.current !== null) return;
      rafId.current = requestAnimationFrame(applyOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    applyOffset();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10"
      style={{ overflowX: 'clip' }}
    >
      <div className="flex flex-col gap-3">
        <div ref={row1Ref} className="flex gap-3" style={{ willChange: 'transform' }}>
          {ROW1.map((src, i) => (
            <img
              key={`row1-${i}`}
              src={src}
              alt=""
              loading="lazy"
              className="w-[420px] h-[270px] object-cover rounded-2xl flex-shrink-0"
            />
          ))}
        </div>
        <div ref={row2Ref} className="flex gap-3" style={{ willChange: 'transform' }}>
          {ROW2.map((src, i) => (
            <img
              key={`row2-${i}`}
              src={src}
              alt=""
              loading="lazy"
              className="w-[420px] h-[270px] object-cover rounded-2xl flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
