import { useEffect, useRef, useState, type ReactNode } from 'react';

interface MagnetProps {
  children: ReactNode;
  /** Distance (px) from the element's edge at which the magnetic pull activates. */
  padding?: number;
  /** Higher = subtler pull. Cursor offset from center is divided by this factor. */
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

/**
 * Wraps its children in a div that gently follows the cursor when the pointer
 * comes within `padding` pixels of the element, and eases back to rest otherwise.
 */
export default function Magnet({
  children,
  padding = 100,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
}: MagnetProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const el = wrapperRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const withinRange =
        e.clientX >= rect.left - padding &&
        e.clientX <= rect.right + padding &&
        e.clientY >= rect.top - padding &&
        e.clientY <= rect.bottom + padding;

      if (!withinRange) {
        setIsActive(false);
        setTranslate({ x: 0, y: 0 });
        return;
      }

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      setIsActive(true);
      setTranslate({
        x: (e.clientX - centerX) / strength,
        y: (e.clientY - centerY) / strength,
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [padding, strength]);

  return (
    <div
      ref={wrapperRef}
      className={className}
      style={{
        transform: `translate3d(${translate.x}px, ${translate.y}px, 0)`,
        transition: isActive ? activeTransition : inactiveTransition,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
}
