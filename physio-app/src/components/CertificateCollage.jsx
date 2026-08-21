import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { doctorAchievements } from '../data/achievements';
import Lightbox from './Lightbox';

export default function CertificateCollage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const current = doctorAchievements[selectedIndex] || doctorAchievements[0];

  // Optional auto-rotation through certificates (pauses on user interaction)
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setSelectedIndex((curr) => (curr + 1) % doctorAchievements.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const handleSelect = (idx) => {
    setSelectedIndex(idx);
    setIsAutoPlaying(false);
  };

  const handlePrev = () => {
    setSelectedIndex((curr) => (curr > 0 ? curr - 1 : doctorAchievements.length - 1));
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setSelectedIndex((curr) => (curr + 1) % doctorAchievements.length);
    setIsAutoPlaying(false);
  };

  return (
    <section
      className="section certificate-showcase-section"
      id="achievements"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="container">
        <div className="section-header text-center">
          <span className="section-label">Verified Qualifications</span>
          <h2 className="section-title">Recognitions &amp; Accreditations</h2>
          <p className="section-subtitle">
            Government registrations, international professional memberships, and specialized certifications.
          </p>
        </div>

        <div className="cert-showcase-container">
          {/* LEFT / TOP: LARGE SPOTLIGHT DISPLAY */}
          <div className="cert-spotlight">
            <div className="cert-spotlight-frame">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  className="cert-spotlight-media"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  onClick={() => setLightboxIndex(selectedIndex)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setLightboxIndex(selectedIndex);
                    }
                  }}
                  aria-label={`Zoom in on ${current.title}`}
                >
                  <img src={current.image} alt={current.alt} loading="eager" />
                  <div className="cert-spotlight-hover">
                    <span className="cert-spotlight-zoom-btn">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        <line x1="11" y1="8" x2="11" y2="14" />
                        <line x1="8" y1="11" x2="14" y2="11" />
                      </svg>
                      Click to View Full Size
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation controls */}
              <div className="cert-spotlight-controls">
                <button
                  type="button"
                  className="cert-control-btn"
                  onClick={handlePrev}
                  aria-label="Previous certificate"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18" height="18">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <div className="cert-pagination-dots">
                  {doctorAchievements.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`cert-dot ${selectedIndex === idx ? 'active' : ''}`}
                      onClick={() => handleSelect(idx)}
                      aria-label={`Go to certificate ${idx + 1}`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  className="cert-control-btn"
                  onClick={handleNext}
                  aria-label="Next certificate"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18" height="18">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="cert-spotlight-info">
              <span className="cert-spotlight-badge">{current.badge}</span>
              <h3 className="cert-spotlight-title">{current.title}</h3>
              <p className="cert-spotlight-authority">{current.authority}</p>
            </div>
          </div>

          {/* RIGHT / BOTTOM: INTERACTIVE THUMBNAIL GALLERY */}
          <div className="cert-thumb-grid">
            {doctorAchievements.map((item, idx) => {
              const isSelected = selectedIndex === idx;
              return (
                <div
                  key={item.id}
                  className={`cert-thumb-card ${isSelected ? 'is-selected' : ''}`}
                  onClick={() => handleSelect(idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleSelect(idx);
                    }
                  }}
                  aria-label={`Select ${item.title}`}
                >
                  <div className="cert-thumb-image-box">
                    <img src={item.image} alt={item.alt} loading="lazy" />
                    {isSelected && <div className="cert-thumb-active-glow" />}
                  </div>
                  <div className="cert-thumb-meta">
                    <span className="cert-thumb-badge">{item.badge}</span>
                    <h4 className="cert-thumb-title">{item.title}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* LIGHTBOX FOR FULL VIEW */}
      <Lightbox
        images={doctorAchievements}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={() =>
          setLightboxIndex((curr) => (curr > 0 ? curr - 1 : doctorAchievements.length - 1))
        }
        onNext={() =>
          setLightboxIndex((curr) => (curr < doctorAchievements.length - 1 ? curr + 1 : 0))
        }
      />
    </section>
  );
}
