import { useState } from 'react';
import { doctorAchievements } from '../data/achievements';
import Lightbox from './Lightbox';

export default function CertificateCollage() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Row 1 items (forward)
  const row1 = [...doctorAchievements, ...doctorAchievements];
  // Row 2 items (reverse order for visual depth)
  const row2 = [...[...doctorAchievements].reverse(), ...[...doctorAchievements].reverse()];

  return (
    <section className="section certificate-collage-section" id="achievements">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-label">Verified Credentials</span>
          <h2 className="section-title">Honors &amp; Accreditations</h2>
          <p className="section-subtitle">
            Hover to pause • Tap any certificate to view full official document
          </p>
        </div>

        {/* --- DUAL-ROW INFINITE ANIMATED CERTIFICATE WALL --- */}
        <div className="cert-wall-wrapper" aria-label="Interactive Accreditations Wall">
          {/* Row 1: Leftward Marquee */}
          <div className="cert-marquee-row cert-row-left">
            <div className="cert-marquee-track">
              {row1.map((item, idx) => (
                <div
                  key={`r1-${item.id}-${idx}`}
                  className="cert-card"
                  onClick={() => setLightboxIndex(idx % doctorAchievements.length)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setLightboxIndex(idx % doctorAchievements.length);
                    }
                  }}
                  aria-label={`View full certificate: ${item.title}`}
                >
                  <div className="cert-card-image-box">
                    <img src={item.image} alt={item.alt} loading="lazy" />
                    <div className="cert-card-overlay">
                      <span className="cert-card-zoom-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <circle cx="11" cy="11" r="8" />
                          <line x1="21" y1="21" x2="16.65" y2="16.65" />
                          <line x1="11" y1="8" x2="11" y2="14" />
                          <line x1="8" y1="11" x2="14" y2="11" />
                        </svg>
                        Tap to View
                      </span>
                    </div>
                  </div>
                  <div className="cert-card-meta">
                    <span className="cert-badge">{item.badge}</span>
                    <h4 className="cert-title">{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Rightward Marquee */}
          <div className="cert-marquee-row cert-row-right">
            <div className="cert-marquee-track cert-track-reverse">
              {row2.map((item, idx) => {
                const originalIndex = doctorAchievements.findIndex((a) => a.id === item.id);
                return (
                  <div
                    key={`r2-${item.id}-${idx}`}
                    className="cert-card"
                    onClick={() => setLightboxIndex(originalIndex >= 0 ? originalIndex : 0)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setLightboxIndex(originalIndex >= 0 ? originalIndex : 0);
                      }
                    }}
                    aria-label={`View full certificate: ${item.title}`}
                  >
                    <div className="cert-card-image-box">
                      <img src={item.image} alt={item.alt} loading="lazy" />
                      <div className="cert-card-overlay">
                        <span className="cert-card-zoom-btn">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            <line x1="11" y1="8" x2="11" y2="14" />
                            <line x1="8" y1="11" x2="14" y2="11" />
                          </svg>
                          Tap to View
                        </span>
                      </div>
                    </div>
                    <div className="cert-card-meta">
                      <span className="cert-badge">{item.badge}</span>
                      <h4 className="cert-title">{item.title}</h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
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
