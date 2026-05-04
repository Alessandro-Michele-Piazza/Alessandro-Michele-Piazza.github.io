import { useEffect, useRef } from 'react';

const CursorGlow = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;

    if (!glow) {
      return undefined;
    }

    const setPosition = (x, y) => {
      glow.style.setProperty('--glow-x', `${x}px`);
      glow.style.setProperty('--glow-y', `${y}px`);
    };

    const centerGlow = () => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      setPosition(centerX, centerY);
    };

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleMouseMove = (event) => {
      if (prefersReducedMotion.matches) {
        return;
      }

      setPosition(event.clientX, event.clientY);
    };

    const handleTouchMove = (event) => {
      if (prefersReducedMotion.matches) {
        return;
      }

      const touch = event.touches[0];

      if (!touch) {
        return;
      }

      setPosition(touch.clientX, touch.clientY);
    };

    const handleResize = () => {
      centerGlow();
    };

    centerGlow();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />;
};

export default CursorGlow;