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

export default function PostureErgonomicsService() {
  const [openFaq, setOpenFaq] = useState(null);

  const related = getRelatedServices('posture-ergonomics', 3);
  const bookingMessage = `Hello Dr. Shahrukh, I would like to enquire about posture and ergonomic physiotherapy at Advance Physiotherapy Centre. Please let me know the available appointment time.`;

  // Exactly 6 Focused Clinical & Local FAQs
  const postureFaqs = [
    {
      q: 'Can physiotherapy help with posture?',
      a: 'Physiotherapy may help identify movement limitations, muscle endurance deficits, and daily habits that may be contributing to discomfort, while providing individualized exercise and movement guidance.',
    },
    {
      q: 'Is there one perfect posture?',
      a: 'No. People naturally change positions throughout the day. A comfortable, adaptable posture combined with regular movement breaks is more practical than trying to maintain one rigid position continuously.',
    },
    {
      q: 'Can poor posture cause back pain?',
      a: 'Posture is only one possible factor associated with discomfort. Back and neck pain can have many different causes, so individual clinical assessment is useful when symptoms persist.',
    },
    {
      q: 'Can physiotherapy help with desk-related neck pain?',
      a: 'Depending on the cause, physiotherapy may help address movement habits, upper-back strength, muscle fatigue, and workstation ergonomic factors associated with neck discomfort.',
    },
    {
      q: 'Should I change my office chair?',
      a: 'A chair is only one part of an ergonomic setup. Screen height, keyboard and mouse position, desk layout, foot support, and regular movement variety all play an important role.',
    },
    {
      q: 'Can I book posture physiotherapy in Muzaffarpur?',
      a: 'Yes. Advance Physiotherapy Centre is located in Juran Chapra, Muzaffarpur. You can contact the clinic through WhatsApp or call to enquire about an assessment.',
    },
  ];

  return (
    <article className="spine-service-page posture-service-page">
      {/* 1. SEO METADATA & STRUCTURED DATA */}
      <Seo
        title="Posture Correction & Ergonomic Physiotherapy in Muzaffarpur | Advance Physiotherapy Centre"
        description="Improve posture, movement and workplace habits with personalized physiotherapy and ergonomic guidance in Muzaffarpur. Assessment and advice based on individual needs."
        path="/services/posture-ergonomics"
        image="/images/posture-correction-physiotherapy-muzaffarpur.webp"
      />

      {/* Schema.org MedicalTherapy & Healthcare Facility */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'MedicalTherapy',
          name: 'Posture Correction & Ergonomic Physiotherapy in Muzaffarpur',
          description:
            'Improve posture, movement and workplace habits with personalized physiotherapy and ergonomic guidance in Muzaffarpur. Assessment and advice based on individual needs.',
          url: `${SITE.url}/services/posture-ergonomics`,
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
              name: 'Posture & Ergonomics',
              item: `${SITE.url}/services/posture-ergonomics`,
            },
          ],
        }}
      />

      {/* Schema.org FAQPage */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: postureFaqs.map((faq) => ({
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
          { label: 'Posture & Ergonomics' },
        ]}
      />

      {/* SECTION 1 — HERO */}
      <header className="spine-hero-section">
        <div className="container">
          <div className="spine-hero-grid">
            <div className="spine-hero-content">
              <span className="spine-eyebrow">POSTURE &amp; ERGONOMICS · MUZAFFARPUR</span>
              <h1 className="spine-hero-title">Posture Correction &amp; Ergonomic Physiotherapy in Muzaffarpur</h1>
              <p className="spine-hero-subtitle">
                Personalized physiotherapy and ergonomic guidance to help improve movement habits, workplace comfort
                and everyday posture.
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
                  <span className="spine-trust-text">1-on-1 Ergonomic Assessment</span>
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
                  src="/images/posture-correction-physiotherapy-muzaffarpur.webp"
                  alt="Physiotherapist performing professional ergonomic sitting posture and workstation assessment in clinic"
                  className="spine-hero-img"
                  width="600"
                  height="338"
                  loading="eager"
                />
                <div className="spine-hero-card-badge">
                  <span className="spine-badge-title">Workstation &amp; Posture Assessment</span>
                  <span className="spine-badge-sub">Personalized Guidance by Dr. Shahrukh Firoz</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* SECTION 2 — WHAT IS POSTURE? */}
      <section className="section spine-intro-section">
        <div className="container">
          <div className="spine-intro-grid">
            <Reveal className="spine-intro-text">
              <span className="section-label">Clinical Overview</span>
              <h2 className="section-title">What Is Posture?</h2>
              <div className="spine-prose">
                <p>
                  Posture refers to how we position and hold our body while sitting, standing, walking and performing
                  everyday activities.
                </p>
                <p>
                  There is no single &ldquo;perfect posture&rdquo; that everyone must rigidly maintain all day. However,
                  prolonged or repetitive positions may contribute to discomfort or movement limitations in some people.
                </p>
                <p>
                  Physiotherapy helps identify individual movement habits and provides practical strategies based on
                  your symptoms, work activities and daily goals.
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
                  src="/images/ergonomic-posture-assessment.webp"
                  alt="Realistic standing posture and spinal alignment assessment in clean physiotherapy clinic"
                  className="spine-diagram-img"
                  width="500"
                  height="281"
                  loading="lazy"
                />
              </div>
              <div className="spine-anatomy-display" style={{ marginTop: '0.85rem' }}>
                <h4 className="spine-anatomy-part-title">Comprehensive Postural Evaluation</h4>
                <p className="spine-anatomy-part-desc">
                  Observing head, neck, shoulder, spinal and pelvic alignment during everyday functional positions.
                </p>
                <div className="spine-doctor-trust-points" style={{ marginTop: '0.5rem', marginBottom: 0 }}>
                  <span className="spine-doc-point">Cervical Alignment</span>
                  <span className="spine-doc-point">Shoulder Positioning</span>
                  <span className="spine-doc-point">Lumbar Support</span>
                  <span className="spine-doc-point">Weight Distribution</span>
                </div>
              </div>
              <p className="spine-disclaimer-note">Postural guidance is customized to your daily functional routine.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 3 — HOW EVERYDAY HABITS CAN AFFECT YOUR COMFORT */}
      <section className="section spine-symptoms-section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Everyday Factors</span>
            <h2 className="section-title">How Everyday Habits Can Affect Your Comfort</h2>
            <p className="section-subtitle">
              Prolonged, repetitive, or static postures may contribute to physical fatigue and muscular discomfort over
              time.
            </p>
          </div>

          <div className="spine-symptoms-grid">
            {[
              { title: 'Long Hours at a Desk', desc: 'Remaining in one static sitting position for hours can lead to muscle tightness.' },
              { title: 'Mobile Phone Use', desc: 'Looking downward for extended periods places extra demands on neck muscles.' },
              { title: 'Prolonged Static Sitting', desc: 'Reduced movement variety can cause spinal stiffness and muscle fatigue.' },
              { title: 'Repetitive Work Tasks', desc: 'Repeated reaching or typing motions without breaks may increase strain.' },
              { title: 'Poor Workstation Setup', desc: 'Unadjusted screen heights or chair angles can encourage awkward positions.' },
            ].map((item) => (
              <div key={item.title} className="spine-symptom-item">
                <span className="spine-symptom-check">✓</span>
                <span className="spine-symptom-text">
                  <strong>{item.title}:</strong> {item.desc}
                </span>
              </div>
            ))}
          </div>

          {/* WORKSTATION SETUP VISUAL SHOWCASE */}
          <div className="spine-sciatica-showcase" style={{ marginTop: '3rem' }}>
            <div className="spine-sciatica-visual-box">
              <img
                src="/images/office-workstation-ergonomics.webp"
                alt="Realistic ergonomic computer workstation arrangement with supportive chair and elevated monitor"
                className="spine-sciatica-img"
                width="600"
                height="338"
                loading="lazy"
              />
            </div>
            <div className="spine-sciatica-text">
              <span className="section-label">Workplace Setup</span>
              <h3 className="spine-sciatica-heading">Optimizing Your Workstation Setup</h3>
              <p>
                An ergonomic desk setup supports natural spinal curves, keeps screens at eye level, and ensures relaxed
                shoulder positioning during long working hours.
              </p>
              <div className="spine-doctor-trust-points" style={{ marginTop: '1rem', marginBottom: '1.25rem' }}>
                <span className="spine-doc-point">📍 Screen at Eye Level</span>
                <span className="spine-doc-point">📍 Relaxed Shoulders</span>
                <span className="spine-doc-point">📍 Supported Forearms</span>
                <span className="spine-doc-point">📍 Feet Supported on Floor</span>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--gray-500)' }}>
                Small adjustments can significantly reduce cumulative physical fatigue across your workday.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — COMMON POSTURE-RELATED CONCERNS */}
      <section className="section spine-problems-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Common Presentations</span>
            <h2 className="section-title">Common Concerns We May Help With</h2>
            <p className="section-subtitle">
              Physiotherapy provides targeted exercise and ergonomic strategies for everyday postural discomfort.
            </p>
          </div>

          <div className="spine-cards-grid">
            <div className="spine-card">
              <div className="spine-card-num">01</div>
              <h3 className="spine-card-title">Neck &amp; Shoulder Discomfort</h3>
              <p className="spine-card-desc">
                Discomfort that may be associated with prolonged desk sitting, laptop use, or repetitive upper-body
                tasks.
              </p>
            </div>

            <div className="spine-card">
              <div className="spine-card-num">02</div>
              <h3 className="spine-card-title">Upper Back Tightness</h3>
              <p className="spine-card-desc">
                Muscular tension or stiffness between the shoulder blades that can develop after extended periods of
                slouching.
              </p>
            </div>

            <div className="spine-card">
              <div className="spine-card-num">03</div>
              <h3 className="spine-card-title">Lower Back Discomfort</h3>
              <p className="spine-card-desc">
                Aching discomfort that some people experience during prolonged sitting or when transitioning from
                chairs.
              </p>
            </div>

            <div className="spine-card">
              <div className="spine-card-num">04</div>
              <h3 className="spine-card-title">Work-Related Fatigue</h3>
              <p className="spine-card-desc">
                Physical fatigue caused by poorly arranged desk heights, lack of movement breaks, or awkward screen
                angles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — ERGONOMIC ASSESSMENT */}
      <section className="section spine-process-section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Assessment Workflow</span>
            <h2 className="section-title">What Is an Ergonomic Assessment?</h2>
            <p className="section-subtitle">
              An ergonomic assessment evaluates how your workstation, daily activities, and movement habits interact
              with your body.
            </p>
          </div>

          {/* 4-Step Animated Process */}
          <div className="spine-pipeline-wrapper" style={{ marginBottom: '3rem' }}>
            <div className="spine-pipeline-steps">
              <div className="spine-pipe-step">
                <div className="spine-pipe-num">01</div>
                <div className="spine-pipe-name">Observe</div>
                <div className="spine-pipe-desc">Understand your working positions, desk setup and daily routine.</div>
              </div>
              <div className="spine-pipe-connector" />
              <div className="spine-pipe-step">
                <div className="spine-pipe-num">02</div>
                <div className="spine-pipe-name">Identify</div>
                <div className="spine-pipe-desc">Pinpoint habits or setup factors contributing to physical strain.</div>
              </div>
              <div className="spine-pipe-connector" />
              <div className="spine-pipe-step">
                <div className="spine-pipe-num">03</div>
                <div className="spine-pipe-name">Adjust</div>
                <div className="spine-pipe-desc">Suggest practical changes to chair, desk, screen and posture.</div>
              </div>
              <div className="spine-pipe-connector" />
              <div className="spine-pipe-step">
                <div className="spine-pipe-num">04</div>
                <div className="spine-pipe-name">Reassess</div>
                <div className="spine-pipe-desc">Review how the modifications feel and refine your routine.</div>
              </div>
            </div>
          </div>

          {/* ERGONOMIC FEATURE BOX */}
          <div className="spine-rehab-feature-box">
            <div className="spine-rehab-feature-img-wrap">
              <img
                src="/images/physiotherapy-ergonomic-assessment.webp"
                alt="Physiotherapist explaining ergonomic workstation adjustment and posture tips"
                className="spine-rehab-feature-img"
                width="600"
                height="338"
                loading="lazy"
              />
            </div>
            <div className="spine-rehab-feature-text">
              <span className="section-label">Practical Guidance</span>
              <h3 className="spine-rehab-feature-title">Individualized Posture &amp; Desk Solutions</h3>
              <p>
                At Advance Physiotherapy Centre, Dr. Shahrukh Firoz reviews your daily computer habits and recommends
                realistic, actionable adjustments that fit your specific workspace.
              </p>
              <ul className="spine-rehab-feature-list">
                <li>Customized desk height, chair lumbar support, and monitor placement advice</li>
                <li>Micro-break strategies and desk-friendly spinal mobility drills</li>
                <li>Targeted postural strengthening exercises for neck and upper back muscles</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — SIMPLE CHANGES THAT MAY HELP */}
      <section className="section spine-plan-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Practical Tips</span>
            <h2 className="section-title">Simple Changes That May Help</h2>
            <p className="section-subtitle">
              Evidence-informed workplace habits to improve comfort throughout your day.
            </p>
          </div>

          <div className="spine-modalities-grid">
            <div className="spine-modality-card">
              <div className="spine-mod-icon">🔄</div>
              <h3>Change Position Regularly</h3>
              <p>Avoid staying locked in one static position for long unbroken stretches.</p>
            </div>

            <div className="spine-modality-card">
              <div className="spine-mod-icon">🖥️</div>
              <h3>Set Up Screen Comfortably</h3>
              <p>Position your monitor at eye level to avoid repeatedly bending your neck downward.</p>
            </div>

            <div className="spine-modality-card">
              <div className="spine-mod-icon">🦶</div>
              <h3>Support Your Feet</h3>
              <p>Keep your feet flat on the floor or on a stable footrest when seated.</p>
            </div>

            <div className="spine-modality-card">
              <div className="spine-mod-icon">🚶‍♂️</div>
              <h3>Move Throughout the Day</h3>
              <p>Take short 1-minute walking or standing breaks every 45–60 minutes.</p>
            </div>

            <div className="spine-modality-card">
              <div className="spine-mod-icon">🪑</div>
              <h3>Adjust Your Workspace</h3>
              <p>Tailor your chair, desk height, keyboard and mouse to suit your body dimensions.</p>
            </div>

            <div className="spine-modality-card">
              <div className="spine-mod-icon">🧘‍♂️</div>
              <h3>Gentle Desk Mobility</h3>
              <p>Perform simple shoulder rolls and neck stretches during brief workday pauses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — POSTURE + MOVEMENT (VARIETY OVER RIGIDITY) */}
      <section className="section spine-everyday-section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="spine-centered-card" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <span className="section-label">Movement Principle</span>
            <h2 className="section-title">Posture Is More Than Sitting Straight</h2>
            <div className="spine-what-body">
              <p>
                Good movement is not about holding one rigid position all day. Your body is designed to move and change
                positions frequently.
              </p>
            </div>

            {/* Visual Movement Sequence */}
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
              <span style={{ padding: '0.4rem 0.8rem', background: '#eff6ff', borderRadius: '6px' }}>Sit</span>
              <span>→</span>
              <span style={{ padding: '0.4rem 0.8rem', background: '#eff6ff', borderRadius: '6px' }}>Stand</span>
              <span>→</span>
              <span style={{ padding: '0.4rem 0.8rem', background: '#eff6ff', borderRadius: '6px' }}>Walk</span>
              <span>→</span>
              <span style={{ padding: '0.4rem 0.8rem', background: '#eff6ff', borderRadius: '6px' }}>Stretch / Move</span>
              <span>→</span>
              <span style={{ padding: '0.4rem 0.8rem', background: '#dcfce7', color: '#166534', borderRadius: '6px' }}>
                Return to Work
              </span>
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--gray-600)', margin: 0 }}>
              Movement variety and posture transitions provide far better long-term comfort than static rigidity.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 8 — HOW PHYSIOTHERAPY CAN HELP */}
      <section className="section spine-plan-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Our Approach</span>
            <h2 className="section-title">How Physiotherapy Can Help</h2>
            <p className="section-subtitle">
              A comprehensive approach combining clinical assessment, targeted exercise, and ergonomic advice.
            </p>
          </div>

          <div className="spine-modalities-grid">
            <div className="spine-modality-card">
              <div className="spine-mod-icon">🔍</div>
              <h3>Movement Assessment</h3>
              <p>Understanding spinal mobility, muscle strength, and relevant movement patterns.</p>
            </div>

            <div className="spine-modality-card">
              <div className="spine-mod-icon">🏋️‍♂️</div>
              <h3>Individualized Exercise</h3>
              <p>Targeted strengthening exercises selected according to your physical needs and posture goals.</p>
            </div>

            <div className="spine-modality-card">
              <div className="spine-mod-icon">🖥️</div>
              <h3>Ergonomic Guidance</h3>
              <p>Practical suggestions for your workstation, seating, monitor height, and daily activities.</p>
            </div>

            <div className="spine-modality-card">
              <div className="spine-mod-icon">🌱</div>
              <h3>Habit &amp; Activity Guidance</h3>
              <p>Helping you build sustainable movement routines that easily integrate into your workday.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 — WHO MAY BENEFIT? */}
      <section className="section spine-symptoms-section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Who It Helps</span>
            <h2 className="section-title">Who May Benefit From Posture &amp; Ergonomic Guidance?</h2>
            <p className="section-subtitle">
              Practical guidance for individuals with sedentary, computer-based, or repetitive daily routines.
            </p>
          </div>

          <div className="spine-cards-grid">
            <div className="spine-card">
              <div className="spine-card-num">01</div>
              <h3 className="spine-card-title">Office Professionals</h3>
              <p className="spine-card-desc">People spending prolonged hours at computer desks, meetings, and laptops.</p>
            </div>

            <div className="spine-card">
              <div className="spine-card-num">02</div>
              <h3 className="spine-card-title">Students</h3>
              <p className="spine-card-desc">Individuals spending extended periods studying, reading, or using digital screens.</p>
            </div>

            <div className="spine-card">
              <div className="spine-card-num">03</div>
              <h3 className="spine-card-title">Remote &amp; Hybrid Workers</h3>
              <p className="spine-card-desc">People working from home without an ergonomically optimized workspace setup.</p>
            </div>

            <div className="spine-card">
              <div className="spine-card-num">04</div>
              <h3 className="spine-card-title">People With Recurring Discomfort</h3>
              <p className="spine-card-desc">Individuals whose daily routines contribute to recurring neck, shoulder, or back tightness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 — WHAT TO EXPECT AT YOUR FIRST VISIT */}
      <section className="section spine-first-visit-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">First Consultation</span>
            <h2 className="section-title">What to Expect at Your First Visit</h2>
            <p className="section-subtitle">A clear, patient-friendly 3-step walkthrough of your initial appointment.</p>
          </div>

          <div className="spine-first-visit-grid">
            <div className="spine-visit-step">
              <div className="spine-visit-step-num">01</div>
              <h3>Discuss</h3>
              <p>Your symptoms, daily routine, workstation arrangement, and recovery goals.</p>
            </div>

            <div className="spine-visit-step">
              <div className="spine-visit-step-num">02</div>
              <h3>Assess</h3>
              <p>Relevant movement, posture, spinal mobility, and functional factors are evaluated.</p>
            </div>

            <div className="spine-visit-step">
              <div className="spine-visit-step-num">03</div>
              <h3>Plan</h3>
              <p>Personalized physiotherapy and practical ergonomic guidance are discussed and initiated.</p>
            </div>
          </div>

          <div className="text-center" style={{ marginTop: '2.5rem' }}>
            <WhatsAppButton className="btn btn-primary btn-lg" message={bookingMessage}>
              Book Appointment on WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* SECTION 11 — WHY CHOOSE US & DOCTOR PROFILE */}
      <section className="section spine-why-section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-title">Why Choose Advance Physiotherapy Centre?</h2>
            <p className="section-subtitle">
              Practical, personalized physical therapy and ergonomic guidance in Muzaffarpur.
            </p>
          </div>

          <div className="spine-why-grid" style={{ marginBottom: '3.5rem' }}>
            <div className="spine-why-card">
              <div className="spine-why-num">1</div>
              <h3>Personalized Guidance</h3>
              <p>Recommendations based on your individual symptoms, workspace, and goals.</p>
            </div>

            <div className="spine-why-card">
              <div className="spine-why-num">2</div>
              <h3>Practical Approach</h3>
              <p>Focus on changes that can realistically fit into your daily work life.</p>
            </div>

            <div className="spine-why-card">
              <div className="spine-why-num">3</div>
              <h3>Movement-Focused Care</h3>
              <p>Assessment and targeted exercises tailored to your individual needs.</p>
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
                {SITE.doctor} provides clinical posture evaluations and workplace ergonomic consultations at Advance
                Physiotherapy Centre, helping desk workers and students resolve postural fatigue through targeted
                exercises and realistic workspace modifications.
              </p>

              <div className="spine-doctor-trust-points">
                <div className="spine-doc-point">
                  <span className="spine-doc-check">✓</span>
                  <span>Ergonomic Desk Assessment</span>
                </div>
                <div className="spine-doc-point">
                  <span className="spine-doc-check">✓</span>
                  <span>Targeted Postural Exercises</span>
                </div>
                <div className="spine-doc-point">
                  <span className="spine-doc-check">✓</span>
                  <span>Practical Workday Solutions</span>
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
              <span>When to Seek Professional Assessment</span>
            </div>
            <h3 className="spine-alert-heading">Important Clinical Safety Notice</h3>
            <p>
              Persistent, severe or worsening pain requires appropriate professional assessment, especially when
              accompanied by: <strong>significant muscle weakness</strong>, <strong>numbness or tingling in arms or legs</strong>,{' '}
              <strong>loss of coordination</strong>, <strong>pain following an acute traumatic injury</strong>, or{' '}
              <strong>changes in bladder or bowel control</strong>.
            </p>
            <p className="spine-alert-footnote">
              This website provides general educational information and is not a clinical diagnosis. If you are
              concerned about your symptoms, seek appropriate medical care.
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
              Clear answers to help you understand posture, ergonomics, and physical therapy care.
            </p>
          </div>

          <div className="spine-faq-accordion">
            {postureFaqs.map((faq, index) => {
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
            <h2 className="spine-final-title">Make Your Everyday Movement More Comfortable</h2>
            <p className="spine-final-sub">
              If work, study or daily activities are contributing to recurring discomfort, speak with our physiotherapy
              team about an appropriate assessment.
            </p>

            <div className="spine-final-actions">
              <WhatsAppButton className="btn btn-primary btn-lg spine-final-wa-btn" message={bookingMessage}>Book Appointment</WhatsAppButton>
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
