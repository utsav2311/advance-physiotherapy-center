import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

/**
 * Full-image Hero Slider.
 * Displays the complete uncropped photograph (object-fit: contain)
 * with a matching ambient backdrop to ensure zero image cutting on all screen sizes.
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
        >
          {/* Ambient blurred backdrop so screen edges blend seamlessly */}
          <div
            className="hero-slide-backdrop"
            style={{ backgroundImage: `url(${images[index]})` }}
          />

          {/* Complete uncropped foreground photo */}
          <img
            src={images[index]}
            alt=""
            className="hero-slide-main-img"
          />
        </motion.div>
      </AnimatePresence>
      <div className="hero-slider-overlay" />
    </div>
  );
}
