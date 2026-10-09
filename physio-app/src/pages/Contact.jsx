import { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import WhatsAppButton from '../components/WhatsAppButton';
import FaqSection from '../components/FaqSection';
import Seo from '../components/Seo';
import { useClinicStatus } from '../hooks/useClinicStatus';
import { LocationIcon, PhoneIcon, EmailIcon, ClockIcon, InstagramIcon } from '../components/Icons';
import { SITE, BRANCHES } from '../data/site';
import { contactFaqs } from '../data/faqs';

const visitTips = [
  {
    title: 'Finding Our Clinics',
    text: 'Main Clinic: Inside Zila Parishad Market, next to Apollo Dental Hospital on Juran Chapra Road. New Zero Mile Branch: Near Kali Mandir, New Zero Mile, Shekhpur with convenient highway/bypass access. Both centres have clear Advance Physiotherapy Centre signboards and ground parking.',
  },
  {
    title: 'What to Bring',
    text: 'Carry any previous prescriptions, X-rays, MRI/CT scans, or hospital discharge summaries. Wear or bring comfortable, loose-fitting clothing that allows easy movement of the joint or area being treated.',
  },
  {
    title: 'Requesting a Home Visit',
    text: 'Message us on WhatsApp with the patient\'s condition, address, and preferred time. Dr. Shahrukh will confirm availability — home visits are especially arranged for post-surgical, elderly, or bedridden patients across Muzaffarpur.',
  },
];

export default function Contact() {
  const [activeBranchId, setActiveBranchId] = useState('juran-chapra');
  const activeBranch = BRANCHES.find((b) => b.id === activeBranchId) || BRANCHES[0];
  const activeStatus = useClinicStatus(activeBranch.id);

  const activeWaMessage = `Hello Dr. Shahrukh, I would like to book an appointment at Advance Physiotherapy Centre (${activeBranch.shortName}). Please let me know the available time.`;

  return (
    <>
      <Seo
        title="Our Clinics & Contact"
        description={`Advance Physiotherapy Centre has 2 clinic locations in Muzaffarpur: Main Clinic at Juran Chapra and New Branch at Zero Mile. Call ${SITE.phonePrimaryDisplay} or message on WhatsApp. Home visits available.`}
        path="/contact"
      />

      <Breadcrumb trail={[{ label: 'Home', to: '/' }, { label: 'Contact' }]} />

      <PageHero
        label="Our Locations"
        title="Visit Advance Physiotherapy Centre"
        subtitle={`Serving patients across 2 clinic locations in Muzaffarpur — Juran Chapra Main Clinic & New Zero Mile Branch. Direct consultations, specialized modalities, and easy parking.`}
        bgImage="/images/bg-hero-contact.webp"
      />

      <section className="section">
        <div className="container">
          {/* MULTI-BRANCH SELECTOR TABS */}
          <div className="branch-selector-wrap">
            <div className="branch-selector-header">
              <span className="branch-selector-eyebrow">Select Clinic Location</span>
              <h3 className="branch-selector-title">Where Would You Like to Visit?</h3>
              <p className="branch-selector-sub">
                Dr. Shahrukh Firoz provides clinical consultations and rehabilitation across both facilities in Muzaffarpur.
              </p>
            </div>

            <div className="branch-tabs" role="tablist" aria-label="Clinic Locations">
              {BRANCHES.map((b) => {
                const isSelected = b.id === activeBranchId;
                return (
                  <button
                    key={b.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    className={`branch-tab-btn ${isSelected ? 'active' : ''}`}
                    onClick={() => setActiveBranchId(b.id)}
                  >
                    <div className="branch-tab-top">
                      <span className={`branch-badge branch-badge-${b.isMain ? 'main' : 'new'}`}>
                        {b.tag}
                      </span>
                      <span className="branch-tab-status-mini">
                        {b.id === 'zero-mile' ? 'Open 7 Days' : 'Mon–Sat'}
                      </span>
                    </div>
                    <strong className="branch-tab-name">{b.shortName}</strong>
                    <span className="branch-tab-landmark">📍 {b.landmark}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ACTIVE CLINIC DETAILS & MAP GRID */}
          <div className="contact-grid" style={{ marginTop: '2.5rem' }}>
            <Reveal>
              <div className="branch-active-header">
                <span className={`branch-badge branch-badge-${activeBranch.isMain ? 'main' : 'new'}`}>
                  {activeBranch.tag}
                </span>
                <span className="branch-active-label">{activeBranch.branchLabel}</span>
              </div>
              <h2 className="section-title" style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>
                {activeBranch.shortName}
              </h2>
              <p className="section-subtitle" style={{ marginBottom: '1rem' }}>
                📍 {activeBranch.landmark}. Walk-ins and pre-booked appointments welcome.
              </p>

              {/* LIVE CLINIC STATUS BADGE */}
              <div className="home-visit-badge" style={{ margin: '0.75rem 0 1.25rem' }}>
                <span className="status-dot" style={{ background: 'var(--success)' }} />
                <span>{activeStatus}</span>
              </div>

              {/* BRANCH FEATURES LIST */}
              <div className="branch-features-pills">
                {activeBranch.features.map((feat) => (
                  <span key={feat} className="branch-feature-pill">
                    ✓ {feat}
                  </span>
                ))}
              </div>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-item-icon"><LocationIcon /></div>
                  <div>
                    <h5>Address</h5>
                    <p>
                      <a href={activeBranch.mapsShareUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                        {activeBranch.fullAddress}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-item-icon"><ClockIcon /></div>
                  <div>
                    <h5>Clinic Timings</h5>
                    <p>
                      <strong>{activeBranch.hours}</strong>
                      <br />
                      {activeBranch.hoursSunday} • Bedside home visits on request
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-item-icon"><PhoneIcon /></div>
                  <div>
                    <h5>Contact Numbers</h5>
                    <p>
                      <a href={`tel:${activeBranch.phonePrimary}`}>{activeBranch.phonePrimaryDisplay}</a>
                      {' / '}
                      <a href={`tel:${activeBranch.phoneSecondary}`}>{activeBranch.phoneSecondaryDisplay}</a>
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
                  <div className="contact-item-icon"><InstagramIcon /></div>
                  <div>
                    <h5>Social Connect</h5>
                    <p>
                      <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer">
                        {SITE.instagramHandle}
                      </a>
                      {' · '}
                      <a href={SITE.facebookUrl} target="_blank" rel="noopener noreferrer">
                        Facebook
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="contact-actions">
                <WhatsAppButton message={activeWaMessage} className="btn btn-primary btn-lg">
                  Book at {activeBranch.shortName.split(' ')[0]}
                </WhatsAppButton>
                <a href={activeBranch.mapsShareUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg">
                  Open in Maps ↗
                </a>
              </div>
            </Reveal>

            <Reveal className="contact-map" index={1}>
              <div className="map-badge-overlay">
                <span className="map-badge-tag">{activeBranch.tag}</span>
                <span className="map-badge-name">{activeBranch.shortName}</span>
              </div>
              <iframe
                key={activeBranch.id}
                title={`Map of ${activeBranch.name}`}
                src={activeBranch.mapsEmbedUrl}
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          </div>

          {/* DUAL BRANCH SUMMARY / COMPARISON CARDS */}
          <div className="branch-overview-section" style={{ marginTop: '4rem' }}>
            <div className="section-header text-center">
              <span className="section-label">All Locations</span>
              <h3 className="section-title">Both Clinics at a Glance</h3>
              <p className="section-subtitle">
                Visit whichever location is closer to your residence or workplace in Muzaffarpur.
              </p>
            </div>

            <div className="branch-cards-grid">
              {BRANCHES.map((b) => {
                const isCurrent = b.id === activeBranchId;
                return (
                  <div key={b.id} className={`branch-overview-card ${isCurrent ? 'is-active-card' : ''}`}>
                    <div className="branch-overview-top">
                      <span className={`branch-badge branch-badge-${b.isMain ? 'main' : 'new'}`}>
                        {b.tag}
                      </span>
                      {isCurrent && <span className="branch-current-indicator">Viewing on Map</span>}
                    </div>

                    <h4 className="branch-overview-title">{b.shortName}</h4>
                    <p className="branch-overview-address">
                      📍 {b.fullAddress}
                    </p>

                    <div className="branch-overview-meta">
                      <div>
                        <strong>Hours:</strong>
                        <p>{b.hoursDisplay}</p>
                      </div>
                      <div>
                        <strong>Helpline:</strong>
                        <p>{b.phonePrimaryDisplay}</p>
                      </div>
                    </div>

                    <div className="branch-overview-actions">
                      <button
                        type="button"
                        className={`btn ${isCurrent ? 'btn-primary' : 'btn-secondary'} btn-sm`}
                        onClick={() => {
                          setActiveBranchId(b.id);
                          window.scrollTo({ top: 400, behavior: 'smooth' });
                        }}
                      >
                        {isCurrent ? 'Active Location' : 'View on Map & Details'}
                      </button>
                      <a
                        href={b.mapsShareUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary btn-sm"
                      >
                        Google Maps ↗
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* VISIT PLANNING TIPS */}
      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Planning Your Visit</span>
            <h2 className="section-title">Everything You Need to Know Before You Arrive</h2>
            <p className="section-subtitle">
              A few practical details to make your first visit — or your home visit request — go smoothly.
            </p>
          </div>
          <div className="visit-tips-grid">
            {visitTips.map((tip, i) => (
              <Reveal key={tip.title} index={i} delayStep={0.1} className="visit-tip-card">
                <h5>{tip.title}</h5>
                <p>{tip.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FaqSection
        items={contactFaqs}
        title="Location, Timings & Booking FAQs"
        subtitle="Common questions about finding the clinic, appointment booking, payments, and home visits."
      />
    </>
  );
}
