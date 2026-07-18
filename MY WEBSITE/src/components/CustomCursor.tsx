import { useEffect, useState } from 'react';

/** A soft custom cursor that follows the pointer with a trailing ring. Desktop only. */
export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ring, setRing] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Only enable on devices with a fine pointer
    const mq = window.matchMedia('(pointer: fine)');
    setEnabled(mq.matches);
    if (!mq.matches) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setHovering(
        !!target.closest('a, button, [data-cursor="hover"]')
      );
    };
    const loop = () => {
      setRing((r) => ({
        x: r.x + (pos.x - r.x) * 0.18,
        y: r.y + (pos.y - r.y) * 0.18,
      }));
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, [pos.x, pos.y]);

  if (!enabled) return null;

  return (
    <>
      <div
        className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 rounded-full bg-gold-500 mix-blend-difference"
        style={{
          transform: `translate(${pos.x - 4}px, ${pos.y - 4}px)`,
          transition: 'width 0.2s, height 0.2s',
        }}
      />
      <div
        className={`pointer-events-none fixed left-0 top-0 z-[100] rounded-full border border-forest-800/40 transition-[width,height,opacity] duration-300 ${
          hovering ? 'h-12 w-12 opacity-100' : 'h-8 w-8 opacity-60'
        }`}
        style={{
          transform: `translate(${ring.x - (hovering ? 24 : 16)}px, ${
            ring.y - (hovering ? 24 : 16)
          }px)`,
        }}
      />
    </>
  );
}
