import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

/**
 * Full-bleed background image carousel for the homepage hero.
 * Renders purely as a decorative background layer (z-index: 0) behind the
 * existing hero content/overlay — it does not affect layout, text, or
 * buttons in any way.
 */
export default function HeroSlider({ images, intervalMs = 4500 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;

    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [images, intervalMs]);

  if (!images || images.length === 0) return null;

  return (
    <div className="hero-slider" aria-hidden="true">
      <AnimatePresence initial={false}>
        <motion.div
          key={images[index]}
          className="hero-slider-slide"
          style={{ backgroundImage: `url(${images[index]})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: 'easeInOut' }}
        />
      </AnimatePresence>
      <div className="hero-slider-overlay" />
    </div>
  );
}

