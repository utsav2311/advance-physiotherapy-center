import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Lightbox({
  images = [],
  currentIndex = null,
  onClose,
  onPrev,
  onNext,
}) {
  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < images.length;
  const currentItem = isOpen ? images[currentIndex] : null;

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose?.();
      if (e.key === 'ArrowLeft') onPrev?.();
      if (e.key === 'ArrowRight') onNext?.();
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {isOpen && currentItem && (
        <motion.div
          className="lightbox-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.24 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Full screen image preview"
        >
          {/* Top Bar with Counter & Close */}
          <div className="lightbox-top-bar" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-counter">
              <span>{currentIndex + 1}</span> / <span>{images.length}</span>
              {currentItem.category && (
                <span className="lightbox-category-badge">{currentItem.category}</span>
              )}
            </div>
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={onClose}
              aria-label="Close full view"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                className="lightbox-nav-btn lightbox-prev-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  onPrev();
                }}
                aria-label="Previous image"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                className="lightbox-nav-btn lightbox-next-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  onNext();
                }}
                aria-label="Next image"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </>
          )}

          {/* Center Content Container */}
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <motion.div
              key={currentItem.video || currentItem.image}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="lightbox-image-wrapper"
            >
              {currentItem.type === 'video' ? (
                <video
                  src={currentItem.video}
                  poster={currentItem.image}
                  controls
                  autoPlay
                  playsInline
                  loop
                  className="lightbox-video"
                />
              ) : (
                <img
                  src={currentItem.image}
                  alt={currentItem.alt || currentItem.caption || 'Clinic photo'}
                  className="lightbox-img"
                />
              )}
              {currentItem.caption && (
                <div className="lightbox-caption-box">
                  <p className="lightbox-caption-text">{currentItem.caption}</p>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
