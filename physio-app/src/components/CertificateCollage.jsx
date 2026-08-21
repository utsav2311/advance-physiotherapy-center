import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { doctorAchievements } from '../data/achievements';
import Lightbox from './Lightbox';

export default function CertificateCollage() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const scrollRef = useRef(null);

  // Duplicate list for infinite marquee animation loop
  const marqueeItems = [...doctorAchievements, ...doctorAchievements];

  return (
    <section className="section certificate-collage-section" id="achievements">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-label">Verified Credentials</span>
          <h2 className="section-title">Honors &amp; Accreditations Wall</h2>
          <p className="section-subtitle">
            Tap any certificate to view in full resolution.
          </p>
        </div>

        {/* --- INFINITE SMOOTH MARQUEE STRIP --- */}
        <div className="cert-marquee-container" aria-label="Accreditations Marquee">
          <div className="cert-marquee-track">
            {marqueeItems.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="cert-marquee-card"
                onClick={() => setLightboxIndex(idx % doctorAchievements.length)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setLightboxIndex(idx % doctorAchievements.length);
                  }
                }}
              >
                <div className="cert-frame">
                  <img src={item.image} alt={item.alt} loading="lazy" />
                  <div className="cert-overlay">
                    <span className="cert-zoom-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        <line x1="11" y1="8" x2="11" y2="14" />
                        <line x1="8" y1="11" x2="14" y2="11" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="cert-card-info">
                  <span className="cert-pill">{item.badge}</span>
                  <h4 className="cert-card-title">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- INTERACTIVE BENTO COLLAGE GRID --- */}
        <div className="cert-bento-grid">
          {doctorAchievements.map((item, idx) => {
            const isFeatured = idx === 0 || idx === 1;
            return (
              <motion.div
                key={item.id}
                className={`cert-bento-card ${isFeatured ? 'is-featured' : ''}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onClick={() => setLightboxIndex(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setLightboxIndex(idx);
                  }
                }}
                aria-label={`View certificate: ${item.title}`}
              >
                <div className="cert-bento-media">
                  <img src={item.image} alt={item.alt} loading="lazy" />
                  <div className="cert-bento-overlay">
                    <span className="cert-view-btn">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        <line x1="11" y1="8" x2="11" y2="14" />
                        <line x1="8" y1="11" x2="14" y2="11" />
                      </svg>
                      View Certificate
                    </span>
                  </div>
                </div>
                <div className="cert-bento-caption">
                  <span className="cert-bento-badge">{item.badge}</span>
                  <h4 className="cert-bento-title">{item.title}</h4>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* --- FULLSCREEN LIGHTBOX --- */}
      <Lightbox
        images={doctorAchievements}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={() =>
          setLightboxIndex((curr) =>
            curr > 0 ? curr - 1 : doctorAchievements.length - 1
          )
        }
        onNext={() =>
          setLightboxIndex((curr) =>
            curr < doctorAchievements.length - 1 ? curr + 1 : 0
          )
        }
      />
    </section>
  );
}
