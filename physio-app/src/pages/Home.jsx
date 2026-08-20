import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import WhatsAppButton from '../components/WhatsAppButton';
import ServiceCard, { FeaturedServiceCard } from '../components/ServiceCard';
import StatCounter from '../components/StatCounter';
import Reveal from '../components/Reveal';
import ProcessStep from '../components/ProcessStep';
import Skiper104 from '../components/Skiper104';
import FaqSection from '../components/FaqSection';
import HeroSlider from '../components/HeroSlider';
import Lightbox from '../components/Lightbox';
import Seo from '../components/Seo';
import JsonLd from '../components/JsonLd';
import { InfiniteSlider } from '@/components/ui/logo-marquee';
import { services, homeImportantSlugs } from '../data/services';
import { reviews, ratingSummary } from '../data/reviews';
import { processSteps } from '../data/process';
import { faqs } from '../data/faqs';
import { galleryItems } from '../data/gallery';
import { heroSlides } from '../data/heroSlides';
import { SITE } from '../data/site';
import {
  PhoneIcon,
  LocationIcon,
  ClockIcon,
  EmailIcon,
  HomeVisitIcon,
  HospitalIcon,
  GoogleIcon,
} from '../components/Icons';
import { useState } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

const trustStrapItems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
        <path d="M12 15l-2 5l9-13h-6l2-5l-9 13h6z" />
      </svg>
    ),
    text: <><strong>B.P.T., M.P.T. (Ortho)</strong> Qualified</>,
    bg: '#0284c7',
  },
  {
    icon: <HospitalIcon />,
    text: <><strong>7+ Hospitals</strong> Experience</>,
    bg: '#059669',
  },
  {
    icon: <HomeVisitIcon />,
    text: <><strong>Home Visits</strong> Available</>,
    bg: '#4f46e5',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="#f59e0b">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ),
    text: <><strong>5.0★ Google Rating</strong> (29+ Reviews)</>,
    bg: '#d97706',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    text: <><strong>Advanced Manual Therapy</strong> &amp; Modalities</>,
    bg: '#0d9488',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    text: <><strong>Personalized 1-on-1</strong> Rehabilitation</>,
    bg: '#7c3aed',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    text: <><strong>Dry Cupping</strong> &amp; Spine Traction</>,
    bg: '#ea580c',
  },
];

