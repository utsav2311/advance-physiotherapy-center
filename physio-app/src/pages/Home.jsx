import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import WhatsAppButton from '../components/WhatsAppButton';
import ServiceCard, { FeaturedServiceCard } from '../components/ServiceCard';
import StatCounter from '../components/StatCounter';
import Reveal from '../components/Reveal';
import ProcessStep from '../components/ProcessStep';
import Skiper104 from '../components/Skiper104';
import FaqItem from '../components/FaqItem';
import HeroSlider from '../components/HeroSlider';
import Lightbox from '../components/Lightbox';
import Seo from '../components/Seo';
import JsonLd from '../components/JsonLd';
import { services, featuredSlugs } from '../data/services';
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

export default function Home() {
  const featured = services.filter((s) => featuredSlugs.includes(s.slug));
  const [openFaq, setOpenFaq] = useState(0);
  const [homeLightboxIndex, setHomeLightboxIndex] = useState(null);
  const homeFaqs = faqs.slice(0, 4);

  return (
    <>
      <Seo
        title="Best Physiotherapy Clinic in Muzaffarpur"
        description="Advance Physiotherapy Center in Juran Chapra, Muzaffarpur, led by Dr. Shahrukh Firoz (B.P.T., M.P.T., Ortho). Evidence-based physiotherapy, pain management, spine, joint & sports rehabilitation. Home visits available."
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
                className="hero-badge"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.span
                  className="hero-badge-dot"
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
                <span>Advance Physiotherapy Center • {SITE.city}</span>
              </motion.div>

              <motion.h1
                className="hero-title"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={1}
              >
                Move Better.<br />Feel Stronger.<br />
                <span className="hero-title-accent">Live Better.</span>
              </motion.h1>

              <motion.p
                className="hero-subtitle"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={2}
              >
                Personalized physiotherapy and rehabilitation designed to restore mobility, manage pain, and
                help you return to an active lifestyle. Guided by {SITE.doctor} — trusted across leading
                hospitals in {SITE.city}.
              </motion.p>

              <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={3}>
                <div className="home-visit-badge" style={{ marginBottom: '1.5rem' }}>
                  <HomeVisitIcon className="" />
                  <span>Home Visit Available</span>
                </div>
              </motion.div>

              <motion.div className="hero-actions" initial="hidden" animate="visible" variants={fadeUp} custom={4}>
                <WhatsAppButton className="btn btn-primary btn-lg" />
                <a href={`tel:${SITE.phonePrimary}`} className="btn btn-secondary btn-lg">
                  <PhoneIcon />
                  {SITE.phonePrimaryDisplay}
                </a>
              </motion.div>

              <motion.div className="hero-trust" initial="hidden" animate="visible" variants={fadeUp} custom={5}>
                <span className="hero-trust-stars">★★★★★</span>
                <span className="hero-trust-text"><strong>5.0 Google Rating</strong> • Verified Reviews</span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="trust-strip" aria-label="Credentials">
        <div className="container">
          <div className="trust-strip-grid">
            <div className="trust-strip-item">
              <span className="strip-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 15l-2 5l9-13h-6l2-5l-9 13h6z" />
                </svg>
              </span>
              <span><strong>B.P.T., M.P.T. (Ortho)</strong> Qualified</span>
            </div>
            <div className="trust-strip-item">
              <span className="strip-icon"><HospitalIcon className="" /></span>
              <span><strong>7+ Hospitals</strong> Affiliated</span>
            </div>
            <div className="trust-strip-item">
              <span className="strip-icon"><HomeVisitIcon className="" /></span>
              <span><strong>Home Visit</strong> Available</span>
            </div>
            <div className="trust-strip-item">
              <span className="strip-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </span>
              <span><strong>5.0★</strong> Google Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-strip">
        <div className="container">
          <div className="stats-grid">
            <StatCounter target={25} suffix="+" label="Conditions Treated" />
            <StatCounter target={7} suffix="+" label="Hospital Affiliations" />
            <StatCounter target={1000} suffix="+" label="Patients Treated" />
            <StatCounter target={5} suffix=".0★" label="Google Rating" />
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Clinical Focus Areas</span>
            <h2 className="section-title">Specialized Rehabilitation & Care</h2>
            <p className="section-subtitle">
              Evidence-based protocols designed to address root causes of musculoskeletal pain.
            </p>
          </div>
          <div className="featured-grid">
            {featured.map((service, i) => (
              <FeaturedServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* FULL SERVICES GRID */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Comprehensive Treatments</span>
            <h2 className="section-title">Physiotherapy Services</h2>
            <p className="section-subtitle">
              All treatments are individually tailored following a thorough assessment by {SITE.doctor}.
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '2.5rem' }}>
            <Link to="/services" className="btn btn-secondary" style={{ marginRight: '0.75rem' }}>
              View All Services →
            </Link>
            <WhatsAppButton className="btn btn-primary" />
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
                  At <strong>Advance Physiotherapy Center</strong>, every patient is personally assessed and
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
            <span className="section-label">Inside Our Center</span>
            <h2 className="section-title">Clinic & Treatment Facilities</h2>
            <p className="section-subtitle">
              Take a look inside our consultation chamber, electrotherapy bay, and treatment facility in Muzaffarpur.
            </p>
          </div>

          <div className="gallery-grid">
            {galleryItems.slice(0, 4).map((item, i) => (
              <Reveal
                key={item.caption}
                index={i}
                delayStep={0.08}
                className={`gallery-item item-${item.size}`}
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
                <img src={item.image} alt={item.alt} loading="lazy" />
                <div className="gallery-caption"><span>{item.caption}</span></div>
              </Reveal>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '2.5rem' }}>
            <Link to="/gallery" className="btn btn-secondary" style={{ marginRight: '0.75rem' }}>
              View All Photos ({galleryItems.length}) →
            </Link>
            <WhatsAppButton className="btn btn-primary">Book Consultation</WhatsAppButton>
          </div>
        </div>
      </section>

      {/* FAQ PREVIEW */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Patient Inquiries</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Clear answers to help you prepare for your consultation.</p>
          </div>

          <div className="faq-list">
            {homeFaqs.map((item, i) => (
              <FaqItem
                key={item.q}
                item={item}
                index={i}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
              />
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '2.5rem' }}>
            <Link to="/faq" className="btn btn-secondary" style={{ marginRight: '0.75rem' }}>Full FAQ →</Link>
            <WhatsAppButton className="btn btn-primary" message="Hello Dr. Shahrukh, I have a question.">
              Ask on WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>

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

