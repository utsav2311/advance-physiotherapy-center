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
  const timerRef = useRef(null);

  useEffect(() => {
    if (!images || images.length <= 1) return;

    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, intervalMs);

    return () => clearInterval(timerRef.current);
  }, [images, intervalMs]);

  const restartTimer = () => {
    if (!images || images.length <= 1) return;
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, intervalMs);
  };

  const goTo = (i) => {
    setIndex(i);
    restartTimer();
  };

  const goPrev = () => {
    setIndex((i) => (i - 1 + images.length) % images.length);
    restartTimer();
  };

  const goNext = () => {
    setIndex((i) => (i + 1) % images.length);
    restartTimer();
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="hero-slider">
      <div aria-hidden="true">
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

      {images.length > 1 && (
        <>
          <button
            type="button"
            className="hero-slider-arrow hero-slider-arrow-prev"
            onClick={goPrev}
            aria-label="Previous slide"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            className="hero-slider-arrow hero-slider-arrow-next"
            onClick={goNext}
            aria-label="Next slide"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div className="hero-slider-dots" role="tablist" aria-label="Hero slide selector">
            {images.map((img, i) => (
              <button
                key={img}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show slide ${i + 1}`}
                className={`hero-slider-dot${i === index ? ' active' : ''}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
