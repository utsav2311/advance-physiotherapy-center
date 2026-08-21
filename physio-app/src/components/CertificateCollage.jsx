import { useState } from 'react';
import { motion } from 'framer-motion';
import { doctorAchievements } from '../data/achievements';
import Lightbox from './Lightbox';

export default function CertificateCollage() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <section className="section achievements-gallery-section" id="achievements">
      <div className="container">
        {/* SECTION HEADER */}
        <div className="section-header text-center">
          <span className="section-label">Verified Qualifications</span>
          <h2 className="section-title">Honors, Accreditations &amp; Registrations</h2>
          <p className="section-subtitle">
            Government registrations, international professional accreditations, and clinical excellence certifications.
          </p>
        </div>

        {/* GALLERY WALL */}
        <div className="achieve-bento-wall">
          {doctorAchievements.map((item, idx) => (
            <motion.div
              key={item.id}
              className="achieve-bento-tile"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
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
                    View Certificate
                  </span>
                </div>
              </div>
              <div className="achieve-tile-info">
                <span className="achieve-badge">{item.badge}</span>
                <h4 className="achieve-tile-title">{item.title}</h4>
                <p className="achieve-authority">{item.authority}</p>
              </div>
            </motion.div>
          ))}
        </div>
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
