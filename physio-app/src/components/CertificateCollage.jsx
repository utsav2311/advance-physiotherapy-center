import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { doctorAchievements } from '../data/achievements';
import Lightbox from './Lightbox';

export default function CertificateCollage() {
  const [viewMode, setViewMode] = useState('slider'); // 'slider' | 'grid'
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const total = doctorAchievements.length;

  useEffect(() => {
    if (!isAutoPlaying || viewMode !== 'slider') return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 4000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, viewMode, total]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : total - 1));
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
    setIsAutoPlaying(false);
  };

  return (
    <section className="section achievements-gallery-section" id="achievements">
      <div className="container">
        {/* --- SECTION HEADER --- */}
        <div className="section-header text-center">
          <span className="section-label">Verified Qualifications</span>
          <h2 className="section-title">Honors, Accreditations &amp; Registrations</h2>
          <p className="section-subtitle">
            Government registrations, international professional memberships, and clinical excellence awards.
          </p>

          {/* VIEW SWITCHER TABS */}
          <div className="achieve-view-switcher" role="tablist" aria-label="View Mode">
            <button
              type="button"
              role="tab"
              aria-selected={viewMode === 'slider'}
              className={`achieve-tab-btn ${viewMode === 'slider' ? 'is-active' : ''}`}
              onClick={() => setViewMode('slider')}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
              Interactive Slider
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={viewMode === 'grid'}
              className={`achieve-tab-btn ${viewMode === 'grid' ? 'is-active' : ''}`}
              onClick={() => setViewMode('grid')}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
              Gallery Wall
            </button>
          </div>
        </div>

        {/* --- VIEW 1: INTERACTIVE 3D COVERFLOW SLIDER --- */}
        {viewMode === 'slider' && (
          <div
            className="achieve-slider-wrapper"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="achieve-slider-viewport">
              <button
                type="button"
                className="achieve-nav-btn prev"
                onClick={handlePrev}
                aria-label="Previous certificate"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="22" height="22">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              <div className="achieve-slides-track">
                {[-1, 0, 1].map((offset) => {
                  const idx = (activeIndex + offset + total) % total;
                  const item = doctorAchievements[idx];
                  const isCurrent = offset === 0;

                  return (
                    <motion.div
                      key={`${item.id}-${offset}`}
                      className={`achieve-slide-card ${isCurrent ? 'is-current' : 'is-peek'}`}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{
                        opacity: isCurrent ? 1 : 0.45,
                        scale: isCurrent ? 1 : 0.88,
                        x: offset === -1 ? '-8%' : offset === 1 ? '8%' : '0%',
                        zIndex: isCurrent ? 10 : 2,
                      }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                      onClick={() => (isCurrent ? setLightboxIndex(idx) : setActiveIndex(idx))}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          if (isCurrent) setLightboxIndex(idx);
                          else setActiveIndex(idx);
                        }
                      }}
                      aria-label={`View certificate: ${item.title}`}
                    >
                      <div className="achieve-card-media-box">
                        <img src={item.image} alt={item.alt} loading="eager" />
                        {isCurrent && (
                          <div className="achieve-hover-overlay">
                            <span className="achieve-zoom-pill">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                <line x1="11" y1="8" x2="11" y2="14" />
                                <line x1="8" y1="11" x2="14" y2="11" />
                              </svg>
                              Tap to View Fullscreen
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="achieve-card-details">
                        <span className="achieve-badge">{item.badge}</span>
                        <h3 className="achieve-title">{item.title}</h3>
                        <p className="achieve-authority">{item.authority}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <button
                type="button"
                className="achieve-nav-btn next"
                onClick={handleNext}
                aria-label="Next certificate"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="22" height="22">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>

            {/* Pagination Thumbnails Rail */}
            <div className="achieve-pills-rail">
              {doctorAchievements.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  className={`achieve-pill-thumb ${activeIndex === idx ? 'is-active' : ''}`}
                  onClick={() => {
                    setActiveIndex(idx);
                    setIsAutoPlaying(false);
                  }}
                  aria-label={`Go to slide ${idx + 1}: ${item.title}`}
                >
                  <img src={item.image} alt="" aria-hidden="true" />
                  <span className="achieve-pill-label">{item.badge}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* --- VIEW 2: LUXURY BENTO GALLERY WALL --- */}
        {viewMode === 'grid' && (
          <div className="achieve-bento-wall">
            {doctorAchievements.map((item, idx) => {
              const isLarge = idx === 0 || idx === 7;
              return (
                <motion.div
                  key={item.id}
                  className={`achieve-bento-tile ${isLarge ? 'is-large' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  onClick={() => setLightboxIndex(idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setLightboxIndex(idx);
                    }
                  }}
                  aria-label={`View full certificate: ${item.title}`}
                >
                  <div className="achieve-tile-media">
                    <img src={item.image} alt={item.alt} loading="lazy" />
                    <div className="achieve-tile-overlay">
                      <span className="achieve-zoom-pill">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14">
                          <circle cx="11" cy="11" r="8" />
                          <line x1="21" y1="21" x2="16.65" y2="16.65" />
                          <line x1="11" y1="8" x2="11" y2="14" />
                          <line x1="8" y1="11" x2="14" y2="11" />
                        </svg>
                        Zoom Certificate
                      </span>
                    </div>
                  </div>
                  <div className="achieve-tile-info">
                    <span className="achieve-badge">{item.badge}</span>
                    <h4 className="achieve-tile-title">{item.title}</h4>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      {/* FULLSCREEN LIGHTBOX */}
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
