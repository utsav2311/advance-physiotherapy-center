import { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import HospitalChip from '../components/HospitalChip';
import FacilityCard from '../components/FacilityCard';
import WhatsAppButton from '../components/WhatsAppButton';
import FaqSection from '../components/FaqSection';
import Lightbox from '../components/Lightbox';
import Seo from '../components/Seo';
import { SITE, hospitals, facilities } from '../data/site';
import { aboutFaqs } from '../data/faqs';
import { doctorAchievements } from '../data/achievements';

export default function About() {
  const [activeCertIndex, setActiveCertIndex] = useState(null);

  return (
    <>
      <Seo
        title={`About ${SITE.doctor}`}
        description={`Meet ${SITE.doctor} (${SITE.credentials}), Reg. No. ${SITE.regNo} — lead physiotherapist at Advance Physiotherapy Centre, Muzaffarpur. Hospital affiliations, facilities, and clinical credentials.`}
        path="/about"
        image="/images/dr-shahrukh-portrait.webp"
      />

      <Breadcrumb trail={[{ label: 'Home', to: '/' }, { label: 'About Doctor' }]} />

      <PageHero
        label="Clinical Leadership"
        title={`About ${SITE.doctor}`}
        subtitle="Lead Physiotherapist • B.P.T., M.P.T., Ortho (Jaipur) — Dedicated to evidence-based recovery in Muzaffarpur."
        bgImage="/images/bg-medical-mesh.webp"
      />

      {/* DOCTOR PROFILE */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <Reveal className="about-visual" y={30}>
              <div className="about-image-frame">
                <img
                  src="/images/dr-shahrukh-portrait.webp"
                  alt={SITE.doctor}
                  width="480"
                  height="580"
                  loading="eager"
                />
                <div className="about-image-overlay">
                  <h3>{SITE.doctor}</h3>
                  <p>Lead Physiotherapist • B.P.T., M.P.T.</p>
                </div>
              </div>
            </Reveal>

            <Reveal className="about-content" y={30} index={1} delayStep={0.1}>
              <span className="section-label">Professional Background</span>
              <h2 className="section-title">Clinical Excellence & Compassion</h2>
              <p className="about-role">
                {SITE.credentials} • Reg. No. {SITE.regNo}
              </p>

              <div className="about-text">
                <p>
                  {SITE.doctor} is an advanced qualified physiotherapist dedicated to restoring
                  pain-free movement for patients across {SITE.city}. As the founder and lead physiotherapist of{' '}
                  <strong>Advance Physiotherapy Centre</strong>, he combines certified manual
                  therapy techniques — including cupping, dry needling, chiropractic, and
                  osteopathy — with modern electrotherapy modalities. Having previously served as
                  consultant physiotherapist across several leading hospitals in the city, he now
                  dedicates 100% of his clinical practice full-time to Advance Physiotherapy Centre.
                </p>
                <p>
                  His treatment philosophy centers on identifying the underlying biomechanical
                  cause of a patient's pain, not just managing symptoms. Every patient undergoes
                  a comprehensive 1-on-1 musculoskeletal or neurological evaluation before a care
                  plan is designed. This includes assessing joint range of motion, posture,
                  muscle strength, gait pattern, and — where relevant — reviewing existing MRI,
                  X-ray, or hospital discharge reports.
                </p>
                <p>
                  Treatment roadmaps are built to restore joint mobility, rebuild muscle strength,
                  and correct the movement habits that caused the problem in the first place —
                  giving patients long-term prevention against recurrence rather than temporary
                  relief. For patients who cannot travel, the same standard of assessment and
                  care is available through scheduled home visits.
                </p>
              </div>

              <div className="about-highlights">
                <div className="about-highlight-item">
                  <div className="about-highlight-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <div>
                    <h5>Personalized 1-on-1 Care</h5>
                    <p>Direct consultation without rushed schedules.</p>
                  </div>
                </div>
                <div className="about-highlight-item">
                  <div className="about-highlight-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <h5>Advanced Modalities</h5>
                    <p>Calibrated IFT, Ultrasound, Traction, and Maitland mobilization.</p>
                  </div>
                </div>
                <div className="about-highlight-item">
                  <div className="about-highlight-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h5>Home Visit Available</h5>
                    <p>Bedside physiotherapy for patients unable to travel.</p>
                  </div>
                </div>
              </div>

              <WhatsAppButton className="btn btn-primary btn-lg">Book Consultation</WhatsAppButton>
            </Reveal>
          </div>
        </div>
      </section>

      {/* DOCTOR ACHIEVEMENTS & CERTIFICATIONS */}
      <section className="section achievements-section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Verified Credentials</span>
            <h2 className="section-title">Honors, Accreditations &amp; Registrations</h2>
            <p className="section-subtitle">
              Government-registered clinical licenses, international professional memberships,
              and healthcare leadership awards recognizing {SITE.doctor}'s dedication to clinical excellence.
            </p>
          </div>

          <div className="achievements-grid">
            {doctorAchievements.map((item, idx) => (
              <Reveal key={item.id} className="achievement-card" delayStep={0.08} index={idx}>
                <div
                  className="achievement-card-media"
                  onClick={() => setActiveCertIndex(idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveCertIndex(idx);
                    }
                  }}
                  aria-label={`View full certificate: ${item.title}`}
                >
                  <img src={item.image} alt={item.alt} loading="lazy" />
                  <div className="achievement-zoom-overlay">
                    <span className="achievement-zoom-btn">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        <line x1="11" y1="8" x2="11" y2="14" />
                        <line x1="8" y1="11" x2="14" y2="11" />
                      </svg>
                      Click to View
                    </span>
                  </div>
                </div>

                <div className="achievement-card-body">
                  <span className="achievement-badge">{item.badge}</span>
                  <h3 className="achievement-card-title">{item.title}</h3>
                  <span className="achievement-authority">{item.authority}</span>
                  {item.regId && <span className="achievement-reg-tag">{item.regId}</span>}
                  <p className="achievement-desc">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOSPITAL EXPERIENCE */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Clinical Background</span>
            <h2 className="section-title">Hospital Experience & Background</h2>
            <p className="section-subtitle">
              {SITE.doctor} previously provided clinical physiotherapy across these 10+ premier hospitals in {SITE.city},
              and now brings this extensive hospital experience full-time to Advance Physiotherapy Centre.
            </p>
          </div>
          <div className="hospital-grid">
            {hospitals.map((name, i) => (
              <HospitalChip key={name} name={name} index={i} />
            ))}
            <HospitalChip name="Home Visit Available" index={hospitals.length} isHomeVisit />
          </div>
        </div>
      </section>

      {/* SPECIALIZED TECHNIQUES */}
      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Specialized Techniques</span>
            <h2 className="section-title">Facilities & Advanced Modalities</h2>
            <p className="section-subtitle">
              Beyond conventional physiotherapy exercises, {SITE.doctor} is trained in specialized
              manual therapy techniques that support faster, more complete recovery.
            </p>
          </div>
          <div className="facility-grid">
            {facilities.map((f, i) => (
              <FacilityCard key={f.name} name={f.name} icon={f.icon} index={i} />
            ))}
            <FacilityCard name="Home Visit Service" index={facilities.length} isHomeVisit />
          </div>
        </div>
      </section>

      <FaqSection
        items={aboutFaqs}
        title={`Doctor & Clinic FAQs`}
        subtitle={`Common questions about ${SITE.doctor}'s qualifications, hospital experience, consultation fees, and appointment booking.`}
      />

      {/* CERTIFICATE LIGHTBOX */}
      <Lightbox
        images={doctorAchievements}
        currentIndex={activeCertIndex}
        onClose={() => setActiveCertIndex(null)}
        onPrev={() =>
          setActiveCertIndex((curr) => (curr > 0 ? curr - 1 : doctorAchievements.length - 1))
        }
        onNext={() =>
          setActiveCertIndex((curr) => (curr < doctorAchievements.length - 1 ? curr + 1 : 0))
        }
      />
    </>
  );
}