export default function Home() {
  const importantServices = services.filter((s) => homeImportantSlugs.includes(s.slug));
  const [homeLightboxIndex, setHomeLightboxIndex] = useState(null);

  return (
    <>
      <Seo
        title="Best Physiotherapy Clinic in Muzaffarpur"
        description="Advance Physiotherapy Centre in Juran Chapra, Muzaffarpur, led by Dr. Shahrukh Firoz (B.P.T., M.P.T., Ortho). Evidence-based physiotherapy, pain management, spine, joint & sports rehabilitation. Home visits available."
        path="/"
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'MedicalBusiness',
          '@id': `${SITE.url}/#business`,
          name: SITE.name,
          image: `${SITE.url}/images/clinic-signboard.webp`,
          url: SITE.url,
          telephone: `+${SITE.phoneSecondary}`,
          email: SITE.email,
          address: {
            '@type': 'PostalAddress',
            streetAddress: SITE.addressLine1,
            addressLocality: SITE.city,
            addressRegion: 'Bihar',
            postalCode: '842001',
            addressCountry: 'IN',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 26.1271542,
            longitude: 85.3757161,
          },
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
              opens: '09:00',
              closes: '18:00',
            },
          ],
          medicalSpecialty: 'Physiotherapy',
          founder: {
            '@type': 'Person',
            name: SITE.doctor,
            jobTitle: 'Physiotherapist',
            description: SITE.credentials,
          },
          hasMap: SITE.mapsShareUrl,
          priceRange: '$$',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: ratingSummary.score,
            reviewCount: reviews.length,
          },
        }}
      />

      {/* HERO */}
      <section className="hero-section" id="home">
        <HeroSlider images={heroSlides} />
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <motion.div
                className="hero-eyebrow"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="hero-eyebrow-line" />
                <span className="hero-eyebrow-text">
                  ADVANCE PHYSIOTHERAPY CENTRE • {SITE.city.toUpperCase()} &amp; BEYOND
                </span>
              </motion.div>

              <motion.h1
                className="hero-title"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={1}
              >
                Expert Physiotherapy &amp; Rehabilitation <span className="hero-title-accent">in {SITE.city}.</span>
              </motion.h1>

              <motion.p
                className="hero-subtitle"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={2}
              >
                Personalized treatment for back pain, neck pain, knee problems, sports injuries, post-surgery recovery and more.
              </motion.p>

              <motion.div className="hero-actions" initial="hidden" animate="visible" variants={fadeUp} custom={3}>
                <WhatsAppButton className="hero-btn-primary" showIcon={false}>
                  <span>Book Appointment</span>
                  <svg className="hero-btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </WhatsAppButton>
                <a href={`tel:${SITE.phonePrimary}`} className="hero-btn-secondary">
                  <PhoneIcon />
                  <span>Call Clinic • {SITE.phonePrimaryDisplay}</span>
                </a>
              </motion.div>

              <motion.div className="hero-feature-pills" initial="hidden" animate="visible" variants={fadeUp} custom={4}>
                <div className="hero-pill-chip">
                  <HomeVisitIcon />
                  <span>Home Visit Available</span>
                </div>
                <div className="hero-pill-chip">
                  <span className="hero-pill-star">★</span>
                  <span>5.0 Google Rating</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="hero-scroll-indicator" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </section>

      {/* TRUST STRIP ANIMATED SINGLE STRAP LINEAR MARQUEE */}
      <section className="trust-strip-marquee" aria-label="Credentials and Quality Assurance">
        <div className="trust-marquee-wrapper">
          <div className="marquee-track-linear">
            {/* Primary Track */}
            <div className="trust-strap-group">
              {trustStrapItems.map((item, i) => (
                <div key={i} className="trust-strap-item">
                  <span className="trust-strap-icon" style={{ background: `${item.bg}15`, color: item.bg }}>
                    {item.icon}
                  </span>
                  <span>{item.text}</span>
                  <span className="trust-strap-dot">•</span>
                </div>
              ))}
            </div>

            {/* Duplicate Track (for seamless infinite loop) */}
            <div className="trust-strap-group" aria-hidden="true">
              {trustStrapItems.map((item, i) => (
                <div key={`dup-${i}`} className="trust-strap-item">
                  <span className="trust-strap-icon" style={{ background: `${item.bg}15`, color: item.bg }}>
                    {item.icon}
                  </span>
                  <span>{item.text}</span>
                  <span className="trust-strap-dot">•</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-strip">
        <div className="container">
          <div className="stats-grid">
            <StatCounter target={25} suffix="+" label="Conditions Treated" />
            <StatCounter target={7} suffix="+" label="Hospitals Experience" />
            <StatCounter target={1000} suffix="+" label="Patients Treated" />
            <StatCounter target={5} suffix=".0★" label="Google Rating" />
          </div>
        </div>
      </section>

      {/* KEY PHYSIOTHERAPY SERVICES */}
      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Primary Clinical Focus</span>
            <h2 className="section-title">Key Physiotherapy Services</h2>
            <p className="section-subtitle">
              Evidence-based treatments for common spinal, joint, neurological, and sports conditions, personally assessed and treated by {SITE.doctor}.
            </p>
          </div>
          <div className="services-grid">
            {importantServices.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '2.75rem' }}>
            <Link to="/services" className="btn btn-secondary" style={{ marginRight: '0.75rem' }}>
              Explore All 10+ Specialized Services →
            </Link>
            <WhatsAppButton className="btn btn-primary">Book Consultation</WhatsAppButton>
          </div>
        </div>
      </section>

      {/* ABOUT DOCTOR PREVIEW */}
      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="about-grid">
            <Reveal className="about-visual" y={30}>
              <div className="about-image-frame">
                <img
                  src="/images/dr-shahrukh-portrait.webp"
                  alt={`${SITE.doctor} - Lead Physiotherapist`}
                  width="480"
                  height="580"
                  loading="lazy"
                />
                <div className="about-image-overlay">
                  <h3>{SITE.doctor}</h3>
                  <p>Lead Physiotherapist • B.P.T., M.P.T.</p>
                </div>
              </div>
            </Reveal>

            <Reveal className="about-content" y={30} delayStep={0.1} index={1}>
              <span className="section-label">Meet Your Physiotherapist</span>
              <h2 className="section-title">Personalized Clinical Healing</h2>
              <p className="about-role">B.P.T., M.P.T., Ortho (Jaipur) • M.G.A.P.T. • M.R.A.P.T. • Reg. No. {SITE.regNo}</p>

              <div className="about-text">
                <p>
                  At <strong>Advance Physiotherapy Centre</strong>, every patient is personally assessed and
                  treated by {SITE.doctor}. We identify the underlying mechanical root causes of pain rather
                  than offering temporary fixes.
                </p>
                <p>
                  Whether recovering from chronic disc problems, post-operative stiffness, sports trauma, or
                  workplace strain, our protocols integrate manual mobilization, therapeutic exercise, and
                  advanced electrotherapy.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link to="/about" className="btn btn-secondary">Full Profile →</Link>
                <WhatsAppButton className="btn btn-primary">Book Consultation</WhatsAppButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROCESS PREVIEW (Skiper104 Scroll Reveal Grid Cards) */}
      <section className="section" id="process-pathway">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">How We Help You Heal</span>
            <h2 className="section-title">Our 4-Step Recovery Pathway</h2>
            <p className="section-subtitle">
              A systematic clinical approach from acute pain to complete functional independence.
            </p>
          </div>

          <Skiper104 steps={processSteps} expandable={true} />

          <div className="text-center" style={{ marginTop: '2.5rem' }}>
            <Link to="/process" className="btn btn-secondary">Explore Full Process & First Visit Guide →</Link>
          </div>
        </div>
      </section>

      {/* REVIEWS PREVIEW */}
      <section className="section reviews-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Patient Feedback</span>
            <h2 className="section-title">What Our Patients Say</h2>
          </div>

          <Reveal className="reviews-summary">
            <div className="google-badge">
              <GoogleIcon />
              Verified Google Business
            </div>
            <div className="score">{ratingSummary.score}</div>
            <div className="stars">★★★★★</div>
            <div className="count">Based on <strong>{ratingSummary.reviewCountLabel}</strong></div>
            <a href={SITE.mapsShareUrl} target="_blank" rel="noopener noreferrer" className="view-link">
              View on Google Maps ↗
            </a>
          </Reveal>

          <div className="reviews-grid">
            {reviews.slice(0, 3).map((r, i) => (
              <Reveal key={r.name} index={i} className="review-card" as="article">
                <div className="stars">★★★★★</div>
                <p className="text">"{r.text}"</p>
                <div className="review-author">
                  <div className="review-avatar">{r.initials}</div>
                  <div className="review-author-meta">
                    <span className="name">{r.name}</span>
                    <span className="label">{r.label}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '2.5rem' }}>
            <Link to="/reviews" className="btn btn-secondary">Read More Reviews →</Link>
          </div>
        </div>
      </section>

      {/* CLINIC GALLERY PREVIEW */}
      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Inside Our Centre</span>
            <h2 className="section-title">Clinic & Treatment Facilities</h2>
            <p className="section-subtitle">
              Take a look inside our consultation chamber, electrotherapy bay, and treatment facility in Muzaffarpur.
            </p>
          </div>

          <div className="gallery-grid">
            {galleryItems.slice(0, 6).map((item, i) => (
              <Reveal
                key={item.video || item.image}
                index={i}
                delayStep={0.08}
                className={`gallery-item item-${item.size || 'medium'} ${item.type === 'video' ? 'item-video' : ''}`}
                onClick={() => setHomeLightboxIndex(i)}
                tabIndex={0}
                role="button"
                aria-label={`Open full view: ${item.caption || item.alt}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setHomeLightboxIndex(i);
                  }
                }}
              >
                {item.type === 'video' ? (
                  <div className="gallery-video-container">
                    <video
                      ref={(el) => {
                        if (el) {
                          el.muted = true;
                          el.defaultMuted = true;
                        }
                      }}
                      src={item.video}
                      poster={item.image}
                      autoPlay
                      muted
                      defaultMuted
                      loop
                      playsInline
                      preload="metadata"
                      className="gallery-video"
                    />
                  </div>
                ) : (
                  <img src={item.image} alt={item.alt || 'Clinic photo'} loading="lazy" />
                )}
              </Reveal>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '2.5rem' }}>
            <Link to="/gallery" className="btn btn-secondary" style={{ marginRight: '0.75rem' }}>
              View All Photos &amp; Videos ({galleryItems.length}) →
            </Link>
            <WhatsAppButton className="btn btn-primary">Book Consultation</WhatsAppButton>
          </div>
        </div>
      </section>

      {/* ALL FAQS SECTION */}
      <FaqSection items={faqs} />

      {/* CONTACT PREVIEW */}
      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="contact-grid">
            <Reveal>
              <span className="section-label">Clinic Address</span>
              <h2 className="section-title">Visit Our Clinic</h2>
              <p className="section-subtitle">
                Centrally located in the medical hub of Juran Chapra, {SITE.city}.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-item-icon"><LocationIcon /></div>
                  <div>
                    <h5>Location</h5>
                    <p>{SITE.addressLine1}, {SITE.addressLine2}</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-item-icon"><PhoneIcon /></div>
                  <div>
                    <h5>Phone & WhatsApp</h5>
                    <p>
                      <a href={`tel:${SITE.phonePrimary}`}>{SITE.phonePrimaryDisplay}</a>
                      {' / '}
                      <a href={`tel:${SITE.phoneSecondary}`}>{SITE.phoneSecondaryDisplay}</a>
                    </p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-item-icon"><EmailIcon /></div>
                  <div>
                    <h5>Email</h5>
                    <p><a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-item-icon"><ClockIcon /></div>
                  <div>
                    <h5>Hours</h5>
                    <p><strong>{SITE.hours}</strong><br />{SITE.hoursSunday} • Home visits by appointment</p>
                  </div>
                </div>
              </div>

              <div className="contact-actions">
                <WhatsAppButton className="btn btn-primary btn-lg">Book on WhatsApp</WhatsAppButton>
                <a href={SITE.mapsShareUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg">
                  Get Directions
                </a>
              </div>
            </Reveal>

            <Reveal className="contact-map" index={1}>
              <iframe
                title="Clinic Location"
                src={SITE.mapsEmbedUrl}
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Full View Lightbox Modal for Homepage Preview */}
      <Lightbox
        images={galleryItems}
        currentIndex={homeLightboxIndex}
        onClose={() => setHomeLightboxIndex(null)}
        onPrev={() => setHomeLightboxIndex((prev) => (prev === null ? null : (prev - 1 + galleryItems.length) % galleryItems.length))}
        onNext={() => setHomeLightboxIndex((prev) => (prev === null ? null : (prev + 1) % galleryItems.length))}
      />
    </>
  );
}

