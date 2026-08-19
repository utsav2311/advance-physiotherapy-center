import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

/**
 * Full-bleed background image carousel for the homepage hero.
 * Features responsive focal point positioning for mobile & desktop,
 * preserving clean subject visibility (doctor, patient therapy, awards)
 * without distortion or awkward cropping.
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

  const currentSlide = images[index];
  const imageUrl = typeof currentSlide === 'string' ? currentSlide : currentSlide.image;
  const mobilePos = typeof currentSlide === 'object' ? currentSlide.mobilePosition : 'center 20%';
  const desktopPos = typeof currentSlide === 'object' ? currentSlide.desktopPosition : 'center center';

  return (
    <div className="hero-slider" aria-hidden="true">
      <AnimatePresence initial={false}>
        <motion.div
          key={imageUrl}
          className="hero-slider-slide"
          style={{
            backgroundImage: `url(${imageUrl})`,
            '--slide-mobile-pos': mobilePos,
            '--slide-desktop-pos': desktopPos,
          }}
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
