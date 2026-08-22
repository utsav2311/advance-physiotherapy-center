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

export default function NeuroRehabService() {
  const [openFaq, setOpenFaq] = useState(null);

  const related = getRelatedServices('neurological-rehabilitation', 3);
  const bookingMessage = `Hello Dr. Shahrukh, I would like to enquire about neurological rehabilitation at Advance Physiotherapy Centre. Please let me know the available appointment time.`;

  // Exactly 6 Focused Clinical & Local FAQs
  const neuroFaqs = [
    {
      q: 'What is neurological rehabilitation?',
      a: 'Neurological rehabilitation is a structured rehabilitation approach for people whose movement, balance, coordination, strength or daily function has been affected by a condition involving the nervous system.',
    },
    {
      q: 'Can physiotherapy help after a stroke?',
      a: 'Physiotherapy can be an important part of stroke rehabilitation, particularly for movement, balance, walking, arm control and functional activities, depending on the individual’s condition and goals.',
    },
    {
      q: 'Can neurological physiotherapy help with walking problems?',
      a: 'Depending on the underlying condition, rehabilitation may include structured gait training, balance exercises, lower-limb strengthening, and repetitive functional practice to support safe mobility.',
    },
    {
      q: 'Can physiotherapy help people with Parkinson’s disease?',
      a: 'Physiotherapy may address key areas such as balance, gait cadence, postural stability, transfers and physical mobility in people living with Parkinson’s disease.',
    },
    {
      q: 'Does neurological rehabilitation have the same programme for everyone?',
      a: 'No. Rehabilitation is carefully adapted to the individual’s condition, baseline abilities, functional goals, and rate of response to treatment.',
    },
    {
      q: 'Can I book neurological rehabilitation in Muzaffarpur?',
      a: 'Yes. Advance Physiotherapy Centre is located in Juran Chapra, Muzaffarpur. Contact the clinic through WhatsApp or phone to enquire about an assessment.',
    },
  ];

  return (
    <article className="spine-service-page neuro-service-page">
      {/* 1. SEO METADATA & STRUCTURED DATA */}
      <Seo
        title="Neurological Rehabilitation & Physiotherapy in Muzaffarpur | Advance Physiotherapy Centre"
        description="Personalized neurological physiotherapy in Muzaffarpur for mobility, balance, strength and functional rehabilitation. Assessment and rehabilitation based on individual needs."
        path="/services/neurological-rehabilitation"
        image="/images/neurological-rehabilitation-muzaffarpur.webp"
      />

      {/* Schema.org MedicalTherapy & Healthcare Facility */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'MedicalTherapy',
          name: 'Neurological Rehabilitation & Physiotherapy in Muzaffarpur',
          description:
            'Personalized neurological physiotherapy in Muzaffarpur for mobility, balance, strength and functional rehabilitation. Assessment and rehabilitation based on individual needs.',
          url: `${SITE.url}/services/neurological-rehabilitation`,
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
              name: 'Neurological Rehabilitation',
              item: `${SITE.url}/services/neurological-rehabilitation`,
            },
          ],
        }}
      />

      {/* Schema.org FAQPage */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: neuroFaqs.map((faq) => ({
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
          { label: 'Neurological Rehabilitation' },
        ]}
      />

      {/* SECTION 1 — HERO */}
      <header className="spine-hero-section">
        <div className="container">
          <div className="spine-hero-grid">
            <div className="spine-hero-content">
              <span className="spine-eyebrow">NEUROLOGICAL REHABILITATION · MUZAFFARPUR</span>
              <h1 className="spine-hero-title">Neurological Rehabilitation &amp; Physiotherapy in Muzaffarpur</h1>
              <p className="spine-hero-subtitle">
                Personalized rehabilitation focused on movement, balance, strength, mobility and everyday function for
                people living with neurological conditions.
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
                  <span className="spine-trust-text">1-on-1 Neuro Assessment</span>
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
                  src="/images/neurological-rehabilitation-muzaffarpur.webp"
                  alt="Professional neurological physiotherapy assessment and rehabilitation session in modern clinic in Muzaffarpur"
                  className="spine-hero-img"
                  width="600"
                  height="338"
                  loading="eager"
                />
                <div className="spine-hero-card-badge">
                  <span className="spine-badge-title">Gait, Balance &amp; Functional Recovery</span>
                  <span className="spine-badge-sub">Personalized 1-on-1 Guidance by Dr. Shahrukh Firoz</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* SECTION 2 — WHAT IS NEUROLOGICAL REHABILITATION? */}
      <section className="section spine-intro-section">
        <div className="container">
          <div className="spine-intro-grid">
            <Reveal className="spine-intro-text">
              <span className="section-label">Clinical Concept</span>
              <h2 className="section-title">What Is Neurological Rehabilitation?</h2>
              <div className="spine-prose">
                <p>
                  Neurological rehabilitation is a structured form of physiotherapy for people whose movement, balance,
                  coordination, strength or daily function has been affected by a condition involving the nervous
                  system.
                </p>
                <p>
                  The rehabilitation programme is based on the individual&apos;s symptoms, abilities, functional goals
                  and everyday needs.
                </p>
                <p>
                  It focuses on practical activities such as walking, balance, transfers, reaching, strengthening and
                  improving independence.
                </p>
              </div>

              <div className="spine-intro-actions">
                <WhatsAppButton className="btn btn-primary" message={bookingMessage}>
                  Book Assessment on WhatsApp
                </WhatsAppButton>
              </div>
            </Reveal>

            {/* EDUCATIONAL VISUAL */}
            <Reveal className="spine-anatomy-card" delayStep={0.1}>
              <div className="spine-diagram-box">
                <img
                  src="/images/neuro-physiotherapy-functional-training.webp"
                  alt="Professional physiotherapist assisting a patient with functional movement and transfer training"
                  className="spine-diagram-img"
                  width="500"
                  height="281"
                  loading="lazy"
                />
              </div>
              <div className="spine-anatomy-display" style={{ marginTop: '0.85rem' }}>
                <h4 className="spine-anatomy-part-title">Functional Movement Rehabilitation</h4>
                <p className="spine-anatomy-part-desc">
                  Structured practice to rebuild neuromuscular control, balance confidence, and daily activity skills.
                </p>
                <div className="spine-doctor-trust-points" style={{ marginTop: '0.5rem', marginBottom: 0 }}>
                  <span className="spine-doc-point">Gait Training</span>
                  <span className="spine-doc-point">Postural Balance</span>
                  <span className="spine-doc-point">Motor Control</span>
                  <span className="spine-doc-point">Functional Transfers</span>
                </div>
              </div>
              <p className="spine-disclaimer-note">Programmes are individualized based on neurological assessment.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 3 — CONDITIONS THAT MAY BENEFIT FROM NEURO REHABILITATION */}
      <section className="section spine-problems-section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Clinical Care</span>
            <h2 className="section-title">Conditions That May Benefit From Neurological Rehabilitation</h2>
            <p className="section-subtitle">
              Tailored physical therapy support for neurological conditions affecting motor control and independence.
            </p>
          </div>

          <div className="spine-cards-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <div className="spine-card">
              <div className="spine-card-num">01</div>
              <h3 className="spine-card-title">Stroke Rehabilitation</h3>
              <p className="spine-card-desc">
                Structured rehabilitation focused on restoring movement, balance, walking, arm control, strength and
                functional independence.
              </p>
            </div>

            <div className="spine-card">
              <div className="spine-card-num">02</div>
              <h3 className="spine-card-title">Parkinson&apos;s Disease</h3>
              <p className="spine-card-desc">
                Rehabilitation addressing movement amplitude, balance, gait rhythm, posture and maintaining everyday
                physical function.
              </p>
            </div>

            <div className="spine-card">
              <div className="spine-card-num">03</div>
              <h3 className="spine-card-title">Peripheral Neurological Conditions</h3>
              <p className="spine-card-desc">
                Targeted physical rehabilitation to support muscle strength, joint mobility, sensory awareness and
                functional coordination.
              </p>
            </div>

            <div className="spine-card">
              <div className="spine-card-num">04</div>
              <h3 className="spine-card-title">Spinal Cord or Brain-Related Recovery</h3>
              <p className="spine-card-desc">
                Goal-oriented therapy to improve mobility, transfers, strength, balance and functional independence
                tailored to individual recovery stages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — HOW NEUROLOGICAL CONDITIONS CAN AFFECT MOVEMENT */}
      <section className="section spine-symptoms-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Functional Challenges</span>
            <h2 className="section-title">How Neurological Conditions Can Affect Movement</h2>
            <p className="section-subtitle">
              Neurological conditions affect people differently. Rehabilitation focuses on specific functional
              challenges identified during assessment.
            </p>
          </div>

          <div className="spine-symptoms-grid">
            {[
              { title: 'Difficulty Walking', desc: 'Changes in stride length, cadence, balance, or foot clearance.' },
              { title: 'Balance Problems', desc: 'Unsteadiness during standing, turning, or walking on uneven surfaces.' },
              { title: 'Muscle Weakness', desc: 'Reduced strength or activation in one side of the body or limbs.' },
              { title: 'Reduced Coordination', desc: 'Challenges with fine motor control, reaching, or grasping.' },
              { title: 'Changing Positions', desc: 'Difficulty with sit-to-stand, bed mobility, or chair transfers.' },
              { title: 'Daily Activities', desc: 'Limitations during dressing, bathing, or household mobility.' },
            ].map((item) => (
              <div key={item.title} className="spine-symptom-item">
                <span className="spine-symptom-check">✓</span>
                <span className="spine-symptom-text">
                  <strong>{item.title}:</strong> {item.desc}
                </span>
              </div>
            ))}
          </div>

          {/* BALANCE TRAINING VISUAL SHOWCASE */}
          <div className="spine-sciatica-showcase" style={{ marginTop: '3rem' }}>
            <div className="spine-sciatica-visual-box">
              <img
                src="/images/neurological-balance-training.webp"
                alt="Neurological physiotherapy balance and gait training support in modern clinic"
                className="spine-sciatica-img"
                width="600"
                height="338"
                loading="lazy"
              />
            </div>
            <div className="spine-sciatica-text">
              <span className="section-label">Postural Stability</span>
              <h3 className="spine-sciatica-heading">Targeted Balance &amp; Coordination Training</h3>
              <p>
                Balance training involves repetitive, task-specific practice in a safe clinical environment to retrain
                sensory feedback, weight-shifting, and postural reflexes.
              </p>
              <div className="spine-doctor-trust-points" style={{ marginTop: '1rem', marginBottom: '1.25rem' }}>
                <span className="spine-doc-point">📍 Standing Balance</span>
                <span className="spine-doc-point">📍 Weight-Shifting Drills</span>
                <span className="spine-doc-point">📍 Safe Turning Mechanics</span>
                <span className="spine-doc-point">📍 Obstacle Stepping</span>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--gray-500)' }}>
                Practised progressively with therapist supervision to build everyday walking confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — HOW NEUROLOGICAL REHABILITATION WORKS */}
      <section className="section spine-process-section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">5-Step Process</span>
            <h2 className="section-title">How Neurological Rehabilitation Works</h2>
            <p className="section-subtitle">
              A structured, milestone-driven pathway focused on active participation and progressive recovery.
            </p>
          </div>

          {/* 5-Step Animated Process */}
          <div className="spine-pipeline-wrapper" style={{ marginBottom: '3rem' }}>
            <div className="spine-pipeline-steps" style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>
              <div className="spine-pipe-step">
                <div className="spine-pipe-num">01</div>
                <div className="spine-pipe-name">Assess</div>
                <div className="spine-pipe-desc">Understand movement, strength, balance, coordination and limits.</div>
              </div>
              <div className="spine-pipe-connector" />
              <div className="spine-pipe-step">
                <div className="spine-pipe-num">02</div>
                <div className="spine-pipe-name">Set Goals</div>
                <div className="spine-pipe-desc">Identify meaningful goals like walking, standing or transfers.</div>
              </div>
              <div className="spine-pipe-connector" />
              <div className="spine-pipe-step">
                <div className="spine-pipe-num">03</div>
                <div className="spine-pipe-name">Practice</div>
                <div className="spine-pipe-desc">Use repetitive, task-specific and progressive exercises.</div>
              </div>
              <div className="spine-pipe-connector" />
              <div className="spine-pipe-step">
                <div className="spine-pipe-num">04</div>
                <div className="spine-pipe-name">Confidence</div>
                <div className="spine-pipe-desc">Progress balance, strength and functional independence.</div>
              </div>
              <div className="spine-pipe-connector" />
              <div className="spine-pipe-step">
                <div className="spine-pipe-num">05</div>
                <div className="spine-pipe-name">Review</div>
                <div className="spine-pipe-desc">Adjust the programme according to ongoing progress.</div>
              </div>
            </div>
          </div>

          {/* GAIT TRAINING FEATURE BOX */}
          <div className="spine-rehab-feature-box">
            <div className="spine-rehab-feature-img-wrap">
              <img
                src="/images/stroke-gait-rehabilitation.webp"
                alt="Rehabilitation gym station equipped for safe gait and functional movement practice"
                className="spine-rehab-feature-img"
                width="600"
                height="338"
                loading="lazy"
              />
            </div>
            <div className="spine-rehab-feature-text">
              <span className="section-label">Task-Specific Practice</span>
              <h3 className="spine-rehab-feature-title">Structured Gait &amp; Mobility Retraining</h3>
              <p>
                Task-specific and repetitive practice are key evidence-informed elements in neurological
                rehabilitation. At Advance Physiotherapy Centre, exercises are broken down into achievable components
                and reassembled into functional movement patterns.
              </p>
              <ul className="spine-rehab-feature-list">
                <li>Parallel bar stepping and supported gait re-education</li>
                <li>Sit-to-stand and transfer mechanics practice</li>
                <li>Upper limb reach-and-grasp functional drills</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — KEY AREAS OF REHABILITATION */}
      <section className="section spine-plan-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Core Focus Areas</span>
            <h2 className="section-title">What May Be Included in Neurological Rehabilitation?</h2>
            <p className="section-subtitle">
              Key rehabilitation components selected based on individual functional assessment findings.
            </p>
          </div>

          <div className="spine-modalities-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className="spine-modality-card">
              <div className="spine-mod-icon">🚶‍♂️</div>
              <h3>Gait Training</h3>
              <p>Practising walking, stepping patterns, and cadence according to individual functional ability.</p>
            </div>

            <div className="spine-modality-card">
              <div className="spine-mod-icon">⚖️</div>
              <h3>Balance Training</h3>
              <p>Working on postural stability and balance control during safe, supervised functional activities.</p>
            </div>

            <div className="spine-modality-card">
              <div className="spine-mod-icon">💪</div>
              <h3>Strength &amp; Mobility</h3>
              <p>Addressing muscle weakness, joint range of motion, and physical limitations with guided exercises.</p>
            </div>

            <div className="spine-modality-card">
              <div className="spine-mod-icon">🎯</div>
              <h3>Motor Control</h3>
              <p>Practising controlled movements, coordination drills, and sensory-motor integration tasks.</p>
            </div>

            <div className="spine-modality-card">
              <div className="spine-mod-icon">🛋️</div>
              <h3>Functional Transfers</h3>
              <p>Working on meaningful everyday movements such as rising from a chair, bed mobility, and reaching.</p>
            </div>

            <div className="spine-modality-card">
              <div className="spine-mod-icon">📋</div>
              <h3>Home Guidance</h3>
              <p>Structured daily activities and safe exercise strategies for consistent progress between visits.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — REHABILITATION FOR EVERYDAY LIFE */}
      <section className="section spine-everyday-section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="spine-centered-card" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <span className="section-label">Everyday Independence</span>
            <h2 className="section-title">Rehabilitation for Everyday Life</h2>
            <div className="spine-what-body">
              <p>
                Neurological rehabilitation is not only about exercises. It focuses on improving the ability to perform
                meaningful everyday activities as safely and independently as possible.
              </p>
            </div>

            {/* Visual Progression Sequence */}
            <div
              style={{
                background: '#ffffff',
                border: '1px solid var(--gray-200)',
                borderRadius: 'var(--radius-xl)',
                padding: '1.5rem',
                margin: '1.5rem 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '0.75rem',
                fontWeight: 700,
                fontSize: '1rem',
                color: 'var(--primary-800)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <span style={{ padding: '0.4rem 0.8rem', background: '#eff6ff', borderRadius: '6px' }}>Bed / Chair</span>
              <span>→</span>
              <span style={{ padding: '0.4rem 0.8rem', background: '#eff6ff', borderRadius: '6px' }}>Standing</span>
              <span>→</span>
              <span style={{ padding: '0.4rem 0.8rem', background: '#eff6ff', borderRadius: '6px' }}>Walking</span>
              <span>→</span>
              <span style={{ padding: '0.4rem 0.8rem', background: '#eff6ff', borderRadius: '6px' }}>Reaching</span>
              <span>→</span>
              <span style={{ padding: '0.4rem 0.8rem', background: '#dcfce7', color: '#166534', borderRadius: '6px' }}>
                Daily Independence
              </span>
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--gray-600)', margin: 0 }}>
              Step-by-step physical retraining to support confidence in routine home tasks.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 8 — SUPPORT FOR PATIENTS & FAMILIES */}
      <section className="section spine-plan-section">
        <div className="container">
          <div className="spine-centered-card" style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
            <span className="section-label">Caregiver Guidance</span>
            <h2 className="section-title">Support for Patients &amp; Families</h2>
            <div className="spine-what-body">
              <p>
                Neurological rehabilitation can involve family members or caregivers when appropriate, particularly
                when support is needed for safe movement, home exercise practice, or assistance with everyday activities.
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--gray-500)', marginTop: '0.75rem' }}>
                Specific movement guidance, transfer strategies, and pacing advice are provided based on the
                patient&apos;s individual clinical assessment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 — WHAT TO EXPECT AT YOUR FIRST VISIT */}
      <section className="section spine-first-visit-section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">First Consultation</span>
            <h2 className="section-title">What to Expect at Your First Visit</h2>
            <p className="section-subtitle">A clear, reassuring 3-step walkthrough of your initial appointment.</p>
          </div>

          <div className="spine-first-visit-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className="spine-visit-step">
              <div className="spine-visit-step-num">01</div>
              <h3>Discuss</h3>
              <p>Your medical history, current difficulties, daily activities, and recovery goals.</p>
            </div>

            <div className="spine-visit-step">
              <div className="spine-visit-step-num">02</div>
              <h3>Assess</h3>
              <p>Movement, strength, balance, coordination, and functional abilities are evaluated.</p>
            </div>

            <div className="spine-visit-step">
              <div className="spine-visit-step-num">03</div>
              <h3>Plan</h3>
              <p>A personalized, milestone-driven rehabilitation approach is discussed and initiated.</p>
            </div>
          </div>

          <div className="text-center" style={{ marginTop: '2.5rem' }}>
            <WhatsAppButton className="btn btn-primary btn-lg" message={bookingMessage}>
              Book Assessment on WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* SECTION 10 — WHY CHOOSE US & DOCTOR PROFILE */}
      <section className="section spine-why-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-title">Why Choose Advance Physiotherapy Centre?</h2>
            <p className="section-subtitle">
              Compassionate, personalized physical rehabilitation care in Muzaffarpur.
            </p>
          </div>

          <div className="spine-why-grid" style={{ marginBottom: '3.5rem' }}>
            <div className="spine-why-card">
              <div className="spine-why-num">1</div>
              <h3>Personalized Rehabilitation</h3>
              <p>Programmes based on individual abilities, symptoms, and functional goals.</p>
            </div>

            <div className="spine-why-card">
              <div className="spine-why-num">2</div>
              <h3>Functional Approach</h3>
              <p>Focus on meaningful movement, transfers, and everyday activities.</p>
            </div>

            <div className="spine-why-card">
              <div className="spine-why-num">3</div>
              <h3>Progressive Training</h3>
              <p>Activities progressed systematically according to ability and response.</p>
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
                {SITE.doctor} brings dedicated clinical expertise to neurological rehabilitation, guiding patients
                through structured gait re-education, postural balance training, and functional mobility programmes with
                patience and individualized care.
              </p>

              <div className="spine-doctor-trust-points">
                <div className="spine-doc-point">
                  <span className="spine-doc-check">✓</span>
                  <span>1-on-1 Neuro Assessment</span>
                </div>
                <div className="spine-doc-point">
                  <span className="spine-doc-check">✓</span>
                  <span>Compassionate Patient Care</span>
                </div>
                <div className="spine-doc-point">
                  <span className="spine-doc-check">✓</span>
                  <span>Structured Functional Training</span>
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

      {/* MEDICAL SAFETY NOTICE */}
      <section className="section spine-safety-section" style={{ paddingBottom: '2.5rem' }}>
        <div className="container">
          <div className="spine-medical-alert-box" style={{ maxWidth: '860px', margin: '0 auto' }}>
            <div className="spine-alert-badge">
              <span className="spine-alert-icon">⚠️</span>
              <span>Important Medical Notice</span>
            </div>
            <h3 className="spine-alert-heading">When Should Neurological Symptoms Be Assessed Urgently?</h3>
            <p>
              Sudden neurological symptoms such as: <strong>sudden weakness or numbness in the face, arm or leg</strong>,{' '}
              <strong>sudden difficulty speaking or understanding speech</strong>, <strong>sudden facial drooping</strong>,{' '}
              <strong>sudden loss of balance or coordination</strong>, <strong>sudden vision changes</strong>, or{' '}
              <strong>a sudden severe headache</strong> require immediate emergency medical care.
            </p>
            <p className="spine-alert-footnote">
              If neurological symptoms appear suddenly or are rapidly worsening, seek urgent emergency hospital care
              rather than waiting for a physiotherapy appointment. This website provides general information and is not
              a diagnosis.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 11 — FAQ (6 QUESTIONS) */}
      <section className="section spine-faq-section" id="faq" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Common Inquiries</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Clear answers to help you understand how neurological physical therapy supports mobility recovery.
            </p>
          </div>

          <div className="spine-faq-accordion">
            {neuroFaqs.map((faq, index) => {
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

      {/* SECTION 12 — FINAL WHATSAPP CTA */}
      <section className="section spine-cta-section">
        <div className="container">
          <div className="spine-final-cta-card text-center">
            <span className="section-label" style={{ color: 'var(--primary-200)', borderColor: 'rgba(255,255,255,0.2)' }}>
              Start Your Recovery
            </span>
            <h2 className="spine-final-title">Take the Next Step Toward Better Movement</h2>
            <p className="spine-final-sub">
              If a neurological condition is affecting movement, balance or everyday activities, speak with our
              physiotherapy team about an appropriate assessment.
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
