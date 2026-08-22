import { useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import Reveal from '../components/Reveal';
import WhatsAppButton from '../components/WhatsAppButton';
import Seo from '../components/Seo';
import JsonLd from '../components/JsonLd';
import { PhoneIcon, ClockIcon, LocationIcon, WhatsAppIcon } from '../components/Icons';
import { getRelatedServices } from '../data/services';
import ServiceCard from '../components/ServiceCard';
import { SITE } from '../data/site';

export default function PediatricIcuService() {
  const [openFaq, setOpenFaq] = useState(null);

  const related = getRelatedServices('pediatric-icu-care', 3);
  const bookingMessage = `Hello Dr. Shahrukh, I would like to enquire about pediatric / rehabilitation physiotherapy at Advance Physiotherapy Centre. Please let me know the available appointment time.`;

  // Exactly 6 Focused Clinical & Local FAQs
  const pediatricFaqs = [
    {
      q: 'What is pediatric physiotherapy?',
      a: 'Pediatric physiotherapy focuses on movement, physical development, strength, balance, coordination and functional abilities in children who may benefit from structured physical rehabilitation.',
    },
    {
      q: 'What conditions can pediatric physiotherapy help with?',
      a: 'It depends on the child’s individual condition. Physiotherapy may support selected developmental, mobility, balance, strength and functional motor concerns following an appropriate clinical assessment.',
    },
    {
      q: 'What is critical-care physiotherapy?',
      a: 'Critical-care physiotherapy refers to physical rehabilitation provided to stable patients during or after serious illness, with treatment depending on medical clearance and coordination with the treating healthcare team.',
    },
    {
      q: 'Can physiotherapy be provided after a hospital stay?',
      a: 'Yes. Depending on the patient’s condition, physiotherapy can support the gradual recovery of muscle strength, joint mobility, transfers, and walking ability following hospitalization.',
    },
    {
      q: 'Is pediatric physiotherapy suitable for every child?',
      a: 'No. The appropriate physical therapy approach depends on the child’s individual clinical evaluation, developmental stage, baseline mobility, and personal recovery goals.',
    },
    {
      q: 'Can I book pediatric or rehabilitation physiotherapy in Muzaffarpur?',
      a: 'Yes. Advance Physiotherapy Centre is located in Juran Chapra, Muzaffarpur. You can contact the clinic through WhatsApp or call to enquire about an assessment.',
    },
  ];

  return (
    <article className="spine-service-page pediatric-service-page">
      {/* 1. SEO METADATA & STRUCTURED DATA */}
      <Seo
        title="Pediatric Physiotherapy & Critical Care Rehabilitation in Muzaffarpur | Advance Physiotherapy Centre"
        description="Pediatric physiotherapy and rehabilitation support in Muzaffarpur for mobility, developmental needs and selected post-hospital or critical-care rehabilitation needs."
        path="/services/pediatric-icu-care"
        image="/images/pediatric-physiotherapy-muzaffarpur.webp"
      />

      {/* Schema.org MedicalTherapy & Healthcare Facility */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'MedicalTherapy',
          name: 'Pediatric Physiotherapy & Critical Care Rehabilitation in Muzaffarpur',
          description:
            'Pediatric physiotherapy and rehabilitation support in Muzaffarpur for mobility, developmental needs and selected post-hospital or critical-care rehabilitation needs.',
          url: `${SITE.url}/services/pediatric-icu-care`,
          provider: {
            '@type': 'Physiotherapy',
            name: SITE.name,
            url: SITE.url,
            telephone: SITE.phonePrimary,
            address: {
              '@type': 'PostalAddress',
              streetAddress: SITE.addressLine1,
              addressLocality: SITE.city,
              addressRegion: 'Bihar',
              postalCode: '842001',
              addressCountry: 'IN',
            },
          },
        }}
      />

      {/* Schema.org Breadcrumb */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
            { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Pediatric & Critical Care',
              item: `${SITE.url}/services/pediatric-icu-care`,
            },
          ],
        }}
      />

      {/* Schema.org FAQPage */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: pediatricFaqs.map((faq) => ({
            '@type': 'Question',
            name: faq.q,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.a,
            },
          })),
        }}
      />

      {/* 2. BREADCRUMBS */}
      <Breadcrumb
        trail={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: 'Pediatric & Critical Care' },
        ]}
      />

      {/* SECTION 1 — HERO */}
      <header className="spine-hero-section">
        <div className="container">
          <div className="spine-hero-grid">
            <div className="spine-hero-content">
              <span className="spine-eyebrow">PEDIATRIC &amp; CRITICAL CARE REHABILITATION · MUZAFFARPUR</span>
              <h1 className="spine-hero-title">
                Pediatric Physiotherapy &amp; Critical Care Rehabilitation in Muzaffarpur
              </h1>
              <p className="spine-hero-subtitle">
                Specialized physiotherapy support for children and patients requiring mobility, developmental and
                rehabilitation care, including selected post-hospital and critical-care recovery needs.
              </p>

              <div className="spine-hero-cta-group">
                <WhatsAppButton className="btn btn-primary btn-lg spine-primary-btn" message={bookingMessage}>
                  Book Appointment
                </WhatsAppButton>
                <a href={`tel:${SITE.phonePrimary}`} className="btn btn-secondary btn-lg spine-call-btn">
                  <PhoneIcon />
                  <span>Call Clinic • {SITE.phonePrimaryDisplay}</span>
                </a>
              </div>

              {/* Verified Trust Badges */}
              <div className="spine-hero-trust-bar">
                <div className="spine-trust-pill">
                  <span className="spine-trust-star">★★★★★</span>
                  <span className="spine-trust-text">5.0 Google Rating</span>
                </div>
                <div className="spine-trust-pill">
                  <span className="spine-trust-check">✓</span>
                  <span className="spine-trust-text">1-on-1 Clinical Assessment</span>
                </div>
                <div className="spine-trust-pill">
                  <span className="spine-trust-dot">•</span>
                  <span className="spine-trust-text">Juran Chapra, Muzaffarpur</span>
                </div>
              </div>
            </div>

            <div className="spine-hero-visual">
              <div className="spine-hero-frame">
                <img
                  src="/images/pediatric-physiotherapy-muzaffarpur.webp"
                  alt="Supervised pediatric and rehabilitation physical therapy care session in clean clinic"
                  className="spine-hero-img"
                  width="600"
                  height="338"
                  loading="eager"
                />
                <div className="spine-hero-card-badge">
                  <span className="spine-badge-title">Developmental &amp; Mobility Care</span>
                  <span className="spine-badge-sub">Personalized 1-on-1 Guidance by Dr. Shahrukh Firoz</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* SECTION 2 — WHAT IS PEDIATRIC PHYSIOTHERAPY? */}
      <section className="section spine-intro-section">
        <div className="container">
          <div className="spine-intro-grid">
            <Reveal className="spine-intro-text">
              <span className="section-label">Clinical Overview</span>
              <h2 className="section-title">What Is Pediatric Physiotherapy?</h2>
              <div className="spine-prose">
                <p>
                  Pediatric physiotherapy focuses on movement, physical development, strength, balance, coordination
                  and functional abilities in children who may benefit from structured rehabilitation.
                </p>
                <p>
                  Children develop physical milestones at different paces. When movement difficulties or muscle tone
                  imbalances arise, targeted physical therapy exercises can encourage age-appropriate mobility and
                  postural control.
                </p>
                <p>
                  The therapeutic approach is adapted to the child&apos;s age, developmental stage, baseline abilities,
                  and individual functional goals in a reassuring environment.
                </p>
              </div>

              <div className="spine-intro-actions">
                <WhatsAppButton className="btn btn-primary" message={bookingMessage}>
                  Enquire on WhatsApp
                </WhatsAppButton>
              </div>
            </Reveal>

            {/* EDUCATIONAL VISUAL */}
            <Reveal className="spine-anatomy-card" delayStep={0.1}>
              <div className="spine-diagram-box">
                <img
                  src="/images/pediatric-motor-rehabilitation.webp"
                  alt="Pediatric physical therapy exercise gym station for balance and motor skills training"
                  className="spine-diagram-img"
                  width="500"
                  height="281"
                  loading="lazy"
                />
              </div>
              <div className="spine-anatomy-display" style={{ marginTop: '0.85rem' }}>
                <h4 className="spine-anatomy-part-title">Gross Motor Skill Retraining</h4>
                <p className="spine-anatomy-part-desc">
                  Playful yet structured exercises to build balance confidence, stepping coordination, and physical
                  stamina.
                </p>
                <div className="spine-doctor-trust-points" style={{ marginTop: '0.5rem', marginBottom: 0 }}>
                  <span className="spine-doc-point">Gross Motor Skills</span>
                  <span className="spine-doc-point">Postural Balance</span>
                  <span className="spine-doc-point">Motor Coordination</span>
                  <span className="spine-doc-point">Functional Mobility</span>
                </div>
              </div>
              <p className="spine-disclaimer-note">Programmes are customized following an individual evaluation.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 3 — PEDIATRIC DEVELOPMENTAL & MOBILITY REHABILITATION */}
      <section className="section spine-problems-section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Developmental Pillars</span>
            <h2 className="section-title">Pediatric Developmental &amp; Mobility Rehabilitation</h2>
            <p className="section-subtitle">
              When a child experiences difficulty with movement or balance, a structured assessment helps identify
              supportive exercises.
            </p>
          </div>

          <div className="spine-cards-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <div className="spine-card">
              <div className="spine-card-num">01</div>
              <h3 className="spine-card-title">Gross Motor Skills</h3>
              <p className="spine-card-desc">
                Targeted activities involving fundamental movements such as supported standing, stepping, walking, and
                transitions.
              </p>
            </div>

            <div className="spine-card">
              <div className="spine-card-num">02</div>
              <h3 className="spine-card-title">Balance &amp; Stability</h3>
              <p className="spine-card-desc">
                Exercises designed to encourage equilibrium reactions, core stability, and postural confidence during
                movement.
              </p>
            </div>

            <div className="spine-card">
              <div className="spine-card-num">03</div>
              <h3 className="spine-card-title">Motor Coordination</h3>
              <p className="spine-card-desc">
                Therapeutic drills that encourage purposeful, controlled movements, limb synchronization, and spatial
                awareness.
              </p>
            </div>

            <div className="spine-card">
              <div className="spine-card-num">04</div>
              <h3 className="spine-card-title">Functional Mobility</h3>
              <p className="spine-card-desc">
                Supporting age-appropriate movement, stair negotiation, and active physical play in daily routines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — SELECTED AREAS OF CARE WE MAY SUPPORT */}
      <section className="section spine-symptoms-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Care Scope</span>
            <h2 className="section-title">Selected Areas of Care We May Support</h2>
            <p className="section-subtitle">
              Selected pediatric developmental and mobility concerns, based on individual clinical evaluation.
            </p>
          </div>

          <div className="spine-symptoms-grid">
            {[
              { title: 'Developmental Motor Delays', desc: 'Support with rolling, crawling, sitting, or independent walking milestones.' },
              { title: 'Mobility Difficulties', desc: 'Addressing asymmetric gait patterns, toe walking, or frequent tripping.' },
              { title: 'Balance Challenges', desc: 'Encouraging equilibrium and stability on changing floor surfaces.' },
              { title: 'Strength & Tone Imbalances', desc: 'Gentle muscle activation drills and postural alignment strategies.' },
              { title: 'Post-Fracture Mobility', desc: 'Safely restoring joint range and weight-bearing confidence after cast removal.' },
              { title: 'Post-Hospital Recovery', desc: 'Gradual reconditioning and muscle strengthening after prolonged illness.' },
            ].map((item) => (
              <div key={item.title} className="spine-symptom-item">
                <span className="spine-symptom-check">✓</span>
                <span className="spine-symptom-text">
                  <strong>{item.title}:</strong> {item.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — POST-HOSPITAL & CRITICAL-CARE REHABILITATION */}
      <section className="section spine-process-section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Medical Rehabilitation</span>
            <h2 className="section-title">Physiotherapy After Hospitalization or Critical Care</h2>
            <p className="section-subtitle">
              Structured physical therapy to rebuild mobility, joint range, and physical independence following acute
              medical care.
            </p>
          </div>

          <div className="spine-sciatica-showcase">
            <div className="spine-sciatica-visual-box">
              <img
                src="/images/post-hospital-rehabilitation-muzaffarpur.webp"
                alt="Post-hospital mobility rehabilitation session with physiotherapist providing safe walking support"
                className="spine-sciatica-img"
                width="600"
                height="338"
                loading="lazy"
              />
            </div>
            <div className="spine-sciatica-text">
              <span className="section-label">Rehabilitation Context</span>
              <h3 className="spine-sciatica-heading">Rebuilding Physical Capacity Safely</h3>
              <p>
                After a prolonged hospital stay or period of illness, patients often experience generalized muscle
                weakness, joint stiffness, and reduced stamina. Physiotherapy forms a vital part of a coordinated
                rehabilitation plan.
              </p>
              <div className="spine-doctor-trust-points" style={{ marginTop: '1rem', marginBottom: '1.25rem' }}>
                <span className="spine-doc-point">📍 Bed-to-Chair Transfers</span>
                <span className="spine-doc-point">📍 Supported Gait Retraining</span>
                <span className="spine-doc-point">📍 Joint Mobility Maintenance</span>
                <span className="spine-doc-point">📍 Respiratory &amp; Pacing Drills</span>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--gray-500)' }}>
                All therapy is planned carefully according to medical stability and treating doctor clearance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 & 7 — BEDSIDE & SPECIALIZED REHABILITATION */}
      <section className="section spine-plan-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Specialized Modalities</span>
            <h2 className="section-title">Bedside, Burn &amp; Post-Fracture Rehabilitation</h2>
            <p className="section-subtitle">
              Targeted physical rehabilitation adapted to the patient&apos;s setting and recovery phase.
            </p>
          </div>

          <div className="spine-modalities-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className="spine-modality-card">
              <div style={{ marginBottom: '1rem', borderRadius: '10px', overflow: 'hidden' }}>
                <img
                  src="/images/bedside-physiotherapy-muzaffarpur.webp"
                  alt="Bedside gentle physiotherapy mobility care session for recovering patient"
                  style={{ width: '100%', height: '140px', objectFit: 'cover', display: 'block' }}
                  loading="lazy"
                />
              </div>
              <div className="spine-mod-icon">🛏️</div>
              <h3>Bedside Physiotherapy</h3>
              <p>
                For patients unable to attend standard exercise stations, gentle non-invasive mobility and positioning
                guidance may be provided at the bedside.
              </p>
            </div>

            <div className="spine-modality-card">
              <div className="spine-mod-icon">🩹</div>
              <h3>Rehabilitation After Burns</h3>
              <p>
                Gentle passive/active range-of-motion exercises, scar positioning advice, and mobility preservation as
                healing tissue matures.
              </p>
            </div>

            <div className="spine-modality-card">
              <div className="spine-mod-icon">🦴</div>
              <h3>Post-Fracture Recovery</h3>
              <p>
                Progressive weight-bearing, joint mobilization, and muscle strengthening after cast or splint removal
                under medical guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — HOW REHABILITATION WORKS */}
      <section className="section spine-process-section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">5-Step Timeline</span>
            <h2 className="section-title">A Personalized Rehabilitation Approach</h2>
            <p className="section-subtitle">
              A structured, compassionate progression adapted to the patient&apos;s physical tolerance and recovery
              pace.
            </p>
          </div>

          {/* 5-Step Animated Process */}
          <div className="spine-pipeline-wrapper">
            <div className="spine-pipeline-steps" style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>
              <div className="spine-pipe-step">
                <div className="spine-pipe-num">01</div>
                <div className="spine-pipe-name">Assess</div>
                <div className="spine-pipe-desc">Understand condition, mobility, muscle strength and limits.</div>
              </div>
              <div className="spine-pipe-connector" />
              <div className="spine-pipe-step">
                <div className="spine-pipe-num">02</div>
                <div className="spine-pipe-name">Set Goals</div>
                <div className="spine-pipe-desc">Identify meaningful functional and developmental milestones.</div>
              </div>
              <div className="spine-pipe-connector" />
              <div className="spine-pipe-step">
                <div className="spine-pipe-num">03</div>
                <div className="spine-pipe-name">Begin Therapy</div>
                <div className="spine-pipe-desc">Use safe, gentle, task-specific movement exercises.</div>
              </div>
              <div className="spine-pipe-connector" />
              <div className="spine-pipe-step">
                <div className="spine-pipe-num">04</div>
                <div className="spine-pipe-name">Progress</div>
                <div className="spine-pipe-desc">Increase activities gradually as tolerance improves.</div>
              </div>
              <div className="spine-pipe-connector" />
              <div className="spine-pipe-step">
                <div className="spine-pipe-num">05</div>
                <div className="spine-pipe-name">Review</div>
                <div className="spine-pipe-desc">Review milestones and refine home guidance routines.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 — FAMILY & CAREGIVER SUPPORT */}
      <section className="section spine-everyday-section">
        <div className="container">
          <div className="spine-centered-card" style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
            <span className="section-label">Family Support</span>
            <h2 className="section-title">Supporting Patients &amp; Families</h2>
            <div className="spine-what-body">
              <p>
                Families and caregivers play a central role in pediatric and post-hospital recovery. Physiotherapy
                guidance helps parents and relatives understand safe handling, transfer techniques, and supportive
                exercises to practice safely at home.
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--gray-500)', marginTop: '0.75rem' }}>
                All home exercise routines are demonstrated clearly with family involvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 — WHAT TO EXPECT AT YOUR FIRST VISIT */}
      <section className="section spine-first-visit-section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">First Consultation</span>
            <h2 className="section-title">What to Expect at Your First Visit</h2>
            <p className="section-subtitle">
              A calm, reassuring 3-step walkthrough tailored for pediatric and recovery patients.
            </p>
          </div>

          <div className="spine-first-visit-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className="spine-visit-step">
              <div className="spine-visit-step-num">01</div>
              <h3>Discuss</h3>
              <p>Medical history, developmental milestones, hospitalization history, and family goals.</p>
            </div>

            <div className="spine-visit-step">
              <div className="spine-visit-step-num">02</div>
              <h3>Assess</h3>
              <p>Movement, strength, joint mobility, balance, and functional capabilities are evaluated gently.</p>
            </div>

            <div className="spine-visit-step">
              <div className="spine-visit-step-num">03</div>
              <h3>Plan</h3>
              <p>A customized physical therapy approach is discussed and initiated with caregiver consent.</p>
            </div>
          </div>

          <div className="text-center" style={{ marginTop: '2.5rem' }}>
            <WhatsAppButton className="btn btn-primary btn-lg" message={bookingMessage}>
              Book Assessment on WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* SECTION 11 — WHY CHOOSE US & DOCTOR PROFILE */}
      <section className="section spine-why-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-title">Why Choose Advance Physiotherapy Centre?</h2>
            <p className="section-subtitle">
              Compassionate, personalized physical therapy and developmental care in Muzaffarpur.
            </p>
          </div>

          <div className="spine-why-grid" style={{ marginBottom: '3.5rem' }}>
            <div className="spine-why-card">
              <div className="spine-why-num">1</div>
              <h3>Personalized Rehabilitation</h3>
              <p>Care adapted to the patient&apos;s individual developmental stage and needs.</p>
            </div>

            <div className="spine-why-card">
              <div className="spine-why-num">2</div>
              <h3>Functional Focus</h3>
              <p>Rehabilitation focused on meaningful movement, balance, and daily function.</p>
            </div>

            <div className="spine-why-card">
              <div className="spine-why-num">3</div>
              <h3>Family-Centered Approach</h3>
              <p>Clear communication and home exercise guidance for parents and caregivers.</p>
            </div>

            <div className="spine-why-card">
              <div className="spine-why-num">4</div>
              <h3>Convenient Location</h3>
              <p>Juran Chapra, Muzaffarpur.</p>
            </div>
          </div>

          {/* COMPACT DOCTOR PROFILE */}
          <div className="spine-doctor-card">
            <div className="spine-doctor-photo">
              <img
                src="/images/dr-shahrukh-portrait.webp"
                alt="Dr. Sayed Shahrukh Firoz Lead Physiotherapist at Advance Physiotherapy Centre Muzaffarpur"
                width="400"
                height="480"
                loading="lazy"
              />
            </div>
            <div className="spine-doctor-info">
              <span className="section-label">Meet Your Physiotherapist</span>
              <h3 className="spine-doctor-name">{SITE.doctor}</h3>
              <p className="spine-doctor-creds">
                {SITE.credentials} • {SITE.regNo}
              </p>
              <p className="spine-doctor-bio">
                {SITE.doctor} brings dedicated clinical expertise to developmental pediatric physical therapy and
                post-hospital rehabilitation in Muzaffarpur, guiding young patients and recovering adults through
                milestone-driven exercises with patience and individualized care.
              </p>

              <div className="spine-doctor-trust-points">
                <div className="spine-doc-point">
                  <span className="spine-doc-check">✓</span>
                  <span>1-on-1 Clinical Evaluation</span>
                </div>
                <div className="spine-doc-point">
                  <span className="spine-doc-check">✓</span>
                  <span>Developmental Milestone Guidance</span>
                </div>
                <div className="spine-doc-point">
                  <span className="spine-doc-check">✓</span>
                  <span>Coordinated Post-Hospital Care</span>
                </div>
              </div>

              <div className="spine-doctor-action">
                <Link to="/about" className="btn btn-secondary">
                  View Qualifications &amp; Bio →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SAFETY NOTICES */}
      <section className="section spine-safety-section" style={{ paddingBottom: '2.5rem' }}>
        <div className="container">
          <div className="spine-medical-alert-box" style={{ maxWidth: '860px', margin: '0 auto' }}>
            <div className="spine-alert-badge">
              <span className="spine-alert-icon">⚠️</span>
              <span>Clinical Safety &amp; Medical Coordination</span>
            </div>
            <h3 className="spine-alert-heading">Important Medical Notice</h3>
            <p>
              <strong>Critical-Care &amp; Post-Hospital Notice:</strong> Patients recovering from serious illness or
              surgery require medical stability and monitoring. Physiotherapy is provided in coordination with the
              treating doctor or hospital team.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              <strong>Pediatric Notice:</strong> Children develop and recover at individual rates. Programmes are
              tailored to the child&apos;s developmental milestones without rigid outcome guarantees.
            </p>
            <p className="spine-alert-footnote">
              If an adult or child experiences acute emergency symptoms (such as severe breathing difficulty, sudden
              loss of consciousness, or uncontrolled bleeding), seek immediate emergency hospital medical care rather
              than waiting for physiotherapy.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 12 — FAQ (6 QUESTIONS) */}
      <section className="section spine-faq-section" id="faq" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Common Inquiries</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Clear answers to help you understand pediatric and critical care physical rehabilitation.
            </p>
          </div>

          <div className="spine-faq-accordion">
            {pediatricFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.q} className={`spine-faq-item ${isOpen ? 'is-open' : ''}`}>
                  <button
                    type="button"
                    className="spine-faq-question"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <span className="spine-faq-toggle">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div className="spine-faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 13 — FINAL WHATSAPP CTA */}
      <section className="section spine-cta-section">
        <div className="container">
          <div className="spine-final-cta-card text-center">
            <span className="section-label" style={{ color: 'var(--primary-200)', borderColor: 'rgba(255,255,255,0.2)' }}>
              Start Your Recovery
            </span>
            <h2 className="spine-final-title">Let&apos;s Take the Next Step Toward Recovery</h2>
            <p className="spine-final-sub">
              For pediatric developmental concerns or rehabilitation after illness, injury or hospitalization, speak
              with our physiotherapy team about an appropriate assessment.
            </p>

            <div className="spine-final-actions">
              <WhatsAppButton className="btn btn-primary btn-lg spine-final-wa-btn" message={bookingMessage}>
                <WhatsAppIcon />
                <span>Book Appointment</span>
              </WhatsAppButton>
              <a href={`tel:${SITE.phonePrimary}`} className="btn btn-secondary btn-lg spine-final-call-btn">
                <PhoneIcon />
                <span>Call Clinic • {SITE.phonePrimaryDisplay}</span>
              </a>
            </div>

            <p className="spine-final-location">
              Advance Physiotherapy Centre • Juran Chapra, Muzaffarpur, Bihar
            </p>
          </div>
        </div>
      </section>

      {/* RELATED SPECIALIZED SERVICES */}
      <section className="section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Explore More</span>
            <h2 className="section-title">Other Specialized Services</h2>
          </div>
          <div className="services-grid">
            {related.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '2.5rem' }}>
            <Link to="/services" className="btn btn-secondary">
              View All 10 Specialized Services →
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
