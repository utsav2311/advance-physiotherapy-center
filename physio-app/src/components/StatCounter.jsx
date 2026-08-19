import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

/**
 * Counts up from 0 to `target` once the element scrolls into view.
 * Uses a Motion spring for a natural deceleration instead of a linear tween.
 */
function AnimatedNumber({ target }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 60, damping: 20, mass: 1 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) motionValue.set(target);
  }, [inView, target, motionValue]);

  useEffect(() => {
    const unsubscribe = spring.on('change', (v) => setDisplay(Math.round(v)));
    return unsubscribe;
  }, [spring]);

  return <span ref={ref}>{display}</span>;
}

export default function StatCounter({ target, suffix = '+', label }) {
  return (
    <div className="stat-item">
      <div className="stat-number">
        <AnimatedNumber target={target} />
        <span className="stat-suffix">{suffix}</span>
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}
