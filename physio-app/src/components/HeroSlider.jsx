import { useEffect, useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

/**
 * Full-bleed background carousel for the homepage hero.
 * Supports high-impact responsive video (with autoPlay, muted, loop, playsInline)
 * as the 1st slide, followed by responsive high-res images with smooth cross-fade transitions.
 */
export default function HeroSlider({ slides, images, defaultIntervalMs = 5000 }) {
  const slideList = slides || images || [];
  const [index, setIndex] = useState(0);
  const videoRef = useRef(null);

  const currentSlide = slideList && slideList[index] ? slideList[index] : null;
  const slideDuration = currentSlide?.duration || defaultIntervalMs;

  useEffect(() => {
    if (!slideList || slideList.length <= 1) return;

    const timer = setTimeout(() => {
      setIndex((i) => (i + 1) % slideList.length);
    }, slideDuration);

    return () => clearTimeout(timer);
  }, [index, slideList, slideDuration]);

  // Ensure video auto-plays smoothly when it becomes the active slide
  useEffect(() => {
    if (currentSlide?.type === 'video' && videoRef.current) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Auto-play was prevented by browser power saving; video remains muted
        });
      }
    }
  }, [index, currentSlide]);

  if (!slideList || slideList.length === 0) return null;

  const isVideo = currentSlide?.type === 'video';
  const slideKey = isVideo ? currentSlide.video : (typeof currentSlide === 'string' ? currentSlide : currentSlide.image);
  const mobilePos = currentSlide?.mobilePosition || 'center center';
  const tabletPos = currentSlide?.tabletPosition || mobilePos;
  const desktopPos = currentSlide?.desktopPosition || 'center center';

  return (
    <div className="hero-slider" aria-hidden="true">
      <AnimatePresence initial={false}>
        <motion.div
          key={slideKey}
          className="hero-slider-slide"
          style={{
            '--slide-mobile-pos': mobilePos,
            '--slide-tablet-pos': tabletPos,
            '--slide-desktop-pos': desktopPos,
            ...(isVideo ? {} : { backgroundImage: `url(${slideKey})` }),
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: 'easeInOut' }}
        >
          {isVideo && (
            <video
              ref={videoRef}
              src={currentSlide.video}
              poster={currentSlide.poster}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="hero-slider-video-media"
            />
          )}
        </motion.div>
      </AnimatePresence>
      <div className="hero-slider-overlay" />
    </div>
  );
}
